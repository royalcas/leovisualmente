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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _contact_me_contact_me_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-me/contact-me.module */ "./src/app/contact-me/contact-me.module.ts");
/* harmony import */ var _posters_posters_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posters/posters.module */ "./src/app/posters/posters.module.ts");
/* harmony import */ var _funny_facts_funny_facts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funny-facts/funny-facts.module */ "./src/app/funny-facts/funny-facts.module.ts");
/* harmony import */ var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
    {
        path: 'contact',
        loadChildren: function () { return _contact_me_contact_me_module__WEBPACK_IMPORTED_MODULE_0__["ContactMeModule"]; }
    },
    {
        path: 'my-work',
        loadChildren: function () { return _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioModule"]; }
    },
    {
        path: 'funny-facts',
        loadChildren: function () { return _funny_facts_funny_facts_module__WEBPACK_IMPORTED_MODULE_2__["FunnyFactsModule"]; }
    },
    { path: 'posters', loadChildren: function () { return _posters_posters_module__WEBPACK_IMPORTED_MODULE_1__["PostersModule"]; } },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'leovisualmente';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _pano_pano_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pano/pano.component */ "./src/app/pano/pano.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _pano_pano_component__WEBPACK_IMPORTED_MODULE_5__["PanoComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-me/contact-me.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-me/contact-me.module.ts ***!
  \*************************************************/
/*! exports provided: ContactMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeModule", function() { return ContactMeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "./src/app/contact-me/contact-me/contact-me.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_3__["ContactMeComponent"]
    }
];
var ContactMeModule = /** @class */ (function () {
    function ContactMeModule() {
    }
    ContactMeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_3__["ContactMeComponent"]]
        })
    ], ContactMeModule);
    return ContactMeModule;
}());



/***/ }),

/***/ "./src/app/contact-me/contact-me/contact-me.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/contact-me/contact-me/contact-me.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-postal-layout>\n  <app-postal-title>Contact</app-postal-title>\n  <app-postal-title-note>Questions, projects, ideas, feel free to write to me</app-postal-title-note>\n  <app-postal-content>\n    <form class=\"contact-form\">\n      <p class=\"contact-greeting primary\">Dear Leo,</p>\n      <div class=\"contact-message-wrapper\">\n        <textarea rows=\"8\" class=\"contact-greeting\" id=\"contactMesage\" name=\"contact-message\" aria-label=\"Contact Message\"></textarea>\n      </div>\n\n      <div class=\"actions\">\n        <button class=\"primary\">Send</button>\n      </div>\n\n\n    </form>\n  </app-postal-content>\n</app-postal-layout>\n"

/***/ }),

/***/ "./src/app/contact-me/contact-me/contact-me.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/contact-me/contact-me/contact-me.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-greeting {\n  font-size: 2rem;\n  font-family: \"Cedarville Cursive\", cursive; }\n\n.contact-message-wrapper {\n  background-color: #fff;\n  background-image: linear-gradient(#eee 0.1em, transparent 0.1em);\n  background-size: 100% 2.4rem; }\n\n#contactMesage {\n  color: #444;\n  background: transparent;\n  width: 100%;\n  border: 0px;\n  line-height: 1.23;\n  resize: none; }\n\n#contactMesage:focus {\n    color: black;\n    box-shadow: none;\n    border: none;\n    outline-width: 0; }\n"

/***/ }),

/***/ "./src/app/contact-me/contact-me/contact-me.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/contact-me/contact-me/contact-me.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent() {
    }
    ContactMeComponent.prototype.ngOnInit = function () { };
    ContactMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-me',
            template: __webpack_require__(/*! ./contact-me.component.html */ "./src/app/contact-me/contact-me/contact-me.component.html"),
            styles: [__webpack_require__(/*! ./contact-me.component.scss */ "./src/app/contact-me/contact-me/contact-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactMeComponent);
    return ContactMeComponent;
}());



/***/ }),

/***/ "./src/app/funny-facts/funny-facts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/funny-facts/funny-facts.module.ts ***!
  \***************************************************/
/*! exports provided: FunnyFactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyFactsModule", function() { return FunnyFactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _funny_facts_funny_facts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funny-facts/funny-facts.component */ "./src/app/funny-facts/funny-facts/funny-facts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _funny_facts_funny_facts_component__WEBPACK_IMPORTED_MODULE_2__["FunnyFactsComponent"]
    }
];
var FunnyFactsModule = /** @class */ (function () {
    function FunnyFactsModule() {
    }
    FunnyFactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_funny_facts_funny_facts_component__WEBPACK_IMPORTED_MODULE_2__["FunnyFactsComponent"]]
        })
    ], FunnyFactsModule);
    return FunnyFactsModule;
}());



/***/ }),

/***/ "./src/app/funny-facts/funny-facts/funny-facts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/funny-facts/funny-facts/funny-facts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-postal-layout>\n  <app-postal-title>\n    Fun Facts\n  </app-postal-title>\n  <app-postal-title-note>\n    Things I have read, watched, and eaten, but mostly, things I like and love\n  </app-postal-title-note>\n  <app-postal-options>\n    <app-tag-selection [tags]=\"['Books', 'Movies', 'Food']\"></app-tag-selection>\n  </app-postal-options>\n  <app-postal-content>\n    <ng-container *ngIf=\"data$ | async as data; else noData\">\n      <app-bubble [bubbles]=\"data\"></app-bubble>\n    </ng-container>\n    <ng-template #noData>\n      Not Funny for your selection :(\n    </ng-template>\n  </app-postal-content>\n</app-postal-layout>\n"

/***/ }),

/***/ "./src/app/funny-facts/funny-facts/funny-facts.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/funny-facts/funny-facts/funny-facts.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/funny-facts/funny-facts/funny-facts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/funny-facts/funny-facts/funny-facts.component.ts ***!
  \******************************************************************/
/*! exports provided: FunnyFactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyFactsComponent", function() { return FunnyFactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_funny_facts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/funny-facts.service */ "./src/app/funny-facts/funny-facts/services/funny-facts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FunnyFactsComponent = /** @class */ (function () {
    function FunnyFactsComponent(funnyFactsService) {
        this.funnyFactsService = funnyFactsService;
    }
    FunnyFactsComponent.prototype.ngOnInit = function () {
        this.data$ = this.funnyFactsService.getAll();
    };
    FunnyFactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-funny-facts',
            template: __webpack_require__(/*! ./funny-facts.component.html */ "./src/app/funny-facts/funny-facts/funny-facts.component.html"),
            styles: [__webpack_require__(/*! ./funny-facts.component.scss */ "./src/app/funny-facts/funny-facts/funny-facts.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_funny_facts_service__WEBPACK_IMPORTED_MODULE_1__["FunnyFactsService"]])
    ], FunnyFactsComponent);
    return FunnyFactsComponent;
}());



/***/ }),

/***/ "./src/app/funny-facts/funny-facts/services/funny-facts.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/funny-facts/funny-facts/services/funny-facts.service.ts ***!
  \*************************************************************************/
/*! exports provided: FunnyFactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyFactsService", function() { return FunnyFactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FunnyFactsService = /** @class */ (function () {
    function FunnyFactsService() {
        this.data = [
            {
                text: 'Tofu',
                tags: ['food']
            },
            {
                text: 'Hateful Eight',
                tags: ['movies']
            },
            {
                text: 'El pintordebajo del lavaplatps',
                tags: ['books']
            },
            {
                text: 'Pesto',
                tags: ['food']
            },
            {
                text: 'Pizza',
                tags: ['food']
            },
            {
                text: 'Manderlay',
                tags: ['movies']
            },
            {
                text: 'Delirio',
                tags: ['book']
            },
            {
                text: 'Peppers',
                tags: ['food']
            },
            {
                text: '1984',
                tags: ['books']
            },
            {
                text: '100 hundredyears of sollitude',
                tags: ['books']
            },
            {
                text: 'Whiplash',
                tags: ['movies']
            },
            {
                text: '1984',
                tags: ['movies']
            }
        ];
    }
    FunnyFactsService.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    };
    FunnyFactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FunnyFactsService);
    return FunnyFactsService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pano></app-pano>>\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pano/pano.component.css":
/*!*****************************************!*\
  !*** ./src/app/pano/pano.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pano-view {\n    width: 100%;\n    border: 0px;\n    height: 100vh;\n}\n"

/***/ }),

/***/ "./src/app/pano/pano.component.html":
/*!******************************************!*\
  !*** ./src/app/pano/pano.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe class=\"pano-view\" src=\"./assets/360view\" frameborder=\"0\"></iframe>\n"

/***/ }),

/***/ "./src/app/pano/pano.component.ts":
/*!****************************************!*\
  !*** ./src/app/pano/pano.component.ts ***!
  \****************************************/
/*! exports provided: PanoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanoComponent", function() { return PanoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanoComponent = /** @class */ (function () {
    function PanoComponent() {
    }
    PanoComponent.prototype.ngOnInit = function () {
    };
    PanoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pano',
            template: __webpack_require__(/*! ./pano.component.html */ "./src/app/pano/pano.component.html"),
            styles: [__webpack_require__(/*! ./pano.component.css */ "./src/app/pano/pano.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanoComponent);
    return PanoComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio/portfolio.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
    }
];
var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio/portfolio.component.html":
/*!**************************************************************!*\
  !*** ./src/app/portfolio/portfolio/portfolio.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-postal-layout>\n  <app-postal-title>Work</app-postal-title>\n  <app-postal-title-note>An exquisite selection of my work according to my criteria</app-postal-title-note>\n  <app-postal-options>\n    <app-tag-selection [tags]=\"['Branding', 'Objects', 'Screen', 'Academic', 'Prints']\" (change)=\"changeTags($event)\"></app-tag-selection>\n\n  </app-postal-options>\n  <app-postal-content>\n    <div *ngIf=\"portfolioItems; else loadingTemplate\" class=\"portfolio-container\">\n      <div *ngFor=\"let item of portfolioItems\" class=\"portfolio-item\" (click)=\"openGalleryDialog(item)\">\n        <div class=\"portfolio-thumbnail-container\">\n          <img [src]=\"item.thumbnailUrl\" [alt]=\"item.projectName\">\n        </div>\n        <div class=\"portfolio-item-additional-info\">\n          <div class=\"portfolio-item-name\">\n            {{item.projectName}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <ng-template #loadingTemplate>\n      <app-loading></app-loading>\n    </ng-template>\n  </app-postal-content>\n</app-postal-layout>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio/portfolio.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/portfolio/portfolio/portfolio.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-column: 3;\n  grid-column: 3;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px; }\n  .portfolio-container .portfolio-item {\n    position: relative;\n    overflow: hidden;\n    cursor: pointer; }\n  .portfolio-container .portfolio-item img {\n      max-width: 100%; }\n  .portfolio-container .portfolio-item:nth-child(4) {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 2;\n      grid-column: 1 / span 2;\n      -ms-grid-row: 2;\n      -ms-grid-row-span: 2;\n      grid-row: 2 / span 2; }\n  .portfolio-container .portfolio-item .portfolio-item-additional-info {\n      display: flex;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      background: rgba(0, 0, 0, 0.5);\n      color: #fff;\n      width: 100%;\n      height: 100%;\n      justify-content: stretch;\n      align-items: flex-end;\n      /* Safari */\n      transition: top 0.5s ease-in-out;\n      padding: 1rem;\n      text-align: left; }\n  .portfolio-container .portfolio-item .portfolio-item-additional-info .portfolio-item-name {\n        font-size: 2rem; }\n  .portfolio-container .portfolio-item:hover .portfolio-item-additional-info, .portfolio-container .portfolio-item:focus .portfolio-item-additional-info, .portfolio-container .portfolio-item:active .portfolio-item-additional-info {\n      top: 0; }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio/portfolio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio/portfolio/portfolio.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _shared_dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/dialog-gallery/dialog-gallery.component */ "./src/app/shared/dialog-gallery/dialog-gallery.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/portfolio/portfolio/services/portfolio.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService, dialog) {
        this.portfolioService = portfolioService;
        this.dialog = dialog;
        this.tags$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService.getProjects().subscribe(function (items) {
            _this.portfolioItems = items;
        });
    };
    PortfolioComponent.prototype.changeTags = function (tags) {
        var _this = this;
        this.portfolioService.filterPortfolio(tags).subscribe(function (items) {
            _this.portfolioItems = items;
        });
    };
    PortfolioComponent.prototype.openGalleryDialog = function (item) {
        var dialogData = this.portfolioService.getItemGalleryInfo(item);
        this.dialog.open(_shared_dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_0__["DialogGalleryComponent"], {
            width: '100vw',
            height: '100vh',
            data: dialogData
        });
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio/services/portfolio.data.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio/portfolio/services/portfolio.data.ts ***!
  \****************************************************************/
/*! exports provided: portfolioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioData", function() { return portfolioData; });
var portfolioData = [
    {
        id: 3,
        description: 'Test Project',
        projectName: 'Misa Colombiana',
        thumbnailUrl: './assets/portfolio/misa-colombiana.png',
        images: ['./assets/portfolio/misa-colombiana.png'],
        tags: ['Branding']
    },
    {
        id: 1,
        description: 'Test Project',
        projectName: 'Cromoctopo Art Toy',
        thumbnailUrl: './assets/portfolio/cromoctopo.png',
        images: ['./assets/portfolio/cromoctopo.png'],
        tags: ['Objects', 'Academic']
    },
    {
        id: 2,
        description: 'Test Project',
        projectName: 'Jaibaná Camerata',
        thumbnailUrl: './assets/portfolio/jaibana.png',
        images: ['./assets/portfolio/jaibana.png'],
        tags: ['Branding', 'Prints']
    },
    {
        id: 4,
        description: 'Test Project',
        projectName: 'Animals: Arttoy Series',
        thumbnailUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg'
        ],
        tags: ['Objects', 'Academic']
    },
    {
        id: 5,
        description: 'Test Project',
        projectName: 'Exiplast Sample Kit',
        thumbnailUrl: './assets/portfolio/cubiertas.JPG',
        images: ['./assets/portfolio/cubiertas.JPG'],
        tags: ['Objects', 'Screen']
    },
    {
        id: 5,
        description: 'Test Project',
        projectName: 'Animals: Arttoy Series',
        thumbnailUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg'
        ],
        tags: ['Objects', 'Academic']
    },
    {
        id: 6,
        description: 'Test Project',
        projectName: 'Animals: Arttoy Series',
        thumbnailUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800/4c180538645233.5769acf237c56.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800/72c53038645233.5769a7f887962.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/257e0a38645233.5769a0aa37a51.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/adf96a38645233.5769a0aa36dc2.jpg'
        ],
        tags: ['Objects', 'Academic']
    }
];


/***/ }),

/***/ "./src/app/portfolio/portfolio/services/portfolio.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/portfolio/portfolio/services/portfolio.service.ts ***!
  \*******************************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _portfolio_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.data */ "./src/app/portfolio/portfolio/services/portfolio.data.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioService = /** @class */ (function () {
    function PortfolioService() {
    }
    PortfolioService.prototype.getProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_portfolio_data__WEBPACK_IMPORTED_MODULE_0__["portfolioData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.sort(function (a, b) { return b.id - a.id; }); }));
    };
    PortfolioService.prototype.filterPortfolio = function (selectedTags) {
        return this.getProjects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.filter(function (item) {
                if (!selectedTags || selectedTags.length === 0) {
                    return data;
                }
                return item.tags.some(function (tag) { return selectedTags.includes(tag); });
            });
        }));
    };
    PortfolioService.prototype.getItemGalleryInfo = function (item) {
        return {
            title: item.projectName,
            description: item.description,
            images: item.images,
            tags: item.tags
        };
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/posters/posters.module.ts":
/*!*******************************************!*\
  !*** ./src/app/posters/posters.module.ts ***!
  \*******************************************/
/*! exports provided: PostersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostersModule", function() { return PostersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posters_posters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posters/posters.component */ "./src/app/posters/posters/posters.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostersModule = /** @class */ (function () {
    function PostersModule() {
    }
    PostersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_posters_posters_component__WEBPACK_IMPORTED_MODULE_2__["PostersComponent"]]
        })
    ], PostersModule);
    return PostersModule;
}());



/***/ }),

/***/ "./src/app/posters/posters/posters.component.html":
/*!********************************************************!*\
  !*** ./src/app/posters/posters/posters.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  posters works!\n</p>\n"

/***/ }),

/***/ "./src/app/posters/posters/posters.component.scss":
/*!********************************************************!*\
  !*** ./src/app/posters/posters/posters.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posters/posters/posters.component.ts":
/*!******************************************************!*\
  !*** ./src/app/posters/posters/posters.component.ts ***!
  \******************************************************/
/*! exports provided: PostersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostersComponent", function() { return PostersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostersComponent = /** @class */ (function () {
    function PostersComponent() {
    }
    PostersComponent.prototype.ngOnInit = function () {
    };
    PostersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posters',
            template: __webpack_require__(/*! ./posters.component.html */ "./src/app/posters/posters/posters.component.html"),
            styles: [__webpack_require__(/*! ./posters.component.scss */ "./src/app/posters/posters/posters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostersComponent);
    return PostersComponent;
}());



/***/ }),

/***/ "./src/app/shared/charts/bubble/bubble.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/charts/bubble/bubble.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bubbles-container\" #container>\n  <svg class=\"bubbles\" width=\"100%\" [attr.height]=\"height\" #chartWrapper>\n    <g *ngFor=\"let d of data\" fill=\"white\" [attr.transform]=\"getTranslate(d.x, d.y)\">\n      <circle [attr.r]=\"d.r\" [attr.fill]=\"randomColor\">\n      </circle>\n      <text text-anchor=\"middle\" stroke-width=\"1px\">{{d.data.text}}</text>\n    </g>\n  </svg>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/charts/bubble/bubble.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/charts/bubble/bubble.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/charts/bubble/bubble.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/charts/bubble/bubble.component.ts ***!
  \**********************************************************/
/*! exports provided: BubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleComponent", function() { return BubbleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BubbleComponent = /** @class */ (function () {
    function BubbleComponent() {
        this.width = 930;
        this.height = 930;
        this.colors = ['#0E3D5E', '#287EBB', '#000000'];
    }
    BubbleComponent.prototype.ngOnInit = function () {
        this.buildBubbleChart();
    };
    BubbleComponent.prototype.ngAfterViewInit = function () {
        this.buildBubbleChart();
    };
    BubbleComponent.prototype.buildBubbleChart = function () {
        this.adjustChartSize();
        var sizedBubbles = this.getSizedRandomlyBubbles(this.bubbles);
        var root = d3__WEBPACK_IMPORTED_MODULE_1__["hierarchy"]({ children: sizedBubbles })
            .sum(function (d) { return d.value; });
        var bubblesPack = d3__WEBPACK_IMPORTED_MODULE_1__["pack"]()
            .size([this.width, this.height])
            .padding(1.5);
        this.data = bubblesPack(root).leaves();
    };
    BubbleComponent.prototype.adjustChartSize = function () {
        var containerWidth = this.containerDiv.nativeElement.offsetWidth;
        if (containerWidth) {
            this.width = containerWidth;
        }
    };
    Object.defineProperty(BubbleComponent.prototype, "randomColor", {
        get: function () {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        },
        enumerable: true,
        configurable: true
    });
    BubbleComponent.prototype.getTranslate = function (x, y) {
        return "translate(" + x + ", " + y + ")";
    };
    BubbleComponent.prototype.getSizedRandomlyBubbles = function (bubbles) {
        return bubbles.map(function (bubble) {
            return __assign({}, bubble, { value: Math.random() });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BubbleComponent.prototype, "containerDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleComponent.prototype, "bubbles", void 0);
    BubbleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bubble',
            template: __webpack_require__(/*! ./bubble.component.html */ "./src/app/shared/charts/bubble/bubble.component.html"),
            styles: [__webpack_require__(/*! ./bubble.component.scss */ "./src/app/shared/charts/bubble/bubble.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BubbleComponent);
    return BubbleComponent;
}());



/***/ }),

/***/ "./src/app/shared/charts/charts.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/charts/charts.module.ts ***!
  \************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble/bubble.component */ "./src/app/shared/charts/bubble/bubble.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_2__["BubbleComponent"]],
            exports: [_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_2__["BubbleComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/shared/dialog-gallery/dialog-gallery.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/dialog-gallery/dialog-gallery.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button aria-label=\"Close\" class=\"close-top-button\" mat-dialog-close>\n  <mat-icon aria-hidden>close</mat-icon>\n</button>\n<mat-dialog-content class=\"content\">\n  <app-gallery class=\"back-gallery\" [images]=\"data.images\"></app-gallery>\n  <div class=\"gallery-information\">\n    <h2>{{data.title}}</h2>\n    <p>{{data.description}}</p>\n    <app-tag-selection [tags]=\"data.tags\"></app-tag-selection>\n  </div>\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/shared/dialog-gallery/dialog-gallery.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/dialog-gallery/dialog-gallery.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-gallery {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.close-top-button {\n  z-index: 1;\n  background: transparent;\n  color: #fff; }\n\n.gallery-information {\n  z-index: 1;\n  position: relative;\n  background: rgba(255, 255, 255, 0.7);\n  width: 50%;\n  padding: 20px; }\n\n.content {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/shared/dialog-gallery/dialog-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dialog-gallery/dialog-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: DialogGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogGalleryComponent", function() { return DialogGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogGalleryComponent = /** @class */ (function () {
    function DialogGalleryComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogGalleryComponent.prototype.ngOnInit = function () { };
    DialogGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-gallery',
            template: __webpack_require__(/*! ./dialog-gallery.component.html */ "./src/app/shared/dialog-gallery/dialog-gallery.component.html"),
            styles: [__webpack_require__(/*! ./dialog-gallery.component.scss */ "./src/app/shared/dialog-gallery/dialog-gallery.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogGalleryComponent);
    return DialogGalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/gallery/gallery.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/gallery/gallery.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let image of images; index as i\" class=\"slide-container\" [class.active]=\"i === active\" [class.left]=\"i < active\"\n  [class.right]=\"i > active\">\n  <img class=\"slide-image\" [src]=\"image\" alt=\"\">\n</div>\n<div class=\"dots-container\">\n  <a *ngFor=\"let image of images; index as i\" class=\"dot-slide\" [class.active]=\"i===active\" (click)=\"goToImage(i)\"></a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/gallery/gallery.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/gallery/gallery.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  background: black; }\n  :host .slide-container {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: black;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    transition: all 1s ease-in-out; }\n  :host .slide-container.left {\n      right: 100%; }\n  :host .slide-container.right {\n      left: 100%; }\n  :host .slide-container.active {\n      left: 0; }\n  :host .slide-container .slide-image {\n      max-width: 100%;\n      max-height: 100%;\n      width: 100%; }\n  :host .dots-container {\n    position: absolute;\n    bottom: 20px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  :host .dots-container .dot-slide {\n      width: 20px;\n      height: 20px;\n      background: #0E3D5E;\n      margin: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer; }\n  :host .dots-container .dot-slide.active {\n        background: white; }\n"

/***/ }),

/***/ "./src/app/shared/gallery/gallery.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/gallery/gallery.component.ts ***!
  \*****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.active = 0;
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    GalleryComponent.prototype.goToImage = function (index) {
        this.active = index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/shared/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/shared/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/icon-button/icon-button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/icon-button/icon-button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"onClick($event)\" [href]=\"href\">\n  <picture>\n    <img src=\"./assets/icons/{{name}}.png\" [alt]=\"alt\" width=\"100\">\n  </picture>\n</a>\n"

/***/ }),

/***/ "./src/app/shared/icon-button/icon-button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/icon-button/icon-button.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/icon-button/icon-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/icon-button/icon-button.component.ts ***!
  \*************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButtonComponent = /** @class */ (function () {
    function IconButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IconButtonComponent.prototype.ngOnInit = function () { };
    IconButtonComponent.prototype.onClick = function (event) {
        if (!this.href) {
            event.preventDefault();
        }
        this.click.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "alt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], IconButtonComponent.prototype, "click", void 0);
    IconButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-button',
            template: __webpack_require__(/*! ./icon-button.component.html */ "./src/app/shared/icon-button/icon-button.component.html"),
            styles: [__webpack_require__(/*! ./icon-button.component.scss */ "./src/app/shared/icon-button/icon-button.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading/loading.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  loading works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/main-layout/main-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/main-layout/main-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/main-layout/main-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/main-layout/main-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/main-layout/main-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/shared/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/shared/main-layout/main-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var matModules = [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: matModules,
            exports: matModules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/postal-layout/postal-content/postal-content.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-content/postal-content.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-content/postal-content.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-content/postal-content.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-content/postal-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-content/postal-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PostalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalContentComponent", function() { return PostalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostalContentComponent = /** @class */ (function () {
    function PostalContentComponent() {
    }
    PostalContentComponent.prototype.ngOnInit = function () {
    };
    PostalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postal-content',
            template: __webpack_require__(/*! ./postal-content.component.html */ "./src/app/shared/postal-layout/postal-content/postal-content.component.html"),
            styles: [__webpack_require__(/*! ./postal-content.component.scss */ "./src/app/shared/postal-layout/postal-content/postal-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostalContentComponent);
    return PostalContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/postal-layout/postal-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"postal-container\" fxLayout=\"column\">\n  <div class=\"back-home-button\">\n    <app-icon-button name=\"home\" href=\"./\"></app-icon-button>\n  </div>\n  <div class=\"postal-header-container\" fxLayout.gt-md=\"row\" fxLayout=\"column\" fxLayoutGap=\"30px\">\n    <div class=\"portal-title-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n      fxFlex.gt-md=\"66%\" fxFlex=\"grow\">\n      <div class=\"postal-title\" fxFlex.gt-sm=\"40%\">\n        <ng-content select=\"app-postal-title\"></ng-content>\n      </div>\n      <div class=\"postal-title\" fxFlex.gt-sm=\"60%\">\n        <ng-content select=\"app-postal-title-note\"></ng-content>\n      </div>\n    </div>\n\n    <div class=\"postal-options-container\" fxFlex.gt-md=\"34%\">\n      <ng-content select=\"app-postal-options\"></ng-content>\n    </div>\n  </div>\n\n  <div class=\"postal-content-container\">\n    <ng-content select=\"app-postal-content\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-layout.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-layout.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  padding: 50px;\n  background: url(/leovisualmente/assets/background.jpg);\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  :host .postal-container {\n    padding: 60px;\n    background: #fff;\n    position: relative;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  :host .postal-container .back-home-button {\n      position: absolute;\n      left: -20px;\n      top: -20px; }\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostalLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalLayoutComponent", function() { return PostalLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostalLayoutComponent = /** @class */ (function () {
    function PostalLayoutComponent() {
    }
    PostalLayoutComponent.prototype.ngOnInit = function () {
    };
    PostalLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postal-layout',
            template: __webpack_require__(/*! ./postal-layout.component.html */ "./src/app/shared/postal-layout/postal-layout.component.html"),
            styles: [__webpack_require__(/*! ./postal-layout.component.scss */ "./src/app/shared/postal-layout/postal-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostalLayoutComponent);
    return PostalLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/postal-layout/postal-options/postal-options.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-options/postal-options.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"postal-options\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-options/postal-options.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-options/postal-options.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-options/postal-options.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-options/postal-options.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PostalOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalOptionsComponent", function() { return PostalOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostalOptionsComponent = /** @class */ (function () {
    function PostalOptionsComponent() {
    }
    PostalOptionsComponent.prototype.ngOnInit = function () {
    };
    PostalOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postal-options',
            template: __webpack_require__(/*! ./postal-options.component.html */ "./src/app/shared/postal-layout/postal-options/postal-options.component.html"),
            styles: [__webpack_require__(/*! ./postal-options.component.scss */ "./src/app/shared/postal-layout/postal-options/postal-options.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostalOptionsComponent);
    return PostalOptionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"postal-note primary\">\n  <ng-content></ng-content>\n</p>\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postal-note {\n  font-size: 2rem;\n  margin: 0px;\n  line-height: 1.2; }\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PostalTitleNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalTitleNoteComponent", function() { return PostalTitleNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostalTitleNoteComponent = /** @class */ (function () {
    function PostalTitleNoteComponent() {
    }
    PostalTitleNoteComponent.prototype.ngOnInit = function () {
    };
    PostalTitleNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postal-title-note',
            template: __webpack_require__(/*! ./postal-title-note.component.html */ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.html"),
            styles: [__webpack_require__(/*! ./postal-title-note.component.scss */ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostalTitleNoteComponent);
    return PostalTitleNoteComponent;
}());



/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title/postal-title.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title/postal-title.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"postal-title\">\n  <ng-content></ng-content>\n</h1>\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title/postal-title.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title/postal-title.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0px; }\n"

/***/ }),

/***/ "./src/app/shared/postal-layout/postal-title/postal-title.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/postal-layout/postal-title/postal-title.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostalTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalTitleComponent", function() { return PostalTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostalTitleComponent = /** @class */ (function () {
    function PostalTitleComponent() {
    }
    PostalTitleComponent.prototype.ngOnInit = function () {
    };
    PostalTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postal-title',
            template: __webpack_require__(/*! ./postal-title.component.html */ "./src/app/shared/postal-layout/postal-title/postal-title.component.html"),
            styles: [__webpack_require__(/*! ./postal-title.component.scss */ "./src/app/shared/postal-layout/postal-title/postal-title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostalTitleComponent);
    return PostalTitleComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _charts_charts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/charts.module */ "./src/app/shared/charts/charts.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/shared/gallery/gallery.component.ts");
/* harmony import */ var _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-gallery/dialog-gallery.component */ "./src/app/shared/dialog-gallery/dialog-gallery.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/shared/main-layout/main-layout.component.ts");
/* harmony import */ var _postal_layout_postal_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postal-layout/postal-layout.component */ "./src/app/shared/postal-layout/postal-layout.component.ts");
/* harmony import */ var _postal_layout_postal_title_postal_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postal-layout/postal-title/postal-title.component */ "./src/app/shared/postal-layout/postal-title/postal-title.component.ts");
/* harmony import */ var _postal_layout_postal_title_note_postal_title_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./postal-layout/postal-title-note/postal-title-note.component */ "./src/app/shared/postal-layout/postal-title-note/postal-title-note.component.ts");
/* harmony import */ var _postal_layout_postal_options_postal_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./postal-layout/postal-options/postal-options.component */ "./src/app/shared/postal-layout/postal-options/postal-options.component.ts");
/* harmony import */ var _postal_layout_postal_content_postal_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./postal-layout/postal-content/postal-content.component */ "./src/app/shared/postal-layout/postal-content/postal-content.component.ts");
/* harmony import */ var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon-button/icon-button.component */ "./src/app/shared/icon-button/icon-button.component.ts");
/* harmony import */ var _tag_selection_tag_selection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tag-selection/tag-selection.component */ "./src/app/shared/tag-selection/tag-selection.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _charts_charts_module__WEBPACK_IMPORTED_MODULE_0__["ChartsModule"]],
            declarations: [
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                _postal_layout_postal_layout_component__WEBPACK_IMPORTED_MODULE_7__["PostalLayoutComponent"],
                _postal_layout_postal_title_postal_title_component__WEBPACK_IMPORTED_MODULE_8__["PostalTitleComponent"],
                _postal_layout_postal_title_note_postal_title_note_component__WEBPACK_IMPORTED_MODULE_9__["PostalTitleNoteComponent"],
                _postal_layout_postal_options_postal_options_component__WEBPACK_IMPORTED_MODULE_10__["PostalOptionsComponent"],
                _postal_layout_postal_content_postal_content_component__WEBPACK_IMPORTED_MODULE_11__["PostalContentComponent"],
                _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_12__["IconButtonComponent"],
                _tag_selection_tag_selection_component__WEBPACK_IMPORTED_MODULE_13__["TagSelectionComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"],
                _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_2__["DialogGalleryComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]
            ],
            exports: [
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _postal_layout_postal_layout_component__WEBPACK_IMPORTED_MODULE_7__["PostalLayoutComponent"],
                _postal_layout_postal_title_postal_title_component__WEBPACK_IMPORTED_MODULE_8__["PostalTitleComponent"],
                _postal_layout_postal_title_note_postal_title_note_component__WEBPACK_IMPORTED_MODULE_9__["PostalTitleNoteComponent"],
                _postal_layout_postal_options_postal_options_component__WEBPACK_IMPORTED_MODULE_10__["PostalOptionsComponent"],
                _postal_layout_postal_content_postal_content_component__WEBPACK_IMPORTED_MODULE_11__["PostalContentComponent"],
                _tag_selection_tag_selection_component__WEBPACK_IMPORTED_MODULE_13__["TagSelectionComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"],
                _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_2__["DialogGalleryComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"],
                _charts_charts_module__WEBPACK_IMPORTED_MODULE_0__["ChartsModule"]
            ],
            entryComponents: [_dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_2__["DialogGalleryComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/tag-selection/tag-select.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/tag-selection/tag-select.model.ts ***!
  \**********************************************************/
/*! exports provided: TagSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagSelect", function() { return TagSelect; });
var TagSelect = /** @class */ (function () {
    function TagSelect(tag, selected) {
        this.tag = tag;
        this.selected = selected;
    }
    return TagSelect;
}());



/***/ }),

/***/ "./src/app/shared/tag-selection/tag-selection.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/tag-selection/tag-selection.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tagSelections?.length; else noLabelsTemplate\" class=\"tag-selection-container\">\n  <button *ngFor=\"let tagSelection of tagSelections\" class=\"tag-item accent\" [class.selected]=\"tagSelection.selected\"\n    (click)=\"onSelect(tagSelection.tag, $event)\">\n    {{tagSelection.tag}}\n  </button>\n</div>\n\n\n<ng-template #noLabelsTemplate>\n  <div class=\"mutted\">There are no labels to filter</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/tag-selection/tag-selection.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/tag-selection/tag-selection.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-item {\n  font-size: 2rem;\n  background: transparent;\n  border: 0px;\n  padding: 5px 5px;\n  padding-bottom: 1px;\n  margin-right: 41px;\n  line-height: 1.3; }\n  .tag-item.selected {\n    border-bottom: 2px solid #0E3D5E; }\n"

/***/ }),

/***/ "./src/app/shared/tag-selection/tag-selection.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/tag-selection/tag-selection.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagSelectionComponent", function() { return TagSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tag_select_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-select.model */ "./src/app/shared/tag-selection/tag-select.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagSelectionComponent = /** @class */ (function () {
    function TagSelectionComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TagSelectionComponent.prototype.ngOnInit = function () {
        if (this.tags && this.tags.length) {
            this.tagSelections = this.tags.map(function (tag) { return new _tag_select_model__WEBPACK_IMPORTED_MODULE_1__["TagSelect"](tag, false); });
        }
    };
    TagSelectionComponent.prototype.onSelect = function (clickedTag, event) {
        this.tagSelections = this.tagSelections.map(function (tagSelection) {
            return new _tag_select_model__WEBPACK_IMPORTED_MODULE_1__["TagSelect"](tagSelection.tag, tagSelection.tag === clickedTag
                ? !tagSelection.selected
                : tagSelection.selected);
        });
        this.emitValues();
    };
    TagSelectionComponent.prototype.emitValues = function () {
        var tags = this.tagSelections
            .filter(function (selection) { return selection.selected; })
            .map(function (selection) { return selection.tag; });
        this.change.emit(tags);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TagSelectionComponent.prototype, "tags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TagSelectionComponent.prototype, "change", void 0);
    TagSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-selection',
            template: __webpack_require__(/*! ./tag-selection.component.html */ "./src/app/shared/tag-selection/tag-selection.component.html"),
            styles: [__webpack_require__(/*! ./tag-selection.component.scss */ "./src/app/shared/tag-selection/tag-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TagSelectionComponent);
    return TagSelectionComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Roger/Documents/GitHub/leovisualmente/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map