import {Redis} from "ioredis";
import "dotenv/config";

const redis=new Redis({
    port: 6379,
    password: process.env.REDIS_PASSWORD,
    host:"localhost",
})

export default redis;