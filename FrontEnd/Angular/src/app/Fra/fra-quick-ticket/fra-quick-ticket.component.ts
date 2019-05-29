import { Component, OnInit } from '@angular/core';
import { FraQuickTicketService } from './fra-quick-ticket.service';
import { FraQuickticketModel } from './fra-quick-ticket.model';

@Component({
  selector: 'app-quick-ticket',
  templateUrl: './fra-quick-ticket.component.html',
  styleUrls: ['./fra-quick-ticket.component.css']
})
export class FraQuickTicketComponent implements OnInit {
  
  obj;
  model = new FraQuickticketModel();
  constructor(private quickTicketService:FraQuickTicketService
    ) { }

    ngOnInit() {
      this.quickTicketService.getQuick().subscribe(res=>{
        this.obj=res;

    this.model.cmbQCurrency=this.obj[0].id;
    this.model.txtQNotional=this.obj[2].quickFields[9];
    this.model.txtQAgreedRatePnl=this.obj[2].quickFields[10];
    this.model.cmbQBuySell=this.obj[1].id;
    this.model.txtQTenor=this.obj[2].quickFields[11];
    this.model.txtQStartDate=this.obj[2].quickFields[12];
    this.model.txtQEndDate=this.obj[2].quickFields[13];
    console.log(this.obj);
      })

      setTimeout(()=>{

      },1000);
}
}