import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class ProductService{
    private _url:string='http://192.168.1.153:6001/users/test';
    constructor(private _http:HttpClient){}
    getData(){
      
        
        return this._http.get(this._url);
     
    }
    getProductModel(){
        return this._http.get(this._url); 
    }
    }
    

