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
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private MenuOptionsService:MenuOptionsService,
   public model:MenuOptionsModel
 ){}
 ngOnInit(){
   this.MenuOptionsService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.MenuOptions.LoginName;
     this.model.txtFirstName=this.obj.MenuOptions.FirstName;
     this.model.txtLastName=this.obj.MenuOptions.LastName;
     this.model.cmbBusiness=this.obj.MenuOptions.Business;
     this.model.cmbDepartment = this.obj.MenuOptions.Department.dep;
     this.model.cmbRole=this.obj.MenuOptions.Role;
     this.model.txtLastModified=this.obj.MenuOptions.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.MenuOptions.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.MenuOptions.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.MenuOptions.LastVerifiedBy;
     
     console.log(this.model);
    
   },10); 
  }
}
