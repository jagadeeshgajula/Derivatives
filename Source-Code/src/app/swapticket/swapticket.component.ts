import { SwapTicketModel } from './swapticket.model';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
import { SwapTicketService } from '../services/swapticket.service';

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
     this.model.cmbPayCurrency=[this.obj.swapticket.Currency.Currency1,
                                this.obj.swapticket.Currency.Currency2,
                                this.obj.swapticket.Currency.Currency3,
                                this.obj.swapticket.Currency.Currency4,
                                this.obj.swapticket.Currency.Currency5,
                                this.obj.swapticket.Currency.Currency6,
                                this.obj.swapticket.Currency.Currency7,
                                this.obj.swapticket.Currency.Currency8,
                                this.obj.swapticket.Currency.Currency9,
                                this.obj.swapticket.Currency.Currency10,
                                this.obj.swapticket.Currency.Currency11,
                                this.obj.swapticket.Currency.Currency12,
                                this.obj.swapticket.Currency.Currency13,
                                this.obj.swapticket.Currency.Currency14,
                                this.obj.swapticket.Currency.Currency15,
                              ];
     this.model.txtPayTenor=this.obj.swapticket.Tenor;
     this.model.cmbRecCurrency=[this.obj.swapticket.Currency.Currency1,
                                this.obj.swapticket.Currency.Currency2,
                                this.obj.swapticket.Currency.Currency3,
                                this.obj.swapticket.Currency.Currency4,
                                this.obj.swapticket.Currency.Currency5,
                                this.obj.swapticket.Currency.Currency6,
                                this.obj.swapticket.Currency.Currency7,
                                this.obj.swapticket.Currency.Currency8,
                                this.obj.swapticket.Currency.Currency9,
                                this.obj.swapticket.Currency.Currency10,
                                this.obj.swapticket.Currency.Currency11,
                                this.obj.swapticket.Currency.Currency12,
                                this.obj.swapticket.Currency.Currency13,
                                this.obj.swapticket.Currency.Currency14,
                                this.obj.swapticket.Currency.Currency15,
    ];
     this.model.txtRecTenor=this.obj.swapticket.Tenor;
     this.model.txtPayNotional=this.obj.swapticket.Notional;
     this.model.cmbPayNotionalExchange=[this.obj.swapticket.NotionalExchange.NE1,
                                        this.obj.swapticket.NotionalExchange.NE2,
                                        this.obj.swapticket.NotionalExchange.NE3,
                                        this.obj.swapticket.NotionalExchange.NE4,
                                        this.obj.swapticket.NotionalExchange.NE5,
                                        this.obj.swapticket.NotionalExchange.NE6,
                                        this.obj.swapticket.NotionalExchange.NE7,
                                        this.obj.swapticket.NotionalExchange.NE8,];
     this.model.txtRecNotional=this.obj.swapticket.Notional;
     this.model.cmbRecNotionalExchange=[this.obj.swapticket.NotionalExchange.NE1,
                                        this.obj.swapticket.NotionalExchange.NE2,
                                        this.obj.swapticket.NotionalExchange.NE3,
                                        this.obj.swapticket.NotionalExchange.NE4,
                                        this.obj.swapticket.NotionalExchange.NE5,
                                        this.obj.swapticket.NotionalExchange.NE6,
                                        this.obj.swapticket.NotionalExchange.NE7,
                                        this.obj.swapticket.NotionalExchange.NE8,];
     this.model.txtPayStartDate=this.obj.swapticket.StartDate;
     this.model.txtPayStartStub=this.obj.swapticket.StartStub;
     this.model.txtRecStartDate=this.obj.swapticket.StartDate;
     this.model.txtRecStartStub=this.obj.swapticket.StartStub;
     this.model.cmbPayStartDateRollFlag=[this.obj.swapticket.StartRoll.sr1,this.obj.swapticket.StartRoll.sr2];
     this.model.cmbPayEndDateRollFlag=[this.obj.swapticket.EndRoll.er1,this.obj.swapticket.EndRoll.er2];
     this.model.cmbRecStartDateRollFlag=[this.obj.swapticket.StartRoll.sr1,this.obj.swapticket.StartRoll.sr2];
     this.model.cmbRecEndDateRollFlag=[this.obj.swapticket.EndRoll.er1,this.obj.swapticket.EndRoll.er2];
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
     this.model.cmbPayDayCount=[this.obj.swapticket.DayCount.dc1,
                                this.obj.swapticket.DayCount.dc2,
                                this.obj.swapticket.DayCount.dc3,
                                this.obj.swapticket.DayCount.dc4,
                                this.obj.swapticket.DayCount.dc5,
                                this.obj.swapticket.DayCount.dc6,
                                this.obj.swapticket.DayCount.dc7,
                                this.obj.swapticket.DayCount.dc8,
                                this.obj.swapticket.DayCount.dc9,
                                this.obj.swapticket.DayCount.dc10,
                                this.obj.swapticket.DayCount.dc11,
                                this.obj.swapticket.DayCount.dc12,
                                this.obj.swapticket.DayCount.dc13,
                                this.obj.swapticket.DayCount.dc14];
     this.model.cmbRecDayCount=[this.obj.swapticket.DayCount.dc1,
                                this.obj.swapticket.DayCount.dc2,
                                this.obj.swapticket.DayCount.dc3,
                                this.obj.swapticket.DayCount.dc4,
                                this.obj.swapticket.DayCount.dc5,
                                this.obj.swapticket.DayCount.dc6,
                                this.obj.swapticket.DayCount.dc7,
                                this.obj.swapticket.DayCount.dc8,
                                this.obj.swapticket.DayCount.dc9,
                                this.obj.swapticket.DayCount.dc10,
                                this.obj.swapticket.DayCount.dc11,
                                this.obj.swapticket.DayCount.dc12,
                                this.obj.swapticket.DayCount.dc13,
                                this.obj.swapticket.DayCount.dc14];
     this.model.cmbPayDiscountCurve=[this.obj.swapticket.DiscountCurve.dcu1,
                                    this.obj.swapticket.DiscountCurve.dcu2,
                                    this.obj.swapticket.DiscountCurve.dcu3,
                                    this.obj.swapticket.DiscountCurve.dcu4,
                                    this.obj.swapticket.DiscountCurve.dcu5,
                                    this.obj.swapticket.DiscountCurve.dcu6,
                                    this.obj.swapticket.DiscountCurve.dcu7,
                                    this.obj.swapticket.DiscountCurve.dcu8,
                                    this.obj.swapticket.DiscountCurve.dcu9,
                                    this.obj.swapticket.DiscountCurve.dcu10];
     this.model.cmbRecDiscountCurve=[this.obj.swapticket.DiscountCurve.dcu1,
                                    this.obj.swapticket.DiscountCurve.dcu2,
                                    this.obj.swapticket.DiscountCurve.dcu3,
                                    this.obj.swapticket.DiscountCurve.dcu4,
                                    this.obj.swapticket.DiscountCurve.dcu5,
                                    this.obj.swapticket.DiscountCurve.dcu6,
                                    this.obj.swapticket.DiscountCurve.dcu7,
                                    this.obj.swapticket.DiscountCurve.dcu8,
                                    this.obj.swapticket.DiscountCurve.dcu9,
                                    this.obj.swapticket.DiscountCurve.dcu10];
     this.model.cmbPayAccrualBusDay=[this.obj.swapticket.AccrualBusDay.abd1,
                                     this.obj.swapticket.AccrualBusDay.abd2,
                                     this.obj.swapticket.AccrualBusDay.abd3,
                                     this.obj.swapticket.AccrualBusDay.abd4];
     this.model.cntPayAccrualCalendars=[this.obj.swapticket.AccrualCalendars.ac1,
                                        this.obj.swapticket.AccrualCalendars.ac2,
                                        this.obj.swapticket.AccrualCalendars.ac3,
                                        this.obj.swapticket.AccrualCalendars.ac4,
                                        this.obj.swapticket.AccrualCalendars.ac5,
                                        this.obj.swapticket.AccrualCalendars.ac6,
                                        this.obj.swapticket.AccrualCalendars.ac7,
                                        this.obj.swapticket.AccrualCalendars.ac8,
                                        this.obj.swapticket.AccrualCalendars.ac9,
                                        this.obj.swapticket.AccrualCalendars.ac10];
     this.model.cmbRecAccrualBusDay=[this.obj.swapticket.AccrualBusDay.abd1,
                                    this.obj.swapticket.AccrualBusDay.abd2,
                                    this.obj.swapticket.AccrualBusDay.abd3,
                                    this.obj.swapticket.AccrualBusDay.abd4];
     this.model.cntRecAccrualCalendars=[this.obj.swapticket.AccrualCalendars.ac1,
                                        this.obj.swapticket.AccrualCalendars.ac2,
                                        this.obj.swapticket.AccrualCalendars.ac3,
                                        this.obj.swapticket.AccrualCalendars.ac4,
                                        this.obj.swapticket.AccrualCalendars.ac5,
                                        this.obj.swapticket.AccrualCalendars.ac6,
                                        this.obj.swapticket.AccrualCalendars.ac7,
                                        this.obj.swapticket.AccrualCalendars.ac8,
                                        this.obj.swapticket.AccrualCalendars.ac9,
                                        this.obj.swapticket.AccrualCalendars.ac10];
     this.model.cmbPayAccrualFreq=[this.obj.swapticket.AccrualFreq.af1,
                                  this.obj.swapticket.AccrualFreq.af2,
                                  this.obj.swapticket.AccrualFreq.af3,
                                  this.obj.swapticket.AccrualFreq.af4,
                                  this.obj.swapticket.AccrualFreq.af5,
                                  this.obj.swapticket.AccrualFreq.af6,
                                  this.obj.swapticket.AccrualFreq.af7,
                                  this.obj.swapticket.AccrualFreq.af8,
                                  this.obj.swapticket.AccrualFreq.af9,
                                  this.obj.swapticket.AccrualFreq.af10];
     this.model.cmbPayAccrualMarching=[this.obj.swapticket.AccrualMarching.am1,
                                       this.obj.swapticket.AccrualMarching.am2,
                                       this.obj.swapticket.AccrualMarching.am3,
                                       this.obj.swapticket.AccrualMarching.am4,
                                       this.obj.swapticket.AccrualMarching.am5,
                                       this.obj.swapticket.AccrualMarching.am6,
                                       this.obj.swapticket.AccrualMarching.am7];                         
     this.model.cmbRecAccrualFreq=[this.obj.swapticket.AccrualFreq.af1,
                                    this.obj.swapticket.AccrualFreq.af2,
                                    this.obj.swapticket.AccrualFreq.af3,
                                    this.obj.swapticket.AccrualFreq.af4,
                                    this.obj.swapticket.AccrualFreq.af5,
                                    this.obj.swapticket.AccrualFreq.af6,
                                    this.obj.swapticket.AccrualFreq.af7,
                                    this.obj.swapticket.AccrualFreq.af8,
                                    this.obj.swapticket.AccrualFreq.af9,
                                    this.obj.swapticket.AccrualFreq.af10];
     this.model.cmbRecAccrualMarching=[this.obj.swapticket.AccrualMarching.am1,
                                      this.obj.swapticket.AccrualMarching.am2,
                                      this.obj.swapticket.AccrualMarching.am3,
                                      this.obj.swapticket.AccrualMarching.am4,
                                      this.obj.swapticket.AccrualMarching.am5,
                                      this.obj.swapticket.AccrualMarching.am6,
                                      this.obj.swapticket.AccrualMarching.am7];
     this.model.cmbPayAccrualRollDay=this.obj.swapticket.AccrualRollDay;
     this.model.cmbPayAccrualRollWeek=[this.obj.swapticket.AccrualRollWeek.arw1,
                                      this.obj.swapticket.AccrualRollWeek.arw2,
                                      this.obj.swapticket.AccrualRollWeek.arw3,
                                      this.obj.swapticket.AccrualRollWeek.arw4,
                                      this.obj.swapticket.AccrualRollWeek.arw5,
                                      this.obj.swapticket.AccrualRollWeek.arw6,
                                      this.obj.swapticket.AccrualRollWeek.arw7,
                                      this.obj.swapticket.AccrualRollWeek.arw8];
     this.model.cmbPayEndOfMonthIndicator=this.obj.swapticket.AmortRollMonth;
     this.model.cmbRecAccrualRollDay=this.obj.swapticket.AccrualRollDay;
     this.model.cmbRecAccrualRollWeek=[this.obj.swapticket.AccrualRollWeek.arw1,
                                      this.obj.swapticket.AccrualRollWeek.arw2,
                                      this.obj.swapticket.AccrualRollWeek.arw3,
                                      this.obj.swapticket.AccrualRollWeek.arw4,
                                      this.obj.swapticket.AccrualRollWeek.arw5,
                                      this.obj.swapticket.AccrualRollWeek.arw6,
                                      this.obj.swapticket.AccrualRollWeek.arw7,
                                      this.obj.swapticket.AccrualRollWeek.arw8];
     this.model.cmbRecEndOfMonthIndicator=this.obj.swapticket.AmortRollMonth;
     this.model.cmbPayCompounding=[this.obj.swapticket.Compounding.c1,
                                  this.obj.swapticket.Compounding.c2,
                                  this.obj.swapticket.Compounding.c3,
                                  this.obj.swapticket.Compounding.c4,
                                  this.obj.swapticket.Compounding.c5];
     this.model.cmbPayCompFreq=this.obj.swapticket.CompFreq;
     this.model.cmbRecCompounding=[this.obj.swapticket.Compounding.c1,
                                  this.obj.swapticket.Compounding.c2,
                                  this.obj.swapticket.Compounding.c3,
                                  this.obj.swapticket.Compounding.c4,
                                  this.obj.swapticket.Compounding.c5];
     this.model.cmbRecCompFreq=this.obj.swapticket.CompFreq;
     








    },10); 
   }
 }
 
