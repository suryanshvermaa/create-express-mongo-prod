const repos=[
    {
        id: 1,
        language: "Typescript",
        repo:"https://github.com/suryanshvermaa/nodeMongoTsTemplate.git",
        databases:[
            {
                name: "MONGO",
                branch:{
                    EXPRESS:"main",
                    AWS_S3:"express-awsS3",
                    graphQL:"graphqlWithMongo",
                    graphQL_AWS_S3:"express-mongoose-graphql-awsS3",
                }
            },
            {
                name:"POSTGRES",
                branch:{
                    EXPRESS:"prisma",
                    AWS_S3:"express-prisma-awsS3",
                    graphQL:"graphqlWithPrisma",
                    graphQL_AWS_S3:"express-mongoose-graphql-awsS3_prisma",
                }
            }
        ]
    },

    {
        id: 2,
        language: "Javascript",
        repo: "https://github.com/suryanshvermaa/nodeMongoJsTemplate.git",
        databases:[
            {
                name: "MONGO",
                branch: {
                    EXPRESS:"main",
                    AWS_S3:"express-awsS3",
                    graphQL:"graphqlWithMongo",
                    graphQL_AWS_S3:"express-mongoose-graphql-awsS3",
                }
            },
            {
                name: "POSTGRES",
                branch: {
                    EXPRESS:"main",
                    AWS_S3:"awsS3_prisma",
                    graphQL:"graphqlWithPrisma",
                    graphQL_AWS_S3:"express-mongoose-graphql-awsS3_prisma",
                }
            }
        ]
    }
]

module.exports=repos;