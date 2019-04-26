import { CapFloorModel } from './capfloor.model';
import { CapFloorService } from './capfloor.service';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-capfloor',
  templateUrl: './capfloor.component.html',
  styleUrls: ['./capfloor.component.css']
})
export class CapfloorComponent implements OnInit {

  xml;
  obj;
  constructor(private ngxXml2jsonService:NgxXml2jsonService
    ,private capFloorService:CapFloorService
    ,private model:CapFloorModel){}

 ngOnInit(){
   this.capFloorService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   })
 
   
 setTimeout(()=> {
  const parser=new DOMParser();
  const xml=parser.parseFromString(this.xml,"text/xml");
  const obj=this.ngxXml2jsonService.xmlToJson(xml);
  this.obj=obj;
  this.model.cmbCurrency=this.obj.CapFloorTicket.Currency;
  this.model.txtTenor=this.obj.CapFloorTicket.Tenor;
  this.model.txtNotional=this.obj.CapFloorTicket.Notional;
  this.model.cmbCfSubType=this.obj.CapFloorTicket.CFSubType;
  this.model.txtCapsStartDate=this.obj.CapFloorTicket.CapStartDate;
  this.model.txtCapsEndDate=this.obj.CapFloorTicket.EndDate;
  this.model.cmbStartDateRollFlag=this.obj.CapFloorTicket.CapStartRoll;
  this.model.cmbEndDateRollFlag=this.obj.CapFloorTicket.EndRoll;
  this.model.txtStartStubDate=this.obj.CapFloorTicket.FrontStubDate;
  this.model.txtBackStubDate=this.obj.CapFloorTicket.BackStubDate;
  this.model.txtFrontStubManualRate=this.obj.CapFloorTicket.FrontStubManualRate;
  this.model.txtBackStubManualRate=this.obj.CapFloorTicket.BackStubManualRate;
  this.model.cmbBuyFlag=this.obj.CapFloorTicket.BuyFlag;
  this.model.cmbCapFloorType=this.obj.CapFloorTicket.CapFloorType;
  console.log(this.model.cmbCfSubType);
},1000); 

}


}
