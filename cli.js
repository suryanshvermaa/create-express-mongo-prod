#!/usr/bin/env node

const degit = require("degit");
const prompts = require("prompts");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

(async () => {
  const response = await prompts({
    type: "text",
    name: "projectName",
    message: "Project name:",
    initial: "express-app"
  });
  const packageManager = await prompts({
    type: "select",
    name: "packageManager",
    message: "Package manager:",
    choices: [
      { title: "npm", value: "npm" },
      { title: "yarn", value: "yarn" },
      { title: "pnpm", value: "pnpm" }
    ],
    initial: 0
  });
  const language = await prompts({
    type: "select",
    name: "language",
    message: "language",
    choices: [
      { title: "typescript", value: "typescript" },
      { title: "javascript", value: "javascript" }
    ],
    initial: 0
  });
  const packageManagerChoice = packageManager.packageManager;
  const projectDir = response.projectName;
  const tsRepo = "suryanshvermaa/nodeMongoTsTemplate";
  const jsRepo = "suryanshvermaa/nodeMongoJsTemplate";

  if(language.language=="typescript"){
    await degit(tsRepo).clone(projectDir);
  }
  else if(language.language=="javascript"){
    await degit(jsRepo).clone(projectDir);
  }else{
    console.log("error in creating template");
  }
  console.log(`\n📦 Cloning starter template into "${projectDir}"...\n`);
  // --- Modify package.json ---
  const pkgPath = path.join(projectDir, "package.json");
  const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

  pkgJson.name = projectDir;\

  fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));
  console.log(`\n📥 Installing dependencies...\n`);
  const packageManagerCommands = {
    npm: "npm install",
    yarn: "yarn install",
    pnpm: "pnpm install"
  };
  if(packageManagerChoice === "yarn") {
    execSync(`cd ${projectDir} && yarn install`, { stdio: "inherit" });
    console.log(`\n✅ Done!`);
    console.log(`\nTo start:\ncd ${projectDir}\n  yarn dev\n`);
    
  }
  else if(packageManagerChoice === "pnpm") {
    execSync(`cd ${projectDir} && pnpm install`, { stdio: "inherit" });
    console.log(`\n✅ Done!`);
    console.log(`\nTo start:\ncd ${projectDir}\n pnpm dev\n`);
  }
  else{
    execSync(`cd ${projectDir} && npm install`, { stdio: "inherit" });
    console.log(`\n✅ Done!`);
    console.log(`\nTo start:\ncd ${projectDir}\n npm run dev\n`);
  }
})();
