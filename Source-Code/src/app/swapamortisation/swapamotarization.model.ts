import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class SwapAmotarizationModel {
    cmbQPaySide:string;
    cmbQRecSide:string; 
    cmbQCurrency:string;
    txtQNotional:string;
    txtQTenor:string;
    txtQStartDate:string;
    txtEndDate:string;
}