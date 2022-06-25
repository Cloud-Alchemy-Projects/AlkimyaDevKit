import express from "express";
import bodyParser from "body-parser";
import submitRouter from './routes/test.js'
import cors from "cors";
const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.use('/test', submitRouter)
// Server configuration
const PORT = process.env.PORT || 1010;

app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
})