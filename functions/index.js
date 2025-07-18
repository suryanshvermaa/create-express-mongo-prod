const {execSync}=require("child_process");
const fs=require("fs");
const path=require("path");
const values = require("../state/values.js");
const { features } = require("../constants/index.js");
const degit=require("degit");

/**
 * 
 * @param {string} repo 
 * @param {string} branch 
 */
exports.cloneRepo=async(repo,branch)=>{
    console.log(`\n📦 Cloning starter template...`)
    await degit(`${repo}#${branch}`).clone(values.projectName);
    console.log(`📦 Cloning template sucessful.\n`)
}

/**
 * 
 * @param {string} projectName 
 */
exports.packageNameInpackageJson=async(projectName)=>{
    const pkgPath = path.resolve(`${projectName}/package.json`);
    const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    if(projectName=="."){
        const pwdArray=process.cwd().split("/");
        const name=pwdArray[pwdArray.length-1];
        pkgJson.name= name;
    }else{
        pkgJson.name = projectName;
    }
    fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));
}

/**
 * 
 * @param {string} packageName 
 * @param {string} packageManager 
 */
exports.installDependencies=(packageName,packageManager)=>{
    console.log(`\n📥 Installing dependencies...\n`);
    if(packageName=="."){
        execSync(`${packageManager} install`,{stdio:"inherit"});
    }else{
        execSync(`cd ${packageName} && ${packageManager} install`,{stdio:"inherit"});
    }
    console.log(`\n🌐 Dependencies installation sucessful\n`);
}

exports.addService=async(serviceName)=>{
    const language=values.language;
    const packageName=values.projectName;
    if(packageName=="."){
        execSync(`mkdir -p src/services && cd src/services && mkdir -p ${serviceName}`);
        const srcServicePath = path.resolve(__dirname,'../','services', serviceName , language);
        const distServicePath=path.resolve(`src/services/${serviceName}`);
        const files=fs.readdirSync(srcServicePath);
        for(const file of files){
            fs.copyFileSync(srcServicePath+"/"+file,distServicePath+"/"+file)
        }
    }else{
        execSync(`mkdir -p ${packageName}/src/services && cd ${packageName}/src/services && mkdir -p ${serviceName}`);
        const srcServicePath = path.resolve(__dirname,'../','services', serviceName , language);
        const distServicePath=path.resolve(`${packageName}/src/services/${serviceName}`);
        const files=fs.readdirSync(srcServicePath);
        for(const file of files){
            fs.copyFileSync(srcServicePath+"/"+file,distServicePath+"/"+file)
        }
    }
}

exports.resolveExtraDependencies=async()=>{
    if(values.features.includes(features.BULL_MQ)){
        this.addService(features.BULL_MQ);
        execSync(`${values.packageManager} install bullmq`,{stdio:"inherit"});
    }
    else if(values.features.includes(features.SOCKET_IO)){
        this.addService(features.SOCKET_IO);
        execSync(`${values.packageManager} install socket.io`,{stdio:"inherit"});
    }else if(values.features.includes(features.KAFKA)){
        this.addService(features.KAFKA);
        execSync(`${values.packageManager} install kafkajs`,{stdio:"inherit"});
    }else if(values.features.includes(features.REDIS)){
        this.addService(features.REDIS);
        execSync(`${values.packageManager} install ioredis`,{stdio:"inherit"});
    }
}