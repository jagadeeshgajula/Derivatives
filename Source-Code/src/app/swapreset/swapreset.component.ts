import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { ResetsService } from '../services/resets.service';
import { SwapResetModel } from './swapreset.model';

@Component({
  selector: 'app-swapreset',
  templateUrl: './swapreset.component.html',
  styleUrls: ['./swapreset.component.css']
})
export class SwapresetComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private swapXmlServ:ResetsService,public model:SwapResetModel)
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
     /* Payment side model values for reset */

this.model.cntPayQuoteCalender = this.obj.reset.QuoteCalendars.qc;                                  ;
this.model.txtPayQuoteLag = this.obj.reset.QuoteLag;
this.model.cntPayIntial = this.obj.reset.InitialQuoteCalendars.iqc;        
this.model.IntialPayQuoteDate= this.obj.reset.InitialQuoteDate;
this.model.IntialQuoteLag= this.obj.reset.InitialQuoteLag;
this.model.cmbPayResetAveragins= this.obj.reset.ResetAveraging.ra;
this.model.cmbPayResetConvention = this.obj.reset.ResetConvention.rc;                              
this.model.txtPayRateCutOff= this.obj.reset.RateCutOff;
this.model.cmbPayResetBusDay= this.obj.reset.ResetBusDay.rbd;
this.model.cmbPayResetFreq= this.obj.reset.ResetFreq.rf;                            
this.model.cmbPayResetMarching= this.obj.reset.ResetMarching.rm;                              
this.model.cmbPayResetPayRollDay= this.obj.reset.ResetRollDay;
this.model.cmbPayResetRollWeek= this.obj.reset.ResetRollWeek.rw;
this.model.cmbPayResetType= this.obj.reset.ResetType;
this.model.cmbPayMarketIndex=this.obj.reset.MarketIndex.mi;


 /* Reciver side model values for reset */   

 this.model.cntRecQuoteCalender = this.obj.reset.QuoteCalendars.qc;                                  ;
 this.model.txtRecQuoteLag = this.obj.reset.QuoteLag;
 this.model.cntRecIntial = this.obj.reset.InitialQuoteCalendars.iqc;                          
 this.model.IntialRecQuoteDate= this.obj.reset.InitialQuoteDate;
 this.model.IntialQuoteLag= this.obj.reset.InitialQuoteLag;
 this.model.cmbRecResetAveragins= this.obj.reset.ResetAveraging.ra;
 this.model.cmbRecResetConvention = this.obj.reset.ResetConvention.rc;                              
 this.model.txtRecRateCutOff= this.obj.reset.RateCutOff;
 this.model.cmbRecResetBusDay= this.obj.reset.ResetBusDay.rbd;
 this.model.cmbRecResetFreq= this.obj.reset.ResetFreq.rf;                            
 this.model.cmbRecResetMarching= this.obj.reset.ResetMarching.rm;                              
 this.model.cmbRecResetPayRollDay= this.obj.reset.ResetRollDay;
 this.model.cmbRecResetRollWeek= this.obj.reset.ResetRollWeek.rw;
 this.model.cmbRecResetType= this.obj.reset.ResetType;
 this.model.cmbRecMarketIndex=this.obj.reset.MarketIndex.mi;
                              
   console.log(this.model);
 },10);
  }
}

