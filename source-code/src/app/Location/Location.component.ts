import {LocationService} from './Location.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{LocationModel} from "./Location.model";

@Component({
  selector: 'app-Location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css']
})
export class LocationComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private LocationService:LocationService,
   public model:LocationModel
 ){}
 ngOnInit(){
   this.LocationService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.Location.LoginName;
     this.model.txtFirstName=this.obj.Location.FirstName;
     this.model.txtLastName=this.obj.Location.LastName;
     this.model.cmbBusiness=this.obj.Location.Business;
     this.model.cmbDepartment = [this.obj.Location.Department.dep1,
                                 this.obj.Location.Department.dep2,
                                 this.obj.Location.Department.dep3,
                                 this.obj.Location.Department.dep4];
     this.model.cmbRole=this.obj.Location.Role;
     this.model.txtLastModified=this.obj.Location.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.Location.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.Location.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.Location.LastVerifiedBy;
     
     console.log(this.model);
    
   },10); 
  }
}
