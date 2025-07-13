const repos=[
    {
        id: 1,
        language: "Typescript",
        repo:"suryanshvermaa/nodeMongoTsTemplate.git",
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
                    graphQL:"express-prisma-graphql",
                    graphQL_AWS_S3:"express-prisma-graphql-awsS3",
                }
            }
        ]
    },

    {
        id: 2,
        language: "Javascript",
        repo: "suryanshvermaa/nodeMongoJsTemplate.git",
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
                    EXPRESS:"prisma",
                    AWS_S3:"express-prisma-awsS3",
                    graphQL:"express-prisma-graphql",
                    graphQL_AWS_S3:"express-prisma-graphql-awsS3",
                }
            }
        ]
    }
]

module.exports=repos;