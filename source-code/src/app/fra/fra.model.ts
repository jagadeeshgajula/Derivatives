import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class FraModel{
    cmbCurrency:string;
    txtNotional:string;
    txtAgreedRate:string;
    cmbFraBuySell:string;
    cmbRateType:string;
    txtTenor:string;
    txtStartDate:string;
    txtMaturityDate:string;
    txtQuoteDate:string;
    cntQuoteCalendars:string;
    txtQuoteLag:string;
    txtSettlementDate:string;
    cmbDayCount:string;
    cmbDiscountCurve:string;
    cmbMarketIndex:string;
    cmbPayBusDay:string;
    cmbPayCalendars:string;
    cmbPaymentConventionPnl:string;
    cmbResetConvention:string;
    txtFWDRate:string;
    cmbRateSettingType:string;
    cmbResetType:string;
    txtPrecision:string;
    txtPV:string;
    cmbPVCurrency:string;
    txtRecParallelDelta:string;
    cmbCurve:string;
}