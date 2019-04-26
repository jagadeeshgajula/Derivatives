import { MenuComponent } from './Menu-Options/Menu-Options.component';

import { UserEntitlementComponent } from './UserEntitlement/UserEntitlement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileModifyComponent } from './profile-modify/profile-modify.component';
import { FirmAccountComponent } from './firm-account/firm-account.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { ProductComponent } from './product/product.component';
import { LocationComponent } from './location/location.component';

import { LegalEntityComponent } from './legal-entity/legal-entity.component';
const routes: Routes = [
  {path:'UserEntitlement',component:UserEntitlementComponent,
  
  children: [
    { path:'Profile-Add',component:ProfileAddComponent},
    { path: 'Profile-Modify', component: ProfileModifyComponent },
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
export const routingComponents=[UserEntitlementComponent,ProfileAddComponent,ProfileModifyComponent,FirmAccountComponent,CustomerAccountComponent,ProductComponent,LocationComponent,MenuComponent,LegalEntityComponent]