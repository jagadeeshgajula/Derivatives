import {ProfileModifyService} from './Profile-Modify.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{ProfileModifyModel} from "./Profile-Modify.model";

@Component({
  selector: 'app-profile-Modify',
  templateUrl: './profile-modify.component.html',
  styleUrls: ['./profile-modify.component.css']
})
export class ProfileModifyComponent implements OnInit{
 xml;
 obj;
 model=new ProfileModifyModel();
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private profileModifyService:ProfileModifyService
 ){}
 ngOnInit(){
   this.profileModifyService.getData().subscribe(Res=>{
     this.obj=Res;
     /* this.model.LoginName= this.obj[0].id;
     this.model.FirstName= this.obj[1].id;
     this.model.LastName= this.obj[2].id;
     this.model.Password= this.obj[3].id;
     this.model.SwapTicketDefaultDeal = this.obj[4].id;
     this.model.SwapOptionDefaultDeal = this.obj[5].id; */
     this.model.AccessType = this.obj[1].accesstype;
     this.model.Administrator =this.obj[3].administrator;
     this.model.Business=this.obj[5].business;
     this.model.Department = this.obj[13].department;
     this.model.Domain = this.obj[21].domain;
     this.model.PVAutoCalc= this.obj[23].pvautocalc;
     this.model.Role = this.obj[25].role;
     this.model.UserName = this.obj[32].userName;

    
    
    /*  this.model.ThresholdPv= this.obj[7].id;
    
     this.model.LastModified = this.obj[9].id;
     this.model.LastVerified = this.obj[10].id;
    
     this.model.Status = this.obj[12].id;
     
     this.model.FraDefaultDeal = this.obj[15].id;
     this.model.CapFloorDefaultDeal = this.obj[16].id;
     
     
     this.model.LastModifiedBy = this.obj[19].id;
     this.model.LastVerifiedBy = this.obj[20].id; */
    
    console.log(this.obj);
   });
   setTimeout(()=>{

   
   },1000); 
  }
}
