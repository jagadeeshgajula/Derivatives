import { FraModel } from './fra.model';
import { FraService } from './fra.service';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from 'ngx-xml2json';

@Component({
  selector: 'app-fra',
  templateUrl: './fra.component.html',
  styleUrls: ['./fra.component.css']
})
export class FraComponent implements OnInit {

  xml;
  obj;
  constructor(private ngxXml2jsonService:NgxXml2jsonService
    ,private fraService:FraService
    ,private model:FraModel) { }

  ngOnInit() {
    this.fraService.getData().subscribe(xmlRes=>{
      this.xml=xmlRes;
    })
   setTimeout(()=>{
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngxXml2jsonService.xmlToJson(xml);
    this.obj=obj;
    this.model.cmbCurrency=this.obj.Fra.Currency;
    this.model.txtNotional=this.obj.Fra.Notional;
    this.model.txtAgreedRate=this.obj.Fra.AgreedRate;
    this.model.cmbFraBuySell=this.obj.Fra.BuySell;
    this.model.cmbRateType=this.obj.Fra.RateType;
    this.model.txtTenor=this.obj.Fra.Tenor;
    this.model.txtStartDate=this.obj.Fra.StartDate;
    this.model.txtMaturityDate=this.obj.Fra.MaturityDate;
    this.model.txtQuoteDate=this.obj.Fra.QuoteDate;
    this.model.cntQuoteCalendars=this.obj.Fra.Calendars;
    this.model.txtQuoteLag=this.obj.Fra.Lag;
    this.model.txtSettlementDate=this.obj.Fra.SettlementDate;
    this.model.cmbDayCount=this.obj.Fra.DayCount;
    this.model.cmbDiscountCurve=this.obj.Fra.DiscountCurve;
    this.model.cmbMarketIndex=this.obj.Fra.MarketIndex;
    this.model.cmbPayBusDay=this.obj.Fra.PayBusDay;
    this.model.cmbPayCalendars=this.obj.Fra.Calendars;
    this.model.cmbPaymentConventionPnl=this.obj.Fra.PaymentConvension;
    this.model.cmbResetConvention=this.obj.Fra.ResetConvention;
    this.model.txtFWDRate=this.obj.Fra.FWDRate;
    this.model.cmbRateSettingType=this.obj.Fra.RateSettingType;
    this.model.cmbResetType=this.obj.Fra.ResetType;
    this.model.txtPrecision=this.obj.Fra.Precision;
    this.model.txtPV=this.obj.Fra.PV;
    this.model.cmbPVCurrency=this.obj.Fra.Currency;
    this.model.txtRecParallelDelta=this.obj.Fra.ParallelDelta;
    this.model.cmbCurve=this.obj.Fra.cmbCurve;
    console.log(this.model);
   },10)
  }

}
