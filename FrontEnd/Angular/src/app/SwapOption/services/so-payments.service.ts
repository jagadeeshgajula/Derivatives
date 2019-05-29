import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class SwapPaymentService{
    private _url:string='http://192.168.1.177:60020/restapi/payment';
    constructor(private _http:HttpClient)
    {}

    getData()
    {
     return this._http.get(this._url);
    }

    getSwapOptionPayment()
    {
        return this._http.get(this._url);
    }

}