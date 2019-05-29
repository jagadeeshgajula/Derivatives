import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class FrasService{
   private _url:string='http://192.168.1.174:60010/derivatives/fra';
constructor(private _http:HttpClient){}
getData(){
     return this._http.get(this._url);
 }
 getFra(){
    return this._http.get(this._url);
 }
}
