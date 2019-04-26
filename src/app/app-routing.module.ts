import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { SwapticketComponent } from './swapticket/swapticket.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';

const routes: Routes = [
  {
    path: 'swapticket', component: SwapticketComponent,
    children: [{ path: 'payment', component: SwappaymentComponent },
    { path: 'reset', component: SwapresetComponent },
    { path: 'amortisation', component: SwapamortisationComponent },
    ]
  },
  { path: 'quickticket', component: QuickticketComponent },
  { path: 'swapoptionquick', component: SwapoptionquickComponent },
  {
    path: 'swapoption', component: SwapoptionComponent,
    children: [{ path: 'payment', component: SwappaymentComponent },
    { path: 'reset', component: SwapresetComponent },
    { path: 'amortisation', component: SwapamortisationComponent },
    ]
  },
  { path: 'tradebasic', component: TradebasicComponent },
  { path: 'additionalfields', component: AdditionalfieldsComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'salescredit', component: SalescreditComponent },
  { path: 'margin', component: MarginComponent },
  { path: 'assignment', component: AssignmentComponent },
  { path: 'partialassignment', component: PartialasignmentComponent },
  {path:'irdBlotter', component: IRDBlotterComponent,
    children:[
      //{path:'',component:SearchComponent},
      {path:'search',component: SearchComponent,
      children:[
        {path:'',component:SwapComponent},
        {path:'swap',component:SwapComponent},
        {path:'swapOption',component:SwapOptionComponent},
        {path:'fra',component:FraComponent},
        {path:'cap-floor',component:CapFloorComponent}
      ]
      },
      {path:'results',component: ResultsComponent}
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
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
]