import {Injectable } from 'node_modules/@angular/core' ;
import {HttpClient,HttpHeaders} from 'node_modules/@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class FrasService{
   private _url:string='./assets/Fra.xml';
constructor(private _http:HttpClient){}
getData(){
  
   const headers=new HttpHeaders({'Content-Type':'text/xml'}).set('Accept','text/xml');
    return this._http.get(this._url,{headers,responseType:'text'});
 
}
}
