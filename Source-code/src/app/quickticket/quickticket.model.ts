import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class QuickTicketModel {
    cmbQPaySide:any[];
    cmbQRecSide:any[]; 
    cmbQCurrency:any[];
    txtQNotional:string;
    txtQTenor:string;
    txtQStartDate:string;
    txtEndDate:string;
}