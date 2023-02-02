import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  
phone:any=[];
filterpackages:any

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (data:any)=>{
         this.phone=data.products
      }
    )
  }

alrt(){
  alert('Order placed Successfully ');
}
home(){
  this.router.navigateByUrl('')
}
laptop(){
  this.router.navigateByUrl('laptop')
}
tv(){
  this.router.navigateByUrl('tv')
}

store(){
 this.router.navigateByUrl('store')


}
filter(category:any){
  this.filterpackages= this.phone.filter((item:any)=>{
    if(item.categoryid==category || category==""){
      return item
    }
    })
  }
cli(){
  this.router.navigateByUrl('xiaomipro')
}
crt(){
  this.router.navigateByUrl('cart')

}
}
