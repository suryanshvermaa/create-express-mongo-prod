const { packages, languages, orms } = require("../constants/index.js");

const values={
    projectName: 'express-app',
    packageManager: packages.NPM,
    language: languages.JAVASCRIPT,
    databaseORM: orms.MONGOOSE,
    features: new Array(0),
}

module.exports=values;