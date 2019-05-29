import { SwapTicketModel } from './swapticket.model';
import { SwapTicketService } from './swapticket.service';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";

@Component({
  selector: 'app-swapticket',
  templateUrl: './swapticket.component.html',
  styleUrls: ['./swapticket.component.css']
})
export class SwapticketComponent implements OnInit {
  onValueChange(value: Date): void {
console.log(value);
  }
  xml;
  obj;
  model=new SwapTicketModel();
  constructor(private swapticketService:SwapTicketService){}
  ngOnInit(){
    this.swapticketService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayCurrency=this.obj[0].id;
      this.model.txtPayTenor=this.obj[1].swaptenor[0];
      this.model.txtPayNotional=this.obj[2].swapleg[0];
      this.model.cmbPayNotionalExchange=this.obj[3].id;
      this.model.txtPayStartDate=this.obj[2].swapleg[1];  
      this.model.txtPayStartStub=this.obj[2].swapleg[2];
      this.model.cmbPayStartDateRollFlag=this.obj[4].id;
      this.model.cmbPayEndDateRollFlag=this.obj[5].id;
      this.model.txtPayEndDate=this.obj[2].swapleg[15];
      this.model.txtPayEndStub=this.obj[2].swapleg[15];
      this.model.txtPayFrontstub=this.obj[2].swapleg[3];
      this.model.txtPayBackStub=this.obj[2].swapleg[4];
      this.model.txtPayFixedQuote=this.obj[2].swapleg[5];
      this.model.txtPayGearFactor=this.obj[2].swapleg[6];
      this.model.txtPaySpread=this.obj[2].swapleg[7];
      this.model.cmbPayDayCount=this.obj[6].id;
      this.model.cmbPayDiscountCurve=this.obj[7].id;
      this.model.cmbPayAccrualBusDay=this.obj[8].id;
      this.model.cntPayAccrualCalendars=this.obj[9].id;
      this.model.cmbPayAccrualFreq=this.obj[10].id;
      this.model.cmbPayAccrualMarching=this.obj[11].id;
      this.model.cmbPayAccrualRollDay=this.obj[12].id;
      this.model.cmbPayAccrualRollWeek=this.obj[13].id;
      this.model.cmbPayEndOfMonthIndicator=this.obj[14].id;
      this.model.cmbPayCompounding=this.obj[15].id;
      this.model.cmbPayCompFreq=this.obj[10].id;



      this.model.cmbRecCurrency=this.obj[0].id;
      this.model.txtRecTenor=this.obj[1].swaptenor[0];
      this.model.txtRecNotional=this.obj[2].swapleg[0];
      this.model.cmbRecNotionalExchange=this.obj[3].id;
      this.model.txtRecStartDate=this.obj[2].swapleg[1];
      this.model.txtRecStartStub=this.obj[2].swapleg[2];
      this.model.cmbRecStartDateRollFlag=this.obj[4].id;
      this.model.cmbRecEndDateRollFlag=this.obj[5].id;
      this.model.txtRecEndDate=this.obj[2].swapleg[15];
      this.model.txtRecEndStub=this.obj[2].swapleg[15];
      this.model.txtRecFrontStub=this.obj[2].swapleg[3];
      this.model.legsPnl=this.obj[2].swapleg[4];
      this.model.txtRecFixedQuote=this.obj[2].swapleg[5];
      this.model.txtRecGearQuote=this.obj[2].swapleg[6];
      this.model.txtRecSpread=this.obj[2].swapleg[7];
      this.model.cmbRecDayCount=this.obj[6].id;
      this.model.cmbRecDiscountCurve=this.obj[7].id;
      this.model.cmbRecAccrualBusDay=this.obj[8].id;
      this.model.cntRecAccrualCalendars=this.obj[9].id;
      this.model.cmbRecAccrualFreq=this.obj[10].id;
      this.model.cmbRecAccrualMarching=this.obj[11].id;
      this.model.cmbRecAccrualRollDay=this.obj[12].id;
      this.model.cmbRecAccrualRollWeek=this.obj[13].id;
      this.model.cmbRecEndOfMonthIndicator=this.obj[14].id;
      this.model.cmbRecCompounding=this.obj[15].id;
      this.model. cmbRecCompFreq=this.obj[10].id;





      
     
 console.log(this.obj);
    });

     
  }
  
 }
