import { Component, OnInit } from '@angular/core';
import { SwapOptionService } from '../services/swapoption.service';
import { SwapOptionModel } from '../models/swapoption.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption',
  templateUrl: './swapoption.component.html',
  styleUrls: ['./swapoption.component.css']
})
export class SwapoptionComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService ,private swapXmlServ:SwapOptionService,public model:SwapOptionModel)
  {}
  
  ngOnInit()
  {
   
     this.swapXmlServ.getData().subscribe(xmlRes=>{
     this.xml=xmlRes });
     //console.log(this.xml);
   setTimeout(() => {
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngx.xmlToJson(xml);
    this.obj=obj;
    this.model.cmbBuyFlag = this.obj.root.BuyFlag.Buy;     
    this.model.txtExpiryDate = this.obj.root.ExpiryDate;
    this.model.cmbOptionType = this.obj.root.OptionType.Option;
    this.model. cmbOptionStyle= this.obj.root.OptionStyle.Style1;             
    this.model.cmbOptionPosition =this.obj.root.OptionPosition.Fixed;
    this.model.cmbPricingMethod = this.obj.root.PricingMethod.Pricing; 
    this.model.txtSwapLag= this.obj.root.SwapLag;
    this.model.cmbSwapLagBusDay= this.obj.root.SwapLagBusDay;
    this.model.txtVolId = this.obj.root.VolId;
    this.model.cmbExercirseFlag = this.obj.root.ExerciseFlag.Flag;
    this.model.txtStrike= this.obj.root.Strike;
    this.model.txtSwapEndDate= this.obj.root.SwapEndDate;
    this.model.txtSwapRef = this.obj.root.SwapRef;
    this.model.txtSwapStartDate= this.obj.root.SwapStartDate;
    this.model.cmbExerciseType= this.obj.root.ExerciseType.Type;
    console.log(this.model);

this.model.cmbPayCurrency=this.obj.root.Currency.Cur;
this.model.txtPayTenor=this.obj.root.Tenor;
this.model.cmbRecCurrency=this.obj.root.Currency.Cur; 
this.model.txtRecTenor=this.obj.root.Tenor;
this.model.txtPayNotional=this.obj.root.Notional;
this.model.cmbPayNotionalExchange=this.obj.root.NotionalExchange.NE;         
this.model.txtRecNotional=this.obj.root.Notional;
this.model.cmbRecNotionalExchange=this.obj.root.NotionalExchange.NE;         
this.model.txtPayStartDate=this.obj.root.StartDate;
this.model.txtPayStartStub=this.obj.root.StartStub;
this.model.txtRecStartDate=this.obj.root.StartDate;
this.model.txtRecStartStub=this.obj.root.StartStub;
this.model.cmbPayStartDateRollFlag=this.obj.root.StartRoll.sr;
this.model.cmbPayEndDateRollFlag=this.obj.root.EndRoll.er;
this.model.cmbRecStartDateRollFlag=this.obj.root.StartRoll.sr;
this.model.cmbRecEndDateRollFlag=this.obj.root.EndRoll.er;
this.model.txtPayEndDate=this.obj.root.EndDate;
this.model.txtPayEndStub=this.obj.root.EndStub;
this.model.txtRecEndDate=this.obj.root.EndDate;
this.model.txtRecEndStub=this.obj.root.EndStub;
this.model.txtPayFrontstub=this.obj.root.StartStubMRate;
this.model.txtPayBackStub=this.obj.root.EndStubMRate;
this.model.txtRecFrontStub=this.obj.root.StartStubMRate;
this.model.legsPnl=this.obj.root.EndStubMRate;
this.model.txtPayFixedQuote=this.obj.root.FixedQuote;
this.model.txtPayGearFactor=this.obj.root.GearFactor;
this.model.txtPaySpread=this.obj.root.GearFactor;
this.model.txtRecFixedQuote=this.obj.root.FixedQuote;
this.model.txtRecGearFactor=this.obj.root.GearFactor;
this.model.txtRecSpread=this.obj.root.GearFactor;
this.model.cmbPayDayCount=this.obj.root.DayCount.dc; 
this.model.cmbRecDayCount=this.obj.root.DayCount.dc;
this.model.cmbPayDiscountCurve=this.obj.root.DiscountCurve.dcu;
this.model.cmbRecDiscountCurve=this.obj.root.DiscountCurve.dcu;
this.model.cmbPayAccrualBusDay=this.obj.root.AccrualBusDay.abd;
this.model.cntPayAccrualCalendars=this.obj.root.AccrualCalendars.ac;
this.model.cmbRecAccrualBusDay=this.obj.root.AccrualBusDay.abd;
this.model.cntRecAccrualCalendars=this.obj.root.AccrualCalendars.ac;
this.model.cmbPayAccrualFreq=this.obj.root.AccrualFreq.af;
this.model.cmbPayAccrualMarching=this.obj.root.AccrualMarching.am;                         
this.model.cmbRecAccrualFreq=this.obj.root.AccrualFreq.af;
this.model.cmbRecAccrualMarching=this.obj.root.AccrualMarching.am;
this.model.cmbPayAccrualRollDay=this.obj.root.AccrualRollDay;
this.model.cmbPayAccrualRollWeek=this.obj.root.AccrualRollWeek.arw;
this.model.cmbPayEndOfMonthIndicator=this.obj.root.AmortRollMonth;
this.model.cmbRecAccrualRollDay=this.obj.root.AccrualRollDay;
this.model.cmbRecAccrualRollWeek=this.obj.root.AccrualRollWeek.arw;
this.model.cmbRecEndOfMonthIndicator=this.obj.root.AmortRollMonth;
this.model.cmbPayCompounding=this.obj.root.Compounding.c;
this.model.cmbPayCompFreq=this.obj.root.CompFreq;
this.model.cmbRecCompounding=this.obj.root.Compounding.c;
this.model.cmbRecCompFreq=this.obj.root.CompFreq;

 },1000);
}
}
