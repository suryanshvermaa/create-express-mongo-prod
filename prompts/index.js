const {packages, languages, features, tools}=require("../constants/index.js");

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
        { title: "npm", value:  packages.NPM},
        { title: "yarn", value: packages.YARN },
        { title: "pnpm", value: packages.PNPM }
    ],
    initial: 0
}

exports.languagePrompt={
    type: "select",
    name: "language",
    message: "language",
    choices: [
        { title: "typescript", value: languages.TYPESCRIPT },
        { title: "javascript", value: languages.JAVASCRIPT }
    ],
    initial: 0
}

exports.featuresPrompt = {
    type: "multiselect",
    name: "features",
    message: "Select backend features to include:",
    choices: [
        { title: "GraphQL", value: features.GRAPH_QL },
        { title: "AWS S3", value: features.AWS_S3 }
    ],
    hint: "- Space to select. Return to submit",
    min: 0
};

// In future may be i can add
exports.toolsPrompt={
    type:'multiselect',
    name: 'tools',
    choices: [
        { title: 'ESLint' , value: tools.ES_LINT },
        { title: 'Prettier', value: tools.PRETTIER },
        { title: 'Dockerfile', value: tools.DOCKER_FILE },
        { title: 'Docker Compose', value: tools.DOCKER_COMPOSE },
        { title: 'Husky', value: tools.HUSKY }
    ],
    hint: '- Space to select.'
}