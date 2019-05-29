import { AssetblotterService } from './AssetBlotter/service/assetblotter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IRDBlotterComponent } from './AssetBlotter/irdblotter/irdblotter.component';
import { SearchComponent } from './AssetBlotter/irdblotter/search/search.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesComponent } from './CapFloor/schedules/schedules.component';
import { FrontPageComponent } from './SwapTicket/front-page/front-page.component';
//suchi imports

//dateformat
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    //SwapticketComponent
    routingComponents,
    IRDBlotterComponent,
    SearchComponent,
    SwapComponent,
    SwapOptionComponent,
    ResultsComponent,
    FraComponent,
    CapFloorComponent,
   
   //capfloor schedule 
    SchedulesComponent,
   
   FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BsDatepickerModule.forRoot()
  ],
  providers: [AssetblotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
