import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class CapFloorModel{
    cmbCurrency:string;
    txtTenor:string;
    txtNotional:string;
    cmbCfSubType;
    txtCapsStartDate:string;
    txtCapsEndDate:string;
    cmbStartDateRollFlag:string;
    cmbEndDateRollFlag:string;
    txtStartStubDate:string;
    txtBackStubDate:string;
    txtFrontStubManualRate:string;
    txtBackStubManualRate:string;
    cmbBuyFlag:string;
    cmbCapFloorType:string;
    


} 