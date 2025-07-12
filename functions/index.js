const {execSync}=require("child_process");
const fs=require("fs");
const path=require("path");

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