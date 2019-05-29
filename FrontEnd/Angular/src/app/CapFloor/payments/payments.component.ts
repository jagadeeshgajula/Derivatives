import { PaymentModel } from './payment.model';
import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  obj;
model=new PaymentModel();

  constructor(
    private paymentService:PaymentService) { }

  ngOnInit() {
  this.paymentService.getData().subscribe(res=>{
    this.obj=res;

    this.model.cmbDayCount=this.obj[0].daycount;
    this.model.cmbDiscountCurve=this.obj[1].id;
    this.model.cmbPayBusDay=this.obj[2].id;
    this.model.cntPayCalendars=this.obj[3].id;
    this.model.cmbPayFreq=this.obj[4].id;
    this.model.cmbPayMarching=this.obj[5].id;
    this.model.cmbPaymentConvention=this.obj[6].id;
    this.model.cmbPaymentConversionCurrency=this.obj[7].id;
    this.model.cmbPaymentConversionIndex=this.obj[8].id;  
    this.model.cmbPayRollDay=this.obj[10].id;
    this.model.cmbPayRollWeek=this.obj[11].id;

    this.model.txtPaymentConversionLag=this.obj[9].payfields[0];
    this.model.txtPayLag=this.obj[9].payfields[1];




    this.model.txtPV=this.obj;
    this.model.txtRecParallelDelta=this.obj;
     this.model.cmbPVCurrency=this.obj[7].id;
    
     this.model.cmbCurvePnl=this.obj[1].id;
  })

  setTimeout(()=> {

  },1000); 
  
  }
  

  

}
