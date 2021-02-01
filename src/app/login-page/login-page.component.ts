import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
username:any;
password:any;
url:any;
  constructor(private router:Router,private _auth: AuthService,
    private _router: Router) { 

  }

  ngOnInit() {
  }
  loginUser () {
    this._auth.loginUser(this.url,this.username,this.password)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }
}
