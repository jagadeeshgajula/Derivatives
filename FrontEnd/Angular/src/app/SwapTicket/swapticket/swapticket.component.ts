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
      this.model.cmbPay=this.obj[0].swapLeg;
      this.model.cmbPayCurrency=this.obj[1].currency;
       this.model.txtPay=this.obj[15].swapleg[0];
      this.model.txtPayTenor=this.obj[15].swapleg[1];
      this.model.txtPayNotional=this.obj[15].swapleg[2];
      this.model.cmbPayNotionalExchange=this.obj[2].notionalExchange;
      this.model.txtPayStartDate=this.obj[15].swapleg[3];
      this.model.txtPayStartStub=this.obj[15].swapleg[4];
      this.model.cmbPayStartDateRollFlag=this.obj[3].startRoll;
      this.model.cmbPayEndDateRollFlag=this.obj[4].endRoll;
      this.model.txtPayEndDate=this.obj[15].swapleg[5];
      this.model.txtPayEndStub=this.obj[15].swapleg[6];
      this.model.txtPayFrontstub=this.obj[15].swapleg[7];
      this.model.txtPayBackStub=this.obj[15].swapleg[8];
      this.model.txtPayFixedQuote=this.obj[15].swapleg[9];
      this.model.txtPayGearFactor=this.obj[15].swapleg[10];
      this.model.txtPaySpread=this.obj[15].swapleg[11];
      this.model.cmbPayDayCount=this.obj[5].dayCount;
      this.model.cmbPayDiscountCurve=this.obj[6].discountCurve;
      this.model.cmbPayAccrualBusDay=this.obj[7].busDay;
      this.model.cntPayAccrualCalendars=this.obj[8].calendars;
      this.model.cmbPayAccrualFreq=this.obj[9].frequency;
      this.model.cmbPayAccrualMarching=this.obj[10].marching;
      this.model.cmbPayAccrualRollDay=this.obj[11].rollDay;
      this.model.cmbPayAccrualRollWeek=this.obj[12].weekDay;
      this.model.cmbPayEndOfMonthIndicator=this.obj[13].eom;
      this.model.cmbPayCompounding=this.obj[14].compounding;
  



      this.model.cmbRec=this.obj[0].swapLeg;
      this.model.cmbRecCurrency=this.obj[1].currency;
       this.model.txtRec=this.obj[15].swapleg[0];
      this.model.txtRecTenor=this.obj[15].swapleg[1];
      this.model.txtRecNotional=this.obj[15].swapleg[2];
      this.model.cmbRecNotionalExchange=this.obj[2].notionalExchange;
      this.model.txtRecStartDate=this.obj[15].swapleg[3];
      this.model.txtRecStartStub=this.obj[15].swapleg[4];
      this.model.cmbRecStartDateRollFlag=this.obj[3].startRoll;
      this.model.cmbRecEndDateRollFlag=this.obj[4].endRoll;
      this.model.txtRecEndDate=this.obj[15].swapleg[5];
      this.model.txtRecEndStub=this.obj[15].swapleg[6];
      this.model.txtRecFrontStub=this.obj[15].swapleg[7];
      this.model.legsPnl=this.obj[15].swapleg[8];
      this.model.txtRecFixedQuote=this.obj[15].swapleg[9];
      this.model.txtRecGearFactor=this.obj[15].swapleg[10];
      this.model.txtRecSpread=this.obj[15].swapleg[11];
      this.model.cmbRecDayCount=this.obj[5].dayCount;
      this.model.cmbRecDiscountCurve=this.obj[6].discountCurve;
      this.model.cmbRecAccrualBusDay=this.obj[7].busDay;
      this.model.cntRecAccrualCalendars=this.obj[8].calendars;
      this.model.cmbRecAccrualFreq=this.obj[9].frequency;
      this.model.cmbRecAccrualMarching=this.obj[10].marching;
      this.model.cmbRecAccrualRollDay=this.obj[11].rollDay;
      this.model.cmbRecAccrualRollWeek=this.obj[12].weekDay;
      this.model.cmbRecEndOfMonthIndicator=this.obj[13].eom;
      this.model.cmbRecCompounding=this.obj[14].compounding;
  



      
     
 console.log(this.obj);
    });

     
  }
  
 }
