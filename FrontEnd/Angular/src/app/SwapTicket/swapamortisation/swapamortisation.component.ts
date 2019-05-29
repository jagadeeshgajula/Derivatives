import { SwapAmortisationService } from './swapamortisation.service';
import { SwapAmortisationModel } from './swapamortisation.model';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";

@Component({
  selector: 'app-swapamortisation',
  templateUrl: './swapamortisation.component.html',
  styleUrls: ['./swapamortisation.component.css']
})
export class SwapamortisationComponent implements OnInit {

  xml;
  obj;
  
  model=new SwapAmortisationModel();
  constructor(private swapamortisationService:SwapAmortisationService){}
  ngOnInit(){
    this.swapamortisationService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayAmortType=this.obj[0].amorttype;
      this.model.cmbPayAmortBusDay=this.obj[1].busDay;
      this.model.cntPayAmortCalendars=this.obj[2].calendars;
      this.model.cmbPayAmortFreq=this.obj[3].frequency;
      this.model.cmbPayAmortMarching=this.obj[4].marching;
      this.model.cmbPayAmortRollDay=this.obj[5].rollDay;
      this.model.cmbPayAmortRollWeek=this.obj[6].weekDay;
  
      this.model.txtPayAmortStartDate=this.obj[7].swapleg[18];
      this.model.txtPayAmortEndDate=this.obj[7].swapleg[19];
      this.model.txtPayAmortAmount=this.obj[7].swapleg[20];
      this.model.cmbRecAmortType=this.obj[0].amorttype;
      this.model.cmbRecAmortBusDay=this.obj[1].busDay;
      this.model.cntRecAmortCalendars=this.obj[2].calendars;
      this.model.cmbRecAmortFreq=this.obj[3].frequency;
      this.model.cmbRecAmortMarching=this.obj[4].marching;
      this.model.cmbRecAmortRollDay=this.obj[5].rollDay;
      this.model.cmbRecAmortRollWeek=this.obj[6].weekDay;
     this.model.txtRecAmortStartDate=this.obj[7].swapleg[18];
      this.model.txtRecAmortEndDate=this.obj[7].swapleg[19];
      this.model.txtRecAmortAmount=this.obj[7].swapleg[20];




    });

     
  }
  
 }
