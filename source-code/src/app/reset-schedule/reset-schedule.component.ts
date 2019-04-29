import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelpComponent } from '../help/help.component';
import { InsertInResetsComponent } from '../insert-in-resets/insert-in-resets.component';
import { ResetsService } from '../service/resets-service.service'
 

export interface PeriodicElement {
  Rate: number;
  QuoteDate: string;
  RateIndexType: number;
  RateSettingType: string;
  RestartDate: string;
  ResetEndDate: string;
}
 

@Component({
  selector: 'app-reset-schedule',
  templateUrl: './reset-schedule.component.html',
  styleUrls: ['./reset-schedule.component.css']
})
export class ResetScheduleComponent implements OnInit {

  isPopupOpened=true;
  ResetsServiceList;

  constructor(
    private dialogRef: MatDialogRef<ResetScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog?: MatDialog,
    private ResetsServiceObject?:ResetsService) { }

  ngOnInit() {

    this.ResetsServiceList=this.ResetsServiceObject.getAllInsertedRows();
    

  }

 /*  displayedColumns: string[] = ['Rate', 'QuoteDate', 'RateIndexType', 'RateSettingType', 'RestartDate', 'ResetEndDate'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }

  } */

  onNoClick() {
    this.dialogRef.close();
  }

  okButton() {
    this.dialogRef.close();
  }

  onCancel()
  {
    this.dialogRef.close();
  }

   

  onHelpClick(){
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

  onInsertClick(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(InsertInResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
}

