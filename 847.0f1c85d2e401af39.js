"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[847],{2847:(a,e,t)=>{t.r(e),t.d(e,{default:()=>n});const n='<h2 id="1-start-with-simple-state">1. Start with simple state</h2>\n<p>StateAdapt stores can be as simple as Svelte stores or RxJS <code>BehaviorSubject</code>s, but with Redux Devtools support!</p>\n<pre><code class="language-tsx">const nameStore = adapt(&#39;name&#39;, &#39;Bob&#39;); // &#39;name&#39; is for Redux Devtools\nconst name$ = nameStore.state$;\n</code></pre>\n<pre><code class="language-svelte">&lt;h2&gt;Hello {$name$}!&lt;/h2&gt;\n&lt;button on:click={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n</code></pre>\n<p>Here it is in Redux Devtools:</p>\n<video controls loop>\n  <source src="../assets/demo-1-simple-state.mov" type="video/mp4"/>\n</video>\n\n<h3 id="try-it-on-stackblitz">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F1-simple-state.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="2-add-selectors-for-derived-state">2. Add selectors for derived state</h2>\n<p>Derived state defined in selectors can be moved outside of components without refactoring.</p>\n<pre><code class="language-typescript">const nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n  selectors: {\n    yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\nconst name$ = nameStore.state$;\nconst yelledName$ = nameStore.yelledName$;\n</code></pre>\n<pre><code class="language-svelte">&lt;h2&gt;Hello {$name$}!&lt;/h2&gt;\n&lt;h2&gt;Hello { $yelledName$ }!&lt;/h2&gt;\n&lt;button on:click={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-2-derived-state.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-1">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F2-derived-state.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="3-define-state-changes-declaratively-in-stores">3. Define state changes declaratively in stores</h2>\n<p>Maintain separation of concerns by keeping state logic together instead of scattered.</p>\n<pre><code class="language-diff-typescript">const nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n+  reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n  selectors: {\n    yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n  },\n});\nconst yelledName$ = nameStore.yelledName$;\n</code></pre>\n<pre><code class="language-diff-svelte"> &lt;h2&gt;Hello { $yelledName$ }!&lt;/h2&gt;\n &lt;button on:click={() =&gt; nameStore.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n+ &lt;button on:click={() =&gt; nameStore.reverseName()}&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-3-state-changes.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-2">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F3-state-changes.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="4-reuse-state-patterns-with-state-adapters">4. Reuse state patterns with state adapters</h2>\n<p>If you need to reuse state logic, it&#39;s as simple as dragging it outside the <code>adapt</code> call into a <code>createAdapter</code> call.</p>\n<pre><code class="language-diff-typescript">-  const nameStore = adapt([&#39;name&#39;, &#39;Bob&#39;], {\n+  const nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n-  const yelledName$ = nameStore.yelledName$;\n+\n+  const nameStore1 = adapt([&#39;name.1&#39;, &#39;Bob&#39;], nameAdapter);\n+  const yelledName1$ = nameStore1.yelledName$;\n+\n+  const nameStore2 = adapt([&#39;name.2&#39;, &#39;Bob&#39;], nameAdapter);\n+  const yelledName2$ = nameStore2.yelledName$;\n</code></pre>\n<pre><code class="language-diff-svelte"> &lt;h2&gt;Hello { $yelledName1$ }!&lt;/h2&gt;\n &lt;button on:click={() =&gt; nameStore1.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n &lt;button on:click={() =&gt; nameStore1.reverseName()}&gt;Reverse Name&lt;/button&gt;\n+\n+ &lt;h2&gt;Hello { $yelledName2$ }!&lt;/h2&gt;\n+ &lt;button on:click={() =&gt; nameStore2.set(&#39;Bilbo&#39;)}&gt;Change Name&lt;/button&gt;\n+ &lt;button on:click={() =&gt; nameStore2.reverseName()}&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-4-state-adapters.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-3">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F4-state-adapters.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="5-react-to-observable-data-sources">5. React to observable data sources</h2>\n<p>Multiple stores might need to react to the same observable, so it needs independent annotation.</p>\n<pre><code class="language-diff-typescript">  const nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n+    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n+  const nameFromServer$ = timer(3000).pipe(\n+    mapTo(&#39;Joel&#39;),\n+    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n+  );\n+\n-  const nameStore1 = adapt([&#39;name.1&#39;, &#39;Bob&#39;], nameAdapter);\n+  const nameStore1 = adapt([&#39;name.1&#39;, &#39;Bob&#39;, nameAdapter], nameFromServer$);//Set state\n  const yelledName1$ = nameStore1.yelledName$;\n\n-  const nameStore2 = adapt([&#39;name.2&#39;, &#39;Bob&#39;], nameAdapter);\n+  const nameStore2 = adapt([&#39;name.2&#39;, &#39;Bob&#39;, nameAdapter], {\n+    concatName: nameFromServer$, // Trigger a specific state reaction\n+  });\n  const yelledName2$ = nameStore2.yelledName$;\n</code></pre>\n<pre><code class="language-svelte">&lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n&lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n&lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n&lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n&lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-5-observable-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-4">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F5-observable-sources.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="6-share-dom-event-sources-with-multiple-stores">6. Share DOM event sources with multiple stores</h2>\n<p>Don&#39;t write callback functions to imperatively change state in multiple stores. Instead, declare the DOM event as an independent source that multiple stores can react to.</p>\n<pre><code class="language-diff-typescript">  const nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n+  const resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;);//Annotate for Redux Devtools\n+\n  const nameFromServer$ = timer(3000).pipe(\n    mapTo(&#39;Joel&#39;),\n    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n  );\n\n  const nameStore1 = adapt([&#39;name4.1&#39;, &#39;Bob&#39;, nameAdapter], {\n+    set: nameFromServer$, // `set` is provided with all adapters\n+    reset: resetBoth$, // `reset` is provided with all adapters\n+  });\n  const yelledName1$ = nameStore1.yelledName$;\n\n  const nameStore2 = adapt([&#39;name4.2&#39;, &#39;Bob&#39;, nameAdapter], {\n    concatName: nameFromServer$, // Trigger a specific state reaction\n+    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const yelledName2$ = nameStore2.yelledName$;\n</code></pre>\n<pre><code class="language-diff-svelte"> &lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n+\n+ &lt;button on:click={() =&gt; resetBoth$.next()}&gt;Reset Both&lt;/button&gt;\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-6-dom-sources.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-5">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F6-dom-sources.svelte&terminal=dev">StackBlitz</a></h3>\n<h2 id="7-select-state-from-multiple-stores">7. Select state from multiple stores</h2>\n<p><code>joinStores</code> can define derived state from multiple stores that can be shared bewteen multiple components.</p>\n<pre><code class="language-diff-typescript">  const nameAdapter = createAdapter&lt;string&gt;()({\n    reverseName: name =&gt; name.split(&#39;&#39;).reverse().join(&#39;&#39;),\n    concatName: (name, anotherName: string) =&gt; `${name} ${anotherName}`,\n    selectors: {\n      yelledName: name =&gt; name.toUpperCase(), // Will be memoized\n    },\n  });\n\n  const resetBoth$ = new Source&lt;void&gt;(&#39;[name] resetBoth$&#39;);//Annotate for Redux Devtools\n\n  const nameFromServer$ = timer(3000).pipe(\n    mapTo(&#39;Joel&#39;),\n    toSource(&#39;[name] nameFromServer$&#39;), // Annotate for Redux Devtools\n  );\n\n  const nameStore1 = adapt([&#39;name4.1&#39;, &#39;Bob&#39;, nameAdapter], {\n    set: nameFromServer$, // `set` is provided with all adapters\n    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const yelledName1$ = nameStore1.yelledName$;\n\n  const nameStore2 = adapt([&#39;name4.2&#39;, &#39;Bob&#39;, nameAdapter], {\n    concatName: nameFromServer$, // Trigger a specific state reaction\n    reset: resetBoth$, // `reset` is provided with all adapters\n  });\n  const yelledName2$ = nameStore2.yelledName$;\n+\n+  const bothBobs$ = joinStores({\n+    name1: nameStore1,\n+    name2: nameStore2,\n+  })({\n+    bothBobs: s =&gt; s.name1 === &#39;Bob&#39; &amp;&amp; s.name2 === &#39;Bob&#39;,\n+  })().bothBobs$;\n</code></pre>\n<pre><code class="language-diff-svelte"> &lt;h1&gt;Hello {{ name1Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name1Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name1Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;h1&gt;Hello {{ name2Store.yelledName$ | async }}!&lt;/h1&gt;\n &lt;button (click)=&quot;name2Store.set(&#39;Bilbo&#39;)&quot;&gt;Change Name&lt;/button&gt;\n &lt;button (click)=&quot;name2Store.reverseName()&quot;&gt;Reverse Name&lt;/button&gt;\n\n &lt;button on:click={() =&gt; resetBoth$.next()}&gt;Reset Both&lt;/button&gt;\n+\n+ {#if $bothBobs$}\n+   &lt;h2&gt;Hello Bobs!&lt;/h2&gt;\n+ {/if}\n</code></pre>\n<video controls loop>\n  <source src="../assets/demo-7-multi-store-selectors.mov" type="video/mp4" />\n</video>\n\n<h3 id="try-it-on-stackblitz-6">Try it on <a href="https://stackblitz.com/edit/vitejs-vite-74p4ry?file=src%2Flib%2F7-multi-store-selectors.svelte&terminal=dev">StackBlitz</a></h3>\n'}}]);