import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:'root'
    }
)

export class PaymentModel{

 cmbDayCount:string;
 cmbDiscountCurve:string;
 cmbPayBusDay:string;
 cntPayCalendars:string;
 cmbPayFreq:string;
 cmbPayMarching:string;
 cmbPaymentConvention:string;
 cmbPaymentConversionCurrency:string;
 cmbPaymentConversionIndex:string;
 txtPaymentConversionLag:string;
 cmbPayRollDay:string;
 cmbPayRollWeek:string;
 txtPayLag:string;

 txtPV:String;
 cmbPVCurrency:string;
 txtRecParallelDelta:string;
 cmbCurvePnl:string;


}