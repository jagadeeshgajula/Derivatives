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
      this.model.cntPayQuoteCalender=this.obj[0].id;
      this.model.cntPayInitialQuotePayCalendars=this.obj[1].id;
      this.model.cmbPayResetAveragins=this.obj[2].id;
      this.model.cmbPayResetConvention=this.obj[3].id;
      this.model.cmbPayResetBusDay=this.obj[4].id;
      this.model.cmbPayResetFreq=this.obj[5].id;
      this.model.cmbPayResetMarching=this.obj[6].id;
      this.model.cmbPayResetPayRollDay=this.obj[7].id;
      this.model.cmbPayResetRollWeek=this.obj[8].id;
      this.model.cmbPayResetType=this.obj[9].id;
      this.model.cmbPayMarketIndex=this.obj[10].id;
     // this.model.cmbPayMarketIndex=this.obj[11].id;
     this.model.txtPayQuoteLag=this.obj[11].swapleg[0];
     this.model.txtPayIntialQuoteLag=this.obj[11].swapleg[1];
     this.model.txtPayRateCutOff=this.obj[11].swapleg[2];
     this.model.txtPayInitialIntialPayQuoteDate=this.obj[11].swapleg[3];

      
      this.model.cntRecQuoteCalender=this.obj[0].id;
      this.model.cntRecInitialQuotePayCalendars=this.obj[1].id;
      this.model.cmbRecResetAveragins=this.obj[2].id;
      this.model.cmbRecResetConvention=this.obj[3].id;
      this.model.cmbRecResetBusDay=this.obj[4].id;
      this.model.cmbRecResetFreq=this.obj[5].id;
      this.model.cmbRecResetMarching=this.obj[6].id;
      this.model.cmbRecResetPayRollDay=this.obj[7].id;
      this.model.cmbRecResetRollWeek=this.obj[8].id;
      this.model.cmbRecResetType=this.obj[9].id;
      this.model.cmbRecMarketIndex=this.obj[10].id;
      
      this.model.txtRecQuoteLag=this.obj[11].swapleg[0];
      this.model.txtRecIntialcQuoteLag=this.obj[11].swapleg[1];
      this.model.txtRecRateCutOff=this.obj[11].swapleg[2];
      this.model.txtRecIntialQuotePayDate=this.obj[11].swapleg[3];
 
     
  
    });

     
  }
  
 }
