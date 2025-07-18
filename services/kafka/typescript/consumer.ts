import { kafkaConsumer } from "./connection"

const consume=async()=>{
    await kafkaConsumer.connect();
    await kafkaConsumer.subscribe({
        topic:'testing',
        fromBeginning:true
    })

    await kafkaConsumer.run({
        eachMessage: async({topic,partition,message})=>{
            console.log("topic: ",topic,"partition ",partition,"message: ",message.value?.toString());
        }
    })
}

export default consume;