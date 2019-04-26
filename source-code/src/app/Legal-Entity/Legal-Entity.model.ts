import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class LegalEntityModel {
    txtLoginName:String;
   txtFirstName:String;
    txtLastName:String;
   cmbBusiness:String;
    txtLastModified:String ;
    txtLastVerified:String;
   cmbRole:String;
  cmbDepartment:any[];
   txtLastModifiedBy:String;
   txtLastVerifiedBy:String ;
   
    
}