import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class PaymentService{
   private _url:string='./assets/payments.xml';
constructor(private _http:HttpClient){}

getData(){
  
    const headers=new HttpHeaders({'Content-Type':'text/xml'}).set('Accept','text/xml');
    return this._http.get(this._url,{headers,responseType:'text'});
 
}
}
