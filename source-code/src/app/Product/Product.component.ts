import {ProductService} from './Product.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{ProductModel} from "./Product.model";

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit{
 xml;
 obj;
 
 constructor(
   private ngxXml2jsonService:NgxXml2jsonService,
   private ProductService:ProductService,
   public model:ProductModel
 ){}
 ngOnInit(){
   this.ProductService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })

   
   setTimeout(()=>{
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.txtLoginName=this.obj.Product.LoginName;
     this.model.txtFirstName=this.obj.Product.FirstName;
     this.model.txtLastName=this.obj.Product.LastName;
     this.model.cmbBusiness=this.obj.Product.Business;
     this.model.cmbDepartment = [this.obj.Product.Department.dep1,
                                 this.obj.Product.Department.dep2,
                                 this.obj.Product.Department.dep3,
                                 this.obj.Product.Department.dep4];
     this.model.cmbRole=this.obj.Product.Role;
     this.model.txtLastModified=this.obj.Product.ModifiedTimeStamp;
     this.model.txtLastVerified=this.obj.Product.VerifiedTimeStamp;
     this.model.txtLastModifiedBy=this.obj.Product.LastModifiedBy;
     this.model.txtLastVerifiedBy=this.obj.Product.LastVerifiedBy;
     
     console.log(this.model);
    
   },10); 
  }
}
