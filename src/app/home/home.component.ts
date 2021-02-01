import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: any;
  show:Boolean=false;
  constructor(private res:AuthService)
  {

  }
  getData()
  { this.show=true
    this.res.getDataRes().subscribe(res=>
      {
        this.result=res;
      })
  }

}
