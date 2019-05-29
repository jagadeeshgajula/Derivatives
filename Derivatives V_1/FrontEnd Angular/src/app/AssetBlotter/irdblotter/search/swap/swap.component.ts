import { AssetblotterService } from './../../../service/assetblotter.service';

import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

  xml;
  obj;
  constructor(private ngxXml2jsonService: NgxXml2jsonService, private assetblotterService:AssetblotterService) { }

  ngOnInit() {
    this.assetblotterService.getData().subscribe(xmlRes => {
      this.xml = xmlRes;
      //console.log(this.xml);
    });
    setTimeout(() => {
      
      const parser = new DOMParser();
      const xml = parser.parseFromString(this.xml, "text/xml");
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      this.obj = obj;
     // console.log(this.obj.List.SwapSubProductType.Id);
    }, 100);
  }
}
