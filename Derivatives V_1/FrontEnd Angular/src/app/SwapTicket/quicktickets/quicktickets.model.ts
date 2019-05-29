import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class QuickTicketsModel {
    cmbQPaySide:any;
    cmbQRecSide:any; 
    cmbQCurrency:any;
    txtQNotional:any;
    txtQTenor:any;
    txtQStartDate:any;
    txtEndDate:any;
}