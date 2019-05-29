import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';
import { QuickModel } from './quick.model';
import { QuickTicketService } from './quickticket.service';

@Component({
  selector: 'app-quickticket',
  templateUrl: './quickticket.component.html',
  styleUrls: ['./quickticket.component.css']
})
export class QuickticketComponent implements OnInit {

   
   xml;
   obj;
   constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private quickService:QuickTicketService,
    private model:QuickModel
  ){}
 
   ngOnInit(){
    this.quickService.getData().subscribe(xmlRes=>{
    this.xml=xmlRes;
    })
 
    setTimeout(()=>{
      const parser=new DOMParser();
      const xml=parser.parseFromString(this.xml,"text/xml");
      const obj=this.ngxXml2jsonService.xmlToJson(xml);
      this.obj=obj;
      this.model.cmbQCurrency=this.obj.QuickTicket.Currency;
      this.model.txtNotional=this.obj.QuickTicket.Notional;
      this.model.txtQTenor=this.obj.QuickTicket.Tenor;
      this.model.txtQStartDate=this.obj.QuickTicket.StartDate;
      this.model.txtQEndDate=this.obj.QuickTicket.EndDate;
       
    },10); 
   }
 

}
