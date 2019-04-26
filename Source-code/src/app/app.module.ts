import { NgxXml2jsonService } from 'ngx-xml2json';
import { SwapTicketService } from './swapticket/swapticket.service';
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
import { SwapoptiontradebasicComponent } from './swapoptiontradebasic/swapoptiontradebasic.component';
import { SwapoptionquickticketComponent } from './swapoptionquickticket/swapoptionquickticket.component';
//import { SwapticketComponent } from './swapticket/swapticket.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from   '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';

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
    SwapoptiontradebasicComponent,
    SwapoptionquickticketComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SwapTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
