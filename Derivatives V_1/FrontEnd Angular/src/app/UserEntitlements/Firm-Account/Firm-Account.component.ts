import {FirmAccountService} from './Firm-Account.service'
import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{FirmAccountModel} from "./Firm-Account.model";

@Component({
  selector: 'app-firm-account',
  templateUrl: './firm-account.component.html',
  styleUrls: ['./firm-account.component.css']
})
export class FirmAccountComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private firmAccountService:FirmAccountService,
   public model:FirmAccountModel
 ){}
 ngOnInit(){
   this.firmAccountService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.FirmAccount.LoginName;
     this.model.txtFirstName=this.obj.FirmAccount.FirstName;
     this.model.txtLastName=this.obj.FirmAccount.LastName;
     this.model.cmbBusiness=this.obj.FirmAccount.Business;
     this.model.cmbDepartment = this.obj.FirmAccount.Department.dep;
     this.model.cmbRole=this.obj.FirmAccount.Role;
     this.model.txtLastModified=this.obj.FirmAccount.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.FirmAccount.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.FirmAccount.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.FirmAccount.LastVerifiedBy;
     
     console.log(this.model);
    
   },1000); 
  }
}
