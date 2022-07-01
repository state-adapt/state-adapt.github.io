"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{5740:(F,w,x)=>{x.r(w),x.d(w,{CircuitsComponent:()=>E});var m=x(9808),t=x(5e3);function y(n,c){1&n&&(t.O4$(),t._UZ(0,"use",32)),2&n&&t.uIk("x",-30)("y",-360)}function A(n,c){1&n&&(t.O4$(),t._UZ(0,"use",33)),2&n&&t.uIk("x",-30)("y",-360)}function I(n,c){1&n&&(t.O4$(),t._UZ(0,"use",34)),2&n&&t.uIk("x",-30)("y",-375)}function $(n,c){1&n&&(t.O4$(),t._UZ(0,"use",35)),2&n&&t.uIk("x",-30)("y",-360)}function U(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"g",25),t.YNc(1,y,1,2,"use",26),t.YNc(2,A,1,2,"use",27),t.YNc(3,I,1,2,"use",28),t.YNc(4,$,1,2,"use",29),t.TgZ(5,"g",30),t._UZ(6,"path"),t.qZA(),t.TgZ(7,"g",31),t._UZ(8,"path"),t.qZA()()),2&n){const e=c.$implicit;t.uIk("transform",e.translate),t.xp6(1),t.Q6J("ngIf","clock"===e.type),t.xp6(1),t.Q6J("ngIf","http"===e.type),t.xp6(1),t.Q6J("ngIf","websocket"===e.type),t.xp6(1),t.Q6J("ngIf","html"===e.type),t.xp6(2),t.uIk("d",e.path),t.xp6(2),t.uIk("d",e.path)}}function N(n,c){1&n&&(t.O4$(),t._UZ(0,"use",33)),2&n&&t.uIk("x",-30)("y",-360)}function S(n,c){1&n&&(t.O4$(),t._UZ(0,"use",35)),2&n&&t.uIk("x",-30)("y",-360)}function B(n,c){1&n&&(t.O4$(),t._UZ(0,"use",38)),2&n&&t.uIk("x",-30)("y",-360)}function q(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"g",36),t.YNc(1,N,1,2,"use",27),t.YNc(2,S,1,2,"use",29),t.YNc(3,B,1,2,"use",37),t.TgZ(4,"g",30),t._UZ(5,"path"),t.qZA(),t.TgZ(6,"g",31),t._UZ(7,"path"),t.qZA()()),2&n){const e=c.$implicit;t.uIk("transform",e.translate),t.xp6(1),t.Q6J("ngIf","http"===e.type),t.xp6(1),t.Q6J("ngIf","html"===e.type),t.xp6(1),t.Q6J("ngIf","storage"===e.type),t.xp6(2),t.uIk("d",e.path),t.xp6(2),t.uIk("d",e.path)}}function V(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"svg",21),t.YNc(1,U,9,7,"g",22),t._UZ(2,"use",23),t.YNc(3,q,8,6,"g",24),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("ngForOf",e.sources),t.xp6(2),t.Q6J("ngForOf",e.sinks)}}var p=(()=>{return(n=p||(p={})).WEBSOCKET="websocket",n.HTTP="http",n.CLOCK="clock",n.HTML="html",p;var n})(),_=(()=>{return(n=_||(_={})).STORAGE="storage",n.HTTP="http",n.HTML="html",_;var n})();const h=(n,c)=>n+Math.floor((c-n+1)*Math.random()),O=(n,c,e,o=[],s)=>{if(!e)return o;const i=h(n,c),a=null!=s&&-1!==o.indexOf(s),l=null!=s&&!isNaN(s)&&!a;return null!=s&&l?O(n,c,e-1,[...o,s],i):O(n,c,e,o,i)},P=(n,c,e)=>{e(),setTimeout(()=>P(n,c,e),Math.max(n,c*Math.random()))},Z=(n,c,e)=>Math.floor(n*e/c),T=(n,c)=>O(0,2*n-1,c).sort((e,o)=>(e-o)*(e/n>=1&&o/n>=1?-1:1)).filter(e=>e%n).map((e,o)=>{const s=2*n,i=e%n,a=e/n>=1,l=a?-1*(e-1.5*n)+1.5*n:e,g=Math.max(0,h(0,n-i-1)),u=s/2*60,f=u-60*(a?-(g+.5):g+.5),d=60/c;return{order:l,x:60*(n-(i+g+.5)),y:f,cornerX:30+60*g,cornerY:u-30+d/2+o*d-f}}),b=(n,c)=>T(c,n).map(({order:e,x:o,y:s,cornerX:i,cornerY:a})=>({type:Object.values(p)[Z(e,2*c,Object.values(p).length)],active:!1,x:o,y:s,translate:`translate(${o}, ${s})`,path:`M 30 0 L ${i} ${a} H ${60*c-o}`})),H=(n,c)=>T(c,n).map(({order:e,x:o,y:s,cornerX:i,cornerY:a})=>{const l=60*(2*c+2)-o;return{type:Object.values(_)[Z(e,2*c,Object.values(_).length)],active:!1,x:o,y:s,translate:`translate(${l}, ${s})`,path:`M -30 0 L ${-i} ${a} H ${-(60*c-o)}`}});let E=(()=>{class n{constructor(e){this.zone=e,this.ww=window.innerWidth,this.n=this.ww<550?6:this.ww<1e3?10:this.ww<1900?15:22}ngOnInit(){this.circuits=new Array(this.n).fill(0).map((e,o)=>{const s=h(2,5),i=h(2,5);return{i:o,sources:b(s,6),sinks:H(i,6)}}),window.MOARRR=()=>this.zone.runOutsideAngular(()=>this.makeCircuitsFire()),window.MOARRR()}makeCircuitsFire(){P(500,3e3,()=>{const u=Array.from(document.querySelectorAll(".source"));if(!u.length)return;const f=(n=>{const c=h(0,n.length-1);return{i:c,el:n[c]}})(u).el,C=f.parentNode,d=f.querySelector(".connector-pulse path"),M=C.querySelector(".adapter"),v=Array.from(C.querySelectorAll(".sink")).map(r=>r.querySelector(".connector-pulse path"));[[0,()=>this.activate(d)],[1500,()=>this.deactivate(d)],[400,()=>this.activate(M)],[600,()=>this.deactivate(M)],[500,()=>v.forEach(r=>Math.random()<.6&&this.activate(r))],[2e3,()=>v.forEach(r=>this.deactivate(r))]].forEach(([r,k])=>setTimeout(k,r))})}activate(e){e.className.baseVal=e.className.baseVal+" active"}deactivate(e){e.className.baseVal=e.className.baseVal.replace(/(\s*)active/,"")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.R0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["state-adapt-circuits"]],inputs:{n:"n"},standalone:!0,features:[t.jDz],decls:21,vars:1,consts:[["class","circuit","viewBox","-3 -3 843 723",4,"ngFor","ngForOf"],[2,"display","none"],["id","adapter","viewBox","-63 -63 126 126",1,"adapter"],["d","M-30 -52 l-30 52 l30 52 h60 l30 -52 l-30 -52 h-60"],["id","clock","viewBox","-33 -33 66 66",1,"clock"],["r","30","cx","0","cy","0",1,"clock-circle"],["d","M0 .5 v-23",1,"hand"],["d","M-.4 -.4 l12 12",1,"hand"],["id","http","viewBox","0 0 99.79 59.1",1,"http"],["d","M70.67,12.9h4.72l1,2.93c5-4.2,10.43-5.74,16.19-2.4s7.51,9.21,7.14,15.45a30,30,0,0,1-2.57,11c-3.69,7.61-11.34,8.79-21.2,3.57V58.86l-5.3.24ZM94,29.46c.06-7.57-2.63-12-7.66-12.66-5.84-.74-9.57,2.84-10.35,10-1,9.1,1.94,14.68,8,15.18C90.14,42.44,93.94,37.73,94,29.46Z"],["d","M0,0H4.87V15c4-1.17,7.43-2.82,11-3.08,6.19-.46,10.13,2.64,10.55,8.76.57,8.23.14,16.53.14,25H21c0-6.89,0-13.66,0-20.44,0-4.1-.53-7.8-5.68-8.36-4.89-.54-8.91,2.17-9.59,7.24-.64,4.75-.48,9.61-.62,14.42-.06,2.28,0,4.57,0,7.1H0Z"],["d","M36.1,17.48,32,16.55V13l3.88-1.06.49-8.62h5.31l.41,8.66,4.72.89.17,3.9-5.08.46V40.36l5,1.83v3.87c-2,0-4.08.53-5.71-.14s-4-2.37-4.3-4c-.78-3.85-.65-7.89-.74-11.86C36,26,36.1,21.85,36.1,17.48Z"],["d","M60.13,12l4.68.82.28,3.62-5,.9v23.1l4.78,1.78v3.24c-7.63,2-10.62-.09-10.78-7.54-.14-6.63,0-13.27,0-20.2L50,16.36V13.13l4-1.34c.13-2.74.24-5.36.38-8.43l5.32-.45C59.8,6.07,60,9,60.13,12Z"],["id","websocket","viewBox","0 0 256 193","xmlns","http://www.w3.org/2000/svg",1,"websocket"],["d","M192.44 144.645h31.78V68.339l-35.805-35.804-22.472 22.472 26.497 26.497v63.14zm31.864 15.931H113.452L86.954 134.08l11.237-11.236 21.885 21.885h45.028l-44.357-44.441 11.32-11.32 44.357 44.358V88.296l-21.801-21.801 11.152-11.153L110.685 0H0l31.696 31.696v.084H97.436l23.227 23.227-33.96 33.96L63.476 65.74V47.712h-31.78v31.193l55.007 55.007L64.314 156.3l35.805 35.805H256l-31.696-31.529z"],["id","html","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 220.8 138.84",1,"html"],["d","M145.38,10.14a68.44,68.44,0,0,1-1.95,6.71q-23.1,57.57-46.34,115.09c-2.48,6.12-8.38,8.33-14.39,6-5.65-2.23-8.36-7.64-6-13.79,6.16-16.31,12.61-32.52,19.08-48.71,9-22.51,18.16-45,27.21-67.47,1.93-4.8,5.44-7.73,10.48-7.93A10.93,10.93,0,0,1,144,6.33,34.22,34.22,0,0,1,145.38,10.14Z"],["d","M26.47,72.76l36,34a11.51,11.51,0,0,1,3.8,10.78c-1.26,8.06-11.32,12.53-17.17,6.89C33.27,109.22,17.85,93.56,2.51,77.85c-3.6-3.69-3.25-9.28.55-13.12Q25.71,41.84,48.72,19.31c4.06-4,10.27-3.56,14.38.3s4.9,10.55,1,14.82C57,42.14,49.6,49.6,42.26,57.09,37.61,61.85,32.82,66.47,26.47,72.76Z"],["d","M194.82,71.37c-11.27-10.65-21.33-20.1-31.31-29.62a93.84,93.84,0,0,1-6.79-7.31,10.17,10.17,0,0,1,.54-14.37c4-4.11,10.82-4.89,14.84-.93Q195.4,42,218.28,65.41a9,9,0,0,1-.21,12.68q-22.95,23.28-46.32,46.14c-4,3.89-10.42,3.15-14.39-.87-4.18-4.23-4.61-10.54-.54-14.83q12.7-13.41,25.81-26.42C186,78.72,189.83,75.73,194.82,71.37Z"],["id","storage","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"storage"],["d","M283,512H229a53.3,53.3,0,0,0-5.86-.83c-37.51-1.37-74.7-5.38-111.42-13.23-27.57-5.9-54.61-13.49-79.47-27.23C18.06,462.86,5.43,453.32,0,437V75C4.25,61.76,13.73,53,25,45.67a57.49,57.49,0,0,1,9.49-5.5c16.33-6.53,32.43-13.9,49.23-19C121.61,9.78,160.75,4.82,200.17,2c9.94-.7,19.89-1.35,29.83-2h53c2.3.29,4.59.76,6.89.84,37.34,1.4,74.36,5.45,110.91,13.29,26.74,5.73,53,13.14,77.23,26.2,14.85,8,28.27,17.61,34,34.67V437c-3,5.29-5,11.59-9.18,15.64a131,131,0,0,1-23.59,18.15c-16.82,10-35.41,16-54.23,21.15-37.88,10.33-76.57,15.61-115.69,18.15C300.54,510.66,291.77,511.36,283,512ZM32.17,432c2.83,2.21,5.77,5.37,9.38,7.19,10.53,5.29,21,10.91,32.07,14.87,44.77,16,91.45,22.16,138.62,24.8,53.38,3,106.59,1.06,159.4-7.89,28.94-4.91,57.39-11.7,84.29-23.84,8.82-4,17.39-8.4,23.93-15.59V343.27c-8.27,3.64-16.15,7.55-24.33,10.63-51.89,19.5-106.13,26.17-161,29.06a761.31,761.31,0,0,1-126.75-4c-33.64-3.84-66.9-9.69-99-20.69-12.36-4.23-24.33-9.6-36.58-14.5ZM479.9,231.69c-12.13,4.89-23.63,10.18-35.56,14.22C397.43,261.8,348.76,268,299.59,270.74c-57.92,3.17-115.58.59-172.74-9.82-32.19-5.86-63.73-13.92-93-29.22a7,7,0,0,0-1.85-.33v72.07C41.1,313,53,318.27,65.09,323c43,16.7,87.94,24.14,133.61,26.76,31.89,1.83,63.94,1.81,95.89,1.14A510.56,510.56,0,0,0,401.39,337c21.58-5.09,42.85-11.23,62.47-21.87,5.88-3.19,11.2-7.43,16-10.69ZM480,119.93c-14,5.42-27.57,11.44-41.59,15.92-42.44,13.58-86.27,19.47-130.59,22.32-62.44,4-124.53,1.4-186.1-10.23-28-5.29-55.48-12.6-81.35-25-2.64-1.26-5.26-2.57-8.23-4v73.55c5,3.36,10.22,7.64,16.09,10.56A229.93,229.93,0,0,0,76.13,215c51.94,17.66,105.83,23.3,160.26,24.82,45.22,1.26,90.26-1.16,134.93-8.78,29.1-5,57.71-11.74,84.77-24,8.8-4,17.37-8.38,23.86-15.64Zm.59-39.52c-4.34-3.35-7-6-10.11-7.69-7.75-4.17-15.5-8.51-23.67-11.71C404,44.28,359.13,37.59,313.69,34A755.35,755.35,0,0,0,216.3,32.9c-39.84,2-79.26,6.88-117.88,17.15-17.56,4.67-34.82,10.26-50.81,19-5.26,2.89-10,6.67-15.51,10.38a57.1,57.1,0,0,0,5,4.58,108.88,108.88,0,0,0,10.9,7c25.79,13.5,53.68,20.51,82,26,31.62,6.13,63.58,9.17,95.75,10.35,59,2.16,117.53-1.12,175.24-14.36,21.12-4.85,41.86-11,61.19-21C468.17,88.91,473.63,84.83,480.54,80.41Z"],["viewBox","-3 -3 843 723",1,"circuit"],["class","source",4,"ngFor","ngForOf"],[0,"xlink","href","#adapter","width","120",1,"adapter"],["class","sink",4,"ngFor","ngForOf"],[1,"source"],[0,"xlink","href","#clock","width","60",4,"ngIf"],[0,"xlink","href","#http","width","60",4,"ngIf"],[0,"xlink","href","#websocket","width","60",4,"ngIf"],[0,"xlink","href","#html","width","60",4,"ngIf"],[1,"connector"],[1,"connector-pulse"],[0,"xlink","href","#clock","width","60"],[0,"xlink","href","#http","width","60"],[0,"xlink","href","#websocket","width","60"],[0,"xlink","href","#html","width","60"],[1,"sink"],[0,"xlink","href","#storage","width","60",4,"ngIf"],[0,"xlink","href","#storage","width","60"]],template:function(e,o){1&e&&(t.YNc(0,V,4,2,"svg",0),t.TgZ(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.TgZ(4,"svg",4),t._UZ(5,"circle",5)(6,"path",6)(7,"path",7),t.qZA(),t.TgZ(8,"svg",8),t._UZ(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12),t.qZA(),t.TgZ(13,"svg",13),t._UZ(14,"path",14),t.qZA(),t.TgZ(15,"svg",15),t._UZ(16,"path",16)(17,"path",17)(18,"path",18),t.qZA(),t.TgZ(19,"svg",19),t._UZ(20,"path",20),t.qZA()()),2&e&&t.Q6J("ngForOf",o.circuits)},dependencies:[m.ez,m.sg,m.O5],styles:[".circuit[_ngcontent-%COMP%]{position:absolute;width:225px;height:192.8571428571px;stroke:#8d8d8d;fill:none}.circuit[_ngcontent-%COMP%]:nth-child(1){left:48.2142857143px;top:-120.5357142857px}.circuit[_ngcontent-%COMP%]:nth-child(2){left:-48.2142857143px;top:24.1071428571px}.circuit[_ngcontent-%COMP%]:nth-child(3){left:347.1428571429px;top:135px}.circuit[_ngcontent-%COMP%]:nth-child(4){left:86.7857142857px;top:289.2857142857px}.circuit[_ngcontent-%COMP%]:nth-child(5){left:-72.3214285714px;top:626.7857142857px}.circuit[_ngcontent-%COMP%]:nth-child(6){left:347.1428571429px;top:482.1428571429px}.circuit[_ngcontent-%COMP%]:nth-child(7){left:578.5714285714px;top:289.2857142857px}.circuit[_ngcontent-%COMP%]:nth-child(8){left:810px;top:385.7142857143px}.circuit[_ngcontent-%COMP%]:nth-child(9){left:486.9642857143px;top:96.4285714286px}.circuit[_ngcontent-%COMP%]:nth-child(10){left:626.7857142857px;top:-81.9642857143px}.circuit[_ngcontent-%COMP%]:nth-child(11){left:954.6428571429px;top:-24.1071428571px}.circuit[_ngcontent-%COMP%]:nth-child(12){left:1369.2857142857px;top:72.3214285714px}.circuit[_ngcontent-%COMP%]:nth-child(13){left:1157.1428571429px;top:192.8571428571px}.circuit[_ngcontent-%COMP%]:nth-child(14){left:1272.8571428571px;top:289.2857142857px}.circuit[_ngcontent-%COMP%]:nth-child(15){left:1504.2857142857px;top:554.4642857143px}.circuit[_ngcontent-%COMP%]:nth-child(16){left:1735.7142857143px;top:337.5px}.circuit[_ngcontent-%COMP%]:nth-child(17){left:2121.4285714286px;top:192.8571428571px}.circuit[_ngcontent-%COMP%]:nth-child(18){left:2025px;top:578.5714285714px}.circuit[_ngcontent-%COMP%]:nth-child(19){left:1947.8571428571px;top:96.4285714286px}.circuit[_ngcontent-%COMP%]:nth-child(20){left:1639.2857142857px;top:458.0357142857px}.circuit[_ngcontent-%COMP%]:nth-child(21){left:1687.5px;top:-24.1071428571px}.circuit[_ngcontent-%COMP%]:nth-child(22){left:1783.9285714286px;top:168.75px}.circuit[_ngcontent-%COMP%]   .adapter[_ngcontent-%COMP%]{stroke-width:6px;opacity:.6;transform:translate(360px) rotate(30deg);transform-origin:60px 360px}.clock[_ngcontent-%COMP%]   .clock-circle[_ngcontent-%COMP%]{stroke-width:5px;fill:none}.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]{stroke-width:3px}.http[_ngcontent-%COMP%], .websocket[_ngcontent-%COMP%], .clock[_ngcontent-%COMP%], .html[_ngcontent-%COMP%], .storage[_ngcontent-%COMP%]{fill:#8d8d8d;opacity:.4}.connector[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:#8d8d8d;fill:none;stroke-width:3;opacity:.4;transition:stroke 2s linear all}.connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transform:translateZ(0);stroke:#ff4500;fill:none;stroke-width:8;stroke-dasharray:450;stroke-dashoffset:450}.connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%]{animation:dash .4s linear}.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:purple;stroke-dashoffset:-450}.sink[_ngcontent-%COMP%]   .connector-pulse[_ngcontent-%COMP%]   path.active[_ngcontent-%COMP%]{animation:dash .4s linear reverse}@keyframes dash{0%{stroke-dashoffset:450}to{stroke-dashoffset:-450}}path[_ngcontent-%COMP%]{stroke-width:var(--stroke-width)}.adapter.active[_ngcontent-%COMP%]{--stroke-width: 8;stroke:#00ced1;opacity:1!important;transition:transform .2s ease-out;transform:translate(360px) rotate(90deg)!important}"],changeDetection:0}),n})()}}]);