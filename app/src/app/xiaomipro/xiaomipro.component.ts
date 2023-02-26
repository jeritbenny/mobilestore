import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-xiaomipro',
  templateUrl: './xiaomipro.component.html',
  styleUrls: ['./xiaomipro.component.css']
})
export class XiaomiproComponent implements OnInit {

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
  orderForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
   pincode: ['',[Validators.required,Validators.pattern('[0-9]{6}')]],
    state:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    town:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]

  })

  ngOnInit(): void {
  }

  order(){
    var name=this.orderForm.value.name
      var mobile=this.orderForm.value.mobile
      var address=this.orderForm.value.address
      var pincode=this.orderForm.value.pincode
      var state=this.orderForm.value.state
      var town=this.orderForm.value.town
      if(this.orderForm.valid){
  
 alert("order successfull")
      }
      else{
        alert("invalid form")
      }

     

  //   var name=this.orderForm.value.name
  //   var mobile=this.orderForm.value.mobile
  //   var address=this.orderForm.value.address
  //   var pincode=this.orderForm.value.pincode
  //   var state=this.orderForm.value.state
  //   var town=this.orderForm.value.town
  //   if(this.orderForm.valid){
  //     this.ds.order(mobile,name,address,pincode,state,town).subscribe((result:any)=>{
  //       alert("order successfull")
  //       // this.router.navigateByUrl('')
  //     }
  //     ,
  //     result=>{
  //       alert(result.error.message)
  //       // this.router.navigateByUrl('')
  
  //     } 
  //     )
     
  
  //   }
  // else{
  //   alert('invalid form')
  //   }
    }
   cancel(){
    this.router.navigateByUrl('')
    }
 
   
}

