import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(userName,password,Courses,city,state,country,url) {
    return this.http.post(userName,password,Courses,city,state,country,url)
  }

  loginUser(user,pass,url) {
    return this.http.post(url, user,pass)
  }


  getDataRes()
  {
    let url="xyz";
    return this.http.get(url)
  }
}
