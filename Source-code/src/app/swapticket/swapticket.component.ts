import { SwapTicketModel } from './swapticket.model';
import { SwapTicketService } from './swapticket.service';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";

@Component({
  selector: 'app-swapticket',
  templateUrl: './swapticket.component.html',
  styleUrls: ['./swapticket.component.css']
})
export class SwapticketComponent implements OnInit {

  xml;
  obj;
  
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private xmlService:SwapTicketService,
    public model:SwapTicketModel
  ){}
  ngOnInit(){
    this.xmlService.getData().subscribe(xmlRes=>{
      this.xml=xmlRes;
    })
 
    
    setTimeout(()=>{
      const parser=new DOMParser();
      const xml=parser.parseFromString(this.xml,"text/xml");
      const obj=this.ngxXml2jsonService.xmlToJson(xml);
      this.obj=obj;
     this.model.cmbPayCurrency=this.obj.swapticket.Currency.Cur;
                               
     this.model.txtPayTenor=this.obj.swapticket.Tenor;
     this.model.cmbRecCurrency=this.obj.swapticket.Currency.Cur;
     this.model.txtRecTenor=this.obj.swapticket.Tenor;
     this.model.txtPayNotional=this.obj.swapticket.Notional;
     this.model.cmbPayNotionalExchange=this.obj.swapticket.NotionalExchange.NE;
     this.model.txtRecNotional=this.obj.swapticket.Notional;
     this.model.cmbRecNotionalExchange=this.obj.swapticket.NotionalExchange.NE;
     this.model.txtPayStartDate=this.obj.swapticket.StartDate;
     this.model.txtPayStartStub=this.obj.swapticket.StartStub;
     this.model.txtRecStartDate=this.obj.swapticket.StartDate;
     this.model.txtRecStartStub=this.obj.swapticket.StartStub;
     this.model.cmbPayStartDateRollFlag=this.obj.swapticket.StartRoll.sr;
     this.model.cmbPayEndDateRollFlag=this.obj.swapticket.EndRoll.er;
     this.model.cmbRecStartDateRollFlag=this.obj.swapticket.StartRoll.sr;
     this.model.cmbRecEndDateRollFlag=this.obj.swapticket.EndRoll.er;
     this.model.txtPayEndDate=this.obj.swapticket.EndDate;
     this.model.txtPayEndStub=this.obj.swapticket.EndStub;
     this.model.txtRecEndDate=this.obj.swapticket.EndDate;
     this.model.txtRecEndStub=this.obj.swapticket.EndStub;
     this.model.txtPayFrontstub=this.obj.swapticket.StartStubMRate;
     this.model.txtPayBackStub=this.obj.swapticket.EndStubMRate;
     this.model.txtRecFrontStub=this.obj.swapticket.StartStubMRate;
     this.model.legsPnl=this.obj.swapticket.EndStubMRate;
     this.model.txtPayFixedQuote=this.obj.swapticket.FixedQuote;
     this.model.txtPayGearFactor=this.obj.swapticket.GearFactor;
     this.model.txtPaySpread=this.obj.swapticket.GearFactor;
     this.model.txtRecFixedQuote=this.obj.swapticket.FixedQuote;
     this.model.txtRecGearFactor=this.obj.swapticket.GearFactor;
     this.model.txtRecSpread=this.obj.swapticket.GearFactor;
     this.model.cmbPayDayCount=this.obj.swapticket.DayCount.dc;
    this.model.cmbRecDayCount=this.obj.swapticket.DayCount.dc;
    this.model.cmbPayDiscountCurve=this.obj.swapticket.DiscountCurve.dcu;
   this.model.cmbRecDiscountCurve=this.obj.swapticket.DiscountCurve.dcu;
    this.model.cmbPayAccrualBusDay=this.obj.swapticket.AccrualBusDay.abd;
  this.model.cntPayAccrualCalendars=this.obj.swapticket.AccrualCalendars.ac;
  this.model.cmbRecAccrualBusDay=this.obj.swapticket.AccrualBusDay.abd;
  this.model.cntRecAccrualCalendars=this.obj.swapticket.AccrualCalendars.ac;
  this.model.cmbPayAccrualFreq=this.obj.swapticket.AccrualFreq.af;
  this.model.cmbPayAccrualMarching=this.obj.swapticket.AccrualMarching.am;
  this.model.cmbRecAccrualFreq=this.obj.swapticket.AccrualFreq.af;
  this.model.cmbRecAccrualMarching=this.obj.swapticket.AccrualMarching.am;
  this.model.cmbPayAccrualRollDay=this.obj.swapticket.AccrualRollDay;
  this.model.cmbPayAccrualRollWeek=this.obj.swapticket.AccrualRollWeek.arw;
  this.model.cmbPayEndOfMonthIndicator=this.obj.swapticket.AmortRollMonth;
   this.model.cmbRecAccrualRollDay=this.obj.swapticket.AccrualRollDay;
   this.model.cmbRecAccrualRollWeek=this.obj.swapticket.AccrualRollWeek.arw;
   this.model.cmbRecEndOfMonthIndicator=this.obj.swapticket.AmortRollMonth;
   this.model.cmbPayCompounding=this.obj.swapticket.Compounding.c;
   this.model.cmbPayCompFreq=this.obj.swapticket.CompFreq;
   this.model.cmbRecCompounding=this.obj.swapticket.Compounding.c;
  this.model.cmbRecCompFreq=this.obj.swapticket.CompFreq;
        },10); 
   }
 }
 
