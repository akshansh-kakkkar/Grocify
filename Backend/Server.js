import 'dotenv/config';
import express from "express";
import cors from "cors";
import paymentroute from './Routes/paymentroute.js';

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://grocify-badf.vercel.app", "https://grocify-k8qr-72yqrs64s-akshansh-kakkkars-projects.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(express.json())
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.use('/pay', paymentroute)

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`The App is listening at http://localhost:${port}`)
    })
}

export default app;