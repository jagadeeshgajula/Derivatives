import { Injectable } from '@angular/core';
import { RessetsModel } from '../model/ressets-model';

@Injectable({
  providedIn: 'root'
})
export class ResetsService {

  _insertResetsList: RessetsModel[] = [
    { quoteDate: '', rate: 0.01250, rateIndexType: '', rateSettingType: '', resetStartDate:'',resetEndDate:''},
    { quoteDate: '', rate: 0.01250, rateIndexType: '', rateSettingType: '', resetStartDate:'',resetEndDate:''},
    { quoteDate: '', rate: 0.01250, rateIndexType: '', rateSettingType: '', resetStartDate:'',resetEndDate:''},
  ];

  constructor() { }

  /* addInsertRows(listToBeinserted: RessetsModel) {
    this._insertResetsList.push(listToBeinserted);
  } */

  /*  removeInsertedRows(enteredPeriod: number) {
     const toBeRemovedRow = this._insertResetsList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
     this._insertResetsList.splice(toBeRemovedRow, 1);
 
   } */

  getAllInsertedRows() {
    return this._insertResetsList;
  }
}
