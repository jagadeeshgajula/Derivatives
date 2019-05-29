import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class SchedulesService{
   private _url:string='http://localhost:60010/derivatives/capfloorpayments';
constructor(private _http:HttpClient){}

getData(){
 return  this._http.get(this._url);
}

}
