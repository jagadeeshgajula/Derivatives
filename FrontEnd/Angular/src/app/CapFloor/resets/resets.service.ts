import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class ResetsService{
   private _url:string='http://192.168.1.159:60010/derivatives/capfloorResets';
constructor(private _http:HttpClient){}

getData(){
    return this._http.get(this._url);
 
}
}
