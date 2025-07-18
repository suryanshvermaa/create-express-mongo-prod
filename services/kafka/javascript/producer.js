import { kafkaProducer } from "./connection.js"

/**
 * 
 * @param {object} data object
 */
const produce=async(data)=>{
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