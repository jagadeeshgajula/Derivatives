import { CapFloorModel } from './capfloor.model';
import { CapFloorService } from './capfloor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-capfloor',
  templateUrl: './capfloor.component.html',
  styleUrls: ['./capfloor.component.css']
})
export class CapfloorComponent implements OnInit {

  obj;

  model=new CapFloorModel();

  constructor(private capFloorService:CapFloorService){}

 ngOnInit(){
   this.capFloorService.getData().subscribe(res=>{
     this.obj=res;

     this.model.cmbCurrency=this.obj[0].id;
     this.model.cmbCfSubType=this.obj[1].id;
     this.model.cmbBuyFlag=this.obj[2].id;
     this.model.cmbCapFloorType=this.obj[3].id; 
     this.model.cmbStartDateRollFlag=this.obj[4].id;
     this.model.cmbEndDateRollFlag=this.obj[5].id;

     this.model.txtTenor=this.obj[6].capfields[0];
     this.model.txtNotional=this.obj[6].capfields[1];
     this.model.txtCapsStartDate=this.obj[6].capfields[2];
     this.model.txtCapsEndDate=this.obj[6].capfields[3];
 
     
     this.model.txtStartStubDate=this.obj[6].capfields[4];
     this.model.txtBackStubDate=this.obj[6].capfields[5];
     this.model.txtFrontStubManualRate=this.obj[6].capfields[6];
     this.model.txtBackStubManualRate=this.obj[6].capfields[7];


   })
 
   
 setTimeout(()=> {

},1000); 

}


}
