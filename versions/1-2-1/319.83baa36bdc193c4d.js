"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[319],{319:(l,o,e)=>{e.r(o),e.d(o,{GetStartedSvelteComponent:()=>p});var r=e(1917),d=e(2309),t=e(4650);let p=(()=>{class a{constructor(){this.html='<h2 id="tutorials">Tutorials</h2>\n<p><a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/svelte#1-start-with-simple-state\'})); void(0)">Basic Syntax</a></p>\n<h2 id="documentation">Documentation</h2>\n<p>Svelte doesn&#39;t currently have a dedicated library from StateAdapt, but it will. For now, see <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs\'})); void(0)">@state-adapt/rxjs</a>.</p>\n\x3c!-- [@state-adapt/svelte](/docs/svelte) --\x3e\n\n<h2 id="setup">Setup</h2>\n<p><a href="https://stackblitz.com/edit/vitejs-vite-szsd3d?file=src%2Fadapt.function.ts,src%2Flib%2FCounter.svelte&terminal=dev">StackBlitz demo</a></p>\n<p>First, <code>npm install</code>:</p>\n<pre><code>npm i -s rxjs\nnpm i -s @state-adapt/{core,rxjs}\n</code></pre>\n<p>Configure StateAdapt in a file named <code>state-adapt.ts</code>:</p>\n<pre><code class="language-typescript">import { actionSanitizer, stateSanitizer } from &#39;@state-adapt/core&#39;;\nimport { configureStateAdapt } from &#39;@state-adapt/rxjs&#39;;\n\nconst enableReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.({\n  actionSanitizer,\n  stateSanitizer,\n});\n\nexport const { adapt, watch } = configureStateAdapt({\n  devtools: enableReduxDevTools,\n});\n</code></pre>\n<p>And now you can use it in your components:</p>\n<pre><code class="language-tsx">import { adapt } from &#39;../state-adapt&#39;;\nconst nameStore = adapt(&#39;name&#39;, &#39;&#39;);\n</code></pre>\n<p>Svelte doesn&#39;t currently have a dedicated library from StateAdapt, but it will. For now, for more configuration options, see <a href="javascript:document.dispatchEvent(new CustomEvent(\'routeTo\', {detail: \'/docs/rxjs\'})); void(0)">@state-adapt/rxjs</a>.</p>\n\x3c!-- For more configuration options, see [@state-adapt/svelte](/docs/svelte). --\x3e\n\n<p>Go to <a href="svelte/get-started#tutorials">Tutorials</a> for help on how to use StateAdapt after setup.</p>\n'}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["sa-get-started-svelte"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[3,"html"]],template:function(n,c){1&n&&(t.TgZ(0,"sa-content"),t._UZ(1,"sa-html",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("html",c.html))},dependencies:[d.S,r.XB],encapsulation:2}),a})()}}]);