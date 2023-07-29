"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[125],{6125:(p,n,t)=>{t.r(n),t.d(n,{DocsNgrxComponent:()=>i});var r=t(1917),c=t(2309),e=t(4650);let i=(()=>{class a{constructor(){this.html='<h1 id="state-adaptngrx">@state-adapt/ngrx</h1>\n<h2 id="peer-dependencies">Peer Dependencies</h2>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core\'})); void(0)">@state-adapt/core</a></p>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs\'})); void(0)">@state-adapt/rxjs</a></p>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/angular/docs/angular\'})); void(0)">@state-adapt/angular</a></p>\n<h2 id="index">Index</h2>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/angular/docs/ngrx#adaptngrx\'})); void(0)"><code>adaptNgrx</code></a></p>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/angular/docs/ngrx#watchngrx\'})); void(0)"><code>watchNgrx</code></a></p>\n<h2 id="adaptngrx"><code>adaptNgrx</code></h2>\n<blockquote>\n<p>Copilot tip: Copy examples into your file or click to definition to open file with context for better Copilot suggestions.</p>\n</blockquote>\n<p>  <code>adaptNgrx</code> wraps <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#stateadaptadapt\'})); void(0)"><code>StateAdapt.adapt</code></a>, calling <code>inject(AdaptNgrx)</code> to get an instance of <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#stateadapt\'})); void(0)"><code>StateAdapt</code></a>\n  that uses NgRx for the global store.</p>\n<p>  <code>adaptNgrx</code> creates a store that will manage state while it has subscribers. There are 4 overloads for <code>adaptNgrx</code>:</p>\n<h3 id="overloads">Overloads</h3>\n<pre><code class="language-javascript">adaptNgrx(path, initialState)\nadaptNgrx([path, initialState], adapter)\nadaptNgrx([path, initialState], sources)\nadaptNgrx([path, initialState, adapter], sources)\n</code></pre>\n<p>  path: <code>string</code> \u2014 Object path in Redux Devtools</p>\n<p>  initialState: <code>State</code> \u2014 Initial state of the store when it gets initialized with a subscription to its state</p>\n<p>  adapter: <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#adapter\'})); void(0)"><code>Adapter</code></a> \u2014 Object with state change functions and selectors</p>\n<p>  sources:</p>\n<ul class="bx--list--unordered"><li class="bx--list__item"><a href="https://rxjs.dev/guide/observable">Observable</a>&lt;<a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#action\'})); void(0)"><code>Action</code></a>&lt;<code>State</code>&gt;&gt; \u2014 Single source for <code>set</code> state change</li><li class="bx--list__item"><a href="https://rxjs.dev/guide/observable">Observable</a>&lt;<a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#action\'})); void(0)"><code>Action</code></a>&lt;<code>State</code>&gt;&gt;[] \u2014 Array of sources for <code>set</code> state change</li><li class="bx--list__item"><code>Sources</code> \u2014 Object specifying sources for state change functions</li></ul><h3 id="overload-1">Overload 1</h3>\n<p>  <code>adaptNgrx(path, initialState)</code></p>\n<p>  The path string specifies the location in the global store you will find the state for the store being created\n  (while the store has subscribers). StateAdapt splits this string at periods <code>&#39;.&#39;</code> to create an object path within\n  the global store. Here are some example paths and the resulting global state objects:</p>\n<h4 id="example-paths-and-global-state">Example: Paths and global state</h4>\n<pre><code class="language-typescript">store = adaptNgrx(&#39;number&#39;, 0);\nsub = this.store.state$.subscribe();\n// global state: { number: 0 }\n\nstore = adaptNgrx(&#39;featureA.number&#39;, 0);\nsub = this.store.state$.subscribe();\n// global state: { featureA: { number: 0 } }\n\nstore = adaptNgrx(&#39;featureA.featureB.number&#39;, 0);\nsub = this.store.state$.subscribe();\n// global state: { featureA: { featureB: { number: 0 } } }\n</code></pre>\n<p>  Each store completely owns its own state. If more than one store tries to use the same path, StateAdapt will throw this error:</p>\n<p>  <code>Path &#39;${path}&#39; collides with &#39;${existingPath}&#39;, which has already been initialized as a state path.</code></p>\n<p>  This applies both to paths that are identical as well as paths that are subtrings of each other. For example, if <code>&#39;featureA&#39;</code>\n  is already being used by a store and then another store tried to initialize at <code>&#39;featureA.number&#39;</code>, that error would be thrown.</p>\n<p>  To help avoid this error, StateAdapt provides a <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#getid\'})); void(0)"><code>getId</code></a> function that can be used to generate unique paths:</p>\n<h4 id="example-getid-for-unique-paths">Example: getId for unique paths</h4>\n<pre><code class="language-typescript">import { getId } from &#39;@state-adapt/core&#39;;\n// ...\nexport class MyComponent {\n  store1 = adaptNgrx(&#39;number&#39; + getId(), 0);\n  sub1 = this.store1.state$.subscribe();\n\n  store2 = adaptNgrx(&#39;number&#39; + getId(), 0);\n  sub2 = this.store2.state$.subscribe();\n\n  // global state: { number0: 0, number1: 0 }\n}\n</code></pre>\n<p>  <code>adaptNgrx</code> returns a store object that is ready to start managing state once it has subscribers. The store object comes with <code>set</code>\n  and <code>reset</code> methods for updating the state, and a <code>state$</code> observable of the store&#39;s state.</p>\n<h4 id="example-set-reset-and-state">Example: <code>set</code>, <code>reset</code> and <code>state$</code></h4>\n<pre><code class="language-tsx">export class MyComponent {\n  name = adaptNgrx(&#39;name&#39;, &#39;John&#39;);\n  sub = name.state$.subscribe(console.log);\n\n  constructor() {\n    this.name.set(&#39;Johnsh&#39;); // logs &#39;Johnsh&#39;\n    this.name.reset(); // logs &#39;John&#39;\n  }\n}\n</code></pre>\n<p>  Usually you won&#39;t manually subscribe to state like this, but you can if you want the store to immediately start managing state\n  and never clean it up.</p>\n<h3 id="overload-2">Overload 2</h3>\n<p>  <code>adaptNgrx([path, initialState], adapter)</code></p>\n<p>  The adapter is an object such as one created by <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#createadapter\'})); void(0)"><code>createAdapter</code></a>. It contains methods for updating state,\n  called &quot;state changes&quot; or &quot;reactions&quot;, and optionally selectors for reading the state. Every reaction function becomes a method on\n  the store object, and every selector becomes an observable on the store object.</p>\n<h4 id="example-inlined-adapter">Example: Inlined adapter</h4>\n<pre><code class="language-tsx">export class MyComponent {\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;], {\n    concat: (state, payload: string) =&gt; state + payload,\n    selectors: {\n      length: state =&gt; state.length,\n    },\n  });\n  sub1 = name.state$.subscribe(console.log);\n  sub2 = name.length$.subscribe(console.log);\n\n  constructor() {\n    this.name.concat(&#39;sh&#39;); // logs &#39;Johnsh&#39; and 6\n    this.name.reset(); // logs &#39;John&#39; and 4\n  }\n}\n</code></pre>\n<h3 id="overload-3">Overload 3</h3>\n<p>  <code>adaptNgrx([path, initialState], sources)</code></p>\n<p>  Sources allow the store to react to external events. There are 4 possible ways sources can be defined:</p>\n<p>  1. A source can be a single <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#source\'})); void(0)"><code>Source</code></a> or <a href="https://rxjs.dev/guide/observable">Observable</a>&lt;<a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#action\'})); void(0)"><code>Action</code></a>&lt;<code>State</code>&gt;&gt;. When the source emits, it triggers the store&#39;s <code>set</code> method\n  with the payload.</p>\n<h4 id="example-single-source">Example: Single source</h4>\n<pre><code class="language-tsx">export class MyService {\n  nameChange$ = new Source&lt;string&gt;(&#39;nameChange$&#39;);\n\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;], this.nameChange$);\n\n  sub = this.name.state$.subscribe(console.log);\n\n  constructor() {\n    this.nameChange$.next(&#39;Johnsh&#39;); // logs &#39;Johnsh&#39;\n  }\n}\n</code></pre>\n<p>  2. A source can be an array of <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#source\'})); void(0)"><code>Source</code></a> or <a href="https://rxjs.dev/guide/observable">Observable</a>&lt;<a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/core#action\'})); void(0)"><code>Action</code></a>&lt;<code>State</code>&gt;&gt;. When any of the sources emit, it triggers the store&#39;s <code>set</code>\n   method with the payload.</p>\n<h4 id="example-array-of-sources">Example: Array of sources</h4>\n<pre><code class="language-tsx">export class MyService {\n  nameChange$ = new Source&lt;string&gt;(&#39;nameChange$&#39;);\n  nameChange2$ = new Source&lt;string&gt;(&#39;nameChange2$&#39;);\n\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;], [this.nameChange$, this.nameChange2$]);\n\n  sub = this.name.state$.subscribe(console.log);\n\n  constructor() {\n    this.nameChange$.next(&#39;Johnsh&#39;); // logs &#39;Johnsh&#39;\n    this.nameChange2$.next(&#39;Johnsh2&#39;); // logs &#39;Johnsh2&#39;\n  }\n}\n</code></pre>\n<p>  3. A source can be an object with keys that match the names of the store&#39;s reactions, with a corresponding source or array of\n  sources that trigger the store&#39;s reaction with the payload.</p>\n<h4 id="example-object-of-sources">Example: Object of sources</h4>\n<pre><code class="language-tsx">export class MyService {\n  nameChange$ = new Source&lt;string&gt;(&#39;nameChange$&#39;);\n  nameReset$ = new Source&lt;void&gt;(&#39;nameReset$&#39;);\n\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;], {\n    set: this.nameChange$,\n    reset: [this.nameReset$], // Can be array of sources too\n  });\n\n  sub = this.name.state$.subscribe(console.log);\n\n  constructor() {\n    this.nameChange$.next(&#39;Johnsh&#39;); // logs &#39;Johnsh&#39;\n    this.nameReset$.next(); // logs &#39;John&#39;\n  }\n}\n</code></pre>\n<p>  4. A source can be a function that takes in a detached store (result of calling <code>watch</code>) and returns any of the above\n  types of sources.</p>\n<h4 id="example-function-that-returns-a-source">Example: Function that returns a source</h4>\n<pre><code class="language-tsx">export class MyService {\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;], store =&gt; store.state$.pipe(\n    delay(1000),\n    map(name =&gt; `${name}sh`),\n    toSource(&#39;recursive nameChange$&#39;),\n  ));\n\n  sub = this.name.state$.subscribe(console.log);\n  // logs &#39;Johnsh&#39; after 1 second, then &#39;Johnshsh&#39; after 2 seconds, etc.\n}\n</code></pre>\n<p>  Each selector&#39;s observable chains off of all the sources passed into the store. For example, if one of your sources\n  is an observable of an HTTP request, that request will automatically be triggered as soon as you subscribe to any of\n  the selector observables from the store. If necessary, you can access store selectors that do not chain off of any\n  sources by using the <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/angular/docs/ngrx#watchngrx\'})); void(0)"><code>watchNgrx</code></a> function.</p>\n<h3 id="overload-4">Overload 4</h3>\n<p>  <code>adaptNgrx([path, initialState, adapter], sources)</code></p>\n<p>  The adapter and sources can be combined in the same overload.</p>\n<h4 id="example-adapter-and-sources">Example: Adapter and sources</h4>\n<pre><code class="language-tsx">export class MyService {\n  nameChange$ = new Source&lt;string&gt;(&#39;nameChange$&#39;);\n  nameConcat$ = new Source&lt;string&gt;(&#39;nameConcat$&#39;);\n\n  nameAdapter = createAdapter&lt;string&gt;()({\n    concat: (state, payload: string) =&gt; state + payload,\n  });\n\n  name = adaptNgrx([&#39;name&#39;, &#39;John&#39;, this.nameAdapter], {\n    set: this.nameChange$,\n    concat: this.nameConcat$,\n  });\n\n  sub = name.state$.subscribe(console.log);\n\n  constructor() {\n    this.nameChange$.next(&#39;Johnsh&#39;); // logs &#39;Johnsh&#39;\n    this.nameConcat$.next(&#39;sh&#39;); // logs &#39;Johnshsh&#39; // Example suggested by Copilot :)\n  }\n}\n</code></pre>\n<h3 id="remember">Remember!</h3>\n<p>  The store needs to have subscribers in order to start managing state.</p>\n<p>  @deprecated Use for debugging only. Prefer the <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#stateadaptadapt\'})); void(0)"><code>StateAdapt.adapt</code></a> sources syntax that exposes a detached store.</p>\n<h2 id="watchngrx"><code>watchNgrx</code></h2>\n<blockquote>\n<p>Copilot tip: Copy examples into your file or click to definition to open file with context for better Copilot suggestions.</p>\n</blockquote>\n<p>  <code>watchNgrx</code> wraps <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#stateadaptwatch\'})); void(0)"><code>StateAdapt.watch</code></a>, calling <code>inject(AdaptNgrx)</code> to get an instance of <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs#stateadapt\'})); void(0)"><code>StateAdapt</code></a>\n  that uses NgRx for the global store.</p>\n<p>  <code>watchNgrx</code> returns a detached store (doesn&#39;t chain off of sources). This allows you to watch state without affecting anything.\n  It takes 2 arguments: The path of the state you are interested in, and the adapter containing the selectors you want to use.</p>\n<pre><code class="language-tsx">watchNgrx(path, adapter)\n</code></pre>\n<p>  path \u2014 Object path in Redux Devtools</p>\n<p>  adapter \u2014 Object with state change functions and selectors</p>\n<h3 id="usage">Usage</h3>\n<p>  <code>watchNgrx</code> is useful in 2 situations primarily: Accessing state without subscribing and accessing state for a source.</p>\n<h3 id="accessing-state-without-subscribing">Accessing state without subscribing</h3>\n<p>  <code>watchNgrx</code> enables accessing state without subscribing to sources. For example, if your adapter manages the loading state\n  for an HTTP request and you need to know if the request is loading before the user is interested in the data,\n  <code>watchNgrx</code> can give you access to it without triggering the request.</p>\n<h4 id="example-accessing-loading-state">Example: Accessing loading state</h4>\n<pre><code class="language-tsx">watchNgrx(&#39;data&#39;, httpAdapter).loading$.subscribe(console.log);\n</code></pre>\n<h3 id="accessing-state-for-a-source">Accessing state for a source</h3>\n<p>  It would be impossible for a source itself to access state from the store without <code>watchNgrx</code> because\n  it would require using the store before it had been defined. The solution is to use <code>watchNgrx</code>\n  to access the state needed by <code>dataReceived$</code>:</p>\n<h4 id="example-accessing-state-for-a-source">Example: Accessing state for a source</h4>\n<pre><code class="language-tsx">export class MyComponent {\n  path = &#39;data&#39;; // Make sure the same path is used in both places\n\n  dataReceived$ = watchNgrx(this.path, dataAdapter).dataNeeded$.pipe(\n    filter(needed =&gt; needed),\n    switchMap(() =&gt; this.dataService.fetchData()),\n    toSource(&#39;dataReceived$&#39;),\n  );\n\n  dataStore = adapt([this.path, initialState, dataAdapter], {\n    receive: this.dataReceived$,\n  });\n}\n</code></pre>\n\x3c!--  --\x3e\n'}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["sa-docs-ngrx"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[3,"html"]],template:function(o,h){1&o&&(e.TgZ(0,"sa-content"),e._UZ(1,"sa-html",0),e.qZA()),2&o&&(e.xp6(1),e.Q6J("html",h.html))},dependencies:[c.S,r.XB],encapsulation:2}),a})()}}]);