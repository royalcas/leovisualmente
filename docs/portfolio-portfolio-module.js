(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

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



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module.js.map