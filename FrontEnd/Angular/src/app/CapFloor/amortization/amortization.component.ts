import { AmortModel } from './amort.model';
import { AmortService } from './amort.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent implements OnInit {

  obj;
  model= new AmortModel();
  constructor(
    private amortService:AmortService) { }

  ngOnInit() {
   this.amortService.getData().subscribe(res=>{
     this.obj=res;
     
     this.model.cmbAmortType=this.obj[0].id;
     this.model.cmbAmortBusDay=this.obj[1].id;
     this.model.cntAmortCalendars=this.obj[2].id;
     this.model.cmbAmortFreq=this.obj[3].id;
     this.model.cmbAmortMarching=this.obj[4].id;
     this.model.cmbAmortRollDay=this.obj[5].id;
     this.model.cmbAmortRollWeek=this.obj[6].id;

     this.model.txtAmortAmount=this.obj[7].amortFields[2];
     this.model.txtAmortStartDate=this.obj[7].amortFields[0];
     this.model.txtAmortEndDate=this.obj[7].amortFields[1];


     this.model.txtPV=this.obj;
     this.model.cmbPVCurrency=this.obj;
     this.model.txtRecParallelDelta=this.obj;
     this.model.cmbCurvePnl=this.obj;

   });

   setTimeout(() => {
   
   }, 1000);
  }

}
