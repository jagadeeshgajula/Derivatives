import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FraQuickTicketService{
    private _url:string='http://192.168.1.174:60010/derivatives/quick';
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
           }
    getQuick(){
        return this._http.get(this._url);
     }
}