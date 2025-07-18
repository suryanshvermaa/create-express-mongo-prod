import redis from "./connection"

export const setHomepageFAQCache=async(data:object)=>{
    const res=await redis.set(`homepage:faqCache`,JSON.stringify(data));
    await redis.expire(`faqCache`,60*60*24);
    return res;
}

export const getHomepageFAQCache=async()=>{
    const res=await redis.get(`homepage:faqCache`);
    return JSON.parse(res);
}