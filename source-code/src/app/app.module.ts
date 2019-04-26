import { AppComponent } from './app.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { UserEntitlementComponent } from './UserEntitlement/UserEntitlement.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';

import { ProfileModifyComponent } from './profile-modify/profile-modify.component';
import { FirmAccountComponent } from './firm-account/firm-account.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { ProductComponent } from './product/product.component';
import { LocationComponent } from './location/location.component';
import { MenuComponent } from './Menu-Options/Menu-Options.component';
import { LegalEntityComponent } from './legal-entity/legal-entity.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserEntitlementComponent,
    ProfileAddComponent,
    ProfileModifyComponent,
    FirmAccountComponent,
    CustomerAccountComponent,
    ProductComponent,
    LocationComponent,
    MenuComponent,
    LegalEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
