import{S as W,i as Y,s as Z,k as u,q as C,a as I,l as h,m as f,r as H,h as c,c as N,n as t,b as x,E as e,C as G,a4 as $,u as J}from"../../../chunks/index-7d857393.js";function K(m,s,v){const o=m.slice();return o[2]=s[v],o}function Q(m){let s,v,o,i,p,U,a,y,P,V,_,w,B=m[2].title+"",b,k,A,D=m[2].content+"",R,T;return{c(){s=u("article"),v=u("div"),o=u("a"),i=u("button"),U=I(),a=u("form"),y=u("button"),V=I(),_=u("div"),w=u("header"),b=C(B),k=I(),A=u("p"),R=C(D),T=I(),this.h()},l(E){s=h(E,"ARTICLE",{class:!0});var n=f(s);v=h(n,"DIV",{class:!0});var S=f(v);o=h(S,"A",{href:!0,role:!0,class:!0});var L=f(o);i=h(L,"BUTTON",{id:!0,class:!0}),f(i).forEach(c),L.forEach(c),U=N(S),a=h(S,"FORM",{action:!0,method:!0});var d=f(a);y=h(d,"BUTTON",{id:!0,type:!0,class:!0}),f(y).forEach(c),d.forEach(c),S.forEach(c),V=N(n),_=h(n,"DIV",{class:!0});var l=f(_);w=h(l,"HEADER",{class:!0});var g=f(w);b=H(g,B),g.forEach(c),k=N(l),A=h(l,"P",{});var r=f(A);R=H(r,D),r.forEach(c),l.forEach(c),T=N(n),n.forEach(c),this.h()},h(){t(i,"id","edit"),t(i,"class","svelte-4eympc"),t(o,"href",p="/"+m[2].id),t(o,"role","button"),t(o,"class","outline constrast"),t(y,"id","delete"),t(y,"type","submit"),t(y,"class","outline secondary svelte-4eympc"),t(a,"action",P="?/deleteArticle&id="+m[2].id),t(a,"method","POST"),t(v,"class","controls svelte-4eympc"),t(w,"class","svelte-4eympc"),t(_,"class","art-content svelte-4eympc"),t(s,"class","svelte-4eympc")},m(E,n){x(E,s,n),e(s,v),e(v,o),e(o,i),e(v,U),e(v,a),e(a,y),e(s,V),e(s,_),e(_,w),e(w,b),e(_,k),e(_,A),e(A,R),e(s,T)},p(E,n){n&1&&p!==(p="/"+E[2].id)&&t(o,"href",p),n&1&&P!==(P="?/deleteArticle&id="+E[2].id)&&t(a,"action",P),n&1&&B!==(B=E[2].title+"")&&J(b,B),n&1&&D!==(D=E[2].content+"")&&J(R,D)},d(E){E&&c(s)}}}function ee(m){let s,v,o,i,p,U,a,y,P,V,_,w,B,b,k,A,D,R,T,E,n,S,L=m[0],d=[];for(let l=0;l<L.length;l+=1)d[l]=Q(K(m,L,l));return{c(){s=u("h2"),v=C("Articles:"),o=I(),i=u("div"),p=u("div");for(let l=0;l<d.length;l+=1)d[l].c();U=I(),a=u("form"),y=u("h3"),P=C("New Article"),V=I(),_=u("label"),w=C("Title"),B=I(),b=u("input"),k=I(),A=u("label"),D=C("Title"),R=I(),T=u("textarea"),E=I(),n=u("button"),S=C("Add Article"),this.h()},l(l){s=h(l,"H2",{});var g=f(s);v=H(g,"Articles:"),g.forEach(c),o=N(l),i=h(l,"DIV",{class:!0});var r=f(i);p=h(r,"DIV",{});var q=f(p);for(let F=0;F<d.length;F+=1)d[F].l(q);q.forEach(c),U=N(r),a=h(r,"FORM",{class:!0,action:!0,method:!0});var O=f(a);y=h(O,"H3",{});var M=f(y);P=H(M,"New Article"),M.forEach(c),V=N(O),_=h(O,"LABEL",{for:!0});var X=f(_);w=H(X,"Title"),X.forEach(c),B=N(O),b=h(O,"INPUT",{type:!0,id:!0,name:!0,class:!0}),k=N(O),A=h(O,"LABEL",{for:!0});var j=f(A);D=H(j,"Title"),j.forEach(c),R=N(O),T=h(O,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(T).forEach(c),E=N(O),n=h(O,"BUTTON",{type:!0,class:!0});var z=f(n);S=H(z,"Add Article"),z.forEach(c),O.forEach(c),r.forEach(c),this.h()},h(){t(_,"for","title"),t(b,"type","text"),t(b,"id","title"),t(b,"name","title"),t(b,"class","svelte-4eympc"),t(A,"for","title"),t(T,"id","content"),t(T,"name","content"),t(T,"rows",5),t(T,"class","svelte-4eympc"),t(n,"type","submit"),t(n,"class","svelte-4eympc"),t(a,"class","new-art svelte-4eympc"),t(a,"action","?/createArticle"),t(a,"method","POST"),t(i,"class","grid svelte-4eympc")},m(l,g){x(l,s,g),e(s,v),x(l,o,g),x(l,i,g),e(i,p);for(let r=0;r<d.length;r+=1)d[r].m(p,null);e(i,U),e(i,a),e(a,y),e(y,P),e(a,V),e(a,_),e(_,w),e(a,B),e(a,b),e(a,k),e(a,A),e(A,D),e(a,R),e(a,T),e(a,E),e(a,n),e(n,S)},p(l,[g]){if(g&1){L=l[0];let r;for(r=0;r<L.length;r+=1){const q=K(l,L,r);d[r]?d[r].p(q,g):(d[r]=Q(q),d[r].c(),d[r].m(p,null))}for(;r<d.length;r+=1)d[r].d(1);d.length=L.length}},i:G,o:G,d(l){l&&c(s),l&&c(o),l&&c(i),$(d,l)}}}function te(m,s,v){let o,{data:i}=s;return m.$$set=p=>{"data"in p&&v(1,i=p.data)},m.$$.update=()=>{m.$$.dirty&2&&v(0,{articles:o}=i,o)},[o,i]}class ae extends W{constructor(s){super(),Y(this,s,te,ee,Z,{data:1})}}export{ae as default};
