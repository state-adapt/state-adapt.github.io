"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [513],
  {
    5513: (l, n, t) => {
      t.r(n), t.d(n, { SourcesComponent: () => u });
      var a = t(6087),
        r = t(1917),
        i = t(2309),
        e = t(4650);
      let u = (() => {
        class o {
          constructor() {
            this.html =
              '<h1 id="sources">Sources</h1>\n<ul class="bx--list--unordered"><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#overview\'})); void(0)">Overview</a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#events-not-commands\'})); void(0)">Events, not commands</a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#tosource\'})); void(0)"><code>toSource</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splitsources\'})); void(0)"><code>splitSources</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#getaction\'})); void(0)"><code>getAction</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splithttpsources\'})); void(0)"><code>splitHttpSources</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpsources\'})); void(0)"><code>getHttpSources</code></a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#one-source-per-event\'})); void(0)">One Source per Event</a></li><li class="bx--list__item"><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#synthetic-sources\'})); void(0)">Synthetic Sources</a></li></ul><h2 id="overview">Overview</h2>\n<p>Sources are where asynchronous data enters applications. Examples are</p>\n<ul class="bx--list--unordered"><li class="bx--list__item">user input</li><li class="bx--list__item">data arriving from a server</li><li class="bx--list__item">a timer completing</li></ul><p>There are 3 types of sources:</p>\n<ul class="bx--list--unordered"><li class="bx--list__item">Sources created from existing observables</li><li class="bx--list__item">Sources created from the <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a> class (similar to RxJS <code>Subject</code>)</li><li class="bx--list__item">Default sources made available when stores are created, called <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#synthetic-sources\'})); void(0)">&quot;Synthetic Sources&quot;</a></li></ul><h2 id="events-not-commands">Events, not commands</h2>\n<p>Sources should be named after events, not commands. For example, rather than naming a source <code>changeName$</code>, consider naming it <code>nameChange$</code> or <code>nameChanged$</code>. In reactive programming, data flows in one direction, and giving a source the name of a command puts implicit knowledge about what happens <em>downstream</em> from the source into the source itself. It is a subtle but important change of mindset from traditional, imperative programming.</p>\n<p>This isn&#39;t an absolute rule. For example, <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#synthetic-sources\'})); void(0)">synthetic sources</a> are an exception to this. But in general, this rule should be followed.</p>\n<h2 id="tosource"><code>toSource</code></h2>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#tosource\'})); void(0)"><code>toSource</code></a> is an observable operator that converts an existing observable into a source. It takes one argument: the action type that will be displayed in Redux Devtools.</p>\n<p>Example:</p>\n<pre><code class="language-typescript">import { timer } from &#39;rxjs&#39;;\nimport { toSource } from &#39;@state-adapt/rxjs&#39;;\n\nconst timer$ = timer(3000).pipe(toSource(&#39;timer$&#39;));\n</code></pre>\n<p><img src="./assets/timer$.png" alt="Action Type in Redux Devtools" /></p>\n<p>(Note: This will not occur until you use the source in a store and subscribe to its state.)</p>\n<p>Internally, <code>toSource</code> just maps values to action objects that are similar to Redux actions.</p>\n<h2 id="source"><code>Source</code></h2>\n<p>When you don&#39;t have an observable already, you can use a <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a> the same way you would use an RxJS <code>Subject</code>:</p>\n<pre><code class="language-typescript">import { Source } from &#39;@state-adapt/rxjs&#39;;\n// ...\nformSubmission$ = new Source&lt;void&gt;(&#39;formSubmission$&#39;);\n</code></pre>\n<pre><code class="language-html">&lt;button (click)=&quot;formSubmission$.next()&quot;&gt;Submit&lt;/button&gt;\n</code></pre>\n<p>The argument is the action type that will show up in Redux Devtools.</p>\n<p>Similar to <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#tosource\'})); void(0)"><code>toSource</code></a>, values pushed into <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a> will be wrapped in objects similar to Redux actions.</p>\n<h2 id="splitsources"><code>splitSources</code></h2>\n<p>Some observables are actually several event types merged together. Although it will depend on how you write your state adapters, you will probably want only one event type per source. You could just <code>filter</code> for each event type and then use <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#tosource\'})); void(0)"><code>toSource</code></a> on each filtered stream, but StateAdapt provides a <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splitsources\'})); void(0)"><code>splitSources</code></a> function that might help. Here is how it can be used:</p>\n<pre><code class="language-typescript">import { Observable } from &#39;rxjs&#39;;\nimport { splitSources } from &#39;@state-adapt/rxjs&#39;;\n\nenum MessageType {\n  MESSAGE_1 = &#39;MESSAGE_1&#39;,\n  MESSAGE_2 = &#39;MESSAGE_2&#39;,\n}\n\ninterface Message1 {\n  type: MessageType.MESSAGE_1;\n}\n\ninterface Message2 {\n  type: MessageType.MESSAGE_2;\n  data: string;\n}\n\ntype WebsocketMessage = Message1 | Message2;\n\nconst websocketMessages$: Observable&lt;WebsocketMessage&gt; = of(\n  Math.random() &lt; 0.5\n    ? { type: MessageType.MESSAGE_1 }\n    : { type: MessageType.MESSAGE_2, data: &#39;asdfasdf&#39; }\n);\n\nconst { message1$, message2$ } = splitSources(websocketMessages$, {\n  message1$: MessageType.MESSAGE_1, // matches against message.type\n  message2$: MessageType.MESSAGE_2,\n});\n\n// Correctly infers the type of message1$ as Observable&lt;Message1&gt;\n// You can now apply toSource to each stream,\n// if the stream wasn&#39;t already of type\n// Observable&lt;{type: string, payload: Payload}&gt;\n</code></pre>\n<p>Since <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splitsources\'})); void(0)"><code>splitSources</code></a> matches against the <code>type</code> property of the values emitted from the observable passed into it, you can easily pass in an observable of actual StateAdapt sources and they will come out the other side as sources still. However, when all the messages in the input observable do <em>not</em> fit the StateAdapt/Redux <code>Action</code> interface, you will have to use <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#tosource\'})); void(0)"><code>toSource</code></a> to convert them, as mentioned in that example.</p>\n<h2 id="getaction"><code>getAction</code></h2>\n<p>This is a function that takes in 2 arguments (an <code>actionType</code> and an optional <code>payload</code>) and creates a StateAdapt <code>Action</code>. So, in this example <code>source1$</code> and <code>source2$</code> are equivalent:</p>\n<pre><code class="language-typescript">import { of } from &#39;rxjs&#39;;\nimport { map } from &#39;rxjs/operators&#39;;\nimport { getAction } from &#39;@state-adapt/core&#39;;\nimport { toSource } from &#39;@state-adapt/rxjs&#39;;\n\nconst obs$ = of(1);\nconst source1$ = obs$.pipe(toSource(&#39;source1$&#39;));\nconst source2$ = obs$.pipe(map(n =&gt; getAction(&#39;source$2&#39;, n)));\n</code></pre>\n<h2 id="gethttpactions"><code>getHttpActions</code></h2>\n<p>HTTP requests are often just used for the single value they emit when they complete. However, if you want to handle the loading state and errors, http requests become a common example of observables that contain multiple event types in a single observable: <code>request</code>, <code>error</code> and <code>success</code>. <code>getHttpActions</code> uses <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#getaction\'})); void(0)"><code>getAction</code></a> internally to convert an HTTP request observable into an observable of those 3 actions. Example usage:</p>\n<pre><code class="language-typescript">import { getHttpActions } from &#39;@state-adapt/rxjs&#39;;\n\nconst fetchData = (filters: Filters) =&gt;\n  timer(2000).pipe(mapTo({ body: &#39;Some data&#39;, status: 200, error: null }));\n\nconst httpActions$ = filters$.pipe(\n  // filters$ is just some observable of filters that triggers re-fetch\n  switchMap(filters =&gt;\n    getHttpActions(\n      fetchData(filters),\n      res =&gt; [res.status === 200, res.body, res.error],\n      filters\n    )\n  )\n);\n</code></pre>\n<p>The 1st argument of <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> is the HTTP observable.</p>\n<p>The 2nd argument is a function that takes in the value emitted by the HTTP observable and returns an array with 3 elements:</p>\n<ul class="bx--list--ordered"><li class="bx--list__item">A boolean that is true if the request was successful</li><li class="bx--list__item">The value you want as the payload of the <code>Success</code> action</li><li class="bx--list__item">The error message from the response</li></ul><p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> also applies a <code>catchError</code> RxJS operator and maps it to the <code>Error</code> source, so the type emitted by the <code>Error</code> source is <code>string | Err</code>, where <code>Err</code> is whatever you typed it as in your observable.</p>\n<p>The 3rd argument is optional and will be part of the <code>request$</code> and <code>error$</code> actions. If you provide this argument, then whatever you provided for the error in the 2nd argument will end up getting wrapped in an array with it. So in this example, the error action payload would be of type <code>[string | typeof res.error, Filters]</code>, and the request action payload would be <code>Filters</code> instead of <code>void</code>. If you didn&#39;t provide a 3rd argument, the error action payload would be of type <code>string | typeof res.error</code> and the request action payload would be <code>void</code>.</p>\n<p>Typically you will call <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splitsources\'})); void(0)"><code>splitHttpSources</code></a> after <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> to split it into 3 separate sources: <code>request$</code>, <code>success$</code> and <code>error$</code>.</p>\n<p>But for many HTTP sources you will not have to use <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> directly. If you are creating an inner observable, you will probably use it, because each new request needs to start with a <code>request$</code> action. However, if you are not creating an inner observable, you can just use <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpsources\'})); void(0)"><code>getHttpSources</code></a>, which combines <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> and <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splithttpsources\'})); void(0)"><code>splitHttpSources</code></a>.</p>\n<h2 id="splithttpsources"><code>splitHttpSources</code></h2>\n<p>The 1st argument is the scope. Whatever you pass in here, <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splithttpsources\'})); void(0)"><code>splitHttpSources</code></a> will append <code>&#39; request$&#39;</code>, <code>&#39; success$&#39;</code> and <code>&#39; error$&#39;</code> to it in the actions that it creates with <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#getaction\'})); void(0)"><code>getAction</code></a>. So if you pass in <code>&#39;[Some Data]&#39;</code>, the action types of the sources will be <code>&#39;[Some Data] request$&#39;</code>, <code>&#39;[Some Data] success$&#39;</code> and <code>&#39;[Some Data] error$&#39;</code>.</p>\n<p>The 2nd argument is the observable of all HTTP actions, which is what <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> returns.</p>\n<h2 id="gethttpsources"><code>getHttpSources</code></h2>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpsources\'})); void(0)"><code>getHttpSources</code></a> is a combination of <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#gethttpactions\'})); void(0)"><code>getHttpActions</code></a> and <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#splithttpsources\'})); void(0)"><code>splitHttpSources</code></a>. Here is an example of two ways that are equivalent:</p>\n<pre><code class="language-typescript">import {\n  getHttpActions,\n  splitSources,\n  getHttpSources,\n} from &#39;@state-adapt/rxjs&#39;;\n\nconst fetchData = () =&gt;\n  timer(2000).pipe(mapTo({ body: &#39;Some data&#39;, status: 200, error: null }));\n\n// 1. getHttpActions + splitSources\nconst httpActions$ = getHttpActions(fetchData(), res =&gt; [\n  res.status === 200,\n  res.body,\n  res.error,\n]);\nconst { request$, success$, error$ } = splitHttpSources(\n  &#39;[Some Data]&#39;,\n  httpActions$\n);\n\n// 2. getHttpSoures\nconst { request$, success$, error$ } = getHttpSources(\n  &#39;[Some Data]&#39;,\n  fetchData(),\n  res =&gt; [res.status === 200, res.body, res.error]\n);\n</code></pre>\n<h2 id="one-source-per-event">One Source per Event</h2>\n<p>In reactive programming, data flows in one direction, so each source represents a single kind of event. Rather than handling an event in a callback function, you should directly push the event into a single source and handle downstream effects in the affected features themselves.</p>\n<p>Bad example:</p>\n<pre><code class="language-html">&lt;!-- DO NOT DO THIS --&gt;\n&lt;button (click)=&quot;onFormSubmit()&quot;&gt;Submit&lt;/button&gt;\n</code></pre>\n<pre><code class="language-typescript">import { Source } from &#39;@state-adapt/rxjs&#39;;\n// ... DO NOT DO THIS\nsubmitForm$ = new Source&lt;FormData&gt;(&#39;submitForm$&#39;);\nresetForm$ = new Source&lt;void&gt;(&#39;resetForm$&#39;);\n// ... DO NOT DO THIS\nonFormSubmit() {\n  this.submitForm$.next(this.form.value);\n  this.resetForm$.next();\n}\n</code></pre>\n<p>Good example:</p>\n<pre><code class="language-html">&lt;!-- DO THIS --&gt;\n&lt;button (click)=&quot;formSubmission$.next()&quot;&gt;Submit&lt;/button&gt;\n</code></pre>\n<pre><code class="language-typescript">import { Source } from &#39;@state-adapt/rxjs&#39;;\n// ... DO THIS\nformSubmission$ = new Source&lt;void&gt;(&#39;formSubmission$&#39;); // or formSubmitted$\n</code></pre>\n<p>There might be numerous states that are impacted by a single event. You should still only create a single source for this event and handle downstream effects in the affected features themselves.</p>\n<p>Internally, StateAdapt checks each source you pass into the <code>init</code> method to see if you have passed it into the <code>init</code> method at any time before. If you have, it doesn&#39;t subscribe to the same source again; it just adds its state changes to the list of state changes to apply whenever the first source emits. The action type is only used for annotation, so only the same observable references will be treated the same.</p>\n<p>The benefit of doing it this way is that you only see one action dispatched in Redux Devtools for each event that occurs in the app, no matter how many stores are listening to it. They all get piled onto the same action for Redux Devtools.</p>\n<p>The drawback is rare, but it does occur: Since we only subscribe to the first observable, cold observables like those created from <code>of</code> and <code>timer</code> that you would expect to fire for each individual store that uses them will actually only fire for the first store that uses that exact observable reference. The solution? Just create a new reference for each store that uses it. This can be achieved either through a factory function, such as <code>getTimer = () =&gt; timer(5000)</code>, or by wrapping the reference in a <code>defer()</code> when passing it into another store (simply calling <code>.pipe()</code> on an observable doesn&#39;t seem to create a new reference, so that doesn&#39;t work). There might be a more clever workaround, but these work. This situation is rare and the benefit of having 1 action in Redux Devtools per event is well worth this drawback. But it is good to know about so you can deal with it when you come across it.</p>\n<h2 id="synthetic-sources">Synthetic Sources</h2>\n<p>Every store creates synthetic sources from the state change functions defined in its adapter. So if you had an adapter and a store like these:</p>\n<pre><code class="language-tsx">adapter = createAdapter&lt;number&gt;()({\n  increment: state =&gt; state + 1,\n});\nnumberStore = adapt([&#39;number&#39;, 0], this.adapter);\n</code></pre>\n<p>You could trigger the synthetic source created for the <code>increment</code> state change by simply calling <code>numberStore.increment()</code>:</p>\n<pre><code class="language-html">&lt;button (click)=&quot;numberStore.increment()&quot;&gt;Increment&lt;/button&gt;\n</code></pre>\n<p>This is no more imperative than using a normal <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a>:</p>\n<pre><code class="language-html">&lt;button (click)=&quot;increment$.next()&quot;&gt;Increment&lt;/button&gt;\n</code></pre>\n<p>The difference is the synthetic source is implicitly defined when the store is created, whereas the traditional <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a> is created explicitly, like this:</p>\n<pre><code class="language-tsx">increment$ = new Source&lt;number&gt;(&#39;increment$&#39;);\n// ... use in a store\n</code></pre>\n<p>In both cases, the template is making an imperative call: <code>numberStore.increment()</code> vs <code>increment$.next()</code>.</p>\n<p>There is no cost to using synthetic sources when first developing a feature, since the syntax is low-commitment and easy to change later.</p>\n<p>As soon as multiple stores need to react to any event, we should define an independent <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/concepts/sources#source\'})); void(0)"><code>Source</code></a>. No single store owns that source anymore, so it needs to be defined independently.</p>\n<p>So if we wanted 2 stores to increment when the button is clicked, instead of this:</p>\n<pre><code class="language-html">&lt;!-- DON&#39;T DO THIS --&gt;\n&lt;button (click)=&quot;numberStore1.increment(); numberStore2.increment()&quot;&gt;\n  Increment\n&lt;/button&gt;\n</code></pre>\n<p>or this:</p>\n<pre><code class="language-html">&lt;!-- DON&#39;T DO THIS --&gt;\n&lt;button (click)=&quot;incrementBothStores()&quot;&gt;Increment&lt;/button&gt;\n</code></pre>\n<pre><code class="language-tsx">// DON&#39;T DO THIS\nincrementBothStores() {\n  this.numberStore1.increment();\n  this.numberStore2.increment();\n}\n</code></pre>\n<p>We should create an independent source and have both stores react to it:</p>\n<pre><code class="language-tsx">adapter = createAdapter&lt;number&gt;()({\n  increment: state =&gt; state + 1,\n});\n\nincrementBoth$ = new Source&lt;number&gt;(&#39;incrementBoth$&#39;);\n\nnumberStore1 = adapt([&#39;number1&#39;, 0, this.adapter], {\n  increment: this.increment$,\n});\nnumberStore2 = adapt([&#39;number2&#39;, 0, this.adapter], {\n  increment: this.increment$,\n});\n</code></pre>\n<pre><code class="language-html">&lt;button (click)=&quot;incrementBoth$.next()&quot;&gt;Increment&lt;/button&gt;\n</code></pre>\n<p>This reduces imperative code and makes the store declarations themselves as complete and self-determining as possible.</p>\n<p>A simple general rule to follow is this: <a href="https://dev.to/this-is-angular/simple-derived-state-progressive-reactivity-in-angular-48oe">Don&#39;t write callback functions</a> (or event handlers). They are just containers for imperative code. Instead, push a minimal update from the template to a single place in TypeScript, and let everything downstream take responsibility for itself and react if necessary.</p>\n';
          }
        }
        return (
          (o.ɵfac = function (s) {
            return new (s || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [["sa-sources"]],
            standalone: !0,
            features: [e.jDz],
            decls: 8,
            vars: 1,
            consts: [
              [3, "html"],
              ["routerLink", "/concepts/adapters"],
              ["routerLink", "/concepts/overview"],
            ],
            template: function (s, p) {
              1 & s &&
                (e.TgZ(0, "sa-content"),
                e._UZ(1, "sa-html", 0),
                e.TgZ(2, "h2")(3, "a", 1),
                e._uU(4, "Next: Adapters"),
                e.qZA()(),
                e.TgZ(5, "h2")(6, "a", 2),
                e._uU(7, "Previous: Overview"),
                e.qZA()()()),
                2 & s && (e.xp6(1), e.Q6J("html", p.html));
            },
            dependencies: [a.Bz, a.yS, i.S, r.XB],
            encapsulation: 2,
          })),
          o
        );
      })();
    },
  },
]);
