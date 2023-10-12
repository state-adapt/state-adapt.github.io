"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [425],
  {
    4425: (a, e, t) => {
      t.r(e), t.d(e, { default: () => n });
      const n =
        '<h2 id="1-start-with-simple-state">1. Start with simple state</h2>\n<p>StateAdapt stores can be as simple as <code>createSignal</code> or RxJS <code>BehaviorSubject</code>s, but with Redux Devtools support!</p>\n<pre><code class="language-tsx">function SimpleState() {\n  const nameStore = adapt(&#39;name1&#39;, &#39;Bob&#39;); // &#39;name&#39; is for Redux Devtools\n  const name = fromAdapt(nameStore);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name.state()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-1-simple-state.mov" type="video/mp4"/>\n</video>\n\n<h3 id="try-it-on-stackblitz">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F1SimpleState.tsx">StackBlitz</a></h3>\n<h2 id="2-add-selectors-for-derived-state">2. Add selectors for derived state</h2>\n<pre><code class="language-tsx">function DerivedState() {\n  const nameStore = adapt([&#39;name2&#39;, &#39;Bob&#39;], {\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n  const name = fromAdapt(nameStore);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name.state()}!&lt;/h2&gt;\n      &lt;h2&gt;Hello {name.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-2-derived-state.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-1">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F2DerivedState.tsx">StackBlitz</a></h3>\n<h2 id="3-define-state-changes-declaratively-in-stores">3. Define state changes declaratively in stores</h2>\n<p>Maintain separation of concerns by keeping state logic together instead of scattered.</p>\n<pre><code class="language-diff-tsx">function StateChanges() {\n  const nameStore = adapt([&#39;name3&#39;, &#39;Bob&#39;], {\n+    reverseName: (name) =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    selectors: {\n      yelledName: (name) =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n  const name = fromAdapt(nameStore);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n+      &lt;button onClick={() =&gt; nameStore.reverseName()}&gt;Reverse Name&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-3-state-changes.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-2">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F3StateChanges.tsx">StackBlitz</a></h3>\n<h2 id="4-reuse-state-patterns-with-state-adapters">4. Reuse state patterns with state adapters</h2>\n<pre><code class="language-diff-tsx">+const nameAdapter = createAdapter&lt;string&gt;()({\n  reverseName: (name) =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n  selectors: {\n    yelledName: (name) =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\n+\nfunction StateAdapters() {\n+  const nameStore1 = adapt([&#39;name4.1&#39;, &#39;Bob&#39;], nameAdapter);\n+  const name1 = fromAdapt(nameStore1);\n+\n+  const nameStore2 = adapt([&#39;name4.2&#39;, &#39;Bob&#39;], nameAdapter);\n+  const name2 = fromAdapt(nameStore2);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name1.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore1.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore1.reverseName()}&gt;Reverse Name&lt;/button&gt;\n+\n+      &lt;h2&gt;Hello {name2.yelledName()}!&lt;/h2&gt;\n+      &lt;button onClick={() =&gt; nameStore2.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n+      &lt;button onClick={() =&gt; nameStore2.reverseName()}&gt;Reverse Name&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-4-state-adapters.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-3">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F4StateAdapters.tsx">StackBlitz</a></h3>\n<h2 id="5-react-to-observable-data-sources">5. React to observable data sources</h2>\n<p>Multiple stores might need to react to the same observable, so it needs independent annotation.</p>\n<pre><code class="language-diff-tsx">const nameAdapter = createAdapter&lt;string&gt;()({\n  reverseName: (name) =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n+  concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n  selectors: {\n    yelledName: (name) =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\n\n+const nameFromServer$ = timer(1000).pipe(\n+  mapTo(&#39;Joel&#39;),\n+  toSource(&#39;[name] nameFromServer$&#39;) // Annotate for Redux Devtools\n+);\n+\nfunction ObservableSources() {\n-  const nameStore1 = adapt([&#39;name5.1&#39;, &#39;Bob&#39;], nameAdapter);\n+  const nameStore1 = adapt([&#39;name5.1&#39;, &#39;Bob&#39;, nameAdapter], nameFromServer$); //Set state\n  const name1 = fromAdapt(nameStore1);\n\n-  const nameStore2 = adapt([&#39;name5.2&#39;, &#39;Bob&#39;], nameAdapter);\n+  const nameStore2 = adapt([&#39;name5.2&#39;, &#39;Bob&#39;, nameAdapter], {\n+    concatName: nameFromServer$, // Trigger a specific state reaction\n+  });\n  const name2 = fromAdapt(nameStore2);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name1.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore1.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore1.reverseName()}&gt;Reverse Name&lt;/button&gt;\n\n      &lt;h2&gt;Hello {name2.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore2.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore2.reverseName()}&gt;Reverse Name&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-5-observable-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-4">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F5ObservableSources.tsx">StackBlitz</a></h3>\n<h2 id="6-share-dom-event-sources-with-multiple-stores">6. Share DOM event sources with multiple stores</h2>\n<p>Don&#39;t write callback functions to imperatively change state in multiple stores. Instead, declare the DOM event as an independent source that multiple stores can react to.</p>\n<pre><code class="language-diff-tsx">const nameAdapter = createAdapter&lt;string&gt;()({\n  reverseName: (name) =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n  concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n  selectors: {\n    yelledName: (name) =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\n\n+const resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;); // Annotate for Redux Devtools\n+\nconst nameFromServer$ = timer(1000).pipe(\n  mapTo(&#39;Joel&#39;),\n  toSource(&#39;[name] nameFromServer$&#39;) // Annotate for Redux Devtools\n);\n\nfunction DomSources() {\n  const nameStore1 = adapt([&#39;name6.1&#39;, &#39;Bob&#39;, nameAdapter], {\n+    set: nameFromServer$, // `set` is provided with all adapters\n+    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const name1 = fromAdapt(nameStore1);\n\n  const nameStore2 = adapt([&#39;name6.2&#39;, &#39;Bob&#39;, nameAdapter], {\n    concatName: nameFromServer$, // Trigger a specific state reaction\n+    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const name2 = fromAdapt(nameStore2);\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name1.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore1.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore1.reverseName()}&gt;Reverse Name&lt;/button&gt;\n\n      &lt;h2&gt;Hello {name2.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore2.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore2.reverseName()}&gt;Reverse Name&lt;/button&gt;\n+\n+     &lt;button onClick={() =&gt; resetBoth$.next()}&gt;Reset Both&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-6-dom-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-5">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F6DomSources.tsx">StackBlitz</a></h3>\n<h2 id="7-select-state-from-multiple-stores">7. Select state from multiple stores</h2>\n<pre><code class="language-diff-tsx">const nameAdapter = createAdapter&lt;string&gt;()({\n  reverseName: (name) =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n  concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n  selectors: {\n    yelledName: (name) =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\n\nconst resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;); // Annotate for Redux Devtools\n\nconst nameFromServer$ = timer(1000).pipe(\n  mapTo(&#39;Joel&#39;),\n  toSource(&#39;[name] nameFromServer$&#39;) // Annotate for Redux Devtools\n);\n\nfunction MultiStoreSelectors() {\n  const nameStore1 = adapt([&#39;name7.1&#39;, &#39;Bob&#39;, nameAdapter], {\n    set: nameFromServer$, // `set` is provided with all adapters\n    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const name1 = fromAdapt(nameStore1);\n\n  const nameStore2 = adapt([&#39;name7.2&#39;, &#39;Bob&#39;, nameAdapter], {\n    concatName: nameFromServer$, // Trigger a specific state reaction\n    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const name2 = fromAdapt(nameStore2);\n+\n+  const bothBobs = () =&gt; name1.state() === &#39;Bob&#39; &amp;&amp; name2.state() === &#39;Bob&#39;;\n\n  return (\n    &lt;&gt;\n      &lt;h2&gt;Hello {name1.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore1.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore1.reverseName()}&gt;Reverse Name&lt;/button&gt;\n\n      &lt;h2&gt;Hello {name2.yelledName()}!&lt;/h2&gt;\n      &lt;button onClick={() =&gt; nameStore2.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n      &lt;button onClick={() =&gt; nameStore2.reverseName()}&gt;Reverse Name&lt;/button&gt;\n\n      &lt;button onClick={() =&gt; resetBoth$.next()}&gt;Reset Both&lt;/button&gt;\n+\n+      {bothBobs() &amp;&amp; &lt;h2&gt;Hello Bobs!&lt;/h2&gt;}\n    &lt;/&gt;\n  );\n}\n</code></pre>\n<video controls loop>\n  <source src="./assets/demo-7-multi-store-selectors.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-6">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-cwd8th?file=src%2F7MultiStoreSelectors.tsx">StackBlitz</a></h3>\n';
    },
  },
]);
