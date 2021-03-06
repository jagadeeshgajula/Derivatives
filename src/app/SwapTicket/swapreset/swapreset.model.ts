import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class SwapResetModel {

    cntPayQuoteCalender:any[];
    txtPayQuoteLag:string; 
    cntPayIntial:any[];
    txtPay:string;
    txtPayIntialQuote:string;
    QuotePayCalendars:any[];
    IntialPayQuoteDate:any[];
    IntialQuoteLag:string;
    cmbPayResetAveragins:any[]; 
    cmbPayResetConvention:any[];
    txtPayRateCutOff:any[];
    cmbPayResetBusDay:any[];
    cmbPayResetFreq:any[];
    cmbPayResetMarching:any[];
    cmbPayResetPayRollDay:any[];
    cmbPayResetRollWeek:any[];
    cmbPayResetType:any[];
    cmbPayMarketIndex:any[];

    cntRecQuoteCalender:any[];
    txtRecQuoteLag:string; 
    cntRecIntial:any[];
    txtRec:string;
    txtRecIntialQuote:string;
    QuoteRecCalendars:any[];
    IntialRecQuoteDate:any[];
    IntialRecQuoteLag:string;
    cmbRecResetAveragins:any[]; 
    cmbRecResetConvention:any[];
    txtRecRateCutOff:any[];
    cmbRecResetBusDay:any[];
    cmbRecResetFreq:any[];
    cmbRecResetMarching:any[];
    cmbRecResetPayRollDay:any[];
    cmbRecResetRollWeek:any[];
    cmbRecResetType:any[];
    cmbRecMarketIndex:any[];
}