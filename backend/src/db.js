import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://divyaharshitha7704:21B91A54A2@cluster0.tdvjxih.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("TechProject1");
    cb();
}

export {db,connectToDB};