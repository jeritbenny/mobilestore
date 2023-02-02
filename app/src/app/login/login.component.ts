import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = ''
  psw = ''

  // userDetails:any={
  //   anu:{username:"anu",password:111},
  //   anna:{username:"anna",password:222},
  //   ammu:{username:"ammu",password:333},
  //   kunnu:{username:"kunnu",password:444},
  // }

  constructor(private router: Router, private ds:DataService, private fb: FormBuilder) {

  }

  loginForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    psw:['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]]
  })

  ngOnInit(): void {

  }
  login() {

    var uname = this.loginForm.value.uname
    var psw = this.loginForm.value.psw


      if (this.loginForm.valid) {
       this.ds.login(uname,psw).subscribe((result:any)=>{
        alert(result.message)
         this.router.navigateByUrl('dashboard')
       },
       result=>{
        alert(result.error.message)
       }
       )
    
    }
    else{
      alert('invalid form')
    }
  }

}