import { ScheduleService } from './schedule.service';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { ScheduleModel } from './schedule.model';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  obj;
  xml;
  model=new ScheduleModel();
  constructor(private scheduleService:ScheduleService){}
  ngOnInit(){
    this.scheduleService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayPVCurrency=this.obj[0].currency;
      this.model.cmbPayCurve=this.obj[1].discountCurve;

      this.model.cmbRecPVCurrency=this.obj[0].currency;
      this.model.cmbRecCurve=this.obj[1].discountCurve;
  });
}
}