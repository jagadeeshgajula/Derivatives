import { QuickticketComponent } from './CapFloor/quickticket/quickticket.component';
import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IRDBlotterComponent } from './AssetBlotter/irdblotter/irdblotter.component';
import { SearchComponent } from './AssetBlotter/irdblotter/search/search.component';
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';

//tarun components 
import { CapfloorComponent } from './CapFloor/capfloor/capfloor.component';
import { PaymentsComponent } from './CapFloor/payments/payments.component';
import { ResetsComponent } from './CapFloor/resets/resets.component';
import { AmortizationComponent } from './CapFloor/amortization/amortization.component';

import { TradebasicComponent } from './CapFloor/tradebasic/tradebasic.component';
import { AdditionalFieldsComponent } from './CapFloor/additional-fields/additional-fields.component';
import { FeesComponent } from './CapFloor/fees/fees.component';
import { PartialAssignmentComponent } from './CapFloor/partial-assignment/partial-assignment.component';
import { AssignmentComponent } from './CapFloor/assignment/assignment.component';
import { MarginComponent } from './CapFloor/margin/margin.component';
import { SalesCreditComponent } from './CapFloor/sales-credit/sales-credit.component';


const routes: Routes = [

  {
    path: 'irdBlotter', component: IRDBlotterComponent,
    children: [
      //{path:'',component:SearchComponent},
      {
        path: 'search', component: SearchComponent,
        children: [
          { path: '', component: SwapComponent },
          { path: 'swap', component: SwapComponent },
          { path: 'swapOption', component: SwapOptionComponent },
          { path: 'fra', component: FraComponent },
          { path: 'cap-floor', component: CapFloorComponent }
        ]},
      { path: 'results', component: ResultsComponent }
    ]},


  {
    path: 'cap', component: CapfloorComponent,
    children: [
      { path: 'payment', component: PaymentsComponent },
      { path: 'reset', component: ResetsComponent },
      { path: 'amortization', component: AmortizationComponent }
    ]},


  {
    path: 'trade', component: TradebasicComponent,
    children:[
      {path:'additional',component:AdditionalFieldsComponent},
      {path:'fees',component:FeesComponent},
      {path:'sales',component:SalesCreditComponent},
      {path:'margin',component:MarginComponent},
      {path:'assign',component:AssignmentComponent},
      {path:'partial',component:PartialAssignmentComponent}
    ]},

    {path:'quickticket',component:QuickticketComponent},

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

  IRDBlotterComponent,

  CapfloorComponent,
  TradebasicComponent,
  AdditionalFieldsComponent,
  FeesComponent,
  SalesCreditComponent,
  MarginComponent,
  AssignmentComponent,
  PartialAssignmentComponent,
  ResetsComponent,
  AmortizationComponent,
  PaymentsComponent,
  QuickticketComponent,


  




]