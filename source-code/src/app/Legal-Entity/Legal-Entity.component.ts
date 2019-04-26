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
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private LegalEntityService:LegalEntityService,
   public model:LegalEntityModel
 ){}
 ngOnInit(){
   this.LegalEntityService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.LegalEntity.LoginName;
     this.model.txtFirstName=this.obj.LegalEntity.FirstName;
     this.model.txtLastName=this.obj.LegalEntity.LastName;
     this.model.cmbBusiness=this.obj.LegalEntity.Business;
     this.model.cmbDepartment = [this.obj.LegalEntity.Department.dep1,
                                 this.obj.LegalEntity.Department.dep2,
                                 this.obj.LegalEntity.Department.dep3,
                                 this.obj.LegalEntity.Department.dep4];
     this.model.cmbRole=this.obj.LegalEntity.Role;
     this.model.txtLastModified=this.obj.LegalEntity.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.LegalEntity.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.LegalEntity.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.LegalEntity.LastVerifiedBy;
     
     console.log(this.model);
    
   },10); 
  }
}
