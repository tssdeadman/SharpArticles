import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env',
})

const app = express();
const port = process.env.PORT;

app.get('/api/v1/sharparticle',(req,res)=>{
    const user = [
        {
            id:"user098712",
            password:"098711",
            article:"Articles"
        },
        {
            id:"user098713",
            password:"098712",
            article:"Articles"
        },
        {
            id:"user098714",
            password:"098713",
            article:"Articles"
        },
        {
            id:"user098715",
            password:"098713",
            article:"Articles"
        }
    ]

    res.send(user);
})

app.listen(port,()=>{
    console.log(`Server ready at port ${port}`);
})