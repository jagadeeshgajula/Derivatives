import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { QuickTicketModel } from './quickticket.model';
import { QuickTicketService } from '../services/quickticket.service';

@Component({
  selector: 'app-quickticket',
  templateUrl: './quickticket.component.html',
  styleUrls: ['./quickticket.component.css']
})
export class QuickticketComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private quickServ:QuickTicketService,public model:QuickTicketModel)
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
    this.model.cmbQPaySide = this.obj.quick.Position;
    this.model.cmbQRecSide = this.obj.quick.Position;
    this.model.cmbQCurrency = this.obj.quick.Currency;
    this.model.txtQNotional= this.obj.quick.Notional;
    this.model.txtQTenor = this.obj.quick.Tenor;
    this.model.txtQStartDate = this.obj.quick.StartDate;
    this.model.txtEndDate= this.obj.quick.EndDate;
  },10);
}

}
