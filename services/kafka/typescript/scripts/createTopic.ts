import { kafkaAdmin } from "../connection";

const createTopic=async()=>{
    await kafkaAdmin.connect();
    await kafkaAdmin.createTopics({
        topics:[{
            topic:"testing",
            numPartitions: 1
        }]
    })
    await kafkaAdmin.disconnect();
}

createTopic();