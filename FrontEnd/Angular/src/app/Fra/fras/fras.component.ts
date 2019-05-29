import { FrasModel } from './fras.model';
import { FrasService } from './fras.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fra',
  templateUrl: './fras.component.html',
  styleUrls: ['./fras.component.css']
})
export class FrasComponent implements OnInit {

 
  obj;
  model = new FrasModel();
  constructor(private fraService:FrasService) {}

  ngOnInit() {
    this.fraService.getFra().subscribe(res=>{
      this.obj=res;

      
    this.model.cmbCurrency=this.obj[0].id;
    this.model.txtNotional=this.obj[1].fraFields[0];
    this.model.txtAgreedRate=this.obj[1].fraFields[1];
    this.model.cmbFraBuySell=this.obj[2].id;
    this.model.cmbRateType=this.obj[3].id;
    this.model.txtTenor=this.obj[1].fraFields[2];
    this.model.txtStartDate=this.obj[1].fraFields[3];
    this.model.txtMaturityDate=this.obj[1].fraFields[4];
    this.model.txtQuoteDate=this.obj[1].fraFields[5]; 
    this.model.cntQuoteCalendars=this.obj[4].id; 
    this.model.txtQuoteLag=this.obj[1].fraFields[6];
    this.model.txtSettlementDate=this.obj[1].fraFields[7]; 
    this.model.cmbDayCount=this.obj[5].id;
    this.model.cmbDiscountCurve=this.obj[6].id;
    this.model.cmbMarketIndex=this.obj[7].id;
    this.model.cmbPayBusDay=this.obj[8].id;
    this.model.cntPayCalendars=this.obj[9].id;
    this.model.cmbPaymentConvention=this.obj[10].id;
    this.model.cmbResetConvention=this.obj[11].id;
    //this.model.txtFWDRate=this.obj[12].id;
    this.model.cmbRateSettingType=this.obj[12].id;
    this.model.cmbResetType=this.obj[13].id;
    this.model.txtPrecision=this.obj[1].fraFields[8]; 
    //this.model.txtPV=this.obj[22];
    this.model.cmbPVCurrency=this.obj[14].id;
   
    
    //this.model.txtRecParallelDelta=this.obj.Fra.ParallelDelta;
    //this.model.cmbCurve=this.obj[15]; 
    console.log(this.obj);
    });
   setTimeout(()=>{

   },1000);
   
  }

}
