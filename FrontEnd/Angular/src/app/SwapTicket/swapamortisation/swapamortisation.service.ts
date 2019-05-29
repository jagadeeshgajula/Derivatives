import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class SwapAmortisationService
{
    private _url:string='http://192.168.1.146:60010/restapi/swapticketrecamort';
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
}