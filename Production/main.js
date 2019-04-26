(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/additionalfields/additionalfields.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/additionalfields/additionalfields.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRpb25hbGZpZWxkcy9hZGRpdGlvbmFsZmllbGRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQyxTQUFTLGVBQWUsQ0FBQyxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9hZGRpdGlvbmFsZmllbGRzL2FkZGl0aW9uYWxmaWVsZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjEwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/additionalfields/additionalfields.component.html":
/*!******************************************************************!*\
  !*** ./src/app/additionalfields/additionalfields.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            \n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n          <div class=\"form-group col-sm-12\">\n              <label class=\"control-label\" id=\"fname\">Booking Type</label>\n              <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n            </div>\n            <div class=\"clearfix\"></div>\n          <div class=\"form-group col-sm-12\">\n              <label class=\"control-label\" id=\"fname\">Flow Status</label>\n              <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"control-label\" id=\"fname\">Orig Trade Ref</label>\n                   <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"form-group col-sm-12\">\n                  <label class=\"control-label\" id=\"fname\">Last Modified By</label>\n                     <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label\" id=\"fname\">Last Verified By</label>\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                  </div>\n                  </div>\n                  <div class=\"form-group col-sm-6\">\n        \n                      <div class=\"form-group col-sm-12\">\n                          <label class=\"control-label\" id=\"fname\">Match Status</label>\n                          <select class=\"form-control\">\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                            </select>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"form-group col-sm-12\">\n                           <label class=\"control-label\" id=\"fname\">Operations Ref</label>\n                           <select class=\"form-control\">\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                            </select>\n                         </div>\n                         <div class=\"clearfix\"></div>\n                         <div class=\"form-group col-sm-12\">\n                             <label class=\"control-label\" id=\"fname\">Alternate Ref</label>\n                                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                           </div>\n                           <div class=\"clearfix\"></div>\n                           <div class=\"form-group col-sm-12\">\n                               <label class=\"control-label\" id=\"fname\">Last Modified</label>\n                               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                             </div>\n                             <div class=\"clearfix\"></div>\n                             <div class=\"form-group col-sm-12\">\n                                 <label class=\"control-label\" id=\"fname\">Last Verified</label>\n                                 <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                               </div>\n                             \n                                </div>\n"

/***/ }),

/***/ "./src/app/additionalfields/additionalfields.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/additionalfields/additionalfields.component.ts ***!
  \****************************************************************/
/*! exports provided: AdditionalfieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalfieldsComponent", function() { return AdditionalfieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdditionalfieldsComponent = /** @class */ (function () {
    function AdditionalfieldsComponent() {
    }
    AdditionalfieldsComponent.prototype.ngOnInit = function () {
    };
    AdditionalfieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-additionalfields',
            template: __webpack_require__(/*! ./additionalfields.component.html */ "./src/app/additionalfields/additionalfields.component.html"),
            styles: [__webpack_require__(/*! ./additionalfields.component.css */ "./src/app/additionalfields/additionalfields.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdditionalfieldsComponent);
    return AdditionalfieldsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _swapticket_swapticket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapticket/swapticket.component */ "./src/app/swapticket/swapticket.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swappayment/swappayment.component */ "./src/app/swappayment/swappayment.component.ts");
/* harmony import */ var _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swapreset/swapreset.component */ "./src/app/swapreset/swapreset.component.ts");
/* harmony import */ var _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swapamortisation/swapamortisation.component */ "./src/app/swapamortisation/swapamortisation.component.ts");
/* harmony import */ var _quickticket_quickticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quickticket/quickticket.component */ "./src/app/quickticket/quickticket.component.ts");
/* harmony import */ var _swapoption_swapoption_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swapoption/swapoption.component */ "./src/app/swapoption/swapoption.component.ts");
/* harmony import */ var _tradebasic_tradebasic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tradebasic/tradebasic.component */ "./src/app/tradebasic/tradebasic.component.ts");
/* harmony import */ var _additionalfields_additionalfields_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./additionalfields/additionalfields.component */ "./src/app/additionalfields/additionalfields.component.ts");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fees/fees.component */ "./src/app/fees/fees.component.ts");
/* harmony import */ var _salescredit_salescredit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./salescredit/salescredit.component */ "./src/app/salescredit/salescredit.component.ts");
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./margin/margin.component */ "./src/app/margin/margin.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/assignment/assignment.component.ts");
/* harmony import */ var _partialasignment_partialasignment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partialasignment/partialasignment.component */ "./src/app/partialasignment/partialasignment.component.ts");
/* harmony import */ var _swapoptionquick_swapoptionquick_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./swapoptionquick/swapoptionquick.component */ "./src/app/swapoptionquick/swapoptionquick.component.ts");
/* harmony import */ var _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shecdule/shecdule.component */ "./src/app/shecdule/shecdule.component.ts");


















var routes = [
    { path: 'swapticket', component: _swapticket_swapticket_component__WEBPACK_IMPORTED_MODULE_1__["SwapticketComponent"],
        children: [
            { path: '', redirectTo: 'payment', pathMatch: 'full' },
            { path: 'payment', component: _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_4__["SwappaymentComponent"] },
            { path: 'reset', component: _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_5__["SwapresetComponent"] },
            { path: 'amortisation', component: _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_6__["SwapamortisationComponent"] },
            { path: '', component: _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_17__["ShecduleComponent"], outlet: 'sechdule' }
        ] },
    { path: 'quickticket', component: _quickticket_quickticket_component__WEBPACK_IMPORTED_MODULE_7__["QuickticketComponent"] },
    { path: 'swapoption', component: _swapoption_swapoption_component__WEBPACK_IMPORTED_MODULE_8__["SwapoptionComponent"],
        children: [
            { path: '', redirectTo: 'payment', pathMatch: 'full' },
            { path: 'payment', component: _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_4__["SwappaymentComponent"] },
            { path: 'reset', component: _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_5__["SwapresetComponent"] },
            { path: 'amortisation', component: _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_6__["SwapamortisationComponent"] },
            { path: '', component: _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_17__["ShecduleComponent"], outlet: 'sechdule' }
        ] },
    { path: 'tradebasic', component: _tradebasic_tradebasic_component__WEBPACK_IMPORTED_MODULE_9__["TradebasicComponent"] },
    { path: 'additionalfields', component: _additionalfields_additionalfields_component__WEBPACK_IMPORTED_MODULE_10__["AdditionalfieldsComponent"] },
    { path: 'fees', component: _fees_fees_component__WEBPACK_IMPORTED_MODULE_11__["FeesComponent"] },
    { path: 'salescredit', component: _salescredit_salescredit_component__WEBPACK_IMPORTED_MODULE_12__["SalescreditComponent"] },
    { path: 'margin', component: _margin_margin_component__WEBPACK_IMPORTED_MODULE_13__["MarginComponent"] },
    { path: 'assignment', component: _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_14__["AssignmentComponent"] },
    { path: 'partialassignment', component: _partialasignment_partialasignment_component__WEBPACK_IMPORTED_MODULE_15__["PartialasignmentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _swapticket_swapticket_component__WEBPACK_IMPORTED_MODULE_1__["SwapticketComponent"],
    _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_4__["SwappaymentComponent"],
    _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_5__["SwapresetComponent"],
    _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_6__["SwapamortisationComponent"],
    _quickticket_quickticket_component__WEBPACK_IMPORTED_MODULE_7__["QuickticketComponent"],
    _swapoption_swapoption_component__WEBPACK_IMPORTED_MODULE_8__["SwapoptionComponent"],
    _tradebasic_tradebasic_component__WEBPACK_IMPORTED_MODULE_9__["TradebasicComponent"],
    _additionalfields_additionalfields_component__WEBPACK_IMPORTED_MODULE_10__["AdditionalfieldsComponent"],
    _fees_fees_component__WEBPACK_IMPORTED_MODULE_11__["FeesComponent"],
    _salescredit_salescredit_component__WEBPACK_IMPORTED_MODULE_12__["SalescreditComponent"],
    _margin_margin_component__WEBPACK_IMPORTED_MODULE_13__["MarginComponent"],
    _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_14__["AssignmentComponent"],
    _partialasignment_partialasignment_component__WEBPACK_IMPORTED_MODULE_15__["PartialasignmentComponent"],
    _swapoptionquick_swapoptionquick_component__WEBPACK_IMPORTED_MODULE_16__["SwapoptionquickComponent"],
    _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_17__["ShecduleComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n     <a class=\"navbar-brand\" href=\"#\">Derivatives Connect</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">OTC Products <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/swapticket\" routerLinkActive=\"active\">Swap Ticket</a></li>\n          <li><a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a></li>\n          <li><a href=\"#\">Cap Floor</a></li>\n          <li><a href=\"#\">FRA</a></li>\n          <li><a href=\"#\">Bond</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">ET Products <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Bond Future</a></li>\n          <li><a href=\"#\">Bond Future Option</a></li>\n          <li><a href=\"#\">MM Future</a></li>\n          <li><a href=\"#\">MM Future Option</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Asset Blotter <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">IRD Blotter</a></li>\n          <li><a href=\"#\">CRD Blotter</a></li>\n          <li><a href=\"#\">FX Blotter</a></li>\n          <li><a href=\"#\">EQ Blotter</a></li>\n          <li><a href=\"#\">CASH Blotter</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Risk Dash Board <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Page 1-1</a></li>\n          <li><a href=\"#\">Page 1-2</a></li>\n          <li><a href=\"#\">Page 1-3</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Ref Data<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Broker</a></li>\n          <li><a href=\"#\">Country</a></li>\n          <li><a href=\"#\">Currency</a></li>\n          <li><a href=\"#\">Curve</a></li>\n          <li><a href=\"#\">Customer Account </a></li>\n          <li><a href=\"#\">Exchanges</a></li>\n          <li><a href=\"#\">Firm Account</a></li>\n          <li><a href=\"#\">Traders</a></li>\n          <li><a href=\"#\">Instruments</a></li>\n          <li><a href=\"#\">Legal Entity</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">User Entitlements <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Firm Account</a></li>\n          <li><a href=\"#\">Customer Account</a></li>\n          <li><a href=\"#\">Product</a></li>\n          <li><a href=\"#\">Location</a></li>\n          <li><a href=\"#\">Menu</a></li>\n          <li><a href=\"#\">Options</a></li>\n          <li><a href=\"#\">Legal Entity</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n  \n<div class=\"container\">\n  \n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'derivatives';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _swapticket_swapticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swapticket/swapticket.component */ "./src/app/swapticket/swapticket.component.ts");
/* harmony import */ var _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swappayment/swappayment.component */ "./src/app/swappayment/swappayment.component.ts");
/* harmony import */ var _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swapreset/swapreset.component */ "./src/app/swapreset/swapreset.component.ts");
/* harmony import */ var _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swapamortisation/swapamortisation.component */ "./src/app/swapamortisation/swapamortisation.component.ts");
/* harmony import */ var _quickticket_quickticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quickticket/quickticket.component */ "./src/app/quickticket/quickticket.component.ts");
/* harmony import */ var _swapoption_swapoption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swapoption/swapoption.component */ "./src/app/swapoption/swapoption.component.ts");
/* harmony import */ var _tradebasic_tradebasic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tradebasic/tradebasic.component */ "./src/app/tradebasic/tradebasic.component.ts");
/* harmony import */ var _additionalfields_additionalfields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./additionalfields/additionalfields.component */ "./src/app/additionalfields/additionalfields.component.ts");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fees/fees.component */ "./src/app/fees/fees.component.ts");
/* harmony import */ var _salescredit_salescredit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./salescredit/salescredit.component */ "./src/app/salescredit/salescredit.component.ts");
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./margin/margin.component */ "./src/app/margin/margin.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/assignment/assignment.component.ts");
/* harmony import */ var _partialasignment_partialasignment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partialasignment/partialasignment.component */ "./src/app/partialasignment/partialasignment.component.ts");
/* harmony import */ var _swapoptionquick_swapoptionquick_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./swapoptionquick/swapoptionquick.component */ "./src/app/swapoptionquick/swapoptionquick.component.ts");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shecdule/shecdule.component */ "./src/app/shecdule/shecdule.component.ts");



















//import { SwapticketComponent } from './swapticket/swapticket.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                //SwapticketComponent
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _swapticket_swapticket_component__WEBPACK_IMPORTED_MODULE_5__["SwapticketComponent"],
                _swappayment_swappayment_component__WEBPACK_IMPORTED_MODULE_6__["SwappaymentComponent"],
                _swapreset_swapreset_component__WEBPACK_IMPORTED_MODULE_7__["SwapresetComponent"],
                _swapamortisation_swapamortisation_component__WEBPACK_IMPORTED_MODULE_8__["SwapamortisationComponent"],
                _quickticket_quickticket_component__WEBPACK_IMPORTED_MODULE_9__["QuickticketComponent"],
                _swapoption_swapoption_component__WEBPACK_IMPORTED_MODULE_10__["SwapoptionComponent"],
                _tradebasic_tradebasic_component__WEBPACK_IMPORTED_MODULE_11__["TradebasicComponent"],
                _additionalfields_additionalfields_component__WEBPACK_IMPORTED_MODULE_12__["AdditionalfieldsComponent"],
                _fees_fees_component__WEBPACK_IMPORTED_MODULE_13__["FeesComponent"],
                _salescredit_salescredit_component__WEBPACK_IMPORTED_MODULE_14__["SalescreditComponent"],
                _margin_margin_component__WEBPACK_IMPORTED_MODULE_15__["MarginComponent"],
                _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_16__["AssignmentComponent"],
                _partialasignment_partialasignment_component__WEBPACK_IMPORTED_MODULE_17__["PartialasignmentComponent"],
                _swapoptionquick_swapoptionquick_component__WEBPACK_IMPORTED_MODULE_18__["SwapoptionquickComponent"],
                _shecdule_shecdule_component__WEBPACK_IMPORTED_MODULE_21__["ShecduleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [ngx_xml2json__WEBPACK_IMPORTED_MODULE_19__["NgxXml2jsonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignment/assignment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/assignment/assignment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudC9hc3NpZ25tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQyxTQUFTLGVBQWUsQ0FBQyxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25tZW50L2Fzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjEwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/assignment/assignment.component.html":
/*!******************************************************!*\
  !*** ./src/app/assignment/assignment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            \n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "./src/app/assignment/assignment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/assignment/assignment.component.ts ***!
  \****************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent() {
    }
    AssignmentComponent.prototype.ngOnInit = function () {
    };
    AssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment',
            template: __webpack_require__(/*! ./assignment.component.html */ "./src/app/assignment/assignment.component.html"),
            styles: [__webpack_require__(/*! ./assignment.component.css */ "./src/app/assignment/assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "./src/app/fees/fees.component.css":
/*!*****************************************!*\
  !*** ./src/app/fees/fees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n  \r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.btn{margin-left:30px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLGlCQUFpQixDQUFDLFNBQVM7QUFDMUMsS0FBSyxnQkFBZ0I7QUFFckIsU0FBUyxlQUFlLENBQUMsaUJBQWlCIiwiZmlsZSI6InNyYy9hcHAvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG4gIFxyXG59XHJcbi5uYXZiYXItbmF2IGxpe3BhZGRpbmctbGVmdDoxMHB4fVxyXG4uZm9ybS1jb250cm9seyBib3JkZXItcmFkaXVzOjBweDtzaXplOiAwcHh9XHJcbi5idG57bWFyZ2luLWxlZnQ6MzBweH1cclxuXHJcbi5jb250ZW50e21hcmdpbi10b3A6MTBweDttYXJnaW4tbGVmdDogMjBweH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/fees/fees.component.html":
/*!******************************************!*\
  !*** ./src/app/fees/fees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n      <div class=\"container-fluid\">\n        \n       \n      <table class=\"table table-striped table-dark\" tex border=\"2px\">\n          <thead >\n            <tr>\n              <th scope=\"col\"></th>\n              <th scope=\"col\"></th>\n              <th scope=\"col\">Status</th>\n              <th scope=\"col\">PayRef</th>\n              <th scope=\"col\">PaymentType</th>\n              <th scope=\"col\">PaymentDate</th>\n              <th scope=\"col\">Currency</th>\n              <th scope=\"col\">Amount</th>\n              <th scope=\"col\">ConversionIndex</th>\n              <th scope=\"col\">ConversionCurrency</th>\n              <th scope=\"col\">FirmAccount</th>\n              <th scope=\"col\">CustomerAccount</th>\n              <th scope=\"col\">ConversionLog</th>\n              <th scope=\"col\">PayReceive</th>\n              <th scope=\"col\">ThirdPartyType</th>\n              <th scope=\"col\">ThirdPartyName</th>\n              <th scope=\"col\">Comments</th>\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td></td>\n              <td></td>\n              <td>Active</td>\n              <td>NA</td>\n             \n              <td><input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\"></td>\n              <td> <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select></td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n              <td>0.00</td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n              <td>-1</td>\n              <td> <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select></td>\n             \n              <td>NA</td>\n              <td>HelloFees</td>\n\n            </tr>\n            \n          </tbody>\n        </table>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary col-sm-1\">Add</button>\n      <button type=\"button\" class=\"btn btn-danger col-sm-1\">Delete</button>\n      <button type=\"button\" class=\"btn btn-success col-sm-1\">Apply</button>"

/***/ }),

/***/ "./src/app/fees/fees.component.ts":
/*!****************************************!*\
  !*** ./src/app/fees/fees.component.ts ***!
  \****************************************/
/*! exports provided: FeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesComponent", function() { return FeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeesComponent = /** @class */ (function () {
    function FeesComponent() {
    }
    FeesComponent.prototype.ngOnInit = function () {
    };
    FeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fees',
            template: __webpack_require__(/*! ./fees.component.html */ "./src/app/fees/fees.component.html"),
            styles: [__webpack_require__(/*! ./fees.component.css */ "./src/app/fees/fees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeesComponent);
    return FeesComponent;
}());



/***/ }),

/***/ "./src/app/margin/margin.component.css":
/*!*********************************************!*\
  !*** ./src/app/margin/margin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyZ2luL21hcmdpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLGlCQUFpQixDQUFDLFNBQVM7QUFDMUMsU0FBUyxlQUFlLENBQUMsaUJBQWlCIiwiZmlsZSI6InNyYy9hcHAvbWFyZ2luL21hcmdpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIG1hcmdpbi1sZWZ0Oi0zMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG4ubmF2YmFyLW5hdiBsaXtwYWRkaW5nLWxlZnQ6MTBweH1cclxuLmZvcm0tY29udHJvbHsgYm9yZGVyLXJhZGl1czowcHg7c2l6ZTogMHB4fVxyXG4uY29udGVudHttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWxlZnQ6IDIwcHh9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/margin/margin.component.html":
/*!**********************************************!*\
  !*** ./src/app/margin/margin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "./src/app/margin/margin.component.ts":
/*!********************************************!*\
  !*** ./src/app/margin/margin.component.ts ***!
  \********************************************/
/*! exports provided: MarginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginComponent", function() { return MarginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarginComponent = /** @class */ (function () {
    function MarginComponent() {
    }
    MarginComponent.prototype.ngOnInit = function () {
    };
    MarginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-margin',
            template: __webpack_require__(/*! ./margin.component.html */ "./src/app/margin/margin.component.html"),
            styles: [__webpack_require__(/*! ./margin.component.css */ "./src/app/margin/margin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarginComponent);
    return MarginComponent;
}());



/***/ }),

/***/ "./src/app/partialasignment/partialasignment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/partialasignment/partialasignment.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbGFzaWdubWVudC9wYXJ0aWFsYXNpZ25tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQyxTQUFTLGVBQWUsQ0FBQyxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFsYXNpZ25tZW50L3BhcnRpYWxhc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjEwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/partialasignment/partialasignment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/partialasignment/partialasignment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            \n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "./src/app/partialasignment/partialasignment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/partialasignment/partialasignment.component.ts ***!
  \****************************************************************/
/*! exports provided: PartialasignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialasignmentComponent", function() { return PartialasignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartialasignmentComponent = /** @class */ (function () {
    function PartialasignmentComponent() {
    }
    PartialasignmentComponent.prototype.ngOnInit = function () {
    };
    PartialasignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partialasignment',
            template: __webpack_require__(/*! ./partialasignment.component.html */ "./src/app/partialasignment/partialasignment.component.html"),
            styles: [__webpack_require__(/*! ./partialasignment.component.css */ "./src/app/partialasignment/partialasignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartialasignmentComponent);
    return PartialasignmentComponent;
}());



/***/ }),

/***/ "./src/app/quickticket/quickticket.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quickticket/quickticket.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.left-nav ul{margin-top: -5px}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpY2t0aWNrZXQvcXVpY2t0aWNrZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsZUFBZSxpQkFBaUI7QUFDaEMsZUFBZSxpQkFBaUIsQ0FBQyxTQUFTO0FBQzFDLFNBQVMsZUFBZSxDQUFDLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrdGlja2V0L3F1aWNrdGlja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5sZWZ0LW5hdiB1bHttYXJnaW4tdG9wOiAtNXB4fVxyXG4ubmF2YmFyLW5hdiBsaXtwYWRkaW5nLWxlZnQ6MTBweH1cclxuLmZvcm0tY29udHJvbHsgYm9yZGVyLXJhZGl1czowcHg7c2l6ZTogMHB4fVxyXG4uY29udGVudHttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWxlZnQ6IDIwcHh9Il19 */"

/***/ }),

/***/ "./src/app/quickticket/quickticket.component.html":
/*!********************************************************!*\
  !*** ./src/app/quickticket/quickticket.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-2\">\n    <div class=\"left-nav sidebar\"><br>\n      <ul>\n        <li>\n          <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic </a>\n        </li>\n        <li>\n          <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n        </li>\n        <li>\n          <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-10\">\n    <div>\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">New</a></li>\n                <li><a href=\"#\">Save As</a></li>\n                <li><a href=\"#\">Save</a></li>\n                <li><a href=\"#\">Delte</a></li>\n                <li><a href=\"#\">Reload</a></li>\n                <li><a href=\"#\">Approve</a></li>\n                <li><a href=\"#\">Exit</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Bought Back</a></li>\n                <li><a href=\"#\">Partial Bought Back</a></li>\n                <li><a href=\"#\">MO Maintenance</a></li>\n                <li><a href=\"#\">Migration</a></li>\n                <li><a href=\"#\">Assignment</a></li>\n                <li><a href=\"#\">Partial Assignment</a></li>\n                <li><a href=\"#\">Allocation</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Push To MO</a></li>\n                <li><a href=\"#\">Push To FO</a></li>\n                <li><a href=\"#\">Push To BU</a></li>\n                <li><a href=\"#\">Withdraw</a></li>\n                <li><a href=\"#\">Email</a></li>\n\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Calculate PV F2</a></li>\n                <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\"> Calculate Risk <span\n                      class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                    <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>\n                </li>\n\n                <li><a href=\"#\">Calculate PAA F10</a></li>\n                <li><a href=\"#\">Calculate Report F3</a></li>\n\n              </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n\n    <div class=\"clearfix\"></div>\n    <div class=\"col-sm-10 text-center\">\n      <div class=\"form-group col-sm-2\"> <br>\n        <label class=\"control-label\" for=\"dob\">Position Pay/Rec</label>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <select class=\"form-control\">\n          <option>{{ model.cmbQPaySide }}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <select class=\"form-control\">\n          <option>{{ model.cmbQRecSide  }}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-sm-10 text-center\">\n      <div class=\"form-group col-sm-2\"> <br>\n        <label class=\"control-label\" for=\"dob\">Currency/Notional</label>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <select class=\"form-control\">\n          <option>{{ model.cmbQCurrency }}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"date\" class=\"form-control\" id=\"dob\">\n      </div>\n    </div>\n    <div class=\"col-sm-10 text-center\">\n      <div class=\"form-group col-sm-2\"> <br>\n        <label class=\"control-label\" for=\"dob\">Tenor</label>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"dob\" value={{model.txtQTenor}}>\n      </div>\n    </div>\n    <div class=\"col-sm-10 text-center\">\n      <div class=\"form-group col-sm-2\"> <br>\n        <label class=\"control-label\" for=\"dob\">StartDate/EndDate</label>\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"date\" class=\"form-control\" id=\"dob\">\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"date\" class=\"form-control\" id=\"dob\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quickticket/quickticket.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quickticket/quickticket.component.ts ***!
  \******************************************************/
/*! exports provided: QuickticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickticketComponent", function() { return QuickticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _quickticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickticket.model */ "./src/app/quickticket/quickticket.model.ts");
/* harmony import */ var _services_quickticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/quickticket.service */ "./src/app/services/quickticket.service.ts");





var QuickticketComponent = /** @class */ (function () {
    function QuickticketComponent(ngx, quickServ, model) {
        this.ngx = ngx;
        this.quickServ = quickServ;
        this.model = model;
    }
    QuickticketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quickServ.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        //console.log(this.xml);
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngx.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbQPaySide = _this.obj.quick.Position;
            _this.model.cmbQRecSide = _this.obj.quick.Position;
            _this.model.cmbQCurrency = _this.obj.quick.Currency;
            _this.model.txtQNotional = _this.obj.quick.Notional;
            _this.model.txtQTenor = _this.obj.quick.Tenor;
            _this.model.txtQStartDate = _this.obj.quick.StartDate;
            _this.model.txtEndDate = _this.obj.quick.EndDate;
        }, 10);
    };
    QuickticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quickticket',
            template: __webpack_require__(/*! ./quickticket.component.html */ "./src/app/quickticket/quickticket.component.html"),
            styles: [__webpack_require__(/*! ./quickticket.component.css */ "./src/app/quickticket/quickticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"], _services_quickticket_service__WEBPACK_IMPORTED_MODULE_4__["QuickTicketService"], _quickticket_model__WEBPACK_IMPORTED_MODULE_3__["QuickTicketModel"]])
    ], QuickticketComponent);
    return QuickticketComponent;
}());



/***/ }),

/***/ "./src/app/quickticket/quickticket.model.ts":
/*!**************************************************!*\
  !*** ./src/app/quickticket/quickticket.model.ts ***!
  \**************************************************/
/*! exports provided: QuickTicketModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTicketModel", function() { return QuickTicketModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuickTicketModel = /** @class */ (function () {
    function QuickTicketModel() {
    }
    QuickTicketModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], QuickTicketModel);
    return QuickTicketModel;
}());



/***/ }),

/***/ "./src/app/salescredit/salescredit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/salescredit/salescredit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.table {padding-left: 0px;\r\n        padding-top: 0px;\r\n        margin-left:0px;\r\n        margin-top:0px;\r\n}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXNjcmVkaXQvc2FsZXNjcmVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsZUFBZSxpQkFBaUIsQ0FBQyxTQUFTO0FBQzFDLFFBQVEsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsY0FBYztBQUN0QjtBQUNBLFNBQVMsZUFBZSxDQUFDLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzY3JlZGl0L3NhbGVzY3JlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5uYXZiYXItbmF2IGxpe3BhZGRpbmctbGVmdDoxMHB4fVxyXG4uZm9ybS1jb250cm9seyBib3JkZXItcmFkaXVzOjBweDtzaXplOiAwcHh9XHJcbi50YWJsZSB7cGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/salescredit/salescredit.component.html":
/*!********************************************************!*\
  !*** ./src/app/salescredit/salescredit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-2\">\n      <div class=\"left-nav sidebar\">\n        <ul>\n          <li>\n              <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n          </li>\n          <li>\n              <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n          </li>\n          <li>\n              <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          </li>\n       </ul>\n       <hr>\n     \n      \n        <ul>\n          <li>\n              <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n          </li>\n          <li>\n              <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n          </li>\n          <li>\n              <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n          </li>\n          <li>\n            <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n        </li>\n        <li>\n            <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n        </li>\n       </ul>\n  \n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">New</a></li>\n            <li><a href=\"#\">Save As</a></li>\n            <li><a href=\"#\">Save</a></li>\n            <li><a href=\"#\">Delte</a></li>\n            <li><a href=\"#\">Reload</a></li>\n            <li><a href=\"#\">Approve</a></li>\n            <li><a href=\"#\">Exit</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Bought Back</a></li>\n            <li><a href=\"#\">Partial Bought Back</a></li>\n            <li><a href=\"#\">MO Maintenance</a></li>\n            <li><a href=\"#\">Migration</a></li>\n            <li><a href=\"#\">Assignment</a></li>\n            <li><a href=\"#\">Partial Assignment</a></li>\n            <li><a href=\"#\">Allocation</a></li>\n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Push To MO</a></li>\n            <li><a href=\"#\">Push To FO</a></li>\n            <li><a href=\"#\">Push To BU</a></li>\n            <li><a href=\"#\">Withdraw</a></li>\n            <li><a href=\"#\">Email</a></li>\n           \n            </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Calculate PV F2</a></li>\n            <li  class=\"dropdown\">\n              <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                      <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  </ul>  \n            </li>\n             \n            <li><a href=\"#\">Calculate PAA F10</a></li>\n            <li><a href=\"#\">Calculate Report F3</a></li>\n            \n            </ul>\n            </li>\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n            \n            </ul>\n            </div>\n        </nav>\n      </div>\n      <br>\n      <div class=\"clearfix\"></div>\n\n        \n       \n          <table class=\"table table-striped\" border=\"1px\">\n              <thead>\n                <tr>\n                  <th scope=\"col\"></th>\n                  <th scope=\"col\"></th>\n                  <th scope=\"col\">EvType</th>\n                  <th scope=\"col\">EvDate</th>\n                  <th scope=\"col\">Currency</th>\n                  <th scope=\"col\">Amount</th>\n                  <th scope=\"col\">FirmAccount</th>\n                  <th scope=\"col\">CustomerAccount</th>\n                  <th scope=\"col\">SalesPerson</th>\n                  <th scope=\"col\">Comments</th>\n                 \n    \n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">1</th>\n                  <td></td>\n                  <td></td>\n                  <td>Flow</td>\n                  <td><input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\"></td>\n                  <td> <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select></td>\n                  <td>0.00</td>\n                  <td> <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select></td>\n                 \n                  <td> <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select></td>\n                   \n                  \n                    <td>Hello</td>\n                </tr>\n                \n              </tbody>\n            </table>\n         \n          <button type=\"button\" class=\"btn btn-primary\">Add</button>\n          <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n          <button type=\"button\" class=\"btn btn-success\">Apply</button>\n"

/***/ }),

/***/ "./src/app/salescredit/salescredit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/salescredit/salescredit.component.ts ***!
  \******************************************************/
/*! exports provided: SalescreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalescreditComponent", function() { return SalescreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalescreditComponent = /** @class */ (function () {
    function SalescreditComponent() {
    }
    SalescreditComponent.prototype.ngOnInit = function () {
    };
    SalescreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salescredit',
            template: __webpack_require__(/*! ./salescredit.component.html */ "./src/app/salescredit/salescredit.component.html"),
            styles: [__webpack_require__(/*! ./salescredit.component.css */ "./src/app/salescredit/salescredit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalescreditComponent);
    return SalescreditComponent;
}());



/***/ }),

/***/ "./src/app/services/amotarization.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/amotarization.service.ts ***!
  \***************************************************/
/*! exports provided: SwapAmortisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapAmortisationService", function() { return SwapAmortisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SwapAmortisationService = /** @class */ (function () {
    function SwapAmortisationService(_http) {
        this._http = _http;
        this._url = './assets/amortization.xml';
    }
    SwapAmortisationService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    SwapAmortisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapAmortisationService);
    return SwapAmortisationService;
}());



/***/ }),

/***/ "./src/app/services/payments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/payments.service.ts ***!
  \**********************************************/
/*! exports provided: SwapPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapPaymentService", function() { return SwapPaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SwapPaymentService = /** @class */ (function () {
    function SwapPaymentService(_http) {
        this._http = _http;
        this._url = './assets/payments.xml';
    }
    SwapPaymentService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    SwapPaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapPaymentService);
    return SwapPaymentService;
}());



/***/ }),

/***/ "./src/app/services/quickticket.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quickticket.service.ts ***!
  \*************************************************/
/*! exports provided: QuickTicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTicketService", function() { return QuickTicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuickTicketService = /** @class */ (function () {
    function QuickTicketService(_http) {
        this._http = _http;
        this._url = './assets/quickticket.xml';
    }
    QuickTicketService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    QuickTicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuickTicketService);
    return QuickTicketService;
}());



/***/ }),

/***/ "./src/app/services/resets.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resets.service.ts ***!
  \********************************************/
/*! exports provided: ResetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetsService", function() { return ResetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ResetsService = /** @class */ (function () {
    function ResetsService(_http) {
        this._http = _http;
        this._url = './assets/reset.xml';
    }
    ResetsService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    ResetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResetsService);
    return ResetsService;
}());



/***/ }),

/***/ "./src/app/services/sechdule.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sechdule.service.ts ***!
  \**********************************************/
/*! exports provided: SechduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SechduleService", function() { return SechduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SechduleService = /** @class */ (function () {
    function SechduleService(_http) {
        this._http = _http;
        this._url = './assets/sechdule.xml';
    }
    SechduleService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    SechduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SechduleService);
    return SechduleService;
}());



/***/ }),

/***/ "./src/app/services/swapoption.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/swapoption.service.ts ***!
  \************************************************/
/*! exports provided: SwapOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapOptionService", function() { return SwapOptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SwapOptionService = /** @class */ (function () {
    function SwapOptionService(_http) {
        this._http = _http;
        this._url = './assets/swapoption.xml';
    }
    SwapOptionService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    SwapOptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapOptionService);
    return SwapOptionService;
}());



/***/ }),

/***/ "./src/app/services/swapticket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/swapticket.service.ts ***!
  \************************************************/
/*! exports provided: SwapTicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapTicketService", function() { return SwapTicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SwapTicketService = /** @class */ (function () {
    function SwapTicketService(_http) {
        this._http = _http;
        this._url = './assets/swapticket.xml';
    }
    SwapTicketService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    SwapTicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapTicketService);
    return SwapTicketService;
}());



/***/ }),

/***/ "./src/app/shecdule/sechdule.model.ts":
/*!********************************************!*\
  !*** ./src/app/shecdule/sechdule.model.ts ***!
  \********************************************/
/*! exports provided: SechduleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SechduleModel", function() { return SechduleModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SechduleModel = /** @class */ (function () {
    function SechduleModel() {
    }
    SechduleModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SechduleModel);
    return SechduleModel;
}());



/***/ }),

/***/ "./src/app/shecdule/shecdule.component.css":
/*!*************************************************!*\
  !*** ./src/app/shecdule/shecdule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:20px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlY2R1bGUvc2hlY2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsZUFBZSxpQkFBaUIsQ0FBQyxTQUFTIiwiZmlsZSI6InNyYy9hcHAvc2hlY2R1bGUvc2hlY2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjIwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH0iXX0= */"

/***/ }),

/***/ "./src/app/shecdule/shecdule.component.html":
/*!**************************************************!*\
  !*** ./src/app/shecdule/shecdule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4 text-right\">\n  <div class=\"text-center\">\n      <button><a [routerLink]=\"['./schedule']\" routerLinkActive=\"active\">SCHEDULE </a></button>\n</div>\n<div class=\"form-group col-sm-6\">\n    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayPV}}>\n</div>\n  <div class=\"form-group col-sm-6\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let c of model.cmbPayPVCurrency\"selected>{{c}}</option>\n       \n      </select>\n    </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"form-group col-sm-6\">\n      <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayParallelDelta}}>\n</div>\n    <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let pc of model.cmbPayCurve\"selected>{{pc}}</option>\n        </select>\n      </div>\n </div>\n<div class=\"col-sm-4 text-center\">\n  <div class=\"col-sm-12\"></div>\n  <div class=\"col-sm-12\"></div><br><br>\n  <div class=\"col-sm-12\">\n      <label class=\"label-control\">PV/Currency</label>\n  </div><br><br><br>\n  <div class=\"col-sm-12\">\n     <label class=\"label-control\">Parallel/Delta/Curve</label>\n </div><br><br><br>\n </div>\n <div class=\"col-sm-4 text-right\">\n  <div class=\"text-center\">\n      <button><a [routerLink]=\"['./schedule']\" routerLinkActive=\"active\">SCHEDULE </a></button>\n</div>\n<div class=\"form-group col-sm-6\">\n    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayPV}}>\n</div>\n  <div class=\"form-group col-sm-6\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let c of model.cmbPayPVCurrency\"selected>{{c}}</option>\n       \n      </select>\n    </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"form-group col-sm-6\">\n      <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayParallelDelta}}>\n</div>\n    <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let pc of model.cmbPayCurve\"selected>{{pc}}</option>\n        </select>\n      </div>\n </div>"

/***/ }),

/***/ "./src/app/shecdule/shecdule.component.ts":
/*!************************************************!*\
  !*** ./src/app/shecdule/shecdule.component.ts ***!
  \************************************************/
/*! exports provided: ShecduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShecduleComponent", function() { return ShecduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_sechdule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sechdule.service */ "./src/app/services/sechdule.service.ts");
/* harmony import */ var _sechdule_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sechdule.model */ "./src/app/shecdule/sechdule.model.ts");





var ShecduleComponent = /** @class */ (function () {
    function ShecduleComponent(ngx, quickServ, model) {
        this.ngx = ngx;
        this.quickServ = quickServ;
        this.model = model;
    }
    ShecduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quickServ.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        //console.log(this.xml);
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngx.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbPayPVCurrency = _this.obj.schedule.Currency.cur;
            _this.model.cmbPayCurve = _this.obj.schedule.PayCurve.pcu;
            _this.model.cmbRecPVCurrency = _this.obj.schedule.Currency.cur;
            _this.model.cmbRecCurve = _this.obj.schedule.PayCurve.pcu;
        }, 10);
    };
    ShecduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./shecdule.component.html */ "./src/app/shecdule/shecdule.component.html"),
            styles: [__webpack_require__(/*! ./shecdule.component.css */ "./src/app/shecdule/shecdule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"], _services_sechdule_service__WEBPACK_IMPORTED_MODULE_3__["SechduleService"], _sechdule_model__WEBPACK_IMPORTED_MODULE_4__["SechduleModel"]])
    ], ShecduleComponent);
    return ShecduleComponent;
}());



/***/ }),

/***/ "./src/app/swapamortisation/swapamortisation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/swapamortisation/swapamortisation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{ border-radius:0px;size: 0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcGFtb3J0aXNhdGlvbi9zd2FwYW1vcnRpc2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxpQkFBaUIsQ0FBQyxTQUFTIiwiZmlsZSI6InNyYy9hcHAvc3dhcGFtb3J0aXNhdGlvbi9zd2FwYW1vcnRpc2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9seyBib3JkZXItcmFkaXVzOjBweDtzaXplOiAwcHh9Il19 */"

/***/ }),

/***/ "./src/app/swapamortisation/swapamortisation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/swapamortisation/swapamortisation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4 text-center\">\n  <div class=\"col-sm-6\"></div>\n    <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option>{{model.cmbPayAmortType}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"form-group col-sm-6\">\n          <select class=\"form-control\">\n            <option>{{model.txtPayAmortStartDate}}</option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select>\n        </div>\n       <div class=\"form-group col-sm-6\">\n            <select class=\"form-control\">\n              <option>{{model.txtPayAmortEndDate}}</option>\n              <option></option>\n              <option></option>\n              <option></option>\n            </select>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"col-sm-12\"></div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option>{{model.cmbPayAmortBusDay}}</option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <select class=\"form-control\">\n                  <option>{{model.cntPayAmortCalendars}}</option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-12\"></div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option>{{model.cmbPayAmortFreq}}</option>\n                    <option></option>\n                    <option></option>\n                    <option></option>\n                  </select>\n                </div>\n          \n                <div class=\"form-group col-sm-6\">\n                    <select class=\"form-control\">\n                      <option>{{model.cmbPayAmortMarching}}</option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"col-sm-12\"></div>\n                  <div class=\"form-group col-sm-6\">\n                      <select class=\"form-control\">\n                        <option>{{model.cmbPayAmortRollDay}}</option>\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                      </select>\n                    </div>\n                   \n                    <div class=\"form-group col-sm-6\">\n                        <select class=\"form-control\">\n                          <option>{{model.cmbPayAmortRollWeek}}</option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"form-group col-sm-6\"></div>\n                      <div class=\"form-group col-sm-6\">\n                        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayAmortAmount}}>\n                  </div>  \n</div>\n\n<div class=\"col-sm-4 text-center\">\n  <div class=\"col-sm-12\"></div>\n  <div class=\"col-sm-12\"></div>\n  <div class=\"col-sm-12\"><br>\n      <label class=\"label-control\">Amort type</label>\n  </div><br><br><br><br>\n  <div class=\"col-sm-12\">\n     <label class=\"label-control\">Amort Start Date/End Date</label>\n </div><br><br><br>\n <div class=\"col-sm-12\">\n     <label class=\"label-control\">Amort Bus Day/Calendars</label>\n </div><br><br><br>\n <div class=\"col-sm-12\">\n     <label class=\"label-control\">Amort Freq/Marching</label>\n </div><br><br><br>\n <div class=\"col-sm-12\">\n     <label class=\"label-control\">Amort RollDay/RollWeek</label>\n </div><br><br><br>\n <div class=\"col-sm-12\">\n    <label class=\"label-control\">Amort Amount</label>\n</div><br><br><br>\n\n</div>\n<div class=\"col-sm-4 text-center\">\n  \n    <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option>{{model.cmbRecAmortType}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"form-group col-sm-6\">\n          <select class=\"form-control\">\n            <option>{{model.txtRecAmortStartDate}}</option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select>\n        </div>\n       <div class=\"form-group col-sm-6\">\n            <select class=\"form-control\">\n              <option>{{model.txtRecAmortEndDate}}</option>\n              <option></option>\n              <option></option>\n              <option></option>\n            </select>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"col-sm-12\"></div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option>{{model.cmbRecAmortBusDay}}</option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <select class=\"form-control\">\n                  <option>{{model.cntRecAmortCalendars}}</option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-12\"></div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option>{{model.cmbRecAmortFreq}}</option>\n                    <option></option>\n                    <option></option>\n                    <option></option>\n                  </select>\n                </div>\n          \n                <div class=\"form-group col-sm-6\">\n                    <select class=\"form-control\">\n                      <option>{{model.cmbRecAmortMarching}}</option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"col-sm-12\"></div>\n                  <div class=\"form-group col-sm-6\">\n                      <select class=\"form-control\">\n                        <option>{{model.cmbRecAmortRollDay}}</option>\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                      </select>\n                    </div>\n                   \n                    <div class=\"form-group col-sm-6\">\n                        <select class=\"form-control\">\n                          <option>{{model.cmbRecAmortRollWeek}}</option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"form-group col-sm-6\"></div>\n                      <div class=\"form-group col-sm-6\">\n                        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecAmortAmount}}>\n                  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/swapamortisation/swapamortisation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/swapamortisation/swapamortisation.component.ts ***!
  \****************************************************************/
/*! exports provided: SwapamortisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapamortisationComponent", function() { return SwapamortisationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _swapamortisation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapamortisation.model */ "./src/app/swapamortisation/swapamortisation.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_amotarization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/amotarization.service */ "./src/app/services/amotarization.service.ts");





var SwapamortisationComponent = /** @class */ (function () {
    function SwapamortisationComponent(ngxXml2jsonService, xmlService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.xmlService = xmlService;
        this.model = model;
    }
    SwapamortisationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xmlService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbPayAmortType = _this.obj.amortisation.AmortType;
            _this.model.txtPayAmortStartDate = _this.obj.amortisation.AmortStartDate;
            _this.model.txtPayAmortEndDate = _this.obj.amortisation.AmortEndDate;
            _this.model.cmbPayAmortBusDay = _this.obj.amortisation.AmortBusDay;
            _this.model.cntPayAmortCalendars = _this.obj.amortisation.AmortCalendars;
            _this.model.cmbPayAmortFreq = _this.obj.amortisation.AmortFreq;
            _this.model.cmbPayAmortMarching = _this.obj.amortisation.AmortMarching;
            _this.model.cmbPayAmortRollDay = _this.obj.amortisation.AmortRollDay;
            _this.model.cmbPayAmortRollWeek = _this.obj.amortisation.AmortRollWeek;
            _this.model.txtPayAmortAmount = _this.obj.amortisation.AmortAmount;
            _this.model.cmbRecAmortType = _this.obj.amortisation.AmortType;
            _this.model.txtRecAmortStartDate = _this.obj.amortisation.AmortStartDate;
            _this.model.txtRecAmortEndDate = _this.obj.amortisation.AmortEndDate;
            _this.model.cmbRecAmortBusDay = _this.obj.amortisation.AmortBusDay;
            _this.model.cntRecAmortCalendars = _this.obj.amortisation.AmortCalendars;
            _this.model.cmbRecAmortFreq = _this.obj.amortisation.AmortFreq;
            _this.model.cmbRecAmortMarching = _this.obj.amortisation.AmortMarching;
            _this.model.cmbRecAmortRollDay = _this.obj.amortisation.AmortRollDay;
            _this.model.cmbRecAmortRollWeek = _this.obj.amortisation.AmortRollWeek;
            _this.model.txtRecAmortAmount = _this.obj.amortisation.AmortAmount;
        }, 10);
    };
    SwapamortisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-swapamortisation',
            template: __webpack_require__(/*! ./swapamortisation.component.html */ "./src/app/swapamortisation/swapamortisation.component.html"),
            styles: [__webpack_require__(/*! ./swapamortisation.component.css */ "./src/app/swapamortisation/swapamortisation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _services_amotarization_service__WEBPACK_IMPORTED_MODULE_4__["SwapAmortisationService"],
            _swapamortisation_model__WEBPACK_IMPORTED_MODULE_1__["SwapAmortisationModel"]])
    ], SwapamortisationComponent);
    return SwapamortisationComponent;
}());



/***/ }),

/***/ "./src/app/swapamortisation/swapamortisation.model.ts":
/*!************************************************************!*\
  !*** ./src/app/swapamortisation/swapamortisation.model.ts ***!
  \************************************************************/
/*! exports provided: SwapAmortisationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapAmortisationModel", function() { return SwapAmortisationModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapAmortisationModel = /** @class */ (function () {
    function SwapAmortisationModel() {
    }
    SwapAmortisationModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SwapAmortisationModel);
    return SwapAmortisationModel;
}());



/***/ }),

/***/ "./src/app/swapoption/swapoption.component.css":
/*!*****************************************************!*\
  !*** ./src/app/swapoption/swapoption.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\nli input {width:150px}\r\nli select{width:150px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.dropdown-submenu {\r\n  position: relative;\r\n}\r\n.dropdown-submenu .dropdown-menu {\r\n  top: 0;\r\n  left: 100%;\r\n  margin-top: -1px;\r\n}\r\n.content{margin-top:10px;margin-left: 20px}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcG9wdGlvbi9zd2Fwb3B0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLFVBQVUsV0FBVztBQUNyQixVQUFVLFdBQVc7QUFDckIsZUFBZSxpQkFBaUIsQ0FBQyxTQUFTO0FBQzFDO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0M7RUFDQyxNQUFNO0VBQ04sVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBLFNBQVMsZUFBZSxDQUFDLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL3N3YXBvcHRpb24vc3dhcG9wdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBtYXJnaW4tbGVmdDotMzBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG4ubmF2YmFyLW5hdiBsaXtwYWRkaW5nLWxlZnQ6MTBweH1cclxubGkgaW5wdXQge3dpZHRoOjE1MHB4fVxyXG5saSBzZWxlY3R7d2lkdGg6MTUwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gLmRyb3Bkb3duLXN1Ym1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/swapoption/swapoption.component.html":
/*!******************************************************!*\
  !*** ./src/app/swapoption/swapoption.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-2\">\n    <div class=\"left-nav sidebar\">\n      <ul>\n        <li>\n          <a routerLink=\"/swapoptiontrade\" routerLinkActive=\"active\">Trade Basic</a>\n        </li>\n        <li>\n          <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n        </li>\n        <li>\n          <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-10\">\n    <div>\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n          </div>\n          <ul class=\"nav navbar-nav\">\n\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a tabindex=\"-1\">New</a></li>\n                <li class=\"dropdown-submenu\"><a class=\"dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\"\n                    href=\"#\">Save As<span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a tabindex=\"-1\" href=\"#\">New Trade </a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Template Trade</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\">Save &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ctrl+s</a></li>\n                <li><a href=\"#\">Delete</a></li>\n                <li class=\"dropdown-submenu\"><a class=\"dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\"\n                    href=\"#\">Reload<span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a tabindex=\"-1\" href=\"#\">Latest</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">History</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Templates</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\">Approve</a></li>\n                <li><a href=\"#\">Exit</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Event <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Bought Back</a></li>\n                <li><a href=\"#\">Partial Bought Back</a></li>\n                <li><a href=\"#\">MO Maintenance</a></li>\n                <li><a href=\"#\">Migration</a></li>\n                <li><a href=\"#\">Assignment</a></li>\n                <li><a href=\"#\">Partial Assignment</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Push to MO</a></li>\n                <li><a href=\"#\">Push to FO</a></li>\n                <li><a href=\"#\">Push to BO</a></li>\n                <li><a href=\"#\">Withdraw</a></li>\n                <li class=\"dropdown-submenu\"><a class=\"dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\"\n                    href=\"#\">Email<span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a tabindex=\"-1\" href=\"#\">Send Ticket</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Send CashFlow</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Send Risk</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Send PV</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics <span\n                  class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Calculate PV\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F2</a>\n                </li>\n                <li class=\"dropdown-submenu\"><a class=\"dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\"\n                    href=\"#\">Calculate Risk<span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a tabindex=\"-1\" href=\"#\">Delta\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctrl+D</a>\n                    </li>\n                    <li><a tabindex=\"-1\" href=\"#\">Gamma\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctrl+G</a></li>\n                    <li><a tabindex=\"-1\" href=\"#\">Vega\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctrl+V</a>\n                    </li>\n                    <li><a tabindex=\"-1\" href=\"#\">Theta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctrl+T</a></li>\n                  </ul>\n                <li><a href=\"#\">Calculate PAA &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F10</a>\n                </li>\n                <li><a href=\"#\">CashFlow Report &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F3</a></li>\n              </ul>\n            </li>\n\n            <li class=\"content\">\n              Market\n            </li>\n            <li>\n              <select class=\"form-control\">\n                <option>Live</option>\n                <option>EndOfDay</option>\n                <option>Historic</option>\n              </select>\n\n            </li>\n            <li class=\"content\">\n              Close Date\n            </li>\n            <li>\n              <input type=\"date\" class=\"form-control\">\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n    <br>\n    <div class=\"clearfix\"></div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">Expiry Date</label>\n      <input type=\"date\" class=\"form-control\" id=\"\" />\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"fname\">Buy Flag</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let buy of model.cmbBuyFlag\">{{buy}}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"lname\">Option Style</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let optionStyle of model.cmbOptionStyle\">{{optionStyle}}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">Option Type</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let optionType of model.cmbOptionType\">{{optionType}}</option>\n      </select>\n    </div>\n    <div class=\"clearfix\"></div>\n\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"lname\">Option Position</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let optionPosition of model.cmbOptionPosition\">{{optionPosition}}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">Pricing Method</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let optionMethod of model.cmbPricingMethod\">{{ optionMethod }}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">Strick</label>\n      <input type=\"text\" class=\"form-control\" id=\"\" value={{model.txtStrike}}>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">Swap EndDate</label>\n      <input type=\"date\" class=\"form-control\" value={{model.txtSwapEndDate}}>\n    </div>\n    <div class=\"clearfix\"></div>\n\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">SwapLag</label>\n      <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" value={{model.txtSwapLag}}>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">SwapLagBusDay</label>\n      <select class=\"form-control\">\n        <option>{{ model.cmbSwapLagBusDay }}</option>\n\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">SwapRef</label>\n      <input type=\"text\" class=\"form-control\" id=\"\" value={{model.txtSwapRef}}>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"\">SwapStartDate</label>\n      <input type=\"date\" class=\"form-control\" id=\"\">\n    </div>\n    <div class=\"clearfix\"></div>\n\n\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">Vol Id</label>\n      <input type=\"text\" class=\"form-control\" id=\"\" value={{model.txtVolId}}>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">ExerciseFlag</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let flag of  model.cmbExercirseFlag \">{{ flag }}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <label class=\"control-label\" for=\"dob\">ExerciseType</label>\n      <select class=\"form-control\">\n        <option selected *ngFor=\"let type of  model.cmbExerciseType \">{{ type }}</option>\n      </select>\n    </div>\n\n    <br><br>\n    <div class=\"clearfix\"></div>\n    <hr>\n    <div class=\"col-sm-4\">\n      <div class=\"text-center\">\n        <button>PAY</button>\n      </div>\n      <div class=\"col-sm-4\"></div>\n      <div class=\"form-group col-sm-8\">\n        <select class=\"form-control\">\n          <option>1 of 1</option>\n          <option>1 of 2</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-5\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value=1>\n      </div>\n      <div class=\"form-group col-sm-7\">\n        <select class=\"form-control\">\n          <option>Fixed</option>\n          <option>Float</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let cur of model.cmbPayCurrency\" selected>{{cur}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayTenor}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayNotional}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let ne of model.cmbPayNotionalExchange\" selected>{{ne}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayStartDate}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayStartStub}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let sr of model.cmbPayStartDateRollFlag\" selected>{{sr}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let er of model.cmbPayEndDateRollFlag\" selected>{{er}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayEndDate}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayEndStub}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayFrontstub}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayBackStub}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <hr>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayFixedQuote}}>\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayGearFactor}}>\n      </div>\n      <div class=\"form-group col-sm-5\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPaySpread}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let dc of model.cmbPayDayCount\" selected>{{dc}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let dcu of model.cmbPayDiscountCurve\" selected>{{dcu}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let abd of model.cmbPayAccrualBusDay\" selected>{{abd}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let ac of model.cntPayAccrualCalendars\" selected>{{ac}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let af of model.cmbPayAccrualFreq\" selected>{{af}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let am of model.cmbPayAccrualMarching\" selected>{{am}}</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-3\">\n        <select class=\"form-control\">\n          <option>{{model.cmbPayAccrualRollDay}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let arw of model.cmbPayAccrualRollWeek\" selected>{{arw}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <select class=\"form-control\">\n          <option>{{model.cmbPayEndOfMonthIndicator}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let c of model.cmbPayCompounding\" selected>{{c}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option>{{model.cmbPayCompFreq}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n\n    </div>\n\n\n\n\n\n    <div class=\"col-sm-4 text-center\">\n      <br><br><br><br><br><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">Currency/Tenor</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">Notional/NotionalExchange</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">StartDate/EndDate</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">StartRoll/EndRoll</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">EndDate/EndStub</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">StartStubM.Rate/EndStubM.Rate</label>\n      </div><br><br><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">FixedQuote/GearFactor/Spread</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">DayCount</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">DiscountCurve</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">AccuralBUsDay/Calendars</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">AccuralFreq/Marching</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">AccuralRollDay/RollWeek/EOM</label>\n      </div><br><br><br>\n      <div class=\"col-sm-12\">\n        <label class=\"label-control\">CompoundingConv/CompFreq</label>\n      </div><br><br><br>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"text-center\">\n        <button>Recive</button>\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <select class=\"form-control\">\n          <option>1 of 1</option>\n          <option>1 of 2</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-5\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value=1>\n      </div>\n      <div class=\"form-group col-sm-7\">\n        <select class=\"form-control\">\n          <option>Fixed</option>\n          <option>Float</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let cur of model.cmbRecCurrency\" selected>{{cur}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecTenor}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecNotional}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let ne of model.cmbRecNotionalExchange\" selected>{{ne}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecStartDate}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecStartStub}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let sr of model.cmbRecStartDateRollFlag\" selected>{{sr}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let er of model.cmbRecEndDateRollFlag\" selected>{{er}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecEndDate}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecEndStub}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecFrontStub}}>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.legsPnl}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <hr>\n      <div class=\"form-group col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecFixedQuote}}>\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecGearFactor}}>\n      </div>\n      <div class=\"form-group col-sm-5\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecSpread}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let dc of model.cmbRecDayCount\" selected>{{dc}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let dcu of model.cmbRecDiscountCurve\" selected>{{dcu}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let abd of model.cmbRecAccrualBusDay\" selected>{{abd}}</option>\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let ac of model.cntRecAccrualCalendars\" selected>{{ac}}</option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let af of model.cmbRecAccrualFreq\" selected>{{af}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let am of model.cmbRecAccrualMarching\" selected>{{am}}</option>\n\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-3\">\n        <select class=\"form-control\">\n          <option>{{model.cmbRecAccrualRollDay}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let arw of model.cmbRecAccrualRollWeek\" selected>{{arw}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <select class=\"form-control\">\n          <option>{{model.cmbRecEndOfMonthIndicator}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n      <div class=\"clearfix\"></div>\n\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let c of model.cmbRecCompounding\" selected>{{c}}</option>\n\n        </select>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <select class=\"form-control\">\n          <option>{{model.cmbRecCompFreq}}</option>\n          <option></option>\n          <option></option>\n          <option></option>\n        </select>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n\n    <div class=\"col-sm-12\">\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['./payment']\" routerLinkActive=\"active\">Payment </a></li>\n            <li><a [routerLink]=\"['./reset']\" routerLinkActive=\"active\">Reset </a></li>\n            <li><a [routerLink]=\"['./amortisation']\" routerLinkActive=\"active\">Amortisation </a></li>\n          </ul>\n\n        </div>\n      </nav>\n    </div>\n\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"col-sm-10 text-right\">\n    <router-outlet name=\"sechdule\"></router-outlet>\n  </div>"

/***/ }),

/***/ "./src/app/swapoption/swapoption.component.ts":
/*!****************************************************!*\
  !*** ./src/app/swapoption/swapoption.component.ts ***!
  \****************************************************/
/*! exports provided: SwapoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapoptionComponent", function() { return SwapoptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_swapoption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/swapoption.service */ "./src/app/services/swapoption.service.ts");
/* harmony import */ var _swapoption_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swapoption.model */ "./src/app/swapoption/swapoption.model.ts");





var SwapoptionComponent = /** @class */ (function () {
    function SwapoptionComponent(ngx, swapXmlServ, model) {
        this.ngx = ngx;
        this.swapXmlServ = swapXmlServ;
        this.model = model;
    }
    SwapoptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.swapXmlServ.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        //console.log(this.xml);
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngx.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbBuyFlag = _this.obj.root.BuyFlag.Buy;
            _this.model.txtExpiryDate = _this.obj.root.ExpiryDate;
            _this.model.cmbOptionType = _this.obj.root.OptionType.Option;
            _this.model.cmbOptionStyle = _this.obj.root.OptionStyle.Style1;
            _this.model.cmbOptionPosition = _this.obj.root.OptionPosition.Fixed;
            _this.model.cmbPricingMethod = _this.obj.root.PricingMethod.Pricing;
            _this.model.txtSwapLag = _this.obj.root.SwapLag;
            _this.model.cmbSwapLagBusDay = _this.obj.root.SwapLagBusDay;
            _this.model.txtVolId = _this.obj.root.VolId;
            _this.model.cmbExercirseFlag = _this.obj.root.ExerciseFlag.Flag;
            _this.model.txtStrike = _this.obj.root.Strike;
            _this.model.txtSwapEndDate = _this.obj.root.SwapEndDate;
            _this.model.txtSwapRef = _this.obj.root.SwapRef;
            _this.model.txtSwapStartDate = _this.obj.root.SwapStartDate;
            _this.model.cmbExerciseType = _this.obj.root.ExerciseType.Type;
            console.log(_this.model);
            _this.model.cmbPayCurrency = _this.obj.root.Currency.Cur;
            _this.model.txtPayTenor = _this.obj.root.Tenor;
            _this.model.cmbRecCurrency = _this.obj.root.Currency.Cur;
            _this.model.txtRecTenor = _this.obj.root.Tenor;
            _this.model.txtPayNotional = _this.obj.root.Notional;
            _this.model.cmbPayNotionalExchange = _this.obj.root.NotionalExchange.NE;
            _this.model.txtRecNotional = _this.obj.root.Notional;
            _this.model.cmbRecNotionalExchange = _this.obj.root.NotionalExchange.NE;
            _this.model.txtPayStartDate = _this.obj.root.StartDate;
            _this.model.txtPayStartStub = _this.obj.root.StartStub;
            _this.model.txtRecStartDate = _this.obj.root.StartDate;
            _this.model.txtRecStartStub = _this.obj.root.StartStub;
            _this.model.cmbPayStartDateRollFlag = _this.obj.root.StartRoll.sr;
            _this.model.cmbPayEndDateRollFlag = _this.obj.root.EndRoll.er;
            _this.model.cmbRecStartDateRollFlag = _this.obj.root.StartRoll.sr;
            _this.model.cmbRecEndDateRollFlag = _this.obj.root.EndRoll.er;
            _this.model.txtPayEndDate = _this.obj.root.EndDate;
            _this.model.txtPayEndStub = _this.obj.root.EndStub;
            _this.model.txtRecEndDate = _this.obj.root.EndDate;
            _this.model.txtRecEndStub = _this.obj.root.EndStub;
            _this.model.txtPayFrontstub = _this.obj.root.StartStubMRate;
            _this.model.txtPayBackStub = _this.obj.root.EndStubMRate;
            _this.model.txtRecFrontStub = _this.obj.root.StartStubMRate;
            _this.model.legsPnl = _this.obj.root.EndStubMRate;
            _this.model.txtPayFixedQuote = _this.obj.root.FixedQuote;
            _this.model.txtPayGearFactor = _this.obj.root.GearFactor;
            _this.model.txtPaySpread = _this.obj.root.GearFactor;
            _this.model.txtRecFixedQuote = _this.obj.root.FixedQuote;
            _this.model.txtRecGearFactor = _this.obj.root.GearFactor;
            _this.model.txtRecSpread = _this.obj.root.GearFactor;
            _this.model.cmbPayDayCount = _this.obj.root.DayCount.dc;
            _this.model.cmbRecDayCount = _this.obj.root.DayCount.dc;
            _this.model.cmbPayDiscountCurve = _this.obj.root.DiscountCurve.dcu;
            _this.model.cmbRecDiscountCurve = _this.obj.root.DiscountCurve.dcu;
            _this.model.cmbPayAccrualBusDay = _this.obj.root.AccrualBusDay.abd;
            _this.model.cntPayAccrualCalendars = _this.obj.root.AccrualCalendars.ac;
            _this.model.cmbRecAccrualBusDay = _this.obj.root.AccrualBusDay.abd;
            _this.model.cntRecAccrualCalendars = _this.obj.root.AccrualCalendars.ac;
            _this.model.cmbPayAccrualFreq = _this.obj.root.AccrualFreq.af;
            _this.model.cmbPayAccrualMarching = _this.obj.root.AccrualMarching.am;
            _this.model.cmbRecAccrualFreq = _this.obj.root.AccrualFreq.af;
            _this.model.cmbRecAccrualMarching = _this.obj.root.AccrualMarching.am;
            _this.model.cmbPayAccrualRollDay = _this.obj.root.AccrualRollDay;
            _this.model.cmbPayAccrualRollWeek = _this.obj.root.AccrualRollWeek.arw;
            _this.model.cmbPayEndOfMonthIndicator = _this.obj.root.AmortRollMonth;
            _this.model.cmbRecAccrualRollDay = _this.obj.root.AccrualRollDay;
            _this.model.cmbRecAccrualRollWeek = _this.obj.root.AccrualRollWeek.arw;
            _this.model.cmbRecEndOfMonthIndicator = _this.obj.root.AmortRollMonth;
            _this.model.cmbPayCompounding = _this.obj.root.Compounding.c;
            _this.model.cmbPayCompFreq = _this.obj.root.CompFreq;
            _this.model.cmbRecCompounding = _this.obj.root.Compounding.c;
            _this.model.cmbRecCompFreq = _this.obj.root.CompFreq;
        }, 10);
    };
    SwapoptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swapoption',
            template: __webpack_require__(/*! ./swapoption.component.html */ "./src/app/swapoption/swapoption.component.html"),
            styles: [__webpack_require__(/*! ./swapoption.component.css */ "./src/app/swapoption/swapoption.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"], _services_swapoption_service__WEBPACK_IMPORTED_MODULE_3__["SwapOptionService"], _swapoption_model__WEBPACK_IMPORTED_MODULE_4__["SwapOptionModel"]])
    ], SwapoptionComponent);
    return SwapoptionComponent;
}());



/***/ }),

/***/ "./src/app/swapoption/swapoption.model.ts":
/*!************************************************!*\
  !*** ./src/app/swapoption/swapoption.model.ts ***!
  \************************************************/
/*! exports provided: SwapOptionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapOptionModel", function() { return SwapOptionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapOptionModel = /** @class */ (function () {
    function SwapOptionModel() {
    }
    SwapOptionModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SwapOptionModel);
    return SwapOptionModel;
}());



/***/ }),

/***/ "./src/app/swapoptionquick/swapoptionquick.component.css":
/*!***************************************************************!*\
  !*** ./src/app/swapoptionquick/swapoptionquick.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:20px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcG9wdGlvbnF1aWNrL3N3YXBvcHRpb25xdWljay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLGlCQUFpQixDQUFDLFNBQVMiLCJmaWxlIjoic3JjL2FwcC9zd2Fwb3B0aW9ucXVpY2svc3dhcG9wdGlvbnF1aWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5uYXZiYXItbmF2IGxpe3BhZGRpbmctbGVmdDoyMHB4fVxyXG4uZm9ybS1jb250cm9seyBib3JkZXItcmFkaXVzOjBweDtzaXplOiAwcHh9Il19 */"

/***/ }),

/***/ "./src/app/swapoptionquick/swapoptionquick.component.html":
/*!****************************************************************!*\
  !*** ./src/app/swapoptionquick/swapoptionquick.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-1\">\n    <div class=\"left-nav sidebar\"><br>\n      <ul>\n        <li>\n          <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic </a>\n        </li>\n        <li>\n          <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n        </li>\n        <li>\n          <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n          \n        </li>\n      </ul>\n      </div>\n  </div>\n  <div class=\"col-sm-11\">\n    <div>\n      <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">New</a></li>\n          <li><a href=\"#\">Save As</a></li>\n          <li><a href=\"#\">Save</a></li>\n          <li><a href=\"#\">Delte</a></li>\n          <li><a href=\"#\">Reload</a></li>\n          <li><a href=\"#\">Approve</a></li>\n          <li><a href=\"#\">Exit</a></li>\n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Bought Back</a></li>\n          <li><a href=\"#\">Partial Bought Back</a></li>\n          <li><a href=\"#\">MO Maintenance</a></li>\n          <li><a href=\"#\">Migration</a></li>\n          <li><a href=\"#\">Assignment</a></li>\n          <li><a href=\"#\">Partial Assignment</a></li>\n          <li><a href=\"#\">Allocation</a></li>\n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Push To MO</a></li>\n          <li><a href=\"#\">Push To FO</a></li>\n          <li><a href=\"#\">Push To BU</a></li>\n          <li><a href=\"#\">Withdraw</a></li>\n          <li><a href=\"#\">Email</a></li>\n         \n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Calculate PV F2</a></li>\n          <li  class=\"dropdown\">\n            <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                    <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                    <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                </ul>  \n          </li>\n           \n          <li><a href=\"#\">Calculate PAA F10</a></li>\n          <li><a href=\"#\">Calculate Report F3</a></li>\n          \n          </ul>\n          </li>\n          <li>\n            <input class=\"form-control\" type=\"text\" >\n          </li>\n          <li>\n            <input class=\"form-control\" type=\"text\" >\n          </li>\n          </ul>\n          </div>\n      </nav>\n    </div>\n\n    <div class=\"clearfix\"></div>\n    <div class=\"col-sm-10 text-center\">\n        <div class=\"form-group col-sm-2\">  <br>\n            <label class=\"control-label\" for=\"dob\">Position</label>\n         </div>\n         <div class=\"form-group col-sm-4\">\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n          </div>\n          <div class=\"form-group col-sm-4\">\n            <select class=\"form-control\">\n              <option></option>\n              <option></option>\n              <option></option>\n              <option></option>\n            </select>\n        </div>\n    </div>\n    <div class=\"col-sm-10 text-center\">\n        <div class=\"form-group col-sm-2\">  <br>\n            <label class=\"control-label\" for=\"dob\">Currency/Notional</label>\n         </div>\n         <div class=\"form-group col-sm-4\">\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n          </div>\n          <div class=\"form-group col-sm-4\">\n              <input type=\"date\" class=\"form-control\" id=\"dob\">\n            </div>\n    </div>\n    <div class=\"col-sm-10 text-center\">\n        <div class=\"form-group col-sm-2\">  <br>\n            <label class=\"control-label\" for=\"dob\">Tenor</label>\n         </div>\n         <div class=\"form-group col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"dob\">\n          </div>\n   </div>\n    <div class=\"col-sm-10 text-center\">\n        <div class=\"form-group col-sm-2\">  <br>\n            <label class=\"control-label\" for=\"dob\">StartDate/EndDate</label>\n         </div>\n         <div class=\"form-group col-sm-4\">\n            <input type=\"date\" class=\"form-control\" id=\"dob\">\n          </div>\n          <div class=\"form-group col-sm-4\">\n              <input type=\"date\" class=\"form-control\" id=\"dob\">\n          </div>\n    </div>\n   </div>       \n  </div>"

/***/ }),

/***/ "./src/app/swapoptionquick/swapoptionquick.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/swapoptionquick/swapoptionquick.component.ts ***!
  \**************************************************************/
/*! exports provided: SwapoptionquickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapoptionquickComponent", function() { return SwapoptionquickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapoptionquickComponent = /** @class */ (function () {
    function SwapoptionquickComponent() {
    }
    SwapoptionquickComponent.prototype.ngOnInit = function () {
    };
    SwapoptionquickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swapoptionquick',
            template: __webpack_require__(/*! ./swapoptionquick.component.html */ "./src/app/swapoptionquick/swapoptionquick.component.html"),
            styles: [__webpack_require__(/*! ./swapoptionquick.component.css */ "./src/app/swapoptionquick/swapoptionquick.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwapoptionquickComponent);
    return SwapoptionquickComponent;
}());



/***/ }),

/***/ "./src/app/swappayment/swappayment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/swappayment/swappayment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{ border-radius:0px;size: 0px}\r\n.navbar{\r\n    margin-left:-50px;\r\n    border:none;\r\n    border-radius:0px;\r\n  }\r\n.navbar-nav li{padding-left:20px}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcHBheW1lbnQvc3dhcHBheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGlCQUFpQixDQUFDLFNBQVM7QUFDMUM7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGLGVBQWUsaUJBQWlCIiwiZmlsZSI6InNyYy9hcHAvc3dhcHBheW1lbnQvc3dhcHBheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLm5hdmJhcntcclxuICAgIG1hcmdpbi1sZWZ0Oi01MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICB9XHJcbi5uYXZiYXItbmF2IGxpe3BhZGRpbmctbGVmdDoyMHB4fVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/swappayment/swappayment.component.html":
/*!********************************************************!*\
  !*** ./src/app/swappayment/swappayment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-sm-4\">\n         <div class=\"clearfix\"></div>\n         <div class=\"form-group col-sm-5\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let pb of model.cmbPayPayBusDay\" selected>{{pb}}</option>\n              \n            </select>\n          </div>\n         <div class=\"form-group col-sm-7\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let pc of model.cntPayPayCalendars\" selected>{{pc}}</option>\n            \n          </select>\n        </div>\n       \n        <div class=\"clearfix\"></div>\n       \n        <div class=\"form-group col-sm-6\">\n           <select class=\"form-control\">\n             <option *ngFor=\"let pf of model.cmbPayPayFreqPnl\"selected>{{pf}}</option>\n            \n           </select>\n         </div>\n         <div class=\"form-group col-sm-6\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let pm of model.cmbPayPayMarching\"selected>{{pm}}</option>\n             \n            </select>\n          </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-6\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let pco of model.cmbPayPaymentConvention\"selected>{{pco}}</option>\n           \n          </select>\n        </div>\n     <div class=\"form-group col-sm-6\">\n         <select class=\"form-control\">\n           <option *ngFor=\"let pcc of model.cmbPayPaymentConversionCurrency\"selected>{{pcc}}</option>\n         </select>\n       </div>\n   <div class=\"clearfix\"></div>\n   <div class=\"form-group col-sm-6\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let pci of model.cmbPayPaymentConversionIndex\"selected>{{pci}}</option>\n       \n      </select>\n    </div>\n       <div class=\"form-group col-sm-6\">\n           <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayPaymentConversionLag}}>\n     </div>\n    \n           <div class=\"clearfix\"></div>\n          \n           <div class=\"form-group col-sm-4\">\n               <select class=\"form-control\">\n                 <option>{{model.cmbPayPayRollDay}}</option>\n                \n               </select>\n             </div>\n             <div class=\"form-group col-sm-4\">\n                 <select class=\"form-control\">\n                   <option *ngFor=\"let rw of model.cmbPayRollWeek\"selected>{{rw}}</option>\n                  \n                 </select>\n               </div>\n               <div class=\"form-group col-sm-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayLag}}>\n            </div>\n              \n  </div>\n  <div class=\"col-sm-4 text-center\">\n      <div class=\"col-sm-12\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"col-sm-12\"><br>\n          <label class=\"label-control\">PayBusDay/Calendars</label>\n      </div><br><br><br><br>\n      <div class=\"col-sm-12\">\n         <label class=\"label-control\">PayFreq/Marching</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">PaymentConvention/Currency</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">PaymentConversionIndex/Lag</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">PayRollDay/RollWek/Lag</label>\n     </div><br><br><br>\n  \n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"clearfix\"></div>\n    <div class=\"form-group col-sm-5\">\n       <select class=\"form-control\">\n         <option *ngFor=\"let pbd of model.cmbRecPayBusDay\"selected>{{pbd}}</option>\n         \n       </select>\n     </div>\n    <div class=\"form-group col-sm-7\">\n     <select class=\"form-control\">\n       <option *ngFor=\"let pc of model.cntRecPayCalendars\"selected>{{pc}}</option>\n       \n     </select>\n   </div>\n  \n   <div class=\"clearfix\"></div>\n  \n   <div class=\"form-group col-sm-6\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let pf of model.cmbRecPayFreqPnl\"selected>{{pf}}</option>\n       \n      </select>\n    </div>\n    <div class=\"form-group col-sm-6\">\n       <select class=\"form-control\">\n         <option *ngFor=\"let pm of model.cmbRecPayMarching\"selected>{{pm}}</option>\n        \n       </select>\n     </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"form-group col-sm-6\">\n     <select class=\"form-control\">\n       <option *ngFor=\"let pco of model.cmbRecPaymentConvention\"selected>{{pco}}</option>\n      \n     </select>\n   </div>\n  <div class=\"form-group col-sm-6\">\n    <select class=\"form-control\">\n      <option *ngFor=\"let pcc of model.cmbRecPaymentConversionCurrency\"selected>{{pcc}}</option>\n    </select>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"form-group col-sm-6\">\n  <select class=\"form-control\">\n   <option *ngFor=\"let pci of model.cmbRecPaymentConversionIndex\"selected>{{pci}}</option>\n  \n  </select>\n  </div>\n  <div class=\"form-group col-sm-6\">\n      <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecPaymentConversionLag}}>\n  </div>\n  \n      <div class=\"clearfix\"></div>\n     \n      <div class=\"form-group col-sm-4\">\n          <select class=\"form-control\">\n            <option>{{model.cmbRecPayRollDay}}</option>\n           \n          </select>\n        </div>\n        <div class=\"form-group col-sm-4\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let rw of model.cmbRecRollWeek\"selected>{{rw}}</option>\n             \n            </select>\n          </div>\n          <div class=\"form-group col-sm-4\">\n             <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecLag}}>\n       </div>\n         \n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/swappayment/swappayment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/swappayment/swappayment.component.ts ***!
  \******************************************************/
/*! exports provided: SwappaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwappaymentComponent", function() { return SwappaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _swappayment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swappayment.model */ "./src/app/swappayment/swappayment.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/payments.service */ "./src/app/services/payments.service.ts");





var SwappaymentComponent = /** @class */ (function () {
    function SwappaymentComponent(ngxXml2jsonService, xmlService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.xmlService = xmlService;
        this.model = model;
    }
    SwappaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xmlService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            /* Pay Part */
            _this.model.cmbPayPayBusDay = _this.obj.payment.PayBusDay.pbd;
            _this.model.cntPayPayCalendars = _this.obj.payment.PayCalendars.pc;
            _this.model.cmbPayPayFreqPnl = _this.obj.payment.PayFreq.pf;
            _this.model.cmbPayPayMarching = _this.obj.payment.PayMarching.pm;
            _this.model.cmbPayPaymentConvention = _this.obj.payment.PaymentConvention.pco;
            _this.model.cmbPayPaymentConversionCurrency = _this.obj.payment.PaymentConversionCurrency.Currency;
            _this.model.cmbPayPaymentConversionIndex = _this.obj.payment.PaymentConversionIndex.pci;
            _this.model.txtPayPaymentConversionLag = _this.obj.payment.PaymentConversionLag;
            _this.model.cmbPayPayRollDay = _this.obj.payment.PayRollDay;
            _this.model.cmbPayRollWeek = _this.obj.payment.PayRollWeek.prw;
            _this.model.txtPayLag = _this.obj.payment.PayLag;
            /*  Recive Part */
            _this.model.cmbRecPayBusDay = _this.obj.payment.PayBusDay.pbd;
            _this.model.cntRecPayCalendars = _this.obj.payment.PayCalendars.pc;
            _this.model.cmbRecPayFreqPnl = _this.obj.payment.PayFreq.pf;
            _this.model.cmbRecPayMarching = _this.obj.payment.PayMarching.pm;
            _this.model.cmbRecPaymentConvention = _this.obj.payment.PaymentConvention.pco;
            _this.model.cmbRecPaymentConversionCurrency = _this.obj.payment.PaymentConversionCurrency.Currency;
            _this.model.cmbRecPaymentConversionIndex = _this.obj.payment.PaymentConversionIndex.pci;
            _this.model.txtRecPaymentConversionLag = _this.obj.payment.PaymentConversionLag;
            _this.model.cmbRecPayRollDay = _this.obj.payment.PayRollDay;
            _this.model.cmbRecRollWeek = _this.obj.payment.PayRollWeek.prw;
            _this.model.txtRecLag = _this.obj.payment.PayLag;
            console.log(_this.obj.payment);
        }, 10);
    };
    SwappaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-swappayment',
            template: __webpack_require__(/*! ./swappayment.component.html */ "./src/app/swappayment/swappayment.component.html"),
            styles: [__webpack_require__(/*! ./swappayment.component.css */ "./src/app/swappayment/swappayment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["SwapPaymentService"],
            _swappayment_model__WEBPACK_IMPORTED_MODULE_1__["SwapPaymentModel"]])
    ], SwappaymentComponent);
    return SwappaymentComponent;
}());



/***/ }),

/***/ "./src/app/swappayment/swappayment.model.ts":
/*!**************************************************!*\
  !*** ./src/app/swappayment/swappayment.model.ts ***!
  \**************************************************/
/*! exports provided: SwapPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapPaymentModel", function() { return SwapPaymentModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapPaymentModel = /** @class */ (function () {
    function SwapPaymentModel() {
    }
    SwapPaymentModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SwapPaymentModel);
    return SwapPaymentModel;
}());



/***/ }),

/***/ "./src/app/swapreset/swapreset.component.css":
/*!***************************************************!*\
  !*** ./src/app/swapreset/swapreset.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{ border-radius:0px;size: 0px}\r\n.navbar{\r\n    margin-left:-30;\r\n    border:none;\r\n    border-radius:0px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcHJlc2V0L3N3YXByZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQztJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3dhcHJlc2V0L3N3YXByZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHsgYm9yZGVyLXJhZGl1czowcHg7c2l6ZTogMHB4fVxyXG4ubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/swapreset/swapreset.component.html":
/*!****************************************************!*\
  !*** ./src/app/swapreset/swapreset.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-sm-4\">\n         <div class=\"clearfix\"></div>\n         <div class=\"form-group col-sm-6\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let qc of model.cntPayQuoteCalender\" selected>{{qc}}</option>\n            \n          </select>\n     </div>\n    \n         <div class=\"form-group col-sm-6\">\n               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayQuoteLag}}>\n        </div>\n       \n        <div class=\"clearfix\"></div>\n       \n        <div class=\"form-group col-sm-4\">\n           <select class=\"form-control\">\n             <option *ngFor=\"let pi of cntPayIntial\" selected>{{pi}}</option>\n            \n           </select>\n         </div>\n         <div class=\"form-group col-sm-5\">\n            <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.IntialPayQuoteDate}}>\n     </div>\n     <div class=\"form-group col-sm-3\">\n      <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.IntialQuoteLag}}>\n</div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group col-sm-4\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let ra of model.cmbPayResetAveragins\" selected>{{ra}}</option>\n           \n          </select>\n        </div>\n        <div class=\"form-group col-sm-4\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let rc of model.cmbPayResetConvention\" selected>{{rc}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col-sm-4\">\n             <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayRateCutOff}}>\n      </div>\n   <div class=\"clearfix\"></div>\n   <div class=\"form-group col-sm-4\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let rbd of model.cmbPayResetBusDay\" selected>{{rbd}}</option>\n       \n      </select>\n    </div>\n    <div class=\"form-group col-sm-4\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let rbd of model.cmbPayResetFreq\" selected>{{rbd}}</option>\n        \n        </select>\n      </div>\n      <div class=\"form-group col-sm-4\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let rf of model.cmbPayResetMarching\" selected>{{rf}}</option>\n\n          </select>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"form-group col-sm-4\">\n           <select class=\"form-control\">\n             <option>{{model.cmbPayResetPayRollDay}}</option>\n          </select>\n         </div>\n         <div class=\"form-group col-sm-4\">\n             <select class=\"form-control\">\n               <option *ngFor=\"let rw of model.cmbPayResetRollWeek\" selected>{{rw}}</option>\n             \n             </select>\n           </div>\n           <div class=\"form-group col-sm-4\">\n               <select class=\"form-control\">\n                 <option>{{model.cmbPayResetType}}</option>\n                \n               </select>\n             </div>\n             <div class=\"clearfix\"></div>\n             <div class=\"col-sm-4\"></div>\n             <div class=\"form-group col-sm-8\">\n                <select class=\"form-control\">\n                  <option *ngFor=\"let mi of model.cmbPayMarketIndex\" selected>{{mi}}</option>\n                 \n                </select>\n              </div>\n              \n  </div>\n  <div class=\"col-sm-4 text-center\">\n      <div class=\"col-sm-12\"></div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"col-sm-12\"><br>\n          <label class=\"label-control\">QuoteCalendars/Lag</label>\n      </div><br><br><br><br>\n      <div class=\"col-sm-12\">\n         <label class=\"label-control\">InitialQuoteCalendars/Date/Lag</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">ResetAveraging/Convention/RateCutOff</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">ResetBusDay/Freq/Marching</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n         <label class=\"label-control\">ResetRollDay/RollWeek/Type</label>\n     </div><br><br><br>\n     <div class=\"col-sm-12\">\n        <label class=\"label-control\">Market Index</label>\n    </div><br><br><br>\n  \n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"clearfix\"></div>\n    <div class=\"form-group col-sm-6\">\n     <select class=\"form-control\">\n       <option *ngFor=\"let qc of model.cntRecQuoteCalender\">{{qc}}</option>\n       \n     </select>\n</div>\n\n    <div class=\"form-group col-sm-6\">\n          <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecQuoteLag}}>\n   </div>\n  \n   <div class=\"clearfix\"></div>\n  \n   <div class=\"form-group col-sm-4\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let pi of cntRecIntial\" selected>{{pi}}</option>\n       \n      </select>\n    </div>\n    <div class=\"form-group col-sm-5\">\n       <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.IntialRecQuoteDate}}>\n</div>\n<div class=\"form-group col-sm-3\">\n <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.IntialRecQuoteLag}}>\n</div>\n <div class=\"clearfix\"></div>\n <div class=\"form-group col-sm-4\">\n     <select class=\"form-control\">\n       <option *ngFor=\"let ra of model.cmbRecResetAveragins\" selected>{{ra}}</option>\n      \n     </select>\n   </div>\n   <div class=\"form-group col-sm-4\">\n       <select class=\"form-control\">\n         <option *ngFor=\"let rc of model.cmbRecResetConvention\" selected>{{rc}}</option>\n       </select>\n     </div>\n     <div class=\"form-group col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecRateCutOff}}>\n </div>\n<div class=\"clearfix\"></div>\n<div class=\"form-group col-sm-4\">\n <select class=\"form-control\">\n   <option *ngFor=\"let rbd of model.cmbRecResetBusDay\" selected>{{rbd}}</option>\n  \n </select>\n</div>\n<div class=\"form-group col-sm-4\">\n   <select class=\"form-control\">\n     <option *ngFor=\"let rbd of model.cmbRecResetFreq\" selected>{{rbd}}</option>\n   \n   </select>\n </div>\n <div class=\"form-group col-sm-4\">\n     <select class=\"form-control\">\n       <option *ngFor=\"let rf of model.cmbRecResetMarching\" selected>{{rf}}</option>\n\n     </select>\n   </div>\n   <div class=\"clearfix\"></div>\n   <div class=\"form-group col-sm-4\">\n      <select class=\"form-control\">\n        <option>{{model.cmbRecResetPayRollDay}}</option>\n     </select>\n    </div>\n    <div class=\"form-group col-sm-4\">\n        <select class=\"form-control\">\n          <option *ngFor=\"let rw of model.cmbRecResetRollWeek\" selected>{{rw}}</option>\n        \n        </select>\n      </div>\n      <div class=\"form-group col-sm-4\">\n          <select class=\"form-control\">\n            <option>{{model.cmbRecResetType}}</option>\n           \n          </select>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-sm-4\"></div>\n        <div class=\"form-group col-sm-8\">\n           <select class=\"form-control\">\n             <option *ngFor=\"let mi of model.cmbRecMarketIndex\" selected>{{mi}}</option>\n            \n           </select>\n         </div>\n         \n</div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/swapreset/swapreset.component.ts":
/*!**************************************************!*\
  !*** ./src/app/swapreset/swapreset.component.ts ***!
  \**************************************************/
/*! exports provided: SwapresetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapresetComponent", function() { return SwapresetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_resets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/resets.service */ "./src/app/services/resets.service.ts");
/* harmony import */ var _swapreset_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swapreset.model */ "./src/app/swapreset/swapreset.model.ts");





var SwapresetComponent = /** @class */ (function () {
    function SwapresetComponent(ngx, swapXmlServ, model) {
        this.ngx = ngx;
        this.swapXmlServ = swapXmlServ;
        this.model = model;
    }
    SwapresetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.swapXmlServ.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        //console.log(this.xml);
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngx.xmlToJson(xml);
            _this.obj = obj;
            /* Payment side model values for reset */
            _this.model.cntPayQuoteCalender = _this.obj.reset.QuoteCalendars.qc;
            ;
            _this.model.txtPayQuoteLag = _this.obj.reset.QuoteLag;
            _this.model.cntPayIntial = _this.obj.reset.InitialQuoteCalendars.iqc;
            _this.model.IntialPayQuoteDate = _this.obj.reset.InitialQuoteDate;
            _this.model.IntialQuoteLag = _this.obj.reset.InitialQuoteLag;
            _this.model.cmbPayResetAveragins = _this.obj.reset.ResetAveraging.ra;
            _this.model.cmbPayResetConvention = _this.obj.reset.ResetConvention.rc;
            _this.model.txtPayRateCutOff = _this.obj.reset.RateCutOff;
            _this.model.cmbPayResetBusDay = _this.obj.reset.ResetBusDay.rbd;
            _this.model.cmbPayResetFreq = _this.obj.reset.ResetFreq.rf;
            _this.model.cmbPayResetMarching = _this.obj.reset.ResetMarching.rm;
            _this.model.cmbPayResetPayRollDay = _this.obj.reset.ResetRollDay;
            _this.model.cmbPayResetRollWeek = _this.obj.reset.ResetRollWeek.rw;
            _this.model.cmbPayResetType = _this.obj.reset.ResetType;
            _this.model.cmbPayMarketIndex = _this.obj.reset.MarketIndex.mi;
            /* Reciver side model values for reset */
            _this.model.cntRecQuoteCalender = _this.obj.reset.QuoteCalendars.qc;
            ;
            _this.model.txtRecQuoteLag = _this.obj.reset.QuoteLag;
            _this.model.cntRecIntial = _this.obj.reset.InitialQuoteCalendars.iqc;
            _this.model.IntialRecQuoteDate = _this.obj.reset.InitialQuoteDate;
            _this.model.IntialQuoteLag = _this.obj.reset.InitialQuoteLag;
            _this.model.cmbRecResetAveragins = _this.obj.reset.ResetAveraging.ra;
            _this.model.cmbRecResetConvention = _this.obj.reset.ResetConvention.rc;
            _this.model.txtRecRateCutOff = _this.obj.reset.RateCutOff;
            _this.model.cmbRecResetBusDay = _this.obj.reset.ResetBusDay.rbd;
            _this.model.cmbRecResetFreq = _this.obj.reset.ResetFreq.rf;
            _this.model.cmbRecResetMarching = _this.obj.reset.ResetMarching.rm;
            _this.model.cmbRecResetPayRollDay = _this.obj.reset.ResetRollDay;
            _this.model.cmbRecResetRollWeek = _this.obj.reset.ResetRollWeek.rw;
            _this.model.cmbRecResetType = _this.obj.reset.ResetType;
            _this.model.cmbRecMarketIndex = _this.obj.reset.MarketIndex.mi;
            console.log(_this.model);
        }, 10);
    };
    SwapresetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swapreset',
            template: __webpack_require__(/*! ./swapreset.component.html */ "./src/app/swapreset/swapreset.component.html"),
            styles: [__webpack_require__(/*! ./swapreset.component.css */ "./src/app/swapreset/swapreset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"], _services_resets_service__WEBPACK_IMPORTED_MODULE_3__["ResetsService"], _swapreset_model__WEBPACK_IMPORTED_MODULE_4__["SwapResetModel"]])
    ], SwapresetComponent);
    return SwapresetComponent;
}());



/***/ }),

/***/ "./src/app/swapreset/swapreset.model.ts":
/*!**********************************************!*\
  !*** ./src/app/swapreset/swapreset.model.ts ***!
  \**********************************************/
/*! exports provided: SwapResetModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapResetModel", function() { return SwapResetModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapResetModel = /** @class */ (function () {
    function SwapResetModel() {
    }
    SwapResetModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SwapResetModel);
    return SwapResetModel;
}());



/***/ }),

/***/ "./src/app/swapticket/swapticket.component.css":
/*!*****************************************************!*\
  !*** ./src/app/swapticket/swapticket.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhcHRpY2tldC9zd2FwdGlja2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQyxTQUFTLGVBQWUsQ0FBQyxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9zd2FwdGlja2V0L3N3YXB0aWNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjEwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/swapticket/swapticket.component.html":
/*!******************************************************!*\
  !*** ./src/app/swapticket/swapticket.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-2\">\n    <div class=\"left-nav sidebar\">\n      <ul>\n        <li>\n            <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n        </li>\n        <li>\n            <a routerLink=\"/swapticket\" routerLinkActive=\"active\">Swap Ticket</a>\n        </li>\n        <li>\n            <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n        </li>\n       \n      </ul>\n    </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n              <div class=\"navbar-header\">\n               </div>\n              <ul class=\"nav navbar-nav\">\n               \n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a  tabindex=\"-1\">New</a></li>\n                       <li class=\"dropdown-submenu\"><a class=\"dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" href=\"#\">Save As<span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-submenu\">\n                        <li><a tabindex=\"-1\" href=\"#\">New Trade </a></li>\n                        <li><a tabindex=\"-1\" href=\"#\">Template Trade</a></li>\n                      </ul>\n                    </li>\n                   <li><a href=\"#\">Save</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                    <li><a href=\"#\">Reload</a></li>\n                    <li><a href=\"#\">Approve</a></li>\n                    <li><a href=\"#\">Exit</a></li>\n                  </ul>\n                </li>\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Event <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Bond Future</a></li>\n                    <li><a href=\"#\">Bond Future Option</a></li>\n                    <li><a href=\"#\">MM Future</a></li>\n                    <li><a href=\"#\">MM Future Option</a></li>\n                  </ul>\n                </li>\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">IRD Blotter</a></li>\n                    <li><a href=\"#\">CRD Blotter</a></li>\n                    <li><a href=\"#\">FX Blotter</a></li>\n                    <li><a href=\"#\">EQ Blotter</a></li>\n                    <li><a href=\"#\">CASH Blotter</a></li>\n                  </ul>\n                </li>\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Page 1-1</a></li>\n                    <li><a href=\"#\">Page 1-2</a></li>\n                    <li><a href=\"#\">Page 1-3</a></li>\n                  </ul>\n                </li>\n              \n             \n                <li class=\"content\">\n                  Market\n              </li>\n            <li>\n                <select class=\"form-control\">\n                    <option>Live</option>\n                    <option>EndOfDay</option>\n                    <option>Historic</option>\n                  </select>\n             \n            </li>\n            <li class=\"content\">\n                 Close Date\n            </li>\n            <li>\n                <input type=\"date\" class=\"form-control\">\n            </li>\n            \n            \n              </ul>\n              </div>\n              </nav>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"text-center\">\n                <button>PAY</button>\n              </div>\n                <div class=\"form-group col-sm-8\">\n                    <select class=\"form-control\">\n                      <option>1 of 1</option>\n                      <option>1 of 2</option>\n                      \n                    </select>\n                  </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"form-group col-sm-5\">\n                      <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value=1>\n               </div>\n               <div class=\"form-group col-sm-7\">\n                  <select class=\"form-control\">\n                    <option>Fixed</option>\n                    <option>Float</option>\n                  \n                  </select>\n                </div>\n               <div class=\"clearfix\"></div>\n              \n               <div  class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                  <option *ngFor=\"let cur of model.cmbPayCurrency\"selected>{{cur}}</option> </select>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayTenor}}>\n             </div>\n             <div class=\"clearfix\"></div>\n             <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayNotional}}>\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <select class=\"form-control\">\n                  <option *ngFor=\"let ne of model.cmbPayNotionalExchange\"selected>{{ne}}</option></select>\n              </div>\n          <div class=\"clearfix\"></div>\n              <div class=\"form-group col-sm-6\">\n                  <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayStartDate}}>\n            </div>\n            <div class=\"form-group col-sm-6\" >\n                <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayStartStub}}>\n              </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"col-sm-12\"></div>\n                  <div class=\"form-group col-sm-6\">\n                      <select class=\"form-control\">\n                        <option *ngFor=\"let sr of model.cmbPayStartDateRollFlag\"selected>{{sr}}</option></select>\n                    </div>\n                    <div class=\"form-group col-sm-6\">\n                        <select class=\"form-control\">\n                          <option *ngFor=\"let er of model.cmbPayEndDateRollFlag\"selected>{{er}}</option></select>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"form-group col-sm-6\">\n                          <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayEndDate}}>\n                    </div>\n                    <div class=\"form-group col-sm-6\" >\n                        <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayEndStub}}>\n                      </div>\n                      <div class=\"clearfix\"></div>\n             <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayFrontstub}}>\n            </div> \n            <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayBackStub}}>\n            </div> \n            <div class=\"clearfix\"></div>\n            <hr>\n            <div class=\"form-group col-sm-4\">\n               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayFixedQuote}}>\n           </div> \n           <div class=\"form-group col-sm-3\">\n               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPayGearFactor}}>\n           </div> \n           <div class=\"form-group col-sm-5\">\n              <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtPaySpread}}>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"col-sm-6\"></div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option *ngFor=\"let dc of model.cmbPayDayCount\"selected>{{dc}}</option></select>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-sm-6\"></div>\n            <div class=\"form-group col-sm-6\">\n                <select class=\"form-control\">\n                  <option *ngFor=\"let dcu of model.cmbPayDiscountCurve\"selected>{{dcu}}</option> </select>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let abd of model.cmbPayAccrualBusDay\"selected>{{abd}}</option> </select>\n                </div>\n                <div class=\"form-group col-sm-6\" >\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let ac of model.cntPayAccrualCalendars\"selected>{{ac}}</option> </select>\n                  </div> \n                  <div class=\"clearfix\"></div>\n                  \n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let af of model.cmbPayAccrualFreq\"selected>{{af}}</option>\n                   \n                  </select>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <select class=\"form-control\">\n                      <option *ngFor=\"let am of model.cmbPayAccrualMarching\"selected>{{am}}</option>\n                      \n                    </select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"form-group col-sm-3\">\n                      <select class=\"form-control\">\n                        <option>{{model.cmbPayAccrualRollDay}}</option>\n                       \n                      </select>\n                    </div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let arw of model.cmbPayAccrualRollWeek\"selected>{{arw}}</option>\n                    \n                  </select>\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <select class=\"form-control\">\n                      <option>{{model.cmbPayEndOfMonthIndicator}}</option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n    \n                  <div class=\"form-group col-sm-6\">\n                      <select class=\"form-control\">\n                        <option *ngFor=\"let c of model.cmbPayCompounding\"selected>{{c}}</option>\n                       \n                      </select>\n                    </div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option>{{model.cmbPayCompFreq}}</option>\n                    <option></option>\n                    <option></option>\n                    <option></option>\n                  </select>\n                </div>\n\n          </div>\n          <div class=\"col-sm-4 text-center\">\n              <div class=\"col-sm-12\"></div>\n              <div class=\"col-sm-12\"></div><br><br><br><br><br><br><br><br>\n              <div class=\"col-sm-12\">\n                  <label class=\"label-control\">Currency/Tenor</label>\n              </div><br><br><br>\n              <div class=\"col-sm-12\">\n                 <label class=\"label-control\">Notional/NotionalExchange</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">StartDate/EndDate</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">StartRoll/EndRoll</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">EndDate/EndStub</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">StartStubM.Rate/EndStubM.Rate</label>\n             </div><br><br><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">FixedQuote/GearFactor/Spread</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">DayCount</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">DiscountCurve</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">AccuralBUsDay/Calendars</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">AccuralFreq/Marching</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">AccuralRollDay/RollWeek/EOM</label>\n             </div><br><br><br>\n             <div class=\"col-sm-12\">\n                 <label class=\"label-control\">CompoundingConv/CompFreq</label>\n             </div><br><br><br>\n           </div>\n           <div class=\"col-sm-4\">\n            <div class=\"text-center\">\n            <button>RECEIVE</button>\n          </div>\n            <div class=\"form-group col-sm-8\">\n                <select class=\"form-control\">\n                  <option>1 of 1</option>\n                  <option>1 of 2</option>\n                \n                </select>\n              </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group col-sm-5\">\n                  <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value=1>\n           </div>\n           <div class=\"form-group col-sm-7\">\n              <select class=\"form-control\">\n                <option>Fixed</option>\n                <option>Float</option>\n              \n              </select>\n            </div>\n           <div class=\"clearfix\"></div>\n          \n           <div  class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n              <option *ngFor=\"let cur of model.cmbRecCurrency\"selected>{{cur}}</option> </select>\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecTenor}}>\n         </div>\n         <div class=\"clearfix\"></div>\n         <div class=\"form-group col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecNotional}}>\n        </div>\n        <div class=\"form-group col-sm-6\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let ne of model.cmbRecNotionalExchange\"selected>{{ne}}</option></select>\n          </div>\n      <div class=\"clearfix\"></div>\n          <div class=\"form-group col-sm-6\">\n              <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecStartDate}}>\n        </div>\n        <div class=\"form-group col-sm-6\" >\n            <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecStartStub}}>\n          </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-12\"></div>\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let sr of model.cmbRecStartDateRollFlag\"selected>{{sr}}</option></select>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <select class=\"form-control\">\n                      <option *ngFor=\"let er of model.cmbRecEndDateRollFlag\"selected>{{er}}</option></select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"form-group col-sm-6\">\n                      <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecEndDate}}>\n                </div>\n                <div class=\"form-group col-sm-6\" >\n                    <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecEndStub}}>\n                  </div>\n                  <div class=\"clearfix\"></div>\n         <div class=\"form-group col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecFrontStub}}>\n        </div> \n        <div class=\"form-group col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.legsPnl}}>\n        </div> \n        <div class=\"clearfix\"></div>\n        <hr>\n        <div class=\"form-group col-sm-4\">\n           <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecFixedQuote}}>\n       </div> \n       <div class=\"form-group col-sm-3\">\n           <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecGearFactor}}>\n       </div> \n       <div class=\"form-group col-sm-5\">\n          <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\" value={{model.txtRecSpread}}>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-sm-6\"></div>\n      <div class=\"form-group col-sm-6\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let dc of model.cmbRecDayCount\"selected>{{dc}}</option></select>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-sm-6\"></div>\n        <div class=\"form-group col-sm-6\">\n            <select class=\"form-control\">\n              <option *ngFor=\"let dcu of model.cmbRecDiscountCurve\"selected>{{dcu}}</option> </select>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option *ngFor=\"let abd of model.cmbRecAccrualBusDay\"selected>{{abd}}</option> </select>\n            </div>\n            <div class=\"form-group col-sm-6\" >\n              <select class=\"form-control\">\n                <option *ngFor=\"let ac of model.cntRecAccrualCalendars\"selected>{{ac}}</option> </select>\n              </div> \n              <div class=\"clearfix\"></div>\n              \n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option *ngFor=\"let af of model.cmbRecAccrualFreq\"selected>{{af}}</option>\n               \n              </select>\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <select class=\"form-control\">\n                  <option *ngFor=\"let am of model.cmbRecAccrualMarching\"selected>{{am}}</option>\n                  \n                </select>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"form-group col-sm-3\">\n                  <select class=\"form-control\">\n                    <option>{{model.cmbRecAccrualRollDay}}</option>\n                   \n                  </select>\n                </div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option *ngFor=\"let arw of model.cmbRecAccrualRollWeek\"selected>{{arw}}</option>\n                \n              </select>\n            </div>\n            <div class=\"form-group col-sm-3\">\n                <select class=\"form-control\">\n                  <option>{{model.cmbRecEndOfMonthIndicator}}</option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n              </div>\n              <div class=\"clearfix\"></div>\n\n              <div class=\"form-group col-sm-6\">\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let c of model.cmbRecCompounding\"selected>{{c}}</option>\n                   \n                  </select>\n                </div>\n          <div class=\"form-group col-sm-6\">\n              <select class=\"form-control\">\n                <option>{{model.cmbRecCompFreq}}</option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n            </div>\n\n      </div>\n    </div>\n       \n        <div>\n          <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\" >\n                <div>\n                  <nav class=\"navbar navbar-inverse\">\n                      <div class=\"container-fluid\">\n                        <div class=\"navbar-header\">\n                         </div>\n                        <ul class=\"nav navbar-nav\">\n                                <li ><a  [routerLink]=\"['./payment']\" routerLinkActive=\"active\">Payment </a>\n                                 \n                                  <li ><a [routerLink]=\"['./reset']\" routerLinkActive=\"active\">Reset </a>\n                                    <li><a  [routerLink]=\"['./amortisation']\" routerLinkActive=\"active\">Amortisation </a>\n                                </ul>\n                      </div>\n                      </nav>\n             </div>\n         <div>\n              <router-outlet></router-outlet>   \n         </div>              \n      <div class=\"clearfix\"></div>\n    \n      <div class=\"col-sm-12 text-right\">\n        <router-outlet name=\"sechdule\"></router-outlet>\n      </div>\n  </div>\n  </div>\n     \n         \n         \n      "

/***/ }),

/***/ "./src/app/swapticket/swapticket.component.ts":
/*!****************************************************!*\
  !*** ./src/app/swapticket/swapticket.component.ts ***!
  \****************************************************/
/*! exports provided: SwapticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapticketComponent", function() { return SwapticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _swapticket_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapticket.model */ "./src/app/swapticket/swapticket.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _services_swapticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/swapticket.service */ "./src/app/services/swapticket.service.ts");





var SwapticketComponent = /** @class */ (function () {
    function SwapticketComponent(ngxXml2jsonService, xmlService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.xmlService = xmlService;
        this.model = model;
    }
    SwapticketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xmlService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbPayCurrency = [_this.obj.swapticket.Currency.Currency1,
                _this.obj.swapticket.Currency.Currency2,
                _this.obj.swapticket.Currency.Currency3,
                _this.obj.swapticket.Currency.Currency4,
                _this.obj.swapticket.Currency.Currency5,
                _this.obj.swapticket.Currency.Currency6,
                _this.obj.swapticket.Currency.Currency7,
                _this.obj.swapticket.Currency.Currency8,
                _this.obj.swapticket.Currency.Currency9,
                _this.obj.swapticket.Currency.Currency10,
                _this.obj.swapticket.Currency.Currency11,
                _this.obj.swapticket.Currency.Currency12,
                _this.obj.swapticket.Currency.Currency13,
                _this.obj.swapticket.Currency.Currency14,
                _this.obj.swapticket.Currency.Currency15,
            ];
            _this.model.txtPayTenor = _this.obj.swapticket.Tenor;
            _this.model.cmbRecCurrency = [_this.obj.swapticket.Currency.Currency1,
                _this.obj.swapticket.Currency.Currency2,
                _this.obj.swapticket.Currency.Currency3,
                _this.obj.swapticket.Currency.Currency4,
                _this.obj.swapticket.Currency.Currency5,
                _this.obj.swapticket.Currency.Currency6,
                _this.obj.swapticket.Currency.Currency7,
                _this.obj.swapticket.Currency.Currency8,
                _this.obj.swapticket.Currency.Currency9,
                _this.obj.swapticket.Currency.Currency10,
                _this.obj.swapticket.Currency.Currency11,
                _this.obj.swapticket.Currency.Currency12,
                _this.obj.swapticket.Currency.Currency13,
                _this.obj.swapticket.Currency.Currency14,
                _this.obj.swapticket.Currency.Currency15,
            ];
            _this.model.txtRecTenor = _this.obj.swapticket.Tenor;
            _this.model.txtPayNotional = _this.obj.swapticket.Notional;
            _this.model.cmbPayNotionalExchange = [_this.obj.swapticket.NotionalExchange.NE1,
                _this.obj.swapticket.NotionalExchange.NE2,
                _this.obj.swapticket.NotionalExchange.NE3,
                _this.obj.swapticket.NotionalExchange.NE4,
                _this.obj.swapticket.NotionalExchange.NE5,
                _this.obj.swapticket.NotionalExchange.NE6,
                _this.obj.swapticket.NotionalExchange.NE7,
                _this.obj.swapticket.NotionalExchange.NE8,];
            _this.model.txtRecNotional = _this.obj.swapticket.Notional;
            _this.model.cmbRecNotionalExchange = [_this.obj.swapticket.NotionalExchange.NE1,
                _this.obj.swapticket.NotionalExchange.NE2,
                _this.obj.swapticket.NotionalExchange.NE3,
                _this.obj.swapticket.NotionalExchange.NE4,
                _this.obj.swapticket.NotionalExchange.NE5,
                _this.obj.swapticket.NotionalExchange.NE6,
                _this.obj.swapticket.NotionalExchange.NE7,
                _this.obj.swapticket.NotionalExchange.NE8,];
            _this.model.txtPayStartDate = _this.obj.swapticket.StartDate;
            _this.model.txtPayStartStub = _this.obj.swapticket.StartStub;
            _this.model.txtRecStartDate = _this.obj.swapticket.StartDate;
            _this.model.txtRecStartStub = _this.obj.swapticket.StartStub;
            _this.model.cmbPayStartDateRollFlag = [_this.obj.swapticket.StartRoll.sr1, _this.obj.swapticket.StartRoll.sr2];
            _this.model.cmbPayEndDateRollFlag = [_this.obj.swapticket.EndRoll.er1, _this.obj.swapticket.EndRoll.er2];
            _this.model.cmbRecStartDateRollFlag = [_this.obj.swapticket.StartRoll.sr1, _this.obj.swapticket.StartRoll.sr2];
            _this.model.cmbRecEndDateRollFlag = [_this.obj.swapticket.EndRoll.er1, _this.obj.swapticket.EndRoll.er2];
            _this.model.txtPayEndDate = _this.obj.swapticket.EndDate;
            _this.model.txtPayEndStub = _this.obj.swapticket.EndStub;
            _this.model.txtRecEndDate = _this.obj.swapticket.EndDate;
            _this.model.txtRecEndStub = _this.obj.swapticket.EndStub;
            _this.model.txtPayFrontstub = _this.obj.swapticket.StartStubMRate;
            _this.model.txtPayBackStub = _this.obj.swapticket.EndStubMRate;
            _this.model.txtRecFrontStub = _this.obj.swapticket.StartStubMRate;
            _this.model.legsPnl = _this.obj.swapticket.EndStubMRate;
            _this.model.txtPayFixedQuote = _this.obj.swapticket.FixedQuote;
            _this.model.txtPayGearFactor = _this.obj.swapticket.GearFactor;
            _this.model.txtPaySpread = _this.obj.swapticket.GearFactor;
            _this.model.txtRecFixedQuote = _this.obj.swapticket.FixedQuote;
            _this.model.txtRecGearFactor = _this.obj.swapticket.GearFactor;
            _this.model.txtRecSpread = _this.obj.swapticket.GearFactor;
            _this.model.cmbPayDayCount = [_this.obj.swapticket.DayCount.dc1,
                _this.obj.swapticket.DayCount.dc2,
                _this.obj.swapticket.DayCount.dc3,
                _this.obj.swapticket.DayCount.dc4,
                _this.obj.swapticket.DayCount.dc5,
                _this.obj.swapticket.DayCount.dc6,
                _this.obj.swapticket.DayCount.dc7,
                _this.obj.swapticket.DayCount.dc8,
                _this.obj.swapticket.DayCount.dc9,
                _this.obj.swapticket.DayCount.dc10,
                _this.obj.swapticket.DayCount.dc11,
                _this.obj.swapticket.DayCount.dc12,
                _this.obj.swapticket.DayCount.dc13,
                _this.obj.swapticket.DayCount.dc14];
            _this.model.cmbRecDayCount = [_this.obj.swapticket.DayCount.dc1,
                _this.obj.swapticket.DayCount.dc2,
                _this.obj.swapticket.DayCount.dc3,
                _this.obj.swapticket.DayCount.dc4,
                _this.obj.swapticket.DayCount.dc5,
                _this.obj.swapticket.DayCount.dc6,
                _this.obj.swapticket.DayCount.dc7,
                _this.obj.swapticket.DayCount.dc8,
                _this.obj.swapticket.DayCount.dc9,
                _this.obj.swapticket.DayCount.dc10,
                _this.obj.swapticket.DayCount.dc11,
                _this.obj.swapticket.DayCount.dc12,
                _this.obj.swapticket.DayCount.dc13,
                _this.obj.swapticket.DayCount.dc14];
            _this.model.cmbPayDiscountCurve = [_this.obj.swapticket.DiscountCurve.dcu1,
                _this.obj.swapticket.DiscountCurve.dcu2,
                _this.obj.swapticket.DiscountCurve.dcu3,
                _this.obj.swapticket.DiscountCurve.dcu4,
                _this.obj.swapticket.DiscountCurve.dcu5,
                _this.obj.swapticket.DiscountCurve.dcu6,
                _this.obj.swapticket.DiscountCurve.dcu7,
                _this.obj.swapticket.DiscountCurve.dcu8,
                _this.obj.swapticket.DiscountCurve.dcu9,
                _this.obj.swapticket.DiscountCurve.dcu10];
            _this.model.cmbRecDiscountCurve = [_this.obj.swapticket.DiscountCurve.dcu1,
                _this.obj.swapticket.DiscountCurve.dcu2,
                _this.obj.swapticket.DiscountCurve.dcu3,
                _this.obj.swapticket.DiscountCurve.dcu4,
                _this.obj.swapticket.DiscountCurve.dcu5,
                _this.obj.swapticket.DiscountCurve.dcu6,
                _this.obj.swapticket.DiscountCurve.dcu7,
                _this.obj.swapticket.DiscountCurve.dcu8,
                _this.obj.swapticket.DiscountCurve.dcu9,
                _this.obj.swapticket.DiscountCurve.dcu10];
            _this.model.cmbPayAccrualBusDay = [_this.obj.swapticket.AccrualBusDay.abd1,
                _this.obj.swapticket.AccrualBusDay.abd2,
                _this.obj.swapticket.AccrualBusDay.abd3,
                _this.obj.swapticket.AccrualBusDay.abd4];
            _this.model.cntPayAccrualCalendars = [_this.obj.swapticket.AccrualCalendars.ac1,
                _this.obj.swapticket.AccrualCalendars.ac2,
                _this.obj.swapticket.AccrualCalendars.ac3,
                _this.obj.swapticket.AccrualCalendars.ac4,
                _this.obj.swapticket.AccrualCalendars.ac5,
                _this.obj.swapticket.AccrualCalendars.ac6,
                _this.obj.swapticket.AccrualCalendars.ac7,
                _this.obj.swapticket.AccrualCalendars.ac8,
                _this.obj.swapticket.AccrualCalendars.ac9,
                _this.obj.swapticket.AccrualCalendars.ac10];
            _this.model.cmbRecAccrualBusDay = [_this.obj.swapticket.AccrualBusDay.abd1,
                _this.obj.swapticket.AccrualBusDay.abd2,
                _this.obj.swapticket.AccrualBusDay.abd3,
                _this.obj.swapticket.AccrualBusDay.abd4];
            _this.model.cntRecAccrualCalendars = [_this.obj.swapticket.AccrualCalendars.ac1,
                _this.obj.swapticket.AccrualCalendars.ac2,
                _this.obj.swapticket.AccrualCalendars.ac3,
                _this.obj.swapticket.AccrualCalendars.ac4,
                _this.obj.swapticket.AccrualCalendars.ac5,
                _this.obj.swapticket.AccrualCalendars.ac6,
                _this.obj.swapticket.AccrualCalendars.ac7,
                _this.obj.swapticket.AccrualCalendars.ac8,
                _this.obj.swapticket.AccrualCalendars.ac9,
                _this.obj.swapticket.AccrualCalendars.ac10];
            _this.model.cmbPayAccrualFreq = [_this.obj.swapticket.AccrualFreq.af1,
                _this.obj.swapticket.AccrualFreq.af2,
                _this.obj.swapticket.AccrualFreq.af3,
                _this.obj.swapticket.AccrualFreq.af4,
                _this.obj.swapticket.AccrualFreq.af5,
                _this.obj.swapticket.AccrualFreq.af6,
                _this.obj.swapticket.AccrualFreq.af7,
                _this.obj.swapticket.AccrualFreq.af8,
                _this.obj.swapticket.AccrualFreq.af9,
                _this.obj.swapticket.AccrualFreq.af10];
            _this.model.cmbPayAccrualMarching = [_this.obj.swapticket.AccrualMarching.am1,
                _this.obj.swapticket.AccrualMarching.am2,
                _this.obj.swapticket.AccrualMarching.am3,
                _this.obj.swapticket.AccrualMarching.am4,
                _this.obj.swapticket.AccrualMarching.am5,
                _this.obj.swapticket.AccrualMarching.am6,
                _this.obj.swapticket.AccrualMarching.am7];
            _this.model.cmbRecAccrualFreq = [_this.obj.swapticket.AccrualFreq.af1,
                _this.obj.swapticket.AccrualFreq.af2,
                _this.obj.swapticket.AccrualFreq.af3,
                _this.obj.swapticket.AccrualFreq.af4,
                _this.obj.swapticket.AccrualFreq.af5,
                _this.obj.swapticket.AccrualFreq.af6,
                _this.obj.swapticket.AccrualFreq.af7,
                _this.obj.swapticket.AccrualFreq.af8,
                _this.obj.swapticket.AccrualFreq.af9,
                _this.obj.swapticket.AccrualFreq.af10];
            _this.model.cmbRecAccrualMarching = [_this.obj.swapticket.AccrualMarching.am1,
                _this.obj.swapticket.AccrualMarching.am2,
                _this.obj.swapticket.AccrualMarching.am3,
                _this.obj.swapticket.AccrualMarching.am4,
                _this.obj.swapticket.AccrualMarching.am5,
                _this.obj.swapticket.AccrualMarching.am6,
                _this.obj.swapticket.AccrualMarching.am7];
            _this.model.cmbPayAccrualRollDay = _this.obj.swapticket.AccrualRollDay;
            _this.model.cmbPayAccrualRollWeek = [_this.obj.swapticket.AccrualRollWeek.arw1,
                _this.obj.swapticket.AccrualRollWeek.arw2,
                _this.obj.swapticket.AccrualRollWeek.arw3,
                _this.obj.swapticket.AccrualRollWeek.arw4,
                _this.obj.swapticket.AccrualRollWeek.arw5,
                _this.obj.swapticket.AccrualRollWeek.arw6,
                _this.obj.swapticket.AccrualRollWeek.arw7,
                _this.obj.swapticket.AccrualRollWeek.arw8];
            _this.model.cmbPayEndOfMonthIndicator = _this.obj.swapticket.AmortRollMonth;
            _this.model.cmbRecAccrualRollDay = _this.obj.swapticket.AccrualRollDay;
            _this.model.cmbRecAccrualRollWeek = [_this.obj.swapticket.AccrualRollWeek.arw1,
                _this.obj.swapticket.AccrualRollWeek.arw2,
                _this.obj.swapticket.AccrualRollWeek.arw3,
                _this.obj.swapticket.AccrualRollWeek.arw4,
                _this.obj.swapticket.AccrualRollWeek.arw5,
                _this.obj.swapticket.AccrualRollWeek.arw6,
                _this.obj.swapticket.AccrualRollWeek.arw7,
                _this.obj.swapticket.AccrualRollWeek.arw8];
            _this.model.cmbRecEndOfMonthIndicator = _this.obj.swapticket.AmortRollMonth;
            _this.model.cmbPayCompounding = [_this.obj.swapticket.Compounding.c1,
                _this.obj.swapticket.Compounding.c2,
                _this.obj.swapticket.Compounding.c3,
                _this.obj.swapticket.Compounding.c4,
                _this.obj.swapticket.Compounding.c5];
            _this.model.cmbPayCompFreq = _this.obj.swapticket.CompFreq;
            _this.model.cmbRecCompounding = [_this.obj.swapticket.Compounding.c1,
                _this.obj.swapticket.Compounding.c2,
                _this.obj.swapticket.Compounding.c3,
                _this.obj.swapticket.Compounding.c4,
                _this.obj.swapticket.Compounding.c5];
            _this.model.cmbRecCompFreq = _this.obj.swapticket.CompFreq;
        }, 10);
    };
    SwapticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-swapticket',
            template: __webpack_require__(/*! ./swapticket.component.html */ "./src/app/swapticket/swapticket.component.html"),
            styles: [__webpack_require__(/*! ./swapticket.component.css */ "./src/app/swapticket/swapticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _services_swapticket_service__WEBPACK_IMPORTED_MODULE_4__["SwapTicketService"],
            _swapticket_model__WEBPACK_IMPORTED_MODULE_1__["SwapTicketModel"]])
    ], SwapticketComponent);
    return SwapticketComponent;
}());



/***/ }),

/***/ "./src/app/swapticket/swapticket.model.ts":
/*!************************************************!*\
  !*** ./src/app/swapticket/swapticket.model.ts ***!
  \************************************************/
/*! exports provided: SwapTicketModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapTicketModel", function() { return SwapTicketModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwapTicketModel = /** @class */ (function () {
    function SwapTicketModel() {
    }
    SwapTicketModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SwapTicketModel);
    return SwapTicketModel;
}());



/***/ }),

/***/ "./src/app/tradebasic/tradebasic.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tradebasic/tradebasic.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.navbar-nav li{padding-left:10px}\r\n.form-control{ border-radius:0px;size: 0px}\r\n.content{margin-top:10px;margin-left: 20px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGViYXNpYy90cmFkZWJhc2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsaUJBQWlCLENBQUMsU0FBUztBQUMxQyxTQUFTLGVBQWUsQ0FBQyxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC90cmFkZWJhc2ljL3RyYWRlYmFzaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgbGl7cGFkZGluZy1sZWZ0OjEwcHh9XHJcbi5mb3JtLWNvbnRyb2x7IGJvcmRlci1yYWRpdXM6MHB4O3NpemU6IDBweH1cclxuLmNvbnRlbnR7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OiAyMHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/tradebasic/tradebasic.component.html":
/*!******************************************************!*\
  !*** ./src/app/tradebasic/tradebasic.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-2\">\n    <div class=\"left-nav sidebar\">\n      <ul>\n        <li>\n            <a routerLink=\"/tradebasic\" routerLinkActive=\"active\">Trade Basic</a>\n        </li>\n        <li>\n            <a routerLink=\"/swapoption\" routerLinkActive=\"active\">Swap Option</a>\n        </li>\n        <li>\n            <a routerLink=\"/quickticket\" routerLinkActive=\"active\">Quick Ticket</a>\n        </li>\n     </ul>\n     <hr>\n      <ul>\n        <li>\n            <a routerLink=\"/additionalfields\" routerLinkActive=\"active\">Additional Fields</a>\n        </li>\n        <li>\n            <a routerLink=\"/fees\" routerLinkActive=\"active\">Fees</a>\n        </li>\n        <li>\n            <a routerLink=\"/salescredit\" routerLinkActive=\"active\">Sales Credit</a>\n        </li>\n        <li>\n          <a routerLink=\"/margin\" routerLinkActive=\"active\">Margin</a>\n      </li>\n      <li>\n          <a routerLink=\"/assignment\" routerLinkActive=\"active\">Assignment</a>\n      </li>\n      <li>\n          <a [routerLink]=\"['./partialassignment']\" routerLinkActive=\"active\">Partial Assignment</a>\n      </li>\n     </ul>\n\n    </div>\n  </div>\n  <div class=\"col-sm-10\">\n    <div>\n      <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">New</a></li>\n          <li><a href=\"#\">Save As</a></li>\n          <li><a href=\"#\">Save</a></li>\n          <li><a href=\"#\">Delte</a></li>\n          <li><a href=\"#\">Reload</a></li>\n          <li><a href=\"#\">Approve</a></li>\n          <li><a href=\"#\">Exit</a></li>\n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Business Events <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Bought Back</a></li>\n          <li><a href=\"#\">Partial Bought Back</a></li>\n          <li><a href=\"#\">MO Maintenance</a></li>\n          <li><a href=\"#\">Migration</a></li>\n          <li><a href=\"#\">Assignment</a></li>\n          <li><a href=\"#\">Partial Assignment</a></li>\n          <li><a href=\"#\">Allocation</a></li>\n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Push To MO</a></li>\n          <li><a href=\"#\">Push To FO</a></li>\n          <li><a href=\"#\">Push To BU</a></li>\n          <li><a href=\"#\">Withdraw</a></li>\n          <li><a href=\"#\">Email</a></li>\n         \n          </ul>\n          </li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Calculate PV F2</a></li>\n          <li  class=\"dropdown\">\n            <a href=\"#\"  class=\"dropdown-toggle dropright\" data-toggle=\"dropdown\" > Calculate Risk  <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                    <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>  \n                    <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                </ul>  \n          </li>\n           \n          <li><a href=\"#\">Calculate PAA F10</a></li>\n          <li><a href=\"#\">Calculate Report F3</a></li>\n          \n          </ul>\n          </li>\n         \n          <li class=\"content\">\n            Market\n        </li>\n      <li>\n          <select class=\"form-control\">\n              <option>Live</option>\n              <option>EndOfDay</option>\n              <option>Historic</option>\n            </select>\n       \n      </li>\n      <li class=\"content\">\n           Close Date\n      </li>\n      <li>\n          <input type=\"date\" class=\"form-control\">\n      </li>\n          \n          </ul>\n          </div>\n      </nav>\n    </div>\n    <br>\n    <div class=\"clearfix\"></div>\n    <div class=\"form-group col-sm-6\">\n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Version</label>\n               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n          </div>\n          <div class=\"clearfix\"></div>\n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Product Class</label>\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"form-group col-sm-12\">\n              <label class=\"control-label\" id=\"fname\">Tenor</label>\n                 <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"control-label\" id=\"fname\">Effective Date</label>\n                   <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n              </div>\n              <div class=\"form-group col-sm-12\">\n                  <label class=\"control-label\" id=\"fname\">Trader</label>\n                  <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label\" id=\"fname\">Firm Account</label>\n                    <select class=\"form-control\">\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                      </select>\n                  </div>\n                  <div class=\"form-group col-sm-12\">\n                      <label class=\"control-label\" id=\"fname\">Customer Account</label>\n                      <select class=\"form-control\">\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-sm-12\">\n                        <label class=\"control-label\" id=\"fname\">Broker Account</label>\n                        <select class=\"form-control\">\n                            <option></option>\n                            <option></option>\n                            <option></option>\n                            <option></option>\n                          </select>\n                      </div>\n                      <div class=\"form-group col-sm-12\">\n                          <label class=\"control-label\" id=\"fname\">Legal Entity</label>\n                          <select class=\"form-control\">\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-sm-12\">\n                            <label class=\"control-label\" id=\"fname\">External System</label>\n                            <select class=\"form-control\">\n                                <option></option>\n                                <option></option>\n                                <option></option>\n                                <option></option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-sm-12\">\n                              <label class=\"control-label\" id=\"fname\">External Ref</label>\n                              <select class=\"form-control\">\n                                  <option></option>\n                                  <option></option>\n                                  <option></option>\n                                  <option></option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-sm-12\">\n                                <label class=\"control-label\" id=\"fname\">Sub Type</label>\n                                <select class=\"form-control\">\n                                    <option></option>\n                                    <option></option>\n                                    <option></option>\n                                    <option></option>\n                                  </select>\n                           </div>\n                           <div class=\"clearfix\"></div>\n            </div>\n           \n         <!--  <hr style=\"width: 1px; height: 100px; background: black; border: none;\" /> -->\n         <div class=\"form-group col-sm-6\">\n        \n         <div class=\"form-group col-sm-12\">\n             <label class=\"control-label\" id=\"fname\">Location</label>\n             <select class=\"form-control\">\n                 <option></option>\n                 <option></option>\n                 <option></option>\n                 <option></option>\n               </select>\n           </div>\n           <div class=\"clearfix\"></div>\n           <div class=\"form-group col-sm-12\">\n              <label class=\"control-label\" id=\"fname\">Trade Date</label>\n                 <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"control-label\" id=\"fname\">Termination Date</label>\n                   <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"form-group col-sm-12\">\n                  <label class=\"control-label\" id=\"fname\">Sales Person</label>\n                  <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label\" id=\"fname\">Trade Type</label>\n                    <select class=\"form-control\">\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                      </select>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"form-group col-sm-12\">\n                      <label class=\"control-label\" id=\"fname\">Risk Party A</label>\n                      <select class=\"form-control\">\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group col-sm-12\">\n                        <label class=\"control-label\" id=\"fname\">Long Name</label>\n                           <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"form-group col-sm-12\">\n                          <label class=\"control-label\" id=\"fname\">Early Term Date</label>\n                             <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                        </div>\n                        <div class=\"clearfix\"></div>\n                  <div class=\"form-group col-sm-12\">\n                      <label class=\"control-label\" id=\"fname\">Early Term Reason</label>\n                      <select class=\"form-control\">\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  <div class=\"form-group col-sm-12\">\n                      <label class=\"control-label\" id=\"fname\">Mod Reason</label>\n                      <select class=\"form-control\">\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group col-sm-12\">\n                        <label for=\"exampleFormControlTextarea1\">Comments</label>\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                     \n  </div>\n            \n          </div>\n          <router-outlet></router-outlet>\n          </div>\n         "

/***/ }),

/***/ "./src/app/tradebasic/tradebasic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tradebasic/tradebasic.component.ts ***!
  \****************************************************/
/*! exports provided: TradebasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradebasicComponent", function() { return TradebasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TradebasicComponent = /** @class */ (function () {
    function TradebasicComponent() {
    }
    TradebasicComponent.prototype.ngOnInit = function () {
    };
    TradebasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tradebasic',
            template: __webpack_require__(/*! ./tradebasic.component.html */ "./src/app/tradebasic/tradebasic.component.html"),
            styles: [__webpack_require__(/*! ./tradebasic.component.css */ "./src/app/tradebasic/tradebasic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TradebasicComponent);
    return TradebasicComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\suchi code\derivatives\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map