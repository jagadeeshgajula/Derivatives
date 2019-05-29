import {ProfileModifyService} from './Profile-Modify.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{ProfileModifyModel} from "./Profile-Modify.model";

@Component({
  selector: 'app-profile-modify',
  templateUrl: './profile-modify.component.html',
  styleUrls: ['./profile-modify.component.css']
})
export class ProfileModifyComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private profileModifyService:ProfileModifyService,
   public model:ProfileModifyModel
 ){}
 ngOnInit(){
   this.profileModifyService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.cmbUserName= this.obj.ProfileModify.UserName.u;
                              
     this.model.txtLoginName = this.obj.ProfileModify.LoginName;
     this.model.txtFirstName = this.obj.ProfileModify.FirstName;
     this.model.txtLastName = this.obj.ProfileModify.LastName;
     this.model.textBox2 = this.obj.ProfileModify.Password;
     this.model.txtSwapTicketDefaultDeals= this.obj.ProfileModify.SwapTicketDefaultDeals;
     this.model.txtSwapOptionDefaultDeal= this.obj.ProfileModify.SwapOptionDefaultDeal;
     this.model.cmbPVAutoCalc= this.obj.ProfileModify.PVAutoCalc.pv;
     this.model.txtAmount = this.obj.ProfileModify.ThresholdPv;
     this.model.cmbBusiness = this.obj.ProfileModify.Business;
     this.model.txtLastModified = this.obj.ProfileModify.ModifiedTimeStamp;
     this.model.txtLastVerified = this.obj.ProfileModify.VerifiedTimeStamp;
     this.model.cmbAccessType = this.obj.ProfileModify.AccessType;
     this.model.txtStatus = this.obj.ProfileModify.Status;
     this.model.cmbRole = this.obj.ProfileModify.Role;
     this.model.cmbDomain = this.obj.ProfileModify.Domain;
     this.model.txtFraDefaultDeal = this.obj.ProfileModify.FraDefaultDeal;
     this.model.txtCapFloorDefaultDeal = this.obj.ProfileModify.CapFloorDefaultDeal;
     this.model.cmbAdministrator =this.obj.ProfileModify.Administrator.admin;
     this.model.cmbDepartment = this.obj.ProfileModify.Department.dep;
     this.model.txtLastModifiedBy = this.obj.ProfileModify.LastModifiedBy;
     this.model.txtLastVerifiedBy = this.obj.ProfileModify.LastVerifiedBy;
    
    console.log(this.model);
   },1000); 
  }
}
