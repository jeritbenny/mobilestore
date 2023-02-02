const db = require('./db')

//get all the product

const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                status:false,
                statusCode:404,
                message:'No products found'
            }
            }
        }
    )
}
//get all the product

const getLaptops =()=>{
    return db.Laptop.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    laptops:result
                }
            }
            else{
                return{
                status:false,
                statusCode:404,
                message:'No products found'
            }
            }
        }
    )
}


const getTvs =()=>{
  return db.Tv.find().then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  tvs:result
              }
          }
          else{
              return{
              status:false,
              statusCode:404,
              message:'No products found'
          }
          }
      }
  )
}

      register=(email,uname,psw)=>{
        return db.User.findOne({email}).then(user=>{
          if(user){
            return {
              statusCode:404,
              status:false,
              message:"user already exist"

  
            }
          }
          else{
            const newuser=new db.User({
              email,
              username:uname,
              password:psw
            })
            newuser.save()
            return {
              statusCode:200,
              status:true,
              message:"registration successfull"
            }
          }
        })
      }




      login=(uname,psw)=>{

       return db.User.findOne({username:uname,password:psw}).then(user=>{
        if(user){
          return {
            statusCode:200,
            status:true,
             message:"login successfull",
             currentUser:user.username,
             currentPass:user.password
        }
        }
        else{
          return {
            statusCode:404,
            status:false,
            message:"Incorrect password or Username"
        }
      }
        
       })

      }

 const order=(name,mobile,address,pincode,state,town)=>{
  return db.Order.push().then((result)=>{

    if(result){
      const neworder=new db.Order({
       name:name,
       mobile:mobile,
       address:address,
       pincode:pincode,
       state:state,
       town:town

      })
      neworder.save()
      return {
        statusCode:200,
        status:true,
        message:"order successfull"
      }
    }
  }
  )
}
//export
module.exports={
    getProducts,
    getLaptops,
    getTvs,
    order,
    register,
    login
}