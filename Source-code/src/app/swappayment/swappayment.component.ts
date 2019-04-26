import { SwapPaymentService } from './swappayment.service';
import { SwapPaymentModel } from './swappayment.model';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
@Component({
  selector: 'app-swappayment',
  templateUrl: './swappayment.component.html',
  styleUrls: ['./swappayment.component.css']
})
export class SwappaymentComponent implements OnInit {

  xml;
  obj;
  
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private xmlService:SwapPaymentService,
    public model:SwapPaymentModel
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
     this.model.cmbPayPayBusDay=this.obj.payment.PayBusDay.pbd;
     this.model.cntPayPayCalendars=this.obj.payment.PayCalendars.pc;
     this.model.cmbPayPayFreqPnl=this.obj.payment.PayFreq.pf;
     this.model.cmbPayPayMarching=this.obj.payment.PayMarching.pm;
     this.model.cmbPayPaymentConvention=this.obj.payment.PaymentConvention.pco;
     this.model.cmbPayPaymentConversionCurrency=this.obj.payment.PaymentConversionCurrency.Currency;
     this.model.cmbPayPaymentConversionIndex=this.obj.payment.PaymentConversionIndex.pci;
     this.model.txtPayPaymentConversionLag=this.obj.payment.PaymentConversionLag;
     this.model.cmbPayPayRollDay=this.obj.payment.PayRollDay;
     this.model.cmbPayRollWeek=this.obj.payment.PayRollWeek.prw;
     this.model.txtPayLag=this.obj.payment.PayLag;
     this.model.cmbRecPayBusDay=this.obj.payment.PayBusDay.pbd;
     this.model.cntRecPayCalendars=this.obj.payment.PayCalendars.pc;
     this.model.cmbRecPayFreqPnl=this.obj.payment.PayFreq.pf;
     this.model.cmbRecPayMarching=this.obj.payment.PayMarching.pm;
     this.model.cmbRecPaymentConvention=this.obj.payment.PaymentConvention.pco;
     this.model.cmbRecPaymentConversionCurrency=this.obj.payment.PaymentConversionCurrency.Currency;
     this.model.cmbRecPaymentConversionIndex=this.obj.payment.PaymentConversionIndex.pci;
     this.model.txtRecPaymentConversionLag=this.obj.payment.PaymentConversionLag;
     this.model.cmbRecPayRollDay=this.obj.payment.PayRollDay;
     this.model.cmbRecRollWeek=this.obj.payment.PayRollWeek.prw;
                
     this.model.txtRecLag=this.obj.payment.PayLag;

console.log(this.obj.payment);
  },10); 
   }
 }
 
