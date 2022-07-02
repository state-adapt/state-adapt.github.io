"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32],{4032:(p,a,t)=>{t.r(a),t.d(a,{StoresComponent:()=>h});var o=t(1496),c=t(2309),d=t(3532),e=t(5e3);let h=(()=>{class n{constructor(){this.md="# Stores\n\n- [Overview](/concepts/stores#overview)\n- [`init`](/concepts/stores#init)\n- [State Paths](/concepts/stores#state-paths)\n- [getId](/concepts/stores#getid)\n- [`state$`](/concepts/stores#state)\n- [Selectors](/concepts/stores#selectors)\n- [`updater`](/concepts/stores#updater)\n- [`setter`](/concepts/stores#setter)\n- [`watch`](/concepts/stores#watch)\n- [Joining Stores](/concepts/stores#joining-stores)\n\n## Overview\n\nStores do 4 things:\n\n- Define initial state and an adapter to manage it\n- Connect sources to adapter state changes\n- Use the adapter's selectors to create observables of the selectors' results. These observables chain off the sources so subscriptions are propagated\n- Use the adapter's state changes to create synthetic sources for simple, single-store state changes. These are made available as part of the store, so DOM event handlers can call them. See [Synthetic Sources](/concepts/sources#synthetic-sources).\n\n**Stores _do not_ subscribe to sources on their own. Nothing will happen until you subscribe to one of the selector observables.**\n\n## `init`\n\n`init` is a method on `AdaptCommon` that creates stores. There are 6 ways to use it:\n\n![AdaptCommon['init'] Overloads](../assets/adapt-method-jsdoc.png)\n\nThe `sources` parameter is worth explaining more. It is an object that maps the relationship between state changes and the sources that should trigger them. This object is equivalent to a reducer in _Redux_ or _NgRx_. The property names of the object are the adapter's state change function names. The right-hand side of the object specifies one or more sources that should trigger the state change specified in the property name. To specify multiple sources, pass them in an array, like\n\n```typescript\n{\n  add: [this.numberAdded$, this.aDifferentNumberAdded$],\n}\n```\n\nThis is the default way to use [`init`](/concepts/stores#init) from `'@state-adapt/core'`:\n\n```typescript\nimport { AdaptCommon } from '@state-adapt/core';\n// ...\n  numberStore = this.adapt.init('number', 0);\n  constructor(private adapt: AdaptCommon) {}\n// ...\n```\n\nYou will probably never call the [`init`](/concepts/stores#init) method directly. StateAdapt exports a specific function for each environment:\n\n- **Angular:** `import { adapt } from '@state-adapt/angular';`\n- **Angular + NgRx:** `import { adapt } from '@state-adapt/ngrx';`\n- **Angular + NGXS:** `import { adapt } from '@state-adapt/ngxs';`\n- **React (/+ Redux):** `import { useAdapt } from '@state-adapt/react';`\n\n## State Paths\n\nThe [path](/concepts/stores#state-paths) string passed into [`init`](/concepts/stores#init) specifies the location in the global store you will find the state for the store being created. StateAdapt splits this string at periods `'.'` and uses the resulting array to define an object path for the state. For example, with an initial state of `0`, the following paths will create the following objects for the global store:\n\n```typescript\n'number' ==> { number: 0 }\n\n'featureA.number' ==> { featureA: { number: 0 } }\n\n'featureA.featureB.number' ==> { featureA: { featureB: { number: 0 } } }\n```\n\nEach store completely owns its own state. If more than one store tries to use the same path, StateAdapt will throw this error:\n\n`Path '${path}' collides with '${existingPath}', which has already been initialized as a state path.`\n\nThis applies both to paths that are identical as well as paths that are subtrings of another path. For example, if `'featureA'` is already being used by a state and then another store tried to initialize at `'featureA.number'`, that error would be thrown.\n\n## `getId`\n\nIn case you need to avoid a path collision and have no way of generating a unique path deterministically, [`getId`](/concepts/stores#getid) will give you a unique id you can append to the path you pass into [`init`](/concepts/stores#init).\n\n## `state$`\n\n[`state$`](/concepts/stores#state) is a default property created on each store. It is an observable of the store's state:\n\n```typescript\nnumberStore = this.adapt.init('number', 0);\nnumber$ = this.numberStore.state$;\n```\n\n## Selectors\n\nIf selectors are defined in an adapter they get assigned to properties on the store object with an added `'$'` at the end of the property name. They are observables of the selected state:\n\n```typescript\nnumberAdapter = createAdapter<number>()({\n  selectors: { negative: state => state * -1 },\n});\nnumberStore = this.adapt.init('number', 0, this.numberAdapter);\nnegativeNumber$ = this.numberStore.negative$;\n```\n\nEach selector's observable chains off of all the sources passed into the store. For example, if one of your sources is an observable of an HTTP request, that request will automatically be triggered as soon as you subscribe to any of the selector observables from the store. We recommend keeping your adapters and stores relatively small and focused on one concern so that accessing one part of state does not cause unrelated/unneeded data to be fetched. If necessary, you can also access store selectors that do not chain off of any sources by using the [`watch`](/concepts/stores#watch) method described below.\n\n## `watch`\n\n[`watch`](/concepts/stores#watch) is a method on `AdaptCommon` that returns a store that does not chain off of sources. It takes 2 arguments: The [path](/concepts/stores#state-paths) of the state you are interested in, and the adapter containing the selectors you want to use:\n\n```typescript\nimport { watch } from '@state-adapt/angular';\n// ...\nnegative$ = watch('number', numberAdapter).negative$;\n```\n\n[`watch`](/concepts/stores#watch) is useful in 2 situations primarily: [Accessing state without subscribing](/concepts/stores#1-accessing-state-without-subscribing) and [accessing state for a source](/concepts/stores#2-accessing-state-for-a-source).\n\n### 1. Accessing State without Subscribing\n\n[`watch`](/concepts/stores#watch) enables accessing state without subscribing to sources. For example, if your adapter manages the `loading` state for an HTTP request and you need to know if the request is loading _before_ the user is interested in the data, [`watch`](/concepts/stores#watch) can give you access to it without triggering the request. This is probably not common, but [`watch`](/concepts/stores#watch) makes it possible.\n\n### 2. Accessing State for a Source\n\nIt would be impossible for a source itself to access state from the store without [`watch`](/concepts/stores#watch) because it would require using the store before it had been defined. The following example demonstrates this:\n\n```typescript\ndataReceived$ = this.dataStore.dataNeeded$.pipe(\n  // Error: Property 'dataStore' is used before its initialization.\n  filter(needed => needed),\n  switchMap(() => this.dataService.fetchData()),\n  toSource('dataReceived$'),\n);\n\ndataStore = adapt(['data', initialState, dataAdapter], {\n  receive: this.dataReceived$,\n});\n```\n\nIn this example `dataNeeded$` comes from a selector that returns `true` if data needs to be fetched. This could be useful if the user is given a refresh button which triggers a state change back to the initial state. Since the `dataReceived$` source chains off of `dataNeeded$`, this reset would automatically trigger the request to be made again. Very reactive!\n\nHowever, `dataReceived$` needs to reference `this.dataStore.dataNeeded$`, which is impossible because `dataStore` uses `dataReceived$`. It is a circular reference problem.\n\n[`watch`](/concepts/stores#watch) solves this:\n\n```typescript\ndataNeeded$ = watch('data', dataAdapter).dataNeeded$;\n\ndataReceived$ = this.dataNeeded$.pipe(\n  filter(needed => needed),\n  switchMap(() => this.dataService.fetchData()),\n  toSource('dataReceived$'),\n);\n\ndataStore = adapt(['data', initialState, dataAdapter], {\n  receive: this.dataReceived$,\n});\n```\n\n## Joining Stores\n\nStores are treated as independent entities responsible for managing only the state inside of them. But sometimes you need to combine state from multiple stores. Since [`combineLatest` is often inadequate](/concepts/stores#the-problem-with-combinelatest), StateAdapt exports 2 functions to accomplish this: [`joinSelectors`](/concepts/stores#joinselectors) and [`join`](/concepts/stores#join).\n\n### The Problem with `combineLatest`\n\nWhen multiple stores change state simultaneously, a `combineLatest` that combines state from all of them will fire once for each store instead of once for all of them. This is not performant and requires you to filter out intermediate states where some inputs are new while others are old. Consider this example:\n\n```typescript\nnumberAdded$ = new Source<number>();\n\nnumber1$ = adapt(['number1', 0, numberAdapter], {\n  add: this.numberAdded$,\n}).state$;\nnumber2$ = adapt(['number2', 4000, numberAdapter], {\n  add: this.numberAdded$,\n}).state$;\n\ntotal$ = combineLatest([this.number1$, this.number2$]).pipe(map((n1, n2) => n1 + n2));\n```\n\nInitially, `total$` will emit `4000`, calculated from the initial inputs of `0` and `4000`. If you then call `numberAdded$.next(10)`, `total$` would first recalculate based on inputs of `10` and `4000`, so it would emit `4010`. After that it would get the update from `number2` and calculate from `10` and `4010` and emit the correct number, `4020`.\n\n### `joinSelectors`\n\n[`joinSelectors`](/concepts/stores#joinselectors) is the simplest way to use state from multiple stores:\n\n```typescript\nimport { joinSelectors } from '@state-adapt/core';\n// ...\ntotal$ = joinSelectors(this.number1Store, this.number2Store, (n1, n2) => n1 + n2);\n```\n\nThe first arguments are stores or store selector arrays (see below), and the last argument is the function that calculates the result. If the third argument is not provided, `total$` will end up being an array of each selector's output. When you pass stores as the first arguments, [`joinSelectors`](/concepts/stores#joinselectors) uses the [`state`](/concepts/stores#state) selector from each store. If you want to use a different selector, you can specify it like this:\n\n```typescript\ntotal$ = joinSelectors(\n  [this.number1Store, 'negative'],\n  this.number2Store,\n  (n1, n2) => n1 + n2,\n);\n```\n\nTypeScript will autocomplete the name of the selector as you type and correctly infer the types in the result function.\n\n### `join`\n\n[`join`](/concepts/stores#join) is a heavier solution than [`joinSelectors`](/concepts/stores#joinselectors). When you need to join many selectors from the same stores your code will be more DRY if you use [`join`](/concepts/stores#join) instead of [`joinSelectors`](/concepts/stores#joinselectors). [`join`](/concepts/stores#join) gives you access to all of each store's selectors by allowing you to specify a prefix to prepend to all selector names from each individual store. It returns a new store-like object with new selectors you define using `createSelector` from _Reselect_:\n\n```typescript\nimport { createSelector } from 'reselect';\nimport { join } from '@state-adapt/core';\n// ...\nnumbersStore = join(['one', this.number1Store], ['two', this.number2Store], {\n  totalNegative1: s => s.oneNegative + s.twoState,\n  totalNegative2: s => s.oneState + s.twoNegative,\n});\ntotalNegative1$ = this.numbersStore.totalNegative1$;\ntotalNegative2$ = this.numbersStore.totalNegative2$;\n```\n"}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["state-adapt-stores"]],standalone:!0,features:[e.jDz],decls:6,vars:2,consts:[[3,"data"],["link","/concepts/adapters"],["link","/concepts/thinking-reactively",3,"right"]],template:function(s,l){1&s&&(e.TgZ(0,"state-adapt-content"),e._UZ(1,"markdown",0),e.TgZ(2,"state-adapt-nav-tile",1),e._uU(3,"Adapters"),e.qZA(),e.TgZ(4,"state-adapt-nav-tile",2),e._uU(5," Thinking Reactively "),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("data",l.md),e.xp6(3),e.Q6J("right",!0))},dependencies:[c.S,o.JP,o.lF,d.c],encapsulation:2}),n})()}}]);