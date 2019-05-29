import { NgxXml2jsonService } from 'ngx-xml2json';
import { PaymentModel } from './payment.model';
import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  xml;
  obj;
  constructor(
    private paymentService:PaymentService,
    private model:PaymentModel,
    private ngxXml2jsonService:NgxXml2jsonService 
  ) { }

  ngOnInit() {
  this.paymentService.getData().subscribe(xmlRes=>{
    this.xml=xmlRes;
  })

  setTimeout(()=>{
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngxXml2jsonService.xmlToJson(xml);
    this.obj=obj;
    this.model.cmbDayCount=this.obj.payments.DayCount;
    this.model.cmbDiscountCurve=this.obj.payments.DiscountCurve;
    this.model.cmbPayBusDay=this.obj.payments.PayBusDay;
    this.model.cntPayCalendars=this.obj.payments.PayCalendars;
    this.model.cmbPayFreq=this.obj.payments.PayFreq;
    this.model.cmbPayMarching=this.obj.payments.PayMarching;
    this.model.cmbPaymentConvention=this.obj.payments.PaymentConvention;
    this.model.cmbPaymentConversionCurrency=this.obj.payments.PaymentConversionCurrency;
    this.model.cmbPaymentConversionIndex=this.obj.payments.PaymentConversionIndex;
    this.model.txtPaymentConversionLag=this.obj.payments.PaymentConversionLag;
    this.model.cmbPayRollDay=this.obj.payments.PayRollDay;
    this.model.cmbPayRollWeek=this.obj.payments.PayRollWeek;
    this.model.txtPayLag=this.obj.payments.PayLag;

    this.model.txtPV=this.obj.payments.Schedule.PV;
     this.model.cmbPVCurrency=this.obj.payments.Schedule.Currency;
     this.model.txtRecParallelDelta=this.obj.payments.Schedule.ParallelDelta;
     this.model.cmbCurvePnl=this.obj.payments.Schedule.Curve;
   
  
  })

  }

}
