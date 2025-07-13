const {execSync}=require("child_process");
const fs=require("fs");
const path=require("path");
const values = require("../state/values.js");
const { features } = require("../constants/index.js");

/**
 * 
 * @param {string} repo 
 * @param {string} branch 
 */
exports.cloneRepo=async(repo,branch)=>{
    console.log(`\n📦 Cloning starter template...`)
    execSync(`git clone --branch ${branch} --single-branch ${repo}`);
    console.log(`📦 Cloning template sucessful.\n`)
}

/**
 * 
 * @param {string} projectName
 * @param {string} repoName
 */
exports.renameProject=async(projectName,repoName)=>{
    repoName=repoName.slice(repoName.lastIndexOf("/")+1,repoName.indexOf(".git"));
    execSync(`mv ${repoName} ${projectName}`);
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
}