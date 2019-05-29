import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { FraQuickTicketService } from './fra-quick-ticket.service';
import { FraQuickticketModel } from './fra-quick-ticket.model';

@Component({
  selector: 'app-quick-ticket',
  templateUrl: './fra-quick-ticket.component.html',
  styleUrls: ['./fra-quick-ticket.component.css']
})
export class FraQuickTicketComponent implements OnInit {
  xml;
  obj;
  constructor(private ngxXml2jsonService:NgxXml2jsonService
    ,private quickTicketService:FraQuickTicketService
    ,private model:FraQuickticketModel) { }

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
      },1000);
}
}