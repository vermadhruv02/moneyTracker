const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json())

const PORT = 5000 || process.env.PORT;

app.get('/api/test', (req,res)=>{
    res.json('{user: "dhruv", age : 21}')
})

app.post('/api/transaction',async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL);
    const {name ,price , description, dateTime} = req.body;
    try {
        const transaction = await Transaction.create({name ,price,description,dateTime})
        res.json(transaction);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
});

app.get('/api/transactions',async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const data = await Transaction.find();
    res.json(data);
})

app.listen(PORT, ()=>{
    console.log(`listening at ${PORT}`);
});
