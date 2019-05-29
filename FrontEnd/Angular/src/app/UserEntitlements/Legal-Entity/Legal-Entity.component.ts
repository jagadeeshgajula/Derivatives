import {LegalEntityService} from './Legal-Entity.service';


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{LegalEntityModel} from "./Legal-Entity.model";

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.css']
})
export class LegalEntityComponent implements OnInit{
  xml;
  obj;
  model=new LegalEntityModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private LegalEntityService:LegalEntityService
  ){}
  ngOnInit(){
    this.LegalEntityService.getData().subscribe(Res=>{
      this.obj=Res;
      /* this.model.LoginName= this.obj[0].id;
      this.model.FirstName= this.obj[1].id;
      this.model.LastName= this.obj[2].id;
      this.model.Password= this.obj[3].id;
      this.model.SwapTicketDefaultDeal = this.obj[4].id;
      this.model.SwapOptionDefaultDeal = this.obj[5].id; */
      /* this.model.AccessType = this.obj[0].accesstype;
      this.model.Administrator =this.obj[2].administrator; */
      this.model.Business=this.obj[8].business;
      this.model.Department = this.obj[16].department;
     /*  this.model.Domain = this.obj[8].domain;
      this.model.PVAutoCalc= this.obj[10].pvautocalc; */
      this.model.Role = this.obj[28].role;
     
     
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
 
