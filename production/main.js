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

/***/ "./src/app/Menu-Options/Menu-Options.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Menu-Options/Menu-Options.component.ts ***!
  \********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Menu_Options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu-Options.service */ "./src/app/Menu-Options/Menu-Options.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Menu_Options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu-Options.model */ "./src/app/Menu-Options/Menu-Options.model.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(ngxXml2jsonService, MenuOptionsService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.MenuOptionsService = MenuOptionsService;
        this.model = model;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MenuOptionsService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.MenuOptions.LoginName;
            _this.model.txtFirstName = _this.obj.MenuOptions.FirstName;
            _this.model.txtLastName = _this.obj.MenuOptions.LastName;
            _this.model.cmbBusiness = _this.obj.MenuOptions.Business;
            _this.model.cmbDepartment = [_this.obj.MenuOptions.Department.dep1,
                _this.obj.MenuOptions.Department.dep2,
                _this.obj.MenuOptions.Department.dep3,
                _this.obj.MenuOptions.Department.dep4];
            _this.model.cmbRole = _this.obj.MenuOptions.Role;
            _this.model.txtLastModified = _this.obj.MenuOptions.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.MenuOptions.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.MenuOptions.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.MenuOptions.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu-options',
            template: __webpack_require__(/*! ./menu-options.component.html */ "./src/app/Menu-Options/menu-options.component.html"),
            styles: [__webpack_require__(/*! ./menu-options.component.css */ "./src/app/Menu-Options/menu-options.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Menu_Options_service__WEBPACK_IMPORTED_MODULE_1__["MenuOptionsService"],
            _Menu_Options_model__WEBPACK_IMPORTED_MODULE_4__["MenuOptionsModel"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/Menu-Options/Menu-Options.model.ts":
/*!****************************************************!*\
  !*** ./src/app/Menu-Options/Menu-Options.model.ts ***!
  \****************************************************/
/*! exports provided: MenuOptionsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptionsModel", function() { return MenuOptionsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuOptionsModel = /** @class */ (function () {
    function MenuOptionsModel() {
    }
    MenuOptionsModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MenuOptionsModel);
    return MenuOptionsModel;
}());



/***/ }),

/***/ "./src/app/Menu-Options/Menu-Options.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Menu-Options/Menu-Options.service.ts ***!
  \******************************************************/
/*! exports provided: MenuOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptionsService", function() { return MenuOptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MenuOptionsService = /** @class */ (function () {
    function MenuOptionsService(_http) {
        this._http = _http;
        this._url = './assets/Menu-Options.xml';
    }
    MenuOptionsService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    MenuOptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuOptionsService);
    return MenuOptionsService;
}());



/***/ }),

/***/ "./src/app/Menu-Options/menu-options.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Menu-Options/menu-options.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n}\r\n.check2 {\r\n  width: 800px;\r\n  height: 300px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight:500;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS1PcHRpb25zL21lbnUtb3B0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixjQUFjOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL01lbnUtT3B0aW9ucy9tZW51LW9wdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5uYXZiYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLmNoZWNrMSB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7ICBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLmNoZWNrMiB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7ICBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOjEwMDA7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Menu-Options/menu-options.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Menu-Options/menu-options.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n                <div class=\"col-sm-2\">\n                                <div><label>Login Name</label> </div><br><br><br>\n                                <div><label>First Name</label></div><br><br>\n                                <div><label>Business</label></div><br><br>\n                                <div><label>Last Modified</label></div><br><br><br><br>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <div name=\"Login Name\">\n                                        <select class=\"form-control\">\n                                                <option>{{model.txtLoginName}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\n                                <div  name=\"Business\"><select class=\"form-control\">\n                                                <option>{{model.cmbBusiness}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModified}}></div>\n                                <br><br><br>\n                        </div>\n                \n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Last Name</label> </div><br><br>\n                                <div><label>Department</label></div><br><br>\n                                <div><label>Last VerifiedBy</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\n                                <div input name=\"Department\"><select class=\"form-control\">\n                                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Role</label> </div><br><br>\n                                <div><label>Last ModifiedBy</label></div><br><br>\n                                <div><label>Last Verified</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div> <select class=\"form-control\">\n                                                <option>{{model.cmbRole}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\n                                <br><br>\n                                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\n                        </div>\n   <div class=\"clearfix\"></div>\n   <div class=\"col-sm-2\"><label>Current Access</label></div>\n   <div class=\"check1 col-sm-10\">\n\n   </div>\n   <div class=\"clearfix\"></div>\n   <br><br>\n   <div class=\"col-sm-2\"><br><br><br><button>Add</button></div>\n   <div class=\"check2 col-sm-10\">\n </div>\n</div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/UserEntitlement/UserEntitlement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/UserEntitlement/UserEntitlement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckVudGl0bGVtZW50L1VzZXJFbnRpdGxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9Vc2VyRW50aXRsZW1lbnQvVXNlckVudGl0bGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/UserEntitlement/UserEntitlement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/UserEntitlement/UserEntitlement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n  <div class=\"col-sm-2\">\n    <div class=\"left-nav sidebar\">\n      <ul>\n        <li><br>\n          <a [routerLink]=\"['./Profile-Add']\" routerLinkActive=\"active\">Profile-Add</a>\n          <a [routerLink]=\"['./Profile-Modify']\" routerLinkActive=\"active\">Profile-Modify</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-10\">\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li> <a [routerLink]=\"['./Firm-Account']\" routerLinkActive=\"active\">FirmAccount</a></li>\n          <li> <a [routerLink]=\"['./Customer-Account']\" routerLinkActive=\"active\">CustomerAccount</a></li>\n          <li> <a [routerLink]=\"['./Product']\" routerLinkActive=\"active\">Product</a></li>\n          <li> <a [routerLink]=\"['./Location']\" routerLinkActive=\"active\">Location</a></li>\n          <li> <a [routerLink]=\"['./Menu-Options']\" routerLinkActive=\"active\">MenuOptions</a></li>\n          <li> <a [routerLink]=\"['./Legal-Entity']\" routerLinkActive=\"active\">LegalEntity</a></li>\n        </ul>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/UserEntitlement/UserEntitlement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/UserEntitlement/UserEntitlement.component.ts ***!
  \**************************************************************/
/*! exports provided: UserEntitlementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntitlementComponent", function() { return UserEntitlementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserEntitlementComponent = /** @class */ (function () {
    function UserEntitlementComponent() {
    }
    UserEntitlementComponent.prototype.ngOnInit = function () {
    };
    UserEntitlementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-UserEntitlement',
            template: __webpack_require__(/*! ./UserEntitlement.component.html */ "./src/app/UserEntitlement/UserEntitlement.component.html"),
            styles: [__webpack_require__(/*! ./UserEntitlement.component.css */ "./src/app/UserEntitlement/UserEntitlement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserEntitlementComponent);
    return UserEntitlementComponent;
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
/* harmony import */ var _Menu_Options_Menu_Options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu-Options/Menu-Options.component */ "./src/app/Menu-Options/Menu-Options.component.ts");
/* harmony import */ var _UserEntitlement_UserEntitlement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEntitlement/UserEntitlement.component */ "./src/app/UserEntitlement/UserEntitlement.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_add_profile_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-add/profile-add.component */ "./src/app/profile-add/profile-add.component.ts");
/* harmony import */ var _profile_modify_profile_modify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-modify/profile-modify.component */ "./src/app/profile-modify/profile-modify.component.ts");
/* harmony import */ var _firm_account_firm_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firm-account/firm-account.component */ "./src/app/firm-account/firm-account.component.ts");
/* harmony import */ var _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-account/customer-account.component */ "./src/app/customer-account/customer-account.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _legal_entity_legal_entity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./legal-entity/legal-entity.component */ "./src/app/legal-entity/legal-entity.component.ts");












var routes = [
    { path: 'UserEntitlement', component: _UserEntitlement_UserEntitlement_component__WEBPACK_IMPORTED_MODULE_2__["UserEntitlementComponent"],
        children: [
            { path: 'Profile-Add', component: _profile_add_profile_add_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAddComponent"] },
            { path: 'Profile-Modify', component: _profile_modify_profile_modify_component__WEBPACK_IMPORTED_MODULE_6__["ProfileModifyComponent"] },
            { path: 'Firm-Account', component: _firm_account_firm_account_component__WEBPACK_IMPORTED_MODULE_7__["FirmAccountComponent"] },
            { path: 'Customer-Account', component: _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_8__["CustomerAccountComponent"] },
            { path: 'Product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
            { path: 'Location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"] },
            { path: 'Menu-Options', component: _Menu_Options_Menu_Options_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] },
            { path: 'Legal-Entity', component: _legal_entity_legal_entity_component__WEBPACK_IMPORTED_MODULE_11__["LegalEntityComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_UserEntitlement_UserEntitlement_component__WEBPACK_IMPORTED_MODULE_2__["UserEntitlementComponent"], _profile_add_profile_add_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAddComponent"], _profile_modify_profile_modify_component__WEBPACK_IMPORTED_MODULE_6__["ProfileModifyComponent"], _firm_account_firm_account_component__WEBPACK_IMPORTED_MODULE_7__["FirmAccountComponent"], _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_8__["CustomerAccountComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"], _Menu_Options_Menu_Options_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _legal_entity_legal_entity_component__WEBPACK_IMPORTED_MODULE_11__["LegalEntityComponent"]];


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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Derivatives Connect</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">OTC Products <span\n            class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n\n          <li><a href=\"#\">Swap Ticket</a></li>\n          <li><a href=\"#\">Swap Option</a></li>\n          <li><a href=\"#\">Cap Floor</a></li>\n          <li><a href=\"#\">FRA</a></li>\n          <li><a href=\"#\">Bond</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">ET Products <span\n            class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Bond Future</a></li>\n          <li><a href=\"#\">Bond Future Option</a></li>\n          <li><a href=\"#\">MM Future</a></li>\n          <li><a href=\"#\">MM Future Option</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Asset Blotter <span\n            class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">IRD Blotter</a></li>\n          <li><a href=\"#\">CRD Blotter</a></li>\n          <li><a href=\"#\">FX Blotter</a></li>\n          <li><a href=\"#\">EQ Blotter</a></li>\n          <li><a href=\"#\">CASH Blotter</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Risk Dash Board <span\n            class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Page 1-1</a></li>\n          <li><a href=\"#\">Page 1-2</a></li>\n          <li><a href=\"#\">Page 1-3</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Ref Data<span\n            class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Broker</a></li>\n          <li><a href=\"#\">Country</a></li>\n          <li><a href=\"#\">Currency</a></li>\n          <li><a href=\"#\">Curve</a></li>\n          <li><a href=\"#\">Customer Account </a></li>\n          <li><a href=\"#\">Exchanges</a></li>\n          <li><a href=\"#\">Firm Account</a></li>\n          <li><a href=\"#\">Traders</a></li>\n          <li><a href=\"#\">Instruments</a></li>\n          <li><a href=\"#\">Legal Entity</a></li>\n        </ul>\n      </li>\n      <li ><a  routerLink=\"UserEntitlement\">User Entitlements </a>\n        \n    </li>\n\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>"

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
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _UserEntitlement_UserEntitlement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserEntitlement/UserEntitlement.component */ "./src/app/UserEntitlement/UserEntitlement.component.ts");
/* harmony import */ var _profile_add_profile_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-add/profile-add.component */ "./src/app/profile-add/profile-add.component.ts");
/* harmony import */ var _profile_modify_profile_modify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-modify/profile-modify.component */ "./src/app/profile-modify/profile-modify.component.ts");
/* harmony import */ var _firm_account_firm_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firm-account/firm-account.component */ "./src/app/firm-account/firm-account.component.ts");
/* harmony import */ var _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-account/customer-account.component */ "./src/app/customer-account/customer-account.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _Menu_Options_Menu_Options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Menu-Options/Menu-Options.component */ "./src/app/Menu-Options/Menu-Options.component.ts");
/* harmony import */ var _legal_entity_legal_entity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./legal-entity/legal-entity.component */ "./src/app/legal-entity/legal-entity.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _UserEntitlement_UserEntitlement_component__WEBPACK_IMPORTED_MODULE_6__["UserEntitlementComponent"],
                _profile_add_profile_add_component__WEBPACK_IMPORTED_MODULE_7__["ProfileAddComponent"],
                _profile_modify_profile_modify_component__WEBPACK_IMPORTED_MODULE_8__["ProfileModifyComponent"],
                _firm_account_firm_account_component__WEBPACK_IMPORTED_MODULE_9__["FirmAccountComponent"],
                _customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_10__["CustomerAccountComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_12__["LocationComponent"],
                _Menu_Options_Menu_Options_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _legal_entity_legal_entity_component__WEBPACK_IMPORTED_MODULE_14__["LegalEntityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-account/Customer-Account.model.ts":
/*!************************************************************!*\
  !*** ./src/app/customer-account/Customer-Account.model.ts ***!
  \************************************************************/
/*! exports provided: CustomerAccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAccountModel", function() { return CustomerAccountModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerAccountModel = /** @class */ (function () {
    function CustomerAccountModel() {
    }
    CustomerAccountModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], CustomerAccountModel);
    return CustomerAccountModel;
}());



/***/ }),

/***/ "./src/app/customer-account/Customer-Account.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-account/Customer-Account.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomerAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAccountService", function() { return CustomerAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CustomerAccountService = /** @class */ (function () {
    function CustomerAccountService(_http) {
        this._http = _http;
        this._url = './assets/Customer-Account.xml';
    }
    CustomerAccountService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    CustomerAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerAccountService);
    return CustomerAccountService;
}());



/***/ }),

/***/ "./src/app/customer-account/customer-account.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-account/customer-account.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\n.check2 {\r\n  width: 900px;\r\n  height: 500px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItYWNjb3VudC9jdXN0b21lci1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFjY291bnQvY3VzdG9tZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLm5hdmJhcntcclxuICBtYXJnaW4tbGVmdDotMzBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG4uY2hlY2sxIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2hlY2syIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5idXR0b257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZToxMDAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer-account/customer-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-account/customer-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\r\n                <div class=\"col-sm-2\">\r\n                                <div><label>Login Name</label> </div><br><br><br>\r\n                                <div><label>First Name</label></div><br><br>\r\n                                <div><label>Business</label></div><br><br>\r\n                                <div><label>Last Modified</label></div><br><br><br><br>\r\n                \r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                                <div name=\"Login Name\">\r\n                                        <select class=\"form-control\">\r\n                                                <option>{{model.txtLoginName}}</option>\r\n                                        </select></div><br><br>\r\n                                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\r\n                                <div  name=\"Business\"><select class=\"form-control\">\r\n                                                <option>{{model.cmbBusiness}}</option>\r\n                                        </select></div><br><br>\r\n                                <div><input   type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModified}}></div>\r\n                                        <br><br><br>\r\n                        </div>\r\n                \r\n                        <div class=\"col-sm-2\">\r\n                                <br><br><br><br>\r\n                                <div><label>Last Name</label> </div><br><br>\r\n                                <div><label>Department</label></div><br><br>\r\n                                <div><label>Last VerifiedBy</label></div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                                <br><br><br>\r\n                                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\r\n                                <div input name=\"Department\"><select class=\"form-control\">\r\n                                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\r\n                                        </select></div><br><br>\r\n                                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\r\n                \r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                                <br><br><br><br>\r\n                                <div><label>Role</label> </div><br><br>\r\n                                <div><label>Last ModifiedBy</label></div><br><br>\r\n                                <div><label>Last Verified</label></div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                                <br><br><br>\r\n                                <div> <select class=\"form-control\">\r\n                                                <option>{{model.cmbRole}}</option>\r\n                                        </select></div><br><br>\r\n                                        \r\n                                <div><input  type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\r\n                                <br><br>\r\n                                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\r\n                        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-sm-2\"><br><br><label>Current Access</label></div>\r\n        <div class=\"check1 col-sm-10\">\r\n                <input type=\"checkbox\"> ABBSBKWN<br>\r\n                <input type=\"checkbox\"> ABSABKASA<br>\r\n                <input type=\"checkbox\"> ALTBRCA<br>\r\n\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <br><br>\r\n        <div class=\"col-sm-2\"><br><br><br><button>Add</button></div>\r\n        <div class=\"check2 col-sm-10\">\r\n                <div class=\"one col-sm-2\">\r\n                        <input type=\"checkbox\"> ALL<br>\r\n                        <input type=\"checkbox\"> AABPK<br>\r\n                        <input type=\"checkbox\"> ABBNAUK<br>\r\n                        <input type=\"checkbox\"> ANHYPBEL<br>\r\n                        <input type=\"checkbox\"> ASBBKNZ<br>\r\n                        <input type=\"checkbox\"> BANCDERP<br>\r\n                        <input type=\"checkbox\"> BANKOFAM<br>\r\n                        <input type=\"checkbox\"> BANKOFCO<br>\r\n                        <input type=\"checkbox\"> BANKOFNYL<br>\r\n                        <input type=\"checkbox\"> BANKOFSCO<br>\r\n                        <input type=\"checkbox\"> BANKOFWC<br>\r\n                        <input type=\"checkbox\"> BARCBKNYK<br>\r\n                        <input type=\"checkbox\"> BILBINTLUX<br>\r\n                        <input type=\"checkbox\"> BKCHINANY<br>\r\n                        <input type=\"checkbox\"> BKEASTASI<br>\r\n                        <input type=\"checkbox\"> BKENGLAN<br>\r\n                        <input type=\"checkbox\"> BKJAPANTO<br>\r\n                        <input type=\"checkbox\"> BKMONTTO<br>\r\n                        <input type=\"checkbox\"> BKSBKKSTA<br>\r\n                </div>\r\n                <div class=\"two col-sm-2\">\r\n\r\n                        <input type=\"checkbox\"> BNABANKKE<br>\r\n                        <input type=\"checkbox\"> BONYEULD<br>\r\n                        <input type=\"checkbox\"> BRUBKWV<br>\r\n                        <input type=\"checkbox\"> BUSDEVBKC<br>\r\n                        <input type=\"checkbox\"> CAAMBKJOR<br>\r\n                        <input type=\"checkbox\"> CENBKREPI<br>\r\n                        <input type=\"checkbox\"> CENNABKKA<br>\r\n                        <input type=\"checkbox\"> CHARWEST<br>\r\n                        <input type=\"checkbox\"> CHASELDN<br>\r\n                        <input type=\"checkbox\"> CHEGLUK<br>\r\n                        <input type=\"checkbox\"> CHOHBKLTS<br>\r\n                        <input type=\"checkbox\"> CITZBKALU<br>\r\n                        <input type=\"checkbox\"> CITZBKCA<br>\r\n                        <input type=\"checkbox\"> CITZBKTCA<br>\r\n                        <input type=\"checkbox\"> COBANPEBE<br>\r\n                        <input type=\"checkbox\"> COMMBKGE<br>\r\n                        <input type=\"checkbox\"> COMMBKKW<br>\r\n                        <input type=\"checkbox\"> CRDTAGLFR<br>\r\n                        <input type=\"checkbox\"> DAHSBKHK<br>\r\n                </div>\r\n                <div class=\"three col-sm-2\">\r\n\r\n\r\n                        <input type=\"checkbox\"> DAICHIKBKC<br>\r\n                        <input type=\"checkbox\"> DANBKDMK<br>\r\n                        <input type=\"checkbox\"> DANSKEBK<br>\r\n                        <input type=\"checkbox\"> DEFORMOR<br>\r\n                        <input type=\"checkbox\"> DISCURREX<br>\r\n                        <input type=\"checkbox\"> EIBKUS<br>\r\n                        <input type=\"checkbox\"> EVGBKWTO<br>\r\n                        <input type=\"checkbox\"> FACTPNABK<br>\r\n                        <input type=\"checkbox\"> FARMERBK<br>\r\n                        <input type=\"checkbox\"> FCOMMBAN<br>\r\n                        <input type=\"checkbox\"> FEDRBKSFS<br>\r\n                        <input type=\"checkbox\"> FFINVLOAN<br>\r\n                        <input type=\"checkbox\"> FORBKLUXR<br>\r\n                        <input type=\"checkbox\"> GLSBWIS<br>\r\n                        <input type=\"checkbox\"> HKBKCA<br>\r\n                        <input type=\"checkbox\"> HNABKARK<br>\r\n                        <input type=\"checkbox\"> HSBANKHK<br>\r\n                        <input type=\"checkbox\"> ICICIBKIND<br>\r\n                        <input type=\"checkbox\"> INDEVECOR<br>\r\n                </div>\r\n                <div class=\"four col-sm-2\">\r\n\r\n\r\n\r\n                        <input type=\"checkbox\"> INGBKNL<br>\r\n                        <input type=\"checkbox\"> INTERCOM<br>\r\n                        <input type=\"checkbox\"> INTNALBKA<br>\r\n                        <input type=\"checkbox\"> KMBKCORP<br>\r\n                        <input type=\"checkbox\"> KVSBKNOR<br>\r\n                        <input type=\"checkbox\"> LANSBKDM<br>\r\n                        <input type=\"checkbox\"> LOSANATBK<br>\r\n                        <input type=\"checkbox\"> MCOMMBKP<br>\r\n                        <input type=\"checkbox\"> MERFARBK<br>\r\n                        <input type=\"checkbox\"> NATAUSBK<br>\r\n                        <input type=\"checkbox\"> NATBKNZ<br>\r\n                        <input type=\"checkbox\"> NATCOMBK<br>\r\n                        <input type=\"checkbox\"> OVERSEAS<br>\r\n                        <input type=\"checkbox\"> PBKNORTH<br>\r\n                        <input type=\"checkbox\">PCOMMBKL <br>\r\n                        <input type=\"checkbox\"> PJBNATBKI<br>\r\n\r\n                        <input type=\"checkbox\"> PNCBKUS<br>\r\n                        <input type=\"checkbox\"> RABOBKLD<br>\r\n                        <input type=\"checkbox\"> RABOBKNL<br>\r\n                </div>\r\n                <div class=\"five col-sm-2\">\r\n\r\n                        <input type=\"checkbox\"> RBANKOFIN<br>\r\n                        <input type=\"checkbox\"> RBFGCA<br>\r\n                        <input type=\"checkbox\"> RBSNY<br>\r\n                        <input type=\"checkbox\"> RMBKSA<br>\r\n                        <input type=\"checkbox\"> RPNATBKN<br>\r\n                        <input type=\"checkbox\"> SAMBKSL<br>\r\n                        <input type=\"checkbox\"> SBCNYK<br>\r\n                        <input type=\"checkbox\"> SBI<br>\r\n                        <input type=\"checkbox\"> SBKBERMAL<br>\r\n                        <input type=\"checkbox\"> SCOMMBKT<br>\r\n                        <input type=\"checkbox\"> SSBKMASTS<br>\r\n                        <input type=\"checkbox\"> TBANKIND<br>\r\n                        <input type=\"checkbox\"> TSTDBKGSA<br>\r\n                        <input type=\"checkbox\"> UBSBAS<br>\r\n                        <input type=\"checkbox\"> UBSGVA<br>\r\n                        <input type=\"checkbox\"> UBSLAU<br>\r\n                        <input type=\"checkbox\"> UBSLDN<br>\r\n                        <input type=\"checkbox\"> UBSLUG<br>\r\n                        <input type=\"checkbox\"> UBSNYK<br>\r\n                </div>\r\n                <div class=\"six col-sm-2\">\r\n\r\n                        <input type=\"checkbox\"> UBSTOK<br>\r\n                        <input type=\"checkbox\"> UBSWIN<br>\r\n                        <input type=\"checkbox\"> UBSZUR<br>\r\n                        <input type=\"checkbox\"> UFBPAR<br>\r\n                        <input type=\"checkbox\"> ULSTERBKB<br>\r\n                        <input type=\"checkbox\"> ULSTERBKD<br>\r\n                        <input type=\"checkbox\"> UNATBKWV<br>\r\n                        <input type=\"checkbox\"> UNBKNORO<br>\r\n                        <input type=\"checkbox\"> UNIBKNYK<br>\r\n                        <input type=\"checkbox\"> UNIBKSZLD<br>\r\n                        <input type=\"checkbox\"> WEFTBKHK<br>\r\n                        <input type=\"checkbox\"> WESTTRUN<br>\r\n                        <input type=\"checkbox\"> WTONSBKW<br>\r\n                        <input type=\"checkbox\"> ZLAENDERB<br>\r\n                        <input type=\"checkbox\"> ZLAENDERV<br>\r\n\r\n\r\n\r\n                </div>\r\n\r\n        </div>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/customer-account/customer-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-account/customer-account.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAccountComponent", function() { return CustomerAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Customer_Account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customer-Account.service */ "./src/app/customer-account/Customer-Account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Customer_Account_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customer-Account.model */ "./src/app/customer-account/Customer-Account.model.ts");





var CustomerAccountComponent = /** @class */ (function () {
    function CustomerAccountComponent(ngxXml2jsonService, CustomerAccountService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.CustomerAccountService = CustomerAccountService;
        this.model = model;
    }
    CustomerAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CustomerAccountService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.CustomerAccount.LoginName;
            _this.model.txtFirstName = _this.obj.CustomerAccount.FirstName;
            _this.model.txtLastName = _this.obj.CustomerAccount.LastName;
            _this.model.cmbBusiness = _this.obj.CustomerAccount.Business;
            _this.model.cmbDepartment = [_this.obj.CustomerAccount.Department.dep1,
                _this.obj.CustomerAccount.Department.dep2,
                _this.obj.CustomerAccount.Department.dep3,
                _this.obj.CustomerAccount.Department.dep4];
            _this.model.cmbRole = _this.obj.CustomerAccount.Role;
            _this.model.txtLastModified = _this.obj.CustomerAccount.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.CustomerAccount.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.CustomerAccount.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.CustomerAccount.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    CustomerAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-customer-account',
            template: __webpack_require__(/*! ./customer-account.component.html */ "./src/app/customer-account/customer-account.component.html"),
            styles: [__webpack_require__(/*! ./customer-account.component.css */ "./src/app/customer-account/customer-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Customer_Account_service__WEBPACK_IMPORTED_MODULE_1__["CustomerAccountService"],
            _Customer_Account_model__WEBPACK_IMPORTED_MODULE_4__["CustomerAccountModel"]])
    ], CustomerAccountComponent);
    return CustomerAccountComponent;
}());



/***/ }),

/***/ "./src/app/firm-account/Firm-Account.model.ts":
/*!****************************************************!*\
  !*** ./src/app/firm-account/Firm-Account.model.ts ***!
  \****************************************************/
/*! exports provided: FirmAccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmAccountModel", function() { return FirmAccountModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirmAccountModel = /** @class */ (function () {
    function FirmAccountModel() {
    }
    FirmAccountModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], FirmAccountModel);
    return FirmAccountModel;
}());



/***/ }),

/***/ "./src/app/firm-account/Firm-Account.service.ts":
/*!******************************************************!*\
  !*** ./src/app/firm-account/Firm-Account.service.ts ***!
  \******************************************************/
/*! exports provided: FirmAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmAccountService", function() { return FirmAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FirmAccountService = /** @class */ (function () {
    function FirmAccountService(_http) {
        this._http = _http;
        this._url = './assets/Firm-Account.xml';
    }
    FirmAccountService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    FirmAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FirmAccountService);
    return FirmAccountService;
}());



/***/ }),

/***/ "./src/app/firm-account/firm-account.component.css":
/*!*********************************************************!*\
  !*** ./src/app/firm-account/firm-account.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n  \r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\n.check2 {\r\n  width: 900px;\r\n  height: 400px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlybS1hY2NvdW50L2Zpcm0tYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmlybS1hY2NvdW50L2Zpcm0tYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLm5hdmJhcntcclxuICBtYXJnaW4tbGVmdDotMzBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxuICBcclxufVxyXG4uY2hlY2sxIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2hlY2syIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5idXR0b257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZToxMDAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/firm-account/firm-account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/firm-account/firm-account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\r\n        <div class=\"col-sm-2\">\r\n                <div><label>Login Name</label> </div><br><br><br>\r\n                <div><label>First Name</label></div><br><br>\r\n                <div><label>Business</label></div><br><br>\r\n                <div><label>Last Modified</label></div><br><br><br><br>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n                <div name=\"Login Name\">\r\n                        <select class=\"form-control\">\r\n                                <option>{{model.txtLoginName}}</option>\r\n                        </select></div><br><br>\r\n                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\r\n                <div  name=\"Business\"><select class=\"form-control\">\r\n                                <option>{{model.cmbBusiness}}</option>\r\n                        </select></div><br><br>\r\n                <div><input type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModified}}></div>\r\n                <br><br><br>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n                <br><br><br><br>\r\n                <div><label>Last Name</label> </div><br><br>\r\n                <div><label>Department</label></div><br><br>\r\n                <div><label>Last VerifiedBy</label></div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n                <br><br><br>\r\n                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\r\n                <div input name=\"Department\"><select class=\"form-control\">\r\n                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\r\n                        </select></div><br><br>\r\n                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n                <br><br><br><br>\r\n                <div><label>Role</label> </div><br><br>\r\n                <div><label>Last ModifiedBy</label></div><br><br>\r\n                <div><label>Last Verified</label></div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n                <br><br><br>\r\n                <div> <select class=\"form-control\">\r\n                                <option>{{model.cmbRole}}</option>\r\n                        </select></div><br><br>\r\n                <div><input type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\r\n                <br><br>\r\n                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-sm-2\"><br><br><label>Current Access</label></div>\r\n        <div class=\"check1 col-sm-10\">\r\n                <input type=\"checkbox\"> IRSWPAED<br>\r\n                <input type=\"checkbox\"> IRSWPALL<br>\r\n                <input type=\"checkbox\"> IRSWPATS<br>\r\n                <input type=\"checkbox\"> IRSWPAUD<br>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <br><br>\r\n        <div class=\"col-sm-2\"><br><br><br><button>Add</button></div>\r\n        <div class=\"check2 col-sm-10\">\r\n                <div class=\"one col-sm-2\">\r\n                        <input type=\"checkbox\"> ALL<br>\r\n                        <input type=\"checkbox\"> IRSWPBDT<br>\r\n                        <input type=\"checkbox\"> IRSWPBEF<br>\r\n                        <input type=\"checkbox\"> IRSWPBGN<br>\r\n                        <input type=\"checkbox\"> IRSWPBHD<br>\r\n                        <input type=\"checkbox\"> IRSWPBRL<br>\r\n                        <input type=\"checkbox\"> IRSWPBWP<br>\r\n                        <input type=\"checkbox\"> IRSWPCAD<br>\r\n                        <input type=\"checkbox\"> IRSWPCHF<br>\r\n                        <input type=\"checkbox\"> IRSWPCLP<br>\r\n                        <input type=\"checkbox\"> IRSWPCNY<br>\r\n                        <input type=\"checkbox\"> IRSWPCOP<br>\r\n                        <input type=\"checkbox\"> IRSWPCPI<br>\r\n                        <input type=\"checkbox\"> IRSWPCUC<br>\r\n                        <input type=\"checkbox\"> IRSWPCUP<br>\r\n                        <input type=\"checkbox\"> IRSWPCZK<br>\r\n                </div>\r\n                <div class=\"two col-sm-2\">\r\n                        <input type=\"checkbox\"> IRSWPDEM<br>\r\n                        <input type=\"checkbox\"> IRSWPDKK<br>\r\n                        <input type=\"checkbox\"> IRSWPDZD<br>\r\n                        <input type=\"checkbox\"> IRSWPEGP<br>\r\n                        <input type=\"checkbox\"> IRSWPERI<br>\r\n                        <input type=\"checkbox\"> IRSWPESB<br>\r\n                        <input type=\"checkbox\"> IRSWPESP<br>\r\n                        <input type=\"checkbox\"> IRSWPETB<br>\r\n                        <input type=\"checkbox\"> IRSWPEUR<br>\r\n                        <input type=\"checkbox\"> IRSWPFIM<br>\r\n                        <input type=\"checkbox\"> IRSWPFKP<br>\r\n                        <input type=\"checkbox\"> IRSWPFRF<br>\r\n                        <input type=\"checkbox\"> IRSWPGBP<br>\r\n                        <input type=\"checkbox\"> IRSWPGGD<br>\r\n                        <input type=\"checkbox\"> IRSWPGHS<br>\r\n                        <input type=\"checkbox\"> IRSWPGRD<br>\r\n                </div>\r\n                <div class=\"three col-sm-2\">\r\n                        <input type=\"checkbox\"> IRSWPGYD<br>\r\n                        <input type=\"checkbox\"> IRSWPHKD<br>\r\n                        <input type=\"checkbox\"> IRSWPHNL<br>\r\n                        <input type=\"checkbox\"> IRSWPHUF<br>\r\n                        <input type=\"checkbox\"> IRSWPIDR<br>\r\n                        <input type=\"checkbox\"> IRSWPIEP<br>\r\n                        <input type=\"checkbox\"> IRSWPILS<br>\r\n                        <input type=\"checkbox\"> IRSWPINR<br>\r\n                        <input type=\"checkbox\"> IRSWPIRR<br>\r\n                        <input type=\"checkbox\"> IRSWPISK<br>\r\n                        <input type=\"checkbox\"> IRSWPITL<br>\r\n                        <input type=\"checkbox\"> IRSWPJMD<br>\r\n                        <input type=\"checkbox\"> IRSWPJOD<br>\r\n                        <input type=\"checkbox\"> IRSWPJPY<br>\r\n                        <input type=\"checkbox\"> IRSWPKES<br>\r\n                        <input type=\"checkbox\"> IRSWPKGD<br>\r\n                </div>\r\n                <div class=\"four col-sm-2\">\r\n                        <input type=\"checkbox\"> IRSWPKGS<br>\r\n                        <input type=\"checkbox\"> IRSWPKHR<br>\r\n                        <input type=\"checkbox\"> IRSWPKRW<br>\r\n                        <input type=\"checkbox\"> IRSWPKWD<br>\r\n                        <input type=\"checkbox\"> IRSWPKZT<br>\r\n                        <input type=\"checkbox\"> IRSWPLKR<br>\r\n                        <input type=\"checkbox\"> IRSWPLRD<br>\r\n                        <input type=\"checkbox\"> IRSWPLYD<br>\r\n                        <input type=\"checkbox\"> IRSWPMXN<br>\r\n                        <input type=\"checkbox\"> IRSWPMYR<br>\r\n                        <input type=\"checkbox\"> IRSWPNGN<br>\r\n                        <input type=\"checkbox\"> IRSWPNLG<br>\r\n                        <input type=\"checkbox\"> IRSWPNOK<br>\r\n                        <input type=\"checkbox\"> IRSWPNPL<br>\r\n                        <input type=\"checkbox\"> IRSWPNTD<br>\r\n                        <input type=\"checkbox\"> IRSWPNZD<br>\r\n                </div>\r\n                <div class=\"five col-sm-2\">\r\n                        <input type=\"checkbox\"> IRSWPPHP<br>\r\n                        <input type=\"checkbox\"> IRSWPPKR<br>\r\n                        <input type=\"checkbox\"> IRSWPPLN<br>\r\n                        <input type=\"checkbox\"> IRSWPPTE<br>\r\n                        <input type=\"checkbox\"> IRSWPROL<br>\r\n                        <input type=\"checkbox\"> IRSWPRON<br>\r\n                        <input type=\"checkbox\"> IRSWPRUB<br>\r\n                        <input type=\"checkbox\"> IRSWPSAR<br>\r\n                        <input type=\"checkbox\"> IRSWPSBD<br>\r\n                        <input type=\"checkbox\"> IRSWPSCR<br>\r\n                        <input type=\"checkbox\"> IRSWPSDG<br>\r\n                        <input type=\"checkbox\"> IRSWPSEK<br>\r\n                        <input type=\"checkbox\"> IRSWPSGD<br>\r\n                        <input type=\"checkbox\"> IRSWPSKK<br>\r\n                        <input type=\"checkbox\"> IRSWPTHB<br>\r\n                        <input type=\"checkbox\"> IRSWPTND<br>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n\r\n                        <input type=\"checkbox\"> IRSWPTRN<br>\r\n                        <input type=\"checkbox\"> IRSWPTRY<br>\r\n                        <input type=\"checkbox\"> IRSWPTTD<br>\r\n                        <input type=\"checkbox\"> IRSWPTWD<br>\r\n                        <input type=\"checkbox\"> IRSWPTZS<br>\r\n                        <input type=\"checkbox\"> IRSWPUAH<br>\r\n                        <input type=\"checkbox\"> IRSWPUGX<br>\r\n                        <input type=\"checkbox\"> IRSWPUSD<br>\r\n                        <input type=\"checkbox\"> IRSWPXAF<br>\r\n                        <input type=\"checkbox\"> IRSWPXAG<br>\r\n                        <input type=\"checkbox\"> IRSWPXAU<br>\r\n                        <input type=\"checkbox\"> IRSWPXEU<br>\r\n                        <input type=\"checkbox\"> IRSWPZAR<br>\r\n                        <input type=\"checkbox\"> IRSWPZMK<br>\r\n                </div>\r\n\r\n        </div>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/firm-account/firm-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/firm-account/firm-account.component.ts ***!
  \********************************************************/
/*! exports provided: FirmAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmAccountComponent", function() { return FirmAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Firm_Account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Firm-Account.service */ "./src/app/firm-account/Firm-Account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Firm_Account_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Firm-Account.model */ "./src/app/firm-account/Firm-Account.model.ts");





var FirmAccountComponent = /** @class */ (function () {
    function FirmAccountComponent(ngxXml2jsonService, firmAccountService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.firmAccountService = firmAccountService;
        this.model = model;
    }
    FirmAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firmAccountService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.FirmAccount.LoginName;
            _this.model.txtFirstName = _this.obj.FirmAccount.FirstName;
            _this.model.txtLastName = _this.obj.FirmAccount.LastName;
            _this.model.cmbBusiness = _this.obj.FirmAccount.Business;
            _this.model.cmbDepartment = [_this.obj.FirmAccount.Department.dep1,
                _this.obj.FirmAccount.Department.dep2,
                _this.obj.FirmAccount.Department.dep3,
                _this.obj.FirmAccount.Department.dep4];
            _this.model.cmbRole = _this.obj.FirmAccount.Role;
            _this.model.txtLastModified = _this.obj.FirmAccount.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.FirmAccount.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.FirmAccount.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.FirmAccount.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    FirmAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-firm-account',
            template: __webpack_require__(/*! ./firm-account.component.html */ "./src/app/firm-account/firm-account.component.html"),
            styles: [__webpack_require__(/*! ./firm-account.component.css */ "./src/app/firm-account/firm-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Firm_Account_service__WEBPACK_IMPORTED_MODULE_1__["FirmAccountService"],
            _Firm_Account_model__WEBPACK_IMPORTED_MODULE_4__["FirmAccountModel"]])
    ], FirmAccountComponent);
    return FirmAccountComponent;
}());



/***/ }),

/***/ "./src/app/legal-entity/Legal-Entity.model.ts":
/*!****************************************************!*\
  !*** ./src/app/legal-entity/Legal-Entity.model.ts ***!
  \****************************************************/
/*! exports provided: LegalEntityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalEntityModel", function() { return LegalEntityModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LegalEntityModel = /** @class */ (function () {
    function LegalEntityModel() {
    }
    LegalEntityModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LegalEntityModel);
    return LegalEntityModel;
}());



/***/ }),

/***/ "./src/app/legal-entity/Legal-Entity.service.ts":
/*!******************************************************!*\
  !*** ./src/app/legal-entity/Legal-Entity.service.ts ***!
  \******************************************************/
/*! exports provided: LegalEntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalEntityService", function() { return LegalEntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LegalEntityService = /** @class */ (function () {
    function LegalEntityService(_http) {
        this._http = _http;
        this._url = './assets/Legal-Entity.xml';
    }
    LegalEntityService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    LegalEntityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LegalEntityService);
    return LegalEntityService;
}());



/***/ }),

/***/ "./src/app/legal-entity/legal-entity.component.css":
/*!*********************************************************!*\
  !*** ./src/app/legal-entity/legal-entity.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\n.check2 {\r\n  width: 800px;\r\n  height: 300px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVnYWwtZW50aXR5L2xlZ2FsLWVudGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sZWdhbC1lbnRpdHkvbGVnYWwtZW50aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ubmF2YmFye1xyXG4gIG1hcmdpbi1sZWZ0Oi0zMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5jaGVjazEge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDIwMHB4OyAgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jaGVjazIge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmJ1dHRvbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOjEwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/legal-entity/legal-entity.component.html":
/*!**********************************************************!*\
  !*** ./src/app/legal-entity/legal-entity.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n                <div class=\"col-sm-2\">\n                                <div><label>Login Name</label> </div><br><br><br>\n                                <div><label>First Name</label></div><br><br>\n                                <div><label>Business</label></div><br><br>\n                                <div><label>Last Modified</label></div><br><br><br><br>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <div name=\"Login Name\">\n                                        <select class=\"form-control\">\n                                                <option>{{model.txtLoginName}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\n                                <div  name=\"Business\"><select class=\"form-control\">\n                                                <option>{{model.cmbBusiness}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModified}}></div>\n                                <br><br><br>\n                        </div>\n                \n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Last Name</label> </div><br><br>\n                                <div><label>Department</label></div><br><br>\n                                <div><label>Last VerifiedBy</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\n                                <div input name=\"Department\"><select class=\"form-control\">\n                                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Role</label> </div><br><br>\n                                <div><label>Last ModifiedBy</label></div><br><br>\n                                <div><label>Last Verified</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div> <select class=\"form-control\">\n                                                <option>{{model.cmbRole}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\n                                <br><br>\n                                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\n                        </div>\n\n        <div class=\"clearfix\"></div>\n        <div class=\"col-sm-2\"><br><br><label>Current Access</label></div>\n        <div class=\"check1 col-sm-10\">\n                <input type=\"checkbox\"> ALL<br>\n\n\n        </div>\n        <div class=\"clearfix\"></div>\n        <br><br>\n        <div class=\"col-sm-2\"><br><br><br><button>Add</button></div>\n        <div class=\"check2 col-sm-10\">\n                <div class=\"one col-sm-2\">\n                        <input type=\"checkbox\"> ALL<br>\n                        <input type=\"checkbox\"> IRDAFALE<br>\n                        <input type=\"checkbox\"> IRDAMDLE<br>\n                        <input type=\"checkbox\">IRDAOKLE<br>\n                        <input type=\"checkbox\"> IRDBYRLE<br>\n                        <input type=\"checkbox\"> IRDCHFLE<br>\n                        <input type=\"checkbox\"> IRDDEMLE<br>\n                        <input type=\"checkbox\"> IRDDZDLE<br>\n                        <input type=\"checkbox\">IRDECSLE <br>\n                        <input type=\"checkbox\"> IRDEGPLE<br>\n                        <input type=\"checkbox\">IRDETBLE <br>\n                        <input type=\"checkbox\"> IRDEURLE<br>\n\n\n\n                </div>\n                <div class=\"two col-sm-2\">\n                        <input type=\"checkbox\"> IRDEURLE<br>\n                        <input type=\"checkbox\">IRDEURLE <br>\n                        <input type=\"checkbox\"> IRDGELLE<br>\n                        <input type=\"checkbox\"> IRDGMDLE<br>\n                        <input type=\"checkbox\"> IRDGNFLE<br>\n                        <input type=\"checkbox\">IRDHKDLE <br>\n                        <input type=\"checkbox\">IRDINRLE <br>\n                        <input type=\"checkbox\">IRDKESLE <br>\n                        <input type=\"checkbox\">IRDLKRLE <br>\n                        <input type=\"checkbox\">IRDMADLE <br>\n                        <input type=\"checkbox\"> IRDMNTLE<br>\n                        <input type=\"checkbox\"> IRDMTLLE<br>\n\n\n                </div>\n                <div class=\"three col-sm-2\">\n                        <input type=\"checkbox\"> IRDMURLE<br>\n                        <input type=\"checkbox\"> IRDMWKLE<br>\n                        <input type=\"checkbox\">IRDMXPLE <br>\n                        <input type=\"checkbox\">IRDMYRLE <br>\n                        <input type=\"checkbox\">IRDMYRLE <br>\n                        <input type=\"checkbox\">IRDMZMLE <br>\n                        <input type=\"checkbox\">IRDNADLE <br>\n                        <input type=\"checkbox\">IRDNGNLE <br>\n\n                        <input type=\"checkbox\">IRDNGNLE <br>\n                        <input type=\"checkbox\"> IRDNIOLE<br>\n                        <input type=\"checkbox\">IRDNOKLE <br>\n                        <input type=\"checkbox\">IRDNPRLE <br>\n\n\n                </div>\n                <div class=\"four col-sm-2\">\n                        <input type=\"checkbox\">IRDNZDLE <br>\n                        <input type=\"checkbox\">IRDPENLE <br>\n\n                        <input type=\"checkbox\"> IRDPHPLE<br>\n                        <input type=\"checkbox\"> IRDPKRLE<br>\n                        <input type=\"checkbox\"> IRDPLZLE<br>\n                        <input type=\"checkbox\">IRDPYGLE <br>\n                        <input type=\"checkbox\"> IRDQARLE<br>\n                        <input type=\"checkbox\">IRDROLLLE <br>\n                        <input type=\"checkbox\"> IRDRTLLE<br>\n                        <input type=\"checkbox\">IRDRWFLE <br>\n                        <input type=\"checkbox\">IRDSDDLE <br>\n                        <input type=\"checkbox\">IRDSEKLE <br>\n\n\n\n                </div>\n                <div class=\"five col-sm-2\">\n                        <input type=\"checkbox\">IRDSGDLE <br>\n                        <input type=\"checkbox\"> IRDSRGLE<br>\n                        <input type=\"checkbox\"> IRDSZLLE<br>\n                        <input type=\"checkbox\">IRDTHBLE <br>\n                        <input type=\"checkbox\"> IRDTJRLE<br>\n                        <input type=\"checkbox\">IRDTNDLE <br>\n                        <input type=\"checkbox\"> IRDTOPLE<br>\n                        <input type=\"checkbox\">IRDTZSLE <br>\n                        <input type=\"checkbox\"> IRDUAHLE<br>\n\n\n                        <input type=\"checkbox\">IRDUKLE <br>\n                        <input type=\"checkbox\">IRDUSDLE <br>\n                        <input type=\"checkbox\">IRDUZSLE <br>\n\n                </div>\n                <div class=\"six col-sm-2\">\n                        <input type=\"checkbox\"> IRDVUVLE<br>\n                        <input type=\"checkbox\"> IRDXOFLE<br>\n                        <input type=\"checkbox\">IRDXOFLE <br>\n                        <input type=\"checkbox\">IRDXOFLE <br>\n\n                        <input type=\"checkbox\"> IRDYERLE<br>\n                        <input type=\"checkbox\"> IRDZARLE<br>\n                        <input type=\"checkbox\">IRDZMKLE <br>\n                        <input type=\"checkbox\"> IRDZWDLE<br>\n                </div>\n        </div>\n</div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/legal-entity/legal-entity.component.ts":
/*!********************************************************!*\
  !*** ./src/app/legal-entity/legal-entity.component.ts ***!
  \********************************************************/
/*! exports provided: LegalEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalEntityComponent", function() { return LegalEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Legal_Entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal-Entity.service */ "./src/app/legal-entity/Legal-Entity.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Legal_Entity_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Legal-Entity.model */ "./src/app/legal-entity/Legal-Entity.model.ts");





var LegalEntityComponent = /** @class */ (function () {
    function LegalEntityComponent(ngxXml2jsonService, LegalEntityService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.LegalEntityService = LegalEntityService;
        this.model = model;
    }
    LegalEntityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LegalEntityService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.LegalEntity.LoginName;
            _this.model.txtFirstName = _this.obj.LegalEntity.FirstName;
            _this.model.txtLastName = _this.obj.LegalEntity.LastName;
            _this.model.cmbBusiness = _this.obj.LegalEntity.Business;
            _this.model.cmbDepartment = [_this.obj.LegalEntity.Department.dep1,
                _this.obj.LegalEntity.Department.dep2,
                _this.obj.LegalEntity.Department.dep3,
                _this.obj.LegalEntity.Department.dep4];
            _this.model.cmbRole = _this.obj.LegalEntity.Role;
            _this.model.txtLastModified = _this.obj.LegalEntity.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.LegalEntity.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.LegalEntity.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.LegalEntity.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    LegalEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-legal-entity',
            template: __webpack_require__(/*! ./legal-entity.component.html */ "./src/app/legal-entity/legal-entity.component.html"),
            styles: [__webpack_require__(/*! ./legal-entity.component.css */ "./src/app/legal-entity/legal-entity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Legal_Entity_service__WEBPACK_IMPORTED_MODULE_1__["LegalEntityService"],
            _Legal_Entity_model__WEBPACK_IMPORTED_MODULE_4__["LegalEntityModel"]])
    ], LegalEntityComponent);
    return LegalEntityComponent;
}());



/***/ }),

/***/ "./src/app/location/Location.component.css":
/*!*************************************************!*\
  !*** ./src/app/location/Location.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n  \r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\n.check2 {\r\n  width: 800px;\r\n  height: 200px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vTG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi9Mb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLm5hdmJhcntcclxuICBtYXJnaW4tbGVmdDotMzBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxuICBcclxufVxyXG4uY2hlY2sxIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2hlY2syIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5idXR0b257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcbmJ1dHRvbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOjEwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/location/Location.component.html":
/*!**************************************************!*\
  !*** ./src/app/location/Location.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n                <div class=\"col-sm-2\">\n                                <div><label>Login Name</label> </div><br><br><br>\n                                <div><label>First Name</label></div><br><br>\n                                <div><label>Business</label></div><br><br>\n                                <div><label>Last Modified</label></div><br><br><br><br>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <div name=\"Login Name\">\n                                        <select class=\"form-control\">\n                                                <option>{{model.txtLoginName}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\n                                <div  name=\"Business\"><select class=\"form-control\">\n                                                <option>{{model.cmbBusiness}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModified}}></div>\n                                <br><br><br>\n                        </div>\n                \n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Last Name</label> </div><br><br>\n                                <div><label>Department</label></div><br><br>\n                                <div><label>Last VerifiedBy</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\n                                <div input name=\"Department\"><select class=\"form-control\">\n                                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Role</label> </div><br><br>\n                                <div><label>Last ModifiedBy</label></div><br><br>\n                                <div><label>Last Verified</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div> <select class=\"form-control\">\n                                                <option>{{model.cmbRole}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\n                                <br><br>\n                                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\n                        </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"col-sm-2\"><br><br><label>Current Access</label></div>\n  <div class=\"check1 col-sm-10\">\n    <input type=\"checkbox\"> ALL<br>\n  </div>\n\n  <div class=\"clearfix\"></div>\n  <br><br><br>\n  <div class=\"col-sm-2\"><br><br><br><button>Add</button></div>\n  <div class=\"check2 col-sm-10\">\n    <div class=\"one col-sm-2\">\n      <input type=\"checkbox\"> ALL<br>\n      <input type=\"checkbox\"> ABU<br>\n      <input type=\"checkbox\"> ALM<br>\n      <input type=\"checkbox\"> AMS<br>\n      <input type=\"checkbox\"> AnB<br>\n      <input type=\"checkbox\"> ATH<br>\n      <input type=\"checkbox\"> AUK<br>\n      <input type=\"checkbox\"> BEI<br>\n\n    </div>\n    <div class=\"two col-sm-2\">\n\n      <input type=\"checkbox\"> BHN<br>\n      <input type=\"checkbox\"> BOM<br>\n      <input type=\"checkbox\"> BRA<br>\n      <input type=\"checkbox\"> BuB<br>\n      <input type=\"checkbox\"> BUD<br>\n      <input type=\"checkbox\"> CAI<br>\n      <input type=\"checkbox\"> COB<br>\n      <input type=\"checkbox\"> DAR<br>\n    </div>\n    <div class=\"three col-sm-2\">\n\n      <input type=\"checkbox\"> DUB<br>\n      <input type=\"checkbox\"> ECU<br>\n      <input type=\"checkbox\"> FFT<br>\n      <input type=\"checkbox\"> FRA<br>\n      <input type=\"checkbox\"> GAB<br>\n      <input type=\"checkbox\"> HEL<br>\n      <input type=\"checkbox\"> HKG<br>\n      <input type=\"checkbox\"> IST<br>\n    </div>\n    <div class=\"four col-sm-2\">\n\n\n\n      <input type=\"checkbox\"> JER<br>\n      <input type=\"checkbox\"> JOH<br>\n      <input type=\"checkbox\"> KAR<br>\n      <input type=\"checkbox\"> KpB<br>\n      <input type=\"checkbox\"> KUW<br>\n      <input type=\"checkbox\"> KvB<br>\n      <input type=\"checkbox\"> LgB<br>\n      <input type=\"checkbox\"> LIS<br>\n    </div>\n    <div class=\"five col-sm-2\">\n\n      <input type=\"checkbox\"> LON<br>\n      <input type=\"checkbox\"> LUS<br>\n      <input type=\"checkbox\"> LUX<br>\n      <input type=\"checkbox\"> MAD<br>\n      <input type=\"checkbox\"> MEX<br>\n      <input type=\"checkbox\"> MwB<br>\n      <input type=\"checkbox\"> NY<br>\n      <input type=\"checkbox\"> OSL<br>\n    </div>\n    <div class=\"six col-sm-2\">\n\n      <input type=\"checkbox\"> PAR<br>\n      <input type=\"checkbox\"> PrB<br>\n      <input type=\"checkbox\"> RIY<br>\n      <input type=\"checkbox\"> SEO<br>\n      <input type=\"checkbox\"> SIN<br>\n      <input type=\"checkbox\"> SoB<br>\n      <input type=\"checkbox\"> SYD<br>\n\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/location/Location.model.ts":
/*!********************************************!*\
  !*** ./src/app/location/Location.model.ts ***!
  \********************************************/
/*! exports provided: LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    LocationModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LocationModel);
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/location/Location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/location/Location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationService = /** @class */ (function () {
    function LocationService(_http) {
        this._http = _http;
        this._url = './assets/Location.xml';
    }
    LocationService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/location/location.component.ts":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.service */ "./src/app/location/Location.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Location.model */ "./src/app/location/Location.model.ts");





var LocationComponent = /** @class */ (function () {
    function LocationComponent(ngxXml2jsonService, LocationService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.LocationService = LocationService;
        this.model = model;
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LocationService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.Location.LoginName;
            _this.model.txtFirstName = _this.obj.Location.FirstName;
            _this.model.txtLastName = _this.obj.Location.LastName;
            _this.model.cmbBusiness = _this.obj.Location.Business;
            _this.model.cmbDepartment = [_this.obj.Location.Department.dep1,
                _this.obj.Location.Department.dep2,
                _this.obj.Location.Department.dep3,
                _this.obj.Location.Department.dep4];
            _this.model.cmbRole = _this.obj.Location.Role;
            _this.model.txtLastModified = _this.obj.Location.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.Location.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.Location.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.Location.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-Location',
            template: __webpack_require__(/*! ./Location.component.html */ "./src/app/location/Location.component.html"),
            styles: [__webpack_require__(/*! ./Location.component.css */ "./src/app/location/Location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            _Location_model__WEBPACK_IMPORTED_MODULE_4__["LocationModel"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/product/Product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/Product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.navbar{\r\n  margin-left:-30px;\r\n  border:none;\r\n  border-radius:0px;\r\n}\r\n.check1 {\r\n  width: 800px;\r\n  height: 150px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\n.check2 {\r\n  width: 800px;\r\n  height: 150px;  \r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n}\r\nbutton{\r\n  border: 1px solid grey;\r\n  font-weight: bold;\r\n  background-color:transparent;\r\n  font-size:1000;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9Qcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvUHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLm5hdmJhcntcclxuICBtYXJnaW4tbGVmdDotMzBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG4uY2hlY2sxIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2hlY2syIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDsgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5idXR0b257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZToxMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product/Product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/Product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n                <div class=\"col-sm-2\">\n                                <div><label>Login Name</label> </div><br><br><br>\n                                <div><label>First Name</label></div><br><br>\n                                <div><label>Business</label></div><br><br>\n                                <div><label>Last Modified</label></div><br><br><br><br>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <div name=\"Login Name\">\n                                        <select class=\"form-control\">\n                                                <option>{{model.txtLoginName}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"FirstName\" value={{model.txtFirstName}}></div><br><br>\n                                <div  name=\"Business\"><select class=\"form-control\">\n                                                <option>{{model.cmbBusiness}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" class=\"form-control\" name=\"Last Modified\" value={{model.txtLastModifiedBy}}></div>\n                                <br><br><br>\n                        </div>\n                \n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Last Name</label> </div><br><br>\n                                <div><label>Department</label></div><br><br>\n                                <div><label>Last VerifiedBy</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div><input type=\"text\" name=\"Last Name\" class=\"form-control\" value={{model.txtLastName}}></div><br><br>\n                                <div input name=\"Department\"><select class=\"form-control\">\n                                                <option selected *ngFor=\"let department of model.cmbDepartment\">{{department}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last VerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n                \n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br><br>\n                                <div><label>Role</label> </div><br><br>\n                                <div><label>Last ModifiedBy</label></div><br><br>\n                                <div><label>Last Verified</label></div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                                <br><br><br>\n                                <div> <select class=\"form-control\">\n                                                <option>{{model.cmbRole}}</option>\n                                        </select></div><br><br>\n                                <div><input type=\"text\" name=\"Last ModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div>\n                                <br><br>\n                                <div><input type=\"text\" name=\"Last Verified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\n                        </div>\n\n       <div class=\"clearfix\"></div>\n       <div class=\"col-sm-2\"><br><br><label>Current Access</label></div>\n       <div class=\"check1 col-sm-10\">\n              <input type=\"checkbox\"> BondFuture<br>\n              <input type=\"checkbox\"> CapFloor<br>\n              <input type=\"checkbox\"> Fra<br>\n              <input type=\"checkbox\"> SwapOption<br>\n       </div>\n       <div class=\"clearfix\"></div>\n       <br><br>\n       <div class=\"col-sm-2\"><br><br><button>Add</button></div>\n       <div class=\"check2 col-sm-10\">\n              <div class=\"one col-sm-2\">\n                     <input type=\"checkbox\"> ALL<br>\n                     <input type=\"checkbox\"> Bond<br>\n                     <input type=\"checkbox\"> BondFuture<br>\n                     <input type=\"checkbox\"> MMFutureOp<br>\n                     <input type=\"checkbox\"> Swap<br>\n\n              </div>\n\n       </div>\n</div>\n\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/product/Product.model.ts":
/*!******************************************!*\
  !*** ./src/app/product/Product.model.ts ***!
  \******************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ProductModel);
    return ProductModel;
}());



/***/ }),

/***/ "./src/app/product/Product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/Product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        this._url = './assets/Product.xml';
    }
    ProductService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.service */ "./src/app/product/Product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product.model */ "./src/app/product/Product.model.ts");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(ngxXml2jsonService, ProductService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.ProductService = ProductService;
        this.model = model;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.Product.LoginName;
            _this.model.txtFirstName = _this.obj.Product.FirstName;
            _this.model.txtLastName = _this.obj.Product.LastName;
            _this.model.cmbBusiness = _this.obj.Product.Business;
            _this.model.cmbDepartment = [_this.obj.Product.Department.dep1,
                _this.obj.Product.Department.dep2,
                _this.obj.Product.Department.dep3,
                _this.obj.Product.Department.dep4];
            _this.model.cmbRole = _this.obj.Product.Role;
            _this.model.txtLastModified = _this.obj.Product.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.Product.VerifiedTimeStamp;
            _this.model.txtLastModifiedBy = _this.obj.Product.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.Product.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-Product',
            template: __webpack_require__(/*! ./Product.component.html */ "./src/app/product/Product.component.html"),
            styles: [__webpack_require__(/*! ./Product.component.css */ "./src/app/product/Product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _Product_model__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile-add/Profile-Add.model.ts":
/*!**************************************************!*\
  !*** ./src/app/profile-add/Profile-Add.model.ts ***!
  \**************************************************/
/*! exports provided: ProfileAddModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddModel", function() { return ProfileAddModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileAddModel = /** @class */ (function () {
    function ProfileAddModel() {
    }
    ProfileAddModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ProfileAddModel);
    return ProfileAddModel;
}());



/***/ }),

/***/ "./src/app/profile-add/Profile-Add.service.ts":
/*!****************************************************!*\
  !*** ./src/app/profile-add/Profile-Add.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddService", function() { return ProfileAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileAddService = /** @class */ (function () {
    function ProfileAddService(_http) {
        this._http = _http;
        this._url = './assets/Profile-Add.xml';
    }
    ProfileAddService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    ProfileAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileAddService);
    return ProfileAddService;
}());



/***/ }),

/***/ "./src/app/profile-add/profile-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile-add/profile-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.vl {\r\n    border-left: 2px solid grey;\r\n    height: 750px;\r\n    position: absolute;\r\n    left: 47%;\r\n    margin-left: 0px;\r\n    top: 10;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1hZGQvcHJvZmlsZS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLE9BQU87RUFDVCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtYWRkL3Byb2ZpbGUtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi52bCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHRvcDogMTA7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/profile-add/profile-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile-add/profile-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-3\"><br>\n        <div><label>LoginName</label></div><br><br>\n        <div><label>First Name</label></div><br><br>\n        <div><label>Last Name</label></div><br><br>\n        <div><label>Password</label></div><br><br>\n        <div><label>SwapDefault</label></div><br><br>\n        <div><label>SwoDefault</label></div><br><br>\n        <div><label>PVAutoCalc</label></div><br><br>\n        <div><label>Threshold PV</label></div><br><br>\n        <div><label>Business</label></div><br><br>\n        <div><label>LastModified</label></div><br><br>\n        <div><label>LastVerified</label></div>\n    </div>\n    <div class=\"col-sm-3\"><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LoginName\" class=\"form-control\" value={{model.txtLoginName}}></div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"FirstName\" class=\"form-control\" value={{model.txtFirstName}}></div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LastName\" class=\"form-control\" value={{model.txtLastName}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"Password\" class=\"form-control\" value={{model.txtPassword}}></div><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"SwapDefault\" class=\"form-control\" value={{model.txtSwapTicketDefaultDeal}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"SWODefault\" class=\"form-control\"  value={{model.txtSwapOptionDefaultDeal}}></div><br><br><br>\n        <div class=\"col-sm-9\" name=\"PVAutoCalc\">\n            <select class=\"form-control\">\n                <option selected *ngFor=\"let PVAutoCalc of model.cmbPVAutoCalc\">{{PVAutoCalc}}</option>\n            </select>\n        </div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"Threshold PV\" class=\"form-control\"  value={{model.txtThresholdPv}}></div><br><br><br>\n        <div class=\"col-sm-9\" name=\"Business\">\n            <select class=\"form-control\">\n                <option>{{model.cmbBusiness}}</option>\n            </select>\n        </div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LastModified\" class=\"form-control\"  value={{model.txtLastModified}}></div><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"LastVerified\" class=\"form-control\"  value={{model.txtLastVerified}}></div>\n    </div>\n    <div class=\"vl\"></div>\n    <div class=\"col-sm-3\"> <br>\n        <div><label>Access Type</label></div><br><br>\n        <div><label>Status</label></div><br><br>\n        <div><label>Role</label></div><br><br>\n        <div><label>Domain</label></div><br><br>\n        <div><label>FraDefault</label></div><br><br>\n        <div><label>CapFloorDefault</label></div><br><br>\n        <div><label>Administrator</label></div><br><br>\n        <div><label>Department</label></div><br><br>\n        <div><label>LastModifiedBy</label></div><br><br>\n        <div><label>LastVerifiedBy</label></div>\n    </div>\n    <div class=\"col-sm-3\"><br>\n        <div class=\"col-sm-9\" name=\"Access Type\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbAccessType}}</option>\n                </select>\n        </div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"Status\" class=\"form-control\" value={{model.txtStatus}}></div><br><br><br>\n        <div class=\"col-sm-9\" name=\"Role\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbRole}}</option>\n                </select>\n        </div><br><br><br><br>\n        <div class=\"col-sm-9\" name=\"Domain\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbDomain}}</option>\n                </select>\n        </div><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"FraDefault\" class=\"form-control\"  value={{model.txtFraDefaultDeal}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"CapFloorDefault\" class=\"form-control\"  value={{model.txtCapFloorDefaultDeal}}></div><br><br><br><br>\n        <div class=\"col-sm-9\" name=\"Administrator\">\n                <select class=\"form-control\">\n                        <option selected *ngFor=\"let Administrator of model.cmbAdministrator\">{{Administrator}}</option>\n                </select>\n        </div><br><br><br>\n        <div class=\"col-sm-9\" name=\"Department\">\n                <select class=\"form-control\">\n                        <option selected *ngFor=\"let Department of model.cmbDepartment\">{{Department}}</option>\n                </select>\n        </div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LastModifiedBy\" class=\"form-control\"  value={{model.txtLastModifiedBy}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LastVerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n    </div>          \n        <div class=\"col-sm-12\"> <br><br><br>\n        <div class=\" col-sm-6 text-right\"><div class=\" col-sm-8\"></div><button type=\"button\" class=\"btn btn-primary col-sm-2\">Save</button></div>\n        <div class=\" col-sm-6 text-left\"><div class=\" col-sm-1\"></div><button type=\"button\" class=\"btn btn-primary col-sm-2\">Cancel</button></div>\n        </div>\n     </div>\n\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/profile-add/profile-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile-add/profile-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddComponent", function() { return ProfileAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Profile_Add_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile-Add.service */ "./src/app/profile-add/Profile-Add.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Profile_Add_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile-Add.model */ "./src/app/profile-add/Profile-Add.model.ts");





var ProfileAddComponent = /** @class */ (function () {
    function ProfileAddComponent(ngxXml2jsonService, profileAddService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.profileAddService = profileAddService;
        this.model = model;
    }
    ProfileAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileAddService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.txtLoginName = _this.obj.ProfileAdd.LoginName;
            _this.model.txtFirstName = _this.obj.ProfileAdd.FirstName;
            _this.model.txtLastName = _this.obj.ProfileAdd.LastName;
            _this.model.txtPassword = _this.obj.ProfileAdd.Password;
            _this.model.txtSwapTicketDefaultDeal = _this.obj.ProfileAdd.SwapDefault;
            _this.model.txtSwapOptionDefaultDeal = _this.obj.ProfileAdd.SWODefault;
            _this.model.cmbPVAutoCalc = [_this.obj.ProfileAdd.PVAutoCalc.pvno,
                _this.obj.ProfileAdd.PVAutoCalc.pvyes];
            _this.model.txtThresholdPv = _this.obj.ProfileAdd.ThresholdPv;
            _this.model.cmbBusiness = _this.obj.ProfileAdd.Business;
            _this.model.txtLastModified = _this.obj.ProfileAdd.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.ProfileAdd.VerifiedTimeStamp;
            _this.model.cmbAccessType = _this.obj.ProfileAdd.AccessType;
            _this.model.txtStatus = _this.obj.ProfileAdd.Status;
            _this.model.cmbRole = _this.obj.ProfileAdd.Role;
            _this.model.cmbDomain = _this.obj.ProfileAdd.Domain;
            _this.model.txtFraDefaultDeal = _this.obj.ProfileAdd.FraDefault;
            _this.model.txtCapFloorDefaultDeal = _this.obj.ProfileAdd.CapFloorDefault;
            _this.model.cmbAdministrator = [_this.obj.ProfileAdd.Administrator.adminno,
                _this.obj.ProfileAdd.Administrator.adminyes];
            _this.model.cmbDepartment = [_this.obj.ProfileAdd.Department.dep1,
                _this.obj.ProfileAdd.Department.dep2,
                _this.obj.ProfileAdd.Department.dep3,
                _this.obj.ProfileAdd.Department.dep4];
            _this.model.txtLastModifiedBy = _this.obj.ProfileAdd.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.ProfileAdd.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    ProfileAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile-add',
            template: __webpack_require__(/*! ./profile-add.component.html */ "./src/app/profile-add/profile-add.component.html"),
            styles: [__webpack_require__(/*! ./profile-add.component.css */ "./src/app/profile-add/profile-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Profile_Add_service__WEBPACK_IMPORTED_MODULE_1__["ProfileAddService"],
            _Profile_Add_model__WEBPACK_IMPORTED_MODULE_4__["ProfileAddModel"]])
    ], ProfileAddComponent);
    return ProfileAddComponent;
}());



/***/ }),

/***/ "./src/app/profile-modify/Profile-Modify.model.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-modify/Profile-Modify.model.ts ***!
  \********************************************************/
/*! exports provided: ProfileModifyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModifyModel", function() { return ProfileModifyModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileModifyModel = /** @class */ (function () {
    function ProfileModifyModel() {
    }
    ProfileModifyModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ProfileModifyModel);
    return ProfileModifyModel;
}());



/***/ }),

/***/ "./src/app/profile-modify/Profile-Modify.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile-modify/Profile-Modify.service.ts ***!
  \**********************************************************/
/*! exports provided: ProfileModifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModifyService", function() { return ProfileModifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileModifyService = /** @class */ (function () {
    function ProfileModifyService(_http) {
        this._http = _http;
        this._url = './assets/Profile-Modify.xml';
    }
    ProfileModifyService.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this._http.get(this._url, { headers: headers, responseType: 'text' });
    };
    ProfileModifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileModifyService);
    return ProfileModifyService;
}());



/***/ }),

/***/ "./src/app/profile-modify/profile-modify.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile-modify/profile-modify.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    margin-left:-30px;\r\n    border:none;\r\n    border-radius:0px;\r\n}\r\n.vl {\r\n    border-left: 2px solid grey;\r\n    height: 800px;\r\n    position: absolute;\r\n    left: 47%;\r\n    top: 10;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1tb2RpZnkvcHJvZmlsZS1tb2RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztFQUNUIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1tb2RpZnkvcHJvZmlsZS1tb2RpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotMzBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuLnZsIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NyU7XHJcbiAgICB0b3A6IDEwO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile-modify/profile-modify.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile-modify/profile-modify.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\">\n    <div class=\"col-sm-3\">\n        <div><label>User Name</label> </div><br><br>\n        <div><label>LoginName</label> </div><br><br>\n        <div><label>First Name</label> </div><br><br>\n        <div><label>Last Name</label> </div><br><br>\n        <div><label>Password</label> </div><br><br>\n        <div><label>SwapDefault</label> </div><br><br>\n        <div><label>SWODefault</label> </div><br><br>\n        <div><label>PVAutoCalc</label> </div><br><br>\n        <div><label>Threshold PV</label> </div><br><br>\n        <div><label>Business</label> </div><br><br>\n        <div><label>LastModified</label> </div><br><br>\n        <div><label>LastVerified</label> </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"col-sm-9\"  name=\"User Name\">\n            <select class=\"form-control\">\n                    <option selected *ngFor=\"let username of model.cmbUserName\">{{username}}</option>\n                \n            </select>\n        </div><br><br><br>\n        \n        <div class=\"col-sm-9\"><input  type=\"text\" name=\"LoginName\" class=\"form-control\" value={{model.txtLoginName}}> </div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"FirstName\" class=\"form-control\" value={{model.txtFirstName}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"LastName\" class=\"form-control\" value={{model.txtLastName}}></div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"Password\" class=\"form-control\" value={{model.textBox2}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"SwapDefault\" class=\"form-control\" value={{model.txtSwapTicketDefaultDeals}}></div><br><br><br>\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"SWODefault\" class=\"form-control\" value={{model.txtSwapOptionDefaultDeal}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"  name=\"PvAutoCalc\">\n            <select class=\"form-control\">\n                \n                    <option selected *ngFor=\"let PVAutoCalc of model.cmbPVAutoCalc\">{{PVAutoCalc}}</option>\n            </select>\n        </div><br><br><br>\n\n        <div class=\"col-sm-9\"><input type=\"text\" name=\"Threshold PV\" class=\"form-control\" value={{model.txtAmount}}></div> <br><br><br><br>\n        <div class=\"col-sm-9\"  name=\"Business\">\n            <select class=\"form-control\">\n                <option>{{model.cmbBusiness}}</option>\n            </select>\n        </div><br><br><br>\n\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"LastModified\" class=\"form-control\" value={{model.txtLastModified}}></div><br><br><br><br>\n        <div class=\"col-sm-9\"> <input type=\"text\" name=\"LastVerified\" class=\"form-control\" value={{model.txtLastVerified}}></div>\n    </div>\n    <div class=\"vl\"></div>\n    <div class=\"col-sm-3\">\n        <br><br><br>\n        <div><label>Access Type</label> </div><br><br>\n        <div><label>Status</label> </div><br><br>\n        <div><label>Role</label> </div><br><br>\n        <div><label>Domain</label> </div><br><br>\n        <div><label>FraDefault</label> </div><br><br>\n        <div><label>CapFloorDefault</label> </div><br><br>\n        <div><label>Administrator</label> </div><br><br>\n        <div><label>Department</label> </div><br><br>\n        <div><label>LastModifiedBy</label> </div><br><br>\n        <div><label>LastVerifiedBy</label> </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <br><br><br>\n        <div>\n            <div class=\"col-sm-9\"  name=\"Access Type\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbAccessType}}</option>\n                </select>\n            </div><br><br><br>\n            <div class=\"col-sm-9\"><input type=\"text\" name=\"Status\" class=\"form-control\" value={{model.txtStatus}}></div><br><br><br>\n            <div class=\"col-sm-9\"  name=\"Role\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbRole}}</option>\n                </select>\n            </div><br><br><br><br>\n            <div class=\"col-sm-9\"  name=\"Domain\">\n                <select class=\"form-control\">\n                    <option>{{model.cmbDomain}}</option>\n                </select>\n            </div><br><br><br>\n            <div class=\"col-sm-9\"><input type=\"text\" name=\"FraDefault\" class=\"form-control\" value={{model.txtFraDefaultDeal}}></div><br><br><br><br>\n            <div class=\"col-sm-9\"  name=\"CapFloorDefault\">\n                <select class=\"form-control\">\n                    <option>{{model.txtCapFloorDefaultDeal}}</option>\n                </select>\n            </div><br><br><br>\n            <div class=\"col-sm-9\"  name=\"Administrator\">\n                <select class=\"form-control\">\n                        <option selected *ngFor=\"let Administrator of model.cmbAdministrator\">{{Administrator}}</option>\n                </select>\n            </div><br><br><br><br>\n            <div class=\"col-sm-9\" name=\"Department\">\n                <select class=\"form-control\">\n                        <option selected *ngFor=\"let Department of model.cmbDepartment\">{{Department}}</option>\n                </select>\n            </div><br><br><br>\n            <div class=\"col-sm-9\"><input type=\"text\" name=\"LastModifiedBy\" class=\"form-control\" value={{model.txtLastModifiedBy}}></div> <br><br> <br><br>\n            <div class=\"col-sm-9\"> <input type=\"text\" name=\"LastVerifiedBy\" class=\"form-control\" value={{model.txtLastVerifiedBy}}></div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-12\"> <br><br><br>\n        <div class=\" col-sm-6 text-right\"><div class=\" col-sm-8\"></div><button type=\"button\" class=\"btn btn-primary col-sm-2\">Save</button></div>\n        <div class=\" col-sm-6 text-left\"><div class=\" col-sm-1\"></div><button type=\"button\" class=\"btn btn-primary col-sm-2\">Cancel</button></div>\n       \n     </div>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/profile-modify/profile-modify.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile-modify/profile-modify.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModifyComponent", function() { return ProfileModifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Profile_Modify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile-Modify.service */ "./src/app/profile-modify/Profile-Modify.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
/* harmony import */ var _Profile_Modify_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile-Modify.model */ "./src/app/profile-modify/Profile-Modify.model.ts");





var ProfileModifyComponent = /** @class */ (function () {
    function ProfileModifyComponent(ngxXml2jsonService, profileModifyService, model) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.profileModifyService = profileModifyService;
        this.model = model;
    }
    ProfileModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileModifyService.getData().subscribe(function (xmlRes) {
            _this.xml = xmlRes;
        });
        setTimeout(function () {
            var parser = new DOMParser();
            var xml = parser.parseFromString(_this.xml, "text/xml");
            var obj = _this.ngxXml2jsonService.xmlToJson(xml);
            _this.obj = obj;
            _this.model.cmbUserName = [_this.obj.ProfileModify.UserName.u1,
                _this.obj.ProfileModify.UserName.u2,
                _this.obj.ProfileModify.UserName.u3,
                _this.obj.ProfileModify.UserName.u4,
                _this.obj.ProfileModify.UserName.u5];
            _this.model.txtLoginName = _this.obj.ProfileModify.LoginName;
            _this.model.txtFirstName = _this.obj.ProfileModify.FirstName;
            _this.model.txtLastName = _this.obj.ProfileModify.LastName;
            _this.model.textBox2 = _this.obj.ProfileModify.Password;
            _this.model.txtSwapTicketDefaultDeals = _this.obj.ProfileModify.SwapTicketDefaultDeals;
            _this.model.txtSwapOptionDefaultDeal = _this.obj.ProfileModify.SwapOptionDefaultDeal;
            _this.model.cmbPVAutoCalc = [_this.obj.ProfileModify.PVAutoCalc.pvno,
                _this.obj.ProfileModify.PVAutoCalc.pvyes];
            _this.model.txtAmount = _this.obj.ProfileModify.ThresholdPv;
            _this.model.cmbBusiness = _this.obj.ProfileModify.Business;
            _this.model.txtLastModified = _this.obj.ProfileModify.ModifiedTimeStamp;
            _this.model.txtLastVerified = _this.obj.ProfileModify.VerifiedTimeStamp;
            _this.model.cmbAccessType = _this.obj.ProfileModify.AccessType;
            _this.model.txtStatus = _this.obj.ProfileModify.Status;
            _this.model.cmbRole = _this.obj.ProfileModify.Role;
            _this.model.cmbDomain = _this.obj.ProfileModify.Domain;
            _this.model.txtFraDefaultDeal = _this.obj.ProfileModify.FraDefaultDeal;
            _this.model.txtCapFloorDefaultDeal = _this.obj.ProfileModify.CapFloorDefaultDeal;
            _this.model.cmbAdministrator = [_this.obj.ProfileModify.Administrator.adminno,
                _this.obj.ProfileModify.Administrator.adminyes];
            _this.model.cmbDepartment = [_this.obj.ProfileModify.Department.dep1,
                _this.obj.ProfileModify.Department.dep2,
                _this.obj.ProfileModify.Department.dep3,
                _this.obj.ProfileModify.Department.dep4];
            _this.model.txtLastModifiedBy = _this.obj.ProfileModify.LastModifiedBy;
            _this.model.txtLastVerifiedBy = _this.obj.ProfileModify.LastVerifiedBy;
            console.log(_this.model);
        }, 10);
    };
    ProfileModifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile-modify',
            template: __webpack_require__(/*! ./profile-modify.component.html */ "./src/app/profile-modify/profile-modify.component.html"),
            styles: [__webpack_require__(/*! ./profile-modify.component.css */ "./src/app/profile-modify/profile-modify.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_3__["NgxXml2jsonService"],
            _Profile_Modify_service__WEBPACK_IMPORTED_MODULE_1__["ProfileModifyService"],
            _Profile_Modify_model__WEBPACK_IMPORTED_MODULE_4__["ProfileModifyModel"]])
    ], ProfileModifyComponent);
    return ProfileModifyComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Ramya\Desktop\derivatives\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map