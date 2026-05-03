import express from "express";
import { razorpay } from "../Controllers/payment_Gateway_Controller.js";
import crypto from 'crypto'
const router = express.Router();


router.post('/create-order', async (req, res) => {
    try{
        const {amount} =  req.body;
        const options ={
            amount : amount * 100,
            currency : "INR",
            receipt : "rcpt_" + Date.now(),
        }
        const order = await razorpay.orders.create(options);
        res.json(order);

    }
    catch(err){
        res.status(500).json({
            error : "Order creaation failed"
        })
    }
})

router.post('/verify-order', async(req, res)=>{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");
    
    if(expectedSignature === razorpay_signature){
        res.json({success : true})
    }
    else{
        res.status(400).json({
            success : false,
            message: "Invalid signature"
        })
    }
})

export default router