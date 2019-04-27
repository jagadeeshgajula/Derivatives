import {ProfileAddService} from './Profile-Add.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{ProfileAddModel} from "./Profile-Add.model";

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private profileAddService:ProfileAddService,
   public model:ProfileAddModel
 ){}
 ngOnInit(){
   this.profileAddService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName= this.obj.ProfileAdd.LoginName;
     this.model.txtFirstName= this.obj.ProfileAdd.FirstName;
     this.model.txtLastName= this.obj.ProfileAdd.LastName;
     this.model.txtPassword= this.obj.ProfileAdd.Password;
     this.model.txtSwapTicketDefaultDeal = this.obj.ProfileAdd.SwapDefault;
     this.model.txtSwapOptionDefaultDeal = this.obj.ProfileAdd.SWODefault;
     this.model.cmbPVAutoCalc= this.obj.ProfileAdd.PVAutoCalc.pv;
     this.model.txtThresholdPv= this.obj.ProfileAdd.ThresholdPv;
     this.model.cmbBusiness=this.obj.ProfileAdd.Business;
     this.model.txtLastModified = this.obj.ProfileAdd.ModifiedTimeStamp;
     this.model.txtLastVerified = this.obj.ProfileAdd.VerifiedTimeStamp;
     this.model.cmbAccessType = this.obj.ProfileAdd.AccessType;
     this.model.txtStatus = this.obj.ProfileAdd.Status;
     this.model.cmbRole = this.obj.ProfileAdd.Role;
     this.model.cmbDomain = this.obj.ProfileAdd.Domain;
     this.model.txtFraDefaultDeal = this.obj.ProfileAdd.FraDefault;
     this.model.txtCapFloorDefaultDeal = this.obj.ProfileAdd.CapFloorDefault;
     this.model.cmbAdministrator =this.obj.ProfileAdd.Administrator.admin;
     this.model.cmbDepartment = this.obj.ProfileAdd.Department.dep;
     this.model.txtLastModifiedBy = this.obj.ProfileAdd.LastModifiedBy;
     this.model.txtLastVerifiedBy = this.obj.ProfileAdd.LastVerifiedBy;
    
    console.log(this.model);
   },10); 
  }
}
