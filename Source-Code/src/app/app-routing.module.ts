import { SwapticketComponent } from './swapticket/swapticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
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
import { ShecduleComponent } from './shecdule/shecdule.component';

const routes: Routes = [
  {path:'swapticket',component:SwapticketComponent,
  children:[
          {path:'',redirectTo:'payment',pathMatch:'full'},   
          {path:'payment',component:SwappaymentComponent},
          {path:'reset',component:SwapresetComponent},  
          {path:'amortisation',component:SwapamortisationComponent},  
          {path:'',component:ShecduleComponent,outlet:'sechdule'}     
]},
{path:'quickticket',component:QuickticketComponent},
{path:'swapoption',component:SwapoptionComponent,
children:[
          {path:'',redirectTo:'payment',pathMatch:'full'},
          {path:'payment',component:SwappaymentComponent},
          {path:'reset',component:SwapresetComponent},  
          {path:'amortisation',component:SwapamortisationComponent},
          {path:'',component:ShecduleComponent,outlet:'sechdule'}
]},
{path:'tradebasic',component:TradebasicComponent},

{path:'additionalfields',component:AdditionalfieldsComponent},
          {path:'fees',component:FeesComponent},  
          {path:'salescredit',component:SalescreditComponent}, 
          {path:'margin',component:MarginComponent},
          {path:'assignment',component:AssignmentComponent},  
          {path:'partialassignment',component:PartialasignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents=[
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
]