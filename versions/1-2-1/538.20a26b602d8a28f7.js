"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [538],
  {
    538: (a, e, t) => {
      t.r(e), t.d(e, { default: () => n });
      const n =
        '<h2 id="1-start-with-simple-state">1. Start with simple state</h2>\n<p>StateAdapt stores can be as simple as RxJS <code>BehaviorSubject</code>s, but with Redux Devtools support!</p>\n<pre><code class="language-tsx">export class NameComponent {\n  nameStore = adapt(&#39;name&#39;, &#39;Bob&#39;); // &#39;name&#39; is for Redux Devtools\n}\n</code></pre>\n<pre><code class="language-html">&lt;h1&gt;Hello {{ nameStore.state$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;nameStore.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n</code></pre>\n<p>Here it is in Redux Devtools:</p>\n<video controls loop>\n  <source src="./assets/demo-1-simple-state.mov" type="video/mp4"/>\n</video>\n\n<h3 id="try-it-on-stackblitz">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F1-simple-state.component.ts">StackBlitz</a></h3>\n<h2 id="2-add-selectors-for-derived-state">2. Add selectors for derived state</h2>\n<pre><code class="language-typescript">export class NameComponent {\n  nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n}\n</code></pre>\n<pre><code class="language-html">&lt;h1&gt;Hello {{ nameStore.state$ | async }}!&lt;/h1&gt;\n&lt;h1&gt;Hello {{ nameStore.yelledName$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;nameStore.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-2-derived-state.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-1">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F2-derived-state.component.ts">StackBlitz</a></h3>\n<h2 id="3-define-state-changes-declaratively-in-stores">3. Define state changes declaratively in stores</h2>\n<p>Maintain separation of concerns by keeping state logic together instead of scattered.</p>\n<pre><code class="language-diff-typescript">export class NameComponent {\n  nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n+    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n}\n</code></pre>\n<pre><code class="language-diff-html"> &lt;h1&gt;Hello {{ nameStore.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;nameStore.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n+ &lt;button (click)=&quot;nameStore.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-3-state-changes.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-2">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F3-state-changes.component.ts">StackBlitz</a></h3>\n<h2 id="4-reuse-state-patterns-with-state-adapters">4. Reuse state patterns with state adapters</h2>\n<p>If you need to reuse state logic, it&#39;s as simple as dragging it outside the <code>adapt</code> call into a <code>createAdapter</code> call.</p>\n<pre><code class="language-diff-typescript">export class NameComponent {\n-  nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n+  nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n+\n+  name1Store = adapt([&#39;name.1&#39;, &#39;Bob&#39;], this.nameAdapter);\n+  name2Store = adapt([&#39;name.2&#39;, &#39;Bob&#39;], this.nameAdapter);\n}\n</code></pre>\n<pre><code class="language-diff-html"> &lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n+\n+ &lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n+ &lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n+ &lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-4-state-adapters.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-3">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F4-state-adapters.component.ts">StackBlitz</a></h3>\n<h2 id="5-react-to-observable-data-sources">5. React to observable data sources</h2>\n<p>Multiple stores might need to react to the same observable, so it needs independent annotation.</p>\n<pre><code class="language-diff-typescript">export class NameComponent {\n  nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n+    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n+  nameFromServer$ = timer(3000).pipe(\n+    mapTo(&#39;Joel&#39;),\n+    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n+  );\n+\n-  name1Store = adapt([&#39;name.1&#39;, &#39;Bob&#39;], this.nameAdapter);\n+  name1Store = adapt([&#39;name.1&#39;, &#39;Bob&#39;, this.nameAdapter], this.nameFromServer$);//Set state\n-  name2Store = adapt([&#39;name.2&#39;, &#39;Bob&#39;], this.nameAdapter);\n+  name2Store = adapt([&#39;name.2&#39;, &#39;Bob&#39;, this.nameAdapter], {\n+    concatName: this.nameFromServer$, // Trigger a specific state reaction\n+  });\n}\n</code></pre>\n<pre><code class="language-html">&lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n&lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n&lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n&lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-5-observable-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-4">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F5-observable-sources.component.ts">StackBlitz</a></h3>\n<h2 id="6-share-dom-event-sources-with-multiple-stores">6. Share DOM event sources with multiple stores</h2>\n<p>Don&#39;t write callback functions to imperatively change state in multiple stores. Instead, declare the DOM event as an independent source that multiple stores can react to.</p>\n<pre><code class="language-diff-typescript">export class NameComponent {\n  nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n+  resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;); // Annotate for Redux Devtools\n+\n  nameFromServer$ = timer(3000).pipe(\n    mapTo(&#39;Joel&#39;),\n    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n  );\n\n  name1Store = adapt([&#39;name.1&#39;, &#39;Bob&#39;, this.nameAdapter], {\n+    set: this.nameFromServer$, // `set` is provided with all adapters\n+    reset: this.resetBoth$, // `reset` is provided with all adapters\n+  });\n  name2Store = adapt([&#39;name.2&#39;, &#39;Bob&#39;, this.nameAdapter], {\n    concatName: this.nameFromServer$,\n+    reset: this.resetBoth$, // `reset` is provided with all adapters\n  });\n}\n</code></pre>\n<pre><code class="language-diff-html"> &lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n+\n+ &lt;button (click)=&quot;resetBoth$.next()&quot;&gt;Reset Both&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-6-dom-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-5">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F6-dom-sources.component.ts">StackBlitz</a></h3>\n<h2 id="7-select-state-from-multiple-stores">7. Select state from multiple stores</h2>\n<pre><code class="language-diff-typescript">export class NameComponent {\n  nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n  resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;); // Annotate for Redux Devtools\n\n  nameFromServer$ = timer(3000).pipe(\n    mapTo(&#39;Joel&#39;),\n    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n  );\n\n  name1Store = adapt([&#39;name.1&#39;, &#39;Bob&#39;, this.nameAdapter], {\n    set: this.nameFromServer$, // `set` is provided with all adapters\n    reset: this.resetBoth$, // `reset` is provided with all adapters\n  });\n  name2Store = adapt([&#39;name.2&#39;, &#39;Bob&#39;, this.nameAdapter], {\n    concatName: this.nameFromServer$,\n    reset: this.resetBoth$, // `reset` is provided with all adapters\n  });\n+\n+  bothBobs$ = joinStores({\n+    name1: this.name1Store,\n+    name2: this.name2Store,\n+  })({\n+    bothBobs: s =&gt; s.name1 === &#39;Bob&#39; &amp;&amp; s.name2 === &#39;Bob&#39;,\n+  })().bothBobs$;\n}\n</code></pre>\n<pre><code class="language-diff-html"> &lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;button (click)=&quot;resetBoth$.next()&quot;&gt;Reset Both&lt;/button&gt;\n+\n+ &lt;h2 *ngIf=&quot;bothBobs$ | async&quot;&gt;Hello Bobs!&lt;/h2&gt;\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-7-multi-store-selectors.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-6">Try it on <a href="https://stackblitz.com/edit/angular-ivy-jwt8jh?file=src%2Fapp%2F7-multi-store-selectors.component.ts">StackBlitz</a></h3>\n';
    },
  },
]);
