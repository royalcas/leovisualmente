(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funny-facts-funny-facts-module"],{

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



/***/ })

}]);
//# sourceMappingURL=funny-facts-funny-facts-module.js.map