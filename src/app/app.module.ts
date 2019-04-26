import { AssetblotterService } from './service/assetblotter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapticketComponent } from './swapticket/swapticket.component';
import { SwappaymentComponent } from './swappayment/swappayment.component';
import { SwapresetComponent } from './swapreset/swapreset.component';
import { SwapamortisationComponent } from './swapamortisation/swapamortisation.component';
import { QuickticketComponent } from './quickticket/quickticket.component';
import { SwapoptionComponent } from './swapoption/swapoption.component';
import { TradebasicComponent } from './tradebasic/tradebasic.component';
import { AdditionalfieldsComponent } from './additionalfields/additionalfields.component';
import { FeesComponent } from './fees/fees.component';
import { SalescreditComponent } from './salescredit/salescredit.component';
import { MarginComponent } from './margin/margin.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PartialasignmentComponent } from './partialasignment/partialasignment.component';
import { SwapoptionquickComponent } from './swapoptionquick/swapoptionquick.component';
import { IRDBlotterComponent } from './AssetBlotter/irdblotter/irdblotter.component';
import { SearchComponent } from './AssetBlotter/irdblotter/search/search.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { HttpClientModule } from '@angular/common/http';
//import { SwapticketComponent } from './swapticket/swapticket.component';

@NgModule({
  declarations: [
    AppComponent,
    //SwapticketComponent
    routingComponents,
    SwapticketComponent,
    SwappaymentComponent,
    SwapresetComponent,
    SwapamortisationComponent,
    QuickticketComponent,
    SwapoptionComponent,
    TradebasicComponent,
    AdditionalfieldsComponent,
    FeesComponent,
    SalescreditComponent,
    MarginComponent,
    AssignmentComponent,
    PartialasignmentComponent,
    SwapoptionquickComponent,
    IRDBlotterComponent,
    SearchComponent,
    SwapComponent,
    SwapOptionComponent,
    ResultsComponent,
    FraComponent,
    CapFloorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AssetblotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
