import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  email:string= "";
  password:string= "";
  loginAttempts:number = 0;
  loginAttemptsString:string= "";
  loginSuccess:boolean = false;

  account = [{"id":"1","email": "test","password":"123"},{"id":"2","email": "test1","password":"1231"},{"id":"3","email": "test2","password":"1232"}];
  
  constructor(private router:Router) { }

  ngOnInit() { 
    //this.loginAttemptsString = "";
  }
  


  login() {
    //alert(this.email + " "+ this.password);

    for (var i in this.account) {
      if (this.account[i].email == this.email && this.account[i].password == this.password) {
        //alert("Success");
        this.loginSuccess = true;
        var id = this.account[i].id;
        //console.log(id)
        this.router.navigate(["/account",id]);
        break;
      }
    }
    if (this.loginSuccess) {

    } else {
    this.loginAttempts += 1;
        if (this.loginAttempts == 0 ) {
          this.loginAttemptsString = '';
        } else {
          this.loginAttemptsString = "Email or Password Incorrect. Please Try Again";
          //alert(this.loginAttemptsString);
        }
      }
    //this.email= "";
    this.password= "";
  }

}
