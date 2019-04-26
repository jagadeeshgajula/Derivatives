import { ScheduleService } from './schedule.service';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { ScheduleModel } from './schedule.model';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private quickServ:ScheduleService,public model:ScheduleModel)
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
    this.model.txtPayPV = [];
    this.model.cmbPayPVCurrency = this.obj.schedule.Currency.Currency;
     this.model.txtPayParallelDelta = [];   
     this.model.cmbPayCurve = 
      this.obj.schedule.PayCurve.pcu;
    ;

      this.model.txtRecPV = [];
    this.model.cmbRecPVCurrency = this.obj.schedule.Currency.Currency;
     this.model.txtRecParallelDelta = [];   
     this.model.cmbRecCurve = 
      this.obj.schedule.PayCurve.pcu;
                                  

  },10);
}
}