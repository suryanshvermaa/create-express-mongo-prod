#!/usr/bin/env node

const prompts = require("prompts");
const { projectPrompt, packageManagerPrompt, languagePrompt, featuresPrompt, ormsPrompt } = require("../prompts/index.js");
const values=require("../state/values.js");
const { cloneRepo, renameProject, packageNameInpackageJson, installDependencies, resolveExtraDependencies } = require("../functions/index.js");
const {getRepoName,getBranchName}=require("../mapping/index.js");

(async () => {
  const projectName = await prompts(projectPrompt);
  const packageManager = await prompts(packageManagerPrompt);
  const language = await prompts(languagePrompt);
  const orm=await prompts(ormsPrompt);
  const features=await prompts(featuresPrompt);

  values.projectName = projectName.projectName;
  values.packageManager = packageManager.packageManager;
  values.language = language.language;
  values.databaseORM = orm.orm;
  values.features.push(...(features.features));
  
  // clone repo
  const repo=getRepoName();
  const branch=getBranchName();
  await cloneRepo(repo,branch);
  await renameProject(values.projectName, repo);
  await resolveExtraDependencies();
  await packageNameInpackageJson(values.projectName);
  await installDependencies(values.projectName,values.packageManager);
})();
