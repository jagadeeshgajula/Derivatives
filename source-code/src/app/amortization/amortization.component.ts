import { AmortModel } from './amort.model';
import { AmortService } from './amort.service';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent implements OnInit {

  xml;
  obj;
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private amortService:AmortService,
    private model:AmortModel
  ) { }

  ngOnInit() {
   this.amortService.getData().subscribe(xmlRes=>{
     this.xml=xmlRes;
   });

   setTimeout(() => {
     const parser=new DOMParser();
     const xml=parser.parseFromString(this.xml,"text/xml");
     const obj=this.ngxXml2jsonService.xmlToJson(xml);
     this.obj=obj;
     this.model.cmbAmortType=this.obj.Amortization.AmortType;
     this.model.txtAmortStartDate=this.obj.Amortization.AmortStartDate;
     this.model.txtAmortEndDate=this.obj.Amortization.AmortEndDate;
     this.model.cmbAmortBusDay=this.obj.Amortization.AmortBusDay;
     this.model.cntAmortCalendars=this.obj.Amortization.AmortCalendars;
     this.model.cmbAmortFreq=this.obj.Amortization.AmortFreq;
     this.model.cmbAmortMarching=this.obj.Amortization.AmortMarching;
     this.model.cmbAmortRollDay=this.obj.Amortization.AmortRollDay;
     this.model. cmbAmortRollWeek=this.obj.Amortization.AmortRollWeek;
     this.model.txtAmortAmount=this.obj.Amortization.AmortAmount;
     this.model.txtPV=this.obj.Amortization.Schedule.PV;
     this.model.cmbPVCurrency=this.obj.Amortization.Schedule.Currency;
     this.model.txtRecParallelDelta=this.obj.Amortization.Schedule.ParallelDelta;
     this.model.cmbCurvePnl=this.obj.Amortization.Schedule.Curve;
   }, 10);
  }

}
