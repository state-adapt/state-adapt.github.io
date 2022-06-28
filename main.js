(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+eE4":
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/create-state-adapt.funciton.ts ***!
  \**********************************************************/
/*! exports provided: createStateAdapt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStateAdapt", function() { return createStateAdapt; });
/* harmony import */ var _adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapt */ "xkRZ");
/* harmony import */ var _adapt_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapt.store */ "GGFo");


function createStateAdapt(store) {
    const adaptStore = new _adapt_store__WEBPACK_IMPORTED_MODULE_1__["AdaptStore"](store);
    return new _adapt__WEBPACK_IMPORTED_MODULE_0__["AdaptCommon"](adaptStore);
}


/***/ }),

/***/ "+kD+":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/getting-started/getting-started.md ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Getting Started\n\nSet up StateAdapt with\n\n- [Angular](#angular)\n- [Angular and NgRx](#angular-and-ngrx)\n- [Angular and NGXS](#angular-and-ngxs)\n- [React](#react)\n- [React and Redux](#react-and-redux)\n\n## Angular\n\n[StackBlitz Demo](https://stackblitz.com/github/state-adapt/state-adapt/tree/stackblitz-ng-sa-counter?file=apps%2Fng-sa-counter%2Fsrc%2Fapp%2Fapp.module.ts)\n\nFirst, `npm install`:\n\n```\nnpm i -s @state-adapt/core reselect\n```\n\nInclude in app.module.ts like so:\n\n```typescript\nimport {\n  createStore,\n  actionSanitizer,\n  stateSanitizer,\n  AdaptCommon,\n} from '@state-adapt/core';\n// ...\n// Create the Adapt store:\nconst enableReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.({\n  actionSanitizer,\n  stateSanitizer,\n});\n// ...\n// Provide it:\n    providers: [{provide: AdaptCommon, useValue: createStore(enableReduxDevTools)}],\n```\n\nNow you can use it in a component or service. Here's an example in a component:\n\n```typescript\nimport { Source, createAdapter, AdaptCommon } from '@state-adapt/core';\n...\n  newStr$ = new Source<string>('newStr$');\n  stringAdapter = createAdapter<string>()({\n    append: (state, newStr: string) => state + newStr,\n  });\n  stringStore = this.adapt.init(['string', this.stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  str$ = this.stringStore.getState();\n  constructor(private adapt: AdaptCommon<any>) {\n    this.str$.subscribe();\n    setTimeout(() => this.newStr$.next('Hello World!'), 3000);\n  }\n...\n```\n\nOpen up Redux Devtools and you should see the state update after 3 seconds.\n\n## Angular and NgRx\n\n[StackBlitz Demo](https://stackblitz.com/github/state-adapt/state-adapt/tree/stackblitz-ng-sa-ngrx-counter?file=apps%2Fng-sa-ngrx-counter%2Fsrc%2Fapp%2Fapp.module.ts)\n\nFirst, `npm install`:\n\n```\nnpm i -s @state-adapt/core @state-adapt/ngrx reselect\n```\n\nInclude in your app.module.ts like so:\n\n```typescript\nimport { StoreModule } from '@ngrx/store';\nimport { StoreDevtoolsModule } from '@ngrx/store-devtools';\nimport {\n  adaptReducer,\n  actionSanitizer,\n  stateSanitizer,\n} from '@state-adapt/core';\n// ...\n// In your module imports array:\n    StoreModule.forRoot({ adapt: adaptReducer }),\n    StoreDevtoolsModule.instrument({\n      maxAge: 25,\n      logOnly: environment.production,\n      actionSanitizer,\n      stateSanitizer,\n    }),\n```\n\nNow you can use it in a component or service. Here's an example in a component:\n\n```typescript\nimport { Source, createAdapter } from '@state-adapt/core';\nimport { Adapt } from '@state-adapt/ngrx';\n...\n  newStr$ = new Source<string>('newStr$');\n  stringAdapter = createAdapter<string>()({\n    append: (state, newStr: string) => state + newStr,\n  });\n  stringStore = this.adapt.init(['string', this.stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  str$ = this.stringStore.getState();\n  constructor(private adapt: Adapt) {\n    this.str$.subscribe();\n    setTimeout(() => this.newStr$.next('Hello World!'), 3000);\n  }\n...\n```\n\nOpen up Redux Devtools and you should see the state update after 3 seconds.\n\n## Angular and NGXS\n\n[StackBlitz Demo](https://stackblitz.com/github/state-adapt/state-adapt/tree/stackblitz-ng-sa-ngxs-counter?file=apps%2Fng-sa-ngxs-counter%2Fsrc%2Fapp%2Fapp.module.ts)\n\nFirst, `npm install`:\n\n```\nnpm i -s @state-adapt/core @state-adapt/ngxs reselect\n```\n\nInclude in your app.module.ts like so:\n\n```typescript\nimport { NgxsModule } from '@ngxs/store';\nimport { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';\nimport { actionSanitizer, stateSanitizer } from '@state-adapt/core';\nimport { AdaptState } from '@state-adapt/ngxs';\n// ...\n// In your module imports array:\n    NgxsModule.forRoot([AdaptState], {\n      developmentMode: !environment.production\n    }),\n    NgxsReduxDevtoolsPluginModule.forRoot({\n      disabled: environment.production,\n      actionSanitizer,\n      stateSanitizer,\n    }),\n```\n\nNow you can use it in a component or service. Here's an example in a component:\n\n```typescript\nimport { Source, createAdapter } from '@state-adapt/core';\nimport { Adapt } from '@state-adapt/ngxs';\n...\n  newStr$ = new Source<string>('newStr$');\n  stringAdapter = createAdapter<string>()({\n    append: (state, newStr: string) => state + newStr,\n  });\n  stringStore = this.adapt.init(['string', this.stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  str$ = this.stringStore.getState();\n  constructor(private adapt: Adapt) {\n    this.str$.subscribe();\n    setTimeout(() => this.newStr$.next('Hello World!'), 3000);\n  }\n...\n```\n\nOpen up Redux Devtools and you should see the state update after 3 seconds.\n\n# React\n\n[StackBlitz Demo](https://stackblitz.com/edit/state-adapt-react)\n\nFirst, `npm install`:\n\n```\nnpm i -s @state-adapt/core @state-adapt/react\n```\n\nDefine your adapt store:\n\n```typescript\nimport {\n  actionSanitizer,\n  stateSanitizer,\n  createStore,\n} from '@state-adapt/core';\n\nconst enableReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.({\n  actionSanitizer,\n  stateSanitizer,\n});\nexport const adapt = createStore(enableReduxDevTools);\n```\n\nProvide StateAdapt in your app context:\n\n```tsx\nimport { AdaptContext } from '@state-adapt/react';\nimport { adapt, store } from './store';\n// ...\n  <AdaptContext.Provider value={adapt}>\n    <React.StrictMode>\n      <App />\n    </React.StrictMode>\n  </AdaptContext.Provider>,\n```\n\nAnd now you can use it in your components:\n\n```tsx\nimport { createAdapter } from '@state-adapt/core';\nimport { useSource, useAdapter, useObservable } from '@state-adapt/react';\n\nconst stringAdapter = createAdapter<string>()({\n  append: (state, newStr: string) => state + newStr,\n});\n\nexport function App() {\n  const newStr$ = useSource<string>('newStr$');\n  const stringStore = useAdapter(['string', stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  cost str$ = stringStore.getState();\n  const str = useObservable(str$);\n\n  return (\n    <h1>{str}</h1>\n    <button onClick={() => newStr$.next('new string ')}>New String</button>\n  )\n}\n```\n\n# React and Redux\n\n[StackBlitz Demo](https://stackblitz.com/edit/state-adapt-react-with-redux)\n\nFirst, `npm install`:\n\n```\nnpm i -s @state-adapt/core @state-adapt/react\n```\n\nDefine your Redux store:\n\n```typescript\nimport {\n  adaptReducer,\n  actionSanitizer,\n  stateSanitizer,\n  createStateAdapt,\n} from '@state-adapt/core';\nimport { combineReducers, createStore } from 'redux';\n\nconst enableReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.({\n  actionSanitizer,\n  stateSanitizer,\n});\n\nexport const store = createStore(\n  combineReducers({\n    adapt: adaptReducer,\n    // Any other reducers you have with Redux\n  }),\n  enableReduxDevTools,\n);\nexport const adapt = createStateAdapt(store);\n```\n\nProvide StateAdapt in your app context:\n\n```tsx\nimport { Provider } from 'react-redux';\nimport { AdaptContext } from '@state-adapt/react';\nimport { adapt, store } from './store';\n// ...\n  <AdaptContext.Provider value={adapt}>\n    <Provider store={store}>\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    </Provider>\n  </AdaptContext.Provider>,\n```\n\nAnd now you can use it in your components:\n\n```tsx\nimport { createAdapter } from '@state-adapt/core';\nimport { useSource, useAdapter, useObservable } from '@state-adapt/react';\n\nconst stringAdapter = createAdapter<string>()({\n  append: (state, newStr: string) => state + newStr,\n});\n\nexport function App() {\n  const newStr$ = useSource<string>('newStr$');\n  const stringStore = useAdapter(['string', stringAdapter, ''], {\n    append: this.newStr$,\n  });\n  cost str$ = stringStore.getState();\n  const str = useObservable(str$);\n\n  return (\n    <h1>{str}</h1>\n    <button onClick={() => newStr$.next('new string ')}>New String</button>\n  )\n}\n```\n");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./apps/docs/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelpearson/Documents/web/state-adapt/apps/docs/src/main.ts */"COzD");


/***/ }),

/***/ "0A9v":
/*!*******************************************************************!*\
  !*** ./libs/adapter-docs/src/lib/adapter-docs-state.interface.ts ***!
  \*******************************************************************/
/*! exports provided: INITIAL_STATE, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _adapter_docs_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter-docs.interface */ "SMq0");

const INITIAL_STATE = 'INITIAL_STATE';
const initialState = {
    docs: _adapter_docs_interface__WEBPACK_IMPORTED_MODULE_0__["defaultAdapterDocs"],
    selectedStateChange: '',
    payloadEditorRefreshRequired: true,
    selectedSelector: '',
    payload: '',
    demoHistory: [],
    demoState: INITIAL_STATE,
};


/***/ }),

/***/ "0PLR":
/*!**********************************************!*\
  !*** ./libs/core/src/lib/selections.type.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "1aZ8":
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/http/get-http-sources.function.ts ***!
  \*************************************************************/
/*! exports provided: getHttpSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpSources", function() { return getHttpSources; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _get_action_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-action.function */ "8kyD");
/* harmony import */ var _split_sources_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../split-sources.function */ "kzTs");
/* harmony import */ var _get_catch_http_error_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-catch-http-error.function */ "aswG");





function getHttpSources(feature, http$, getResponse) {
    const httpWithSources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_get_action_function__WEBPACK_IMPORTED_MODULE_2__["getAction"])('Request')), http$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
        const [succeeded, body, err] = getResponse(res);
        return succeeded ? Object(_get_action_function__WEBPACK_IMPORTED_MODULE_2__["getAction"])('Success', body) : Object(_get_action_function__WEBPACK_IMPORTED_MODULE_2__["getAction"])('Error', err);
    }), Object(_get_catch_http_error_function__WEBPACK_IMPORTED_MODULE_4__["getCatchHttpError"])('Error'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])()));
    const sources = Object(_split_sources_function__WEBPACK_IMPORTED_MODULE_3__["splitSources"])(httpWithSources$, {
        request$: 'Request',
        success$: 'Success',
        error$: 'Error',
    });
    return {
        request$: sources.request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ type }) => ({ type: `${feature} ${type}` }))),
        success$: sources.success$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ type, payload }) => ({ type: `${feature} ${type}`, payload }))),
        error$: sources.error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ type, payload }) => ({ type: `${feature} ${type}`, payload }))),
    };
}


/***/ }),

/***/ "1suU":
/*!********************************************!*\
  !*** ./libs/core/src/lib/adapt.reducer.ts ***!
  \********************************************/
/*! exports provided: adaptReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adaptReducer", function() { return adaptReducer; });
/* harmony import */ var _adapt_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapt.actions */ "laVA");
/* harmony import */ var _update_paths_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-paths.function */ "u5v1");


function adaptReducer(state = null, action) {
    return Object(_adapt_actions__WEBPACK_IMPORTED_MODULE_0__["isPatchState"])(action) ? Object(_update_paths_function__WEBPACK_IMPORTED_MODULE_1__["updatePaths"])(state, action.payload) : action;
}


/***/ }),

/***/ "1wlp":
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/http/get-http-error.function.ts ***!
  \***********************************************************/
/*! exports provided: getHttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpError", function() { return getHttpError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _get_action_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-action.function */ "8kyD");


function getHttpError(type) {
    return (err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_get_action_function__WEBPACK_IMPORTED_MODULE_1__["getAction"])(type, err));
}


/***/ }),

/***/ "1x8/":
/*!****************************************************!*\
  !*** ./libs/core/src/lib/create-store.function.ts ***!
  \****************************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var _create_state_adapt_funciton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-state-adapt.funciton */ "+eE4");
/* harmony import */ var _create_adapt_nested_reducer_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-adapt-nested-reducer.function */ "Ad6n");
/* harmony import */ var _adapt_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapt.reducer */ "1suU");



function createReduxLikeStore(reducer, preloadedState, enhancer) {
    let state = preloadedState !== null && preloadedState !== void 0 ? preloadedState : undefined;
    const listeners = [];
    if (enhancer) {
        return enhancer(createReduxLikeStore)(reducer, state);
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l(state));
    };
    dispatch({ type: '@@redux/INIT' + Math.random() });
    return {
        getState: () => state,
        dispatch,
        subscribe: (cb) => {
            listeners.push(cb);
            return () => listeners.splice(listeners.indexOf(cb), 1);
        },
    };
}
function createStore(enhancer, preloadedState = null) {
    const store = createReduxLikeStore(Object(_create_adapt_nested_reducer_function__WEBPACK_IMPORTED_MODULE_1__["createAdaptNestedReducer"])(_adapt_reducer__WEBPACK_IMPORTED_MODULE_2__["adaptReducer"]), preloadedState, enhancer);
    return Object(_create_state_adapt_funciton__WEBPACK_IMPORTED_MODULE_0__["createStateAdapt"])(store);
}


/***/ }),

/***/ "3nkY":
/*!**********************************************************!*\
  !*** ./apps/docs/src/app/concepts/overview.component.ts ***!
  \**********************************************************/
/*! exports provided: ConceptsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptsOverviewComponent", function() { return ConceptsOverviewComponent; });
/* harmony import */ var raw_loader_overview_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./overview.md */ "OJR8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tile.component */ "Rc8c");





class ConceptsOverviewComponent {
    constructor() {
        this.md = raw_loader_overview_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
ConceptsOverviewComponent.ɵfac = function ConceptsOverviewComponent_Factory(t) { return new (t || ConceptsOverviewComponent)(); };
ConceptsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConceptsOverviewComponent, selectors: [["state-adapt-concepts-overview"]], decls: 4, vars: 2, consts: [[3, "data"], ["link", "/concepts/sources", 3, "right"]], template: function ConceptsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "state-adapt-nav-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("right", true);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__["NavTileComponent"]], encapsulation: 2 });


/***/ }),

/***/ "8kyD":
/*!**************************************************!*\
  !*** ./libs/core/src/lib/get-action.function.ts ***!
  \**************************************************/
/*! exports provided: getAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAction", function() { return getAction; });
function getAction(type, payload) {
    return { type, payload };
}


/***/ }),

/***/ "8y52":
/*!*************************************************************!*\
  !*** ./libs/adapter-docs/src/lib/get-diff-html.function.ts ***!
  \*************************************************************/
/*! exports provided: getDiffHtml, toJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiffHtml", function() { return getDiffHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return toJson; });
/* harmony import */ var jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsondiffpatch */ "6BF4");
/* harmony import */ var jsondiffpatch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__);

function getDiffHtml(obj1, obj2) {
    return getDeltaJson(jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__["diff"](obj1, obj2));
}
function toJson(val) {
    return JSON.stringify(val, null, '\t');
}
function getTabs(n) {
    return new Array(n).fill('    ').join('');
}
function getDeltaJson(val, indent = 0) {
    if (val === undefined)
        return '';
    const isArray = Array.isArray(val);
    const isDiffOfArray = (val === null || val === void 0 ? void 0 : val._t) === 'a';
    const isDiff = isArray || isDiffOfArray;
    if (!isDiff)
        return getObjectDeltaJson(val, indent);
    return isDiffOfArray
        ? getArrayDiffString(val, indent)
        : getValueDiffString(val);
}
function getObjectDeltaJson(val, indent) {
    return (Object.entries(val).reduce((objStr, [key, value]) => `${objStr}\n${getTabs(indent + 1)}${key}: ${getDeltaJson(value, indent + 1)},`, '{') + `\n${getTabs(indent)}}`);
}
function getArrayDiffString(val, indent) {
    return (Object.entries(val)
        .filter(([key, value]) => key !== '_t' && value !== 'a')
        .reduce((arrStr, [key, value]) => {
        const keyNumber = key.replace(/_/, '');
        const isMoved = value[0] === '' && value[2] === 3;
        const movedKey = isMoved ? getDiffArrow(+keyNumber, +value[1]) : '';
        const movedValue = ''; // Doesn't show what the element was
        const isAdded = key === keyNumber;
        const addedKey = isAdded ? getAdded(+keyNumber) : '';
        const addedValue = isAdded ? getAdded(value[0]) : '';
        const isRemoved = key !== keyNumber && !isMoved;
        const removedKey = isRemoved ? getRemoved(+keyNumber) : '';
        const removedValue = isRemoved ? getRemoved(value[0]) : '';
        const keyStr = movedKey + addedKey + removedKey;
        const valueStr = movedValue + addedValue + removedValue;
        const separator = valueStr ? ': ' : '';
        return `${arrStr}\n${getTabs(indent + 1)}${keyStr}${separator}${valueStr},`;
    }, `[`) + `\n${getTabs(indent)}]`);
}
function wrapSpanClass(val, className) {
    return `<span class="${className}">${toJson(val)}</span>`;
}
function getDiffArrow(val1, val2) {
    return `${getRemoved(val1)} => ${getAdded(val2)}`;
}
function getRemoved(val) {
    return wrapSpanClass(val, 'removed');
}
function getAdded(val) {
    return wrapSpanClass(val, 'added');
}
const lengthTypes = {
    1: (val) => getAdded(val[0]),
    2: (val) => getDiffArrow(val[0], val[1]),
    3: (val) => getRemoved(val[0]),
};
function getValueDiffString(val) {
    return lengthTypes[val.length](val);
}


/***/ }),

/***/ "9mK8":
/*!***********************************************!*\
  !*** ./libs/core/src/lib/action.interface.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "ABVf":
/*!**************************************************!*\
  !*** ./libs/core/src/lib/reactions.interface.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Ad6n":
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/create-adapt-nested-reducer.function.ts ***!
  \*******************************************************************/
/*! exports provided: createAdaptNestedReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdaptNestedReducer", function() { return createAdaptNestedReducer; });
function createAdaptNestedReducer(adaptReducer) {
    return (state, action) => {
        const newState = adaptReducer(state === null || state === void 0 ? void 0 : state.adapt, action);
        if (newState === state) {
            return state;
        }
        return Object.assign(Object.assign({}, state), { adapt: newState });
    };
}


/***/ }),

/***/ "Agjl":
/*!********************************************************!*\
  !*** ./apps/docs/src/app/concepts/stores.component.ts ***!
  \********************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var raw_loader_stores_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./stores.md */ "QxhO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tile.component */ "Rc8c");





class StoresComponent {
    constructor() {
        this.md = raw_loader_stores_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
StoresComponent.ɵfac = function StoresComponent_Factory(t) { return new (t || StoresComponent)(); };
StoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoresComponent, selectors: [["state-adapt-stores"]], decls: 6, vars: 2, consts: [[3, "data"], ["link", "/concepts/adapters"], ["link", "/concepts/thinking-reactively", 3, "right"]], template: function StoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "state-adapt-nav-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Adapters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "state-adapt-nav-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Thinking Reactively ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("right", true);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__["NavTileComponent"]], encapsulation: 2 });


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

/***/ "DaB4":
/*!************************************************************************!*\
  !*** ./apps/docs/src/app/getting-started/getting-started.component.ts ***!
  \************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var raw_loader_getting_started_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./getting-started.md */ "+kD+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");




class GettingStartedComponent {
    constructor() {
        this.md = raw_loader_getting_started_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) { return new (t || GettingStartedComponent)(); };
GettingStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GettingStartedComponent, selectors: [["state-adapt-getting-started"]], decls: 2, vars: 1, consts: [[3, "data"]], template: function GettingStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]], encapsulation: 2 });


/***/ }),

/***/ "EhnW":
/*!********************************************************!*\
  !*** ./libs/core/src/lib/create-reactions.function.ts ***!
  \********************************************************/
/*! exports provided: createReactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactions", function() { return createReactions; });
function createReactions() {
    return (getReactions) => getReactions();
}


/***/ }),

/***/ "Fcm0":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/intro/intro.md ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Why StateAdapt?\n\n## Minimal\n\nStateAdapt achieves the original intent of Redux, but in a much more\nminimal way. StateAdapt turns Actions into RxJS Subjects and reducers into\nobjects, reducing conceptual complexity and eliminating ~40% of the code\nrequired to create event sources and state changes.\n\n## Reactive\n\nStateAdapt relies on RxJS for all unidirectional data flow. Rather than\nremoving pieces of Redux critical to reactivity, as most alternatives do,\nStateAdapt simply reimplements them in RxJS.\n\n## Reusable\n\nStateAdapt uses state adapters to maximize reusability in state management.\n\n# Learn More\n\nRead: [Introducing StateAdapt](https://medium.com/weekly-webtips/introducing-stateadapt-reusable-reactive-state-management-9f0388f1850e)\n\n# Contribute\n\nWant to help out? See our [GitHub repo](https://github.com/state-adapt/state-adapt)\n");

/***/ }),

/***/ "GGFo":
/*!******************************************!*\
  !*** ./libs/core/src/lib/adapt.store.ts ***!
  \******************************************/
/*! exports provided: AdaptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptStore", function() { return AdaptStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class AdaptStore extends rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"] {
    constructor(store) {
        super(store.getState());
        this.store = store;
        store.subscribe(() => this.next(store.getState()));
    }
    select(sel) {
        return this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(state => state !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => sel(state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(state => state !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    dispatch(action) {
        return this.store.dispatch(action);
    }
}


/***/ }),

/***/ "GX4H":
/*!*******************************************!*\
  !*** ./libs/core/src/lib/adapter.type.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "HGKH":
/*!*****************************************************!*\
  !*** ./apps/docs/src/app/adapters/basic.adapter.ts ***!
  \*****************************************************/
/*! exports provided: basicAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicAdapter", function() { return basicAdapter; });
/* harmony import */ var _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state-adapt/core */ "Huv7");

const basicAdapter = Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["createBasicAdapter"])();


/***/ }),

/***/ "HLIc":
/*!**************************************************!*\
  !*** ./libs/core/src/lib/selectors.interface.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Huv7":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/*! exports provided: updatePaths, adaptType, isPatchState, createPatchState, createInit, createDestroy, actionSanitizer, stateSanitizer, splitSources, getAction, toSource, getHttpError, getCatchHttpError, getHttpSources, createSelectorsFn, createSelectors, createReactions, createAdapter, createBasicAdapter, Source, joinSelectors, join, adaptReducer, AdaptStore, createStateAdapt, AdaptCommon, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_update_paths_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/update-paths.function */ "u5v1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePaths", function() { return _lib_update_paths_function__WEBPACK_IMPORTED_MODULE_0__["updatePaths"]; });

/* harmony import */ var _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/adapt.actions */ "laVA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adaptType", function() { return _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__["adaptType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPatchState", function() { return _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__["isPatchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPatchState", function() { return _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__["createPatchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInit", function() { return _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__["createInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDestroy", function() { return _lib_adapt_actions__WEBPACK_IMPORTED_MODULE_1__["createDestroy"]; });

/* harmony import */ var _lib_action_sanitizer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/action-sanitizer.function */ "PF3C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionSanitizer", function() { return _lib_action_sanitizer_function__WEBPACK_IMPORTED_MODULE_2__["actionSanitizer"]; });

/* harmony import */ var _lib_state_sanitizer_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state-sanitizer.function */ "L2VF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateSanitizer", function() { return _lib_state_sanitizer_function__WEBPACK_IMPORTED_MODULE_3__["stateSanitizer"]; });

/* harmony import */ var _lib_action_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/action.interface */ "9mK8");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_split_sources_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/split-sources.function */ "kzTs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitSources", function() { return _lib_split_sources_function__WEBPACK_IMPORTED_MODULE_5__["splitSources"]; });

/* harmony import */ var _lib_get_action_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/get-action.function */ "8kyD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAction", function() { return _lib_get_action_function__WEBPACK_IMPORTED_MODULE_6__["getAction"]; });

/* harmony import */ var _lib_to_source_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/to-source.operator */ "LGPl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSource", function() { return _lib_to_source_operator__WEBPACK_IMPORTED_MODULE_7__["toSource"]; });

/* harmony import */ var _lib_http_get_http_error_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/http/get-http-error.function */ "1wlp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHttpError", function() { return _lib_http_get_http_error_function__WEBPACK_IMPORTED_MODULE_8__["getHttpError"]; });

/* harmony import */ var _lib_http_get_catch_http_error_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/http/get-catch-http-error.function */ "aswG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCatchHttpError", function() { return _lib_http_get_catch_http_error_function__WEBPACK_IMPORTED_MODULE_9__["getCatchHttpError"]; });

/* harmony import */ var _lib_http_get_http_sources_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/http/get-http-sources.function */ "1aZ8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHttpSources", function() { return _lib_http_get_http_sources_function__WEBPACK_IMPORTED_MODULE_10__["getHttpSources"]; });

/* harmony import */ var _lib_selectors_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/selectors.interface */ "HLIc");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_reactions_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/reactions.interface */ "ABVf");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_second_parameter_or_any_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/second-parameter-or-any.type */ "J7g4");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_second_parameter_or_void_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/second-parameter-or-void.type */ "lbYg");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_sources_type__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/sources.type */ "WnsW");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_selections_type__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/selections.type */ "0PLR");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_mini_store_interface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/mini-store.interface */ "hgbs");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_adapter_type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/adapter.type */ "GX4H");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_create_selectors_function__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/create-selectors.function */ "k/5l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorsFn", function() { return _lib_create_selectors_function__WEBPACK_IMPORTED_MODULE_19__["createSelectorsFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return _lib_create_selectors_function__WEBPACK_IMPORTED_MODULE_19__["createSelectors"]; });

/* harmony import */ var _lib_create_reactions_function__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/create-reactions.function */ "EhnW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReactions", function() { return _lib_create_reactions_function__WEBPACK_IMPORTED_MODULE_20__["createReactions"]; });

/* harmony import */ var _lib_create_adapter_function__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/create-adapter.function */ "YDF6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAdapter", function() { return _lib_create_adapter_function__WEBPACK_IMPORTED_MODULE_21__["createAdapter"]; });

/* harmony import */ var _lib_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/create-basic-adapter.function */ "TOsA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBasicAdapter", function() { return _lib_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_22__["createBasicAdapter"]; });

/* harmony import */ var _lib_source__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/source */ "Kvxz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _lib_source__WEBPACK_IMPORTED_MODULE_23__["Source"]; });

/* harmony import */ var _lib_join_selectors_function__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/join-selectors.function */ "J4mm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinSelectors", function() { return _lib_join_selectors_function__WEBPACK_IMPORTED_MODULE_24__["joinSelectors"]; });

/* harmony import */ var _lib_join_function__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/join.function */ "WuAA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _lib_join_function__WEBPACK_IMPORTED_MODULE_25__["join"]; });

/* harmony import */ var _lib_adapt_reducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/adapt.reducer */ "1suU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adaptReducer", function() { return _lib_adapt_reducer__WEBPACK_IMPORTED_MODULE_26__["adaptReducer"]; });

/* harmony import */ var _lib_adapt_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/adapt.store */ "GGFo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdaptStore", function() { return _lib_adapt_store__WEBPACK_IMPORTED_MODULE_27__["AdaptStore"]; });

/* harmony import */ var _lib_create_state_adapt_funciton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/create-state-adapt.funciton */ "+eE4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateAdapt", function() { return _lib_create_state_adapt_funciton__WEBPACK_IMPORTED_MODULE_28__["createStateAdapt"]; });

/* harmony import */ var _lib_adapt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/adapt */ "xkRZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdaptCommon", function() { return _lib_adapt__WEBPACK_IMPORTED_MODULE_29__["AdaptCommon"]; });

/* harmony import */ var _lib_create_store_function__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/create-store.function */ "1x8/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _lib_create_store_function__WEBPACK_IMPORTED_MODULE_30__["createStore"]; });


































/***/ }),

/***/ "Itwl":
/*!****************************************************!*\
  !*** ./apps/docs/src/app/demos/demos.component.ts ***!
  \****************************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");




function DemosComponent_ibm_clickable_tile_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r3);
} }
function DemosComponent_ibm_clickable_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-clickable-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemosComponent_ibm_clickable_tile_4_li_5_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", demo_r1.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](demo_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", demo_r1.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", demo_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DemosComponent {
    constructor() {
        this.demos = [
            {
                title: 'Angular Reactive Forms with NgRx',
                href: 'https://stackblitz.com/edit/angular-reactive-forms-state-management?file=src%2Fapp%2Fform%2Fstate-adapt-form.component.ts',
                img: '../../assets/ngrx-forms-screenshot.png',
                features: ['NgRx', 'Angular Reactive Forms'],
            },
            {
                title: 'Shopping Cart',
                href: 'https://stackblitz.com/github/state-adapt/state-adapt/tree/stackblitz-ng-sa-shopping?file=apps%2Fng-sa-shopping%2Fsrc%2Fapp%2Fapp.component.ts',
                img: '../../assets/shopping-screenshot.png',
                features: [
                    '2 state adapters',
                    '3 mini-stores, 2 using the same adapter',
                    '1 use of `joinSelectors` (for joining stores)',
                ],
            },
        ];
    }
}
DemosComponent.ɵfac = function DemosComponent_Factory(t) { return new (t || DemosComponent)(); };
DemosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemosComponent, selectors: [["state-adapt-demos"]], decls: 5, vars: 1, consts: [[1, "demo-tiles-container"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], [3, "src"]], template: function DemosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DemosComponent_ibm_clickable_tile_4_Template, 7, 4, "ibm-clickable-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.demos);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ClickableTile"]], styles: [".demo-tiles-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 20px;\n        padding-top: 20px;\n      }\n      .demo-tiles-container[_ngcontent-%COMP%]   ibm-clickable-tile[_ngcontent-%COMP%] {\n        width: calc(50% - 10px);\n      }\n        .demo-tiles-container ibm-clickable-tile a {\n        height: 360px;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n      }\n      .demo-tiles-container[_ngcontent-%COMP%]   ibm-clickable-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n        max-height: 60%;\n      }\n      .demo-tiles-container[_ngcontent-%COMP%]   ibm-clickable-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        margin-top: 0em;\n      }\n      .demo-tiles-container[_ngcontent-%COMP%]   ibm-clickable-tile[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n        margin-top: 0.4em;\n      }"] });


/***/ }),

/***/ "J4mm":
/*!******************************************************!*\
  !*** ./libs/core/src/lib/join-selectors.function.ts ***!
  \******************************************************/
/*! exports provided: joinSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinSelectors", function() { return joinSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "G4qV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


function joinSelectors(...inputs) {
    const defaultSelector = 'state';
    const inputSelectors = inputs
        .slice(0, -1)
        .map(input => (Array.isArray(input) ? input : [input, defaultSelector]));
    const select = inputSelectors[0][0]._select;
    const newSelector = inputs[inputs.length - 1];
    const state = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([
        ...inputSelectors.map(([miniStore, selectorName]) => miniStore._fullSelectors[selectorName]),
    ], newSelector);
    const fullSelectors = { state };
    const requireAllSources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...inputSelectors.map(([miniStore]) => miniStore._requireSources$));
    const selections = {
        state$: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["using"])(() => requireAllSources$.subscribe(), () => select(fullSelectors.state)),
    };
    return Object.assign(Object.assign({}, selections), { _fullSelectors: fullSelectors, _requireSources$: requireAllSources$, _select: select });
}


/***/ }),

/***/ "J7g4":
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/second-parameter-or-any.type.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Kvxz":
/*!*************************************!*\
  !*** ./libs/core/src/lib/source.ts ***!
  \*************************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const SubjectWithoutNext = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"];
class Source extends SubjectWithoutNext {
    constructor(type) {
        super();
        this.type = type;
    }
    next(payload) {
        rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"].prototype.next.call(this, { type: this.type, payload });
    }
}


/***/ }),

/***/ "L2VF":
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/state-sanitizer.function.ts ***!
  \*******************************************************/
/*! exports provided: stateSanitizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSanitizer", function() { return stateSanitizer; });
function stateSanitizer(state) {
    return Object.assign(Object.assign(Object.assign({}, state), state.adapt), { adapt: undefined });
}


/***/ }),

/***/ "LGPl":
/*!*************************************************!*\
  !*** ./libs/core/src/lib/to-source.operator.ts ***!
  \*************************************************/
/*! exports provided: toSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSource", function() { return toSource; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

function toSource(type) {
    return (source$) => source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(payload => ({ type, payload })));
}


/***/ }),

/***/ "LjoL":
/*!***********************************************************************!*\
  !*** ./apps/docs/src/app/adapters/create-basic-adapter-docs.const.ts ***!
  \***********************************************************************/
/*! exports provided: createBasicAdapterDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBasicAdapterDocs", function() { return createBasicAdapterDocs; });
/* harmony import */ var _raw_loader_basic_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./basic.adapter */ "seTn");
/* harmony import */ var _raw_loader_libs_core_src_lib_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./../../../../../libs/core/src/lib/create-basic-adapter.function */ "hxUO");
/* harmony import */ var _basic_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.adapter */ "HGKH");



const createBasicAdapterDocs = {
    name: 'createBasicAdapter',
    description: 'Adapter for basic operations: set, update and reset',
    sourceCode: _raw_loader_libs_core_src_lib_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_1__["default"],
    parameters: [],
    demoAdapter: {
        value: _basic_adapter__WEBPACK_IMPORTED_MODULE_2__["basicAdapter"],
        stateChanges: {
            set: {
                demoPayload: '{ "prop1": "New state set", "prop2": "New State set" }',
                documentation: 'Sets state to value passed in payload.',
            },
            update: {
                demoPayload: '{ "prop2": "Updated state" }',
                documentation: 'Spreads payload object onto existing state.',
            },
            reset: {
                demoPayload: 'null',
                documentation: 'Resets state to initial state.',
            },
        },
        selectors: {},
        initialState: {
            prop1: 'Initial state for basic adapter demo',
            prop2: 'Initial state for basic adapter demo',
        },
        sourceCode: _raw_loader_basic_adapter__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
};


/***/ }),

/***/ "OJR8":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/concepts/overview.md ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# StateAdapt Conceptual Overview\n\nStateAdapt has 3 main concepts: Sources, adapters and stores.\n\n## [Sources](/concepts/sources)\n\n[Sources](/concepts/sources) are where asynchronous data enters applications. Examples are\n\n- User input\n- Data arriving from a server\n- A timer completing\n\n## [Adapters](/concepts/adapters)\n\n[Adapters](/concepts/adapters) are objects containing 2 kinds of reusable state management patterns:\n\n- State changes (pure functions that implement ways state can change)\n- Selectors (pure functions that calculate derived state or just return a specific piece of state)\n\n## [Stores](/concepts/stores)\n\n[Stores](/concepts/stores) do 3 things:\n\n- Define initial state and an adapter to manage it\n- Connect sources to adapter state changes\n- Use the adapter's selectors to create observables of the selectors' results. These observables chain off the sources so subscriptions are propagated\n");

/***/ }),

/***/ "PF3C":
/*!********************************************************!*\
  !*** ./libs/core/src/lib/action-sanitizer.function.ts ***!
  \********************************************************/
/*! exports provided: actionSanitizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSanitizer", function() { return actionSanitizer; });
/* harmony import */ var _adapt_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapt.actions */ "laVA");

function actionSanitizer(action) {
    return Object(_adapt_actions__WEBPACK_IMPORTED_MODULE_0__["isPatchState"])(action)
        ? Object.assign(Object.assign({}, action), { action: undefined, actionType: undefined, source: undefined, payload: action.source.payload, type: action.source.type }) : action;
}


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
    const newNAlreadyChosen = newN != null && ar.indexOf(newN) !== -1;
    const newNValid = newN != null && !isNaN(newN) && !newNAlreadyChosen;
    return newN != null && newNValid
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
            setTimeout(() => sinkGroups.forEach(child => (child.className.baseVal +=
                Math.random() < 0.75 ? ' active' : '')), startSink);
            setTimeout(() => (pulse.className.baseVal = pulse.className.baseVal.replace(/(\s*)active/, '')), endSource);
            setTimeout(() => sinkGroups.forEach(child => (child.className.baseVal = child.className.baseVal.replace(/(\s*)active/, ''))), endSink);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".circuit[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 21vw;\n  height: 18vw;\n  stroke: #8d8d8d;\n  fill: none;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(1) {\n  left: 4.5vw;\n  top: -11.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(2) {\n  left: -4.5vw;\n  top: 2.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(3) {\n  left: 16.2vw;\n  top: 18vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(4) {\n  left: 8.1vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(5) {\n  left: -6.75vw;\n  top: 40.5vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(6) {\n  left: 32.4vw;\n  top: 45vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(7) {\n  left: 54vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(8) {\n  left: 75.6vw;\n  top: 36vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(9) {\n  left: 45.45vw;\n  top: 9vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(10) {\n  left: 58.5vw;\n  top: -7.65vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(11) {\n  left: 89.1vw;\n  top: -2.25vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(12) {\n  left: 127.8vw;\n  top: 6.75vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(13) {\n  left: 108vw;\n  top: 18vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(14) {\n  left: 118.8vw;\n  top: 27vw;\n}\n.circuit[_ngcontent-%COMP%]:nth-child(15) {\n  left: 140.4vw;\n  top: 42.75vw;\n}\n.circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n  stroke-width: 6px;\n  opacity: 0.3;\n}\n@media screen and (min-width: 800px) {\n  .circuit[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 16.5vw;\n    height: 14.1428571429vw;\n    stroke: #8d8d8d;\n    fill: none;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(1) {\n    left: 3.5357142857vw;\n    top: -8.8392857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(2) {\n    left: -3.5357142857vw;\n    top: 1.7678571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(3) {\n    left: 12.7285714286vw;\n    top: 14.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(4) {\n    left: 6.3642857143vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(5) {\n    left: -5.3035714286vw;\n    top: 31.8214285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(6) {\n    left: 25.4571428571vw;\n    top: 35.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(7) {\n    left: 42.4285714286vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(8) {\n    left: 59.4vw;\n    top: 28.2857142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(9) {\n    left: 35.7107142857vw;\n    top: 7.0714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(10) {\n    left: 45.9642857143vw;\n    top: -6.0107142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(11) {\n    left: 70.0071428571vw;\n    top: -1.7678571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(12) {\n    left: 100.4142857143vw;\n    top: 5.3035714286vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(13) {\n    left: 84.8571428571vw;\n    top: 14.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(14) {\n    left: 93.3428571429vw;\n    top: 21.2142857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(15) {\n    left: 110.3142857143vw;\n    top: 33.5892857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    stroke-width: 6px;\n    opacity: 0.3;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .circuit[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 13.5vw;\n    height: 11.5714285714vw;\n    stroke: #8d8d8d;\n    fill: none;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(1) {\n    left: 2.8928571429vw;\n    top: -7.2321428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(2) {\n    left: -2.8928571429vw;\n    top: 1.4464285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(3) {\n    left: 10.4142857143vw;\n    top: 11.5714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(4) {\n    left: 5.2071428571vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(5) {\n    left: -4.3392857143vw;\n    top: 26.0357142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(6) {\n    left: 20.8285714286vw;\n    top: 28.9285714286vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(7) {\n    left: 34.7142857143vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(8) {\n    left: 48.6vw;\n    top: 23.1428571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(9) {\n    left: 29.2178571429vw;\n    top: 5.7857142857vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(10) {\n    left: 37.6071428571vw;\n    top: -4.9178571429vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(11) {\n    left: 57.2785714286vw;\n    top: -1.4464285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(12) {\n    left: 82.1571428571vw;\n    top: 4.3392857143vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(13) {\n    left: 69.4285714286vw;\n    top: 11.5714285714vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(14) {\n    left: 76.3714285714vw;\n    top: 17.3571428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]:nth-child(15) {\n    left: 90.2571428571vw;\n    top: 27.4821428571vw;\n  }\n  .circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    stroke-width: 6px;\n    opacity: 0.3;\n  }\n}\n.clock[_ngcontent-%COMP%]   .clock-circle[_ngcontent-%COMP%] {\n  stroke-width: 5px;\n  fill: none;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  stroke-width: 3px;\n}\n.http[_ngcontent-%COMP%], .websocket[_ngcontent-%COMP%], .clock[_ngcontent-%COMP%], .html[_ngcontent-%COMP%], .storage[_ngcontent-%COMP%] {\n  fill: #8d8d8d;\n  opacity: 0.3;\n}\n.connector[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #8d8d8d;\n  fill: none;\n  stroke-width: 3;\n  opacity: 0.3;\n  transition: stroke 2s linear all;\n}\n.connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  stroke: #5d2f88;\n  fill: none;\n  stroke-width: 4;\n  stroke-dasharray: 450;\n  stroke-dashoffset: 450;\n}\n.connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%] {\n  animation: dash 0.4s linear;\n}\n.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-dashoffset: -450;\n}\n.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%] {\n  animation: dash 0.4s linear reverse;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 450;\n  }\n  100% {\n    stroke-dashoffset: -450;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NpcmN1aXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFpQkEsZUFsQ1k7RUFtQ1osVUFBQTtBQS9CSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFLSjtBQVBFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFTSjtBQVhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFhSjtBQWZFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFpQko7QUFuQkU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQXFCSjtBQXZCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBeUJKO0FBM0JFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUE2Qko7QUEvQkU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQWlDSjtBQW5DRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBcUNKO0FBdkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF5Q0o7QUEzQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQTZDSjtBQS9DRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBaURKO0FBbkRFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFxREo7QUF2REU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQXlESjtBQTVCSTtFQUNFLGlCQUFBO0VBQ0EsWUFwQ1k7QUFrRWxCO0FBeEJBO0VBOUJFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFpQkEsZUFsQ1k7SUFtQ1osVUFBQTtFQTBDRjtFQXhFQTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUEwRUY7RUE1RUE7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VBOEVGO0VBaEZBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQWtGRjtFQXBGQTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUFzRkY7RUF4RkE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMEZGO0VBNUZBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQThGRjtFQWhHQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFrR0Y7RUFwR0E7SUFDRSxZQUFBO0lBQ0Esb0JBQUE7RUFzR0Y7RUF4R0E7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VBMEdGO0VBNUdBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQThHRjtFQWhIQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFrSEY7RUFwSEE7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBc0hGO0VBeEhBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQTBIRjtFQTVIQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUE4SEY7RUFoSUE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBa0lGO0VBckdFO0lBQ0UsaUJBQUE7SUFDQSxZQXBDWTtFQTJJaEI7QUFDRjtBQS9GQTtFQWpDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBaUJBLGVBbENZO0lBbUNaLFVBQUE7RUFtSEY7RUFqSkE7SUFDRSxvQkFBQTtJQUNBLG9CQUFBO0VBbUpGO0VBckpBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQXVKRjtFQXpKQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUEySkY7RUE3SkE7SUFDRSxvQkFBQTtJQUNBLG9CQUFBO0VBK0pGO0VBaktBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQW1LRjtFQXJLQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUF1S0Y7RUF6S0E7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMktGO0VBN0tBO0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBK0tGO0VBakxBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQW1MRjtFQXJMQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUF1TEY7RUF6TEE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMkxGO0VBN0xBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQStMRjtFQWpNQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFtTUY7RUFyTUE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBdU1GO0VBek1BO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQTJNRjtFQTlLRTtJQUNFLGlCQUFBO0lBQ0EsWUFwQ1k7RUFvTmhCO0FBQ0Y7QUFuS0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFxS0o7QUFuS0U7RUFDRSxpQkFBQTtBQXFLSjtBQWxLQTs7Ozs7RUFLRSxhQWpFYztFQWtFZCxZQWhFZ0I7QUFxT2xCO0FBbktBO0VBQ0UsZUFyRWM7RUFzRWQsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQXRFZ0I7RUF1RWhCLGdDQUFBO0FBc0tGO0FBbktBO0VBQ0Usd0JBQUE7RUFDQSxlQTdFWTtFQThFWixVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQU5ZO0VBT1osc0JBUFk7QUE2S2Q7QUFyS0U7RUFDRSwyQkFBQTtBQXVLSjtBQXBLQTtFQUNFLHVCQUFBO0FBdUtGO0FBdEtFO0VBQ0UsbUNBQUE7QUF3S0o7QUFyS0E7RUFDRTtJQUNFLHNCQXBCVTtFQTRMWjtFQXRLQTtJQUNFLHVCQUFBO0VBd0tGO0FBQ0YiLCJmaWxlIjoiY2lyY3VpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWUnO1xuXG4kZGlhZ3JhbS1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgdWktMDQpO1xuJHB1bHNlLWNvbG9yOiBtYXAtZ2V0KCRjYXJib24tLXRoZW1lLCBhY2NlbnQtMDIpO1xuJGRpYWdyYW0tb3BhY2l0eTogMC4zO1xuXG5AbWl4aW4gY2hpbGQtbGVmdC10b3AoJGNxLCAkY2hpbGQsICRsZWZ0LCAkcmlnaHQpIHtcbiAgJjpudGgtY2hpbGQoI3skY2hpbGR9KSB7XG4gICAgbGVmdDogJGNxICogJGxlZnQ7XG4gICAgdG9wOiAkY3EgKiAkcmlnaHQ7XG4gIH1cbn1cblxuQG1peGluIGNpcmN1aXQtc3R5bGVzKCRiYXNlLXdpZHRoKSB7XG4gICRjaXJjdWl0LXdpZHRoOiAxLjUgKiAkYmFzZS13aWR0aDtcbiAgJGNpcmN1aXQtcXVhZDogJGNpcmN1aXQtd2lkdGggKiA2IC8gMTQ7XG4gIC5jaXJjdWl0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEuNSAqICRiYXNlLXdpZHRoO1xuICAgIGhlaWdodDogMiAqICRjaXJjdWl0LXF1YWQ7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMSwgMC41LCAtMS4yNSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMiwgLTAuNSwgMC4yNSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMywgMS44LCAyKTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCA0LCAwLjksIDMpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDUsIC0wLjc1LCA0LjUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDYsIDMuNiwgNSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgNywgNiwgMyk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgOCwgOC40LCA0KTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCA5LCA1LjA1LCAxKTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCAxMCwgNi41LCAtMC44NSk7XG4gICAgQGluY2x1ZGUgY2hpbGQtbGVmdC10b3AoJGNpcmN1aXQtcXVhZCwgMTEsIDkuOSwgLTAuMjUpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDEyLCAxNC4yLCAwLjc1KTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCAxMywgMTIsIDIpO1xuICAgIEBpbmNsdWRlIGNoaWxkLWxlZnQtdG9wKCRjaXJjdWl0LXF1YWQsIDE0LCAxMy4yLCAzKTtcbiAgICBAaW5jbHVkZSBjaGlsZC1sZWZ0LXRvcCgkY2lyY3VpdC1xdWFkLCAxNSwgMTUuNiwgNC43NSk7XG5cbiAgICBzdHJva2U6ICRkaWFncmFtLWNvbG9yO1xuICAgIGZpbGw6IG5vbmU7XG4gICAgLmFkYXB0ZXIge1xuICAgICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgICBvcGFjaXR5OiAkZGlhZ3JhbS1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBjaXJjdWl0LXN0eWxlcygkYmFzZS13aWR0aDogMTR2dyk7XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtLXNjcmVlbikge1xuICBAaW5jbHVkZSBjaXJjdWl0LXN0eWxlcygkYmFzZS13aWR0aDogMTF2dyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbGFyZ2Utc2NyZWVuKSB7XG4gIEBpbmNsdWRlIGNpcmN1aXQtc3R5bGVzKCRiYXNlLXdpZHRoOiA5dncpO1xufVxuXG4uY2xvY2sge1xuICAuY2xvY2stY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcbiAgICBmaWxsOiBub25lO1xuICB9XG4gIC5oYW5kIHtcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcbiAgfVxufVxuLmh0dHAsXG4ud2Vic29ja2V0LFxuLmNsb2NrLFxuLmh0bWwsXG4uc3RvcmFnZSB7XG4gIGZpbGw6ICRkaWFncmFtLWNvbG9yO1xuICBvcGFjaXR5OiAkZGlhZ3JhbS1vcGFjaXR5O1xufVxuLmNvbm5lY3RvciBwYXRoIHtcbiAgc3Ryb2tlOiAkZGlhZ3JhbS1jb2xvcjtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICBvcGFjaXR5OiAkZGlhZ3JhbS1vcGFjaXR5O1xuICB0cmFuc2l0aW9uOiBzdHJva2UgMnMgbGluZWFyIGFsbDtcbn1cbiRwdWxzZS13aWR0aDogNDUwO1xuLmNvbm5lY3Rvci1wdWxzZSBwYXRoIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAvLyAzZCBtb3ZlcyB3b3JrIHRvIEdQVVxuICBzdHJva2U6ICRwdWxzZS1jb2xvcjtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiA0O1xuICBzdHJva2UtZGFzaGFycmF5OiAkcHVsc2Utd2lkdGg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAkcHVsc2Utd2lkdGg7XG4gICYuYWN0aXZlIHtcbiAgICBhbmltYXRpb246IGRhc2ggMC40cyBsaW5lYXI7XG4gIH1cbn1cbi5zaW5rIC5jb25uZWN0b3ItcHVsc2UgcGF0aCB7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAtJHB1bHNlLXdpZHRoO1xuICAmLmFjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBkYXNoIDAuNHMgbGluZWFyIHJldmVyc2U7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogJHB1bHNlLXdpZHRoO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtJHB1bHNlLXdpZHRoO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "Prt+":
/*!*************************************************************!*\
  !*** ./libs/adapter-docs/src/lib/adapter-docs.component.ts ***!
  \*************************************************************/
/*! exports provided: AdapterDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterDocsComponent", function() { return AdapterDocsComponent; });
/* harmony import */ var _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state-adapt/core */ "Huv7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _adapter_docs_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter-docs-state.interface */ "0A9v");
/* harmony import */ var _adapter_docs_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapter-docs.interface */ "SMq0");
/* harmony import */ var _docs_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs.adapter */ "nZ6C");
/* harmony import */ var _get_diff_html_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-diff-html.function */ "8y52");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngstack/code-editor */ "KjtJ");













function AdapterDocsComponent_ng_container_0_ibm_structured_list_5_ibm_list_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ibm-list-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ibm-list-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ibm-list-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "markdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](param_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", param_r8.description);
} }
function AdapterDocsComponent_ng_container_0_ibm_structured_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ibm-structured-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ibm-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ibm-list-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ibm-list-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AdapterDocsComponent_ng_container_0_ibm_structured_list_5_ibm_list_row_6_Template, 6, 2, "ibm-list-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const docs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("condensed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", docs_r1.parameters);
} }
function AdapterDocsComponent_ng_container_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.content);
} }
function AdapterDocsComponent_ng_container_0_ibm_selection_tile_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ibm-selection-tile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", i_r12.toString())("selected", item_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.inputs.stateChangeName);
} }
function AdapterDocsComponent_ng_container_0_ngs_code_editor_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngs-code-editor", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function AdapterDocsComponent_ng_container_0_ngs_code_editor_27_Template_ngs_code_editor_keypress_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.editorKeyPressed$.next(); })("valueChanged", function AdapterDocsComponent_ng_container_0_ngs_code_editor_27_Template_ngs_code_editor_valueChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r15.payloadChanged$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("codeModel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r6.codeModel$))("options", ctx_r6.codeOptions);
} }
function AdapterDocsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "markdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AdapterDocsComponent_ng_container_0_ibm_structured_list_5_Template, 7, 2, "ibm-structured-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Source Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "markdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "markdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AdapterDocsComponent_ng_container_0_ng_template_14_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ibm-tile-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function AdapterDocsComponent_ng_container_0_Template_ibm_tile_group_selected_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.historyItemSelected$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AdapterDocsComponent_ng_container_0_ibm_selection_tile_18_Template, 3, 3, "ibm-selection-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ibm-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ibm-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function AdapterDocsComponent_ng_container_0_Template_ibm_dropdown_selected_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.stateChangeSelection$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "ibm-dropdown-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ibm-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ibm-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, AdapterDocsComponent_ng_container_0_ngs_code_editor_27_Template, 2, 4, "ngs-code-editor", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ibm-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdapterDocsComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.executeClicked$.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Execute ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ibm-tile", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "ibm-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function AdapterDocsComponent_ng_container_0_Template_ibm_dropdown_selected_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.selectorSelection$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "ibm-dropdown-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "ibm-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ibm-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "markdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "ibm-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "pre", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ibm-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const docs_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_11_0 = null;
    let tmp_19_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](docs_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", docs_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", docs_r1.parameters.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 20, ctx_r0.creatorSourceCodeMd$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 22, ctx_r0.demoSourceCodeMd$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 24, ctx_r0.demoHistory$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropUp", false)("displayValue", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 26, ctx_r0.stateChangeItems$))("listTpl", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 28, ctx_r0.payloadEditorRefreshRequired$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 30, ctx_r0.selectedStateChange$)) == null ? null : tmp_11_0.documentation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 32, ctx_r0.selectedHistoryItem$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropUp", false)("displayValue", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 34, ctx_r0.selectorItems$))("listTpl", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](43, 36, ctx_r0.selectorResult$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 38, ctx_r0.selectorDiff$), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_19_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 40, ctx_r0.selectedSelector$)) == null ? null : tmp_19_0.documentation, " ");
} }
class AdapterDocsComponent {
    constructor(adapt) {
        this.adapt = adapt;
        this.adapterDocs = _adapter_docs_interface__WEBPACK_IMPORTED_MODULE_4__["defaultAdapterDocs"];
        this.path = ('adapterDocs' + Math.random()).replace('.', '');
        this.detachedDocsStore = this.adapt.spy(this.path, _docs_adapter__WEBPACK_IMPORTED_MODULE_5__["docsAdapter"]);
        this.docsInputValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.docsReceived$ = this.docsInputValue$.pipe(Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["toSource"])('docsReceived$'));
        this.stateChangeSelection$ = new _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["Source"]('stateChangeSelection$');
        this.stateChangePayloadDelay$ = this.detachedDocsStore.selectedStateChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(undefined), Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["toSource"])('stateChangePayloadDelay$'));
        this.selectorSelection$ = new _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["Source"]('selectorSelection$');
        this.payloadChanged$ = new _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["Source"]('payloadChanged$');
        // Editor emits when it receives a new value
        // So only listen to it right after a key press
        this.editorKeyPressed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.payloadChangedDebounced$ = this.editorKeyPressed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.payloadChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500));
        this.executeClicked$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.demoAdapterValue$ = this.docsInputValue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(docs => docs.demoAdapter.value));
        this.newStateCalculated$ = this.executeClicked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.detachedDocsStore.demoStateAndPayload$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.demoAdapterValue$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([{ state, payload, initialState, stateChangeName }, demoAdapter]) => demoAdapter[stateChangeName](state, JSON.parse(payload), initialState)), Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["toSource"])('newStateCalculated$'));
        this.historyItemSelected$ = new _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["Source"]('historyItemSelected$');
        this.docsStore = this.adapt.init([this.path, _docs_adapter__WEBPACK_IMPORTED_MODULE_5__["docsUiAdapter"], _adapter_docs_state_interface__WEBPACK_IMPORTED_MODULE_3__["initialState"]], {
            receiveDocs: this.docsReceived$,
            selectStateChange: this.stateChangeSelection$,
            selectStateChangeFromHistory: this.historyItemSelected$,
            resetEditorRefresh: this.stateChangePayloadDelay$,
            setPayload: this.payloadChangedDebounced$,
            setDemoState: this.newStateCalculated$,
            selectHistoryItem: [
                this.historyItemSelected$,
                this.payloadChangedDebounced$,
                this.stateChangeSelection$,
            ],
            selectSelector: this.selectorSelection$,
        });
        this.docs$ = this.docsStore.docs$;
        this.creatorSourceCodeMd$ = this.docsStore.creatorSourceCodeMd$;
        this.demoSourceCodeMd$ = this.docsStore.demoSourceCodeMd$;
        this.paramters$ = this.docsStore.parameters$;
        this.stateChangeItems$ = this.docsStore.adapterStateChangeItems$;
        this.selectorItems$ = this.docsStore.adapterSelectorItems$;
        this.selectedStateChange$ = this.docsStore.selectedStateChange$;
        this.payloadEditorRefreshRequired$ = this.docsStore.payloadEditorRefreshRequired$;
        this.codeModel$ = this.docsStore.payloadCodeModel$;
        this.codeOptions = {
            contextMenu: true,
            scrollBeyondLastLine: false,
        };
        this.demoHistory$ = this.docsStore.demoHistory$;
        this.selectedHistoryItem$ = this.docsStore.selectedHistoryItem$;
        this.diffStateAndSelectorName$ = this.docsStore.diffStateAndSelectorName$;
        this.selectedSelector$ = this.docsStore.selectedSelector$;
        this.selectorResult$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.demoAdapterValue$,
            this.diffStateAndSelectorName$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([adapter, [diff, selectorName]]) => {
            var _a, _b;
            return '```json\n' +
                Object(_get_diff_html_function__WEBPACK_IMPORTED_MODULE_6__["toJson"])(((_b = (_a = (adapter.selectors || {}))[selectorName]) === null || _b === void 0 ? void 0 : _b.call(_a, diff[1])) || diff[1]) +
                '\n```';
        }));
        this.selectorDiff$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.demoAdapterValue$,
            this.diffStateAndSelectorName$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([adapter, [diff, selectorName]]) => {
            const selector = (adapter.selectors || {})[selectorName] || this.getState;
            const selectorDiff = diff.map(selector);
            return Object(_get_diff_html_function__WEBPACK_IMPORTED_MODULE_6__["getDiffHtml"])(...selectorDiff);
        }));
    }
    ngOnInit() {
        setTimeout(() => this.docsInputValue$.next(this.adapterDocs));
        this.payloadChanged$.subscribe(a => console.log('a', a));
    }
    getState(state) {
        return state;
    }
}
AdapterDocsComponent.ɵfac = function AdapterDocsComponent_Factory(t) { return new (t || AdapterDocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["AdaptCommon"])); };
AdapterDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AdapterDocsComponent, selectors: [["state-adapt-adapter-docs"]], inputs: { adapterDocs: "adapterDocs" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "adapter-creator-name"], [3, "data"], [3, "condensed", 4, "ngIf"], ["codeTemplate", ""], [1, "history"], [3, "selected"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "state-change-panel"], [1, "dropdown-header"], ["placeholder", "State Change", 3, "dropUp", "displayValue", "selected"], [3, "items", "listTpl"], ["heading", "Payload"], ["theme", "vs-dark", 3, "codeModel", "options", "keypress", "valueChanged", 4, "ngIf"], ["heading", "Documentation", 1, "padded"], ["ibmButton", "primary", 3, "disabled", "click"], [1, "selector-panel"], ["placeholder", "Selector", 3, "dropUp", "displayValue", "selected"], ["heading", "Result"], ["heading", "Diff"], [1, "language-json", 3, "innerHTML"], [3, "condensed"], [4, "ngFor", "ngForOf"], [2, "color", "#f4f4f4"], [3, "value", "selected"], ["theme", "vs-dark", 3, "codeModel", "options", "keypress", "valueChanged"]], template: function AdapterDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AdapterDocsComponent_ng_container_0_Template, 50, 42, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.docs$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_9__["MarkdownComponent"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["TileGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["Tile"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["DropdownList"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["Tabs"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["Tab"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["Button"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["StructuredList"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["ListHeader"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["ListColumn"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["ListRow"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_10__["SelectionTile"], _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_11__["CodeEditorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".adapter-creator-name[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n        margin-left: -5px;\n      }\n        ibm-list-column p {\n        margin: 0;\n        font-size: 1em;\n      }\n        section.bx--structured-list {\n        margin-bottom: 0;\n        margin-bottom: 1.6rem;\n        margin-top: 0.8rem;\n      }\n\n      ibm-tile[_ngcontent-%COMP%] {\n        padding: 0;\n      }\n      .history[_ngcontent-%COMP%], .state-change-panel[_ngcontent-%COMP%] {\n        margin-top: 0.5em !important;\n      }\n      .history[_ngcontent-%COMP%] {\n        width: 100px;\n        float: left !important;\n      }\n      @media screen and (min-width: 1500px) {\n          .history {\n          margin-left: -200px;\n          width: 200px !important;\n        }\n          .state-change-panel {\n          margin-left: calc(12px -200px) !important;\n          width: calc(100% + 0px - 12px) !important;\n        }\n          .selector-panel {\n          width: calc(100% + 0px - 12px) !important;\n        }\n          .history ibm-selection-tile code {\n          width: calc(200px - 30px) !important;\n        }\n      }\n        .history ibm-selection-tile label {\n        padding: 1rem !important;\n        min-height: 0 !important;\n        margin-bottom: 4px !important;\n        min-width: 0;\n      }\n        .history ibm-selection-tile code {\n        width: 70px;\n        overflow: hidden;\n        display: block;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n      .state-change-panel[_ngcontent-%COMP%] {\n        margin: 0px 0 20px 12px;\n        width: calc(100% - 100px - 12px);\n        float: right;\n      }\n      .selector-panel[_ngcontent-%COMP%] {\n        margin: 0 0 2.5rem 0;\n        width: calc(100% - 100px - 12px);\n        float: right;\n      }\n      .dropdown-header[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: stretch;\n      }\n      .dropdown-header-label[_ngcontent-%COMP%] {\n        width: 50%;\n        display: flex;\n        align-items: center;\n        margin-top: 0;\n        border-bottom: 1px solid #8d8d8d;\n      }\n      \n      ibm-dropdown[_ngcontent-%COMP%] {\n        display: block;\n        width: 50%;\n        width: 100%;\n      }\n      ibm-tabs[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n        .state-change-panel ibm-tab .bx--tab-content {\n        height: 160px;\n        padding: 0;\n        background-color: #1e1e1e;\n        border-left: 2px solid #00b8a4;\n      }\n        ibm-tab.padded .bx--tab-content {\n        padding: 1em !important;\n      }\n        .bx--tabs--scrollable__nav,   .bx--tabs--scrollable__nav-item,   .bx--tabs--scrollable__nav-link {\n        width: 100% !important;\n      }\n        #editor {\n        min-height: 160px !important;\n      }\n      .editor-placeholder[_ngcontent-%COMP%] {\n        min-height: 160px;\n        width: 100%;\n        background-color: #1e1e1e;\n      }\n        .state-change-panel button {\n        width: 33.333%;\n      }\n        .selector-panel ibm-tab .bx--tab-content {\n        height: 300px;\n        padding: 0;\n        background-color: #1e1e1e;\n        border-left: 2px solid #00b8a4;\n      }\n        .selector-panel ibm-tab pre {\n        height: 300px;\n        margin: 0;\n        overflow-x: auto;\n        white-space: pre-wrap;\n        font-size: 12px;\n        border-left-width: 0px;\n      }"] });


/***/ }),

/***/ "QxhO":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/concepts/stores.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Stores\n\n- [Overview](/concepts/stores#overview)\n- [`init`](/concepts/stores#init)\n- [State Paths](/concepts/stores#state-paths)\n- [`state$`](/concepts/stores#state)\n- [`initGet`](/concepts/stores#initget)\n- [Selectors](/concepts/stores#selectors)\n- [`updater`](/concepts/stores#updater)\n- [`setter`](/concepts/stores#setter)\n- [`spy`](/concepts/stores#spy)\n- [Joining Stores](/concepts/stores#joining-stores)\n\n## Overview\n\nStores do 3 things:\n\n- Define initial state and an adapter to manage it\n- Connect sources to adapter state changes\n- Use the adapter's selectors to create observables of the selectors' results. These observables chain off the sources so subscriptions are propagated\n\nStores _do not_ subscribe to sources on their own. Nothing will happen until you subscribe to one of the selector observables.\n\n## `init`\n\n`init` is the method on `AdaptCommon` that creates a store for an adapter. It takes 2 arguments and returns a store object:\n\n```typescript\nimport { AdaptCommon } from '@state-adapt/core';\n// ...\nnumberStore = this.adapt.init(\n  ['number', numberAdapter, 0],\n  { add: this.numberAdded$ },\n);\n\nconstructor(private adapt: AdaptCommon<any>) {}\n```\n\nThe first argument is an array of 3 elements:\n\n- `path`: Object [path](/concepts/stores#state-paths) (`string`) in the global store where this state will live\n- `adapter`: The adapter that will manage the state in this store\n- `initialState`: The initial state for this store\n\nThe 2nd argument is an object that maps the relationship between state changes and the sources that should trigger them. This object is equivalent to a reducer in _Redux_ or _NgRx_. The property names of the object are the adapter's state change function names. The right-hand side of the object specifies one or more sources that should trigger the state change specified in the property name. To specify multiple sources, pass them in an array, like\n\n```typescript\n{\n  add: [this.numberAdded$, this.aDifferentNumberAdded$],\n}\n```\n\n## State Paths\n\nThe [path](/concepts/stores#state-paths) string passed into [`init`](/concepts/stores#init) specifies the location in the global store you will find the state for the store being created. StateAdapt splits this string at periods `'.'` and uses the resulting array to define an object path for the state. For example, with an initial state of `0`, the following paths will create the following objects for the global store:\n\n```typescript\n'number' ==> { number: 0 }\n\n'featureA.number' ==> { featureA: { number: 0 } }\n\n'featureA.featureB.number' ==> { featureA: { featureB: { number: 0 } } }\n```\n\nEach store completely owns its own state. If more than one store tries to use the same path, StateAdapt will throw this error:\n\n`Path '${path}' collides with '${existingPath}', which has already been initialized as a state path.`\n\nThis applies both to paths that are identical as well as paths that are subtrings of another path. For example, if `'featureA'` is already being used by a state and then another store tried to initialize at `'featureA.number'`, that error would be thrown.\n\n## `state$`\n\n[`state$`](/concepts/stores#state) is a default property created for each store. It is an observable of the store's state:\n\n```typescript\nnumberStore = this.adapt.init(['number', numberAdapter, 0], {});\nnumber$ = this.numberStore.state$;\n```\n\n## `initGet`\n\n[`initGet`](/concepts/stores#initget) is syntactic sugar for calling [`init`](/concepts/stores#init) and then accessing the [`state$`](/concepts/stores#state) property of the returned store. For example,\n\n```typescript\nnumberStore = this.adapt.init(['number', numberAdapter, 0], {});\nnumber$ = this.numberStore.state$;\n```\n\nis the same as\n\n```typescript\nnumber$ = this.adapt.initGet(['number', numberAdapter, 0], {});\n```\n\n## Selectors\n\nIf selectors are defined in an adapter they get assigned to properties on the store object with an added `'$'` at the end of the property name. They are observables of the selected state:\n\n```typescript\nnumberAdapter = createAdapter<number>()({\n  selectors: { negative: state => state * -1 },\n});\nnumberStore = this.adapt.init(['number', this.numberAdapter, 0], {});\nnegativeNumber$ = this.numberStore.negative$;\n```\n\nEach selector's observable chains off of all the sources passed into the store. For example, if one of your sources is an observable of an HTTP request, that request will automatically be triggered as soon as you subscribe to any of the selector observables from the store. We recommend keeping your adapters and stores relatively small and focused on one concern so that accessing one part of state does not cause unrelated/unneeded data to be fetched. If necessary, you can also access store selectors that do not chain off of any sources by using the [`spy`](/concepts/stores#spy) method described below.\n\n## `updater`\n\n[`updater`](/concepts/stores#updater) is a method on `AdaptCommon` that is syntactic sugar for creating a store with an adapter with only the default state reactions and selectors. It expects only one type of source, which can be a single source or an array of sources that trigger the adapter's [`update`](/concepts/adapters#createadapter) method. The [`update`](/concepts/adapters#createadapter) method requires the state to be an object so it can spread it in the updates. This usage of [`updater`](/concepts/stores#updater)\n\n```typescript\nvalueChanges$ = this.form.valueChanges.pipe(toSource('[Form] Value Change'));\nformValues$ = this.adapt.updater('form', { name: '' }, this.valueChanges$);\n```\n\nis equivalent to\n\n```typescript\nimport { createAdapter } from '@state-adapt/core';\n// ...\nvalueChanges$ = this.form.valueChanges.pipe(toSource('[Form] Value Change'));\nformAdapter = createAdapter<{ name: string }>()({});\nformValues$ = this.adapt.initGet(['form', this.formAdapter, { name: '' }], {\n  update: this.valueChanges$,\n});\n```\n\n[`updater`](/concepts/stores#updater) is like kind of like RxJS's `BehaviorSubject`, except you get to see its state in Redux Devtools. It is best to only use it for extremely trivial state. If you find yourself calculating future states in your source observables and only using [`updater`](/concepts/stores#updater) to store the results, your sources are concerned with too much and you should be using [`init`](/concepts/stores#init) and an adapter containing the state change logic.\n\n## `setter`\n\n[`setter`](/concepts/stores#setter) is the same as [`updater`](/concepts/stores#updater), except instead of triggering the [`update`](/concepts/adapters#createadapter) state change it triggers the [`set`](/concepts/adapters#createadapter) state change. You can only use it for state that cannot be spread (non-objects), like `number` or `string`.\n\n## `spy`\n\n[`spy`](/concepts/stores#spy) is a method on `AdaptCommon` that returns a store that does not chain off of sources. It takes 2 arguments: The [path](/concepts/stores#state-paths) of the state you are interested in, and the adapter containing the selectors you want to use:\n\n```typescript\nnegativeNumber$ = this.adapt.spy('number', numberAdapter).negative$;\n```\n\n[`spy`](/concepts/stores#spy) is useful in 2 situations primarily: [Accessing state without subscribing](/concepts/stores#accessing-state-without-subscribing) and [accessing state for a source](/concepts/stores#accessing-state-for-a-source).\n\n### 1. Accessing State without Subscribing\n\n[`spy`](/concepts/stores#spy) enables accessing state without subscribing to sources. For example, if your adapter manages the `loading` state for an HTTP request and you need to know if the request is loading _before_ the user is interested in the data, [`spy`](/concepts/stores#spy) can give you access to it without triggering the request. This is probably not common, but [`spy`](/concepts/stores#spy) makes it possible.\n\n### 2. Accessing State for a Source\n\nIt would be impossible for a source itself to access state from the store without [`spy`](/concepts/stores#spy) because it would require using the store before it had been defined. The following example demonstrates this:\n\n```typescript\ndataReceived$ = this.dataStore.dataNeeded$.pipe(\n  // Error: Property 'dataStore' is used before its initialization.\n  filter(needed => needed),\n  switchMap(() => this.dataService.fetchData()),\n  toSource('dataReceived$'),\n);\n\ndataStore = this.adapt.init(['data', dataAdapter, initialState], {\n  receive: this.dataReceived$,\n});\n```\n\nIn this example `dataNeeded$` comes from a selector that returns `true` if data needs to be fetched. This could be useful if the user is given a refresh button which triggers a state change back to the initial state. Since the `dataReceived$` source chains off of `dataNeeded$`, this reset would automatically trigger the request to be made again. Very reactive!\n\nHowever, `dataReceived$` needs to reference `this.dataStore.dataNeeded$`, which is impossible because `dataStore` uses `dataReceived$`. It is a circular reference problem.\n\n[`spy`](/concepts/stores#spy) solves this:\n\n```typescript\ndataNeeded$ = this.adapt.spy('data', dataAdapter).dataNeeded$;\n\ndataReceived$ = this.dataNeeded$.pipe(\n  filter(needed => needed),\n  switchMap(() => this.dataService.fetchData()),\n  toSource('dataReceived$'),\n);\n\ndataStore = this.adapt.init(['data', dataAdapter, initialState], {\n  receive: this.dataReceived$,\n});\n```\n\n## Joining Stores\n\nStores are treated as independent entities responsible for managing only the state inside of them. But sometimes you need to combine state from multiple stores. Since [`combineLatest` is often inadequate](/concepts/stores#the-problem-with-combinelatest), StateAdapt exports 2 functions to accomplish this: [`joinSelectors`](/concepts/stores#joinselectors) and [`join`](/concepts/stores#join).\n\n### The Problem with `combineLatest`\n\nWhen multiple stores change state simultaneously, a `combineLatest` that combines state from all of them will fire once for each store instead of once for all of them. This is not performant and requires you to filter out intermediate states where some inputs are fresh but the others are not. Consider this example:\n\n```typescript\nnumberAdded$ = new Source<number>();\n\nnumber1$ = this.adapt.initGet(['number1', numberAdapter, 0], {\n  add: this.numberAdded$,\n});\nnumber2$ = this.adapt.initGet(['number2', numberAdapter, 4000], {\n  add: this.numberAdded$,\n});\n\ntotal$ = combineLatest([this.number1$, this.number2$]).pipe(map((n1, n2) => n1 + n2));\n```\n\nInitially, `total$` will emit `4000`, calculated from the initial inputs of `0` and `4000`. If you then call `numberAdded$.next(10)`, `total$` would first recalculate based on inputs of `10` and `4000`, so it would emit `4010`. After that it would get the update from `number2` and calculate from `10` and `4010` and emit the correct number, `4020`.\n\n### `joinSelectors`\n\n[`joinSelectors`](/concepts/stores#joinselectors) is the simplest way to use state from multiple stores:\n\n```typescript\nimport { joinSelectors } from '@state-adapt/core';\n// ...\ntotal$ = joinSelectors(this.number1Store, this.number2Store, (n1, n2) => n1 + n2);\n```\n\nThe first arguments are stores or store selector arrays (see below), and the last argument is the function that calculates the result. When you pass stores as the first arguments, [`joinSelectors`](/concepts/stores#joinselectors) uses the [`state`](/concepts/stores#state) selector from each store. If you want to use a different selector, you can specify it like this\n\n```typescript\ntotal$ = joinSelectors(\n  [this.number1Store, 'negative'],\n  this.number2Store,\n  (n1, n2) => n1 + n2,\n);\n```\n\nTypeScript will autocomplete the name of the selector as you type and correctly infer the types in the result function.\n\n### `join`\n\n[`join`](/concepts/stores#join) is a heavier solution than [`joinSelectors`](/concepts/stores#joinselectors). When you need to join many selectors from the same stores your code will be more DRY if you use [`join`](/concepts/stores#join) instead of [`joinSelectors`](/concepts/stores#joinselectors). [`join`](/concepts/stores#join) gives you access to all of each store's selectors by allowing you to specify a prefix to prepend to all selector names from each individual store. It returns a new store-like object with new selectors you define using `createSelector` from _Reselect_:\n\n```typescript\nimport { createSelector } from 'reselect';\nimport { join } from '@state-adapt/core';\n// ...\nnumbersStore = join(['one', this.number1Store], ['two', this.number2Store], {\n  totalNegative1: s => s.oneNegative + s.twoState,\n  totalNegative2: s => s.oneState + s.twoNegative,\n});\ntotalNegative1$ = this.numbersStore.totalNegative1$;\ntotalNegative2$ = this.numbersStore.totalNegative2$;\n```\n");

/***/ }),

/***/ "Rc8c":
/*!**********************************************************!*\
  !*** ./apps/docs/src/app/concepts/nav-tile.component.ts ***!
  \**********************************************************/
/*! exports provided: NavTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTileComponent", function() { return NavTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");



function NavTileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
function NavTileComponent_ibm_clickable_tile_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return [a0]; };
function NavTileComponent_ibm_clickable_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-clickable-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Previous: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavTileComponent_ibm_clickable_tile_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function NavTileComponent_ibm_clickable_tile_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NavTileComponent_ibm_clickable_tile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-clickable-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavTileComponent_ibm_clickable_tile_3_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c1 = ["*"];
class NavTileComponent {
    constructor() {
        this.link = '';
        this.right = false;
    }
}
NavTileComponent.ɵfac = function NavTileComponent_Factory(t) { return new (t || NavTileComponent)(); };
NavTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavTileComponent, selectors: [["state-adapt-nav-tile"]], inputs: { link: "link", right: "right" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [["content", ""], ["class", "left", 3, "route", 4, "ngIf"], ["class", "right", 3, "route", 4, "ngIf"], [1, "left", 3, "route"], [4, "ngTemplateOutlet"], [1, "right", 3, "route"]], template: function NavTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavTileComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavTileComponent_ibm_clickable_tile_2_Template, 4, 4, "ibm-clickable-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavTileComponent_ibm_clickable_tile_3_Template, 4, 4, "ibm-clickable-tile", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.right);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.right);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_2__["ClickableTile"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["ibm-clickable-tile[_ngcontent-%COMP%] {\n        width: calc(50% - 1em);\n        margin-top: 3em;\n      }\n      .left[_ngcontent-%COMP%] {\n        float: left;\n      }\n      .right[_ngcontent-%COMP%] {\n        float: right;\n      }\n      h3[_ngcontent-%COMP%] {\n        margin-top: 0;\n      }"] });


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

/***/ "SMq0":
/*!*************************************************************!*\
  !*** ./libs/adapter-docs/src/lib/adapter-docs.interface.ts ***!
  \*************************************************************/
/*! exports provided: defaultAdapterDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAdapterDocs", function() { return defaultAdapterDocs; });
/* harmony import */ var _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state-adapt/core */ "Huv7");

const defaultAdapterDocs = {
    name: 'Adapter Name',
    description: 'Adapter Description',
    sourceCode: `sourceCode`,
    parameters: [
        {
            text: 'text',
            description: 'description',
        },
    ],
    demoAdapter: {
        value: Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["createAdapter"])()({}),
        stateChanges: {},
        selectors: {},
        sourceCode: 'export const demoAdapter = {};',
        initialState: null,
    },
};


/***/ }),

/***/ "TOsA":
/*!************************************************************!*\
  !*** ./libs/core/src/lib/create-basic-adapter.function.ts ***!
  \************************************************************/
/*! exports provided: createBasicAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBasicAdapter", function() { return createBasicAdapter; });
/* harmony import */ var _create_adapter_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-adapter.function */ "YDF6");

function createBasicAdapter() {
    return Object(_create_adapter_function__WEBPACK_IMPORTED_MODULE_0__["createAdapter"])()({});
}


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
    renderer.list = (text, ordered, ...rest) => {
        const isNested = text.includes('[nested]');
        const orderedClassName = ordered ? 'ordered' : 'unordered';
        const className = isNested ? 'nested' : orderedClassName;
        return `<ul class="bx--list--${className}">${text.replace('[nested]', '')}</ul>`;
    };
    renderer.listitem = (text) => `<li class="bx--list__item">${text}</li>`;
    // renderer.heading = (text: string, level: number) => text;
    return { renderer };
}


/***/ }),

/***/ "WnsW":
/*!*******************************************!*\
  !*** ./libs/core/src/lib/sources.type.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "WuAA":
/*!********************************************!*\
  !*** ./libs/core/src/lib/join.function.ts ***!
  \********************************************/
/*! exports provided: join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "G4qV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _create_selectors_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-selectors.function */ "k/5l");


// import { AnySelectors } from './any-selectors.interface';

function join(...inputs) {
    const miniStoreInputs = inputs.slice(0, -1);
    const select = miniStoreInputs[0][1]._select;
    const newSelectors = inputs[inputs.length - 1];
    const getState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([...miniStoreInputs.map(([prefix, miniStore]) => miniStore._fullSelectors.state)], (...results) => results);
    const combinedStoreSelectors = miniStoreInputs.reduce((combined, [prefix, miniStore]) => (Object.assign(Object.assign({}, combined), prefixObjectKeys(prefix, miniStore._fullSelectors))), {});
    const fullSelectors = Object.assign(Object.assign({}, Object(_create_selectors_function__WEBPACK_IMPORTED_MODULE_2__["createSelectors"])()(combinedStoreSelectors, newSelectors)), { state: getState });
    const requireAllSources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...miniStoreInputs.map(([prefix, miniStore]) => miniStore._requireSources$));
    const selections = Object.keys(fullSelectors).reduce((selections, key) => (Object.assign(Object.assign({}, selections), { [key + '$']: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["using"])(() => requireAllSources$.subscribe(), () => select(fullSelectors[key])) })), {});
    return Object.assign(Object.assign({}, selections), { _fullSelectors: fullSelectors, _requireSources$: requireAllSources$, _select: select });
}
function prefixObjectKeys(prefix, obj) {
    return Object.entries(obj).reduce((newObj, [key, value]) => (Object.assign(Object.assign({}, newObj), { [`${prefix}${capitalize(key)}`]: value })), {});
}
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}


/***/ }),

/***/ "YDF6":
/*!******************************************************!*\
  !*** ./libs/core/src/lib/create-adapter.function.ts ***!
  \******************************************************/
/*! exports provided: createAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdapter", function() { return createAdapter; });
function createAdapter() {
    return (adapter = {}) => (Object.assign(Object.assign({ set: (state, payload) => payload, update: (state, update) => (Object.assign(Object.assign({}, state), update)), reset: (state, payload, initialState) => initialState }, adapter), { selectors: Object.assign(Object.assign({}, (adapter.selectors || {})), { state: state => state }) }));
}


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

/***/ "a+sU":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/concepts/thinking-reactively.md ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Thinking Reactively\n\nStateAdapt enables completely reactive state management. Although each team should determine for themselves how much they want to commit to reactive architecture, we believe that functional reactive programming will increasingly become the dominant pattern for most nontrivial apps.\n\n## Reactive code is better\n\nFunction reactive programming creates apps that are less bug-prone because they respect separation of concerns: Rather than organizing code by the timing of its execution, it organizes code by what feature it changes.\n\n## It takes practice\n\nReactive programming is not harder, it is just different. Thinking reactively takes practice. Experienced developers will have strong imperative habits, including using callback functions for events and reaching from outside of features to tell them how to change. However, with practice, it will become easier and easier to think reactively.\n\n---\n\n## Try this process\n\nUntil experienced developers have overcome the habits of imperative programming, we recommend the following process, which should reduce the cognitive load of trying to think both reactively and imperatively. After trying it you may find a different process more helpful, and that is fine.\n\n### 1. Define sources\n\nSources are only concerned with representing an event. This makes them extremely simple to start with.\n\nWhat if the event data ends up not being emitted in the exact shape we want it? That is the concern of the consumers, not the source. Sources are at the very top; everything else is downstream.\n\n### 2. Choose an adapter\n\nHow should state change in response to the sources you just created? Is this state pattern something you have seen before? Try to reuse state adapters where possible, but if you can't, create a new adapter to handle those state changes.\n\nState changes are the place you want to handle discrepancies between the structure of data emitted from sources and how you want your state to be shaped. Do not let sources dictate the shape of your state if there is a conflict between what makes sense and what just happens when you dump the source payloads into the state. Your state shape should be clear, minimal and performant for selectors to access.\n\n### 3. Create a store\n\nDefine the initial state and create a store with the adapter.\n\n### 4. Make selectors (if needed)\n\nDefine selectors in the adapter to maximize convenience for consumers. Selectors are the perfect place to create the exact data shape the consumers want. For example, if the state needs to end up in a template, consider creating a selector that maps the state into the most convenient structure to be consumed by HTML. Always try to put logic in adapters, because they are collections of pure functions, which are extremely nice to test and reuse. Pulling synchronous code out of RxJS pipes also makes it easier to follow the asynchronous logic.\n\nYou can also [combine selectors between stores](/concepts/stores#joining-stores) if needed.\n\n### 5. Repeat\n\nRepeat the process.\n\nSome sources require state from other stores. For example, if you are creating a filtered list, you need the filter state in order to make the request to the server for the filtered items. You will probably want to create a selector in the required filter adapter to get the data in the exact format you want.\n\nSome sources need to access state from the same store they will be used in. This creates a circular reference, so the solution is to use [`select`](/concepts/stores#select).\n");

/***/ }),

/***/ "aswG":
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/http/get-catch-http-error.function.ts ***!
  \*****************************************************************/
/*! exports provided: getCatchHttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCatchHttpError", function() { return getCatchHttpError; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _get_http_error_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-http-error.function */ "1wlp");


function getCatchHttpError(type) {
    return (obs$) => obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(Object(_get_http_error_function__WEBPACK_IMPORTED_MODULE_1__["getHttpError"])(type)));
}


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _state_adapt_adapter_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state-adapt/adapter-docs */ "vN7L");
/* harmony import */ var _state_adapt_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state-adapt/core */ "Huv7");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _adapters_adapters_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adapters/adapters-core.component */ "hMDu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "qgc+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "vI0j");
/* harmony import */ var _circuits_circuits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./circuits/circuits.component */ "PIQb");
/* harmony import */ var _concepts_adapters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./concepts/adapters.component */ "l2V/");
/* harmony import */ var _concepts_nav_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./concepts/nav-tile.component */ "Rc8c");
/* harmony import */ var _concepts_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./concepts/overview.component */ "3nkY");
/* harmony import */ var _concepts_sources_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./concepts/sources.component */ "zmJS");
/* harmony import */ var _concepts_stores_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./concepts/stores.component */ "Agjl");
/* harmony import */ var _concepts_thinking_reactively_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./concepts/thinking-reactively.component */ "tY9X");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./content.component */ "RvM8");
/* harmony import */ var _demos_demos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demos/demos.component */ "Itwl");
/* harmony import */ var _get_marked_options_function__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./get-marked-options.function */ "UP67");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "DaB4");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./intro/intro.component */ "s2ym");
var _a, _b;
























const enableReduxDevTools = (_b = (_a = window).__REDUX_DEVTOOLS_EXTENSION__) === null || _b === void 0 ? void 0 : _b.call(_a, {
    actionSanitizer: _state_adapt_core__WEBPACK_IMPORTED_MODULE_4__["actionSanitizer"],
    stateSanitizer: _state_adapt_core__WEBPACK_IMPORTED_MODULE_4__["stateSanitizer"],
});
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: _state_adapt_core__WEBPACK_IMPORTED_MODULE_4__["AdaptCommon"], useValue: Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_4__["createStore"])(enableReduxDevTools) },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["UIShellModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["CheckboxModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["DatePickerModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["TilesModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkedOptions"],
                    useFactory: _get_marked_options_function__WEBPACK_IMPORTED_MODULE_19__["getMarkedOptions"],
                },
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE,
            }),
            _state_adapt_adapter_docs__WEBPACK_IMPORTED_MODULE_3__["AdapterDocsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_21__["IntroComponent"],
        _circuits_circuits_component__WEBPACK_IMPORTED_MODULE_10__["CircuitsComponent"],
        _demos_demos_component__WEBPACK_IMPORTED_MODULE_18__["DemosComponent"],
        _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_20__["GettingStartedComponent"],
        _concepts_nav_tile_component__WEBPACK_IMPORTED_MODULE_12__["NavTileComponent"],
        _concepts_overview_component__WEBPACK_IMPORTED_MODULE_13__["ConceptsOverviewComponent"],
        _concepts_sources_component__WEBPACK_IMPORTED_MODULE_14__["SourcesComponent"],
        _concepts_adapters_component__WEBPACK_IMPORTED_MODULE_11__["AdaptersComponent"],
        _concepts_stores_component__WEBPACK_IMPORTED_MODULE_15__["StoresComponent"],
        _concepts_thinking_reactively_component__WEBPACK_IMPORTED_MODULE_16__["ThinkingReactivelyComponent"],
        _adapters_adapters_core_component__WEBPACK_IMPORTED_MODULE_7__["AdaptersCoreComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["UIShellModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["CheckboxModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["DatePickerModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["TilesModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"], _state_adapt_adapter_docs__WEBPACK_IMPORTED_MODULE_3__["AdapterDocsModule"]] }); })();


/***/ }),

/***/ "hMDu":
/*!***************************************************************!*\
  !*** ./apps/docs/src/app/adapters/adapters-core.component.ts ***!
  \***************************************************************/
/*! exports provided: AdaptersCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersCoreComponent", function() { return AdaptersCoreComponent; });
/* harmony import */ var _create_basic_adapter_docs_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-basic-adapter-docs.const */ "LjoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var _libs_adapter_docs_src_lib_adapter_docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/adapter-docs/src/lib/adapter-docs.component */ "Prt+");




class AdaptersCoreComponent {
    constructor() {
        this.adapterDocs = _create_basic_adapter_docs_const__WEBPACK_IMPORTED_MODULE_0__["createBasicAdapterDocs"];
    }
}
AdaptersCoreComponent.ɵfac = function AdaptersCoreComponent_Factory(t) { return new (t || AdaptersCoreComponent)(); };
AdaptersCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdaptersCoreComponent, selectors: [["state-adapt-adapters-core"]], decls: 4, vars: 1, consts: [[3, "adapterDocs"]], template: function AdaptersCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Core Adapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "state-adapt-adapter-docs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("adapterDocs", ctx.adapterDocs);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _libs_adapter_docs_src_lib_adapter_docs_component__WEBPACK_IMPORTED_MODULE_3__["AdapterDocsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "hgbs":
/*!***************************************************!*\
  !*** ./libs/core/src/lib/mini-store.interface.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "hxUO":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/core/src/lib/create-basic-adapter.function.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { createAdapter } from './create-adapter.function';\n\nexport function createBasicAdapter<T>() {\n  return createAdapter<T>()({});\n}\n");

/***/ }),

/***/ "iZIg":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/concepts/sources.md ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Sources\n\n- [Overview](/concepts/sources#overview)\n- [`toSource`](/concepts/sources#tosource)\n- [`Source`](/concepts/sources#source)\n- [`splitSources`](/concepts/sources#splitsources)\n- [`getAction`](/concepts/sources#getaction)\n- [`getHttpSources`](/concepts/sources#gethttpsources)\n- [One Source Per Event](/concepts/sources#one-source-per-event)\n\n## Overview\n\nSources are where asynchronous data enters applications. Examples are\n\n- user input\n- data arriving from a server\n- a timer completing\n\nThere are 2 types of sources: Sources created from existing observables, and sources created from the [`Source`](/concepts/sources#source) class (similar to RxJS `Subject`).\n\nSources should be named after events, not commands. For example, rather than naming a source `changeName$`, consider naming it `nameChange$` or `nameChanged$`. In reactive programming, data flows in one direction, and giving a source the name of a command puts implicit knowledge about what happens _downstream_ from the source into the source itself. It is a subtle but important change of mindset from traditional, imperative programming.\n\n## `toSource`\n\n[`toSource`](/concepts/sources#tosource) is an observable operator that converts an existing observable into a source. It takes one argument: the action type that will be displayed in Redux Devtools. The only purpose of the action type is to appear in Redux Devtools to help developers understand what is taking place in the application, so you can name it whatever you want.\n\nExample:\n\n```typescript\nimport { timer } from 'rxjs';\nimport { toSource } from '@state-adapt/core';\n\nconst timer$ = timer(3000).pipe(toSource('timer$'));\n```\n\n![Action Type in Redux Devtools](../assets/timer$.png)\n\n(Note: This will not occur until you use the source in a store and subscribe to its state.)\n\nInternally, `toSource` just maps values to action objects that are similar to Redux actions. While you can technically interact with these objects, we discourage doing so, both to encourage reactive patterns and to avoid depending too much on the internal implementation of StateAdapt.\n\n## `Source`\n\nWhen you don't have an observable already, you can use a [`Source`](/concepts/sources#source) the same way you would use an RxJS `Subject`. The most common use case for this is to represent user input in a component:\n\n```html\n<button (click)=\"formSubmission$.next()\">Submit</button>\n```\n\n```typescript\nimport { Source } from '@state-adapt/core';\n// ...\nformSubmission$ = new Source<void>('formSubmission$');\n```\n\nThe argument is the action type that will show up in Redux Devtools.\n\nSimilar to [`toSource`](/concepts/sources#tosource), [`Source`](/concepts/sources#source) wraps values pushed into it in objects similar to Redux actions.\n\n## `splitSources`\n\nSome observables are actually several event types merged together. Although it will depend on how you write your state adapters, you will probably want only one event type per source. You could just `filter` for each event type and then use [`toSource`](/concepts/sources#tosource) on each filtered stream, but StateAdapt provides a [`splitSources`](/concepts/sources#splitsources) function that might help. Here is how it can be used:\n\n```typescript\nimport { Observable } from 'rxjs';\nimport { splitSources } from '@state-adapt/core';\n\nenum MessageType {\n  MESSAGE_1 = 'MESSAGE_1',\n  MESSAGE_2 = 'MESSAGE_2',\n}\n\ninterface Message1 {\n  type: MessageType.MESSAGE_1;\n}\n\ninterface Message2 {\n  type: MessageType.MESSAGE_2;\n  data: string;\n}\n\ntype WebsocketMessage = Message1 | Message2;\n\nconst websocketMessages$: Observable<WebsocketMessage> = of(\n  Math.random() < 0.5\n    ? { type: MessageType.MESSAGE_1 }\n    : { type: MessageType.MESSAGE_2, data: 'asdfasdf' },\n);\n\nconst { message1$, message2$ } = splitSources(websocketMessages$, {\n  message1$: MessageType.MESSAGE_1, // matches against message.type\n  message2$: MessageType.MESSAGE_2,\n});\n\n// Correctly infers the type of message1$ as Observable<Message1>\n// You can now apply toSource to each stream\n```\n\nSince [`splitSources`](/concepts/sources#splitsources) matches against the `type` property of the values emitted from the observable passed into it, you can easily pass in an observable of actual StateAdapt sources and they will come out the other side as sources still. However, when all the messages in the input observable do _not_ fit the StateAdapt/Redux `Action` interface, you will have to use [`toSource`](/concepts/sources#tosource) to convert them, as mentioned in that example.\n\n## `getAction`\n\nThis is a function that takes in 2 arguments (an `actionType` and an optional `payload`) and creates a StateAdapt `Action`. So, in this example `source1$` and `source2$` are equivalent:\n\n```typescript\nimport { of } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport { toSource, getAction } from '@state-adapt/core';\n\nconst obs$ = of(1);\nconst source1$ = obs$.pipe(toSource('source1$'));\nconst source2$ = obs$.pipe(map(n => getAction('source$2', n)));\n```\n\nThis can give you a little more flexibility when creating sources.\n\n## `getHttpSources`\n\nHttp requests are often just used for the single value they emit when they complete. However, if you want to handle the loading state and errors, http requests become a common example of an observable that contains multiple event types in a single observable: `request`, `error` and `success`. getHttpSources uses [`getAction`](/concepts/sources#getaction) and [`splitSources`](/concepts/sources#splitsources) internally to split an http request observable into those 3 common sources. Example usage:\n\n```typescript\nimport { getHttpSources } from '@state-adapt/core';\n\nconst fetchData = () =>\n  timer(2000).pipe(mapTo({ body: 'Some data', status: 200, error: null }));\n\nconst { request$, success$, error$ } = getHttpSources('[Some Data]', fetchData(), res => [\n  res.status === 200,\n  res.body,\n  res.error,\n]);\n```\n\nThere is a lot going on here.\n\nThe first argument is the scope. Whatever you pass in here, [`getHttpSources`](/concepts/sources#gethttpsources) will append `' Request'`, `' Success'` or `' Error'` to the actions that it uses [`getAction`](/concepts/sources#getaction) to create. So if you pass in `'[Some Data]'`, the action types of the sources will be `'[Some Data] Request'`, `'[Some Data] Success'` and `'[Some Data] Error'`.\n\nThe 2nd argument is an observable (the http request).\n\nThe 3rd argument is a function you need to provide that takes in the value emitted by the observable passed in argument 2 and returns an array containing 3 elements:\n\n1. A boolean that is true if the request was successful\n2. The value you want as the payload of the `Success` action\n3. The error message from the response\n\n[`getHttpSources`](/concepts/sources#gethttpsources) also applies a `catchError` RxJS operator and maps it to the `Error` source, so the type emitted by the `Error` source is `string | Err`, where `Err` is whatever you typed it as in your observable.\n\n## One Source Per Event\n\n### No Multiple Sources\n\nIn reactive programming, data flows in one direction, so each source represents a single kind of event. Rather than handling an event in a callback function, you should directly push the event into a single source and handle downstream effects in the affected features themselves.\n\nBad example:\n\n```html\n<!-- DO NOT DO THIS -->\n<button (click)=\"onFormSubmit()\">Submit</button>\n```\n\n```typescript\nimport { Source } from '@state-adapt/core';\n// ... DO NOT DO THIS\nsubmitForm$ = new Source<FormData>('submitForm$');\nresetForm$ = new Source<void>('resetForm$');\n// ... DO NOT DO THIS\nonFormSubmit() {\n  this.submitForm$.next(this.form.value);\n  this.resetForm$.next();\n}\n```\n\nGood example:\n\n```html\n<!-- DO THIS -->\n<button (click)=\"formSubmission$.next()\">Submit</button>\n```\n\n```typescript\nimport { Source } from '@state-adapt/core';\n// ... DO THIS\nformSubmission$ = new Source<void>('formSubmission$'); // or formSubmitted$\n```\n\nThere might be numerous states that are impacted by a single event. You should still only create a single source for this event and handle downstream effects in the affected features themselves.\n\nInternally, StateAdapt checks each source you pass into the `init` method to see if you have passed it into the `init` method at any time before. If you have, it doesn't subscribe to the same source again; it just adds its state changes to the list of state changes to apply whenever the first source emits.\n\nThe benefit of doing it this way is that you only see one action dispatched in Redux Devtools for each event that occurs in the app, even if dozens of stores are listening to it. They all get piled onto the same action for Redux Devtools.\n\nThe drawback is rare, but it does occur: Since we only subscribe to the first observable, cold observables like those created from `of` and `timer` that you would expect to fire for each individual store that uses them will actually only fire for the first store that uses that exact observable reference. The solution? Just create a new reference for each store that uses it. This can be achieved either through a factory function, such as `getTimer = () => timer(5000)`, or by wrapping the reference in a `defer()` when passing it into another store (simply calling `.pipe()` on an observable doesn't seem to create a new reference, so that doesn't work). There might be a more clever workaround, but these work.\n\nThis situation is rare and the benefits from having 1 action in Redux Devtools per event is well worth this drawback. But it is good to know about so you can deal with it when you come across it.\n\n### No Multiple Events\n\nOne of StateAdapt's core aims is to maximize reusability of state management patterns. This is good, but when it comes to sources, it can be easy to go a little too far. State adapters have no opinion on what sources are going to cause their state changes, and this is intentional. The responsibility to define these sources lies with the consumers of these adapters, because there may be multiple stores that need to react to those same sources. If sources were provided with each adapter, developers would be tempted to use them all and just call `.next()` on each of them for single events, which is the problem discussed in [No Multiple Sources](/concepts/sources#no-multiple-sources). In other words, providing sources that can be reused across multiple event types/origins can lead to imperatively updating multiple sources in response to single events.\n\nWhen looking at Redux Devtools you want to be able to understand exactly which sources actions are coming from. If you do end up creating utility methods for generating sources (like [`getHttpSources`](/concepts/sources#gethttpsources)) make sure you are able to accept a scope to prepend to each source type. Refer to [`getHttpSources`](/concepts/sources#gethttpsources) as an example.\n\n[Mike Ryan's talk on good action hygene](https://www.youtube.com/watch?v=JmnsEvoy-gY) applies to StateAdapt sources.\n\nIt is generally safer to define sources as close as possible to where the events themselves are emitted from. For example, if you are creating a source for a button click, you should prefer defining it right in the same component as the button itself, or at least a service that is dedicated to that component.\n");

/***/ }),

/***/ "jPLm":
/*!**********************************************************!*\
  !*** ./libs/adapter-docs/src/lib/adapter-docs.module.ts ***!
  \**********************************************************/
/*! exports provided: AdapterDocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterDocsModule", function() { return AdapterDocsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngstack/code-editor */ "KjtJ");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _adapter_docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapter-docs.component */ "Prt+");









class AdapterDocsModule {
}
AdapterDocsModule.ɵfac = function AdapterDocsModule_Factory(t) { return new (t || AdapterDocsModule)(); };
AdapterDocsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdapterDocsModule });
AdapterDocsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["StructuredListModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TilesModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
            carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["InputModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot({
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE,
            }),
            _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_2__["CodeEditorModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdapterDocsModule, { declarations: [_adapter_docs_component__WEBPACK_IMPORTED_MODULE_5__["AdapterDocsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["StructuredListModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TilesModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
        carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["InputModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_2__["CodeEditorModule"]], exports: [_adapter_docs_component__WEBPACK_IMPORTED_MODULE_5__["AdapterDocsComponent"]] }); })();


/***/ }),

/***/ "k/5l":
/*!********************************************************!*\
  !*** ./libs/core/src/lib/create-selectors.function.ts ***!
  \********************************************************/
/*! exports provided: createSelectorsFn, createSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorsFn", function() { return createSelectorsFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
function createSelectorsFn([selectors1, ...args]) {
    return args.reduce((selectors, newSelectors) => combineSelectors()(selectors, newSelectors), Object.assign(Object.assign({}, selectors1), { state: (state) => state }));
}
function createSelectors() {
    return (...args) => {
        return createSelectorsFn(args);
    };
}
function combineSelectors() {
    return (selectors, newSelectors = {}) => {
        let latestState;
        let inputResults = {};
        let previousInputResults = {};
        const selectorInputs = {};
        const results = {};
        const newStateSelectors = Object.entries(newSelectors).reduce((all, [name, fn]) => (Object.assign(Object.assign({}, all), { [name]: (s) => {
                if (s !== latestState) {
                    latestState = s;
                    previousInputResults = inputResults;
                    inputResults = {};
                }
                selectorInputs[name] = selectorInputs[name] || new Set();
                const selectorInputNames = [
                    ...selectorInputs[name],
                ];
                // If no inputs, just call fn again
                // If all inputs so far record the same results, the final result will be the same (selectors are deterministic)
                const sameInputResults = !!selectorInputNames.length &&
                    selectorInputNames.every(inputName => {
                        if (inputResults[inputName] === undefined) {
                            inputResults[inputName] = selectors[inputName](s);
                        }
                        return previousInputResults[inputName] === inputResults[inputName];
                    });
                if (sameInputResults) {
                    if (results[name] === undefined) {
                        results[name] = fn(inputResults);
                    }
                    return results[name];
                }
                //   Pass existing inputResults into fn with proxy to watch for additional input selectors being accessed
                //     (In proxy handler set each cachedInputResult and add to selectorInputNames as needed)
                //   Set and return cachedResult
                const handler = {
                    get: function (target, prop) {
                        var _a;
                        (_a = selectorInputs[name]) === null || _a === void 0 ? void 0 : _a.add(prop);
                        const inputResult = target[prop];
                        if (inputResult === undefined) {
                            target[prop] = selectors[prop](s);
                        }
                        return target[prop];
                    },
                };
                const proxy = new Proxy(inputResults, handler);
                const result = fn(proxy);
                results[name] = result;
                return result;
            } })), {});
        return Object.assign(Object.assign({}, selectors), newStateSelectors);
    };
}


/***/ }),

/***/ "kzTs":
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/split-sources.function.ts ***!
  \*****************************************************/
/*! exports provided: splitSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitSources", function() { return splitSources; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

function splitSources(obs$, partitions) {
    return Object.entries(partitions).reduce((sources, [name, type]) => (Object.assign(Object.assign({}, sources), { [name]: obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(val => val.type === type)) })), {});
}


/***/ }),

/***/ "l2V/":
/*!**********************************************************!*\
  !*** ./apps/docs/src/app/concepts/adapters.component.ts ***!
  \**********************************************************/
/*! exports provided: AdaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersComponent", function() { return AdaptersComponent; });
/* harmony import */ var raw_loader_adapters_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./adapters.md */ "wQPa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tile.component */ "Rc8c");





class AdaptersComponent {
    constructor() {
        this.md = raw_loader_adapters_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
AdaptersComponent.ɵfac = function AdaptersComponent_Factory(t) { return new (t || AdaptersComponent)(); };
AdaptersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdaptersComponent, selectors: [["state-adapt-adapters"]], decls: 6, vars: 2, consts: [[3, "data"], ["link", "/concepts/sources"], ["link", "/concepts/stores", 3, "right"]], template: function AdaptersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "state-adapt-nav-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "state-adapt-nav-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("right", true);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__["NavTileComponent"]], encapsulation: 2 });


/***/ }),

/***/ "laVA":
/*!********************************************!*\
  !*** ./libs/core/src/lib/adapt.actions.ts ***!
  \********************************************/
/*! exports provided: adaptType, isPatchState, createPatchState, createInit, createDestroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adaptType", function() { return adaptType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPatchState", function() { return isPatchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPatchState", function() { return createPatchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInit", function() { return createInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDestroy", function() { return createDestroy; });
const adaptType = 'Adapt';
function isPatchState(action) {
    return action.type === adaptType;
}
function createPatchState(source, payload) {
    return {
        type: adaptType,
        source,
        payload,
    };
}
function createInit(path, initialState) {
    return createPatchState({ type: `INIT ${path}` }, [
        [path.split('.'), initialState],
    ]);
}
function createDestroy(path) {
    return createPatchState({ type: `DESTROY ${path}` }, [
        [path.split('.'), undefined],
    ]);
}


/***/ }),

/***/ "lbYg":
/*!************************************************************!*\
  !*** ./libs/core/src/lib/second-parameter-or-void.type.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "nZ6C":
/*!***************************************************!*\
  !*** ./libs/adapter-docs/src/lib/docs.adapter.ts ***!
  \***************************************************/
/*! exports provided: docsAdapter, docsUiAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docsAdapter", function() { return docsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docsUiAdapter", function() { return docsUiAdapter; });
/* harmony import */ var _state_adapt_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state-adapt/core */ "Huv7");
/* harmony import */ var _adapter_docs_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter-docs-state.interface */ "0A9v");
/* harmony import */ var _get_diff_html_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-diff-html.function */ "8y52");



function wrapInTs(code) {
    return '```typescript\n' + code + '\n```';
}
function getListItem(selectedName) {
    return (name, i) => ({
        content: name,
        selected: selectedName ? name === selectedName : i === 0,
    });
}
const selectors = Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["createSelectors"])()({
    adapterStateChangeItems: s => s.docs.demoAdapter.value
        ? Object.keys(s.docs.demoAdapter.value)
            .filter(prop => prop !== 'selectors')
            .map(getListItem(s.selectedStateChange))
        : [],
    adapterSelectorItems: s => {
        var _a;
        return (((_a = s.docs.demoAdapter.value) === null || _a === void 0 ? void 0 : _a.selectors) ? Object.keys(s.docs.demoAdapter.value.selectors)
            : []).map(getListItem(s.selectedSelector));
    },
    adapterStateChanges: s => s.docs.demoAdapter.stateChanges,
    adapterSelectors: s => s.docs.demoAdapter.selectors,
    userSelectedStateChangeName: s => s.selectedStateChange,
    userSelectedSelectorName: s => s.selectedSelector,
    demoHistory: s => s.demoHistory,
    demoState: s => s.demoState,
    initialDemoState: s => s.docs.demoAdapter.initialState,
    userPayload: s => s.payload,
    docs: s => s.docs,
    creatorSourceCodeMd: s => wrapInTs(s.docs.sourceCode),
    demoSourceCodeMd: s => wrapInTs(s.docs.demoAdapter.sourceCode),
    parameters: s => s.docs.parameters,
    payloadEditorRefreshRequired: s => s.payloadEditorRefreshRequired,
}, {
    firstStateChangeName: s => { var _a; return (_a = s.adapterStateChangeItems[0]) === null || _a === void 0 ? void 0 : _a.content; },
    firstSelectorName: s => { var _a; return (_a = s.adapterSelectorItems[0]) === null || _a === void 0 ? void 0 : _a.content; },
    selectedHistoryItem: s => s.demoHistory.find(item => item.selected) || null,
    lastHistoryItem: s => s.demoHistory[s.demoHistory.length - 1],
    demoStateOrInitial: s => s.demoState === _adapter_docs_state_interface__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"] ? s.initialDemoState : s.demoState,
}, {
    selectedStateChangeName: s => s.userSelectedStateChangeName || s.firstStateChangeName,
    selectedSelectorName: s => s.userSelectedSelectorName || s.firstSelectorName,
    selectedOrLastHistoryItem: s => s.selectedHistoryItem || s.lastHistoryItem,
    selectedHistoryItemPayload: s => { var _a; return (_a = s.selectedHistoryItem) === null || _a === void 0 ? void 0 : _a.inputs.payload; },
}, {
    selectedStateChange: s => s.adapterStateChanges[s.selectedStateChangeName],
    selectedSelector: s => s.adapterSelectors[s.selectedSelectorName] || {
        documentation: 'Returns state',
    },
    diffState: ({ selectedOrLastHistoryItem: item, demoStateOrInitial: state }) => !item ? [null, state] : [item.inputs.state, item.state],
}, {
    diffStateAndSelectorName: s => [s.diffState, s.selectedSelectorName],
    payload: s => { var _a; return s.selectedHistoryItemPayload || s.userPayload || ((_a = s.selectedStateChange) === null || _a === void 0 ? void 0 : _a.demoPayload); },
}, {
    demoStateAndPayload: s => ({
        state: s.demoStateOrInitial,
        payload: s.payload,
        initialState: s.initialDemoState,
        stateChangeName: s.selectedStateChangeName,
    }),
    payloadCodeModel: s => ({
        language: 'json',
        uri: 'main.json',
        value: s.payload && Object(_get_diff_html_function__WEBPACK_IMPORTED_MODULE_2__["toJson"])(JSON.parse(s.payload)),
    }),
});
const docsAdapter = Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["createAdapter"])()({
    receiveDocs: (state, docs) => (Object.assign(Object.assign({}, state), { docs })),
    selectStateChange: (state, stateChangeName) => {
        const selectionChanged = selectors.selectedStateChangeName(state) !== stateChangeName;
        return Object.assign(Object.assign({}, state), { selectedStateChange: stateChangeName, payloadEditorRefreshRequired: selectionChanged, payload: selectionChanged ? '' : state.payload });
    },
    resetEditorRefresh: state => (Object.assign(Object.assign({}, state), { payloadEditorRefreshRequired: false })),
    setPayload: (state, payload) => (Object.assign(Object.assign({}, state), { payload })),
    setDemoState: (state, demoState) => (Object.assign(Object.assign({}, state), { demoHistory: [
            ...state.demoHistory,
            {
                inputs: selectors.demoStateAndPayload(state),
                state: demoState,
                selected: false,
            },
        ], demoState })),
    selectHistoryItem: (state, index) => (Object.assign(Object.assign({}, state), { demoHistory: state.demoHistory.map((item, i) => (Object.assign(Object.assign({}, item), { selected: i === index }))) })),
    selectSelector: (state, selectedSelector) => (Object.assign(Object.assign({}, state), { selectedSelector })),
    selectors,
});
const docsUiAdapter = Object(_state_adapt_core__WEBPACK_IMPORTED_MODULE_0__["createAdapter"])()(Object.assign(Object.assign({}, docsAdapter), { selectStateChange: (state, { item }) => docsAdapter.selectStateChange(state, item.content), selectStateChangeFromHistory: (state, selection) => {
        const historyItem = state.demoHistory.find((item, i) => i === +selection.value);
        return docsAdapter.selectStateChange(state, (historyItem === null || historyItem === void 0 ? void 0 : historyItem.inputs.stateChangeName) || '');
    }, selectHistoryItem: (state, selection) => docsAdapter.selectHistoryItem(state, +((selection === null || selection === void 0 ? void 0 : selection.value) || '-1')), selectSelector: (state, { item }) => docsAdapter.selectSelector(state, item.content) }));


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
/* harmony import */ var _concepts_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concepts/overview.component */ "3nkY");
/* harmony import */ var _concepts_sources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concepts/sources.component */ "zmJS");
/* harmony import */ var _concepts_adapters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concepts/adapters.component */ "l2V/");
/* harmony import */ var _demos_demos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demos.component */ "Itwl");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "DaB4");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "s2ym");
/* harmony import */ var _concepts_stores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./concepts/stores.component */ "Agjl");
/* harmony import */ var _concepts_thinking_reactively_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./concepts/thinking-reactively.component */ "tY9X");
/* harmony import */ var _adapters_adapters_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adapters/adapters-core.component */ "hMDu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");












const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
    },
    // {
    //   path: 'dashboards',
    //   loadChildren: () =>
    //     import('@state-adapt/dashboards-feature').then(
    //       m => m.DashboardsFeatureRoutingModule,
    //     ),
    // },
    {
        path: 'getting-started',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_5__["GettingStartedComponent"],
    },
    {
        path: 'demos',
        component: _demos_demos_component__WEBPACK_IMPORTED_MODULE_4__["DemosComponent"],
    },
    {
        path: 'dashboards',
        loadChildren: () => __webpack_require__.e(/*! import() | state-adapt-dashboards-feature */ "state-adapt-dashboards-feature").then(__webpack_require__.bind(null, /*! @state-adapt/dashboards-feature */ "y/7n")).then(m => m.DashboardsFeatureRoutingModule),
    },
    {
        path: 'concepts',
        children: [
            {
                path: 'overview',
                component: _concepts_overview_component__WEBPACK_IMPORTED_MODULE_1__["ConceptsOverviewComponent"],
            },
            {
                path: 'sources',
                component: _concepts_sources_component__WEBPACK_IMPORTED_MODULE_2__["SourcesComponent"],
            },
            {
                path: 'adapters',
                component: _concepts_adapters_component__WEBPACK_IMPORTED_MODULE_3__["AdaptersComponent"],
            },
            {
                path: 'stores',
                component: _concepts_stores_component__WEBPACK_IMPORTED_MODULE_7__["StoresComponent"],
            },
            {
                path: 'thinking-reactively',
                component: _concepts_thinking_reactively_component__WEBPACK_IMPORTED_MODULE_8__["ThinkingReactivelyComponent"],
            },
        ],
    },
    {
        path: 'adapters/:adapterName',
        component: _adapters_adapters_core_component__WEBPACK_IMPORTED_MODULE_9__["AdaptersCoreComponent"],
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
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                scrollOffset: [0, 50],
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! carbon-components-angular */ "aUa+");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");







class IntroComponent {
    constructor() {
        this.secondary = false;
        this.md = raw_loader_intro_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["state-adapt-intro"]], decls: 28, vars: 1, consts: [[1, "banner"], [1, "banner-content-container"], [1, "logo-line"], ["src", "../assets/sa-9-7.svg", "id", "main-logo"], ["id", "main-logo-shadow"], ["id", "state"], ["id", "adapt"], ["href", "#minimal"], [1, "bullet-adapter"], [0, "xlink", "href", "#adapter"], ["href", "#reactive"], ["href", "#reusable"], [1, "getting-started-container"], ["routerLink", "/getting-started", 1, "getting-started"], ["ibmButton", "secondary", "id", "get-started", 3, "mouseenter", "mouseleave"], [1, "content"], [3, "data"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function IntroComponent_Template_button_mouseenter_23_listener() { return ctx.secondary = true; })("mouseleave", function IntroComponent_Template_button_mouseleave_23_listener() { return ctx.secondary = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "markdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
    } }, directives: [_circuits_circuits_component__WEBPACK_IMPORTED_MODULE_2__["CircuitsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_4__["Button"], _content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  background-color: #1a1a1a;\n  min-height: 56vw;\n  height: 56vw;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 8px solid #00b8a4;\n}\n\n.banner-content-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin-top: 8.4vw;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  width: 78.75vw;\n  left: 0;\n  right: 0;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 1.1666666667vw;\n  font-size: 12.25vw;\n  font-weight: 500;\n  color: #00b8a4;\n  float: left;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n  margin-left: 17.0333333333vw;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #adapt[_ngcontent-%COMP%] {\n  font-family: \"Alegreya Sans\";\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  left: 2.3333333333vw;\n  width: 14vw;\n  z-index: 1000;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.6666666667vw;\n  top: 3.5vw;\n  width: 9.3333333333vw;\n  padding-top: 9.3333333333vw;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #00b8a4;\n  position: absolute;\n  margin-top: 18.2vw;\n  width: 100%;\n  font-size: 4.375vw;\n  text-align: center;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f4f4f4;\n  text-decoration: none;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n  stroke: #00b8a4;\n  fill: #00b8a4;\n  opacity: 1;\n  width: 0.3em;\n  height: 0.3em;\n  margin: 0 0.3em 0.2em;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 28vw;\n  text-align: center;\n  font-size: 2vw;\n  padding: 1.2760416667vw;\n  min-height: 0;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: none;\n  height: 0;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n  background-color: #e01d84;\n}\n\n.banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n  background-color: #5d2f88;\n}\n\n@media screen and (min-width: 800px) {\n  .banner[_ngcontent-%COMP%] {\n    background-color: #1a1a1a;\n    min-height: 44vw;\n    height: 44vw;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 8px solid #00b8a4;\n  }\n\n  .banner-content-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    margin-top: 6.6vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    width: 61.875vw;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.9166666667vw;\n    font-size: 9.625vw;\n    font-weight: 500;\n    color: #00b8a4;\n    float: left;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n    margin-left: 13.3833333333vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #adapt[_ngcontent-%COMP%] {\n    font-family: \"Alegreya Sans\";\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    left: 1.8333333333vw;\n    width: 11vw;\n    z-index: 1000;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 3.6666666667vw;\n    top: 2.75vw;\n    width: 7.3333333333vw;\n    padding-top: 7.3333333333vw;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.25);\n    box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #00b8a4;\n    position: absolute;\n    margin-top: 14.3vw;\n    width: 100%;\n    font-size: 3.4375vw;\n    text-align: center;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #f4f4f4;\n    text-decoration: none;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n    stroke: #00b8a4;\n    fill: #00b8a4;\n    opacity: 1;\n    width: 0.3em;\n    height: 0.3em;\n    margin: 0 0.3em 0.2em;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 22vw;\n    text-align: center;\n    font-size: 1.5714285714vw;\n    padding: 1.0026041667vw;\n    min-height: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%] {\n    text-align: center;\n    text-decoration: none;\n    height: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n    background-color: #e01d84;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n    background-color: #5d2f88;\n  }\n}\n\n@media screen and (min-width: 1100px) {\n  .banner[_ngcontent-%COMP%] {\n    background-color: #1a1a1a;\n    min-height: 36vw;\n    height: 36vw;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 8px solid #00b8a4;\n  }\n\n  .banner-content-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    margin-top: 5.4vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    width: 50.625vw;\n    left: 0;\n    right: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.75vw;\n    font-size: 7.875vw;\n    font-weight: 500;\n    color: #00b8a4;\n    float: left;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%] {\n    margin-left: 10.95vw;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #state[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #adapt[_ngcontent-%COMP%] {\n    font-family: \"Alegreya Sans\";\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    left: 1.5vw;\n    width: 9vw;\n    z-index: 1000;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .logo-line[_ngcontent-%COMP%]   #main-logo-shadow[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 3vw;\n    top: 2.25vw;\n    width: 6vw;\n    padding-top: 6vw;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.25);\n    box-shadow: 0 0.5vw 1.5vw 1.5vw rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #00b8a4;\n    position: absolute;\n    margin-top: 11.7vw;\n    width: 100%;\n    font-size: 2.8125vw;\n    text-align: center;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #f4f4f4;\n    text-decoration: none;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%] {\n    stroke: #00b8a4;\n    fill: #00b8a4;\n    opacity: 1;\n    width: 0.3em;\n    height: 0.3em;\n    margin: 0 0.3em 0.2em;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bullet-adapter[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 18vw;\n    text-align: center;\n    font-size: 1.2857142857vw;\n    padding: 0.8203125vw;\n    min-height: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%] {\n    text-align: center;\n    text-decoration: none;\n    height: 0;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:link   #get-started[_ngcontent-%COMP%], .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:visited   #get-started[_ngcontent-%COMP%] {\n    background-color: #e01d84;\n  }\n  .banner-content-container[_ngcontent-%COMP%]   .getting-started-container[_ngcontent-%COMP%]   a.getting-started[_ngcontent-%COMP%]:hover   #get-started[_ngcontent-%COMP%] {\n    background-color: #5d2f88;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFyQlM7QUFPYjs7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFkTjs7QUFnQk07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWRSOztBQWdCTTtFQUNFLDRCQUFBO0FBZFI7O0FBZ0JNOztFQUVFLDRCQUFBO0FBZFI7O0FBZ0JNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBOUNNO0VBK0NOLFdBcUVzQjtFQXBFdEIsYUFwREM7QUFzQ1Q7O0FBZ0JNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFyRGM7RUFzRGQsMkJBdERjO0VBdURkLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esa0JBQUE7QUFkUjs7QUFrQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaEJOOztBQWlCTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQWZSOztBQWlCTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFmUjs7QUFnQlE7RUFDRSxVQUFBO0FBZFY7O0FBa0JJO0VBQ0UsZ0JBcEZTO0VBcUZULGtCQUFBO0VBQ0EsY0FyRmU7RUFzRmYsdUJBckZhO0VBc0ZiLGFBQUE7QUFoQk47O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBaEJOOztBQWlCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBZlI7O0FBa0JVO0VBQ0UseUJBQUE7QUFoQlo7O0FBb0JVO0VBQ0UseUJBQUE7QUFsQlo7O0FBMkJBO0VBN0dFO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7RUFzRkY7O0VBbkZBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBckJTO0VBMkdYO0VBcEZFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0VBc0ZKO0VBcEZJO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7RUFzRk47RUFwRkk7SUFDRSw0QkFBQTtFQXNGTjtFQXBGSTs7SUFFRSw0QkFBQTtFQXNGTjtFQXBGSTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLG9CQTlDTTtJQStDTixXQXVFd0I7SUF0RXhCLGFBcERDO0VBMElQO0VBcEZJO0lBQ0Usa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFyRGM7SUFzRGQsMkJBdERjO0lBdURkLFlBQUE7SUFDQSxxQ0FBQTtJQUNBLG1EQUFBO0lBQ0Esa0JBQUE7RUFzRk47RUFsRkU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBb0ZKO0VBbkZJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VBcUZOO0VBbkZJO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQXFGTjtFQXBGTTtJQUNFLFVBQUE7RUFzRlI7RUFsRkU7SUFDRSxnQkFwRlM7SUFxRlQsa0JBQUE7SUFDQSx5QkFyRmU7SUFzRmYsdUJBckZhO0lBc0ZiLGFBQUE7RUFvRko7RUFsRkU7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7RUFvRko7RUFuRkk7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsU0FBQTtFQXFGTjtFQWxGUTtJQUNFLHlCQUFBO0VBb0ZWO0VBaEZRO0lBQ0UseUJBQUE7RUFrRlY7QUFDRjs7QUF2RUE7RUFoSEU7SUFDRSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQ0FBQTtFQTBMRjs7RUF2TEE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFyQlM7RUErTVg7RUF4TEU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUEwTEo7RUF4TEk7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtFQTBMTjtFQXhMSTtJQUNFLG9CQUFBO0VBMExOO0VBeExJOztJQUVFLDRCQUFBO0VBMExOO0VBeExJO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0E5Q007SUErQ04sVUEwRXdCO0lBekV4QixhQXBEQztFQThPUDtFQXhMSTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxVQXJEYztJQXNEZCxnQkF0RGM7SUF1RGQsWUFBQTtJQUNBLHFDQUFBO0lBQ0EsbURBQUE7SUFDQSxrQkFBQTtFQTBMTjtFQXRMRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUF3TEo7RUF2TEk7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUF5TE47RUF2TEk7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0VBeUxOO0VBeExNO0lBQ0UsVUFBQTtFQTBMUjtFQXRMRTtJQUNFLGdCQXBGUztJQXFGVCxrQkFBQTtJQUNBLHlCQXJGZTtJQXNGZixvQkFyRmE7SUFzRmIsYUFBQTtFQXdMSjtFQXRMRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtFQXdMSjtFQXZMSTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxTQUFBO0VBeUxOO0VBdExRO0lBQ0UseUJBQUE7RUF3TFY7RUFwTFE7SUFDRSx5QkFBQTtFQXNMVjtBQUNGIiwiZmlsZSI6ImludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCBcIkBjYXJib24vdGhlbWVzL3Njc3MvdGhlbWVzXCI7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWUnO1xuXG4kbG9nby16OiAxMDAwO1xuXG5AbWl4aW4gc3R5bGluZygkbG9nby13aWR0aCkge1xuICAkbG9nby10b3A6ICRsb2dvLXdpZHRoICogMy81O1xuICAkbG9nby1sZWZ0OiAkbG9nby13aWR0aC82O1xuICAkbG9nby1zaGFkb3ctd2lkdGg6IDIgKiAkbG9nby13aWR0aC8zO1xuXG4gICRidXR0b24tdG9wOiAkbG9nby13aWR0aCAqIDI7XG4gICRidXR0b24tZm9udC1zaXplOiAkbG9nby13aWR0aCAvIDc7XG4gICRidXR0b24tcGFkZGluZzogJGxvZ28td2lkdGggKiA1LzMyICogNy8xMjtcbiAgJGJ1dHRvbi1oZWlnaHQ6ICRidXR0b24tZm9udC1zaXplICogMS40ICsgJGJ1dHRvbi1wYWRkaW5nICogMjsgLy8gTm90IHVzZWQgb24gYnV0dG9uXG5cbiAgLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgdWktMDFiKTtcbiAgICBtaW4taGVpZ2h0OiAkbG9nby13aWR0aCAqIDQ7XG4gICAgaGVpZ2h0OiAkbG9nby13aWR0aCAqIDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIGJyYW5kLTAxKTtcbiAgfVxuXG4gIC5iYW5uZXItY29udGVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAkbG9nby10b3A7XG5cbiAgICAubG9nby1saW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHdpZHRoOiAkbG9nby13aWR0aCAqIDQ1Lzg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJGxvZ28td2lkdGgvMTI7XG4gICAgICAgIGZvbnQtc2l6ZTogJGxvZ28td2lkdGggKiA3Lzg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjYXJib24tLXRoZW1lLCBicmFuZC0wMSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgI3N0YXRlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRsb2dvLWxlZnQgKyAkbG9nby13aWR0aCAqIDEuMDU7XG4gICAgICB9XG4gICAgICAjc3RhdGUsXG4gICAgICAjYWRhcHQge1xuICAgICAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMnO1xuICAgICAgfVxuICAgICAgI21haW4tbG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6ICRsb2dvLWxlZnQ7XG4gICAgICAgIHdpZHRoOiAkbG9nby13aWR0aDtcbiAgICAgICAgei1pbmRleDogJGxvZ28tejtcbiAgICAgIH1cbiAgICAgICNtYWluLWxvZ28tc2hhZG93IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAkbG9nby1sZWZ0ICsgJGxvZ28td2lkdGgvMiAtICRsb2dvLXNoYWRvdy13aWR0aC8yO1xuICAgICAgICB0b3A6ICRsb2dvLXdpZHRoLzQ7XG4gICAgICAgIHdpZHRoOiAkbG9nby1zaGFkb3ctd2lkdGg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAkbG9nby1zaGFkb3ctd2lkdGg7XG4gICAgICAgIHotaW5kZXg6ICRsb2dvLXogLSAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICMwMDAsICRhbW91bnQ6IDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXZ3IDEuNXZ3IDEuNXZ3IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMCwgJGFtb3VudDogMC43NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYnJhbmQtMDEpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogJGxvZ28td2lkdGggKiAxLjM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogJGxvZ28td2lkdGggKiA1LzE2O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjYXJib24tLXRoZW1lLCB0ZXh0LTAxKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmJ1bGxldC1hZGFwdGVyIHtcbiAgICAgICAgc3Ryb2tlOiBtYXAtZ2V0KCRjYXJib24tLXRoZW1lLCBicmFuZC0wMSk7XG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIGJyYW5kLTAxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgd2lkdGg6IDAuM2VtO1xuICAgICAgICBoZWlnaHQ6IDAuM2VtO1xuICAgICAgICBtYXJnaW46IDAgMC4zZW0gMC4yZW07XG4gICAgICAgIC5hZGFwdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAkYnV0dG9uLXRvcDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogJGJ1dHRvbi1mb250LXNpemU7XG4gICAgICBwYWRkaW5nOiAkYnV0dG9uLXBhZGRpbmc7XG4gICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbiAgICAuZ2V0dGluZy1zdGFydGVkLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhLmdldHRpbmctc3RhcnRlZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICY6bGluayxcbiAgICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgICAjZ2V0LXN0YXJ0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY2FyYm9uLS10aGVtZSwgYWNjZW50LTAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgI2dldC1zdGFydGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNhcmJvbi0tdGhlbWUsIGFjY2VudC0wMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHN0eWxpbmcoJGxvZ28td2lkdGg6IDE0dncpO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1lZGl1bS1zY3JlZW4pIHtcbiAgQGluY2x1ZGUgc3R5bGluZygkbG9nby13aWR0aDogMTF2dyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbGFyZ2Utc2NyZWVuKSB7XG4gIEBpbmNsdWRlIHN0eWxpbmcoJGxvZ28td2lkdGg6IDl2dyk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "seTn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/adapters/basic.adapter.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { createBasicAdapter } from '@state-adapt/core';\n\ninterface DemoState {\n  prop1: string;\n  prop2: string;\n}\n\nexport const basicAdapter = createBasicAdapter<DemoState>();\n");

/***/ }),

/***/ "tY9X":
/*!*********************************************************************!*\
  !*** ./apps/docs/src/app/concepts/thinking-reactively.component.ts ***!
  \*********************************************************************/
/*! exports provided: ThinkingReactivelyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThinkingReactivelyComponent", function() { return ThinkingReactivelyComponent; });
/* harmony import */ var raw_loader_thinking_reactively_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./thinking-reactively.md */ "a+sU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tile.component */ "Rc8c");





class ThinkingReactivelyComponent {
    constructor() {
        this.md = raw_loader_thinking_reactively_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
ThinkingReactivelyComponent.ɵfac = function ThinkingReactivelyComponent_Factory(t) { return new (t || ThinkingReactivelyComponent)(); };
ThinkingReactivelyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThinkingReactivelyComponent, selectors: [["state-adapt-thinking-reactively"]], decls: 4, vars: 1, consts: [[3, "data"], ["link", "/concepts/stores"]], template: function ThinkingReactivelyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "state-adapt-nav-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__["NavTileComponent"]], encapsulation: 2 });


/***/ }),

/***/ "u5v1":
/*!****************************************************!*\
  !*** ./libs/core/src/lib/update-paths.function.ts ***!
  \****************************************************/
/*! exports provided: updatePaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaths", function() { return updatePaths; });
function updatePaths(oldState, updates) {
    let newValEntry;
    const nextLevelUpdatedState = updates.reduce((stateWithUpdates, [remainingPath, newVal]) => {
        const nextSegment = (remainingPath[0] || '');
        const otherUpdatesForSegment = stateWithUpdates[nextSegment];
        // There can only be one empty remaining path at each level. That gets assigned to the '' property.
        if (!nextSegment) {
            newValEntry = [[], newVal];
            return stateWithUpdates;
        }
        return Object.assign(Object.assign({}, stateWithUpdates), { [nextSegment]: otherUpdatesForSegment
                ? [...otherUpdatesForSegment, [remainingPath.slice(1), newVal]]
                : [[remainingPath.slice(1), newVal]] });
    }, {});
    const wasObject = getIsObject(oldState);
    return newValEntry
        ? newValEntry[1]
        : Object.entries(nextLevelUpdatedState).reduce((state, [prop, childUpdates]) => (Object.assign(Object.assign({}, (state || {})), { [prop]: updatePaths((state || {})[prop] || {}, childUpdates) })), (wasObject ? oldState : {}));
}
function getIsObject(thing) {
    return typeof thing === 'object' && !Array.isArray(thing);
}


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








function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "StateAdapt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function AppComponent_ng_container_5_ibm_sidenav_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navigation", function AppComponent_ng_container_5_ibm_sidenav_item_1_Template_ibm_sidenav_item_navigation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.navigate(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, link_r3.route))("active", link_r3.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](link_r3.name);
} }
function AppComponent_ng_container_5_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navigation", function AppComponent_ng_container_5_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template_ibm_sidenav_item_navigation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r11.navigate(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childLink_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, childLink_r10.route))("active", childLink_r10.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childLink_r10.name);
} }
function AppComponent_ng_container_5_ibm_sidenav_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-sidenav-menu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_5_ibm_sidenav_menu_2_ibm_sidenav_item_1_Template, 2, 5, "ibm-sidenav-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", link_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", link_r3.children)("ngForTrackBy", ctx_r5.trackByRoute);
} }
function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_5_ibm_sidenav_item_1_Template, 2, 5, "ibm-sidenav-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_container_5_ibm_sidenav_menu_2_Template, 2, 3, "ibm-sidenav-menu", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !link_r3.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", link_r3.children);
} }
class AppComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.sidenavExpanded = window.innerWidth > 800;
        this.urlChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.links$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.urlChange$, this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(e => e.url))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.location.path()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(url => [
            {
                route: '',
                name: 'Introduction',
                active: url === '',
            },
            // {
            //   route: '/dashboards',
            //   name: 'Demo App',
            //   active: url.includes('/dashboards'),
            // },
            {
                route: '/getting-started',
                name: 'Getting Started',
                active: url.includes('/getting-started'),
            },
            {
                route: '/demos',
                name: 'Demos',
                active: url.includes('/demos'),
            },
            {
                route: '/concepts',
                name: 'Concepts',
                children: [
                    ['overview', 'Overview'],
                    ['sources', 'Sources'],
                    ['adapters', 'Adapters'],
                    ['stores', 'Stores'],
                    ['thinking-reactively', 'Thinking Reactively'],
                ].map(child => this.mapToChildRoute(url, '/concepts/', child)),
            },
            {
                route: '/adapters',
                name: 'Adapters',
                children: [['core', 'Core']].map(child => this.mapToChildRoute(url, '/adapters/', child)),
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
    mapToChildRoute(url, baseUrl, [childUrl, childName]) {
        const route = baseUrl + childUrl;
        const hashUrl = new RegExp(/#.*/);
        return {
            route,
            active: url.replace(hashUrl, '') === route,
            name: childName,
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["state-adapt-root"]], decls: 9, vars: 8, consts: [["name", "StateAdapt", 3, "brand"], [3, "click"], ["brandTemplate", ""], [3, "expanded"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "/", 1, "brand"], ["src", "../assets/sa-9-7.svg"], [3, "route", "active", "navigation", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "route", "active", "navigation"], [3, "title"], [3, "route", "active", "navigation", 4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ibm-hamburger", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ibm_hamburger_click_1_listener() { return ctx.expandSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ibm-sidenav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("brand", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.sidenavExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, ctx.links$))("ngForTrackBy", ctx.trackByRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("squished", ctx.sidenavExpanded);
    } }, directives: [carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["Header"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["Hamburger"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNav"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_5__["SideNavMenu"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  margin: 50px auto;\n}\n\na.brand[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\na.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  height: 30px;\n  margin: -3px 4px 0px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding: 0 0px;\n  width: 100%;\n  margin-left: 0;\n  margin-top: -2px;\n}\n\n@media screen and (min-width: 800px) {\n  main.squished[_ngcontent-%COMP%] {\n    width: calc(100% - 16rem);\n    margin-left: 16rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBRUU7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esa0JBQUE7RUFBSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZSc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuYS5icmFuZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IC0zcHggNHB4IDBweDtcbiAgfVxufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmLnNxdWlzaGVkIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnJlbSk7XG4gICAgICBtYXJnaW4tbGVmdDogMTZyZW07XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "vN7L":
/*!****************************************!*\
  !*** ./libs/adapter-docs/src/index.ts ***!
  \****************************************/
/*! exports provided: defaultAdapterDocs, getDiffHtml, toJson, AdapterDocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_adapter_docs_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/adapter-docs.interface */ "SMq0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultAdapterDocs", function() { return _lib_adapter_docs_interface__WEBPACK_IMPORTED_MODULE_0__["defaultAdapterDocs"]; });

/* harmony import */ var _lib_get_diff_html_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/get-diff-html.function */ "8y52");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDiffHtml", function() { return _lib_get_diff_html_function__WEBPACK_IMPORTED_MODULE_1__["getDiffHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return _lib_get_diff_html_function__WEBPACK_IMPORTED_MODULE_1__["toJson"]; });

/* harmony import */ var _lib_adapter_docs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/adapter-docs.module */ "jPLm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdapterDocsModule", function() { return _lib_adapter_docs_module__WEBPACK_IMPORTED_MODULE_2__["AdapterDocsModule"]; });






/***/ }),

/***/ "wQPa":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/app/concepts/adapters.md ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Adapters\n\n- [Overview](/concepts/adapters#overview)\n- [State Changes](/concepts/adapters#state-changes)\n- [Selectors](/concepts/adapters#selectors)\n- [`createAdapter`](/concepts/adapters#createadapter)\n- [Extending Adapters](/concepts/adapters#extending-adapters)\n- [`createSelectors`](/concepts/adapters#createselectors)\n- [Adapter Creator Libraries](/concepts/adapters#adapter-creator-libraries)\n\n## Overview\n\nAdapters are objects containing 2 kinds of reusable state management patterns: State changes and selectors.\n\n## State Changes\n\nState change functions are pure functions that implement ways state can change. They take 3 arguments and return a new state:\n\n```typescript\n(\n  state, // Current state\n  payload, // Data needed to calculate new state\n  initialState, // State the adapter was initialized with\n) => ({...state}), // New state\n```\n\n## Selectors\n\nSelectors are pure functions that calculate derived state or just return a specific piece of state. They take one argument (`State`) and return any type:\n\n```typescript\nstate => state.property,\n```\n\nSince these functions are only referenced and never called in your code, the convention is to name them nouns instead of verbs (e.g. `state` instead of `getState`). Another reason is explained in [`createSelectors`](/concepts/adapters#createselectors).\n\n## `createAdapter`\n\ncreateAdapter provides type inference when creating state adapters, which is convenient because every state change and selector starts with the same type (`State`), and every state change returns that type as well. Here is an example using createAdapter:\n\n```typescript\nimport { createAdapter } from '@state-adapt/core';\n\nconst numberAdapter = createAdapter<number>()({\n  add: (state, n: number) => state + n,\n  subtract: (state, n: number) => state - n,\n  selectors: {\n    negative: state => state * -1,\n  },\n});\n```\n\nDefining selectors is optional.\n\nEvery adapter comes with 3 default state reactions:\n\n`set` replaces the old state with a new one\n\n`update` replaces specific properties of the old state by spreading the object passed in\n\n`reset` resets to the original state the adapter was initialized with\n\nEvery adapter also comes with a default selector:\n\n`state` returns the top-level state value\n\n## Extending Adapters\n\nYou can extend the functionality of existing adapters when creating new adapters. Here is an example that extends the number adapter from above:\n\n```typescript\nimport { createAdapter } from '@state-adapt/core';\nimport { numberAdapter } from './number.adapter';\n\nconst numberStringAdapter = createAdapter<number>()({\n  ...numberAdapter,\n  addFromStr: (state, str: string) => numberAdapter.add(state, +str),\n  selectors: {\n    ...numberAdapter.selectors,\n    stateStr: state => state.toString(),\n  },\n});\n```\n\n## `createSelectors`\n\n`createAdapter` memoizes selectors passed into the `selectors` property, but it only does so shallowly. `createSelectors` provides full selector memoization and a default `state` selector (after the first argument). It takes up to 7 selector objects as arguments, each one receiving all of the selectors from the previous selector objects.\n\n```typescript\nimport { createSelectors, createAdapter } from '@state-adapt/core';\n\nconst selectors = createSelectors<string>()(\n  {\n    reverse: s => s.split('').reverse().join(''),\n  },\n  {\n    isPalendrome: s => s.reverse === s.state,\n  },\n);\n\nconst stringAdapter = createAdapter<string>()({ selectors });\n```\n\nReuse selectors from anywhere:\n\n```typescript\nimport { createAdapter, createSelectors } from '@state-adapt/core';\nimport { numberAdapter } from './number.adapter';\n\nconst numberStringAdapter = createAdapter<number>()({\n  ...numberAdapter,\n  selectors: createSelectors(numberAdapter.selectors, {\n    negative: s => s.negative.toString(),\n  }),\n});\n```\n\n`s` is typed the same as the selectors object passed in as the first argument, except using the return type of each selector instead of the selector itself. Internally, `createSelectors` uses a `Proxy` to detect which selectors your new selector functions are accessing in order memoize them efficiently. You could think of `s` as referencing either the selectors object you passed in, or a derived state object created by calling those selectors for each object key. This dual reference is why the convention is to name it `s` instead of either `selectors` or `state`.\n\n`createSelectors` is another reason for naming selectors as nouns instead of verbs: Either it would need to do extra, unnecessary processing to add `'get'`s in the `Proxy` property accessor method to find the correct selectors, or developers would need to treat verbs as nouns in their selector functions, which would be awkward: `s => s.getNegative.toString()`.\n\n## Adapter Creator Libraries\n\nComing soon\n");

/***/ }),

/***/ "xkRZ":
/*!************************************!*\
  !*** ./libs/core/src/lib/adapt.ts ***!
  \************************************/
/*! exports provided: AdaptCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptCommon", function() { return AdaptCommon; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "G4qV");
/* harmony import */ var lodash_es_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/flatten */ "xWuZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _adapt_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapt.actions */ "laVA");
/* harmony import */ var _create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-basic-adapter.function */ "TOsA");






const filterDefined = (sel$) => sel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(a => a !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
class AdaptCommon {
    constructor(commonStore) {
        this.commonStore = commonStore;
        this.pathStates = {};
        this.updaterStreams = [];
    }
    init([path, adapter, initialState], sources) {
        // type S = R['selectors'];
        const selectors = adapter.selectors || {};
        const reactions = Object.assign({}, adapter);
        delete reactions.selectors;
        const requireSources$ = this.getRequireSources(reactions, path, sources, initialState);
        const getState = this.getStateSelector(path);
        const { fullSelectors, selections } = this.getSelections(selectors, getState, requireSources$);
        return Object.assign(Object.assign({}, selections), { _requireSources$: requireSources$, _fullSelectors: fullSelectors, _select: (sel) => filterDefined(this.commonStore.select(sel)) });
    }
    initGet([path, adapter, initialState], sources) {
        const reactions = Object.assign({}, adapter);
        delete reactions.selectors;
        const requireSources$ = this.getRequireSources(reactions, path, sources, initialState);
        const getState = this.getStateSelector(path);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["using"])(() => requireSources$.subscribe(), () => filterDefined(this.commonStore.select(getState)));
    }
    setter(path, initialState, source$) {
        return this.initGet([path, Object(_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_5__["createBasicAdapter"])(), initialState], {
            set: source$,
        });
    }
    updater(path, initialState, source$) {
        return this.initGet([path, Object(_create_basic_adapter_function__WEBPACK_IMPORTED_MODULE_5__["createBasicAdapter"])(), initialState], {
            update: source$,
        });
    }
    spy(path, adapter) {
        const selectors = adapter.selectors || {};
        const getState = this.getStateSelector(path);
        const requireSources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        const { fullSelectors, selections } = this.getSelections(selectors, getState, requireSources$);
        return Object.assign(Object.assign({}, selections), { _requireSources$: requireSources$, _fullSelectors: fullSelectors, _select: (sel) => filterDefined(this.commonStore.select(sel)) });
    }
    getRequireSources(reactions, path, sources, initialState) {
        const reactionEntries = Object.entries(reactions);
        const allSourcesWithReactions = Object(lodash_es_flatten__WEBPACK_IMPORTED_MODULE_1__["default"])(reactionEntries.map(([reactionName, reaction]) => {
            const reactionSource = sources[reactionName] || [];
            const reactionSources = Array.isArray(reactionSource)
                ? reactionSource
                : [reactionSource];
            return reactionSources.map(source$ => ({ source$, reaction }));
        }));
        const allUpdatesFromSources$ = allSourcesWithReactions.map(({ source$, reaction }, i) => {
            // Source-grouped updates:
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => {
                const updaterStream = this.getSourceUpdateStream(source$);
                const requireSources$ = updaterStream
                    ? updaterStream.requireSources$
                    : source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(action => {
                        const updates = this.getAllSourceUpdates(source$, action);
                        this.commonStore.dispatch(Object(_adapt_actions__WEBPACK_IMPORTED_MODULE_4__["createPatchState"])(action, updates));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                        this.updaterStreams.splice(this.updaterStreams.findIndex(({ source$: updaterSource$ }) => source$ === updaterSource$), 1);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
                if (!updaterStream) {
                    this.updaterStreams.push({
                        source$,
                        requireSources$,
                        reactions: [],
                    });
                }
                // Now there is definitely an update stream for this source, so push this reaction onto it
                const updateStream = this.getSourceUpdateStream(source$);
                updateStream === null || updateStream === void 0 ? void 0 : updateStream.reactions.push({ path, reaction });
                return requireSources$;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        });
        const requireSources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => {
            // Runs First. If any of the sources emits immediately, this needs to have been set up first.
            const colllisionPath = this.getPathCollisions(path);
            if (colllisionPath) {
                throw this.getPathCollisionError(path, colllisionPath);
            }
            this.commonStore.dispatch(Object(_adapt_actions__WEBPACK_IMPORTED_MODULE_4__["createInit"])(path, initialState));
            this.pathStates[path] = { lastState: initialState, initialState };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...allUpdatesFromSources$, rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"]); // If sources all complete, keep state in the store
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            // Runs Last to clean up the store:
            allSourcesWithReactions.forEach(({ source$ }) => {
                const updateStream = this.getSourceUpdateStream(source$);
                const updateReactions = (updateStream === null || updateStream === void 0 ? void 0 : updateStream.reactions) || [];
                updateReactions.splice(updateReactions.findIndex(({ path: reactionPath }) => reactionPath === path), 1);
            });
            delete this.pathStates[path];
            this.commonStore.dispatch(Object(_adapt_actions__WEBPACK_IMPORTED_MODULE_4__["createDestroy"])(path));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        return requireSources$;
    }
    getSourceUpdateStream(searchSource$) {
        return this.updaterStreams.find(({ source$ }) => searchSource$ === source$);
    }
    getAllSourceUpdates(source$, { payload }) {
        return this.getSourceUpdateStream(source$).reactions.map(({ path, reaction }) => {
            const pathState = this.pathStates[path];
            const { lastState, initialState } = pathState;
            const newState = reaction(lastState, payload, initialState);
            pathState.lastState = newState;
            return [path.split('.'), newState];
        });
    }
    getStateSelector(path) {
        return ({ adapt }) => path.split('.').reduce((state, segment) => state && state[segment], adapt);
    }
    getPathCollisions(path) {
        return Object.keys(this.pathStates).find(existingPath => path === existingPath ||
            existingPath + '.' === path.substr(0, existingPath.length + 1) ||
            path + '.' === existingPath.substr(0, path.length + 1));
    }
    getPathCollisionError(path, existingPath) {
        return new Error(`Path '${path}' collides with '${existingPath}', which has already been initialized as a state path.`);
    }
    getSelections(selectors, getState, requireSources$) {
        const getUsing = (selection$) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["using"])(() => requireSources$.subscribe(), () => filterDefined(selection$));
        const selections = Object.keys(selectors).reduce((selected, key) => {
            const fullSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([getState], (state, props) => state !== undefined ? selectors[key](state, props) : state);
            return {
                fullSelectors: Object.assign(Object.assign({}, selected.fullSelectors), { [key]: fullSelector }),
                selections: Object.assign(Object.assign({}, selected.selections), { [key + '$']: getUsing(this.commonStore.select(fullSelector)) }),
            };
        }, {
            fullSelectors: { state: getState },
            selections: {
                state$: getUsing(this.commonStore.select(getState)),
            },
        });
        return selections;
    }
}


/***/ }),

/***/ "zmJS":
/*!*********************************************************!*\
  !*** ./apps/docs/src/app/concepts/sources.component.ts ***!
  \*********************************************************/
/*! exports provided: SourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesComponent", function() { return SourcesComponent; });
/* harmony import */ var raw_loader_sources_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sources.md */ "iZIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content.component */ "RvM8");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tile.component */ "Rc8c");





class SourcesComponent {
    constructor() {
        this.md = raw_loader_sources_md__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
SourcesComponent.ɵfac = function SourcesComponent_Factory(t) { return new (t || SourcesComponent)(); };
SourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SourcesComponent, selectors: [["state-adapt-sources"]], decls: 6, vars: 2, consts: [[3, "data"], ["link", "/concepts/overview"], ["link", "/concepts/adapters", 3, "right"]], template: function SourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "state-adapt-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "state-adapt-nav-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "state-adapt-nav-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Adapters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.md);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("right", true);
    } }, directives: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _nav_tile_component__WEBPACK_IMPORTED_MODULE_4__["NavTileComponent"]], encapsulation: 2 });


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