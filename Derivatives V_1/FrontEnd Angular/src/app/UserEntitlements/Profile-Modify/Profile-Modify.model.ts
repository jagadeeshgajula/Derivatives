import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class ProfileModifyModel {
   cmbUserName:any[];
   txtLoginName:String;
   txtFirstName:String;
   txtLastName:String;
   textBox2:String;
   txtSwapTicketDefaultDeals:String;
   txtSwapOptionDefaultDeal:String ;
   cmbPVAutoCalc:any[];
   txtAmount:String ;
   cmbBusiness:String ;
   txtLastModified:String ;
   txtLastVerified:String;
   cmbAccessType:String;
   txtStatus:String ;
   cmbRole:String;
   cmbDomain:String;
   txtFraDefaultDeal:String;
   txtCapFloorDefaultDeal:String;
   cmbAdministrator:any[];
   cmbDepartment:any[];
   txtLastModifiedBy:String;
   txtLastVerifiedBy:String;
   
}
