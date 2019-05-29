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
      this.model.cmbPayPayBusDay=this.obj[0].id;
      this.model.cntPayPayCalendars=this.obj[1].id;
      this.model.cmbPayPayFreqPnl=this.obj[2].id;
      this.model.cmbPayPayMarching=this.obj[3].id;
      this.model.cmbPayPaymentConvention=this.obj[4].id;
      this.model.cmbPayPaymentConversionCurrency=this.obj[5].id;
      this.model.cmbPayPaymentConversionIndex=this.obj[6].id;
      this.model.txtPayPaymentConversionLag=this.obj[9].swapleg[8];
      this.model.cmbPayPayRollDay=this.obj[7].id;
      this.model.cmbPayRollWeek=this.obj[8].id;
      this.model.txtPayLag=this.obj[9].swapleg[9];


      this.model.cmbRecPayBusDay=this.obj[0].id;
      this.model.cntRecPayCalendars=this.obj[1].id;
      this.model.cmbRecPayFreqPnl=this.obj[2].id;
      this.model.cmbRecPayMarching=this.obj[3].id;
      this.model.cmbRecPaymentConvention=this.obj[4].id;
      this.model.cmbRecPaymentConversionCurrency=this.obj[5].id;
      this.model.cmbRecPaymentConversionIndex=this.obj[6].id;
      this.model.txtRecPaymentConversionLag=this.obj[9].swapleg[8];
      this.model.cmbRecPayRollDay=this.obj[7].id;
      this.model.cmbRecRollWeek=this.obj[8].id;
      this.model.txtRecLag=this.obj[9].swapleg[9];
      


    });

     
  }
  
 }
