import "dotenv/config";
const connection={
    connection:{
        host: process.env.emailQueue!,
        port: 6379,
        password: process.env.REDIS_PASSWORD! // if protected
    }
}

export default connection;