
import { Component, OnInit } from '@angular/core';
import { QuickModel } from './quick.model';
import { QuickTicketService } from './quickticket.service';

@Component({
  selector: 'app-quickticket',
  templateUrl: './quickticket.component.html',
  styleUrls: ['./quickticket.component.css']
})
export class QuickticketComponent implements OnInit {

   obj;
   model= new QuickModel();

   constructor(
    private quickService:QuickTicketService){}
 
   ngOnInit(){
    this.quickService.getData().subscribe(res=>{
    this.obj=res;


    this.model.cmbQCurrency=this.obj[0].id;
      this.model.txtNotional=this.obj[1].quickFields[2];
      this.model.txtQStartDate=this.obj[1].quickFields[0];
      this.model.txtQEndDate=this.obj[1].quickFields[1];
      this.model.txtQTenor=this.obj[1].quickFields[3];
    

    })
 
    setTimeout(()=>{
    },1000); 
   }
 

}
