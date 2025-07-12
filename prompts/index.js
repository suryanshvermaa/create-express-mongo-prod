exports.projectPrompt={
    type: "text",
    name: "projectName",
    message: "Project name:",
    initial: "express-app"
}

exports.packageManagerPrompt={
    type: "select",
    name: "packageManager",
    message: "Package manager:",
    choices: [
        { title: "npm", value: "npm" },
        { title: "yarn", value: "yarn" },
        { title: "pnpm", value: "pnpm" }
    ],
    initial: 0
}

exports.languagePrompt={
    type: "select",
    name: "language",
    message: "language",
    choices: [
        { title: "typescript", value: "typescript" },
        { title: "javascript", value: "javascript" }
    ],
    initial: 0
}