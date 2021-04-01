(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*************************************!*\
  !*** multi ./apps/docs/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelpearson/Documents/web/state-adapt/apps/docs/src/main.ts */"COzD");


/***/ }),

/***/ "COzD":
/*!*******************************!*\
  !*** ./apps/docs/src/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "f8Lx");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "ZnMD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "Fcm0":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/intro/intro.md ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Why StateAdapt?\n\n## Minimal\n\nStateAdapt achieves the original intent of Redux, but in a much more\nminimal way. StateAdapt turns Actions into RxJS Subjects and reducers into\nobjects, reducing conceptual complexity and eliminating ~40% of the code\nrequired to create event sources and state changes.\n\n## Reactive\n\nStateAdapt relies on RxJS for all unidirectional data flow. Rather than\nremoving pieces of Redux critical to reactivity, as most alternatives do,\nStateAdapt simply reimplements them in RxJS.\n\n## Reusable\n\nStateAdapt uses state adapters to maximize reusability in state management.\n\n## Learn More\n\n[Introducing StateAdapt](https://medium.com/weekly-webtips/introducing-stateadapt-reusable-reactive-state-management-9f0388f1850e)\n\n# Demos\n\n- [StackBlitz: NgRx](https://stackblitz.com/edit/state-adapt-ngrx?file=src/app/app.component.ts)\n- [StackBlitz: NGXS](https://stackblitz.com/edit/state-adapt-ngxs?file=src/app/app.component.ts)\n- [Dashboards Demo App](/dashboards)\n\n# Getting Started\n\nJump to:\n\n- [NgRx](#ngrx)\n- [NGXS](#ngxs)\n\n## NgRx\n\nFirst, `npm install`:\n\n```\nnpm install -S @ngrx/store @ngrx/store-devtools @state-adapt/core @state-adapt/ngrx\n```\n\nInclude in your app.module.ts like so:\n\n```typescript\nimport { StoreModule } from '@ngrx/store';\nimport { StoreDevtoolsModule } from '@ngrx/store-devtools';\nimport { actionSanitizer, stateSanitizer } from '@state-adapt/core';\nimport { adaptReducer } from '@state-adapt/ngrx';\n```\n\nIn your module imports array:\n\n```typescript\n    StoreModule.forRoot({ adapt: adaptReducer }),\n    StoreDevtoolsModule.instrument({\n      maxAge: 25,\n      logOnly: environment.production,\n      actionSanitizer,\n      stateSanitizer,\n    }),\n```\n\nNow you can use it in a component or service. Here's an example in a component:\n\n```typescript\nimport { Source, createAdapter } from '@state-adapt/core';\nimport { Adapt } from '@state-adapt/ngrx';\n...\n  newStr$ = new Source<string>('newStr$');\n  stringAdapter = createAdapter<string>()({\n    append: (state, newStr: string) => state + newStr,\n  });\n  stringStore = this.adapt.init(['string', this.stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  str$ = this.stringStore.getState();\n  constructor(private adapt: Adapt) {\n    this.str$.subscribe();\n    setTimeout(() => this.newStr$.next('Hello World!'), 3000);\n  }\n...\n```\n\nOpen up Redux Devtools and you should see the state update after 3 seconds.\n\n## NGXS\n\nFirst, `npm install`:\n\n```\nnpm install -S @ngrx/store @ngxs/store @ngxs/devtools-plugin @state-adapt/core @state-adapt/ngxs\n```\n\nInclude in your app.module.ts like so:\n\n```typescript\nimport { NgxsModule } from '@ngxs/store';\nimport { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';\nimport { actionSanitizer, stateSanitizer } from '@state-adapt/core';\nimport { AdaptState } from '@state-adapt/ngxs';\n```\n\nIn your module imports array:\n\n```typescript\n    NgxsModule.forRoot([AdaptState], {\n      developmentMode: !environment.production\n    }),\n    NgxsReduxDevtoolsPluginModule.forRoot({\n      disabled: environment.production,\n      actionSanitizer,\n      stateSanitizer,\n    }),\n```\n\nNow you can use it in a component or service. Here's an example in a component:\n\n```typescript\nimport { Source, createAdapter } from '@state-adapt/core';\nimport { Adapt } from '@state-adapt/ngxs';\n...\n  newStr$ = new Source<string>('newStr$');\n  stringAdapter = createAdapter<string>()({\n    append: (state, newStr: string) => state + newStr,\n  });\n  stringStore = this.adapt.init(['string', this.stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  str$ = this.stringStore.getState();\n  constructor(private adapt: Adapt) {\n    this.str$.subscribe();\n    setTimeout(() => this.newStr$.next('Hello World!'), 3000);\n  }\n...\n```\n\nOpen up Redux Devtools and you should see the state update after 3 seconds.\n");

/***/ }),

/***/ "PIQb":
/*!**********************************************************!*\
  !*** ./apps/docs/src/app/circuits/circuits.component.ts ***!
  \**********************************************************/
/*! exports provided: CircuitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitsComponent", function() { return CircuitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function CircuitsComponent__svg_svg_0__svg_g_1__svg_use_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 32);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_1__svg_use_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_1__svg_use_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -375);
} }
function CircuitsComponent__svg_svg_0__svg_g_1__svg_use_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 35);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircuitsComponent__svg_svg_0__svg_g_1__svg_use_1_Template, 1, 2, "use", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircuitsComponent__svg_svg_0__svg_g_1__svg_use_2_Template, 1, 2, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircuitsComponent__svg_svg_0__svg_g_1__svg_use_3_Template, 1, 2, "use", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircuitsComponent__svg_svg_0__svg_g_1__svg_use_4_Template, 1, 2, "use", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const terminal_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", terminal_r4.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r4.type === "clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r4.type === "http");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r4.type === "websocket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r4.type === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", terminal_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", terminal_r4.path);
} }
function CircuitsComponent__svg_svg_0__svg_g_3__svg_use_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_3__svg_use_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 35);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_3__svg_use_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "use", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", -30)("y", -360);
} }
function CircuitsComponent__svg_svg_0__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircuitsComponent__svg_svg_0__svg_g_3__svg_use_1_Template, 1, 2, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircuitsComponent__svg_svg_0__svg_g_3__svg_use_2_Template, 1, 2, "use", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircuitsComponent__svg_svg_0__svg_g_3__svg_use_3_Template, 1, 2, "use", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const terminal_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", terminal_r9.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r9.type === "http");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r9.type === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", terminal_r9.type === "storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", terminal_r9.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", terminal_r9.path);
} }
function CircuitsComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircuitsComponent__svg_svg_0__svg_g_1_Template, 9, 7, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircuitsComponent__svg_svg_0__svg_g_3_Template, 8, 6, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circuit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", circuit_r1.sources);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", circuit_r1.sinks);
} }
var SourceType;
(function (SourceType) {
    SourceType["WEBSOCKET"] = "websocket";
    SourceType["HTTP"] = "http";
    SourceType["CLOCK"] = "clock";
    SourceType["HTML"] = "html";
})(SourceType || (SourceType = {}));
var SinkType;
(function (SinkType) {
    SinkType["STORAGE"] = "storage";
    SinkType["HTTP"] = "http";
    SinkType["HTML"] = "html";
})(SinkType || (SinkType = {}));
const getNumberBetween = (a, b) => a + Math.floor((b - a + 1) * Math.random());
const getNumbersBetween = (a, b, n, ar = [], newN) => {
    if (!n)
        return ar;
    const nextNewN = getNumberBetween(a, b);
    const newNAlreadyChosen = ar.indexOf(newN) !== -1;
    const newNValid = !isNaN(newN) && !newNAlreadyChosen;
    return newNValid
        ? getNumbersBetween(a, b, n - 1, [...ar, newN], nextNewN)
        : getNumbersBetween(a, b, n, ar, nextNewN);
};
const getRandomEl = (ar) => {
    const i = getNumberBetween(0, ar.length - 1);
    return { i, el: ar[i] };
};
// const getRandomEls = <T>(ar: T[], a = 1, b?: number) => {
//   b = b ?? ar.length;
//   const n = Math.ceil((b - a) * Math.random());
//   const ns = getNumbersBetween(0, ar.length - 1, n);
//   return [ar, ns];
// };
// const updateAr = <T>(ar: T[], newEl: T, i: number) => [
//   ...ar.slice(0, i),
//   newEl,
//   ...ar.slice(i + 1),
// ];
const waitRandom = (min, n, fn) => {
    fn();
    setTimeout(() => waitRandom(min, n, fn), Math.max(min, n * Math.random()));
};
const mapIndex = (i, l1, l2) => Math.floor((i * l2) / l1);
const getTerminals = (gridWidth, n) => getNumbersBetween(0, 2 * gridWidth - 1, n)
    .sort((a, b) => {
    const isABelow = a / gridWidth >= 1;
    const isBBelow = b / gridWidth >= 1;
    const switchFactor = isABelow && isBBelow ? -1 : 1;
    return (a - b) * switchFactor;
})
    .filter(position => position % gridWidth) // Filter out first position
    .map((position, i) => {
    const gridHeight = gridWidth * 2;
    const cornerPosition = position % gridWidth;
    const isBelow = position / gridWidth >= 1;
    const order = isBelow
        ? (position - 1.5 * gridWidth) * -1 + 1.5 * gridWidth // Shift to center at 0, reflect, shift back
        : position;
    const height = Math.max(0, getNumberBetween(0, gridWidth - cornerPosition - 1));
    const midY = (gridHeight / 2) * 60;
    const y = midY - (isBelow ? -(height + 0.5) : height + 0.5) * 60; // -0.5 to get to center. height of 4 => y of 30 (half down)
    const x = (gridWidth - (cornerPosition + height + 0.5)) * 60; // 45 degree, +0.5 to get to center
    // Connections to adapter:
    const gap = 60 / n;
    const topConnectionY = midY - 30 + gap / 2;
    const connectionY = topConnectionY + i * gap;
    const cornerX = 30 + height * 60;
    const cornerY = connectionY - y;
    return { order, x, y, cornerX, cornerY };
});
const getSources = (n, gridWidth) => getTerminals(gridWidth, n).map(({ order, x, y, cornerX, cornerY }) => ({
    type: Object.values(SourceType)[mapIndex(order, gridWidth * 2, Object.values(SourceType).length)],
    active: false,
    x,
    y,
    translate: `translate(${x}, ${y})`,
    path: `M 30 0 L ${cornerX} ${cornerY} H ${gridWidth * 60 - x}`,
}));
const getSinks = (n, gridWidth) => getTerminals(gridWidth, n).map(({ order, x, y, cornerX, cornerY }) => {
    const reflectedX = (gridWidth * 2 + 2) * 60 - x;
    return {
        type: Object.values(SinkType)[mapIndex(order, gridWidth * 2, Object.values(SinkType).length)],
        active: false,
        x,
        y,
        translate: `translate(${reflectedX}, ${y})`,
        path: `M -30 0 L ${-cornerX} ${cornerY} H ${-(gridWidth * 60 - x)}`,
    };
});
class CircuitsComponent {
    constructor(zone) {
        this.zone = zone;
        this.circuits = new Array(15).fill(0).map((z, i) => ({
            i,
            sources: getSources(4, 6),
            sinks: getSinks(4, 6),
        }));
        this.zone.runOutsideAngular(() => this.makeCircuitsFire());
    }
    makeCircuitsFire() {
        const startSink = 500;
        const endSource = 2000;
        const endSink = startSink + endSource;
        waitRandom(500, 3000, () => {
            const sourceGroups = Array.from(document.querySelectorAll('.source'));
            if (!sourceGroups.length)
                return;
            const sourceGroup = getRandomEl(sourceGroups).el;
            const sourceParent = sourceGroup.parentNode;
            const pulse = sourceGroup.querySelector('.connector-pulse path');
            pulse.className.baseVal += ' active';
            const sinkGroups = Array.from(sourceParent.querySelectorAll('.sink')).map(child => child.querySelector('.connector-pulse path'));
            setTimeout(() => sinkGroups.forEach((child) => (child.className.baseVal +=
                Math.random() < 0.75 ? ' active' : '')), startSink);
            setTimeout(() => (pulse.className.baseVal = pulse.className.baseVal.replace(/(\s*)active/, '')), endSource);
            setTimeout(() => sinkGroups.forEach((child) => (child.className.baseVal = child.className.baseVal.replace(/(\s*)active/, ''))), endSink);
        });
    }
}
CircuitsComponent.ɵfac = function CircuitsComponent_Factory(t) { return new (t || CircuitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CircuitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircuitsComponent, selectors: [["state-adapt-circuits"]], decls: 21, vars: 1, consts: [["class", "circuit", "viewBox", "-3 -3 843 723", 4, "ngFor", "ngForOf"], [2, "display", "none"], ["id", "adapter", "viewBox", "-63 -63 126 126", 1, "adapter"], ["d", "M-30 -52 l-30 52 l30 52 h60 l30 -52 l-30 -52 h-60"], ["id", "clock", "viewBox", "-33 -33 66 66", 1, "clock"], ["r", "30", "cx", "0", "cy", "0", 1, "clock-circle"], ["d", "M0 .5 v-23", 1, "hand"], ["d", "M-.4 -.4 l12 12", 1, "hand"], ["id", "http", "viewBox", "0 0 99.79 59.1", 1, "http"], ["d", "M70.67,12.9h4.72l1,2.93c5-4.2,10.43-5.74,16.19-2.4s7.51,9.21,7.14,15.45a30,30,0,0,1-2.57,11c-3.69,7.61-11.34,8.79-21.2,3.57V58.86l-5.3.24ZM94,29.46c.06-7.57-2.63-12-7.66-12.66-5.84-.74-9.57,2.84-10.35,10-1,9.1,1.94,14.68,8,15.18C90.14,42.44,93.94,37.73,94,29.46Z"], ["d", "M0,0H4.87V15c4-1.17,7.43-2.82,11-3.08,6.19-.46,10.13,2.64,10.55,8.76.57,8.23.14,16.53.14,25H21c0-6.89,0-13.66,0-20.44,0-4.1-.53-7.8-5.68-8.36-4.89-.54-8.91,2.17-9.59,7.24-.64,4.75-.48,9.61-.62,14.42-.06,2.28,0,4.57,0,7.1H0Z"], ["d", "M36.1,17.48,32,16.55V13l3.88-1.06.49-8.62h5.31l.41,8.66,4.72.89.17,3.9-5.08.46V40.36l5,1.83v3.87c-2,0-4.08.53-5.71-.14s-4-2.37-4.3-4c-.78-3.85-.65-7.89-.74-11.86C36,26,36.1,21.85,36.1,17.48Z"], ["d", "M60.13,12l4.68.82.28,3.62-5,.9v23.1l4.78,1.78v3.24c-7.63,2-10.62-.09-10.78-7.54-.14-6.63,0-13.27,0-20.2L50,16.36V13.13l4-1.34c.13-2.74.24-5.36.38-8.43l5.32-.45C59.8,6.07,60,9,60.13,12Z"], ["id", "websocket", "viewBox", "0 0 256 193", "xmlns", "http://www.w3.org/2000/svg", 1, "websocket"], ["d", "M192.44 144.645h31.78V68.339l-35.805-35.804-22.472 22.472 26.497 26.497v63.14zm31.864 15.931H113.452L86.954 134.08l11.237-11.236 21.885 21.885h45.028l-44.357-44.441 11.32-11.32 44.357 44.358V88.296l-21.801-21.801 11.152-11.153L110.685 0H0l31.696 31.696v.084H97.436l23.227 23.227-33.96 33.96L63.476 65.74V47.712h-31.78v31.193l55.007 55.007L64.314 156.3l35.805 35.805H256l-31.696-31.529z"], ["id", "html", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 220.8 138.84", 1, "html"], ["d", "M145.38,10.14a68.44,68.44,0,0,1-1.95,6.71q-23.1,57.57-46.34,115.09c-2.48,6.12-8.38,8.33-14.39,6-5.65-2.23-8.36-7.64-6-13.79,6.16-16.31,12.61-32.52,19.08-48.71,9-22.51,18.16-45,27.21-67.47,1.93-4.8,5.44-7.73,10.48-7.93A10.93,10.93,0,0,1,144,6.33,34.22,34.22,0,0,1,145.38,10.14Z"], ["d", "M26.47,72.76l36,34a11.51,11.51,0,0,1,3.8,10.78c-1.26,8.06-11.32,12.53-17.17,6.89C33.27,109.22,17.85,93.56,2.51,77.85c-3.6-3.69-3.25-9.28.55-13.12Q25.71,41.84,48.72,19.31c4.06-4,10.27-3.56,14.38.3s4.9,10.55,1,14.82C57,42.14,49.6,49.6,42.26,57.09,37.61,61.85,32.82,66.47,26.47,72.76Z"], ["d", "M194.82,71.37c-11.27-10.65-21.33-20.1-31.31-29.62a93.84,93.84,0,0,1-6.79-7.31,10.17,10.17,0,0,1,.54-14.37c4-4.11,10.82-4.89,14.84-.93Q195.4,42,218.28,65.41a9,9,0,0,1-.21,12.68q-22.95,23.28-46.32,46.14c-4,3.89-10.42,3.15-14.39-.87-4.18-4.23-4.61-10.54-.54-14.83q12.7-13.41,25.81-26.42C186,78.72,189.83,75.73,194.82,71.37Z"], ["id", "storage", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "storage"], ["d", "M283,512H229a53.3,53.3,0,0,0-5.86-.83c-37.51-1.37-74.7-5.38-111.42-13.23-27.57-5.9-54.61-13.49-79.47-27.23C18.06,462.86,5.43,453.32,0,437V75C4.25,61.76,13.73,53,25,45.67a57.49,57.49,0,0,1,9.49-5.5c16.33-6.53,32.43-13.9,49.23-19C121.61,9.78,160.75,4.82,200.17,2c9.94-.7,19.89-1.35,29.83-2h53c2.3.29,4.59.76,6.89.84,37.34,1.4,74.36,5.45,110.91,13.29,26.74,5.73,53,13.14,77.23,26.2,14.85,8,28.27,17.61,34,34.67V437c-3,5.29-5,11.59-9.18,15.64a131,131,0,0,1-23.59,18.15c-16.82,10-35.41,16-54.23,21.15-37.88,10.33-76.57,15.61-115.69,18.15C300.54,510.66,291.77,511.36,283,512ZM32.17,432c2.83,2.21,5.77,5.37,9.38,7.19,10.53,5.29,21,10.91,32.07,14.87,44.77,16,91.45,22.16,138.62,24.8,53.38,3,106.59,1.06,159.4-7.89,28.94-4.91,57.39-11.7,84.29-23.84,8.82-4,17.39-8.4,23.93-15.59V343.27c-8.27,3.64-16.15,7.55-24.33,10.63-51.89,19.5-106.13,26.17-161,29.06a761.31,761.31,0,0,1-126.75-4c-33.64-3.84-66.9-9.69-99-20.69-12.36-4.23-24.33-9.6-36.58-14.5ZM479.9,231.69c-12.13,4.89-23.63,10.18-35.56,14.22C397.43,261.8,348.76,268,299.59,270.74c-57.92,3.17-115.58.59-172.74-9.82-32.19-5.86-63.73-13.92-93-29.22a7,7,0,0,0-1.85-.33v72.07C41.1,313,53,318.27,65.09,323c43,16.7,87.94,24.14,133.61,26.76,31.89,1.83,63.94,1.81,95.89,1.14A510.56,510.56,0,0,0,401.39,337c21.58-5.09,42.85-11.23,62.47-21.87,5.88-3.19,11.2-7.43,16-10.69ZM480,119.93c-14,5.42-27.57,11.44-41.59,15.92-42.44,13.58-86.27,19.47-130.59,22.32-62.44,4-124.53,1.4-186.1-10.23-28-5.29-55.48-12.6-81.35-25-2.64-1.26-5.26-2.57-8.23-4v73.55c5,3.36,10.22,7.64,16.09,10.56A229.93,229.93,0,0,0,76.13,215c51.94,17.66,105.83,23.3,160.26,24.82,45.22,1.26,90.26-1.16,134.93-8.78,29.1-5,57.71-11.74,84.77-24,8.8-4,17.37-8.38,23.86-15.64Zm.59-39.52c-4.34-3.35-7-6-10.11-7.69-7.75-4.17-15.5-8.51-23.67-11.71C404,44.28,359.13,37.59,313.69,34A755.35,755.35,0,0,0,216.3,32.9c-39.84,2-79.26,6.88-117.88,17.15-17.56,4.67-34.82,10.26-50.81,19-5.26,2.89-10,6.67-15.51,10.38a57.1,57.1,0,0,0,5,4.58,108.88,108.88,0,0,0,10.9,7c25.79,13.5,53.68,20.51,82,26,31.62,6.13,63.58,9.17,95.75,10.35,59,2.16,117.53-1.12,175.24-14.36,21.12-4.85,41.86-11,61.19-21C468.17,88.91,473.63,84.83,480.54,80.41Z"], ["viewBox", "-3 -3 843 723", 1, "circuit"], ["class", "source", 4, "ngFor", "ngForOf"], [0, "xlink", "href", "#adapter", "width", "120", "transform", "translate(360, 0), rotate(30, 60, 360)", 1, "adapter"], ["class", "sink", 4, "ngFor", "ngForOf"], [1, "source"], [0, "xlink", "href", "#clock", "width", "60", 4, "ngIf"], [0, "xlink", "href", "#http", "width", "60", 4, "ngIf"], [0, "xlink", "href", "#websocket", "width", "60", 4, "ngIf"], [0, "xlink", "href", "#html", "width", "60", 4, "ngIf"], [1, "connector"], [1, "connector-pulse"], [0, "xlink", "href", "#clock", "width", "60"], [0, "xlink", "href", "#http", "width", "60"], [0, "xlink", "href", "#websocket", "width", "60"], [0, "xlink", "href", "#html", "width", "60"], [1, "sink"], [0, "xlink", "href", "#storage", "width", "60", 4, "ngIf"], [0, "xlink", "href", "#storage", "width", "60"]], template: function CircuitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircuitsComponent__svg_svg_0_Template, 4, 2, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.circuits);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".circuit[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 21vw;\n  height: 18vw;\n  stroke: #525252;\n  fill: none;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(1) {\n  left: 4.5vw;\n  top: -11.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(2) {\n  left: -4.5vw;\n  top: 2.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(3) {\n  left: 16.2vw;\n  top: 18vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(4) {\n  left: 8.1vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(5) {\n  left: -6.75vw;\n  top: 40.5vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(6) {\n  left: 32.4vw;\n  top: 45vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(7) {\n  left: 54vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(8) {\n  left: 75.6vw;\n  top: 36vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(9) {\n  left: 45.45vw;\n  top: 9vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(10) {\n  left: 58.5vw;\n  top: -7.65vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(11) {\n  left: 89.1vw;\n  top: -2.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(12) {\n  left: 127.8vw;\n  top: 6.75vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(13) {\n  left: 108vw;\n  top: 18vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(14) {\n  left: 118.8vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(15) {\n  left: 140.4vw;\n  top: 42.75vw;\n}\n.circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n  stroke-width: 6px;\n  opacity: 0.3;\n}\n@media screen and (min-width: 800px) {\n  .circuit[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 16.5vw;\n    height: 14.1428571429vw;\n    stroke: #525252;\n    fill: none;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(1) {\n    left: 3.5357142857vw;\n    top: -8.8392857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(2) {\n    left: -3.5357142857vw;\n    top: 1.7678571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(3) {\n    left: 12.7285714286vw;\n    top: 14.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(4) {\n    left: 6.3642857143vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(5) {\n    left: -5.3035714286vw;\n    top: 31.8214285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(6) {\n    left: 25.4571428571vw;\n    top: 35.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(7) {\n    left: 42.4285714286vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(8) {\n    left: 59.4vw;\n    top: 28.2857142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(9) {\n    left: 35.7107142857vw;\n    top: 7.0714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(10) {\n    left: 45.9642857143vw;\n    top: -6.0107142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(11) {\n    left: 70.0071428571vw;\n    top: -1.7678571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(12) {\n    left: 100.4142857143vw;\n    top: 5.3035714286vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(13) {\n    left: 84.8571428571vw;\n    top: 14.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(14) {\n    left: 93.3428571429vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(15) {\n    left: 110.3142857143vw;\n    top: 33.5892857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    stroke-width: 6px;\n    opacity: 0.3;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .circuit[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 13.5vw;\n    height: 11.5714285714vw;\n    stroke: #525252;\n    fill: none;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(1) {\n    left: 2.8928571429vw;\n    top: -7.2321428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(2) {\n    left: -2.8928571429vw;\n    top: 1.4464285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(3) {\n    left: 10.4142857143vw;\n    top: 11.5714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(4) {\n    left: 5.2071428571vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(5) {\n    left: -4.3392857143vw;\n    top: 26.0357142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(6) {\n    left: 20.8285714286vw;\n    top: 28.9285714286vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(7) {\n    left: 34.7142857143vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(8) {\n    left: 48.6vw;\n    top: 23.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(9) {\n    left: 29.2178571429vw;\n    top: 5.7857142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(10) {\n    left: 37.6071428571vw;\n    top: -4.9178571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(11) {\n    left: 57.2785714286vw;\n    top: -1.4464285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(12) {\n    left: 82.1571428571vw;\n    top: 4.3392857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(13) {\n    left: 69.4285714286vw;\n    top: 11.5714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(14) {\n    left: 76.3714285714vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(15) {\n    left: 90.2571428571vw;\n    top: 27.4821428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    stroke-width: 6px;\n    opacity: 0.3;\n  }\n}\n.clock[_ngcontent-%COMP%]   .clock-circle[_ngcontent-%COMP%] {\n  stroke-width: 5px;\n  fill: none;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  stroke-width: 3px;\n}\n.http[_ngcontent-%COMP%], .websocket[_ngcontent-%COMP%], .clock[_ngcontent-%COMP%], .html[_ngcontent-%COMP%], .storage[_ngcontent-%COMP%] {\n  fill: #525252;\n  opacity: 0.3;\n}\n.connector[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #525252;\n  fill: none;\n  stroke-width: 3;\n  opacity: 0.3;\n  transition: stroke 2s linear all;\n}\n.connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #5d2f88;\n  fill: none;\n  stroke-width: 4;\n  stroke-dasharray: 450;\n  stroke-dashoffset: 450;\n}\n.connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%] {\n  animation: dash 0.4s linear;\n}\n.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-dashoffset: -450;\n}\n.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%] {\n  animation: dash 0.4s linear reverse;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 450;\n  }\n  100% {\n    stroke-dashoffset: -450;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NpcmN1aXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFpQkEsZUFsQ1k7RUFtQ1osVUFBQTtBQS9CSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFLSjtBQVBFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFTSjtBQVhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFhSjtBQWZFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFpQko7QUFuQkU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQXFCSjtBQXZCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBeUJKO0FBM0JFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUE2Qko7QUEvQkU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQWlDSjtBQW5DRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBcUNKO0FBdkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF5Q0o7QUEzQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQTZDSjtBQS9DRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBaURKO0FBbkRFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFxREo7QUF2REU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQXlESjtBQTVCSTtFQUNFLGlCQUFBO0VBQ0EsWUFwQ1k7QUFrRWxCO0FBeEJBO0VBOUJFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFpQkEsZUFsQ1k7SUFtQ1osVUFBQTtFQTBDRjtFQXhFQTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUEwRUY7RUE1RUE7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VBOEVGO0VBaEZBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQWtGRjtFQXBGQTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUFzRkY7RUF4RkE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMEZGO0VBNUZBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQThGRjtFQWhHQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFrR0Y7RUFwR0E7SUFDRSxZQUFBO0lBQ0Esb0JBQUE7RUFzR0Y7RUF4R0E7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VBMEdGO0VBNUdBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQThHRjtFQWhIQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFrSEY7RUFwSEE7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBc0hGO0VBeEhBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQTBIRjtFQTVIQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUE4SEY7RUFoSUE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBa0lGO0VBckdFO0lBQ0UsaUJBQUE7SUFDQSxZQXBDWTtFQTJJaEI7QUFDRjtBQS9GQTtFQWpDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBaUJBLGVBbENZO0lBbUNaLFVBQUE7RUFtSEY7RUFqSkE7SUFDRSxvQkFBQTtJQUNBLG9CQUFBO0VBbUpGO0VBckpBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQXVKRjtFQXpKQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUEySkY7RUE3SkE7SUFDRSxvQkFBQTtJQUNBLG9CQUFBO0VBK0pGO0VBaktBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQW1LRjtFQXJLQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUF1S0Y7RUF6S0E7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMktGO0VBN0tBO0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBK0tGO0VBakxBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQW1MRjtFQXJMQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUF1TEY7RUF6TEE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMkxGO0VBN0xBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQStMRjtFQWpNQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFtTUY7RUFyTUE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBdU1GO0VBek1BO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQTJNRjtFQTlLRTtJQUNFLGlCQUFBO0lBQ0EsWUFwQ1k7RUFvTmhCO0FBQ0Y7QUFqS0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFtS0o7QUFqS0U7RUFDRSxpQkFBQTtBQW1LSjtBQWhLQTtFQUNFLGFBL0RjO0VBZ0VkLFlBOURnQjtBQWlPbEI7QUFqS0E7RUFDRSxlQW5FYztFQW9FZCxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBcEVnQjtFQXFFaEIsZ0NBQUE7QUFvS0Y7QUFqS0E7RUFDRSxlQTFFWTtFQTJFWixVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUxZO0VBTVosc0JBTlk7QUEwS2Q7QUFuS0U7RUFDRSwyQkFBQTtBQXFLSjtBQWxLQTtFQUNFLHVCQUFBO0FBcUtGO0FBcEtFO0VBQ0UsbUNBQUE7QUFzS0o7QUFuS0E7RUFDRTtJQUNFLHNCQW5CVTtFQXlMWjtFQXBLQTtJQUNJLHVCQUFBO0VBc0tKO0FBQ0YiLCJmaWxlIjoiY2lyY3VpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWVcIjtcblxuJGRpYWdyYW0tY29sb3I6IG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIHVpLTAyKTtcbiRwdWxzZS1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYWNjZW50LTAyKTtcbiRkaWFncmFtLW9wYWNpdHk6IDAuMztcblxuQG1peGluIGNoaWxkLWxlZnQtdG9wKCRjcSwgJGNoaWxkLCAkbGVmdCwgJHJpZ2h0KSB7XG4gICY6bnRoLWNoaWxkKCN7JGNoaWxkfSkge1xuICAgIGxlZnQ6ICRjcSAqICRsZWZ0O1xuICAgIHRvcDogJGNxICogJHJpZ2h0O1xuICB9XG59XG5cbkBtaXhpbiBjaXJjdWl0LXN0eWxlcygkYmFzZS13aWR0aCkge1xuICAkY2lyY3VpdC13aWR0aDogMS41ICogJGJhc2Utd2lkdGg7XG4gICRjaXJjdWl0LXF1YWQ6ICRjaXJjdWl0LXdpZHRoICogNiAvIDE0O1xuICAuY2lyY3VpdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxLjUgKiAkYmFzZS13aWR0aDtcbiAgICBoZWlnaHQ6IDIgKiAkY2lyY3VpdC1xdWFkO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDEsIC41LCAtMS4yNSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMiwgLS41LCAuMjUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDMsIDEuOCwgMik7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgNCwgLjksIDMpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDUsIC0uNzUsIDQuNSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgNiwgMy42LCA1KTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCA3LCA2LCAzKTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCA4LCA4LjQsIDQpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDksIDUuMDUsIDEpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDEwLCA2LjUsIC0uODUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDExLCA5LjksIC0uMjUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDEyLCAxNC4yLCAuNzUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDEzLCAxMiwgMik7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMTQsIDEzLjIsIDMpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDE1LCAxNS42LCA0Ljc1KTtcblxuICAgIHN0cm9rZTogJGRpYWdyYW0tY29sb3I7XG4gICAgZmlsbDogbm9uZTtcbiAgICAuYWRhcHRlciB7XG4gICAgICBzdHJva2Utd2lkdGg6IDZweDtcbiAgICAgIG9wYWNpdHk6ICRkaWFncmFtLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGNpcmN1aXQtc3R5bGVzKCRiYXNlLXdpZHRoOiAxNHZ3KTtcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0tc2NyZWVuKSB7XG4gIEBpbmNsdWRlIGNpcmN1aXQtc3R5bGVzKCRiYXNlLXdpZHRoOiAxMXZ3KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsYXJnZS1zY3JlZW4pIHtcbiAgQGluY2x1ZGUgY2lyY3VpdC1zdHlsZXMoJGJhc2Utd2lkdGg6IDl2dyk7XG59XG5cblxuXG4uY2xvY2sge1xuICAuY2xvY2stY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcbiAgICBmaWxsOiBub25lO1xuICB9XG4gIC5oYW5kIHtcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcbiAgfVxufVxuLmh0dHAsIC53ZWJzb2NrZXQsIC5jbG9jaywgLmh0bWwsIC5zdG9yYWdlIHtcbiAgZmlsbDogJGRpYWdyYW0tY29sb3I7XG4gIG9wYWNpdHk6ICRkaWFncmFtLW9wYWNpdHk7XG59XG4uY29ubmVjdG9yIHBhdGgge1xuICBzdHJva2U6ICRkaWFncmFtLWNvbG9yO1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDM7XG4gIG9wYWNpdHk6ICRkaWFncmFtLW9wYWNpdHk7XG4gIHRyYW5zaXRpb246IHN0cm9rZSAycyBsaW5lYXIgYWxsO1xufVxuJHB1bHNlLXdpZHRoOiA0NTA7XG4uY29ubmVjdG9yLXB1bHNlIHBhdGgge1xuICBzdHJva2U6ICRwdWxzZS1jb2xvcjtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiA0O1xuICBzdHJva2UtZGFzaGFycmF5OiAkcHVsc2Utd2lkdGg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAkcHVsc2Utd2lkdGg7XG4gICYuYWN0aXZlIHtcbiAgICBhbmltYXRpb246IGRhc2ggLjRzIGxpbmVhcjtcbiAgfVxufVxuLnNpbmsgLmNvbm5lY3Rvci1wdWxzZSBwYXRoIHtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0kcHVsc2Utd2lkdGg7XG4gICYuYWN0aXZlIHtcbiAgICBhbmltYXRpb246IGRhc2ggLjRzIGxpbmVhciByZXZlcnNlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRwdWxzZS13aWR0aFxuICB9XG4gIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0kcHVsc2Utd2lkdGg7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "RvM8":
/*!************************************************!*\
  !*** ./apps/docs/src/app/content.component.ts ***!
  \************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

const _c0 = ["*"];
class ContentComponent {
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["state-adapt-content"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n        max-width: 800px;\n        width: 100%;\n        margin: auto;\n        padding: 12px;\n      }"] });


/***/ }),

/***/ "UP67":
/*!**********************************************************!*\
  !*** ./apps/docs/src/app/get-marked-options.function.ts ***!
  \**********************************************************/
/*! exports provided: getMarkedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkedOptions", function() { return getMarkedOptions; });
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-markdown */ "lR5k");

function getMarkedOptions() {
    const renderer = new ngx_markdown__WEBPACK_IMPORTED_MODULE_0__["MarkedRenderer"]();
    renderer.list = (text, ordered) => `<ul class="bx--list--unordered">${text}</ul>`;
    renderer.listitem = (text) => `<li class="bx--list__item">${text}</li>`;
    // renderer.heading = (text: string, level: number) => text;
    return { renderer };
}


/***/ }),

/***/ "UtGZ":
/*!*************************************************!*\
  !*** ./apps/docs/src/app/polygons.component.ts ***!
  \*************************************************/
/*! exports provided: PolygonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonsComponent", function() { return PolygonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class PolygonsComponent {
}
PolygonsComponent.ɵfac = function PolygonsComponent_Factory(t) { return new (t || PolygonsComponent)(); };
PolygonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolygonsComponent, selectors: [["state-adapt-polygons"]], decls: 204, vars: 0, consts: [["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1460 911"], ["d", "M230,396V248a56.52,56.52,0,0,0,6.38-.85q32.16-7.85,64.29-15.82c9.16-2.28,18.27-4.75,27.4-7.14L330,224v5c0,34.82.07,69.63-.14,104.44,0,5,1.54,8.11,5.88,10.43,22.17,11.82,44.27,23.79,66.42,35.67a14.72,14.72,0,0,0,3.16.64C402,372.57,399,365.79,396,359q-9.51-22-19-44c3.65,0,7.31,0,10.94.18,20.32,1.24,40.62,2.56,60.93,3.84h.14c-13,19.42-26,38.8-38.81,58.3-1,1.54-.88,3.83-1.29,5.78a44.62,44.62,0,0,0,3.44,4.78c6.7,7.18,13.49,14.26,20.25,21.38q27.48,28.95,55,57.87c1.06,1.11,2.47,1.88,4.94,3.72,1.1-7.08,2.1-12.88,2.88-18.71,1.92-14.33,3.74-28.67,5.6-43q12.92-15.48,25.84-31Q539,363.59,551,349a75.16,75.16,0,0,1,3.48,7.1c4.1,11.05,8,22.18,12.09,33.22,6.48,17.28,12.43,34.65,14.92,53.1,1.53,11.31,4.33,22.45,6.55,33.66,1.12,2.17,2,4.56,3.4,6.49q29.3,38.9,58.69,77.73c1,1.29,1.35,3,2,4.58L654,563V502a18.21,18.21,0,0,0,1.78-1.73q20.79-26.14,41.54-52.34c7.3-9.25,14.46-18.62,21.68-27.94l2,1c7,24.6,14.1,49.19,21,73.82,3.11,11,6,22.1,8.93,33.16l-.93,2.09c-1.86.19-3.89,0-5.56.63q-39.45,15.62-78.8,31.47c-3.34,1.35-6.48,3.21-9.7,4.82l-1,1c-1.73.87-3.68,1.46-5.16,2.64q-41.05,32.88-82,65.86c-.7.56-1.7.75-4.08,1.75-1.29-18.91-2.53-37-3.77-55.12a23.35,23.35,0,0,1,.41-3.46q9.3-34.68,18.66-69.35c2.46-9.16,4.79-18.35,7.24-27.51.72-2.69.57-4.61-2.89-4.79-5.3-.27-10.59-.74-15.9-1-8.79-.44-17.59-.69-26.38-1.16-16.4-.89-32.8-1.89-49.2-2.84-1.3.28-2.62.46-3.88.85C461.5,481.9,435,490,408.44,498c-14.78,4.44-29.62,8.67-44.43,13l-.06-1.06c.55-2.08,1-4.21,1.67-6.25Q384.46,447,403.33,390.41c.69-2.06,1-4.23,1.8-7.53-4.86,1.65-8.45,2.84-12,4.09L304,418h-1c-4-1.17-8-2.33-11.95-3.53Z", "transform", "translate(-230 -84)", 1, "cls-1"], ["d", "M1690,539V686l-5.86,1a28.75,28.75,0,0,1-1.08-5.26c-.4-22-.7-43.91-1.07-65.86,0-1.64-.32-3.27-.62-6.23-1.49,2.09-2.11,2.84-2.6,3.66q-24,40.6-47.91,81.26a11,11,0,0,0-1.31,7.07q4.26,21,9.28,41.91a7,7,0,0,0,4.32,4.4c15.57,3.55,31.22,6.74,46.85,10V933a29.86,29.86,0,0,1-4.09-1.77c-11.91-7.33-23.76-14.75-35.7-22-1.4-.85-3.26-1-4.91-1.4,0,1.57-.5,3.26-.1,4.71,4.31,15.72,8.9,31.37,13.1,47.12,3.13,11.73,5.82,23.58,8.7,35.37H1553a37.33,37.33,0,0,1,3.77-5.14c8.55-8.39,17.31-16.58,25.83-25q21.69-21.44,43.16-43.09c5.17-5.18,10.21-10.5,15.31-15.76,0-1.51.5-3.38-.19-4.47-13.53-21.38-27.11-42.74-41-63.92-2.43-3.71-2.64-6.52-.61-10.44,11.7-22.64,23.16-45.4,34.63-68.15a41.48,41.48,0,0,0,2-5.88c-2.07,0-2.92.47-3.63,1.1-8.86,7.79-17.65,15.67-26.55,23.42-16.94,14.72-34,29.31-50.85,44.11-1.73,1.52-2.57,4-3.83,6.09l-2.1.1-1-1a16.11,16.11,0,0,0-.56-3.91c-9.23-22.93-18.49-45.85-28-68.69-.49-1.18-2.87-1.58-4.38-2.34-1.4,0-3-.35-4.18.16-12.1,5.08-24.1,10.4-36.21,15.45-9.49,4-19.09,7.64-28.65,11.44a64,64,0,0,1-1-7.38q-.61-36-1-72.06c0-2.49.21-5,0-7.46-.51-4.74-1.29-9.45-2-14.17.38-1,.76-2,1.13-3.07a47,47,0,0,1,5.45,4.2c21.43,22,42.77,44.1,64.27,66,1.46,1.49,4.06,1.89,6.12,2.8,1.74.67,3.48,1.94,5.21,1.92,7.8-.1,15.59-.73,23.4-.85,26.77-.42,53.55-.71,80.33-1,1.67,0,3.34.07,5-.11.89-.1,1.74-.65,4.24-1.66-28.71-18.46-58-33.69-85.32-52.14a8.87,8.87,0,0,1,4.54-1.05c10.43.75,20.86,1.59,31.28,2.38,11.42.87,22.84,1.89,34.27,2.52,6.09.33,6.41-.24,4.77-6.24q-9.76-35.62-19.69-71.21c-3.22-11.53-6.64-23-10-34.49,0-1.32,0-2.64,0-4q40.56-19.11,81.13-38.19C1682,542,1686,540.61,1690,539Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M1114,84h122c0,18.59,0,37.18,0,55.78a41.56,41.56,0,0,0,1,6.28,39,39,0,0,0,.23,5.83Q1243.53,185,1250,218c-1.35-.56-2.93-.85-4-1.74-16.23-13.43-32.37-27-48.59-40.4-5.28-4.38-10.72-8.55-16.4-13.06-1.25,2.17-2.1,3.39-2.7,4.73-7.28,16.2-14.59,32.4-21.73,48.67-1.81,4.13-3,8.52-4.51,12.79,2.09,5.2,3.9,10.53,6.3,15.58q22.41,47.1,45,94.07c.61,1.28,1.49,2.42,2.8,4.53a64.13,64.13,0,0,0,2.9-6q17-48.78,33.92-97.58c2.18-6.27,4.66-12.43,7-18.64,1.67,6.78,3.42,13.54,5,20.34q11.25,49.12,22.46,98.27c1.36,5.94,2.21,6.15,7.21,3q39.48-24.87,79-49.58c1.67-1,4.21-.71,6.34-1-1,23.06-2.2,46.11-2.91,69.17-.65,21.26-.76,42.55-1.11,63.82h-2a48.29,48.29,0,0,0-3.31-3.7q-29.49-27.09-59-54.12c-7.47-6.81-15.11-13.43-22.68-20.14H1277c-21.07-.34-42.13-.73-63.2-1-6.3-.09-7,.51-6.78,6.81.54,15.4,1.3,30.79,2,46.18l-3,1c-12.68-.92-25.36-2-38.06-2.74-20-1.2-40-2.2-60-3.28v-1c3.78-2.21,7.42-4.74,11.37-6.6,26.66-12.53,53.38-24.91,80.07-37.38a44.64,44.64,0,0,0,4.51-3c-3.26-.82-5-1.31-6.69-1.67-17.13-3.49-34.24-7-51.39-10.41-10.6-2.09-21.24-3.94-31.86-5.9v-1l0-2c-1.09-14.36-2.15-28.71-3.27-43.07q-1.83-23.49-3.74-47c.34-6.3.65-12.61,1-18.92.7-11.11,1.46-22.23,2.19-33.34,1.27-19.23,2.87-38.45,3.69-57.71C1114.47,111.35,1114,97.67,1114,84Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M1345,84h293c-.38,5-.84,9.93-1.12,14.91-1.1,19.53-2.3,39.06-3.11,58.61-.25,5.88.73,11.8,1,17.71.48,10.59.83,21.18,1.24,31.76v6l-2,0a10.06,10.06,0,0,0-1.83-1.64c-14-7.29-28-14.51-42-21.81-14.3-7.45-28.71-14.69-42.78-22.56-6.85-3.84-13.17-6.46-21.52-5.18-20.65,3.17-41.46,5.31-62.22,7.78-13.18,1.57-26.38,3-39.57,4.45l-3.14.06c-8.78-.4-17.58-.62-26.35-1.23-22.17-1.51-44.32-3.2-66.48-4.82l-1-.06c3.86-17.39,7.78-34.77,11.54-52.19C1340.82,105.22,1342.85,94.6,1345,84Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M230,683V610l6.93-19c1.36,1.33,3.14,2.42,4,4,11.68,21.11,23.23,42.31,34.84,63.46a44.62,44.62,0,0,0,3.14,4.17c.77-2.78,1.29-4.31,1.62-5.86,3.85-18.25,7.74-36.49,11.49-54.76,3.08-15,6-30,9-45.06a29.33,29.33,0,0,1,2.54-2.33c16.12-11.66,32.29-23.26,48.36-35,2.6-1.9,4.76-4.4,7.13-6.62l4-1c.88,1,1.85,1.9,2.64,3,10.64,14.25,21.33,28.47,31.83,42.82,4.09,5.6,7.74,11.52,11.6,17.3q-14.55,39-29.1,77.94c-5.33,14.32-10.59,28.65-15.88,43l-72.5,89.56-1.25-.49c-.56-6.38-1.09-12.76-1.68-19.14-1.55-16.69-3.16-33.38-4.69-50.07-1.41-15.38-2.65-30.77-4.25-46.13-.13-1.3-2.37-2.38-3.62-3.56-3,.94-6,1.75-9,2.85C254.74,673.63,242.38,678.33,230,683Z", "transform", "translate(-230 -84)", 1, "cls-5"], ["d", "M1641.07,906c-5.1,5.26-10.14,10.58-15.31,15.76q-21.52,21.6-43.16,43.09c-8.52,8.43-17.28,16.62-25.83,25A37.33,37.33,0,0,0,1553,995H1446a9.38,9.38,0,0,0-.14-2c-5.43-19.22-10.82-38.46-16.43-57.63a11.55,11.55,0,0,0-3.82-5.09c-14.91-12.23-30-24.3-44.9-36.49q-27.24-22.23-54.33-44.64c-.78-.64-.92-2.07-1.36-3.14a43.36,43.36,0,0,0,5.48-.24q39.11-6.67,78.19-13.44c14.41-2.47,28.84-4.86,43.26-7.29.8,2.53,1.37,5.14,2.41,7.57q10.76,25,21.65,49.88c8.18,18.75,16.29,37.51,24.62,56.19,3.07,6.89,3.33,6.82,10,4.87q44.32-12.88,88.65-25.8C1613.19,913.74,1627.14,909.91,1641.07,906Z", "transform", "translate(-230 -84)", 1, "cls-6"], ["d", "M1114,84c0,13.67.47,27.35-.12,41-.82,19.26-2.42,38.48-3.69,57.71-.73,11.11-1.49,22.23-2.19,33.34-.39,6.31-.7,12.62-1,18.92H1004.85c1.39,2,1.78,2.92,2.45,3.48q17.61,14.67,35.28,29.24,26.2,21.46,52.52,42.8c6.17,5,12.57,9.7,18.87,14.54l0,2c-15.78-.71-31.57-1.37-47.35-2.14-12.62-.61-25.24-1.39-37.86-2.05q-26.88-1.41-53.78-2.75a62.44,62.44,0,0,0-7,2.49c-12.38,6.08-24.7,12.28-37,18.45h-2.83c-2.3-13.23-4.52-26.48-6.92-39.7-3.36-18.45-6.85-36.87-10.29-55.31,2.16-.06,4.35,0,6.48-.22,23.4-2.93,46.81-5.8,70.17-9,4.21-.58,8.24-2.48,12.35-3.77l2,0c1.48-.64,3.27-1,4.4-2,14.81-13.32,29.52-26.75,44.27-40.13,7.5-6.81,15-13.56,22.58-20.33,12.22-11,24.46-21.93,36.63-33,1-.9,1.45-2.39,2.16-3.6-1.23-1.72-2.18-3.76-3.72-5.12-11.75-10.4-23.7-20.57-35.41-31C1068,93.49,1063.61,88.63,1059,84Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M276.1,666.17c1.25,1.18,3.49,2.26,3.62,3.56,1.6,15.36,2.84,30.75,4.25,46.13,1.53,16.69,3.14,33.38,4.69,50.07.59,6.38,1.12,12.76,1.68,19.14l1.25.49L364.09,696l2,.07c.76,1.24,1.24,2.81,2.3,3.66Q393.63,720,419,740.1c0,.29,0,.57,0,.86-2.28,6.07-4.67,12.11-6.82,18.22q-14.61,41.43-29.11,82.9c-2.45-1-5.08-1.66-7.3-3-26.65-16.1-53.23-32.32-79.89-48.41-1.68-1-3.9-1.15-5.86-1.69a28.37,28.37,0,0,0-2.8,2.79q-25.65,33.66-51.3,67.32A63.16,63.16,0,0,1,230,865V722a26.16,26.16,0,0,0,3.7-3.06c10.75-12.76,21.53-25.51,32.1-38.43C269.51,676,272.68,671,276.1,666.17Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1262,995H1157c2-5.28,3.88-10.6,5.94-15.84q12-30.61,24.1-61.18l1-.94c1.87-1.39,3.86-2.63,5.59-4.18q26.31-23.73,52.54-47.53c4.77-4.31,4.76-5.71-.44-9.53Q1225.38,840.86,1205,826a50.39,50.39,0,0,1,5.12-5.3c6.81-5.28,13.86-10.25,20.63-15.57,6.21-4.88,12.18-10.06,18.25-15.11l2,0h0c1.17,1.55,2.06,3.45,3.54,4.6q29.57,22.86,59.27,45.53c9.14,7,9.25,7,4,17.22-12,23.52-24.19,47-36.23,70.51-2,4-3.76,8.06-5.62,12.09-.71,1.27-1.76,2.45-2.08,3.8C1269.86,960.83,1265.94,977.92,1262,995Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M1276,940c1.86-4,3.59-8.14,5.62-12.09,12-23.52,24.19-47,36.23-70.51,5.25-10.25,5.14-10.24-4-17.22q-29.7-22.7-59.27-45.53c-1.48-1.15-2.37-3.05-3.54-4.6,10.44-.79,20.89-1.5,31.32-2.38,13.41-1.14,26.8-2.43,40.2-3.63q20.61-1.85,41.21-3.65c5.78-.49,11.58-.83,17.37-1.24a18.71,18.71,0,0,1-4,7.27c-14.5,16.26-29.09,32.43-43.54,48.72-3.06,3.44-5.68,7.27-8.51,10.92.44,1.07.58,2.5,1.36,3.14q27.11,22.41,54.33,44.64c14.94,12.19,30,24.26,44.9,36.49a11.55,11.55,0,0,1,3.82,5.09c5.61,19.17,11,38.41,16.43,57.63a9.38,9.38,0,0,1,.14,2h-22c-1.09-1.39-2-3.08-3.31-4.11-8.5-6.37-17.11-12.61-25.69-18.87-6.22-4.54-12.46-9-20-14.48,0,4.56-.16,7.64,0,10.69.56,8.93,1.26,17.85,1.91,26.77h-75c1.62-1.31,3.07-3,4.9-3.89,20.07-10.06,40.21-20,60.3-30,1.63-.81,3-2.11,5.52-3.87-2.48-.68-3.67-1.1-4.9-1.32q-16.69-3-33.39-5.89Q1305.2,944.95,1276,940Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M543,84h65c.54,1.35.79,3,1.67,4,4.22,5.11,8.63,10.06,13,15.1,13.26,15.47,26.47,31,39.79,46.43,5.4,6.26,11.05,12.3,16.59,18.45l2,1c1,1.49,1.72,3.27,3,4.42,12.13,10.72,24.45,21.23,36.52,32,4.74,4.24,9,9,13.48,13.54a27,27,0,0,1-3.34,2.14q-29.34,13.24-58.72,26.36c-1.22.55-2.76.39-4.15.56-.18-1.6-.74-3.26-.5-4.79,2.7-16.91,5.55-33.8,8.29-50.7,1.16-7.09,2.16-14.22,3.44-22.65-1.74,1.45-2.37,1.9-2.91,2.43q-35.64,35.69-71.26,71.4c-2.34,2.35-4.24,5.16-6.7,7.36-4.23,3.8-8.74,7.3-13.13,10.92q-1.53-41.77-3-83.53c-.38-10.78-.56-21.57-1.13-32.33-.27-5.09-1.23-10.13-1.87-15.2a18.7,18.7,0,0,0-1.65-3c-7.19-9-14.51-17.79-21.61-26.8C551.32,95.54,547.23,89.72,543,84Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M424,84h67a38.36,38.36,0,0,1-.83,3.89c-7.72,24.27-15.53,48.52-23.16,72.82-1.05,3.36-1.25,7-1.85,10.5.9,1.46,1.48,3.33,2.75,4.32,8.37,6.53,16.88,12.91,25.38,19.28Q538.12,228.43,583,262l2,3a63.12,63.12,0,0,0-6.69,1.89Q538.44,283,498.65,299.15c-16.51,6.66-33.06,13.23-49.59,19.84h-.14c.37-13.12.61-26.26,1.14-39.38.41-9.95,1.27-19.88,1.79-29.83q.7-13.44,1.09-26.89a22,22,0,0,0-.9-4.81c3.35-13.38,6.9-26.71,9.89-40.16a17.29,17.29,0,0,0-.93-10c-8.59-19.66-17.61-39.13-26.36-58.72C430.92,100.88,427.54,92.41,424,84Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M328.07,224.19c-9.13,2.39-18.24,4.86-27.4,7.14q-32.13,8-64.29,15.82A56.52,56.52,0,0,1,230,248V110a82,82,0,0,0,9.31,4.37c1.3.44,4.15-.18,4.55-1.08C248.11,103.62,252,93.79,256,84h30c.19,2.48.23,5,.6,7.44,2.79,18.43,5.56,36.86,8.52,55.26,1.42,8.84,3.26,17.62,4.91,26.42,2.65,5.45,5.05,11,8,16.33C314.57,201.12,321.38,212.62,328.07,224.19Z", "transform", "translate(-230 -84)", 1, "cls-11"], ["d", "M300,173.12c-1.65-8.8-3.49-17.58-4.91-26.42-3-18.4-5.73-36.83-8.52-55.26-.37-2.45-.41-5-.6-7.44H405c-.31,2-.5,4-1,5.89q-9,37.62-18.05,75.24c-1.54,6.42-1.19,6.9,5.41,6.91q31.71,0,63.42,0c1.62,0,3.24.21,4.86.32l.12,1.28-57.69,31.48c-5.4-10-10.74-20.11-16.31-30.06-.44-.79-2.44-.71-3.72-1a23.18,23.18,0,0,0-4.77-1Q338.67,173,300,173.12Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M332,995H230V929a44.62,44.62,0,0,0,5.5-4.06q25.27-25.12,50.41-50.37c2.45-2.47,4.74-5.1,7.1-7.65l2,.1c1,1.88,1.94,3.85,3.13,5.63,10.73,16,21.27,32.17,32.42,47.9,4,5.64,4.77,11.38,4.41,17.82C333.9,957.24,333,976.12,332,995Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M359,513.06c-2.37,2.21-4.53,4.71-7.13,6.61-16.07,11.73-32.24,23.33-48.36,35A29.33,29.33,0,0,0,301,557q-19.81,10-39.61,20.08c-6.4,3.26-12.76,6.61-19.15,9.91l-1.32-1.42c1.64-2.3,3.19-4.66,4.93-6.88,11.79-15,23.66-30,35.42-45.14,3.63-4.65,3.15-6-2.31-7.53q-24.47-7-49-14V396l61,18.49c4,1.2,8,2.36,11.95,3.53a45.24,45.24,0,0,1-.21,5.47q-7.53,48-15.16,95.91c-1.18,7.35-.08,8.5,7,6.93,10.54-2.32,21.08-4.69,31.66-6.87C337.2,517.22,348.13,515.18,359,513.06Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M332,995c1-18.88,1.9-37.76,2.95-56.63.36-6.44-.41-12.18-4.41-17.82-11.15-15.73-21.69-31.89-32.42-47.9-1.19-1.78-2.09-3.75-3.13-5.63a31.63,31.63,0,0,1,4.93-2.18q27.27-7.05,54.57-13.93c9.5-2.4,19-4.66,28.53-7l1,1c2.17,8,4.14,16.1,6.54,24,8.74,29,17.62,58,26.45,87a27.53,27.53,0,0,1-4.38-.82q-34.82-12.35-69.6-24.76c-1.37-.48-2.84-.67-5.19-1.22.79,1.89.94,2.75,1.43,3.32,11.59,13.7,23.29,27.3,34.8,41.07,5.83,7,11.31,14.25,16.95,21.39Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M848,84h24a28.75,28.75,0,0,0,1.49,3.67c9.13,16,18.22,32.11,27.49,48.07,5.16,8.89,10.65,17.6,16,26.4V165c-1.41.82-2.9,1.55-4.23,2.48Q900.34,176.23,888,185l-3,2-2,1-2,2h0l-3,2-1,1-3,2h0l-3,2h0l-11,8h0l-3,2h0l-7,5-1,1-3,2h0l-3,2-8,6c-2.35-1.86-5.39-3.27-6.93-5.65-8.92-13.75-17.4-27.78-26.27-41.56-1.29-2-3.85-3.22-5.82-4.81l1-3,0,0c1.36-1.34,3.08-2.46,4-4q19.17-31.61,38.12-63.35C842.34,95.23,845.06,89.55,848,84Z", "transform", "translate(-230 -84)", 1, "cls-1"], ["d", "M824,995H717c-.75-14.59-1.44-29.17-2.28-43.75-.8-14.08-1.76-28.15-2.65-42.22L809,907.87l7,.13.94,1q1.72,21.27,3.45,42.53Q822.18,973.25,824,995Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M1187,918q-12.06,30.59-24.1,61.18c-2.06,5.24-4,10.56-5.94,15.84h-71q4.49-28.51,9-57c.67-3.59,1.36-7.19,2-10.79q6.54-36.6,13-73.19h1q13.89,11.65,27.79,23.31Q1162.94,897.62,1187,918Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M988,995H942c0-12.26.16-24.53-.1-36.79-.1-4.4-1.22-8.77-1.87-13.16L939,943a40.31,40.31,0,0,0-1.58-6.23c-12.64-29.7-25.42-59.35-38-89.07-4-9.47-7.6-19.12-11.39-28.69a22.21,22.21,0,0,1,3.25,1.23q43.51,24.4,87,48.8c4.74,2.65,9.84,4.66,14.77,7l3,0c0,1,0,2,0,3-.54,3.2-1.89,6.52-1.48,9.6,3,22.49,6.27,44.93,9.47,67.38l-49-9.47c-4-.77-8-1.52-13.38-2.54a50.84,50.84,0,0,0,3.11,4.27q20.1,21.18,40.23,42.32A33,33,0,0,1,988,995Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M670,995H557c-2.91-3.08-5.63-6.37-8.75-9.21-12.39-11.28-24.93-22.39-37.37-33.63-10.33-9.33-20.6-18.75-30.9-28.13l0-1c10.75.73,21.5,1.38,32.23,2.19,9.42.71,18.81,1.66,28.22,2.39,14.86,1.16,29.73,2.22,44.6,3.31,9.76,2.79,19.5,5.65,29.29,8.36,15.55,4.31,31.13,8.52,46.69,12.77l.9.07Z", "transform", "translate(-230 -84)", 1, "cls-17"], ["d", "M1112,134c-.71,1.21-1.17,2.7-2.16,3.6-12.17,11-24.41,22-36.63,33-7.54,6.77-15.08,13.52-22.58,20.33-14.75,13.38-29.46,26.81-44.27,40.13-1.13,1-2.92,1.33-4.4,2-.16-1-.28-2-.48-3q-9.94-48.37-19.93-96.74c-.6-2.88-1.65-5.66-2.49-8.49-.91-1.92-1.53-4-2.77-5.73-4.63-6.29-9.59-12.34-14.18-18.66C958.22,95.07,954.69,89.48,951,84h63c-.65,1.48-1,3.23-2,4.39-6.48,7.34-13.16,14.5-19.65,21.83-3.84,4.35-7.45,8.9-11.16,13.36l.88,1.4c13.7,1,27.39,2,41.08,3,11.75.81,23.51,1.43,35.26,2.23C1076.27,131.42,1094.13,132.72,1112,134Z", "transform", "translate(-230 -84)", 1, "cls-5"], ["d", "M402.11,205.11l57.69-31.48-.12-1.28c-1.62-.11-3.24-.32-4.86-.32q-31.71,0-63.42,0c-6.6,0-6.95-.49-5.41-6.91q9-37.62,18.05-75.24c.46-1.93.65-3.93,1-5.89h19c3.54,8.41,6.92,16.88,10.64,25.2,8.75,19.59,17.77,39.06,26.36,58.72a17.29,17.29,0,0,1,.93,10c-3,13.45-6.54,26.78-9.89,40.16Q417.18,262.55,382.25,307c-1.34,1.71-3.48,2.79-5.25,4.16q10.32-42.36,20.61-84.72c1.63-6.76,2.92-13.61,4.36-20.42C402,205.7,402.06,205.4,402.11,205.11Z", "transform", "translate(-230 -84)", 1, "cls-18"], ["d", "M1345,84c-2.15,10.6-4.18,21.22-6.47,31.78-3.76,17.42-7.68,34.8-11.54,52.19-5.28,3.48-10.58,6.93-15.85,10.43L1250,219c0-.32,0-.65,0-1q-6.37-33.08-12.71-66.16a39,39,0,0,1-.23-5.83c1.47-.79,3-1.52,4.39-2.37q46.23-27.61,92.41-55.31c1.92-1.15,3.47-2.91,5.19-4.38Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1634,213l2,0c10.63,5.32,21.36,10.47,31.88,16,6.94,3.66,13.65,7.47,21.64,3a1.3,1.3,0,0,1,.49-.05v4c-8.4.79-13.6,5.39-18,12.6-8.8,14.46-18.62,28.31-28,42.41-10.48-5.44-21-10.73-31.42-16.36-23.27-12.63-46.43-25.45-69.64-38.18Q1521.48,224.71,1500,213q0-.5,0-1Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M939,943c.34.68.68,1.37,1,2.06-1.34,1.47-2.62,3-4,4.4-13.76,13.47-27.58,26.89-41.3,40.4A36.36,36.36,0,0,0,891,995H824q-1.8-21.75-3.61-43.5-1.75-21.27-3.45-42.53c2.92.59,5.9,1,8.77,1.8Q882.37,926.84,939,943Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M480,923c0,.34,0,.68,0,1-.65,1.23-1.76,2.42-1.88,3.69C476,950.14,474,972.57,472,995H438c-4-7.78-7.74-15.66-11.95-23.3-2.28-4.12-5.3-7.83-8-11.72L417,956c-8.83-29-17.71-58-26.45-87-2.4-8-4.37-16-6.54-24,3,2.41,5.93,4.81,8.87,7.24q34,28,68,56.08c5.87,4.81,12.11,9.17,18.17,13.74l.91,0Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M1690,539c-4,1.61-8,3-11.91,4.85q-40.6,19-81.13,38.19l-1-1c.69-5.57,1.57-11.12,2-16.71,1.18-14.9,2.11-29.82,3.24-44.72,1.22-15.89,2.55-31.78,3.84-47.66,18,7.53,36.06,15.12,54.12,22.59,10.25,4.24,20.56,8.31,30.84,12.45Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M465.16,171.21c.6-3.51.8-7.14,1.85-10.5,7.63-24.3,15.44-48.55,23.16-72.82A38.36,38.36,0,0,0,491,84h52c4.23,5.72,8.32,11.54,12.72,17.12,7.1,9,14.42,17.85,21.61,26.8a18.7,18.7,0,0,1,1.65,3c-21.45,7.68-42.89,15.41-64.36,23C498.16,159.79,481.65,165.47,465.16,171.21Z", "transform", "translate(-230 -84)", 1, "cls-18"], ["d", "M230,512q24.5,7,49,14c5.46,1.57,5.94,2.88,2.31,7.53-11.76,15.09-23.63,30.09-35.42,45.14-1.74,2.22-3.29,4.58-4.93,6.88l1.32,1.42c6.39-3.3,12.75-6.65,19.15-9.91Q281.18,567,301,557c-3,15-5.89,30.06-9,45.06-3.75,18.27-7.64,36.51-11.49,54.76-.33,1.55-.85,3.08-1.62,5.86a44.62,44.62,0,0,1-3.14-4.17C264.18,637.35,252.63,616.15,241,595c-.88-1.6-2.66-2.69-4-4L230,596Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M1690,758c-15.63-3.3-31.28-6.49-46.85-10a7,7,0,0,1-4.32-4.4q-5-20.87-9.28-41.91a11,11,0,0,1,1.31-7.07q23.79-40.73,47.91-81.26c.49-.82,1.11-1.57,2.6-3.66.3,3,.6,4.59.62,6.23.37,22,.67,43.91,1.07,65.86a28.75,28.75,0,0,0,1.08,5.26q2.92,8,5.86,16Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M681,169l-2-1V152.24c0-8.73-.1-17.47,0-26.2.23-14,.62-28,1-42h65q1.51,36,3,71.95L732.36,159Z", "transform", "translate(-230 -84)", 1, "cls-1"], ["d", "M1690,359v25c-10.45-.33-20.9-.78-31.35-1-22.59-.41-45.18-.7-67.77-1a42.25,42.25,0,0,1,2.22-5q25.41-42,50.89-84a31.46,31.46,0,0,1,3.6,3.9c12.58,19.11,25.06,38.28,37.67,57.37C1686.47,356.08,1688.4,357.43,1690,359Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1590.88,382c22.59.33,45.18.62,67.77,1,10.45.19,20.9.64,31.35,1v15a85.88,85.88,0,0,0-7.36,4.94c-4.09,3.39-7.91,7.09-11.93,10.56q-23.42,20.12-46.89,40.14c-6.17,5.25-12.51,10.27-18.78,15.4-.36-1.79-.76-3.57-1.07-5.37-4.26-25.36-8.49-50.73-12.84-76.07-.28-1.63-1.43-3.1-2.18-4.64C1589.59,383.31,1590.23,382.65,1590.88,382Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1605,470c6.27-5.13,12.61-10.15,18.78-15.4q23.52-20,46.89-40.14c4-3.47,7.84-7.17,11.93-10.56A85.88,85.88,0,0,1,1690,399V507c-10.28-4.14-20.59-8.21-30.84-12.45-18.06-7.47-36.08-15.06-54.12-22.59Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M1690,232a1.3,1.3,0,0,0-.49.05c-8,4.44-14.7.63-21.64-3-10.52-5.54-21.25-10.69-31.88-16,0-2,0-4,0-6,2.22-2.76,5-5.24,6.55-8.35,10.35-21.25,20.38-42.65,30.66-63.94a11.92,11.92,0,0,0,.36-10c-4.74-13.5-9.08-27.14-13.57-40.72h30v35l-13.78,10.71.56,1.89L1690,135Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1112,134c-17.86-1.27-35.72-2.57-53.59-3.79-11.75-.8-23.51-1.42-35.26-2.23-13.69-.94-27.38-2-41.08-3l-.88-1.4c3.71-4.46,7.32-9,11.16-13.36,6.49-7.33,13.17-14.49,19.65-21.83,1-1.16,1.36-2.91,2-4.39h45c4.61,4.63,9,9.49,13.86,13.84,11.71,10.46,23.66,20.63,35.41,31C1109.81,130.23,1110.76,132.27,1112,134Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M848,84c-2.94,5.55-5.66,11.23-8.86,16.61Q820.22,132.38,801,164c-1,1.59-2.68,2.71-4,4q-9.24-21-18.49-42T760,84Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M1276,940q29.24,5,58.47,10,16.69,2.88,33.39,5.89c1.23.22,2.42.64,4.9,1.32-2.49,1.76-3.89,3.06-5.52,3.87-20.09,10-40.23,20-60.3,30-1.83.91-3.28,2.58-4.9,3.89h-40c3.94-17.08,7.86-34.17,11.88-51.24C1274.2,942.41,1275.25,941.23,1276,940Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M1339,84c-1.72,1.47-3.27,3.23-5.19,4.38q-46.15,27.74-92.41,55.31c-1.42.85-2.92,1.58-4.39,2.37a41.56,41.56,0,0,1-1-6.28c-.07-18.6,0-37.19,0-55.78Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M670,995l-8.07-42.91,17.71-15.22L712.07,909c.89,14.07,1.85,28.14,2.65,42.22.84,14.58,1.53,29.16,2.28,43.75Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1660,84c4.49,13.58,8.83,27.22,13.57,40.72a11.92,11.92,0,0,1-.36,10c-10.28,21.29-20.31,42.69-30.66,63.94-1.52,3.11-4.33,5.59-6.55,8.35-.41-10.58-.76-21.17-1.24-31.76-.26-5.91-1.24-11.83-1-17.71.81-19.55,2-39.08,3.11-58.61.28-5,.74-9.94,1.12-14.91Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1095,938q-4.49,28.51-9,57h-38c-.55-1-.88-2.25-1.69-3-5-4.39-10.15-8.6-15.16-13-8.75-7.64-17.45-15.36-26.17-23a10.46,10.46,0,0,0,1.49-.1q41.22-8.2,82.41-16.48c1.46-.3,2.72-1.56,4.07-2.38Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M680,84c-.33,14-.72,28-1,42-.15,8.73,0,17.47,0,26.2V168c-5.54-6.15-11.19-12.19-16.59-18.45-13.32-15.43-26.53-31-39.79-46.43-4.32-5-8.73-10-13-15.1-.88-1.07-1.13-2.67-1.67-4Z", "transform", "translate(-230 -84)", 1, "cls-22"], ["d", "M472,995c2-22.43,4-44.86,6.1-67.28.12-1.27,1.23-2.46,1.88-3.69,10.3,9.38,20.57,18.8,30.9,28.13,12.44,11.24,25,22.35,37.37,33.63,3.12,2.84,5.84,6.13,8.75,9.21Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1690,359c-1.6-1.57-3.53-2.92-4.74-4.75-12.61-19.09-25.09-38.26-37.67-57.37a31.46,31.46,0,0,0-3.6-3.9c0-.66,0-1.31,0-2,9.39-14.1,19.21-27.95,28-42.41,4.39-7.21,9.59-11.81,18-12.6v15c-2.13,1-2.12,2,0,3Z", "transform", "translate(-230 -84)", 1, "cls-17"], ["d", "M230,865a63.16,63.16,0,0,0,5.88-5.92q25.71-33.62,51.3-67.32A28.37,28.37,0,0,1,290,789c.33,4.12.81,8.25,1,12.38.74,21.54,1.39,43.09,2.08,64.63-2.82.07-5.65,0-8.47.23Q257.28,868.07,230,870Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M951,84c3.69,5.48,7.22,11.07,11.1,16.42,4.59,6.32,9.55,12.37,14.18,18.66,1.24,1.68,1.86,3.81,2.76,5.73a30.53,30.53,0,0,1-3.71,3.24c-15.93,9.95-31.94,19.76-47.81,29.79-3.12,2-5.71,4.77-8.54,7.18h-2v-2.9c1.16-4.31,2.57-8.57,3.43-12.93,4.28-21.72,8.41-43.47,12.6-65.2Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M1005,956c8.72,7.68,17.42,15.4,26.17,23,5,4.37,10.17,8.58,15.16,13,.81.71,1.14,2,1.69,3H988a33,33,0,0,0-3-4.46q-20.07-21.19-40.23-42.32a50.84,50.84,0,0,1-3.11-4.27c5.41,1,9.4,1.77,13.38,2.54l49,9.48Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M933,84c-4.19,21.73-8.32,43.48-12.6,65.2-.86,4.36-2.27,8.62-3.43,12.93-5.34-8.79-10.83-17.5-16-26.39-9.27-16-18.36-32-27.49-48.07A28.75,28.75,0,0,1,872,84Z", "transform", "translate(-230 -84)", 1, "cls-5"], ["d", "M1667,995c-2.88-11.79-5.57-23.64-8.7-35.37-4.2-15.75-8.79-31.4-13.1-47.12-.4-1.45,0-3.14.1-4.71,1.65.45,3.51.55,4.91,1.4,11.94,7.28,23.79,14.7,35.7,22A29.86,29.86,0,0,0,1690,933v62Z", "transform", "translate(-230 -84)", 1, "cls-6"], ["d", "M760,84q9.24,21,18.49,42T797,168l0,0c-3.22-.68-6.46-1.26-9.66-2.05Q767.65,161,748,156l0-.08L745,84Z", "transform", "translate(-230 -84)", 1, "cls-23"], ["d", "M417,956l1.08,4q-3,17.5-6.07,35H391c-5.64-7.14-11.12-14.41-16.95-21.39-11.51-13.77-23.21-27.37-34.8-41.07-.49-.57-.64-1.43-1.43-3.32,2.35.55,3.82.74,5.19,1.22q34.8,12.36,69.6,24.76A27.53,27.53,0,0,0,417,956Z", "transform", "translate(-230 -84)", 1, "cls-24"], ["d", "M230,870q27.27-1.9,54.55-3.79c2.82-.19,5.65-.16,8.47-.23,0,.31,0,.63,0,.94-2.36,2.55-4.65,5.18-7.1,7.65q-25.16,25.23-50.41,50.37A44.62,44.62,0,0,1,230,929Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M891,995a36.36,36.36,0,0,1,3.69-5.15c13.72-13.51,27.54-26.93,41.3-40.4,1.42-1.39,2.7-2.93,4-4.4.65,4.39,1.77,8.76,1.87,13.16.26,12.26.1,24.53.1,36.79Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M276.1,666.17c-3.42,4.79-6.59,9.79-10.3,14.34-10.57,12.92-21.35,25.67-32.1,38.43A26.16,26.16,0,0,1,230,722V683c12.38-4.67,24.74-9.37,37.13-14C270.07,667.92,273.11,667.11,276.1,666.17Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M1377,995c-.65-8.92-1.35-17.84-1.91-26.77-.2-3.05,0-6.13,0-10.69,7.49,5.43,13.73,9.94,20,14.48,8.58,6.26,17.19,12.5,25.69,18.87,1.36,1,2.22,2.72,3.31,4.11Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M256,84c-4,9.79-7.89,19.62-12.14,29.29-.4.9-3.25,1.52-4.55,1.08A82,82,0,0,1,230,110V84Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M412,995q3-17.5,6.07-35c2.68,3.89,5.7,7.6,8,11.72,4.21,7.64,8,15.52,11.95,23.3Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1690,135l-13.22-3.4-.56-1.89L1690,119Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M1690,703q-2.94-8-5.86-16l5.86-1Z", "transform", "translate(-230 -84)", 1, "cls-6"], ["d", "M230,596l6.93-5L230,610Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1690,254c-2.12-1-2.13-2,0-3Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M656,567c3.22-1.61,6.36-3.47,9.7-4.82q39.35-15.84,78.8-31.47c1.67-.66,3.7-.44,5.56-.63-.56,1.73-1,3.51-1.7,5.18q-11.24,26.4-22.54,52.79c-.67,1.56-1.1,3.22-2,6,3.43-1.08,5.62-1.68,7.74-2.45q19.47-7.11,38.9-14.27Q799.24,566.69,828,556c1-1.43,2.8-2.75,3-4.3,2.46-15.93,4.64-31.9,7-47.85.22-1.48,1.21-2.85,1.84-4.27,1.23.93,2.86,1.61,3.65,2.82,8.4,12.81,16.66,25.7,25,38.57L902,593a45.85,45.85,0,0,1-2.88,6.23q-20.72,31.53-41.57,63c-1,1.51-1.72,3.2-2.57,4.81a65,65,0,0,0-6.9-1c-21.07-.73-42.14-1.37-63.21-2.07-1.66-.05-3.31-.49-5-.46-4.62.08-9.22.31-13.83.49-14.16-1.33-28.31-2.69-42.47-4-13.85-1.26-27.69-2.61-41.55-3.64-6.35-.47-12.75-.26-19.12-.36l-2-1c0-.68,0-1.35,0-2a20.83,20.83,0,0,0,3.75-2.31c9.16-8.72,18.23-17.54,27.37-26.29,5.65-5.4,11.41-10.69,17-16.12,4.34-4.19,8.55-8.53,13.67-13.66Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M661,653c0,.68,0,1.35,0,2a34.51,34.51,0,0,0-1.52,3.12c-9.66,26.6-19.25,53.22-29.06,79.76-.73,2-3,3.45-4.5,5.16-4.11-6.63-8.38-13.16-12.31-19.89-14.53-24.84-28.89-49.78-43.48-74.59-1.49-2.53-4.06-4.43-6.13-6.62-1.15,0-2.7-.48-3.39.09-18.28,15.11-36.42,30.39-54.71,45.49-6.11,5-12.57,9.65-18.88,14.46q-1-3-2.06-6-15.09-57.09-30.15-114.2c-1.8-6.88-3.21-13.87-4.8-20.81l0,0q21,4.26,42,8.5,34,6.83,68,13.6c1.24,18.11,2.48,36.21,3.77,55.12,2.38-1,3.38-1.19,4.08-1.75q41-32.91,82-65.86c1.48-1.18,3.43-1.77,5.16-2.64,0,2.16,0,4.34.11,6.49Q658,613.73,661,653Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M721,421l-2-1-1-1c-1.24-3-2.12-6.27-3.77-9.05q-22.07-37.11-44.4-74.08c-3.07-5.08-6.53-9.93-9.81-14.88,0-.32,0-.65,0-1a6.28,6.28,0,0,0-.94-1.15Q623,291.93,587,265c.9-.64,1.72-1.69,2.69-1.85,20.57-3.41,41.14-6.81,61.73-10,4.81-.75,9.72-.79,14.58-1.16-.68,10.27-1.29,20.54-2.06,30.79-.73,9.76-1.42,19.53-2.52,29.25-.75,6.69-.19,7.52,6.4,5.76,22.82-6.09,45.63-12.18,68.4-18.44,8-2.19,15.82-4.84,23.73-7.29l0-.1,2,0c.57,1.87.74,4,1.77,5.57q17.38,26.44,35,52.74Q810.33,367.67,822,385q-36.06,12.43-72.15,24.87c-8,2.75-16.11,5.3-24.11,8.14-1.41.5-2.48,2-3.71,3Z", "transform", "translate(-230 -84)", 1, "cls-22"], ["d", "M449.06,319c16.53-6.61,33.08-13.18,49.59-19.84q39.81-16.08,79.61-32.23A63.12,63.12,0,0,1,585,265l.09,0-33,81-1,3q-12,14.59-24.09,29.17-12.89,15.51-25.84,31a64.78,64.78,0,0,1-6.84-1.22Q451.58,395.52,409,383.07c.41-1.95.28-4.24,1.29-5.78C423.09,357.79,436.1,338.41,449.06,319Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M560,583.12q-34-6.79-68-13.6-21-4.21-42-8.5a34.57,34.57,0,0,1,1.6-5.18q16.82-34.76,33.75-69.47c2.18-4.46,4.39-8.91,6.59-13.36,16.4.95,32.8,1.95,49.2,2.84,8.79.47,17.59.72,26.38,1.16,5.31.26,10.6.73,15.9,1,3.46.18,3.61,2.1,2.89,4.79-2.45,9.16-4.78,18.35-7.24,27.51q-9.3,34.68-18.66,69.35A23.35,23.35,0,0,0,560,583.12Z", "transform", "translate(-230 -84)", 1, "cls-27"], ["d", "M551,349l1-3,1,.05c1.36,1.7,2.4,3.92,4.14,5q37.49,23.38,75.14,46.49c5,3.08,10,6.12,15.79,9.64.76-3.67,1.46-6.35,1.86-9.08,1.64-11.35,3.28-22.7,4.75-34.07,1.86-14.33,3.55-28.69,5.32-43,3.28,4.95,6.74,9.8,9.81,14.88q22.32,37,44.4,74.08c1.65,2.78,2.53,6,3.77,9.05a31,31,0,0,1-3.48-.21c-17.81-3.07-35.6-6.29-53.45-9.18-4.62-.75-9.4-.48-14.11-.67Q629,429.46,611,450q-11.46,13-23,26.06c-2.22-11.21-5-22.35-6.55-33.66-2.49-18.45-8.44-35.82-14.92-53.1-4.13-11-8-22.17-12.09-33.22A75.16,75.16,0,0,0,551,349Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M491.92,473c-2.2,4.45-4.41,8.9-6.59,13.36q-16.9,34.73-33.75,69.47A34.57,34.57,0,0,0,450,561l0,0a20,20,0,0,0-4.42.46c-9.27,3.13-18.52,6.3-27.71,9.64A79,79,0,0,0,410,575c-.31,0-.62,0-.92.09-3.86-5.78-7.51-11.7-11.6-17.3C387,543.43,376.28,529.21,365.64,515c-.79-1.05-1.76-2-2.64-3l1-1c14.81-4.32,29.65-8.55,44.43-13,26.55-8,53.06-16.1,79.6-24.14C489.3,473.47,490.62,473.29,491.92,473Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M304,418l89.09-31c3.58-1.25,7.17-2.44,12-4.09-.78,3.3-1.11,5.47-1.8,7.53q-18.82,56.64-37.71,113.27c-.68,2-1.12,4.17-1.67,6.25-1.55-1.66-3.37-3.14-4.59-5q-13.86-21.27-27.5-42.68C322.51,447.53,313.29,432.75,304,418Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M721,421h1l61.51,39q26.75,17,53.47,34c-1.14,1.12-2.08,2.76-3.45,3.27-24.28,9.09-48.63,18-72.92,27.1-2,.76-3.79,2.34-5.67,3.54l-4,.08c-3-11.06-5.82-22.15-8.93-33.16C735.13,470.19,728.05,445.6,721,421Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M588,476.05q11.49-13,23-26.06,18-20.5,36-41.05c.67,1.44,1.83,2.85,1.93,4.33.82,11.58,1.54,23.16,2.08,34.74.78,16.73,1.36,33.47,2.08,50.19a19.25,19.25,0,0,0,1,3.8v61l-1.89,1.82c-.65-1.54-1-3.29-2-4.58q-29.31-38.91-58.69-77.73C590,480.61,589.15,478.22,588,476.05Z", "transform", "translate(-230 -84)", 1, "cls-27"], ["d", "M377.05,315q9.48,22,19,44c2.94,6.81,6,13.59,9.31,21.19a14.72,14.72,0,0,1-3.16-.64c-22.15-11.88-44.25-23.85-66.42-35.67-4.34-2.32-5.91-5.45-5.88-10.43.21-34.81.13-69.62.14-104.44,1.19,1.06,2.74,1.91,3.51,3.21,2.61,4.44,5,9,7.37,13.58,10.65,20.89,21.21,41.82,31.94,62.67.91,1.77,2.76,3,4.18,4.55C377,313.66,377,314.32,377.05,315Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M304,418c9.28,14.74,18.5,29.52,27.85,44.22q13.62,21.42,27.5,42.68c1.22,1.88,3,3.36,4.59,5L364,511l-1,1-4,1c-10.91,2.13-21.84,4.17-32.72,6.41-10.58,2.18-21.12,4.55-31.66,6.87-7.12,1.57-8.22.42-7-6.93q7.65-47.94,15.16-95.91A45.24,45.24,0,0,0,303,418Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M377,313c-1.42-1.51-3.27-2.78-4.18-4.55-10.73-20.85-21.29-41.78-31.94-62.67-2.34-4.58-4.76-9.14-7.37-13.58-.77-1.3-2.32-2.15-3.51-3.21v-5l.94-1.07a22.68,22.68,0,0,0,4.82-.19c8.86-2.25,17.66-4.75,26.53-7,13.21-3.34,26.45-6.54,39.68-9.79-1.44,6.81-2.73,13.66-4.36,20.42Q387.38,268.8,377,311.13Z", "transform", "translate(-230 -84)", 1, "cls-22"], ["d", "M377,313v-1.87c1.77-1.37,3.91-2.45,5.25-4.16q35-44.37,69.79-88.88a22,22,0,0,1,.9,4.81q-.4,13.44-1.09,26.89c-.52,10-1.38,19.88-1.79,29.83-.53,13.12-.77,26.26-1.14,39.38-20.31-1.28-40.61-2.6-60.93-3.84-3.63-.22-7.29-.13-10.94-.18C377,314.32,377,313.66,377,313Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M654,502a19.25,19.25,0,0,1-1-3.8c-.72-16.72-1.3-33.46-2.08-50.19-.54-11.58-1.26-23.16-2.08-34.74-.1-1.48-1.26-2.89-1.93-4.33,4.71.19,9.49-.08,14.11.67,17.85,2.89,35.64,6.11,53.45,9.18A31,31,0,0,0,718,419l1,1c-7.22,9.32-14.38,18.69-21.68,27.94q-20.7,26.24-41.54,52.34A18.21,18.21,0,0,1,654,502Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M409,383.07q42.63,12.42,85.26,24.81a64.78,64.78,0,0,0,6.84,1.22c-1.86,14.34-3.68,28.68-5.6,43-.78,5.83-1.78,11.63-2.88,18.71-2.47-1.84-3.88-2.61-4.94-3.72q-27.52-28.89-55-57.87c-6.76-7.12-13.55-14.2-20.25-21.38A44.62,44.62,0,0,1,409,383.07Z", "transform", "translate(-230 -84)", 1, "cls-22"], ["d", "M751,528l4-.08a39.9,39.9,0,0,0,4,1.92c20.72,7.27,41.48,14.44,62.16,21.83,2.49.88,4.58,2.88,6.86,4.36q-28.78,10.66-57.57,21.32Q751,584.5,731.54,591.6c-2.12.77-4.31,1.37-7.74,2.45.93-2.79,1.36-4.45,2-6q11.25-26.4,22.54-52.79c.71-1.67,1.14-3.45,1.7-5.18Z", "transform", "translate(-230 -84)", 1, "cls-29"], ["d", "M661,653q-3-39.24-5.89-78.5c-.16-2.15-.08-4.33-.11-6.49l1-1,66.83,27.61c-5.12,5.13-9.33,9.47-13.67,13.66-5.63,5.43-11.39,10.72-17,16.12-9.14,8.75-18.21,17.57-27.37,26.29A20.83,20.83,0,0,1,661,653Z", "transform", "translate(-230 -84)", 1, "cls-23"], ["d", "M330.94,223,330,224l-1.93.16c-6.69-11.57-13.5-23.07-20-34.74-3-5.28-5.36-10.88-8-16.33q38.64-.08,77.28-.11a23.18,23.18,0,0,1,4.77,1l-12.24,11.71Z", "transform", "translate(-230 -84)", 1, "cls-18"], ["d", "M1443.12,674.93c-.37,1-.75,2.05-1.13,3.07a18.46,18.46,0,0,0-2.25,2.62q-24.63,43.13-49.22,86.3c-1.85,3.23-3.84,6.38-6.45,10.72-1.17-3-2-4.78-2.51-6.62-4.92-17.47-9.68-35-14.7-52.43-2.38-8.27-5.24-16.4-7.88-24.59,0-.34,0-.67,0-1l-1-1c-11.77-.73-23.56-1.33-35.32-2.23q-29.58-2.25-59.12-4.84c-8.57-.76-17.1-2-25.65-2.95a24.37,24.37,0,0,1,1.63-4.12c5.14-8.37,10.41-16.66,15.57-25q12.57-20.4,25.06-40.83l.84-.92,2-2c1.87-1.06,3.78-2.06,5.61-3.2q29.71-18.42,59.4-36.88h1.89l37.49,41.91c10.5,11.75,20.9,23.59,31.49,35.26,7.9,8.71,16,17.23,24,25.84C1443,673,1443.07,674,1443.12,674.93Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M1641.07,906c-13.93,3.91-27.88,7.74-41.77,11.76q-44.35,12.82-88.65,25.8c-6.69,2-7,2-10-4.87-8.33-18.68-16.44-37.44-24.62-56.19q-10.86-24.91-21.65-49.88c-1-2.43-1.61-5-2.41-7.57l.07-.07,3,0,7,0,53,1,6,0,27,.92,1,1c-2.06,5.08-4.2,10.13-6.17,15.24q-16.63,43.06-33.2,86.14c-1.56,4-3,8.11-4.58,12.17l1.4.79,88.72-108.09c-.25-.72-.51-1.44-.76-2.17l-43.31-4.18c1.26-2.05,2.1-4.57,3.83-6.09,16.87-14.8,33.91-29.39,50.85-44.11,8.9-7.75,17.69-15.63,26.55-23.42.71-.63,1.56-1.09,3.63-1.1a41.48,41.48,0,0,1-2,5.88c-11.47,22.75-22.93,45.51-34.63,68.15-2,3.92-1.82,6.73.61,10.44,13.85,21.18,27.43,42.54,41,63.92C1641.57,902.62,1641,904.49,1641.07,906Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M1359,694c2.64,8.19,5.5,16.32,7.88,24.59,5,17.44,9.78,35,14.7,52.43.51,1.84,1.34,3.58,2.51,6.62,2.61-4.34,4.6-7.49,6.45-10.72q24.62-43.15,49.22-86.3A18.46,18.46,0,0,1,1442,678c.67,4.72,1.45,9.43,2,14.17.26,2.46,0,5,0,7.46q.49,36,1,72.06a64,64,0,0,0,1,7.38c0,.3,0,.61,0,.91h-59.11c1.8,1.51,2.72,2.41,3.77,3.14,15.13,10.55,30.22,21.15,45.44,31.57,4.46,3,9.3,5.55,14,8.3h1.9c0,.67,0,1.33,0,2l-.07.07c-14.42,2.43-28.85,4.82-43.26,7.29q-39.11,6.7-78.19,13.44a43.36,43.36,0,0,1-5.48.24c2.83-3.65,5.45-7.48,8.51-10.92,14.45-16.29,29-32.46,43.54-48.72a18.71,18.71,0,0,0,4-7.27c-5.79.41-11.59.75-17.37,1.24q-20.61,1.77-41.21,3.65c-13.4,1.2-26.79,2.49-40.2,3.63-10.43.88-20.88,1.59-31.32,2.38h0c1.71-1.79,3.32-3.72,5.16-5.36q25.28-22.47,50.6-44.88c13.37-11.9,26.63-23.93,40-35.81C1350.67,700.48,1354.89,697.31,1359,694Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M1596,581.05l1,1c0,1.32,0,2.64,0,4-1.15,1.33-2.66,2.49-3.38,4-6.69,14.09-13.25,28.23-19.82,42.37-6.22,13.39-12.25,26.87-18.71,40.14-2.94,6-6.72,11.66-10.12,17.48-.82-2-1.73-3.93-2.44-6q-13.3-38-26.56-76,6-32.89,12.08-65.78,6.51-35.6,13-71.18l.92,0a34.52,34.52,0,0,0,1.38,3.72Q1569.64,527.94,1596,581.05Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M1545,690c3.4-5.82,7.18-11.44,10.12-17.48,6.46-13.27,12.49-26.75,18.71-40.14,6.57-14.14,13.13-28.28,19.82-42.37.72-1.53,2.23-2.69,3.38-4,3.33,11.49,6.75,23,10,34.49q9.94,35.58,19.69,71.21c1.64,6,1.32,6.57-4.77,6.24-11.43-.63-22.85-1.65-34.27-2.52-10.42-.79-20.85-1.63-31.28-2.38a8.87,8.87,0,0,0-4.54,1.05c27.37,18.45,56.61,33.68,85.32,52.14-2.5,1-3.35,1.56-4.24,1.66-1.65.18-3.32.08-5,.11-26.78.33-53.56.62-80.33,1-7.81.12-15.6.75-23.4.85-1.73,0-3.47-1.25-5.2-1.92,6.5-14,13.07-27.91,19.47-41.93C1540.83,700.79,1542.81,695.36,1545,690Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M1545,690c-2.17,5.35-4.15,10.78-6.54,16-6.4,14-13,28-19.47,41.93-2.07-.91-4.67-1.31-6.13-2.8-21.5-21.94-42.84-44-64.27-66a47,47,0,0,0-5.45-4.2c0-1-.1-1.94-.16-2.91l.07,0c6.72-5.56,13.67-10.87,20.11-16.73,14.7-13.38,29.1-27.07,43.74-40.52,2.76-2.54,6-4.51,9.1-6.74q13.27,38,26.56,76C1543.25,686.08,1544.16,688,1545,690Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M1452,825c0-.66,0-1.32,0-2,7.19-8,14.42-16,21.57-24q20.79-23.44,41.5-46.94c1.51.76,3.89,1.16,4.38,2.34,9.47,22.84,18.73,45.76,28,68.69A16.11,16.11,0,0,1,1548,827l-27-.92-6,0-53-1-7,0Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M1551.07,827.86l43.31,4.18c.25.73.51,1.45.76,2.17L1506.42,942.3l-1.4-.79c1.53-4.06,3-8.12,4.58-12.17q16.58-43.08,33.2-86.14c2-5.11,4.11-10.16,6.17-15.24Z", "transform", "translate(-230 -84)", 1, "cls-9"], ["d", "M1515.05,752q-20.74,23.47-41.5,46.94c-7.15,8-14.38,16-21.57,24h-1.9q-2-21.51-4.06-43c0-.3,0-.61,0-.91,9.56-3.8,19.16-7.48,28.65-11.44,12.11-5,24.11-10.37,36.21-15.45C1512.07,751.67,1513.65,752.05,1515.05,752Z", "transform", "translate(-230 -84)", 1, "cls-6"], ["d", "M1277,347H1279q0,44.52,0,89c-3.32,7.78-6.6,15.59-10,23.35-4.3,9.89-8.67,19.75-13,29.62a59.56,59.56,0,0,1-3.82-5.74c-11.43-22.37-22.75-44.8-34.2-67.17-2.32-4.55-5-8.91-7.54-13.36a8.6,8.6,0,0,0-1.48,4.81c-.7,13.93-1.37,27.87-2.09,41.8q-2,37.8-3.93,75.6c-8.06-2.56-16.2-4.9-24.18-7.7-32.2-11.27-64.35-22.7-96.53-34a36.7,36.7,0,0,0-5.17-.94,41.49,41.49,0,0,0,.79,4.67c5.94,19.59,12,39.14,17.83,58.76,2.07,7,3.54,14.15,5.29,21.23-8.44-.33-16.89-.81-25.33-1-25.56-.42-51.11-.71-76.67-1.06.47-1.3.6-2.9,1.45-3.85q12.19-13.44,24.62-26.68c13.55-14.34,27.26-28.53,40.77-42.92,3-3.22,5.47-7,8.18-10.5-1-1-1.9-2.33-3.11-3Q1028,454,985,430c1.87-1,3.64-2.27,5.62-2.86q45.87-13.62,91.78-27.07c7.48-2.18,15-4,22.57-6.05l-27.69,83.91a11,11,0,0,0,5.84-1.7q55.32-33.54,110.58-67.17c4.32-2.65,8.21-6,12.3-9l3-1a28.56,28.56,0,0,0,3.42-1.92q30.57-23,61.07-46.09A25.81,25.81,0,0,0,1277,347Z", "transform", "translate(-230 -84)", 1, "cls-29"], ["d", "M1542,471.07l-.92,0a15.8,15.8,0,0,0-3.7,1.25c-25,16-49.85,32-74.83,47.93-2.6,1.65-5.69,2.54-8.55,3.78-1-17.39-2-34.78-2.86-52.17Q1450,449,1449,426.07c-.44-10.62-.62-21.25-1.12-31.86a93.16,93.16,0,0,0-1.54-9.83,10.88,10.88,0,0,0-2.44.49q-33.78,17.75-67.54,35.52c-3.35,1.75-6.91,3.09-10.38,4.61.35-21.27.46-42.56,1.11-63.82.71-23.06,1.92-46.11,2.91-69.17l1,0a13.49,13.49,0,0,1,1.91,1.6q30.72,37.4,61.41,74.81c3.81,4.64,7.82,9.11,11.74,13.65l1.49-.48c1-3.79,2-7.55,2.84-11.37,2.26-10.72,4.4-21.47,6.58-32.21a47.16,47.16,0,0,0,2.75-5.8q18-55.63,35.9-111.3c.69-2.11,2.26-3.94,3.42-5.89,1,4.9,2,9.78,2.85,14.71q9.48,55.1,18.9,110.21L1459.29,341c-.24.53-.48,1-.73,1.58L1499,380c.87,2.33,1.56,4.74,2.61,7q18.35,39.22,36.85,78.37c.7,1.49,2.36,2.52,3.57,3.77C1542,469.77,1542,470.42,1542,471.07Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1499.05,215c-1.16,1.95-2.73,3.78-3.42,5.89q-18,55.62-35.9,111.3A47.16,47.16,0,0,1,1457,338a41.38,41.38,0,0,1-2-4.55c-8.11-27.12-16.11-54.28-24.33-81.37-1.07-3.55-3.16-6.79-4.78-10.18-1.48-.93-2.84-2.29-4.45-2.71q-38.17-9.8-76.42-19.36a41.35,41.35,0,0,0-5.65-.59c.52,1.76.68,2.72,1.06,3.59q13.83,31.52,27.74,63c.55,1.24,1.87,2.15,2.83,3.21v3l-1,0c-2.13.31-4.67,0-6.34,1q-39.63,24.63-79,49.58c-5,3.14-5.85,2.93-7.21-3q-11.3-49.12-22.46-98.27c-1.56-6.8-3.31-13.56-5-20.34,0-.33,0-.66,0-1s0-.65,0-1l61.15-40.62c5.27-3.5,10.57-7,15.85-10.43l1,.06c1.73,8.62,3.35,17.27,5.21,25.87,1.64,7.57,3.55,15.08,5.44,23a34.65,34.65,0,0,0,4.31-1.46q34.62-17.81,69.18-35.71a101,101,0,0,0,8.69-5.67L1424,174v2c-.33,2.11-1,4.23-.94,6.34.15,5.63.52,11.26,1,16.88.92,11.73,1.81,23.47,3,35.18.55,5.54,1.4,5.8,6.74,3.73,15.8-6.14,31.66-12.13,47.39-18.43,5.44-2.18,10.59-5.11,15.87-7.7h3q0,.5,0,1C1499.68,213.66,1499.36,214.33,1499.05,215Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M1105,394c-7.52,2-15.09,3.87-22.57,6.05q-45.92,13.43-91.78,27.07c-2,.59-3.75,1.89-5.62,2.86l-1,.05c-1-8.56-2.19-17.1-3-25.67-.93-10.23-1.51-20.5-2.24-30.75q-1.89-26.78-3.8-53.55,26.9,1.38,53.78,2.75c12.62.66,25.24,1.44,37.86,2.05,15.78.77,31.57,1.43,47.35,2.14,0,.33,0,.67,0,1a51.91,51.91,0,0,1-.18,6c-2.46,17.28-5.11,34.54-7.41,51.84-.3,2.27,1,4.76,1.58,7.14v1Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M1366,425c3.47-1.52,7-2.86,10.38-4.61q33.8-17.7,67.54-35.52a10.88,10.88,0,0,1,2.44-.49,93.16,93.16,0,0,1,1.54,9.83c.5,10.61.68,21.24,1.12,31.86q1,22.88,2.11,45.76c.89,17.39,1.9,34.78,2.86,52.17-2.5-2.1-5.3-3.93-7.45-6.33-11.84-13.21-23.53-26.55-35.24-39.87-10.93-12.46-21.72-25.05-32.8-37.37-3.44-3.82-7.64-7-11.49-10.43-1.82.32-4.3,0-5.35,1.06-7.86,8-15.41,16.37-23.1,24.56-4.86,5.18-9.78,10.28-14.67,15.41-5.28-4-10.65-7.89-15.83-12-9.08-7.25-18-14.64-27.06-22,3.7-1,7.34-2.48,11.1-2.91,19.82-2.26,39.67-4.17,59.48-6.41,4.19-.47,8.29-1.79,12.42-2.72Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M1250,220c0,.33,0,.66,0,1-2.34,6.21-4.82,12.37-7,18.64q-17,48.76-33.92,97.58a64.13,64.13,0,0,1-2.9,6c-1.31-2.11-2.19-3.25-2.8-4.53q-22.58-47-45-94.07c-2.4-5.05-4.21-10.38-6.3-15.58,7.93-.68,15.85-1.3,23.77-2.05,12.37-1.18,24.72-2.5,37.09-3.66S1237.62,221.1,1250,220Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1114,325c-6.3-4.84-12.7-9.55-18.87-14.54q-26.34-21.3-52.52-42.8-17.71-14.53-35.28-29.24c-.67-.56-1.06-1.47-2.45-3.48H1107q1.88,23.5,3.74,47C1111.82,296.32,1112.88,310.67,1114,325Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M1105,394h3c20,1.08,40,2.08,60,3.28,12.7.76,25.38,1.82,38.06,2.74-4.09,3-8,6.38-12.3,9q-55.21,33.7-110.58,67.17a11,11,0,0,1-5.84,1.7Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1364,425c-4.13.93-8.23,2.25-12.42,2.72-19.81,2.24-39.66,4.15-59.48,6.41-3.76.43-7.4,1.91-11.1,2.9l-2-.94q0-44.52,0-89c7.57,6.71,15.21,13.33,22.68,20.14q29.59,27,59,54.12A48.29,48.29,0,0,1,1364,425Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1250,220c-12.38,1.1-24.76,2.15-37.13,3.32s-24.72,2.48-37.09,3.66c-7.92.75-15.84,1.37-23.77,2.05,1.49-4.27,2.7-8.66,4.51-12.79,7.14-16.27,14.45-32.47,21.73-48.67.6-1.34,1.45-2.56,2.7-4.73,5.68,4.51,11.12,8.68,16.4,13.06,16.22,13.44,32.36,27,48.59,40.4,1.08.89,2.66,1.18,4,1.74,0,.33,0,.66,0,1S1250,219.68,1250,220Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M1108,393c-.57-2.38-1.88-4.87-1.58-7.14,2.3-17.3,4.95-34.56,7.41-51.84a51.91,51.91,0,0,0,.18-6c10.62,2,21.26,3.81,31.86,5.9,17.15,3.39,34.26,6.92,51.39,10.41,1.73.36,3.43.85,6.69,1.67a44.64,44.64,0,0,1-4.51,3c-26.69,12.47-53.41,24.85-80.07,37.38C1115.42,388.24,1111.78,390.77,1108,393Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M1277,347a25.81,25.81,0,0,1-3.51,4q-30.48,23.12-61.07,46.09A28.56,28.56,0,0,1,1209,399c-.68-15.39-1.44-30.78-2-46.18-.22-6.3.48-6.9,6.78-6.81C1234.9,346.31,1256,346.7,1277,347Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1424,176v-2c13.19-1.48,26.39-2.88,39.57-4.45,20.76-2.47,41.57-4.61,62.22-7.78,8.35-1.28,14.67,1.34,21.52,5.18,14.07,7.87,28.48,15.11,42.78,22.56,14,7.3,28,14.52,42,21.81A10.06,10.06,0,0,1,1634,213l-134-1h-3q-32-16-63.9-31.93C1430.12,178.6,1427,177.35,1424,176Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1420.86,174.08a101,101,0,0,1-8.69,5.67q-34.55,18-69.18,35.71a34.65,34.65,0,0,1-4.31,1.46c-1.89-7.94-3.8-15.45-5.44-23-1.86-8.6-3.48-17.25-5.21-25.87,22.16,1.62,44.31,3.31,66.48,4.82C1403.28,173.46,1412.08,173.68,1420.86,174.08Z", "transform", "translate(-230 -84)", 1, "cls-5"], ["d", "M409.07,575.08c.3,0,.61-.07.92-.09,4.88,7.74,9.89,15.39,14.6,23.23,18.67,31.11,37.22,62.29,55.91,93.39,1.05,1.73,3,2.95,4.46,4.4q1,3,2.06,6l-2,1c-16.58-1-33.15-2.08-49.74-3-15.76-.83-31.54-1.36-47.3-2.19-7.29-.38-14.55-1.17-21.82-1.78l-2.05-.07c5.29-14.33,10.55-28.66,15.88-43Q394.49,614,409.07,575.08Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M975,320.07q1.9,26.78,3.8,53.55c.73,10.25,1.31,20.52,2.24,30.75.77,8.57,2,17.11,3,25.66a49.76,49.76,0,0,0,1.65,5.19Q996.81,461.13,1008,487l-62-19.78a41.09,41.09,0,0,0,1.58,5c8.46,15.82,17,31.59,25.44,47.43C981.11,534.74,989,549.9,997,565c-2.75.64-5.56,1.09-8.24,1.94-27,8.5-54,17.09-81,25.55-1.8.57-3.84.35-5.77.5l-33.51-52c-8.3-12.87-16.56-25.76-25-38.57-.79-1.21-2.42-1.89-3.65-2.82-.63,1.42-1.62,2.79-1.84,4.27-2.36,15.95-4.54,31.92-7,47.85-.23,1.55-2,2.87-3,4.3-2.28-1.48-4.37-3.48-6.86-4.36-20.68-7.39-41.44-14.56-62.16-21.83a39.9,39.9,0,0,1-4-1.92c1.88-1.2,3.62-2.78,5.67-3.54,24.29-9.08,48.64-18,72.92-27.1,1.37-.51,2.31-2.15,3.45-3.27l2-1c1.27-1.26,2.88-2.31,3.75-3.79,18.32-31.4,36.51-62.88,54.86-94.26,2.46-4.21,5.6-8,8.43-12,15.27,9.08,30.49,18.24,45.82,27.21,9.29,5.44,18.76,10.58,28.15,15.85a59.9,59.9,0,0,0-2.91-6.29c-6.67-10.94-13.35-21.87-20.19-32.7C948,373,939,359,930,345c.33-1.33.67-2.66,1-4,12.33-6.17,24.65-12.37,37-18.45A62.44,62.44,0,0,1,975,320.07Z", "transform", "translate(-230 -84)", 1, "cls-23"], ["d", "M906,382.94c-2.83,4-6,7.81-8.43,12-18.35,31.38-36.54,62.86-54.86,94.26-.87,1.48-2.48,2.53-3.75,3.79-1.17-7.73-2.41-15.44-3.5-23.18-3.21-22.73-6.27-45.47-9.62-68.18C825,396,823.32,390.54,822,385q-11.62-17.34-23.25-34.69-17.55-26.34-35-52.74c-1-1.57-1.2-3.7-1.77-5.57h0c4.79.32,9.59.8,14.39.93q39.33,1.08,78.67,2l1.8.12a37.81,37.81,0,0,0,4.09,3.55q27.74,18.06,55.55,36c3.73,2.39,7.78,4.29,11.69,6.41H931c-.33,1.32-.67,2.65-1,4-1.63,1.3-3.68,2.32-4.81,4-3.09,4.5-5.94,9.17-8.59,13.94C913,369.5,909.55,376.25,906,382.94Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M928.19,341c-3.91-2.12-8-4-11.69-6.41q-27.86-17.88-55.55-36a37.81,37.81,0,0,1-4.09-3.55c15.78-14.25,31.6-28.43,47.28-42.78,4.89-4.48,4.45-5.69-2-7.48-20.34-5.69-40.72-11.26-61-17.15C838.85,227,837,224.6,835,223l8-6,3-2h0l3-2,1-1,7-5h0l3-2h0l11-8h0l3-2h0l3-2,1-1,3-2h0l2-2,2-1,3-2q12.36-8.76,24.74-17.49c1.33-.93,2.82-1.66,4.23-2.48h.19q-.82,10.92-1.64,21.84Q913.26,216.44,911,246c3.44,18.44,6.93,36.86,10.29,55.31C923.67,314.54,925.89,327.79,928.19,341Z", "transform", "translate(-230 -84)", 1, "cls-27"], ["d", "M919,165c2.83-2.41,5.42-5.21,8.54-7.18,15.87-10,31.88-19.84,47.81-29.79a30.53,30.53,0,0,0,3.71-3.24c.85,2.83,1.9,5.61,2.5,8.49q10,48.36,19.93,96.74c.2,1,.32,2,.48,3l-2,0c-12.14-10.12-24.31-20.2-36.4-30.36Q941.23,183.9,919,165Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M919,165q22.29,18.84,44.6,37.66c12.09,10.16,24.26,20.24,36.4,30.36-4.11,1.29-8.14,3.19-12.35,3.77-23.36,3.18-46.77,6.05-70.17,9-2.13.26-4.32.16-6.48.22q2.26-29.58,4.54-59.15.83-10.92,1.64-21.84Z", "transform", "translate(-230 -84)", 1, "cls-11"], ["d", "M479.07,922c-6.06-4.57-12.3-8.93-18.17-13.74q-34.11-27.93-68-56.08c-2.94-2.43-5.91-4.83-8.87-7.24l-1-1c0-.61,0-1.23,0-1.84q14.54-41.46,29.11-82.9c2.15-6.11,4.54-12.15,6.82-18.22a63.54,63.54,0,0,1,6.3,1.35Q446.65,749.09,468,756c1,3,1.9,6,3,9q16.49,43.53,33,87c0,.69.05,1.39.07,2.09-1,3.33-1.94,6.72-3.16,10Q490.06,893,479.07,922Z", "transform", "translate(-230 -84)", 1, "cls-24"], ["d", "M468,756q-21.36-6.87-42.73-13.69A63.54,63.54,0,0,0,419,741c0-.29,0-.57,0-.86,16.08-8.74,32.21-17.39,48.22-26.26,6.07-3.36,11.88-7.21,17.81-10.84l2-1c6.31-4.81,12.77-9.42,18.88-14.46,18.29-15.1,36.43-30.38,54.71-45.49.69-.57,2.24-.08,3.39-.09-.44,3.79-.91,7.57-1.34,11.35-2.23,19.92-4.38,39.84-6.7,59.74-1.17,10-2.64,20-4,30-1.62.34-3.23.75-4.87,1Q507.55,750.05,468,756Z", "transform", "translate(-230 -84)", 1, "cls-12"], ["d", "M383,842.08c0,.61,0,1.23,0,1.84-9.51,2.33-19,4.59-28.53,7q-27.3,6.89-54.57,13.93A31.63,31.63,0,0,0,295,867l-2-.1c0-.31,0-.63,0-.94-.69-21.54-1.34-43.09-2.08-64.63-.15-4.13-.63-8.26-1-12.38,2,.54,4.18.67,5.86,1.69,26.66,16.09,53.24,32.31,79.89,48.41C378,840.42,380.58,841.09,383,842.08Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M485,703c-5.93,3.63-11.74,7.48-17.81,10.84-16,8.87-32.14,17.52-48.22,26.26q-25.29-20.16-50.54-40.37c-1.06-.85-1.54-2.42-2.3-3.66,7.28.61,14.54,1.4,21.83,1.78,15.76.83,31.54,1.36,47.3,2.19C451.85,700.92,468.42,702,485,703Z", "transform", "translate(-230 -84)", 1, "cls-5"], ["d", "M1359,694c-4.09,3.31-8.31,6.48-12.24,10-13.4,11.88-26.66,23.91-40,35.81q-25.26,22.49-50.6,44.88c-1.84,1.64-3.45,3.57-5.16,5.36l-2,0h0c-.43-5.29-.68-10.6-1.3-15.87-2.51-21.58-5-43.16-7.78-64.71-1-8.2-2.61-16.32-3.93-24.48,0-1,0-2,0-2.92l2,0c8.55,1,17.08,2.19,25.65,2.95q29.55,2.61,59.12,4.84c11.76.9,23.55,1.5,35.32,2.23l1,1C1359,693.33,1359,693.66,1359,694Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1249,790c-6.07,5-12,10.23-18.25,15.11-6.77,5.32-13.82,10.29-20.63,15.57A50.39,50.39,0,0,0,1205,826l-2-1c-11.4-10.72-22.77-21.47-34.24-32.12a39.59,39.59,0,0,0-5.68-3.75,19.6,19.6,0,0,0-3.16-3.09c-13.43-8.32-26.87-16.61-40.39-24.76-3.36-2-7-3.54-10.55-5.29-.32-.67-.64-1.34-1-2,1.49-1.32,3.07-2.55,4.45-4,9.25-9.53,18.4-19.15,27.69-28.63q29.63-30.25,59.39-60.36A42.33,42.33,0,0,1,1205,657c-.23,1.14-.36,2.31-.7,3.42q-17.88,57.76-35.74,115.52c-.6,1.93-.41,4.11-.58,6.17-.33.63-.65,1.27-1,1.91l-1,1c1.1,1,2.07,2.62,3.31,2.86a64,64,0,0,0,10.88,1.11c22.93.42,45.86.72,68.8,1.06Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1187,918q-24.12-20.34-48.25-40.67Q1124.92,865.63,1111,854c0-.34,0-.68,0-1l0,0q24.07-7.11,48.14-14.2L1203,826c-2.85,16.73-5.76,33.45-8.52,50.19-2.25,13.62-4.33,27.26-6.48,40.89Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1188,917c2.15-13.63,4.23-27.27,6.48-40.89,2.76-16.74,5.67-33.46,8.52-50.19,0-.31,0-.63,0-1l2,1q20.36,14.91,40.69,29.82c5.2,3.82,5.21,5.22.44,9.53q-26.27,23.77-52.54,47.53C1191.86,914.41,1189.87,915.65,1188,917Z", "transform", "translate(-230 -84)", 1, "cls-13"], ["d", "M465.16,171.21c16.49-5.74,33-11.42,49.46-17.25,21.47-7.61,42.91-15.34,64.36-23,.64,5.07,1.6,10.11,1.87,15.2.57,10.76.75,21.55,1.13,32.33q1.5,41.76,3,83.53h-2q-44.85-33.6-89.7-67.2c-8.5-6.37-17-12.75-25.38-19.28C466.64,174.54,466.06,172.67,465.16,171.21Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M583,262h2c4.39-3.62,8.9-7.12,13.13-10.92,2.46-2.2,4.36-5,6.7-7.36q35.6-35.73,71.26-71.4c.54-.53,1.17-1,2.91-2.43-1.28,8.43-2.28,15.56-3.44,22.65-2.74,16.9-5.59,33.79-8.29,50.7-.24,1.53.32,3.19.5,4.79,1.39-.17,2.93,0,4.15-.56q29.4-13.08,58.72-26.36A27,27,0,0,0,734,219l2.93-.07a30.21,30.21,0,0,0,.81,4.38c6.86,20.48,13.78,40.94,20.62,61.42A70.48,70.48,0,0,1,760,292l0,.1q-38.43-16.76-76.88-33.47c-5.59-2.42-11.37-4.41-17.07-6.6-4.86.37-9.77.41-14.58,1.16-20.59,3.2-41.16,6.6-61.73,10-1,.16-1.79,1.21-2.69,1.85h-2l-.09,0Z", "transform", "translate(-230 -84)", 1, "cls-1"], ["d", "M736.93,218.9,734,219c-4.48-4.53-8.74-9.3-13.48-13.54-12.07-10.79-24.39-21.3-36.52-32-1.29-1.15-2-2.93-3-4.42l51.37-10L748,156l0,.08c-1.52,8.45-3.08,16.9-4.57,25.36q-3.24,18.3-6.42,36.6Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M330.94,223l38.9-37.24L382.08,174c1.28.33,3.28.25,3.72,1,5.57,9.95,10.91,20,16.31,30.06-.05.29-.09.59-.14.88-13.23,3.25-26.47,6.45-39.68,9.79-8.87,2.24-17.67,4.74-26.53,7A22.68,22.68,0,0,1,330.94,223Z", "transform", "translate(-230 -84)", 1, "cls-23"], ["d", "M736.93,218.9,737,218c1.63-1.14,3.32-2.2,4.87-3.44Q768.94,192.78,796,171c2,1.59,4.53,2.79,5.82,4.81,8.87,13.78,17.35,27.81,26.27,41.56,1.54,2.38,4.58,3.79,6.93,5.65,2,1.6,3.85,4,6.16,4.66,20.28,5.89,40.66,11.46,61,17.15,6.43,1.79,6.87,3,2,7.48-15.68,14.35-31.5,28.53-47.28,42.78l-1.8-.12a66.7,66.7,0,0,0-1.72-8.25c-6.42-18.91-13-37.78-19.51-56.65a39,39,0,0,0-1.92-3.94c-5,4.52-9.8,8.6-14.36,12.88q-18.88,17.77-37.65,35.69c-6,5.72-11.94,11.54-17.9,17.32h0l-2,0a70.48,70.48,0,0,0-1.64-7.25c-6.84-20.48-13.76-40.94-20.62-61.42A30.21,30.21,0,0,1,736.93,218.9Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M796,171q-27.06,21.79-54.12,43.57c-1.55,1.24-3.24,2.3-4.87,3.44q3.21-18.3,6.42-36.6c1.49-8.46,3.05-16.91,4.57-25.36q19.68,5,39.36,9.91c3.2.79,6.44,1.37,9.66,2.05Z", "transform", "translate(-230 -84)", 1, "cls-10"], ["d", "M871,197l-11,8Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M857,207l-7,5Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M846,215l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M849,213l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M860,205l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M874,195l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M877,193l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M881,190l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M888,185l-3,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M883,188l-2,2Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M939,943q-56.64-16.12-113.29-32.22c-2.87-.81-5.85-1.21-8.77-1.8-.32-.32-.63-.65-.94-1q18.3-43.51,36.58-87l-1-1c-5.28,1.86-10.55,3.77-15.85,5.57q-59.6,20.25-119.2,40.46c-1.57.53-3.06,1.27-4.59,1.91L710,867c1.29-2.7,2.7-5.36,3.83-8.12q23.28-57.09,46.51-114.19c.6-1.47,1.5-2.81,2.68-5l88.35,77.14,1.12-.94c-2.92-8.77-5.88-17.53-8.74-26.32-4-12.18-7.85-24.39-11.76-36.58,1.32.62,3,.9,3.88,1.92Q862,786.89,888,819c3.79,9.57,7.38,19.22,11.39,28.69,12.61,29.72,25.39,59.37,38,89.07A40.31,40.31,0,0,1,939,943Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M710,867l1.94.92c1.72,1.2,3.28,2.82,5.18,3.54,29,10.89,58.14,21.64,87.16,32.56,1.82.68,3.19,2.53,4.76,3.84L712.07,909l-32.43,27.84-17.71,15.22L661,952c-6.36-16.38-12.66-32.79-19.1-49.15C635.36,886.23,628.65,869.63,622,853a36.89,36.89,0,0,1,4,.29c20.7,3.72,41.38,7.56,62.1,11.17,6.6,1.15,13.3,1.72,20,2.55Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M809,907.87c-1.57-1.31-2.94-3.16-4.76-3.84-29-10.92-58.12-21.67-87.16-32.56-1.9-.72-3.46-2.34-5.18-3.54,1.53-.64,3-1.38,4.59-1.91q59.6-20.25,119.2-40.46c5.3-1.8,10.57-3.71,15.85-5.57l1,1Q834.3,864.48,816,908Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1111,853c0,.34,0,.68,0,1h-1c-1.65.16-3.32.2-4.94.52-16.79,3.32-33.56,6.73-50.36,10Q1025.39,870.34,996,876l-3,0q0-6.51,0-13l0-33c0-5.26.1-10.52,0-15.77-.28-12.75-.65-25.49-1-38.24l-1-3c0-2,0-3.94,0-5.91l3-.07q20,14.78,40.06,29.55,38,28.18,76,56.43Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M996,876q29.36-5.73,58.71-11.46c16.8-3.32,33.57-6.73,50.36-10,1.62-.32,3.29-.36,4.94-.52q-6.52,36.6-13,73.19c-.64,3.6-1.33,7.2-2,10.79l-2-.9q-19-11.37-38-22.76L996,879C996,878,996,877,996,876Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M992,776c.33,12.75.7,25.49,1,38.24.11,5.25,0,10.51,0,15.77-.61,1-1.74,2.09-1.76,3.15-.18,8.56-.25,17.13-.11,25.69,0,1.4,1.24,2.77,1.9,4.16q0,6.5,0,13c-4.93-2.31-10-4.32-14.77-7q-43.57-24.28-87-48.8A22.21,22.21,0,0,0,888,819q-26-32.07-52.15-64.08c-.83-1-2.56-1.3-3.88-1.92-.31-1.69-.63-3.38-.94-5.07,2.6.51,5.26.86,7.8,1.58Q877,760.3,915.16,771.17a12.93,12.93,0,0,0,4.4.72c9.1-.7,18.18-1.59,27.28-2.34Q968.91,767.74,991,766c0,.36,0,.73,0,1.09,0,2,0,3.94,0,5.91Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M996,879l58.91,35.33q19,11.4,38,22.76c-1.36.82-2.62,2.08-4.08,2.38q-41.18,8.34-82.41,16.48a10.46,10.46,0,0,1-1.49.1l-1-.06c-3.2-22.46-6.51-44.9-9.47-67.39C994.14,885.5,995.49,882.18,996,879Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M622,853c6.65,16.63,13.36,33.23,19.93,49.88,6.44,16.36,12.74,32.77,19.1,49.15-15.56-4.25-31.14-8.46-46.69-12.77-9.79-2.71-19.53-5.57-29.29-8.36-3.36-11.48-6.8-22.94-10-34.45-2.46-8.77-4.67-17.62-7-26.43a8.46,8.46,0,0,0,.14-.9c3-.79,6.13-1.45,9.11-2.41,14.23-4.54,28.43-9.16,42.64-13.75Z", "transform", "translate(-230 -84)", 1, "cls-24"], ["d", "M568,870c2.32,8.81,4.53,17.66,7,26.43,3.24,11.51,6.68,23,10,34.45-14.87-1.09-29.74-2.15-44.6-3.31-9.41-.73-18.8-1.68-28.22-2.39-10.73-.81-21.48-1.46-32.23-2.19,0-.34,0-.68,0-1,11.5-6.66,23-13.24,34.49-20C532.36,891.4,550.17,880.68,568,870Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1499.05,215c.31-.67.63-1.34,1-2q21.46,11.74,42.94,23.48c23.21,12.73,46.37,25.55,69.64,38.18,10.37,5.63,20.94,10.92,31.42,16.36,0,.66,0,1.31,0,2q-25.46,42-50.89,84a42.25,42.25,0,0,0-2.22,5c-.65.65-1.29,1.31-1.93,2l-47,85.16c-1.21-1.25-2.87-2.28-3.57-3.77q-18.54-39.14-36.85-78.37c-1-2.24-1.74-4.65-2.61-7h88.2l-66.37-40.08q-9.45-55.11-18.9-110.21C1501.05,224.78,1500,219.9,1499.05,215Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M568,870c-17.85,10.66-35.66,21.38-53.55,32-11.44,6.77-23,13.35-34.49,20l-.91,0q10.95-29,21.86-58c1.22-3.26,2.12-6.65,3.16-10,7.12,1.64,14.26,3.18,21.34,4.94,13.25,3.29,26.46,6.72,39.68,10.09l.4.15.4-.17L567,869l1.18.13A8.68,8.68,0,0,1,568,870Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1542,469.12,1589,384c.75,1.54,1.9,3,2.18,4.64,4.35,25.34,8.58,50.71,12.84,76.07.31,1.8.71,3.58,1.07,5.37V472c-1.29,15.88-2.62,31.77-3.84,47.66-1.13,14.9-2.06,29.82-3.24,44.72-.44,5.59-1.32,11.14-2,16.71q-26.29-53.13-52.58-106.26a34.52,34.52,0,0,1-1.38-3.72C1542,470.42,1542,469.77,1542,469.12Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M622,853l-2.09,0c-.55-1.86-.73-4-1.72-5.54-7.41-12-15-24-22.51-35.93l-39.77-63.37L554,747c-.89-3.41,1.09-4.1,3.83-4q14,.6,27.91,1.23c12,.56,23.91,1.26,35.87,1.6,1.4,0,2.87-1.82,4.3-2.8,1.54-1.71,3.77-3.16,4.5-5.16,9.81-26.54,19.4-53.16,29.06-79.76A34.51,34.51,0,0,1,661,655l2,1,98,82c-2.06.62-4.08,1.68-6.16,1.8C734.92,741,715,742,695.14,743c-14.26.73-28.52,1.4-42.78,2.12-6.13.31-12.27.53-18.39,1.07-4.5.4-5.34,1.94-3.22,5.11q34.05,50.76,68.11,101.52C702,857.48,705,862.27,708,867c-6.65-.83-13.35-1.4-20-2.55-20.72-3.61-41.4-7.45-62.1-11.17A36.89,36.89,0,0,0,622,853Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M991,766q-22.08,1.77-44.16,3.55c-9.1.75-18.18,1.64-27.28,2.34a12.93,12.93,0,0,1-4.4-.72Q877,760.36,838.83,749.51c-2.54-.72-5.2-1.07-7.8-1.58L828,746a28.82,28.82,0,0,0-2.43-4.84Q799,706,772.14,670.93c-1.52-2-3.94-3.29-5.94-4.91l-.11-2c4.61-.18,9.21-.41,13.83-.49,1.64,0,3.29.41,5,.46,21.07.7,42.14,1.34,63.21,2.07a65,65,0,0,1,6.9,1h0c-4.4,13.72-8.89,27.4-13.18,41.15-3.41,10.91-6.57,21.9-9.84,32.85l-.24,2.06,1.28-1c10.27-11.27,20.65-22.44,30.78-33.84,9.81-11.05,19.32-22.37,29.06-33.49,1.13-1.29,2.87-2,4.32-3,.72,1.56,1.79,3,2.11,4.69q8,40.13,15.75,80.29c.79,4,1.67,8,2.51,11.94l1.62.48c2.18-2.73,4.52-5.35,6.52-8.21q32.1-45.75,64.16-91.53c1-1.39,2.72-2.22,4.11-3.31-.3,3.8-.82,7.59-.87,11.38q-.58,42.75-1,85.51Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M902,593c1.93-.15,4,.07,5.77-.5,27-8.46,54-17,81-25.55,2.68-.85,5.49-1.3,8.24-1.94l0,2c-.3,5-.69,9.94-.89,14.91Q994.52,622.44,993,663a63,63,0,0,1-6.87-4C978,652.9,970,646.65,962,640.44q-26.87-20.76-53.75-41.52c-3.52-2.7-6-1.87-6.93,2.32a59.24,59.24,0,0,0-1.24,8.89c-1.09,16.92-2,33.85-3.11,50.77-.3,4.9-1.88,5.59-6.63,5.55-11.77-.09-23.54.33-35.31.55h0c.85-1.61,1.57-3.3,2.57-4.81q20.78-31.49,41.57-63A45.85,45.85,0,0,0,902,593Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M766.09,664c0,.67.07,1.34.11,2L762.93,738l-2,.06-98-82c6.37.1,12.77-.11,19.12.36,13.86,1,27.7,2.38,41.55,3.64C737.78,661.32,751.93,662.68,766.09,664Z", "transform", "translate(-230 -84)", 1, "cls-29"], ["d", "M625.92,743.05c-1.43,1-2.9,2.84-4.3,2.8-12-.34-23.91-1-35.87-1.6q-13.95-.64-27.91-1.23c-2.74-.12-4.72.57-3.83,4h-3l1-4c1.33-10,2.8-20,4-30,2.32-19.9,4.47-39.82,6.7-59.74.43-3.78.9-7.56,1.34-11.35,2.07,2.19,4.64,4.09,6.13,6.62,14.59,24.81,29,49.75,43.48,74.59C617.54,729.89,621.81,736.42,625.92,743.05Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M485,696c-1.5-1.45-3.41-2.67-4.46-4.4-18.69-31.1-37.24-62.28-55.91-93.39-4.71-7.84-9.72-15.49-14.6-23.23a79,79,0,0,1,7.89-3.89c9.19-3.34,18.44-6.51,27.71-9.64A20,20,0,0,1,450,561c1.59,6.94,3,13.93,4.8,20.81Q469.81,638.93,485,696Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M822,385c1.32,5.55,3,11,3.87,16.66,3.35,22.71,6.41,45.45,9.62,68.18,1.09,7.74,2.33,15.45,3.5,23.18l-2,1q-26.73-17-53.47-34L722,421c1.23-1,2.3-2.49,3.71-3,8-2.84,16.09-5.39,24.11-8.14Q785.94,397.47,822,385Z", "transform", "translate(-230 -84)", 1, "cls-27"], ["d", "M660,321c-1.77,14.34-3.46,28.7-5.32,43-1.47,11.37-3.11,22.72-4.75,34.07-.4,2.73-1.1,5.41-1.86,9.08-5.76-3.52-10.79-6.56-15.79-9.64q-37.6-23.2-75.14-46.49c-1.74-1.08-2.78-3.3-4.14-5,2.64-.2,5.38,0,7.92-.67,21.62-5.4,43.2-10.93,64.78-16.45C637.16,326,648.58,323,660,320,660,320.34,660,320.67,660,321Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M660,320c-11.42,3-22.84,6-34.28,8.9-21.58,5.52-43.16,11.05-64.78,16.45-2.54.63-5.28.47-7.92.67l-1-.05,33-81h2q36,26.92,72.06,53.87A6.28,6.28,0,0,1,660,320Z", "transform", "translate(-230 -84)", 1, "cls-28"], ["d", "M666,252c5.7,2.19,11.48,4.18,17.07,6.6q38.49,16.64,76.88,33.47c-7.91,2.45-15.75,5.1-23.73,7.29-22.77,6.26-45.58,12.35-68.4,18.44-6.59,1.76-7.15.93-6.4-5.76,1.1-9.72,1.79-19.49,2.52-29.25C664.71,272.52,665.32,262.25,666,252Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M992.06,762.94q.5-42.77,1-85.51c0-3.79.57-7.58.87-11.38,0-.68,0-1.36,0-2,3.13.33,6.27.8,9.41,1q29.62,1.53,59.26,2.94c2.3.12,4.9.55,5.32-2.9,1.31-1.75,3.19-3.32,3.84-5.29q11.88-36,23.41-72.12c2.17-6.79,3.85-13.73,5.76-20.6-1.75-7.08-3.22-14.24-5.29-21.23-5.82-19.62-11.89-39.17-17.83-58.76a41.49,41.49,0,0,1-.79-4.67,36.7,36.7,0,0,1,5.17.94c32.18,11.32,64.33,22.75,96.53,34,8,2.8,16.12,5.14,24.18,7.7a12.12,12.12,0,0,0,3.27-1c8.68-5.82,17.24-11.82,25.94-17.6C1240,501.16,1248,496.14,1256,491c5.68,25.81,11.41,51.62,17,77.44,2.79,12.83,5.36,25.7,8,38.55h-1c-24.82-27.23-50.48-53.66-76.54-79.93a20.58,20.58,0,0,0-2.24,6.23q-5.43,26.64-10.84,53.27c-1.71,8.37-1.69,8.43,6.88,9.4l.49,0,82.26,12.9,1,2.17-.84.91a37,37,0,0,0-6,2.23q-31.31,18.13-62.46,36.52c-1.93,1.14-3.17,3.45-4.73,5.22l-2,1a42.33,42.33,0,0,0-5.51,4.06q-29.76,30.12-59.39,60.36c-9.29,9.48-18.44,19.1-27.69,28.63-1.38,1.42-3,2.65-4.45,4h0q-19-42.39-38.11-84.79l-2.11-.38a21.77,21.77,0,0,1-1.71,3q-31.74,40.41-63.59,80.74C999.47,756.4,995.56,759.5,992.06,762.94Zm81.74-97.79.36,1.68a49.7,49.7,0,0,0,5.18,0c11.39-1.2,22.76-2.59,34.16-3.7,28.59-2.78,57.18-5.45,85.77-8.17,5.25-.5,6.08-1.72,4.65-6.7-4.26-14.87-8.57-29.73-12.75-44.63-2.44-8.72-2.33-8.73-10.19-3.93q-40.68,24.81-81.37,49.61C1091,654.55,1082.4,659.86,1073.8,665.15Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1281,607c-2.67-12.85-5.24-25.72-8-38.55-5.61-25.82-11.34-51.63-17-77.44,0-.65,0-1.31.07-2,4.34-9.87,8.71-19.73,13-29.62,3.37-7.76,6.65-15.57,10-23.35l2,.94c9,7.34,18,14.73,27.06,22,5.18,4.13,10.55,8,15.83,12,1.86,8,3.62,15.91,5.59,23.82q9.23,37.1,18.56,74.17-29.68,18.43-59.4,36.88c-1.83,1.14-3.74,2.14-5.61,3.2Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1348,569q-9.29-37.08-18.56-74.17c-2-7.91-3.73-15.87-5.59-23.82,4.89-5.13,9.81-10.23,14.67-15.41,7.69-8.19,15.24-16.52,23.1-24.56,1-1.07,3.53-.74,5.35-1.06,3.26,8,6.64,15.87,9.75,23.89Q1396,503.42,1415,553a58.82,58.82,0,0,1-7,2.44c-14.94,3.28-29.92,6.35-44.85,9.68-4.48,1-8.84,2.58-13.25,3.89Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M1349.93,569c4.41-1.31,8.77-2.9,13.25-3.89,14.93-3.33,29.91-6.4,44.85-9.68a58.07,58.07,0,0,0,7-2.44c.93,3.37,1.94,6.73,2.75,10.13q9.73,40.79,19.36,81.59c2.12,9,3.94,18.18,5.89,27.27l-.07,0c-8-8.61-16.15-17.13-24-25.84-10.59-11.67-21-23.51-31.49-35.26Z", "transform", "translate(-230 -84)", 1, "cls-14"], ["d", "M1207,656c1.56-1.77,2.8-4.08,4.73-5.22q31.13-18.43,62.46-36.52a37,37,0,0,1,6-2.23q-12.53,20.43-25.06,40.84c-5.16,8.35-10.43,16.64-15.57,25a24.37,24.37,0,0,0-1.63,4.12l-2,0Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1281,607l2,2.09-2,2-1-2.17c0-.63,0-1.27,0-1.91Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1359,693l-1-1Z", "transform", "translate(-230 -84)", 1, "cls-16"], ["d", "M1455,825l7,0Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M1515,826l6,0Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M1446,780q2,21.51,4.06,43c-4.66-2.75-9.5-5.25-14-8.3-15.22-10.42-30.31-21-45.44-31.57-1-.73-2-1.63-3.77-3.14Z", "transform", "translate(-230 -84)", 1, "cls-2"], ["d", "M1443,672c-2-9.09-3.77-18.22-5.89-27.27q-9.57-40.82-19.36-81.59c-.81-3.4-1.82-6.76-2.75-10.13q-19.12-49.56-38.27-99.11c-3.11-8-6.49-15.93-9.75-23.89,3.85,3.46,8,6.61,11.49,10.43,11.08,12.32,21.87,24.91,32.8,37.37,11.71,13.32,23.4,26.66,35.24,39.87,2.15,2.4,5,4.23,7.45,6.33,2.86-1.24,6-2.13,8.55-3.78,25-15.92,49.87-32,74.83-47.93a15.8,15.8,0,0,1,3.7-1.25q-6.51,35.59-13,71.18Q1522,575.12,1516,608c-3,2.23-6.34,4.2-9.1,6.74-14.64,13.45-29,27.14-43.74,40.52C1456.7,661.12,1449.75,666.43,1443,672Zm61.28-72.88,1.17-1c-.94-1.53-1.78-3.14-2.84-4.57-6-8-11.91-16-18-24Q1471,551.7,1457.25,534c-3.54-4.56-5-4.7-9.85-1.24-5.16,3.65-10.33,7.31-15.45,11-4,2.88-7.84,5.85-13.11,9.78Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1101,567c-1.91,6.87-3.59,13.81-5.76,20.6q-11.54,36.12-23.41,72.12c-.65,2-2.53,3.54-3.84,5.29a18.15,18.15,0,0,1-2-2.16q-17.12-24.6-34.21-49.24Q1015.44,590.25,999,567v-2c25.56.35,51.11.64,76.67,1.06C1084.11,566.19,1092.56,566.67,1101,567Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M999,565v2h-2l0-2c-8-15.12-15.86-30.28-23.89-45.37-8.43-15.84-17-31.61-25.44-47.43a41.09,41.09,0,0,1-1.58-5L1008,487l66-5.94c-2.71,3.51-5.16,7.28-8.18,10.5-13.51,14.39-27.22,28.58-40.77,42.92q-12.46,13.2-24.62,26.68C999.6,562.09,999.47,563.69,999,565Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M1256,489.06c0,.65,0,1.31-.07,2-7.93,5.12-15.92,10.14-23.78,15.37-8.7,5.78-17.26,11.78-25.94,17.6a12.12,12.12,0,0,1-3.27,1q2-37.8,3.93-75.6c.72-13.93,1.39-27.87,2.09-41.8a8.6,8.6,0,0,1,1.48-4.81c2.52,4.45,5.22,8.81,7.54,13.36,11.45,22.37,22.77,44.8,34.2,67.17A59.56,59.56,0,0,0,1256,489.06Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M1074,481,1008,487q-11.2-25.87-22.38-51.76A49.76,49.76,0,0,1,984,430l1,0q43,24,85.9,48C1072.12,478.71,1073,480,1074,481Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M1371,292v-3c12.31-10.79,24.56-21.64,36.94-32.35,5.86-5.06,12-9.86,18-14.77,1.62,3.39,3.71,6.63,4.78,10.18,8.22,27.09,16.22,54.25,24.33,81.37a41.38,41.38,0,0,0,2,4.55c-2.18,10.74-4.32,21.49-6.58,32.21-.8,3.82-1.88,7.58-2.84,11.37l-1.49.48c-3.92-4.54-7.93-9-11.74-13.65q-30.74-37.38-61.41-74.81A13.49,13.49,0,0,0,1371,292Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1520.8,339.92,1587.17,380H1499l-40.41-37.38c.25-.53.49-1.05.73-1.58Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M1425.9,241.89c-6,4.91-12.09,9.71-18,14.77-12.38,10.71-24.63,21.56-36.94,32.35-1-1.06-2.28-2-2.83-3.21q-14-31.46-27.74-63c-.38-.87-.54-1.83-1.06-3.59a41.35,41.35,0,0,1,5.65.59q38.23,9.6,76.42,19.36C1423.06,239.6,1424.42,241,1425.9,241.89Z", "transform", "translate(-230 -84)", 1, "cls-24"], ["d", "M1424,176c3,1.35,6.12,2.6,9.09,4.07q32,15.93,63.9,31.93c-5.28,2.59-10.43,5.52-15.87,7.7-15.73,6.3-31.59,12.29-47.39,18.43-5.34,2.07-6.19,1.81-6.74-3.73-1.16-11.71-2-23.45-3-35.18-.44-5.62-.81-11.25-1-16.88C1423,180.23,1423.67,178.11,1424,176Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M906,382.94c3.52-6.69,6.92-13.44,10.59-20,2.65-4.77,5.5-9.44,8.59-13.94,1.13-1.65,3.18-2.67,4.81-4,9,14,18,28,26.88,42,6.84,10.83,13.52,21.76,20.19,32.7A59.9,59.9,0,0,1,980,426h0c-9.39-5.27-18.86-10.41-28.15-15.85C936.52,401.18,921.3,392,906,382.94Z", "transform", "translate(-230 -84)", 1, "cls-21"], ["d", "M762,292c6-5.78,11.89-11.6,17.9-17.32q18.78-17.9,37.65-35.69c4.56-4.28,9.32-8.36,14.36-12.88a39,39,0,0,1,1.92,3.94c6.54,18.87,13.09,37.74,19.51,56.65a66.7,66.7,0,0,1,1.72,8.25q-39.33-1-78.67-2C771.59,292.8,766.79,292.32,762,292Z", "transform", "translate(-230 -84)", 1, "cls-22"], ["d", "M552,743.05l-1,4q-22.08,50.9-44.19,101.76C506.3,850,505,850.91,504,852q-16.51-43.51-33-87c-1.11-2.94-2-6-3-9q39.57-6,79.13-12C548.76,743.8,550.37,743.39,552,743.05Z", "transform", "translate(-230 -84)", 1, "cls-26"], ["d", "M504,852c1-1.07,2.28-2,2.82-3.21Q529,797.92,551,747h3l1.91,1.12c-.86,1.41-2.5,2.86-2.44,4.24.17,4.46,1,8.89,1.51,13.33,2.19,19.12,4.33,38.24,6.54,57.35,1.77,15.32,3.63,30.64,5.45,46l-1.07.08c-.27,0-.53,0-.8,0-13.22-3.37-26.43-6.8-39.68-10.09-7.08-1.76-14.22-3.3-21.34-4.94C504.07,853.37,504.05,852.67,504,852Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M1249,790c-22.94-.34-45.87-.64-68.8-1.06a64,64,0,0,1-10.88-1.11c-1.24-.24-2.21-1.87-3.31-2.86l1-1c.32-.64.64-1.28,1-1.91a38.22,38.22,0,0,0,2.56-3c15.35-22.32,30.63-44.69,46-67,6.32-9.14,12.91-18.1,19.38-27.15,1.32,8.16,2.9,16.28,3.93,24.48,2.73,21.55,5.27,43.13,7.78,64.71C1248.32,779.4,1248.57,784.71,1249,790Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1236,684.94c-6.47,9-13.06,18-19.38,27.15-15.4,22.28-30.68,44.65-46,67a38.22,38.22,0,0,1-2.56,3c.17-2.06,0-4.24.58-6.17q17.79-57.78,35.74-115.52c.34-1.11.47-2.28.7-3.42l2-1,29,26C1236,683,1236,684,1236,684.94Z", "transform", "translate(-230 -84)", 1, "cls-17"], ["d", "M1110,853q-38-28.21-76-56.43-20-14.82-40.06-29.55c2-.67,3.94-1.71,6-1.95,8.75-1,17.52-1.77,26.28-2.62,15.21-1.49,30.42-2.91,45.62-4.47,12.06-1.24,24.09-2.65,36.14-4h0c.33.67.65,1.34,1,2Q1109.48,804.51,1110,853Z", "transform", "translate(-230 -84)", 1, "cls-4"], ["d", "M1110,853q-.52-48.5-1-97c3.52,1.75,7.19,3.26,10.55,5.29,13.52,8.15,27,16.44,40.39,24.76a20,20,0,0,1,3.16,3.08c-6.14,7.59-12.26,15.19-18.44,22.75Q1127.83,832.46,1111,853l0,0Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M1111,853q16.83-20.57,33.65-41.13c6.18-7.56,12.3-15.16,18.44-22.75,1.91,1.24,4,2.24,5.68,3.76,11.47,10.65,22.84,21.4,34.24,32.12,0,.32,0,.64,0,1l-43.88,12.85Q1135,845.89,1111,853Z", "transform", "translate(-230 -84)", 1, "cls-15"], ["d", "M1167.05,784l-1,1Z", "transform", "translate(-230 -84)", 1, "cls-17"], ["d", "M761,738l2-.06a49.06,49.06,0,0,0,6.58,2c4.59.72,9.23,1.17,13.86,1.64q22.3,2.25,44.63,4.44l3,1.92c.31,1.69.63,3.38.94,5.07,3.91,12.19,7.79,24.4,11.76,36.58,2.86,8.79,5.82,17.55,8.74,26.32l-1.12.94L763,739.7c-1.18,2.19-2.08,3.53-2.68,5Q737,801.78,713.81,858.89c-1.13,2.76-2.54,5.42-3.83,8.12h-2c-3-4.74-6-9.53-9.15-14.2q-34-50.77-68.11-101.52c-2.12-3.17-1.28-4.71,3.22-5.11,6.12-.54,12.26-.76,18.39-1.07,14.26-.72,28.52-1.39,42.78-2.12,19.89-1,39.78-2,59.67-3.17C756.89,739.7,758.91,738.64,761,738Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M1108,754c-12,1.33-24.08,2.74-36.14,4-15.2,1.56-30.41,3-45.62,4.47-8.76.85-17.53,1.62-26.28,2.62-2,.24-4,1.28-6,1.95l-3,.07c0-.36,0-.73,0-1.09l1.06-3.06c3.5-3.44,7.41-6.54,10.43-10.35q32-40.25,63.59-80.74a21.77,21.77,0,0,0,1.71-3l2.11.38Q1089,711.6,1108,754Z", "transform", "translate(-230 -84)", 1, "cls-20"], ["d", "M993,863c-.66-1.39-1.87-2.76-1.9-4.16-.14-8.56-.07-17.13.11-25.69,0-1.06,1.15-2.1,1.76-3.15Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M992,776l-1-3Z", "transform", "translate(-230 -84)", 1, "cls-8"], ["d", "M567,869c-1.82-15.32-3.68-30.64-5.45-46-2.21-19.11-4.35-38.23-6.54-57.35-.5-4.44-1.34-8.87-1.51-13.33-.06-1.38,1.58-2.83,2.44-4.24q19.88,31.68,39.76,63.37c7.52,12,15.1,23.9,22.51,35.93,1,1.59,1.17,3.68,1.72,5.54-14.21,4.59-28.41,9.21-42.64,13.75-3,1-6.07,1.62-9.11,2.41Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M565.11,869.1c.27,0,.53,0,.8,0l-.4.17Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M994,664c0,.69,0,1.37,0,2-1.39,1.09-3.14,1.92-4.11,3.31q-32.15,45.72-64.16,91.53c-2,2.86-4.34,5.48-6.52,8.21l-1.62-.48c-.84-4-1.72-8-2.51-11.94q-7.86-40.14-15.75-80.29c-.32-1.64-1.39-3.13-2.11-4.69-1.45,1-3.19,1.74-4.32,3-9.74,11.12-19.25,22.44-29.06,33.49-10.13,11.4-20.51,22.57-30.78,33.83l-1-1c3.27-11,6.43-21.94,9.84-32.85C846.11,694.4,850.6,680.72,855,667c11.77-.22,23.54-.64,35.31-.55,4.75,0,6.33-.65,6.63-5.55,1.06-16.92,2-33.85,3.11-50.77a59.24,59.24,0,0,1,1.24-8.89c.94-4.19,3.41-5,6.93-2.32q26.91,20.72,53.75,41.52c8,6.21,16,12.46,24.15,18.57a63,63,0,0,0,6.87,4Z", "transform", "translate(-230 -84)", 1, "cls-3"], ["d", "M828,746q-22.32-2.22-44.63-4.44c-4.63-.47-9.27-.92-13.86-1.64a49.06,49.06,0,0,1-6.58-2q1.62-36,3.26-71.94c2,1.62,4.42,2.92,5.94,4.91q26.85,35,53.44,70.24A28.82,28.82,0,0,1,828,746Z", "transform", "translate(-230 -84)", 1, "cls-7"], ["d", "M832,741l1,1-1.28,1Z", "transform", "translate(-230 -84)", 1, "cls-25"], ["d", "M994,664l-1-1q1.54-40.54,3.12-81.08c.2-5,.59-9.94.89-14.91h2q16.38,23.29,32.73,46.61,17.16,24.58,34.21,49.24a18.15,18.15,0,0,0,2,2.16c-.42,3.45-3,3-5.32,2.9q-29.62-1.42-59.26-2.94C1000.27,664.8,997.13,664.33,994,664Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M1073.8,665.15c8.6-5.29,17.19-10.6,25.81-15.86q40.68-24.82,81.37-49.61c7.86-4.8,7.75-4.79,10.19,3.93,4.18,14.9,8.49,29.76,12.75,44.63,1.43,5,.6,6.2-4.65,6.7-28.59,2.72-57.18,5.39-85.77,8.17-11.4,1.11-22.77,2.5-34.16,3.7a49.7,49.7,0,0,1-5.18,0Z", "transform", "translate(-230 -84)", 1, "cls-30"], ["d", "M1280,607c0,.64,0,1.28,0,1.91L1197.74,596l-.49,0c-8.57-1-8.59-1-6.88-9.4q5.43-26.62,10.84-53.27a20.58,20.58,0,0,1,2.24-6.23C1229.51,553.36,1255.17,579.79,1280,607Z", "transform", "translate(-230 -84)", 1, "cls-19"], ["d", "M1504.31,599.11l-85.47-45.58c5.27-3.93,9.15-6.9,13.11-9.78,5.12-3.71,10.29-7.37,15.45-11,4.89-3.46,6.31-3.32,9.85,1.24q13.77,17.74,27.42,35.58c6.06,7.93,12,15.94,18,24,1.06,1.43,1.9,3,2.84,4.57Z", "transform", "translate(-230 -84)", 1, "cls-14"]], template: function PolygonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".cls-1{fill:#00a4aa;}.cls-2{fill:#00b288;}.cls-3{fill:#00aba2;}.cls-4{fill:#00ae98;}.cls-5{fill:#00c8bf;}.cls-6{fill:#00a074;}.cls-7{fill:#00beb9;}.cls-8{fill:#00a697;}.cls-9{fill:#00bf98;}.cls-10{fill:#00b4bc;}.cls-11{fill:#00c8c7;}.cls-12{fill:#00b2af;}.cls-13{fill:#00a98d;}.cls-14{fill:#00b59a;}.cls-15{fill:#009d83;}.cls-16{fill:#00a581;}.cls-17{fill:#00a28c;}.cls-18{fill:#00cbce;}.cls-19{fill:#00c1af;}.cls-20{fill:#00bba2;}.cls-21{fill:#00bcc5;}.cls-22{fill:#00acb7;}.cls-23{fill:#00a4a4;}.cls-24{fill:#00c5b2;}.cls-25{fill:#00b3a7;}.cls-26{fill:#00a099;}.cls-27{fill:#00999c;}.cls-28{fill:#009ea4;}.cls-29{fill:#009790;}.cls-30{fill:#009f8e;}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["svg[_ngcontent-%COMP%] { display: block }"] });


/***/ }),

/***/ "ZnMD":
/*!***************************************************!*\
  !*** ./apps/docs/src/environments/environment.ts ***!
  \***************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

/***/ "f8Lx":
/*!*****************************************!*\
  !*** ./apps/docs/src/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "qgc+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "vI0j");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content.component */ "RvM8");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "s2ym");
/* harmony import */ var _polygons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./polygons.component */ "UtGZ");
/* harmony import */ var _get_marked_options_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-marked-options.function */ "UP67");
/* harmony import */ var _circuits_circuits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./circuits/circuits.component */ "PIQb");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["UIShellModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot({
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkedOptions"],
                    useFactory: _get_marked_options_function__WEBPACK_IMPORTED_MODULE_10__["getMarkedOptions"],
                },
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].NONE,
            }),
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
        _polygons_component__WEBPACK_IMPORTED_MODULE_9__["PolygonsComponent"],
        _circuits_circuits_component__WEBPACK_IMPORTED_MODULE_11__["CircuitsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["UIShellModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ListModule"]] }); })();


/***/ }),

/***/ "qgc+":
/*!*************************************************!*\
  !*** ./apps/docs/src/app/app-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro/intro.component */ "s2ym");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class DashboardsComponent {
}
DashboardsComponent.ɵfac = function DashboardsComponent_Factory(t) { return new (t || DashboardsComponent)(); };
DashboardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardsComponent, selectors: [["state-adapt-dashboards"]], decls: 1, vars: 0, template: function DashboardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Dashboards Demo App coming soon!");
    } }, encapsulation: 2 });
class AdaptersComponent {
}
AdaptersComponent.ɵfac = function AdaptersComponent_Factory(t) { return new (t || AdaptersComponent)(); };
AdaptersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdaptersComponent, selectors: [["state-adapt-adapters"]], decls: 1, vars: 0, template: function AdaptersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Adapters coming soon!");
    } }, encapsulation: 2 });
const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"],
    },
    {
        path: 'dashboards',
        component: DashboardsComponent,
    },
    {
        path: 'adapters/core',
        component: AdaptersComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "s2ym":
/*!****************************************************!*\
  !*** ./apps/docs/src/app/intro/intro.component.ts ***!
  \****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var raw_loader_intro_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./intro.md */ "Fcm0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _circuits_circuits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circuits/circuits.component */ "PIQb");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");






class IntroComponent {
    constructor() {
        this.secondary = false;
        this.md = raw_loader_intro_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["state-adapt-intro"]], decls: 27, vars: 1, consts: [[1, "banner"], [1, "banner-content-container"], [1, "logo-line"], ["src", "../assets/sa-9-7.svg", "id", "main-logo"], ["id", "main-logo-shadow"], ["id", "state"], ["id", "adapt"], ["href", "#minimal"], [1, "bullet-adapter"], [0, "xlink", "href", "#adapter"], ["href", "#reactive"], ["href", "#reusable"], ["href", "#getting-started", 1, "getting-started"], ["ibmButton", "secondary", "id", "get-started", 3, "mouseenter", "mouseleave"], [1, "content"], [3, "data"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "state-adapt-circuits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Adapt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Reactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Reusable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function IntroComponent_Template_button_mouseenter_22_listener() { return ctx.secondary = true; })("mouseleave", function IntroComponent_Template_button_mouseleave_22_listener() { return ctx.secondary = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "markdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
    } }, directives: [_circuits_circuits_component__WEBPACK_IMPORTED_MODULE_2__["CircuitsComponent"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["Button"], _content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  background-color: #1a1a1a;\n  min-height: 56vw;\n  height: 56vw;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 8px solid #00b8a4;\n}\n\n.banner-content-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin-top: 8.4vw;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  width: 78.75vw;\n  left: 0;\n  right: 0;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 1.1666666667vw;\n  font-size: 12.25vw;\n  font-weight: 500;\n  color: #00b8a4;\n  float: left;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n  margin-left: 17.0333333333vw;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  left: 2.3333333333vw;\n  width: 14vw;\n  z-index: 1000;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.6666666667vw;\n  top: 3.5vw;\n  width: 9.3333333333vw;\n  padding-top: 9.3333333333vw;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #00b8a4;\n  position: absolute;\n  margin-top: 18.2vw;\n  width: 100%;\n  font-size: 4.375vw;\n  text-align: center;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f4f4f4;\n  text-decoration: none;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n  stroke: #00b8a4;\n  fill: #00b8a4;\n  opacity: 1;\n  width: 0.3em;\n  height: 0.3em;\n  margin: 0 0.3em 0.2em;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  margin-top: 28vw;\n  text-align: center;\n  font-size: 2vw;\n  padding: 1.2760416667vw;\n  min-height: 0;\n  left: 0;\n  right: 0;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n  background-color: #e01d84;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n  background-color: #5d2f88;\n}\n\n@media screen and (min-width: 800px) {\n  .banner[_ngcontent-%COMP%] {\n    background-color: #1a1a1a;\n    min-height: 44vw;\n    height: 44vw;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 8px solid #00b8a4;\n  }\n\n  .banner-content-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    margin-top: 6.6vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    width: 61.875vw;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.9166666667vw;\n    font-size: 9.625vw;\n    font-weight: 500;\n    color: #00b8a4;\n    float: left;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n    margin-left: 13.3833333333vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    left: 1.8333333333vw;\n    width: 11vw;\n    z-index: 1000;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 3.6666666667vw;\n    top: 2.75vw;\n    width: 7.3333333333vw;\n    padding-top: 7.3333333333vw;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.25);\n    box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #00b8a4;\n    position: absolute;\n    margin-top: 14.3vw;\n    width: 100%;\n    font-size: 3.4375vw;\n    text-align: center;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #f4f4f4;\n    text-decoration: none;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n    stroke: #00b8a4;\n    fill: #00b8a4;\n    opacity: 1;\n    width: 0.3em;\n    height: 0.3em;\n    margin: 0 0.3em 0.2em;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    margin-top: 22vw;\n    text-align: center;\n    font-size: 1.5714285714vw;\n    padding: 1.0026041667vw;\n    min-height: 0;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n    background-color: #e01d84;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n    background-color: #5d2f88;\n  }\n}\n\n@media screen and (min-width: 1100px) {\n  .banner[_ngcontent-%COMP%] {\n    background-color: #1a1a1a;\n    min-height: 36vw;\n    height: 36vw;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 8px solid #00b8a4;\n  }\n\n  .banner-content-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    margin-top: 5.4vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    width: 50.625vw;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.75vw;\n    font-size: 7.875vw;\n    font-weight: 500;\n    color: #00b8a4;\n    float: left;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n    margin-left: 10.95vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    left: 1.5vw;\n    width: 9vw;\n    z-index: 1000;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 3vw;\n    top: 2.25vw;\n    width: 6vw;\n    padding-top: 6vw;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.25);\n    box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #00b8a4;\n    position: absolute;\n    margin-top: 11.7vw;\n    width: 100%;\n    font-size: 2.8125vw;\n    text-align: center;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #f4f4f4;\n    text-decoration: none;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n    stroke: #00b8a4;\n    fill: #00b8a4;\n    opacity: 1;\n    width: 0.3em;\n    height: 0.3em;\n    margin: 0 0.3em 0.2em;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    margin-top: 18vw;\n    text-align: center;\n    font-size: 1.2857142857vw;\n    padding: 0.8203125vw;\n    min-height: 0;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n    background-color: #e01d84;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n    background-color: #5d2f88;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFyQlM7QUFPYjs7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFkTjs7QUFnQk07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWRSOztBQWlCTTtFQUNFLDRCQUFBO0FBZlI7O0FBaUJNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBM0NNO0VBNENOLFdBaUVzQjtFQWhFdEIsYUFqREM7QUFrQ1Q7O0FBaUJNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFsRGM7RUFtRGQsMkJBbkRjO0VBb0RkLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esa0JBQUE7QUFmUjs7QUFtQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJOOztBQWtCTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQWhCUjs7QUFrQk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBaEJSOztBQWlCUTtFQUNFLFVBQUE7QUFmVjs7QUFtQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFuRlM7RUFvRlQsa0JBQUE7RUFDQSxjQXBGZTtFQXFGZix1QkFwRmE7RUFxRmIsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBakJOOztBQXFCUTtFQUNFLHlCQUFBO0FBbkJWOztBQXVCUTtFQUNFLHlCQUFBO0FBckJWOztBQTZCQTtFQXRHRTtJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdDQUFBO0VBNkVGOztFQTFFQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQXJCUztFQWtHWDtFQTNFRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtFQTZFSjtFQTNFSTtJQUNFLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBNkVOO0VBMUVJO0lBQ0UsNEJBQUE7RUE0RU47RUExRUk7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxvQkEzQ007SUE0Q04sV0FtRXdCO0lBbEV4QixhQWpEQztFQTZIUDtFQTFFSTtJQUNFLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBbERjO0lBbURkLDJCQW5EYztJQW9EZCxZQUFBO0lBQ0EscUNBQUE7SUFDQSxtREFBQTtJQUNBLGtCQUFBO0VBNEVOO0VBeEVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQTBFSjtFQXpFSTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtFQTJFTjtFQXpFSTtJQUNFLGVBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7RUEyRU47RUExRU07SUFDRSxVQUFBO0VBNEVSO0VBeEVFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBbkZTO0lBb0ZULGtCQUFBO0lBQ0EseUJBcEZlO0lBcUZmLHVCQXBGYTtJQXFGYixhQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUEwRUo7RUF0RU07SUFDRSx5QkFBQTtFQXdFUjtFQXBFTTtJQUNFLHlCQUFBO0VBc0VSO0FBQ0Y7O0FBNURBO0VBekdFO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7RUF3S0Y7O0VBcktBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBckJTO0VBNkxYO0VBdEtFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0VBd0tKO0VBdEtJO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7RUF3S047RUFyS0k7SUFDRSxvQkFBQTtFQXVLTjtFQXJLSTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBM0NNO0lBNENOLFVBc0V3QjtJQXJFeEIsYUFqREM7RUF3TlA7RUFyS0k7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsVUFsRGM7SUFtRGQsZ0JBbkRjO0lBb0RkLFlBQUE7SUFDQSxxQ0FBQTtJQUNBLG1EQUFBO0lBQ0Esa0JBQUE7RUF1S047RUFuS0U7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBcUtKO0VBcEtJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VBc0tOO0VBcEtJO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQXNLTjtFQXJLTTtJQUNFLFVBQUE7RUF1S1I7RUFuS0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFuRlM7SUFvRlQsa0JBQUE7SUFDQSx5QkFwRmU7SUFxRmYsb0JBcEZhO0lBcUZiLGFBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtFQXFLSjtFQWpLTTtJQUNFLHlCQUFBO0VBbUtSO0VBL0pNO0lBQ0UseUJBQUE7RUFpS1I7QUFDRiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCJAY2FyYm9uL3RoZW1lcy9zY3NzL3RoZW1lc1wiO1xuQGltcG9ydCBcIi4uLy4uL3RoZW1lXCI7XG5cbiRsb2dvLXo6IDEwMDA7XG5cbkBtaXhpbiBzdHlsaW5nKCRsb2dvLXdpZHRoKSB7XG4gICRsb2dvLXRvcDogJGxvZ28td2lkdGggKiAzLzU7XG4gICRsb2dvLWxlZnQ6ICRsb2dvLXdpZHRoLzY7XG4gICRsb2dvLXNoYWRvdy13aWR0aDogMiokbG9nby13aWR0aC8zO1xuXG4gICRidXR0b24tdG9wOiAkbG9nby13aWR0aCAqIDI7XG4gICRidXR0b24tZm9udC1zaXplOiAkbG9nby13aWR0aCAvIDc7XG4gICRidXR0b24tcGFkZGluZzogJGxvZ28td2lkdGggKiA1LzMyICogNy8xMjtcbiAgJGJ1dHRvbi1oZWlnaHQ6ICRidXR0b24tZm9udC1zaXplICogMS40ICsgJGJ1dHRvbi1wYWRkaW5nICogMjsgLy8gTm90IHVzZWQgb24gYnV0dG9uXG5cbiAgLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgdWktMDFiKTtcbiAgICBtaW4taGVpZ2h0OiAkbG9nby13aWR0aCAqIDQ7XG4gICAgaGVpZ2h0OiAkbG9nby13aWR0aCAqIDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIGJyYW5kLTAxKTtcbiAgfVxuXG4gIC5iYW5uZXItY29udGVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAkbG9nby10b3A7XG5cbiAgICAubG9nby1saW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHdpZHRoOiAkbG9nby13aWR0aCAqIDQ1Lzg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJGxvZ28td2lkdGgvMTI7XG4gICAgICAgIGZvbnQtc2l6ZTogJGxvZ28td2lkdGgqNy84O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYnJhbmQtMDEpO1xuICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgfVxuICAgICAgI3N0YXRlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRsb2dvLWxlZnQgKyAkbG9nby13aWR0aCAqIDEuMDU7XG4gICAgICB9XG4gICAgICAjbWFpbi1sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGVmdDogJGxvZ28tbGVmdDtcbiAgICAgICAgd2lkdGg6ICRsb2dvLXdpZHRoO1xuICAgICAgICB6LWluZGV4OiAkbG9nby16O1xuICAgICAgfVxuICAgICAgI21haW4tbG9nby1zaGFkb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6ICRsb2dvLWxlZnQgKyAkbG9nby13aWR0aC8yIC0gJGxvZ28tc2hhZG93LXdpZHRoLzI7XG4gICAgICAgIHRvcDogJGxvZ28td2lkdGgvNDtcbiAgICAgICAgd2lkdGg6ICRsb2dvLXNoYWRvdy13aWR0aDtcbiAgICAgICAgcGFkZGluZy10b3A6ICRsb2dvLXNoYWRvdy13aWR0aDtcbiAgICAgICAgei1pbmRleDogJGxvZ28teiAtIDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMCwgJGFtb3VudDogLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXZ3IDEuNXZ3IDEuNXZ3IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMCwgJGFtb3VudDogLjc1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjYXJib24tLXRoZW1lLCBicmFuZC0wMSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAkbG9nby13aWR0aCAqIDEuMztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAkbG9nby13aWR0aCAqIDUvMTY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIHRleHQtMDEpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuYnVsbGV0LWFkYXB0ZXIge1xuICAgICAgICBzdHJva2U6IG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIGJyYW5kLTAxKTtcbiAgICAgICAgZmlsbDogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYnJhbmQtMDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDogMC4zZW07XG4gICAgICAgIGhlaWdodDogMC4zZW07XG4gICAgICAgIG1hcmdpbjogMCAwLjNlbSAwLjJlbTtcbiAgICAgICAgLmFkYXB0ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6ICRidXR0b24tdG9wO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAkYnV0dG9uLWZvbnQtc2l6ZTtcbiAgICAgIHBhZGRpbmc6ICRidXR0b24tcGFkZGluZztcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIGEuZ2V0dGluZy1zdGFydGVkIHtcbiAgICAgICY6bGluaywgJjp2aXNpdGVkICB7XG4gICAgICAgICNnZXQtc3RhcnRlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYWNjZW50LTAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgICNnZXQtc3RhcnRlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYWNjZW50LTAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBzdHlsaW5nKCRsb2dvLXdpZHRoOiAxNHZ3KTtcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0tc2NyZWVuKSB7XG4gIEBpbmNsdWRlIHN0eWxpbmcoJGxvZ28td2lkdGg6IDExdncpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGxhcmdlLXNjcmVlbikge1xuICBAaW5jbHVkZSBzdHlsaW5nKCRsb2dvLXdpZHRoOiA5dncpO1xufVxuIl19 */"] });


/***/ }),

/***/ "vI0j":
/*!********************************************!*\
  !*** ./apps/docs/src/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");








const _c0 = function (a0) { return [a0]; };
function AppComponent_ng_container_3_ibm_sidenav_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navigation", function AppComponent_ng_container_3_ibm_sidenav_item_1_Template_ibm_sidenav_item_navigation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, link_r1.route))("active", link_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](link_r1.name);
} }
function AppComponent_ng_container_3_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navigation", function AppComponent_ng_container_3_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template_ibm_sidenav_item_navigation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r9.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childLink_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, childLink_r8.route))("active", childLink_r8.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childLink_r8.name);
} }
function AppComponent_ng_container_3_ibm_sidenav_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_3_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template, 2, 5, "ibm-sidenav-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", link_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", link_r1.children)("ngForTrackBy", ctx_r3.trackByRoute);
} }
function AppComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_3_ibm_sidenav_item_1_Template, 2, 5, "ibm-sidenav-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_container_3_ibm_sidenav_menu_2_Template, 2, 3, "ibm-sidenav-menu", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !link_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", link_r1.children);
} }
const x = setInterval(() => {
    const ibm = document.querySelector('.bx--header__name--prefix');
    if (ibm) {
        ibm.parentNode.removeChild(ibm);
        clearInterval(x);
    }
}, 100);
class AppComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.sidenavExpanded = window.innerWidth > 800;
        this.urlChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.links$ = this.urlChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.location.path()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(url => [
            {
                route: '',
                name: 'Introduction',
                active: url === '',
            },
            {
                route: '/dashboards',
                name: 'Demo App',
                active: url === '/dashboards',
            },
            {
                route: '/adapters',
                name: 'Adapters',
                children: [
                    ['core', 'Core'],
                    ['angular-router', 'Angular Router'],
                    ['material', 'Material'],
                ].map(([adapterUrl, name]) => {
                    const route = '/adapters/' + adapterUrl;
                    return { route, active: url === route, name };
                }),
            },
        ]));
        const path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
    }
    navigate(e) {
        setTimeout(() => this.urlChange$.next(this.location.path()));
    }
    trackByRoute(id, item) {
        return item.route;
    }
    expandSidenav() {
        this.sidenavExpanded = !this.sidenavExpanded;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["state-adapt-root"]], decls: 7, vars: 7, consts: [["name", "StateAdapt"], [3, "click"], [3, "expanded"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "route", "active", "navigation", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "route", "active", "navigation"], [3, "title"], [3, "route", "active", "navigation", 4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ibm-hamburger", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ibm_hamburger_click_1_listener() { return ctx.expandSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ibm-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.sidenavExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx.links$))("ngForTrackBy", ctx.trackByRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("squished", ctx.sidenavExpanded);
    } }, directives: [carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["Header"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["Hamburger"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNav"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNavMenu"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  margin: 50px auto;\n}\n  .bx--header {\n  border-bottom: 0;\n}\n  a.bx--side-nav__link[aria-current=page]::before {\n  background-color: #00b8a4;\n}\n.bx--side-nav--ux[_ngcontent-%COMP%] {\n  width: 0px;\n}\n.bx--side-nav--expanded.bx--side-nav--ux[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding: 0 0px;\n  width: 100%;\n  margin-left: 0;\n  margin-top: -2px;\n}\n@media screen and (min-width: 800px) {\n  main.squished[_ngcontent-%COMP%] {\n    width: calc(100% - 16rem);\n    margin-left: 16rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtBQUFGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxrQkFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUnO1xuLypcbiAqIFJlbW92ZSB0ZW1wbGF0ZSBjb2RlIGJlbG93XG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuOjpuZy1kZWVwIC5ieC0taGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIGEuYngtLXNpZGUtbmF2X19saW5rW2FyaWEtY3VycmVudD1wYWdlXTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYnJhbmQtMDEpO1xufVxuXG4uYngtLXNpZGUtbmF2LS11eCB7XG4gIHdpZHRoOiAwcHg7XG59XG4uYngtLXNpZGUtbmF2LS1leHBhbmRlZC5ieC0tc2lkZS1uYXYtLXV4IHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmLnNxdWlzaGVkIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnJlbSk7XG4gICAgICBtYXJnaW4tbGVmdDogMTZyZW07XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map