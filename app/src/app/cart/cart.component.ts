import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../laptop/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
  
  export class CartComponent implements OnInit {
    cartitems:any=[]
    grand:Number=0;
    constructor(private cart:CartService,private router:Router ) { }
  
    ngOnInit(): void {
      this.cart.cartlist.subscribe(
        (data:any)=>{
          console.log(data);
          this.cartitems=data;
          
        }
      )
     
      this.grand=this.cart.gettotal()
    }
  removeitem(products:any){
   this.cart.removecart(products)
   this.grand=this.cart.gettotal()
  }
  buy(){
    this.router.navigateByUrl('xiaomipro')
  }
  back(){
    this.router.navigateByUrl('laptop') 
  }
  removeall(){
    this.cart.removeall()
  }
  }

