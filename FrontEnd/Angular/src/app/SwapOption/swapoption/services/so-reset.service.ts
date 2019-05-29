import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ResetsService
{
    private _url:string='http://192.168.1.177:60020/restapi/reset';
    constructor(private _http:HttpClient)
    {}

    getData()
    {
     return this._http.get(this._url);
    }

    getSwapOptionReset()
    {
        return this._http.get(this._url);
    }
}