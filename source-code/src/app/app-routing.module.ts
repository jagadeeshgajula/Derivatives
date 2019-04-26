import { QuickticketComponent } from './quickticket/quickticket.component';
import { PaymentsComponent } from './payments/payments.component';


import { AssignmentComponent } from './assignment/assignment.component';
import { MarginComponent } from './margin/margin.component';
import { FeesComponent } from './fees/fees.component';
import { SalesCreditComponent } from './sales-credit/sales-credit.component';
import { AdditionalFieldsComponent } from './additional-fields/additional-fields.component';
import { CapfloorComponent } from './capfloor/capfloor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradebasicComponent } from './tradebasic/tradebasic.component';
import { PartialAssignmentComponent } from './partial-assignment/partial-assignment.component';
import { ResetsComponent } from './resets/resets.component';
import { AmortizationComponent } from './amortization/amortization.component';


const routes: Routes = [

{ 
  path:'cap',component:CapfloorComponent,
children:[
  {path:'',redirectTo:'amortization', pathMatch:'full'},
  {path:'payment',component:PaymentsComponent},
  {path:'reset',component:ResetsComponent},
  {path:'amortization',component:AmortizationComponent}
]},


{path:'trade',component:TradebasicComponent,
 children:[
   {path:'additional',component:AdditionalFieldsComponent},
   {path:'fees',component:FeesComponent},
   {path:'sales',component:SalesCreditComponent},
   {path:'margin',component:MarginComponent},
   {path:'assign',component:AssignmentComponent},
   {path:'partial',component:PartialAssignmentComponent}
 ]},




 {path:'quickticket',component:QuickticketComponent},
/*{path:'swapoption',component:,
children:[{path:'payment',component:SwappaymentComponent},
          {path:'reset',component:SwapresetComponent},  
          {path:'amortisation',component:SwapamortisationComponent}]}]
*/];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
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
  QuickticketComponent
  
]