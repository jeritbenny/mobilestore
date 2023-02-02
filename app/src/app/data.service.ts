import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



      register(email:any,uname:any,psw:any){
        const data={
          email,uname,psw
        }
        return this.http.post('http://localhost:3000/register',data)
      }
     
      

      login(uname:any,psw:any){

        const data={
          uname,psw
        }
        return this.http.post('http://localhost:3000/login',data)

      }

order(mobile:any,name:any,address:any,pincode:any,state:any,town:any){
  const data={
    mobile,name,address,pincode,state,town
  }
  return this.http.post('http://localhost:3000/order',data)
}
}
