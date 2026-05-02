import 'dotenv/config';
import express from "express";
import cors from "cors";
import paymentroute from './Routes/paymentroute.js';

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
app.use(cors()); 

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.use('/pay', paymentroute)
app.listen(port, () => {
    console.log(`The App is listening at http://localhost:${port}`)
})