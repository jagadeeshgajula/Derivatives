import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class QuickticketModel{
    cmbQCurrency:string;
    txtQNotional:string;
    txtQAgreedRatePnl:string;
    cmbQBuySell:string;
    txtQTenor:string;
    txtQStartDate:string;
    txtQEndDate:string;
}