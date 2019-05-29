import { ResetsModel } from './resets.model';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';
import { ResetsService } from './resets.service';

@Component({
  selector: 'app-resets',
  templateUrl: './resets.component.html',
  styleUrls: ['./resets.component.css']
})
export class ResetsComponent implements OnInit {

   obj;

   model= new ResetsModel();
  constructor(
    private resetsService:ResetsService) { }

  ngOnInit() {
    this.resetsService.getData().subscribe(res=>{
      this.obj=res;

      this.model.cntQuoteCalenders=this.obj[0].id;
      this.model.cntInitialQuoteCalenders=this.obj[1].id;  
      this.model.cmbResetAveraging=this.obj[2].id;
      this.model.cmbResetConvention=this.obj[3].id;

      this.model.cmbResetFreq=this.obj[4].id;
      this.model.cmbResetType=this.obj[5].id;

      this.model.cmbScheduleCustomFlag=this.obj[6].id;

      this.model.cmbMarketIndex=this.obj[7].id;
      


      this.model.txtGearFactor=this.obj[8].resfields[0];
      this.model.txtSpread=this.obj[8].resfields[1];
      this.model.txtStrike=this.obj[8].resfields[4];
      this.model.txtValid=this.obj[8].resfields[5];
      this.model.txtPricingMethod=this.obj[8].resfields[6];
      this.model.txtInitialQuoteDate=this.obj[8].resfields[7];
      this.model.txtInitialQuoteLag=this.obj[8].resfields[3];
      this.model.txtQuoteLag=this.obj[8].resfields[2];

  
      
     
    
     
      


      this.model.txtPV=this.obj.resets.Schedule.PV;
     this.model.cmbPVCurrency=this.obj.resets.Schedule.Currency;
     this.model.txtRecParallelDelta=this.obj.resets.Schedule.ParallelDelta;
     this.model.cmbCurvePnl=this.obj.resets.Schedule.Curve;


    })

    setTimeout(() => {
     
    
    }, 1000);
  }

}
