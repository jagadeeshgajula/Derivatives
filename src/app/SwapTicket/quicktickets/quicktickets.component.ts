import { QuickTicketsService } from './quicktickets.service';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { QuickTicketsModel } from './quicktickets.model';



@Component({
  selector: 'app-quickticket',
  templateUrl: './quicktickets.component.html',
  styleUrls: ['./quicktickets.component.css']
})
export class QuickticketsComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private quickServ:QuickTicketsService,public model:QuickTicketsModel)
  {}
  
  ngOnInit()
  {
   
     this.quickServ.getData().subscribe(xmlRes=>{
     this.xml=xmlRes });
     //console.log(this.xml);
   setTimeout(() => {
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngx.xmlToJson(xml);
    this.obj=obj;
    this.model.cmbQPaySide = this.obj.quick.Position1.p;
    this.model.cmbQRecSide = this.obj.quick.Position2.p;
    this.model.cmbQCurrency =this.obj.quick.Currency.Currency;
    this.model.txtQNotional= this.obj.quick.Notional;
    this.model.txtQTenor = this.obj.quick.Tenor;
    this.model.txtQStartDate = this.obj.quick.StartDate;
    this.model.txtEndDate= this.obj.quick.EndDate;
  },10);
}
}
