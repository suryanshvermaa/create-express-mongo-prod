import { Worker } from "bullmq";
import connection from "./connection.js";
import { emailRetryQueue } from "./queues.js";

const emailWorker=new Worker('email-queue',async (job)=>{
    try {
        // job logic
    } catch (error) {
        emailRetryQueue.add(`${Date.now().toLocaleString()}-retry-mail`,job.data);
    }
},connection)

const retryEmailWorker=new Worker('email-retry-queue',async (job)=>{
    try {
        // retry mail logic
    } catch (error) {
        // on failed logic
    }
},connection);