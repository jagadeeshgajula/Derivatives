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
      this.model.cmbPayAmortType=this.obj[0].id;
      this.model.cmbPayAmortBusDay=this.obj[1].id;
      this.model.cntPayAmortCalendars=this.obj[2].id;
      this.model.cmbPayAmortFreq=this.obj[3].id;
      this.model.cmbPayAmortMarching=this.obj[4].id;
      this.model.cmbPayAmortRollDay=this.obj[5].id;
      this.model.cmbPayAmortRollWeek=this.obj[6].id;
  
      this.model.txtPayAmortStartDate=this.obj[7].swapleg[0];
      this.model.txtPayAmortEndDate=this.obj[7].swapleg[1];
      this.model.txtPayAmortAmount=this.obj[7].swapleg[2];

      this.model.cmbRecAmortType=this.obj[0].id;
      this.model.cmbRecAmortBusDay=this.obj[1].id;
      this.model.cntRecAmortCalendars=this.obj[2].id;
      this.model.cmbRecAmortFreq=this.obj[3].id;
      this.model.cmbRecAmortMarching=this.obj[4].id;
      this.model.cmbRecAmortRollDay=this.obj[5].id;
      this.model.cmbRecAmortRollWeek=this.obj[6].id;
      this.model.txtRecAmortStartDate=this.obj[7].swapleg[0];
      this.model.txtRecAmortEndDate=this.obj[7].swapleg[1];
      this.model.txtRecAmortAmount=this.obj[7].swapleg[2];




    });

     
  }
  
 }
