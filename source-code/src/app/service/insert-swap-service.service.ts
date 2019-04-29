import { Injectable } from '@angular/core';
import { InsertSwapModel } from '../model/insert-swap-model';


@Injectable({
  providedIn: 'root'
})
export class InsertSwapService {

  _insertList:InsertSwapModel[] = [
    {couponStartDate:'22/02/2013', amount: 62847.22, couponEndDate:'22/08/2013', paymentDate:'22/08/2013', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount: 64847.22,totalPaymentAmount:645832.11},
    {couponStartDate:'22/06/2013', amount: 64583.33, couponEndDate:'22/12/2013', paymentDate:'22/12/2013', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'24/02/2014', amount: 62152.78, couponEndDate:'24/08/2014', paymentDate:'24/08/2014', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'22/08/2014', amount: 64236.11, couponEndDate:'22/02/2015', paymentDate:'22/02/2015', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
  ];
  insertModel: any;
  constructor() {}

  /* addInsertRows(listToBeinserted: InsertSwapModel) {
    this._insertList.push(listToBeinserted);
  }

  removeInsertedRows(enteredPeriod: number) {
    const toBeRemovedRow = this._insertList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
    this._insertList.splice(toBeRemovedRow, 1);

  } */

  getAllInsertedRows() {
    return this._insertList;
  }
  
}

