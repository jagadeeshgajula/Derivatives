import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class SwapOptionModel {
    txtExpiryDate:string;
    cmbBuyFlag:any[]; 
    cmbOptionPosition:any[];
    cmbPricingMethod:any[];
    txtSwapLag:string;
    cmbSwapLagBusDay:string;
    txtVolId:string;
    cmbExercirseFlag:any[];
    cmbOptionStyle:any[];
    cmbOptionType:any[];
    txtStrike:string;
    txtSwapEndDate:string;
    txtSwapRef:string;
    txtSwapStartDate:string;
    cmbExerciseType:any[];


   /*  Swap ticket
  */

 cmbPayCurrency:any[];
 txtPayTenor:string;
 cmbRecCurrency:any[];
 txtRecTenor:any[];
 txtPayNotional:string;
 cmbPayNotionalExchange:any[];
 txtRecNotional:string;
 cmbRecNotionalExchange:any[];
 txtPayStartDate:string;
 txtPayStartStub:string;
 txtRecStartDate:string;
 txtRecStartStub:string;
 cmbPayStartDateRollFlag:any[];
 cmbPayEndDateRollFlag:any[];
 cmbRecStartDateRollFlag:any[];
 cmbRecEndDateRollFlag:any[];
 txtPayEndDate:string;
 txtPayEndStub:string;
 txtRecEndDate:string;
 txtRecEndStub:string;
 txtPayFrontstub:string;
 txtPayBackStub:string;
 txtRecFrontStub:string;
 legsPnl:string;
 txtPayFixedQuote:string;
 txtPayGearFactor:string;
 txtPaySpread:string;
 txtRecFixedQuote:string;
 txtRecGearQuote:string;
 txtRecSpread:string;
 cmbPayDayCount:any[];
 cmbRecDayCount:any[];
 cmbPayDiscountCurve:any[];
 cmbRecDiscountCurve:any[];
 cmbPayAccrualBusDay:any[];
 cntPayAccrualCalendars:any[];
 cmbRecAccrualBusDay:any[];
 cntRecAccrualCalendars:any[];
 cmbPayAccrualFreq:any[];
 cmbPayAccrualMarching:any[];
 cmbRecAccrualFreq:any[];
 cmbRecAccrualMarching:any[];
 cmbPayAccrualRollDay:string;
 cmbPayAccrualRollWeek:any[];
 cmbPayEndOfMonthIndicator:string;
 cmbRecAccrualRollDay:string;
 cmbRecAccrualRollWeek:any[];
 cmbRecEndOfMonthIndicator:string;
 cmbPayCompounding:any[];
 cmbPayCompFreq:string;
 cmbRecCompounding:any[];
 cmbRecCompFreq:string;
txtRecGearFactor: any;
}
    