import {CustomerAccountService} from './Customer-Account.service';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
import{CustomerAccountModel} from "./Customer-Account.model";

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private CustomerAccountService:CustomerAccountService,
   public model:CustomerAccountModel
 ){}
 ngOnInit(){
   this.CustomerAccountService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml"); 
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.CustomerAccount.LoginName;
     this.model.txtFirstName=this.obj.CustomerAccount.FirstName;
     this.model.txtLastName=this.obj.CustomerAccount.LastName;
     this.model.cmbBusiness=this.obj.CustomerAccount.Business;
     this.model.cmbDepartment = [this.obj.CustomerAccount.Department.dep1,
                                 this.obj.CustomerAccount.Department.dep2,
                                 this.obj.CustomerAccount.Department.dep3,
                                 this.obj.CustomerAccount.Department.dep4];
     this.model.cmbRole=this.obj.CustomerAccount.Role;
     this.model.txtLastModified=this.obj.CustomerAccount.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.CustomerAccount.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.CustomerAccount.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.CustomerAccount.LastVerifiedBy;
     
     console.log(this.model);
    
   },10); 
  }
}
