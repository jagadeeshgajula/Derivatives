import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { InsertSwapService } from '../service/insert-swap-service.service';
import { InsertRecScheduleComponent } from '../insert-rec-schedule/insert-rec-schedule.component';
import { ResetScheduleComponent } from '../reset-schedule/reset-schedule.component';
import { HelpComponent } from '../help/help.component';
import { ExportScheduleComponent } from '../export-schedule/export-schedule.component';
import { StubResetsComponent } from '../stub-resets/stub-resets.component';


@Component({
  selector: 'app-root-schedule',
  templateUrl: './root-schedule.component.html',
  styleUrls: ['./root-schedule.component.css']
})
export class RootScheduleComponent implements OnInit {
  isPopupOpened = true;


  compoundingPeriod;
  settlementPeriod;
  AuthorizationPeriod;
  insertedServiceList;
  totalPaymentAmount;
  totalPVAmount;

  constructor(     
    private dialog?: MatDialog,
    private _insertServiceObject?: InsertSwapService, ) { }

  ngOnInit() {
    this.insertedServiceList = this._insertServiceObject.getAllInsertedRows();

    /* for (let i = 0; i < this.insertedServiceList.length; i++)
      console.log(this.insertedServiceList[i].couponStartDate); */

      this.compoundingPeriod=this.insertedServiceList[0].CompoundingPeriod;
      this.settlementPeriod=this.compoundingPeriod;
      this.AuthorizationPeriod=this.compoundingPeriod;
      this.totalPaymentAmount=this.insertedServiceList[0].totalPaymentAmount;
      this.totalPVAmount=this.insertedServiceList[0].totalPVAmount;
  }


  /* getAllValueFromInsertService() {
    this.insertedServiceList = this._insertServiceObject.getAllInsertedRows();
    console.log("test:" + this.insertedServiceList);
  } */

  insert() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(InsertRecScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  Resets() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ResetScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onHelpClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(HelpComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onExportClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ExportScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }


  onStubResetsClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(StubResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });

  }

 /*  onCancelClick() {
    this.dialogRef.close();
  } */
}
