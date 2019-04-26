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
//import { SwapticketComponent } from './swapticket/swapticket.component';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { HttpClientModule } from '@angular/common/http';
import { ShecduleComponent } from './shecdule/shecdule.component';


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
    ShecduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NgxXml2jsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
