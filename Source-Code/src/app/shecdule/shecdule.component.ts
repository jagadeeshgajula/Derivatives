
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

import { SechduleService } from '../services/sechdule.service';
import { SechduleModel } from './sechdule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './shecdule.component.html',
  styleUrls: ['./shecdule.component.css']
})
export class ShecduleComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private quickServ:SechduleService,public model:SechduleModel)
  {}
  
  ngOnInit()
  {
   
     this.quickServ.getData().subscribe(xmlRes=>{
     this.xml=xmlRes });
     //console.log(this.xml);
   setTimeout(() => {
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngx.xmlToJson(xml);
    this.obj=obj;
    
     this.model.cmbPayPVCurrency = this.obj.schedule.Currency.cur;
    
     this.model.cmbPayCurve = this.obj.schedule.PayCurve.pcu;
     
     this.model.cmbRecPVCurrency = this.obj.schedule.Currency.cur;
      
     this.model.cmbRecCurve = this.obj.schedule.PayCurve.pcu;                            
  },10);
}
}