const express=require('express')

const cors = require('cors')

const dataService = require('./services/dataService')


const app = express()

// to parse

app.use(express.json())

app.listen(3000,()=>{
    console.log('port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all products
app.get('/phone',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//api to get all products
app.get('/laptop',(req,res)=>{
    dataService.getLaptops()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//api to get tv
app.get('/tv',(req,res)=>{
    dataService.getTvs()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//register
app.post('/register',(req,res)=>{
   dataService.register(req.body.email,req.body.uname,req.body.psw)
  .then (result=>{
    res.status(result.statusCode).json(result)
  })
})
//login
app.post('/login',(req,res)=>{
    dataService.login(req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)

    })
})
//order
app.post('/order',(req,res)=>{
    dataService.order(req.body.name,req.body.mobile,req.body.address,req.body.pincode,req.body.state,req.body.town)
   .then (result=>{
     res.status(result.statusCode).json(result)
   })
 })