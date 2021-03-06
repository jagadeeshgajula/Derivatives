import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FraQuickTicketService{
    private _url:string='/assets/fraQuickticket.xml';
    constructor(private _http:HttpClient){}
    getData(){

        const headers=new HttpHeaders({'Content-Type':'text/xml'}).set('Accept','text/xml');
    return this._http.get(this._url,{headers,responseType:'text'});
    }
}