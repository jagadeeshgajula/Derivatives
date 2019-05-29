import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)

export class AmortModel{
    cmbAmortType:string;
    txtAmortStartDate:string;
    txtAmortEndDate:string;
    cmbAmortBusDay:string;
    cntAmortCalendars:string;
    cmbAmortFreq:string;
    cmbAmortMarching:string;
    cmbAmortRollDay:string;
    cmbAmortRollWeek:string;
    txtAmortAmount:string;
    txtPV:String;
    cmbPVCurrency:string;
    txtRecParallelDelta:string;
    cmbCurvePnl:string;
}