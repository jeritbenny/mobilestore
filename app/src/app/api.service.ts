import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 search=new BehaviorSubject('')
  constructor(private http:HttpClient) { }

  getProducts(){
      return this.http.get('http://localhost:3000/phone')
  }
  getLaptops(){
    return this.http.get('http://localhost:3000/laptop')

  }
  getTvs(){
    return this.http.get('http://localhost:3000/tv')
  }
  // order(){
  //   return this.http.post('http://localhost:3000/order')

  // }
}
