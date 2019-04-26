import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class QuickModel{

    cmbQCurrency:String;
    txtNotional:string;
    txtQTenor:string;
    txtQStartDate:string;
    txtQEndDate:string;

}