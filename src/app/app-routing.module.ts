
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


//suchi components 
import { SwapticketComponent } from './SwapTicket/swapticket/swapticket.component';
import { SwappaymentComponent } from './SwapTicket/swappayment/swappayment.component';
import { SwapresetComponent } from './SwapTicket/swapreset/swapreset.component';
import { PartialasignmentComponent } from './SwapTicket/partialasignment/partialasignment.component';
import { AssignmentsComponent } from './SwapTicket/assignments/assignments.component';
import { MarginsComponent } from './SwapTicket/margins/margins.component';
import { SalescreditComponent } from './SwapTicket/salescredit/salescredit.component';
import { FeeComponent } from './SwapTicket/fee/fee.component';
import { AdditionalfieldsComponent } from './SwapTicket/additionalfields/additionalfields.component';
import { TradebasicsComponent } from './SwapTicket/tradebasics/tradebasics.component';
import { QuickticketsComponent } from './SwapTicket/quicktickets/quicktickets.component';

import { ScheduleComponent } from './SwapTicket/schedule/schedule.component';
import { SwapamortisationComponent } from './SwapTicket/swapamortisation/swapamortisation.component';


//Ramya Components

import { ProfileModifyComponent } from './UserEntitlements/Profile-Modify/Profile-Modify.component';
import { ProfileAddComponent } from './UserEntitlements/Profile-Add/Profile-Add.component';
import { UserEntitlementComponent } from './UserEntitlements/UserEntitlement/UserEntitlement.component';
import { LegalEntityComponent } from './UserEntitlements/Legal-Entity/Legal-Entity.component';
import { MenuComponent } from './UserEntitlements/Menu-Options/Menu-Options.component';
import { LocationComponent } from './UserEntitlements/Location/Location.component';
import { ProductComponent } from './UserEntitlements/Product/Product.component';
import { CustomerAccountComponent } from './UserEntitlements/Customer-Account/Customer-Account.component';
import { FirmAccountComponent } from './UserEntitlements/Firm-Account/Firm-Account.component';






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

//suchi routes
    {path:'swapticket',component:SwapticketComponent,
    children:[
      {path:'',redirectTo:'payment',pathMatch:'full'},
      {path:'payment',component:SwappaymentComponent},
      {path:'reset',component:SwapresetComponent},
      {path:'amortisation',component:SwapamortisationComponent},
      {path:'',component:ScheduleComponent,outlet:'schedule'}]
  
  },
  {path:'quicktickets',component:QuickticketsComponent},
  {path:'tradebasic',component:TradebasicsComponent},
  {path:'additionalfields',component:AdditionalfieldsComponent},
  {path:'fees',component:FeeComponent},
  {path:'salescredit',component:SalescreditComponent},
  {path:'margin',component:MarginsComponent},
  {path:'assignment',component:AssignmentsComponent},
  {path:'partialassignment',component:PartialasignmentComponent},




//Ramya Routes
{path:'UserEntitlement', component:UserEntitlementComponent,
children: [
  { path:'Profile-Add',component:ProfileAddComponent},
  { path: 'Profile-Modify', component:ProfileModifyComponent},
  { path:'Firm-Account',component:FirmAccountComponent},
  { path:'Customer-Account',component:CustomerAccountComponent},
  { path:'Product',component:ProductComponent},
  { path:'Location',component:LocationComponent},
  { path:'Menu-Options',component:MenuComponent},
  { path:'Legal-Entity',component:LegalEntityComponent}
]}














];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
//jagadeesh components
  IRDBlotterComponent,

//tarun components 
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

  //suchi components 
  SwapticketComponent, 
  SwappaymentComponent,
  SwapresetComponent,
  PartialasignmentComponent,
  AssignmentsComponent,
  MarginsComponent,
  SalescreditComponent,
  FeeComponent,
  AdditionalfieldsComponent,
  TradebasicsComponent,
  QuickticketsComponent,
  ScheduleComponent,
  SwapamortisationComponent,

  //Ramya

  UserEntitlementComponent,
  ProfileAddComponent,
  ProfileModifyComponent,
  FirmAccountComponent,
  CustomerAccountComponent,
  ProductComponent,
  LocationComponent,
  MenuComponent,
  LegalEntityComponent




  




];