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
  model=new QuickTicketsModel();
  constructor(private swapquickticketService:QuickTicketsService){}
  ngOnInit(){
    this.swapquickticketService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbQPaySide=this.obj[0].id;
      this.model.cmbQRecSide=this.obj[1].id;
      this.model.cmbQCurrency=this.obj[2].id;
      this.model.txtQNotional=this.obj[3].swapleg[0];
      this.model.txtQStartDate=this.obj[3].swapleg[0];
      this.model.txtEndDate=this.obj[3].swapleg[0];
      this.model.txtQTenor=this.obj[4].swaptenor[0];
     // this.model.txtQNotional=this.obj[3].swapleg[0];


    });

     
  }
  
 }
