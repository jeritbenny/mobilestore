import { registerLocaleData } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // email=''
  // uname=''
  // pswd=''

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:  ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    psw:['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]]
  })
  
  ngOnInit():void{

  }

register(){
  
  var email=this.registerForm.value.email
  var uname=this.registerForm.value.uname
  var psw=this.registerForm.value.psw

  if(this.registerForm.valid){
    this.ds.register(email,uname,psw).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('/login')
    },
    result=>{
      alert(result.error.message)
      // this.router.navigateByUrl('')

    })
   

  }
else{
  alert('invalid form')
  }

 }
log(){
  this.router.navigateByUrl('login')
}
}