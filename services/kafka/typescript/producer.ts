import { kafkaProducer } from "./connection"

const produce=async(data:object)=>{
    await kafkaProducer.connect();
    await kafkaProducer.send({
        topic:"testing",
        messages:[
            {key:"one",value:JSON.stringify(data),partition:0}
        ]
    })
    await kafkaProducer.disconnect();
}

export default produce;