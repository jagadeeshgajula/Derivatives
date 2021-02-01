import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:any;
  password:any;
  Courses:any;
  city:any;
  state:any;
  country:any
  result:any;
  url:any;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.userName,this.password,this.Courses,this.city,this.state,this.country,this.url).subscribe(res=>
    {
        this.result=res;
    });
  }


}
