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

exports.featuresPrompt = {
    type: "multiselect",
    name: "features",
    message: "Select backend features to include:",
    choices: [
        { title: "GraphQL", value: "graphql" },
        { title: "AWS S3", value: "awsS3" }
    ],
    hint: "- Space to select. Return to submit",
    min: 0
};

// In future may be i can add
exports.tools={
    type:'multiselect',
    name: 'tools',
    choices: [
        { title: 'ESLint' , value: 'eslint' },
        { title: 'Prettier', value: 'prettier' },
        { title: 'Dockerfile', value: 'Dockerfile' },
        { title: 'Dockerfile', value: 'docker-compose' },
        { title: 'Husky', value: 'husky' }
    ],
    hint: '- Space to select.'
}