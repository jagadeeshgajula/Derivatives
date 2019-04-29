import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class ProfileAddModel {
         txtLoginName: String;
   txtFirstName:String;
    txtLastName:String;
    txtPassword :String;
    txtSwapTicketDefaultDeal : String;
    txtSwapOptionDefaultDeal :String ;
    cmbPVAutoCalc:any[];
    txtThresholdPv :String ;
    cmbBusiness:String ;
    txtLastModified :String ;
    txtLastVerified : String;
    cmbAccessType :String;
    txtStatus :String ;
    cmbRole :String;
   cmbDomain :String;
    txtFraDefaultDeal : String;
    txtCapFloorDefaultDeal : String;
    cmbAdministrator :any[] ;
   cmbDepartment :any[];
   txtLastModifiedBy : String;
   txtLastVerifiedBy :String ;
   
    
}
