require('dotenv').config()
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(bodyParser.json());

app.use("/", router());

app.get("/api", (req: express.Request, res: express.Response) => {
  res.status(200).send("welcome to yelllow owl.");
});


const PORT = process.env.PORT || 3001

connectDataBase().then(() => {
    app.listen(3001 , () => {
        console.log(`Server running at ${PORT}`)
    })
})


async function connectDataBase(){
    const dbUrl = process.env.MONGO_DB_URL;

  try {
      await mongoose.connect(dbUrl);
      console.log("database connection successful");
  }catch(err) {
      console.error("Error in database connection",err.message);
      throw err
  }
}


