(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state-adapt-dashboards-feature"],{

/***/ "4GV0":
/*!******************************************************************************!*\
  !*** ./libs/dashboards-feature/src/lib/dashboards-feature-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardsFeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsFeatureRoutingModule", function() { return DashboardsFeatureRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "wudT");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "IiXm");
/* harmony import */ var _dashboards_feature_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards-feature.module */ "Rl5d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardsComponent"],
    },
    {
        path: ':dashboardId',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
class DashboardsFeatureRoutingModule {
}
DashboardsFeatureRoutingModule.ɵfac = function DashboardsFeatureRoutingModule_Factory(t) { return new (t || DashboardsFeatureRoutingModule)(); };
DashboardsFeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardsFeatureRoutingModule });
DashboardsFeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _dashboards_feature_module__WEBPACK_IMPORTED_MODULE_3__["DashboardsFeatureModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardsFeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _dashboards_feature_module__WEBPACK_IMPORTED_MODULE_3__["DashboardsFeatureModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "IiXm":
/*!**************************************************************************!*\
  !*** ./libs/dashboards-feature/src/lib/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class DashboardComponent {
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["state-adapt-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "Rl5d":
/*!**********************************************************************!*\
  !*** ./libs/dashboards-feature/src/lib/dashboards-feature.module.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardsFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsFeatureModule", function() { return DashboardsFeatureModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "IiXm");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "wudT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





class DashboardsFeatureModule {
}
DashboardsFeatureModule.ɵfac = function DashboardsFeatureModule_Factory(t) { return new (t || DashboardsFeatureModule)(); };
DashboardsFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardsFeatureModule });
DashboardsFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardsFeatureModule, { declarations: [_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "wudT":
/*!****************************************************************************!*\
  !*** ./libs/dashboards-feature/src/lib/dashboards/dashboards.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsComponent", function() { return DashboardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


const _c0 = function () { return ["123"]; };
class DashboardsComponent {
}
DashboardsComponent.ɵfac = function DashboardsComponent_Factory(t) { return new (t || DashboardsComponent)(); };
DashboardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardsComponent, selectors: [["state-adapt-dashboards"]], decls: 4, vars: 2, consts: [["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function DashboardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboards works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go to Dashboard 123!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "y/7n":
/*!**********************************************!*\
  !*** ./libs/dashboards-feature/src/index.ts ***!
  \**********************************************/
/*! exports provided: DashboardsFeatureModule, DashboardsFeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dashboards_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dashboards-feature.module */ "Rl5d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardsFeatureModule", function() { return _lib_dashboards_feature_module__WEBPACK_IMPORTED_MODULE_0__["DashboardsFeatureModule"]; });

/* harmony import */ var _lib_dashboards_feature_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dashboards-feature-routing.module */ "4GV0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardsFeatureRoutingModule", function() { return _lib_dashboards_feature_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardsFeatureRoutingModule"]; });





/***/ })

}]);
//# sourceMappingURL=state-adapt-dashboards-feature.js.map