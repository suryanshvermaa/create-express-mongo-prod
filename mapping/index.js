const values=require("../state/values.js");
const {languages,features,orms,packages}=require("../constants/index.js");
const repos=require("../repos/index.js");

exports.propertiesToBranch=()=>{
    // languages
    if(values.language==languages.TYPESCRIPT){
        const typescript=repos[0];
        // orms
        if(values.databaseORM==orms.MONGOOSE){
            const mongoose=typescript.databases[0];
            if(values.features.length==0) return mongoose.branch.EXPRESS;
            else if(values.features.includes(features.AWS_S3)&&values.features.includes(features.GRAPH_QL)) return mongoose.branch.graphQL_AWS_S3;
            else if(values.features.includes(features.AWS_S3)) return mongoose.branch.AWS_S3;
            else if(values.features.includes(features.GRAPH_QL)) return mongoose.branch.graphQL;
            else throw new Error("Incorrect features");
        }
        else if(values.databaseORM==orms.PRISMA){
            const prisma=typescript.databases[1];
            if(values.features.length==0) return prisma.branch.EXPRESS;
            else if(values.features.includes(features.AWS_S3)) return prisma.branch.AWS_S3;
            else throw new Error("This is feature under development in typescript!")
        }
        else throw new Error("This orm is not exists.");
    }
    else if(values.language==languages.JAVASCRIPT){
        const javascript=repos[1];
        if(values.databaseORM==orms.MONGOOSE){
            const mongoose=javascript.databases[0];
            if(values.features.length==0) return mongoose.branch.EXPRESS;
            else throw new Error("This is feature under development in javascript!")
        }
        else throw new Error("This orm is not exists.");
    }
    else{
        throw new Error("Error in language selecting")
    }
}

exports.getRepoName=()=>{
    if(values.language==languages.TYPESCRIPT) return repos[0].repo;
    else if(values.language==languages.JAVASCRIPT) return repos[1].repo;
    else throw new Error("Repo not exists");
}