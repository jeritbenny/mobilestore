const mongoose=require('mongoose')

//connection string

mongoose.connect('mongodb://localhost:27017/mobile',()=>{
    console.log('connected to mongoDB');
})

//model

const Product=mongoose.model('Product',{
    name:String,
    price:String,
    image:String,
    description:String,
     id:Number,
     categoryid:Number
})

const Laptop=mongoose.model('Laptop',{
    lapname:String,
    lapimage:String,
    lapprice:String,
    lapdetail:String
})
const User=mongoose.model('User',{
    email:String,
    username:String,
    password:String
})
const Tv=mongoose.model('Tv',{
    name:String,
    price:String,
    image:String,
    details:String
})
const Order=mongoose.model('Order',{
    name:String,
    mobile:Number,
    address:String,
    pincode:Number,
    state:String,
    town:String
})
//export

module.exports={
    Product,
    Laptop,
    User,
    Tv,
    Order
}