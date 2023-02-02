import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

laptop:any=[];

  constructor(private api:ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getLaptops().subscribe(
      (data:any)=>{
         this.laptop=data.laptops
      }
    )
  }

phone(){
  this.router.navigateByUrl('phone')
}
home(){
  this.router.navigateByUrl('')
}
tv(){
  this.router.navigateByUrl('tv')
}
store(){
  this.router.navigateByUrl('store')
}
carts(){
  this.router.navigateByUrl('cart')
}
addcart(products:any){
  this.cart.addcart(products)
}
buy(){
  this.router.navigateByUrl('xiaomipro')

}
}
