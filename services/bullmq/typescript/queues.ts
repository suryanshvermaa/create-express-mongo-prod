import { Queue } from "bullmq";
import connection from "./connection";

export const emailQueue=new Queue('email-queue',connection);
export const emailRetryQueue=new Queue('email-retry-queue',connection);