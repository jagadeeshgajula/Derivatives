import {MenuOptionsService} from './Menu-Options.service';


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{MenuOptionsModel} from "./Menu-Options.model";

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuComponent implements OnInit{
  xml;
  obj;
  model=new MenuOptionsModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private MenuOptionsService:MenuOptionsService
  ){}
  ngOnInit(){
    this.MenuOptionsService.getData().subscribe(Res=>{
      this.obj=Res;
      /* this.model.LoginName= this.obj[0].id;
      this.model.FirstName= this.obj[1].id;
      this.model.LastName= this.obj[2].id;
      this.model.Password= this.obj[3].id;
      this.model.SwapTicketDefaultDeal = this.obj[4].id;
      this.model.SwapOptionDefaultDeal = this.obj[5].id; */
      /* this.model.AccessType = this.obj[0].accesstype;
      this.model.Administrator =this.obj[2].administrator; */
      this.model.Business=this.obj[10].business;
      this.model.Department = this.obj[18].department;
     /*  this.model.Domain = this.obj[8].domain;
      this.model.PVAutoCalc= this.obj[10].pvautocalc; */
      this.model.Role = this.obj[30].role;
     
     
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
 
