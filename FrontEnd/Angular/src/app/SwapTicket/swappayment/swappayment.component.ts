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
  model=new SwapPaymentModel();
  constructor(private swappaymentService:SwapPaymentService){}
  ngOnInit(){
    this.swappaymentService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayPayBusDay=this.obj[0].busDay;
      this.model.cntPayPayCalendars=this.obj[1].calendars;
      this.model.cmbPayPayFreqPnl=this.obj[2].frequency;
      this.model.cmbPayPayMarching=this.obj[3].marching;
      this.model.cmbPayPaymentConvention=this.obj[4].payconv;
      this.model.cmbPayPaymentConversionCurrency=this.obj[5].currency;
      this.model.cmbPayPaymentConversionIndex=this.obj[6].convIndex;
      this.model.txtPayPaymentConversionLag=this.obj[9].swapleg[12];
      this.model.cmbPayPayRollDay=this.obj[7].rollDay;
      this.model.cmbPayRollWeek=this.obj[8].weekDay;
      this.model.txtPayLag=this.obj[9].swapleg[13];


      this.model.cmbRecPayBusDay=this.obj[0].busDay;
      this.model.cntRecPayCalendars=this.obj[1].calendars;
      this.model.cmbRecPayFreqPnl=this.obj[2].frequency;
      this.model.cmbRecPayMarching=this.obj[3].marching;
      this.model.cmbRecPaymentConvention=this.obj[4].payconv;
      this.model.cmbRecPaymentConversionCurrency=this.obj[5].currency;
      this.model.cmbRecPaymentConversionIndex=this.obj[6].convIndex;
      this.model.txtRecPaymentConversionLag=this.obj[9].swapleg[12];
      this.model.cmbRecPayRollDay=this.obj[7].rollDay;
      this.model.cmbRecRollWeek=this.obj[8].weekDay;
      this.model.txtRecLag=this.obj[9].swapleg[13];
      


    });

     
  }
  
 }
