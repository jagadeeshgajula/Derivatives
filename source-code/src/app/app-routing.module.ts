import { SalesCreditComponent } from './sales-credit/sales-credit.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PartialAssignmentComponent } from './partial-assignment/partial-assignment.component';
import { MarginComponent } from './margin/margin.component';
import { FeesComponent } from './fees/fees.component';
import { QuickTicketComponent } from './quick-ticket/quick-ticket.component';
import { TradeBasicComponent } from './trade-basic/trade-basic.component';
import { FraComponent } from './fra/fra.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalFieldsComponent } from './additional-fields/additional-fields.component';

const routes: Routes = [
  {path:'fra', component:FraComponent},
  {path:'tradebasic', component:TradeBasicComponent, children:[
    {path:'additional', component:AdditionalFieldsComponent},
    {path:'fees', component:FeesComponent},
    {path:'sales', component:SalesCreditComponent},
    {path:'margin', component:MarginComponent},
    {path:'assign', component:AssignmentComponent},
    {path:'partial',component:PartialAssignmentComponent}
              ]},
  {path:'quickticket', component:QuickTicketComponent},
     
      ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FraComponent,
                                TradeBasicComponent,
                                QuickTicketComponent,
                                AdditionalFieldsComponent,
                                FeesComponent,
                                SalesCreditComponent,
                                MarginComponent,
                                AssignmentComponent,
                                PartialAssignmentComponent]
