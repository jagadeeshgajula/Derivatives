import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class SwapOptionService
{
    private _url:string='http://192.168.1.177:60020/restapi/swapoption';
    constructor(private _http:HttpClient)
    {}

    getData()
    {
     return this._http.get(this._url);
    }

    getSwapOption()
    {
        return this._http.get(this._url);
    }


}