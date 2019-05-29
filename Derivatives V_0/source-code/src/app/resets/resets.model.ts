import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ResetsModel{
    txtGearFactor:string;
    txtSpread:string;
    cntQuoteCalenders:string;
    txtQuoteLag:string;
    cntInitialQuoteCalenders:string;
    txtInitialQuoteDate:string;
    txtInitialQuoteLag:string;
    cmbResetAveraging:string;
    cmbResetConvention:string;
    cmbResetFreq:string;
    cmbResetType:string;
    cmbScheduleCustomFlag:string;
    txtStrike:string;
    txtValid:string;
    txtPricingMethod:string;
    cmbMarketIndex:string;

    txtPV:String;
    cmbPVCurrency:string;
    txtRecParallelDelta:string;
    cmbCurvePnl:string;

}