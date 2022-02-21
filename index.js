import express, {json, response} from "express"
import mongoose from "mongoose"
import Post from "./Post.js";
import router from "./router.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://user88:user88@cluster0.a8zrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use("/api", router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()