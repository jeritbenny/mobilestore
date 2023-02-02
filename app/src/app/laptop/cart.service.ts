
  import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];
  cartlist=new BehaviorSubject([])
  constructor() { }
  //add to cart
  addcart(products:any){
    this.cartarray.push(products);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);

    let total=this.gettotal();
    console.log(total);
  }
  //total price
  gettotal(){
    var grandsum=0;
    this.cartarray.map((item:any)=>{
     grandsum+=item.lapprice
    })
    return grandsum;
  }
  removecart(products:any){
    this.cartarray.map((item:any,index:any)=>{
      if(products.id==item.id){
        // this.cartlist.splice(index,1);
      }
    })
    this.cartlist.next(this.cartarray)
  }
}

