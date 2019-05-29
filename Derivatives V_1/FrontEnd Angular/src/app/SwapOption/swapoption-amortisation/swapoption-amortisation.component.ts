import { Component, OnInit } from '@angular/core';
import { SwapAmortisationService } from '../services/so-amortisation.service';
import { SwapAmortisationModel } from '../models/so-amortisation.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption-amortisation',
  templateUrl: './swapoption-amortisation.component.html',
  styleUrls: ['./swapoption-amortisation.component.css']
})
export class SwapoptionAmortisationComponent implements OnInit {
  xml;
  obj;
  
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private xmlService:SwapAmortisationService,
    public model:SwapAmortisationModel
  ){}
  ngOnInit(){
    this.xmlService.getData().subscribe(xmlRes=>{
      this.xml=xmlRes;
    })
 
    setTimeout(()=>{
      const parser=new DOMParser();
      const xml=parser.parseFromString(this.xml,"text/xml");
      const obj=this.ngxXml2jsonService.xmlToJson(xml);
      this.obj=obj;
      this.model.cmbPayAmortType=this.obj.amortisation.AmortType;
      this.model.txtPayAmortStartDate=this.obj.amortisation.AmortStartDate;
      this.model.txtPayAmortEndDate=this.obj.amortisation.AmortEndDate;
      this.model.cmbPayAmortBusDay=this.obj.amortisation.AmortBusDay;
      this.model.cntPayAmortCalendars=this.obj.amortisation.AmortCalendars;
      this.model.cmbPayAmortFreq=this.obj.amortisation.AmortFreq;
      this.model.cmbPayAmortMarching=this.obj.amortisation.AmortMarching;
      this.model.cmbPayAmortRollDay=this.obj.amortisation.AmortRollDay;
      this.model.cmbPayAmortRollWeek=this.obj.amortisation.AmortRollWeek;
      this.model.txtPayAmortAmount=this.obj.amortisation.AmortAmount;


      this.model.cmbRecAmortType=this.obj.amortisation.AmortType;
      this.model.txtRecAmortStartDate=this.obj.amortisation.AmortStartDate;
      this.model.txtRecAmortEndDate=this.obj.amortisation.AmortEndDate;
      this.model.cmbRecAmortBusDay=this.obj.amortisation.AmortBusDay;
      this.model.cntRecAmortCalendars=this.obj.amortisation.AmortCalendars;
      this.model.cmbRecAmortFreq=this.obj.amortisation.AmortFreq;
      this.model.cmbRecAmortMarching=this.obj.amortisation.AmortMarching;
      this.model.cmbRecAmortRollDay=this.obj.amortisation.AmortRollDay;
      this.model.cmbRecAmortRollWeek=this.obj.amortisation.AmortRollWeek;
      this.model.txtRecAmortAmount=this.obj.amortisation.AmortAmount;

    },1000); 
  }
}
