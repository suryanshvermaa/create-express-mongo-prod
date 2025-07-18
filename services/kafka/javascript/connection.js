import { Kafka } from "kafkajs";

const kafka=new Kafka({
    clientId:"my-app",
    brokers:["localhost:9092"]
})

export const kafkaAdmin=kafka.admin();
export const kafkaProducer=kafka.producer();
export const kafkaConsumer=kafka.consumer({
    groupId:"testing-1",
});