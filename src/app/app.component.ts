import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router:Router) { }

  navBy(id:number) {
    this.router.navigate(["/login",id]);
  }

  
}
