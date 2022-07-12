var express = require('express')
var bodyParser = require('body-parser')
const cors = require("cors");
var app = express()
const dbsql = require("./db")

// console.log(dbsql.config)

const Order = require("./models/order")

// INATIALIZED MYSQLI , CREATE TABLE IF NOT CREATED AUTOMETACALLY
dbsql.sync().then(data => console.log("DATABASE INATIALIZED")).catch(err => console.log(err))

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post("/order",async (req,res)=>{

    const order = {
         firstName:req.body.fname,
         lastName:req.body.lname
    }

    await dbsql.sync().then((result)=>{
          return Order.create(order);

        
    }).then((orderData)=>{
        res.status(200).json({
            id:orderData.id,
            name:orderData.firstName
          })
    }).catch((err)=>{
        res.status(400).json({
           error:err.message
          })
    })

   
})


app.get("/names", async(req,res)=>{
   
    await dbsql.sync().then((result)=>{
        return Order.findAll()
    }).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })

})

app.listen(3000,()=>{
    console.log("LOL WORKING>>>>>>")
})