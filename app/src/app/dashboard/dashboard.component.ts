import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
phone(){
  this.router.navigateByUrl('phone')
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
log(){
  this.router.navigateByUrl('login')
}
}
