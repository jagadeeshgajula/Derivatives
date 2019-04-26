import { TradeBasicService } from './tradebasic.service';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tradebasic',
  templateUrl: './tradebasic.component.html',
  styleUrls: ['./tradebasic.component.css']
})
export class TradebasicComponent implements OnInit {

  xml;
obj;

constructor(
  private ngxXml2jsonService:NgxXml2jsonService,
  private tradebasicService:TradeBasicService,
){}

ngOnInit(){
    this.tradebasicService.getData().subscribe(xmlRes=>{
      this.xml=xmlRes;
    })

    setTimeout(()=>{
      const parser=new DOMParser();
      const xml=parser.parseFromString(this.xml,"text/xml");
      const obj=this.ngxXml2jsonService.xmlToJson(xml);
      this.obj=obj;
    },10);

}
}
