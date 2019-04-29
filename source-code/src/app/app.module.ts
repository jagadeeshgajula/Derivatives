import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootScheduleComponent } from './root-schedule/root-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {  InsertSwapService } from './service/insert-swap-service.service';
import { ResetsService } from './service/resets-service.service';
import { StubResetService } from './service/stub-reset-service.service';
import { InsertRecScheduleComponent } from './insert-rec-schedule/insert-rec-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetScheduleComponent } from './reset-schedule/reset-schedule.component';
import { HelpComponent } from './help/help.component';
import { InsertInResetsComponent } from './insert-in-resets/insert-in-resets.component';
import { ExportScheduleComponent } from './export-schedule/export-schedule.component';
import { StubResetsComponent } from './stub-resets/stub-resets.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    RootScheduleComponent,
    InsertRecScheduleComponent,
    ResetScheduleComponent,
    HelpComponent,
    InsertInResetsComponent,
    ExportScheduleComponent,
    StubResetsComponent
  ],
  entryComponents:[InsertRecScheduleComponent,ResetScheduleComponent,
    HelpComponent,InsertInResetsComponent,ExportScheduleComponent,StubResetsComponent,
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [InsertSwapService,ResetsService,StubResetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
