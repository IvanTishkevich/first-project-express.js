import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const app = express();
const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.8r8tnto.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}))
app.use('/api', router);

async function startApp(){
    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology:true, useNewUrlParser:true});
        app.listen(PORT, ()=> console.log("Server started on port " + PORT));
    }catch (e){
        console.log(e);
    }
}
startApp();
