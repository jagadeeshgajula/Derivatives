import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { SwapResetModel } from './swapreset.model';
import { SwapResetService } from './swapreset.service';

@Component({
  selector: 'app-swapreset',
  templateUrl: './swapreset.component.html',
  styleUrls: ['./swapreset.component.css']
})


  export class SwapresetComponent implements OnInit {

    obj;
    xml;
    model=new SwapResetModel();
  constructor(private swapresetService:SwapResetService){}
  ngOnInit(){
    this.swapresetService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cntPayQuoteCalender=this.obj[0].calendars;
      this.model.cntPayInitialQuotePayCalendars=this.obj[1].calendars;
      this.model.cmbPayResetAveragins=this.obj[2].resetAveraging;
      this.model.cmbPayResetConvention=this.obj[3].payconv;
      this.model.cmbPayResetBusDay=this.obj[4].busDay;
      this.model.cmbPayResetFreq=this.obj[5].frequency;
      this.model.cmbPayResetMarching=this.obj[6].marching;
      this.model.cmbPayResetPayRollDay=this.obj[7].rollDay;
      this.model.cmbPayResetRollWeek=this.obj[8].weekDay;
      this.model.cmbPayResetType=this.obj[9].resetType;
      this.model.cmbPayMarketIndex=this.obj[10].marketIndex;
     this.model.txtPayQuoteLag=this.obj[11].swapleg[14];
     this.model.txtPayInitialIntialPayQuoteDate=this.obj[11].swapleg[15];
     this.model.txtPayIntialQuoteLag=this.obj[11].swapleg[16];
     this.model.txtPayRateCutOff=this.obj[11].swapleg[17];
  

      
     this.model.cntRecQuoteCalender=this.obj[0].calendars;
     this.model.cntRecInitialQuotePayCalendars=this.obj[1].calendars;
     this.model.cmbRecResetAveragins=this.obj[2].resetAveraging;
     this.model.cmbRecResetConvention=this.obj[3].payconv;
     this.model.cmbRecResetBusDay=this.obj[4].busDay;
     this.model.cmbRecResetFreq=this.obj[5].frequency;
     this.model.cmbRecResetMarching=this.obj[6].marching;
     this.model.cmbRecResetPayRollDay=this.obj[7].rollDay;
     this.model.cmbRecResetRollWeek=this.obj[8].weekDay;
     this.model.cmbRecResetType=this.obj[9].resetType;
     this.model.cmbRecMarketIndex=this.obj[10].marketIndex;
    this.model.txtRecQuoteLag=this.obj[11].swapleg[14];
    this.model.txtRecIntialQuotePayDate=this.obj[11].swapleg[15];
    this.model.txtRecIntialcQuoteLag=this.obj[11].swapleg[16];
    this.model.txtRecRateCutOff=this.obj[11].swapleg[17];
 
     
  
    });

     
  }
  
 }
