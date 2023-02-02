import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  laptop:any=[];
  phone:any=[];
  tv:any=[];

  constructor(private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.api.getLaptops().subscribe(
      (data:any)=>{
         this.laptop=data.laptops
      }
    )
    this.api.getProducts().subscribe(
      (data:any)=>{
         this.phone=data.products
      }
    )
    this.api.getTvs().subscribe(
      (data:any)=>{
         this.tv=data.tvs
      }
    )
  }
  home(){
    this.router.navigateByUrl('')
  }
  laptops(){
    this.router.navigateByUrl('laptop')
  }
  tvs(){
    this.router.navigateByUrl('tv')
  }
  phones(){
    this.router.navigateByUrl('phone')
  }
  cli(){
    this.router.navigateByUrl('xiaomipro')
  }
}
