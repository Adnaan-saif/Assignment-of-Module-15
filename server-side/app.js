const express=require('express');
const router=require('./src/route/api');
const app=new express();
const bodyParser=require('body-parser');
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');



app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));
app.use(bodyParser.json())


const limiter=rateLimit({windowMs:15*60*1000,max:300});
app.use(limiter);


let URI="mongodb+srv://Sinister:XIII1233699877415XIII@cluster0.9lwqvdx.mongodb.net/CRUD1";
let OPTION={user:'Sinister',pass:'XIII1233699877415XIII',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
})



app.use("/api/v1",router);
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
});

module.exports=app;





