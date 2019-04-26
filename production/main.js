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

/***/ "./src/app/additional-fields/additional-fields.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/additional-fields/additional-fields.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGl0aW9uYWwtZmllbGRzL2FkZGl0aW9uYWwtZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/additional-fields/additional-fields.component.html":
/*!********************************************************************!*\
  !*** ./src/app/additional-fields/additional-fields.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"col-sm-5\">\n      <div class=\"col-sm-12\">\n        <label class=\"control-label\">BookingType</label>\n        <select class=\"form-control\">\n          <option></option>\n        </select>\n      </div>\n      <div class=\"col-sm-12\">\n          <label class=\"control-label\">FlowStatus</label>\n          <select class=\"form-control\">\n            <option></option>\n          </select>\n      </div>\n      <div class=\"col-sm-12\">\n          <label class=\"control-label\">OrigTradeRef</label>\n          <input type=\"text\" class=\"form-control\">\n      </div>\n      <div class=\"col-sm-12\">\n          <label class=\"control-label\">LastModifiedBy</label>\n          <input type=\"text\" class=\"form-control\">\n      </div>\n      <div class=\"col-sm-12\">\n          <label class=\"control-label\">LastVerifiedBy</label>\n          <input type=\"text\" class=\"form-control\">\n      </div>\n</div>\n    \n\n\n  <div class=\"col-sm-5\">\n      <div class=\"col-sm-12\">\n          <label class=\"control-label\">MatchStatus</label>\n          <select class=\"form-control\">\n            <option></option>\n          </select>\n        </div>\n        <div class=\"col-sm-12\">\n            <label class=\"control-label\">OperationRef</label>\n            <select class=\"form-control\">\n              <option></option>\n            </select>\n          </div>\n          <div class=\"col-sm-12\">\n              <label class=\"control-label\">AlternateRef</label>\n              <input type=\"text\" class=\"form-control\">\n          </div>\n          <div class=\"col-sm-12\">\n              <label class=\"control-label\">LastModifiedBy</label>\n              <input type=\"text\" class=\"form-control\">\n          </div>\n          <div class=\"col-sm-12\">\n              <label class=\"control-label\">LastVerifiedBy</label>\n              <input type=\"text\" class=\"form-control\">\n          </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/additional-fields/additional-fields.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/additional-fields/additional-fields.component.ts ***!
  \******************************************************************/
/*! exports provided: AdditionalFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalFieldsComponent", function() { return AdditionalFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdditionalFieldsComponent = /** @class */ (function () {
    function AdditionalFieldsComponent() {
    }
    AdditionalFieldsComponent.prototype.ngOnInit = function () {
    };
    AdditionalFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-additional-fields',
            template: __webpack_require__(/*! ./additional-fields.component.html */ "./src/app/additional-fields/additional-fields.component.html"),
            styles: [__webpack_require__(/*! ./additional-fields.component.css */ "./src/app/additional-fields/additional-fields.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdditionalFieldsComponent);
    return AdditionalFieldsComponent;
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
/* harmony import */ var _sales_credit_sales_credit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-credit/sales-credit.component */ "./src/app/sales-credit/sales-credit.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/assignment/assignment.component.ts");
/* harmony import */ var _partial_assignment_partial_assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partial-assignment/partial-assignment.component */ "./src/app/partial-assignment/partial-assignment.component.ts");
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margin/margin.component */ "./src/app/margin/margin.component.ts");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fees/fees.component */ "./src/app/fees/fees.component.ts");
/* harmony import */ var _quick_ticket_quick_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-ticket/quick-ticket.component */ "./src/app/quick-ticket/quick-ticket.component.ts");
/* harmony import */ var _trade_basic_trade_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade-basic/trade-basic.component */ "./src/app/trade-basic/trade-basic.component.ts");
/* harmony import */ var _fra_fra_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fra/fra.component */ "./src/app/fra/fra.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _additional_fields_additional_fields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./additional-fields/additional-fields.component */ "./src/app/additional-fields/additional-fields.component.ts");












var routes = [
    { path: 'fra', component: _fra_fra_component__WEBPACK_IMPORTED_MODULE_8__["FraComponent"] },
    { path: 'tradebasic', component: _trade_basic_trade_basic_component__WEBPACK_IMPORTED_MODULE_7__["TradeBasicComponent"], children: [
            { path: 'additional', component: _additional_fields_additional_fields_component__WEBPACK_IMPORTED_MODULE_11__["AdditionalFieldsComponent"] },
            { path: 'fees', component: _fees_fees_component__WEBPACK_IMPORTED_MODULE_5__["FeesComponent"] },
            { path: 'sales', component: _sales_credit_sales_credit_component__WEBPACK_IMPORTED_MODULE_1__["SalesCreditComponent"] },
            { path: 'margin', component: _margin_margin_component__WEBPACK_IMPORTED_MODULE_4__["MarginComponent"] },
            { path: 'assign', component: _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentComponent"] },
            { path: 'partial', component: _partial_assignment_partial_assignment_component__WEBPACK_IMPORTED_MODULE_3__["PartialAssignmentComponent"] }
        ] },
    { path: 'quickticket', component: _quick_ticket_quick_ticket_component__WEBPACK_IMPORTED_MODULE_6__["QuickTicketComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_fra_fra_component__WEBPACK_IMPORTED_MODULE_8__["FraComponent"],
    _trade_basic_trade_basic_component__WEBPACK_IMPORTED_MODULE_7__["TradeBasicComponent"],
    _quick_ticket_quick_ticket_component__WEBPACK_IMPORTED_MODULE_6__["QuickTicketComponent"],
    _additional_fields_additional_fields_component__WEBPACK_IMPORTED_MODULE_11__["AdditionalFieldsComponent"],
    _fees_fees_component__WEBPACK_IMPORTED_MODULE_5__["FeesComponent"],
    _sales_credit_sales_credit_component__WEBPACK_IMPORTED_MODULE_1__["SalesCreditComponent"],
    _margin_margin_component__WEBPACK_IMPORTED_MODULE_4__["MarginComponent"],
    _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentComponent"],
    _partial_assignment_partial_assignment_component__WEBPACK_IMPORTED_MODULE_3__["PartialAssignmentComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hom {\r\n    margin-top:9px;\r\n    padding-right:10px;\r\n    padding-left:68px;\r\n \r\n}\r\n.dropdown {\r\n    margin-top:10px;\r\n    padding:15px;\r\n    margin-left:6px;\r\n}\r\n.navbar{\r\n    background-color: #315B7E;\r\n    width:100%;\r\n    height:10%;\r\n    border-color:white;\r\n }\r\n.nav{\r\n    height:14%;\r\n }\r\n\r\n \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0NBQ3JCO0FBQ0E7SUFDRyxVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob20ge1xyXG4gICAgbWFyZ2luLXRvcDo5cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NjhweDtcclxuIFxyXG59XHJcbi5kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbn1cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTVCN0U7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwJTtcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxuIH1cclxuIC5uYXZ7XHJcbiAgICBoZWlnaHQ6MTQlO1xyXG4gfVxyXG5cclxuIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <h2 style=\"text-align:left; font-style: italic\">DERIVATIVES CONNECT</h2>\n</div> -->\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li><h3 style=\"color:honeydew;font-style:italic\">Derivatives<br>Connect</h3></li>\n      <li class=\"hom\">\n          <a href=\"active\"><button class=\"btn btn-success\" type=\"button\">Home</button></a>\n              \n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">OTC Products\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a>Swap Ticket</a></li>\n                <li><a>Swap Option</a></li>\n                <li><a>Cap Floor</a></li>\n                <li><a routerLink='/fra' routerLinkActive=\"active\">FRA</a></li>\n                <li><a>Bond</a></li>\n              </ul>\n      </li>\n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">ET Products\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                  <li><a>BondFuture</a></li>\n                  <li><a>BondFutureOption</a></li>\n                  <li><a>MMFuture</a></li>\n                  <li><a>MMFutureOption</a></li>\n              </ul>\n      </li>\n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Asset Blotter\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                  <li><a>IRD Blotter</a></li>\n                  <li><a>CRD Blotter</a></li>\n                  <li><a>FX Blotter</a></li>\n                  <li><a>EQ Blotter</a></li>\n                  <li><a>Cash Blotter</a></li>\n                </ul>\n      </li>\n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Risk Dash Board\n              <span class=\"caret\"></span></button>\n              \n      </li>\n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Ref Data\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                  <li><a>Broker</a></li>\n                  <li><a>Country</a></li>\n                  <li><a>Currency</a></li>\n                  <li><a>Curve</a></li>\n                  <li><a>CustomerAccount</a></li>\n                  <li><a>Exchanges</a></li>\n                  <li><a>Firm Account</a></li>\n                  <li><a>Traders</a></li>\n                  <li><a>Instruments</a></li>\n                  <li><a>Legal Entity</a></li>\n                </ul>\n      </li>\n      <li class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">User Entitlements\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                  <li><a>Firm Account</a></li>\n                  <li><a>CustomerAccount</a></li>\n                  <li><a>Product</a></li>\n                  <li><a>Location</a></li>\n                  <li><a>MenuOption</a></li>\n                  <li><a>LegalEntity</a></li>\n                  <li><a>Profile-add</a></li>\n                  <li><a>Profile-modify</a></li>\n                </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

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
        this.title = 'DERIVATIVES';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnQvYXNzaWdubWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/assignment/assignment.component.html":
/*!******************************************************!*\
  !*** ./src/app/assignment/assignment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assignment works!\n</p>\n"

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

module.exports = ".table{\r\n    margin-left:-20px;\r\n   \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XHJcbiAgICBtYXJnaW4tbGVmdDotMjBweDtcclxuICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/fees/fees.component.html":
/*!******************************************!*\
  !*** ./src/app/fees/fees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<table class=\"table  table-striped table-bordered\" >\n    <thead>\n      <tr>\n        <th></th>\n        <th></th>\n        <th>Status</th>\n        <th>PayRef</th>\n        <th>PaymentType</th>\n        <th>PaymentDate</th>\n        <th>Currency</th>\n        <th>Amount</th>\n        <th>ConversionIndex</th>\n        <th>ConversionCurrency</th>\n        <th>FirmAccount</th>\n        <th>CustomerAccount</th>\n        <th>ConversionLog</th>\n        <th>PayReceive</th>\n        <th>ThirdPartyType</th>\n        <th>ThirdPartyName</th>\n        <th>Comments</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td></td>\n        <td></td>\n        <td>Active</td>\n        <td>NA</td>\n        \n        <td><input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\"></td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td>0.00</td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n        <td>-1</td>\n        <td> <select class=\"form-control\">\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select></td>\n       \n        <td>NA</td>\n        <td>HelloFees</td>\n\n      </tr>\n      \n    </tbody>\n  </table>\n  </div>\n  <br>\n  <button type=\"button\" class=\"btn btn-success col-sm-1\" >Add</button>\n  <button type=\"button\" class=\"btn btn-danger col-sm-1\" [ngStyle]=\"{'margin-left.px':'10'}\">Delete</button>\n  <button type=\"button\" class=\"btn btn-success col-sm-1\" [ngStyle]=\"{'margin-left.px':'10'}\">Apply</button>\n"

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

/***/ "./src/app/fra/fra.component.css":
/*!***************************************!*\
  !*** ./src/app/fra/fra.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n.sidenav {\r\n  margin-top: -17px;\r\n  margin-left:-14px;\r\n  height: 150vh;\r\n  width: 180px;\r\n  background-color:#999999;\r\n  }\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: black;\r\n  display: block;\r\n  padding-top:35px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  \r\n}\r\n.sidenav a:hover {\r\n  color: #dcecec;\r\n\r\n}\r\n.navbar{\r\n    margin-left:-59px;\r\n    margin-top:-17px;\r\n    width:107%;\r\n    height:50px;  \r\n    background-color:#999999;\r\n    border-color:rgb(208, 211, 211);\r\n    font-weight: bolder;\r\n       }\r\n.navbar ul li a{\r\n    color:black;\r\n  }\r\n.dropdown-submenu {\r\n    position: relative;\r\n  }\r\n.dropdown-submenu .dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -1px;\r\n  }\r\n.box{\r\n   padding:15px;\r\n   padding-left:310px;\r\n   margin-bottom: 35px;\r\n }\r\n.row{\r\n   padding-left:30px;\r\n } \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhL2ZyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3RUFBd0U7O0FBRTFFO0FBQ0E7RUFDRSxjQUFjOztBQUVoQjtBQUNDO0lBQ0csaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsbUJBQW1CO09BQ2hCO0FBQ0w7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRDtHQUNFLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCO0FBRUE7R0FDRSxpQkFBaUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9mcmEvZnJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuLnNpZGVuYXYge1xyXG4gIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIG1hcmdpbi1sZWZ0Oi0xNHB4O1xyXG4gIGhlaWdodDogMTUwdmg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcclxuICB9XHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6MzVweDtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbn1cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNkY2VjZWM7XHJcblxyXG59XHJcbiAubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTU5cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xN3B4O1xyXG4gICAgd2lkdGg6MTA3JTtcclxuICAgIGhlaWdodDo1MHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5OTk5OTk7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDIwOCwgMjExLCAyMTEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgIH0gXHJcbiAgLm5hdmJhciB1bCBsaSBhe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfSAgXHJcbiAgLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tc3VibWVudSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICB9ICBcclxuIC5ib3h7XHJcbiAgIHBhZGRpbmc6MTVweDtcclxuICAgcGFkZGluZy1sZWZ0OjMxMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gfVxyXG4gXHJcbiAucm93e1xyXG4gICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuIH0gXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/fra/fra.component.html":
/*!****************************************!*\
  !*** ./src/app/fra/fra.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-2\">\n        <div class=\"sidenav\">\n            <a routerLink=\"/tradebasic\" routerActive=\"Active\">TradeBasic</a>\n            <a routerLink=\"/fra\" routerActive=\"Active\">Fra Ticket</a>\n            <a routerLink=\"/quickticket\" routerActive=\"Active\">QuickTicket</a>\n        </div>\n    </div>\n    <div class=\"col-sm-10\">\n        <nav class=\"navbar navbar-default \">\n            <div class=\"container-fluid\">\n                <ul class=\"nav navbar-nav mr-auto\">\n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">New</a></li>\n                   \n                    <li class=\"dropdown-submenu\"><a class=\"test\">Save As <span class=\"caret\"></span></a>\n                           <ul class=\"dropdown-menu\">\n                                <li><a >NewTrade</a></li>\n                                <li><a >TemplateTrade</a></li>\n                            </ul>\n                    </li>\n                    \n                    <li><a href=\"#\">Save</a></li>\n                    <li><a href=\"#\">Delete</a></li>\n                    <li class=\"dropdown-submenu\"><a class=\"test\">Reload  <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a >Latest</a></li>\n                                <li><a >History</a></li>\n                                <li><a >Templates</a></li>\n                            </ul>\n                    </li>\n                    <li><a href=\"#\">Approve</a></li>\n                    <li><a href=\"#\">Exit</a></li>\n                    </ul>\n    \n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">BusinessEvent <span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Bought Back</a></li>\n                      <li><a href=\"#\">PartialBoughtBack</a></li>\n                      <li><a href=\"#\">Mo Maintenance</a></li>\n                      <li><a href=\"#\">Migration</a></li>\n                      <li><a href=\"#\">Assignment</a></li>\n                      <li><a href=\"#\">PartialAssignment</a></li>\n                      <li><a href=\"#\">Allocation</a></li>\n                      </ul>\n    \n                      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Push To Mo</a></li>\n                        <li><a href=\"#\">Push To Bo</a></li>\n                        <li><a href=\"#\">Withdraw </a></li>\n                        <li class=\"dropdown-submenu\"><a class=\"test\">Email <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                    <li><a >Trade Ticket</a></li>\n                                    <li><a >End Ticket</a></li>\n                                    <li><a >SendCashFlow</a></li>\n                                    <li><a >SendRisk</a></li>\n                                    <li><a >SendPV</a></li>\n                                </ul>\n                        </li>\n                        </ul>\n    \n                        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics <span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                          <li><a href=\"#\">Calculate PV</a></li>\n                          <li class=\"dropdown-submenu\"><a class=\"test\">CalculateRisk <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                    <li><a >Delta</a></li>\n                                    <li><a >Gamma</a></li>\n                                    <li><a >Vega</a></li>\n                                    <li><a >Theta</a></li>\n                            </ul>\n                        </li>\n                          <li><a href=\"#\">Calculate PAA</a></li>\n                          <li><a href=\"#\">CashFlowReport</a></li>\n                          </ul>\n                          \n                          <li class=\"box\">\n                              &nbsp;\n                              <label style=\"color:honeydew;color:black\">Market:</label>&nbsp;\n                              <select>\n                                <option>Live</option>\n                                <option>End Of Day</option>\n                                <option>Historic</option>\n                              </select>&nbsp;&nbsp;\n                              <label style=\"color:honeydew;color:black\">Today:</label>&nbsp;\n                             <input type=\"date\">\n                            </li>\n                        \n               </ul>\n               \n            </div>\n        </nav>\n   \n     \n    \n    \n           \n\n\n    <div class=\"container-fluid\">\n\n\n        <div class=\"row\">\n          <div [ngClass]=\"['form-group']\">\n<label class=\"control-label col-sm-3 control-align-label contorl-align-text \" >Currency/Notional\n            </label>\n          <div class=\"col-sm-8\">\n              <div class=\"form-inline\">\n                  <select class=\"form-control col-sm-3\" >\n                      <option>{{model.cmbCurrency}}</option>\n                      <option></option>\n                  </select>\n                  <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtNotional}}\n                  [ngStyle]=\"{'margin-left.px':'10'}\">\n              </div>\n          </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div [ngClass]=\"['form-group']\">\n<label class=\"control-label col-sm-3 control-align-label contorl-align-text\">AgreedRate</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                <input type=\"text\" class=\"form-control col-sm-3\" \n                    value={{model.txtAgreedRate}} [ngStyle]=\"{'width.px':'162'}\">\n                <select class=\"form-control col-sm-3\"[ngStyle]=\"{'margin-left.px':'10'}\">\n                    <option>{{model.cmbFraBuySell}}</option>\n                    <option></option>\n                </select>\n                </div>\n\n            </div>\n            </div>\n        </div>                    \n       <br>\n       <div class=\"row\">\n        <div [ngClass]=\"['form-group']\">\n<label class=\"control-label col-sm-3 control-align-table control-align-text\">RateType/Tenor</label>\n        <div class=\"col-sm-8\">\n            <div class=\"form-inline\">\n                <select class=\"form-control col-sm-3\">\n                    <option>{{model.cmbRateType}}</option>\n                    <option></option>\n                </select>\n                <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtTenor}}\n                [ngStyle]=\"{'margin-left.px':'10'}\">\n            </div>\n        </div>\n            </div>\n       </div> \n       <br>\n       <div class=\"row\">\n           <div [ngClass]=\"['form-group']\">\n<label class=\"control-label col-sm-3 control-align-table control-align-text\">StartDate/MaturityDate\n                </label>\n                <div class=\"col-sm-8\">\n                    <div class=\"form-inline\">\n                <input type=\"date\" class=\"form-control col-sm-3\" value={{model.txtStartDate}}>\n                <input type=\"date\" class=\"form-control col-sm-3\" \n                    value={{model.txtMaturityDate}} [ngStyle]=\"{'margin-left.px':'10'}\">\n                    </div>\n                </div>\n           </div>\n       </div>\n       <br>\n       <div class=\"row\">\n            <div [ngClass]=\"['form-group']\">\n<label class=\"control-label col-sm-3 control-align-table control-align-text\">QuoteDate/Calendars/Lag\n                 </label>\n                 <div class=\"col-sm-8\">\n                     <div class=\"form-inline\">\n                 <input type=\"date\" class=\"form-control col-sm-3\" value={{model.txtQuoteDate}}>\n                 <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n                     <option>{{model.cntQuoteCalendars}}</option>\n                     <option></option>\n                 </select>\n                 <input type=\"text\" class=\"form-control colsm-2\" value={{model.txtQuoteLag}} [ngStyle]=\"{'margin-left.px':'10'}\">\n                     </div>\n                 </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 contorl-align-text control-align-label\">SettlementDate</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                    <input type=\"date\" class=\"form-control\" value={{model.txtSettlementDate}}/>\n                </div>\n            </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-label contorl-align-text\">DayCount</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                    <select class=\"form-control col-sm-3\">\n                        <option>{{model.cmbDayCount}}</option>\n                        <option></option>\n                    </select>\n                </div>\n            </div>\n            </div>\n        \n        </div>\n         <br>\n         <div class=\"row\">\n                <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-label contorl-align-text\">DiscountCurve</label>\n                <div class=\"col-sm-8\">\n                    <div class=\"form-inline\">\n                        <select class=\"form-control col-sm-3\">\n                            <option>{{model.cmbDiscountCurve}}</option>\n                            <option></option>\n                        </select>\n                    </div>\n                </div>\n                </div>\n            \n            </div> \n            <br>\n            <div class=\"row\">\n                    <div [ngClass]=\"['form-group']\">\n            <label class=\"control-label col-sm-3 control-align-label contorl-align-text\">MarketIndex</label>\n                    <div class=\"col-sm-8\">\n                        <div class=\"form-inline\">\n                            <select class=\"form-control col-sm-3\">\n                                <option>{{model.cmbMarketIndex}}</option>\n                                <option></option>\n                            </select>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                        <div [ngClass]=\"['form-group']\">\n                <label class=\"control-label col-sm-3 control-align-label contorl-align-text\">PayBusDay/Calendars</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-inline\">\n                                <select class=\"form-control col-sm-3\">\n                                    <option>{{model.cmbPayBusDay}}</option>\n                                    <option></option>\n                                </select>\n                                <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n                                    <option>{{model.cmbPayCalendars}}</option>\n                                    <option></option>\n                                </select>\n                             </div>\n                        </div>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                        <div [ngClass]=\"['form-group']\">\n        <label class=\"control-label col-sm-3 control-align-label control-align-text\">PaymentConvention</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-inline\">\n                                <select class=\"form-control col-sm-3\" [ngStyle]=\"{'width.px':'80'}\">\n                                <option>{{model.cmbPaymentConventionPnl}}</option>\n                                <option></option>\n                                </select>\n                            </div>\n                        </div>\n                        </div>\n                    </div>  \n                    <br>\n                <div class=\"row\">\n                    <div [ngClass]=\"['form-group']\">\n        <label class=\"control-label col-sm-3 control-align-label control-align-text\">ResetConvention</label>\n                    <div class=\"col-sm-8\">\n                        <div class=\"form-inline\">\n                            <select class=\"form-control col-sm-3\">\n                                <option>{{model.cmbResetConvention}}</option>\n                                <option></option>\n                            </select>\n                        </div>\n                    </div>\n                    </div>\n                </div> \n                <br>\n                <div class=\"row\">\n                    <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-label control-align-text\">\n            FWDRate / Rate Setting Type</label>\n                    <div class=\"col-sm-8\">\n                        <div class=\"form-inline\">\n                            <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtFWDRate}}>\n                            <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n                                <option>{{model.cmbRateSettingType}}</option>\n                                <option></option>\n                            </select>\n                        </div>\n                    </div>\n\n                    </div>\n                </div>      \n                <br>\n    <div class=\"row\">\n        <div [ngClass]=\"['form-group']\">\n        <label class=\"control-label col-sm-3 control-align-label control-align-text\">\n            ResetType/Precision</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                    <select class=\"form-control col-sm-3\">\n                        <option>{{model.cmbResetType}}</option>\n                        <option></option>\n                    </select>\n                    <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtPrecision}}\n                        [ngStyle]=\"{'margin-left.px':'10'}\">\n                </div>\n            </div>    \n        </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <div [ngClass]=\"['form-group']\">\n        <label class=\"control-label col-sm-3 control-align-label control-align-text\">\n            PV/Currency</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control col-sm-3 value={{model.txtPV}}\"/>\n                    <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n                        <option>{{model.cmbPVCurrency}}</option>\n                        <option></option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>         \n    <br>\n    <div class=\"row\">\n        <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-label control-align-text\">\n            ParellelDelta/Curve</label>\n            <div class=\"col-sm-8\">\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtRecParallelDelta}}/>\n                    <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n                        <option>{{model.cmbCurve}}</option>\n                        <option></option>\n                    </select>\n                </div>\n            </div>\n\n        </div>\n    </div>\n             </div>\n             \n    \n      \n    <router-outlet></router-outlet>\n    \n    \n    \n    "

/***/ }),

/***/ "./src/app/fra/fra.component.ts":
/*!**************************************!*\
  !*** ./src/app/fra/fra.component.ts ***!
  \**************************************/
/*! exports provided: FraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraComponent", function() { return FraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fra_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fra.model */ "./src/app/fra/fra.model.ts");
/* harmony import */ var _fra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fra.service */ "./src/app/fra/fra.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");





var FraComponent = /** @class */ (function () {
    function FraComponent(ngxXml2jsonService, fraService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.fraService = fraService;
        this.model = model;
    }
    FraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fraService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbCurrency = _this.obj.Fra.Currency;
            _this.model.txtNotional = _this.obj.Fra.Notional;
            _this.model.txtAgreedRate = _this.obj.Fra.AgreedRate;
            _this.model.cmbFraBuySell = _this.obj.Fra.BuySell;
            _this.model.cmbRateType = _this.obj.Fra.RateType;
            _this.model.txtTenor = _this.obj.Fra.Tenor;
            _this.model.txtStartDate = _this.obj.Fra.StartDate;
            _this.model.txtMaturityDate = _this.obj.Fra.MaturityDate;
            _this.model.txtQuoteDate = _this.obj.Fra.QuoteDate;
            _this.model.cntQuoteCalendars = _this.obj.Fra.Calendars;
            _this.model.txtQuoteLag = _this.obj.Fra.Lag;
            _this.model.txtSettlementDate = _this.obj.Fra.SettlementDate;
            _this.model.cmbDayCount = _this.obj.Fra.DayCount;
            _this.model.cmbDiscountCurve = _this.obj.Fra.DiscountCurve;
            _this.model.cmbMarketIndex = _this.obj.Fra.MarketIndex;
            _this.model.cmbPayBusDay = _this.obj.Fra.PayBusDay;
            _this.model.cmbPayCalendars = _this.obj.Fra.Calendars;
            _this.model.cmbPaymentConventionPnl = _this.obj.Fra.PaymentConvension;
            _this.model.cmbResetConvention = _this.obj.Fra.ResetConvention;
            _this.model.txtFWDRate = _this.obj.Fra.FWDRate;
            _this.model.cmbRateSettingType = _this.obj.Fra.RateSettingType;
            _this.model.cmbResetType = _this.obj.Fra.ResetType;
            _this.model.txtPrecision = _this.obj.Fra.Precision;
            _this.model.txtPV = _this.obj.Fra.PV;
            _this.model.cmbPVCurrency = _this.obj.Fra.Currency;
            _this.model.txtRecParallelDelta = _this.obj.Fra.ParallelDelta;
            _this.model.cmbCurve = _this.obj.Fra.cmbCurve;
            console.log(_this.model);
        }, 10);
    };
    FraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-fra',
            template: __webpack_require__(/*! ./fra.component.html */ "./src/app/fra/fra.component.html"),
            styles: [__webpack_require__(/*! ./fra.component.css */ "./src/app/fra/fra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"],
            _fra_service__WEBPACK_IMPORTED_MODULE_2__["FraService"],
            _fra_model__WEBPACK_IMPORTED_MODULE_1__["FraModel"]])
    ], FraComponent);
    return FraComponent;
}());



/***/ }),

/***/ "./src/app/fra/fra.model.ts":
/*!**********************************!*\
  !*** ./src/app/fra/fra.model.ts ***!
  \**********************************/
/*! exports provided: FraModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraModel", function() { return FraModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FraModel = /** @class */ (function () {
    function FraModel() {
    }
    FraModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FraModel);
    return FraModel;
}());



/***/ }),

/***/ "./src/app/fra/fra.service.ts":
/*!************************************!*\
  !*** ./src/app/fra/fra.service.ts ***!
  \************************************/
/*! exports provided: FraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraService", function() { return FraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FraService = /** @class */ (function () {
    function FraService(_http) {
        this._http = _http;
        this._url = './assets/Fra.xml';
    }
    FraService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    FraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FraService);
    return FraService;
}());



/***/ }),

/***/ "./src/app/margin/margin.component.css":
/*!*********************************************!*\
  !*** ./src/app/margin/margin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmdpbi9tYXJnaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/margin/margin.component.html":
/*!**********************************************!*\
  !*** ./src/app/margin/margin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  margin works!\n</p>\n"

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

/***/ "./src/app/partial-assignment/partial-assignment.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/partial-assignment/partial-assignment.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWwtYXNzaWdubWVudC9wYXJ0aWFsLWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partial-assignment/partial-assignment.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/partial-assignment/partial-assignment.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  partial-assignment works!\n</p>\n"

/***/ }),

/***/ "./src/app/partial-assignment/partial-assignment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/partial-assignment/partial-assignment.component.ts ***!
  \********************************************************************/
/*! exports provided: PartialAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialAssignmentComponent", function() { return PartialAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartialAssignmentComponent = /** @class */ (function () {
    function PartialAssignmentComponent() {
    }
    PartialAssignmentComponent.prototype.ngOnInit = function () {
    };
    PartialAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partial-assignment',
            template: __webpack_require__(/*! ./partial-assignment.component.html */ "./src/app/partial-assignment/partial-assignment.component.html"),
            styles: [__webpack_require__(/*! ./partial-assignment.component.css */ "./src/app/partial-assignment/partial-assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartialAssignmentComponent);
    return PartialAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/quick-ticket/quick-ticket.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quick-ticket/quick-ticket.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n.sidenav {\r\n  margin-top: -17px;\r\n  margin-left:-14px;\r\n  height: 150vh;\r\n  width: 180px;\r\n  background-color:#999999;\r\n  }\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: black;\r\n  display: block;\r\n  padding-top:30px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n\r\n}\r\n.sidenav a:hover {\r\n  color: #dcecec;\r\n\r\n}\r\n.navbar{\r\n    margin-left:-59px;\r\n    margin-top:-17px;\r\n    width:107%;\r\n    height:50px;  \r\n    background-color:#999999;\r\n    border-color:rgb(208, 211, 211);\r\n    font-weight: bolder;\r\n       }\r\n.navbar ul li a{\r\n    color:black;\r\n  }\r\n.dropdown-submenu {\r\n    position: relative;\r\n  }\r\n.dropdown-submenu .dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -1px;\r\n  }\r\n.box{\r\n   padding:15px;\r\n   padding-left:310px;\r\n   margin-bottom: 35px;\r\n }\r\n.row{\r\n   padding-left:30px;\r\n } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpY2stdGlja2V0L3F1aWNrLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3RUFBd0U7O0FBRTFFO0FBRUE7RUFDRSxjQUFjOztBQUVoQjtBQUNDO0lBQ0csaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsbUJBQW1CO09BQ2hCO0FBRUw7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFFRDtHQUNFLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCO0FBRUE7R0FDRSxpQkFBaUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9xdWljay10aWNrZXQvcXVpY2stdGlja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuLnNpZGVuYXYge1xyXG4gIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIG1hcmdpbi1sZWZ0Oi0xNHB4O1xyXG4gIGhlaWdodDogMTUwdmg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcclxuICB9XHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6MzBweDtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2RjZWNlYztcclxuXHJcbn1cclxuIC5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotNTlweDtcclxuICAgIG1hcmdpbi10b3A6LTE3cHg7XHJcbiAgICB3aWR0aDoxMDclO1xyXG4gICAgaGVpZ2h0OjUwcHg7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMjA4LCAyMTEsIDIxMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgfSBcclxuICBcclxuICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9ICAgXHJcbiAgLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tc3VibWVudSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICB9ICBcclxuICBcclxuIC5ib3h7XHJcbiAgIHBhZGRpbmc6MTVweDtcclxuICAgcGFkZGluZy1sZWZ0OjMxMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gfVxyXG4gXHJcbiAucm93e1xyXG4gICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuIH0gIl19 */"

/***/ }),

/***/ "./src/app/quick-ticket/quick-ticket.component.html":
/*!**********************************************************!*\
  !*** ./src/app/quick-ticket/quick-ticket.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-2\">\n    <div class=\"sidenav\">\n        <a routerLink=\"/tradebasic\" routerActive=\"Active\">TradeBasic</a>\n        <a routerLink=\"/fra\" routerActive=\"Active\">Fra Ticket</a>\n        <a routerLink=\"/quickticket\" routerActive=\"Active\">QuickTicket</a>\n    </div>\n</div>\n<div class=\"col-sm-10\">\n    <nav class=\"navbar navbar-default \">\n        <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav mr-auto\">\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">New</a></li>\n               \n                <li class=\"dropdown-submenu\"><a class=\"test\">Save As <span class=\"caret\"></span></a>\n                       <ul class=\"dropdown-menu\">\n                            <li><a >NewTrade</a></li>\n                            <li><a >TemplateTrade</a></li>\n                        </ul>\n                </li>\n                \n                <li><a href=\"#\">Save</a></li>\n                <li><a href=\"#\">Delete</a></li>\n                <li class=\"dropdown-submenu\"><a class=\"test\">Reload  <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                            <li><a >Latest</a></li>\n                            <li><a >History</a></li>\n                            <li><a >Templates</a></li>\n                        </ul>\n                </li>\n                <li><a href=\"#\">Approve</a></li>\n                <li><a href=\"#\">Exit</a></li>\n                </ul>\n\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">BusinessEvent <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Bought Back</a></li>\n                  <li><a href=\"#\">PartialBoughtBack</a></li>\n                  <li><a href=\"#\">Mo Maintenance</a></li>\n                  <li><a href=\"#\">Migration</a></li>\n                  <li><a href=\"#\">Assignment</a></li>\n                  <li><a href=\"#\">PartialAssignment</a></li>\n                  <li><a href=\"#\">Allocation</a></li>\n                  </ul>\n\n                  <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Push To Mo</a></li>\n                    <li><a href=\"#\">Push To Bo</a></li>\n                    <li><a href=\"#\">Withdraw </a></li>\n                    <li class=\"dropdown-submenu\"><a class=\"test\">Email <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a >Trade Ticket</a></li>\n                                <li><a >End Ticket</a></li>\n                                <li><a >SendCashFlow</a></li>\n                                <li><a >SendRisk</a></li>\n                                <li><a >SendPV</a></li>\n                            </ul>\n                    </li>\n                    </ul>\n\n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics <span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Calculate PV</a></li>\n                      <li class=\"dropdown-submenu\"><a class=\"test\">CalculateRisk <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a >Delta</a></li>\n                                <li><a >Gamma</a></li>\n                                <li><a >Vega</a></li>\n                                <li><a >Theta</a></li>\n                        </ul>\n                    </li>\n                      <li><a href=\"#\">Calculate PAA</a></li>\n                      <li><a href=\"#\">CashFlowReport</a></li>\n                      </ul>\n                      \n                      <li class=\"box\">\n                          &nbsp;\n                          <label style=\"color:honeydew;color:black\">Market:</label>&nbsp;\n                          <select>\n                            <option>Live</option>\n                            <option>End Of Day</option>\n                            <option>Historic</option>\n                          </select>&nbsp;&nbsp;\n                          <label style=\"color:honeydew;color:black\">Today:</label>&nbsp;\n                         <input type=\"date\">\n                        </li>\n                    \n           </ul>\n           \n        </div>\n    </nav>\n  <div class=\"container-fluid\">\n     \n    <div class=\"row\">\n      <div [ngClass]=\"['form-group']\">\n        <label class=\"control-label col-sm-3 control-align-lable control-align-text\">\n          Currency/Notional</label>\n        <div class=\"col-sm-8\">\n          <div class=\"form-inline\">\n            <select class=\"form-control col-sm-3\">\n              <option>{{model.cmbQCurrency}}</option>\n              <option></option>\n            </select>\n            <input type=\"text\" class=\"form-control colsm-3\" value={{model.txtQNotional}}\n              [ngStyle]=\"{'margin-left.px':'10'}\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n<div class=\"row\">\n  <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-lable control-align-text\">\n      AgreedRate/BuySell\n    </label>\n    <div class=\"col-sm-8\">\n      <div class=\"form-inline\">\n      <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtQAgreedRatePnl}}>\n      <select class=\"form-control col-sm-3\" [ngStyle]=\"{'margin-left.px':'10'}\">\n        <option>{{model.cmbQBuySell}}</option>\n        <option></option>\n      </select>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-lable control-align-text\">\n      Tenor\n    </label>\n    <div class=\"col-sm-8\">\n      <div class=\"form-inline\">\n        <input type=\"text\" class=\"form-control col-sm-3\" value={{model.txtQTenor}}>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div [ngClass]=\"['form-group']\">\n    <label class=\"control-label col-sm-3 control-align-lable control-align-text\">\n      StartDate/EndDate\n    </label>\n    <div class=\"col-sm-8\">\n      <div class=\"form-inline\">\n        <input type=\"date\" class=\"form-control col-sm-3\"\n          value={{model.txtQStartDate}}>\n        <input type=\"date\" class=\"form-control col-sm-3\"\n          value={{model.txtQEndDate}} [ngStyle]=\"{'margin-left.px':'10'}\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/quick-ticket/quick-ticket.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quick-ticket/quick-ticket.component.ts ***!
  \********************************************************/
/*! exports provided: QuickTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTicketComponent", function() { return QuickTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _quick_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick-ticket.service */ "./src/app/quick-ticket/quick-ticket.service.ts");
/* harmony import */ var _quick_ticket_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick-ticket.model */ "./src/app/quick-ticket/quick-ticket.model.ts");





var QuickTicketComponent = /** @class */ (function () {
    function QuickTicketComponent(ngxXml2jsonService, quickTicketService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.quickTicketService = quickTicketService;
        this.model = model;
    }
    QuickTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quickTicketService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbQCurrency = _this.obj.Quick.Currency;
            _this.model.txtQNotional = _this.obj.Quick.Notional;
            _this.model.txtQAgreedRatePnl = _this.obj.Quick.AgreedRate;
            _this.model.cmbQBuySell = _this.obj.Quick.BuySell;
            _this.model.txtQTenor = _this.obj.Quick.Tenor;
            _this.model.txtQStartDate = _this.obj.Quick.StartDate;
            _this.model.txtQEndDate = _this.obj.Quick.EndDate;
        }, 10);
    };
    QuickTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quick-ticket',
            template: __webpack_require__(/*! ./quick-ticket.component.html */ "./src/app/quick-ticket/quick-ticket.component.html"),
            styles: [__webpack_require__(/*! ./quick-ticket.component.css */ "./src/app/quick-ticket/quick-ticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"],
            _quick_ticket_service__WEBPACK_IMPORTED_MODULE_3__["QuickTicketService"],
            _quick_ticket_model__WEBPACK_IMPORTED_MODULE_4__["QuickticketModel"]])
    ], QuickTicketComponent);
    return QuickTicketComponent;
}());



/***/ }),

/***/ "./src/app/quick-ticket/quick-ticket.model.ts":
/*!****************************************************!*\
  !*** ./src/app/quick-ticket/quick-ticket.model.ts ***!
  \****************************************************/
/*! exports provided: QuickticketModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickticketModel", function() { return QuickticketModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuickticketModel = /** @class */ (function () {
    function QuickticketModel() {
    }
    QuickticketModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QuickticketModel);
    return QuickticketModel;
}());



/***/ }),

/***/ "./src/app/quick-ticket/quick-ticket.service.ts":
/*!******************************************************!*\
  !*** ./src/app/quick-ticket/quick-ticket.service.ts ***!
  \******************************************************/
/*! exports provided: QuickTicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTicketService", function() { return QuickTicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var QuickTicketService = /** @class */ (function () {
    function QuickTicketService(_http) {
        this._http = _http;
        this._url = '/assets/Quickticket.xml';
    }
    QuickTicketService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    QuickTicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuickTicketService);
    return QuickTicketService;
}());



/***/ }),

/***/ "./src/app/sales-credit/sales-credit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sales-credit/sales-credit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzLWNyZWRpdC9zYWxlcy1jcmVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sales-credit/sales-credit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sales-credit/sales-credit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th></th>\n        <th></th>\n        <th>EVType</th>\n        <th>EVDate</th>\n        <th>Currency</th>\n        <th>Amount</th>\n        <th>FirmAccount</th>\n        <th>CustomerAccount</th>\n        <th>SalesPerson</th>\n        <th>Comments</th>\n       </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>></td>\n        <td></td>\n        <td>\n          <select class=\"form-control\">\n            <option>FLOW</option>\n            <option></option>\n            <option></option>\n            <option></option>\n            <option></option>\n          </select>\n        </td>\n        <td>\n          <input type=\"text\" value=\" \" class=\"form-control\">\n        </td>\n        <td>\n          <select class=\"form-control\">\n            <option></option>\n          </select>\n        </td>\n        <td>0.00</td>\n        <td>\n          <select class=\"form-control\">\n            <option></option>\n            <option></option>\n          </select>\n        </td>\n        <td>\n          <select class=\"form-control\">\n            <option></option>\n            <option></option>\n          </select>\n        </td>\n        <td>\n          <select class=\"form-control\">\n            <option></option>\n            <option></option>\n          </select>\n        </td>\n        <td>Hello SalesCredit</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<br>\n<div class=\"buttons\">\n  <button class=\"btn btn-success col-sm-1\" type=\"button\">Add</button>\n  <button class=\"btn btn-danger col-sm-1\" type=\"button\" [ngStyle]=\"{'margin-left.px':'10'}\">Delete</button>\n  <button class=\"btn btn-success col-sm-1\" type=\"button\" [ngStyle]=\"{'margin-left.px':'10'}\">Apply</button>\n</div>"

/***/ }),

/***/ "./src/app/sales-credit/sales-credit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sales-credit/sales-credit.component.ts ***!
  \********************************************************/
/*! exports provided: SalesCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesCreditComponent", function() { return SalesCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalesCreditComponent = /** @class */ (function () {
    function SalesCreditComponent() {
    }
    SalesCreditComponent.prototype.ngOnInit = function () {
    };
    SalesCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-credit',
            template: __webpack_require__(/*! ./sales-credit.component.html */ "./src/app/sales-credit/sales-credit.component.html"),
            styles: [__webpack_require__(/*! ./sales-credit.component.css */ "./src/app/sales-credit/sales-credit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalesCreditComponent);
    return SalesCreditComponent;
}());



/***/ }),

/***/ "./src/app/trade-basic/trade-basic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/trade-basic/trade-basic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n\r\n  \r\n.sidenav {\r\n  margin-top: -17px;\r\n  margin-left:-14px;\r\n  height: 250vh;\r\n  width: 180px;\r\n  background-color:#999999;\r\n  }\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: black;\r\n  display: block;\r\n  padding-top:30px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n\r\n}\r\n.sidenav a:hover {\r\n  color: #dcecec;\r\n\r\n}\r\n.navbar{\r\n    margin-left:-59px;\r\n    margin-top:-17px;\r\n    width:107%;\r\n    height:50px;  \r\n    background-color:#999999;\r\n    border-color:rgb(208, 211, 211);\r\n    font-weight: bolder;\r\n       }\r\n.navbar ul li a{\r\n    color:black;\r\n  }\r\n.dropdown-submenu {\r\n    position: relative;\r\n  }\r\n.dropdown-submenu .dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -1px;\r\n  }\r\n.box{\r\n   padding:15px;\r\n   padding-left:310px;\r\n   margin-bottom: 35px;\r\n }\r\n.row{\r\n   padding-left:30px;\r\n }\r\n.form-group{\r\n    margin-left:-24px;\r\n  }\r\n.sec{\r\n    width:110%;\r\n     }\r\n.items {\r\n      margin-top:16px;\r\n      width:100%;\r\n          \r\n    }\r\n.items a{\r\n      padding:40px;\r\n    }\r\n   \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtYmFzaWMvdHJhZGUtYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3RUFBd0U7O0FBRTFFO0FBRUE7RUFDRSxjQUFjOztBQUVoQjtBQUNDO0lBQ0csaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsbUJBQW1CO09BQ2hCO0FBRUw7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFFRDtHQUNFLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCO0FBRUE7R0FDRSxpQkFBaUI7Q0FDbkI7QUFDRTtJQUNDLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsVUFBVTtLQUNUO0FBQ0g7TUFDSSxlQUFlO01BQ2YsVUFBVTs7SUFFWjtBQUNBO01BQ0UsWUFBWTtJQUNkIiwiZmlsZSI6InNyYy9hcHAvdHJhZGUtYmFzaWMvdHJhZGUtYmFzaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG5cclxuICBcclxuLnNpZGVuYXYge1xyXG4gIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIG1hcmdpbi1sZWZ0Oi0xNHB4O1xyXG4gIGhlaWdodDogMjUwdmg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcclxuICB9XHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6MzBweDtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2RjZWNlYztcclxuXHJcbn1cclxuIC5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotNTlweDtcclxuICAgIG1hcmdpbi10b3A6LTE3cHg7XHJcbiAgICB3aWR0aDoxMDclO1xyXG4gICAgaGVpZ2h0OjUwcHg7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMjA4LCAyMTEsIDIxMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgfSBcclxuICBcclxuICAubmF2YmFyIHVsIGxpIGF7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9ICAgXHJcbiAgLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tc3VibWVudSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICB9ICBcclxuICBcclxuIC5ib3h7XHJcbiAgIHBhZGRpbmc6MTVweDtcclxuICAgcGFkZGluZy1sZWZ0OjMxMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gfVxyXG4gXHJcbiAucm93e1xyXG4gICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuIH0gXHJcbiAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI0cHg7XHJcbiAgfVxyXG4gIC5zZWN7XHJcbiAgICB3aWR0aDoxMTAlO1xyXG4gICAgIH1cclxuICAuaXRlbXMge1xyXG4gICAgICBtYXJnaW4tdG9wOjE2cHg7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIC5pdGVtcyBhe1xyXG4gICAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/trade-basic/trade-basic.component.html":
/*!********************************************************!*\
  !*** ./src/app/trade-basic/trade-basic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-2\">\n    <div class=\"sidenav\">\n        <a routerLink=\"/tradebasic\" routerActive=\"Active\">TradeBasic</a>\n        <a routerLink=\"/fra\" routerActive=\"Active\">Fra Ticket</a>\n        <a routerLink=\"/quickticket\" routerActive=\"Active\">QuickTicket</a>\n\n    </div>\n</div>\n<div class=\"col-sm-10\">\n    <nav class=\"navbar navbar-default \">\n        <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav mr-auto\">\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Actions <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">New</a></li>\n               \n                <li class=\"dropdown-submenu\"><a class=\"test\">Save As <span class=\"caret\"></span></a>\n                       <ul class=\"dropdown-menu\">\n                            <li><a >NewTrade</a></li>\n                            <li><a >TemplateTrade</a></li>\n                        </ul>\n                </li>\n                \n                <li><a href=\"#\">Save</a></li>\n                <li><a href=\"#\">Delete</a></li>\n                <li class=\"dropdown-submenu\"><a class=\"test\">Reload  <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                            <li><a >Latest</a></li>\n                            <li><a >History</a></li>\n                            <li><a >Templates</a></li>\n                        </ul>\n                </li>\n                <li><a href=\"#\">Approve</a></li>\n                <li><a href=\"#\">Exit</a></li>\n                </ul>\n\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">BusinessEvent <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Bought Back</a></li>\n                  <li><a href=\"#\">PartialBoughtBack</a></li>\n                  <li><a href=\"#\">Mo Maintenance</a></li>\n                  <li><a href=\"#\">Migration</a></li>\n                  <li><a href=\"#\">Assignment</a></li>\n                  <li><a href=\"#\">PartialAssignment</a></li>\n                  <li><a href=\"#\">Allocation</a></li>\n                  </ul>\n\n                  <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Flow <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Push To Mo</a></li>\n                    <li><a href=\"#\">Push To Bo</a></li>\n                    <li><a href=\"#\">Withdraw </a></li>\n                    <li class=\"dropdown-submenu\"><a class=\"test\">Email <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a >Trade Ticket</a></li>\n                                <li><a >End Ticket</a></li>\n                                <li><a >SendCashFlow</a></li>\n                                <li><a >SendRisk</a></li>\n                                <li><a >SendPV</a></li>\n                            </ul>\n                    </li>\n                    </ul>\n\n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Analytics <span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Calculate PV</a></li>\n                      <li class=\"dropdown-submenu\"><a class=\"test\">CalculateRisk <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a >Delta</a></li>\n                                <li><a >Gamma</a></li>\n                                <li><a >Vega</a></li>\n                                <li><a >Theta</a></li>\n                        </ul>\n                    </li>\n                      <li><a href=\"#\">Calculate PAA</a></li>\n                      <li><a href=\"#\">CashFlowReport</a></li>\n                      </ul>\n                      \n                      <li class=\"box\">\n                          &nbsp;\n                          <label style=\"color:honeydew;color:black\">Market:</label>&nbsp;\n                          <select>\n                            <option>Live</option>\n                            <option>End Of Day</option>\n                            <option>Historic</option>\n                          </select>&nbsp;&nbsp;\n                          <label style=\"color:honeydew;color:black\">Today:</label>&nbsp;\n                         <input type=\"date\">\n                        </li>\n                    \n           </ul>\n           \n        </div>\n    </nav>\n  \n\n\n\n  <div class=\"container\">\n \n    <div class=\"form-group col-sm-6\">\n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Version</label>\n               <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n        </div>\n              <div class=\"clearfix\"></div>\n\n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Product Class</label>\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"form-group col-sm-12\">\n          <label class=\"control-label\" id=\"fname\">Tenor</label>\n             <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"form-group col-sm-12\">\n          <label class=\"control-label\" id=\"fname\">Effective Date</label>\n             <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n        </div>\n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Trader</label>\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n          </div>\n          <div class=\"form-group col-sm-12\">\n              <label class=\"control-label\" id=\"fname\">Firm Account</label>\n              <select class=\"form-control\">\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                  <option></option>\n                </select>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"control-label\" id=\"fname\">Customer Account</label>\n                <select class=\"form-control\">\n                    <option></option>\n                    <option></option>\n                    <option></option>\n                    <option></option>\n                  </select>\n              </div>\n              <div class=\"form-group col-sm-12\">\n                  <label class=\"control-label\" id=\"fname\">Broker Account</label>\n                  <select class=\"form-control\">\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                      <option></option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label\" id=\"fname\">Legal Entity</label>\n                    <select class=\"form-control\">\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                        <option></option>\n                      </select>\n                  </div>\n                  <div class=\"form-group col-sm-12\">\n                      <label class=\"control-label\" id=\"fname\">External System</label>\n                      <select class=\"form-control\">\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                          <option></option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-sm-12\">\n                        <label class=\"control-label\" id=\"fname\">External Ref</label>\n                        <select class=\"form-control\">\n                            <option></option>\n                            <option></option>\n                            <option></option>\n                            <option></option>\n                          </select>\n                      </div>\n                      <div class=\"form-group col-sm-12\">\n                          <label class=\"control-label\" id=\"fname\">Sub Type</label>\n                          <select class=\"form-control\">\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                              <option></option>\n                            </select>\n                     </div>\n                     <div class=\"clearfix\"></div>\n      </div>\n\n      <div class=\"container\">\n      <div class=\"form-group col-sm-6\">\n        \n        <div class=\"form-group col-sm-12\">\n            <label class=\"control-label\" id=\"fname\">Location</label>\n            <select class=\"form-control\">\n                <option></option>\n                <option></option>\n                <option></option>\n                <option></option>\n              </select>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"form-group col-sm-12\">\n             <label class=\"control-label\" id=\"fname\">Trade Date</label>\n                <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n           </div>\n           <div class=\"clearfix\"></div>\n           <div class=\"form-group col-sm-12\">\n               <label class=\"control-label\" id=\"fname\">Termination Date</label>\n                  <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n             </div>\n             <div class=\"clearfix\"></div>\n             <div class=\"form-group col-sm-12\">\n                 <label class=\"control-label\" id=\"fname\">Sales Person</label>\n                 <select class=\"form-control\">\n                     <option></option>\n                     <option></option>\n                     <option></option>\n                     <option></option>\n                   </select>\n               </div>\n               <div class=\"clearfix\"></div>\n               <div class=\"form-group col-sm-12\">\n                   <label class=\"control-label\" id=\"fname\">Trade Type</label>\n                   <select class=\"form-control\">\n                       <option></option>\n                       <option></option>\n                       <option></option>\n                       <option></option>\n                     </select>\n                 </div>\n                 <div class=\"clearfix\"></div>\n                 <div class=\"form-group col-sm-12\">\n                     <label class=\"control-label\" id=\"fname\">Risk Party A</label>\n                     <select class=\"form-control\">\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                       </select>\n                   </div>\n                   <div class=\"clearfix\"></div>\n                   <div class=\"form-group col-sm-12\">\n                       <label class=\"control-label\" id=\"fname\">Long Name</label>\n                          <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                     </div>\n                     <div class=\"clearfix\"></div>\n                     <div class=\"form-group col-sm-12\">\n                         <label class=\"control-label\" id=\"fname\">Early Term Date</label>\n                            <input type=\"date\" class=\"form-control\" id=\"fname\" placeholder=\"\">\n                       </div>\n                       <div class=\"clearfix\"></div>\n                 <div class=\"form-group col-sm-12\">\n                     <label class=\"control-label\" id=\"fname\">Early Term Reason</label>\n                     <select class=\"form-control\">\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                       </select>\n                   </div>\n                   <div class=\"clearfix\"></div>\n                 <div class=\"form-group col-sm-12\">\n                     <label class=\"control-label\" id=\"fname\">Mod Reason</label>\n                     <select class=\"form-control\">\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                         <option></option>\n                       </select>\n                   </div>\n                   \n                   <div class=\"clearfix\"></div>\n                   <div class=\"form-group col-sm-12\">\n                       <label for=\"exampleFormControlTextarea1\">Comments</label>\n                       <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\n                   </div>   \n                  </div>\n                </div>              \n              <div class=\"clearfix\"></div>\n              <br>\n              \n         \n<div class=\"col-sm-10\">\n  <div class=\"sec\">\n      <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n            <ul type=\"none\">\n              <li class=\"items\">\n                  <a [routerLink]=\"['./additional']\" routerLinkActive=\"active\">AdditionalFields</a>\n                  <a [routerLink]=\"['./fees']\" routerLinkActive=\"active\">Fees</a>\n                  <a [routerLink]=\"['./sales']\" routerLinkActive=\"active\">Sales Credit</a>\n                  <a [routerLink]=\"['./margin']\" routerLinkActive=\"active\">Margin</a>\n                  <a [routerLink]=\"['./assignment']\" routerLinkActive=\"active\">Assignment</a>\n                  <a [routerLink]=\"['./partial']\" routerLinkActive=\"active\">PartialAssignment</a>\n              </li>\n            </ul>\n\n\n          </div>\n        </nav>\n  </div>\n <br><br>\n</div>\n\n\n\n\n        </div>\n        <router-outlet></router-outlet>\n        </div>\n        \n\n\n \n \n\n\n"

/***/ }),

/***/ "./src/app/trade-basic/trade-basic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/trade-basic/trade-basic.component.ts ***!
  \******************************************************/
/*! exports provided: TradeBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeBasicComponent", function() { return TradeBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TradeBasicComponent = /** @class */ (function () {
    function TradeBasicComponent() {
    }
    TradeBasicComponent.prototype.ngOnInit = function () {
    };
    TradeBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade-basic',
            template: __webpack_require__(/*! ./trade-basic.component.html */ "./src/app/trade-basic/trade-basic.component.html"),
            styles: [__webpack_require__(/*! ./trade-basic.component.css */ "./src/app/trade-basic/trade-basic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TradeBasicComponent);
    return TradeBasicComponent;
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

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\DERIVATIVES\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map