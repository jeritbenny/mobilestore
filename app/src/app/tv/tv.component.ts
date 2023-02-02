import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tv:any=[];
  searchterm:any
  searchkey:any
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getTvs().subscribe(
      (data:any)=>{
         this.tv=data.tvs
      }
    )
   
    this.api.search.subscribe((data:any)=>{
      this.searchkey=data
    })

  }
  phone(){
    this.router.navigateByUrl('phone')
  }
  
  laptop(){
    this.router.navigateByUrl('laptop')
  }
 
  home(){
    this.router.navigateByUrl('')
  }
  store(){
    this.router.navigateByUrl('store')
  }
  buy(){
    this.router.navigateByUrl('xiaomipro')
  }

  search(event:any){
    this.searchterm= event.target.value
    this.api.search.next(this.searchterm)
  }
  crt(){
    this.router.navigateByUrl('cart')
 
  }
}
