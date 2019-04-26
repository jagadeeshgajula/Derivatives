import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { QuickTicketService } from './quick-ticket.service';
import { QuickticketModel } from './quick-ticket.model';

@Component({
  selector: 'app-quick-ticket',
  templateUrl: './quick-ticket.component.html',
  styleUrls: ['./quick-ticket.component.css']
})
export class QuickTicketComponent implements OnInit {
  xml;
  obj;
  constructor(private ngxXml2jsonService:NgxXml2jsonService
    ,private quickTicketService:QuickTicketService
    ,private model:QuickticketModel) { }

    ngOnInit() {
      this.quickTicketService.getData().subscribe(xmlRes=>{
        this.xml=xmlRes;
      })
      setTimeout(()=>{
        const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngxXml2jsonService.xmlToJson(xml);
    this.obj=obj;
    this.model.cmbQCurrency=this.obj.Quick.Currency;
    this.model.txtQNotional=this.obj.Quick.Notional;
    this.model.txtQAgreedRatePnl=this.obj.Quick.AgreedRate;
    this.model.cmbQBuySell=this.obj.Quick.BuySell;
    this.model.txtQTenor=this.obj.Quick.Tenor;
    this.model.txtQStartDate=this.obj.Quick.StartDate;
    this.model.txtQEndDate=this.obj.Quick.EndDate;
      },10);
}
}