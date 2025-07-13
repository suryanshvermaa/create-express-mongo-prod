const {packages, languages, features, tools, orms}=require("../constants/index.js");

exports.projectPrompt={
    type: "text",
    name: "projectName",
    message: "Project name: ",
    initial: "express-app"
}

exports.packageManagerPrompt={
    type: "select",
    name: "packageManager",
    message: "Package manager: ",
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
    message: "language: ",
    choices: [
        { title: "javascript", value: languages.JAVASCRIPT },
        { title: "typescript", value: languages.TYPESCRIPT },
    ],
    initial: 0
}

exports.ormsPrompt={
    type: "select",
    name: "orm",
    message: "orm: ",
    choices: [
        { title: "mongoose with MongoDB", value: orms.MONGOOSE },
        { title: "prisma with postgres", value: orms.PRISMA },
    ],
    initial: 0
}

exports.featuresPrompt = {
    type: "multiselect",
    name: "features",
    message: "Select backend features to include:",
    instructions: false,
    choices: [
        { title: "GraphQL", value: features.GRAPH_QL },
        { title: "AWS S3", value: features.AWS_S3 },
        { title: "BullMq", value: features.BULL_MQ },
    ],
    hint: "- Space to select.",
    min: 0
};

// In future may be i can add
exports.toolsPrompt={
    type:'multiselect',
    name: 'tools',
    instructions: false,
    choices: [
        { title: 'ESLint' , value: tools.ES_LINT },
        { title: 'Prettier', value: tools.PRETTIER },
        { title: 'Dockerfile', value: tools.DOCKER_FILE },
        { title: 'Docker Compose', value: tools.DOCKER_COMPOSE },
        { title: 'Husky', value: tools.HUSKY }
    ],
    hint: '- Space to select.'
}