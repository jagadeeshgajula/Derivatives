import { ResetsModel } from './resets.model';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';
import { ResetsService } from './resets.service';

@Component({
  selector: 'app-resets',
  templateUrl: './resets.component.html',
  styleUrls: ['./resets.component.css']
})
export class ResetsComponent implements OnInit {

   xml;
   obj;
  constructor(
    private resetsService:ResetsService,
    private ngxXml2jsonService: NgxXml2jsonService,
    private model:ResetsModel
  ) { }

  ngOnInit() {
    this.resetsService.getData().subscribe(xmlRes=>{
      this.xml=xmlRes;
    })

    setTimeout(() => {
      const parser=new DOMParser();
      const xml=parser.parseFromString(this.xml,"text/xml");
      const obj=this.ngxXml2jsonService.xmlToJson(xml);
      this.obj=obj;
      this.model.txtGearFactor=this.obj.resets.GearFactor;
      this.model.txtSpread=this.obj.resets.Spread;
      this.model.cntQuoteCalenders=this.obj.resets.QuoteCalendars;
      this.model.txtQuoteLag=this.obj.resets.QuoteLag;
      this.model.cntInitialQuoteCalenders=this.obj.resets.InitialQuoteCalendars;
      this.model.txtInitialQuoteDate=this.obj.resets.InitialQuoteDate;
      this.model.txtInitialQuoteLag=this.obj.resets.InitialQuoteLag;
      this.model.cmbResetAveraging=this.obj.resets.ResetAveraging;
      this.model.cmbResetConvention=this.obj.resets.ResetConvention;
      this.model.cmbResetFreq=this.obj.resets.ResetFreq;
      this.model.cmbResetType=this.obj.resets.ResetType;
      this.model.cmbScheduleCustomFlag=this.obj.resets.ScheduleCustomFlag;
      this.model.txtStrike=this.obj.resets.Strike;
      this.model.txtValid=this.obj.resets.VolId;
      this.model.txtPricingMethod=this.obj.resets.PricingMethod;
      this.model.cmbMarketIndex=this.obj.resets.MarketIndex;


      this.model.txtPV=this.obj.resets.Schedule.PV;
     this.model.cmbPVCurrency=this.obj.resets.Schedule.Currency;
     this.model.txtRecParallelDelta=this.obj.resets.Schedule.ParallelDelta;
     this.model.cmbCurvePnl=this.obj.resets.Schedule.Curve;
    }, 10);
  }

}
