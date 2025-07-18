import redis from "./connection.js"

/**
 * 
 * @param {object} data
 */
export const setHomepageFAQCache=async(data)=>{
    await redis.set(`homepage:faqCache`,JSON.stringify(data));
    await redis.expire(`faqCache`,60*60*24);
}

/**
 * 
 * @returns {object}
 */
export const getHomepageFAQCache=async()=>{
    const res=await redis.get(`homepage:faqCache`);
    return JSON.parse(res);
}