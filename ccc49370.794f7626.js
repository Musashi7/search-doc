(window.webpackJsonp=window.webpackJsonp||[]).push([[27,4],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(114),l=t(138),s=t(108);var i=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(124),m=t(144),d=t(135);a.default=function(e){const{content:a,sidebar:t}=e,{frontMatter:n,metadata:s}=a,{title:u,description:h,nextItem:v,prevItem:p,editUrl:E}=s,{hide_table_of_contents:b}=n;return r.a.createElement(c.a,{title:u,description:h,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(l.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,E&&r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d.a,null),"Edit this page")),(v||p)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:v,prevItem:p}))),!b&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:a.toc})))))}},115:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(113),l=t.n(c),s=t(109),i=t(22);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(s.useHistory)(),{siteConfig:m={}}=Object(i.default)(),{baseUrl:d}=m,u=()=>{a.current||(Promise.all([fetch(`${d}search-doc.json`).then((e=>e.json())),fetch(`${d}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(35),t.e(39)]).then(t.bind(null,119)),t.e(24).then(t.t.bind(null,118,7))]).then((([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,o.push(n)}})})(e,a,t)})),a.current=!0)},h=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:h,onBlur:h,ref:c}))}},135:function(e,a,t){"use strict";var n=t(3),r=t(0),c=t.n(r),l=t(106),s=t(57),i=t.n(s);a.a=({className:e,...a})=>c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(l.a)(i.a.iconEdit,e)},a),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(106);var l=function(e,a,t){const[r,c]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),a=e.find((e=>{const{top:a}=e.getBoundingClientRect();return a>=t}));if(a){if(a.getBoundingClientRect().top>=t){const t=e[e.indexOf(a)-1];return null!=t?t:a}return a}return e[e.length-1]}();if(n){let t=0,l=!1;const s=document.getElementsByClassName(e);for(;t<s.length&&!l;){const e=s[t],{href:i}=e,o=decodeURIComponent(i.substring(i.indexOf("#")+1));n.id===o&&(r&&r.classList.remove(a),e.classList.add(a),c(e),l=!0),t+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=t(56),i=t.n(s);const o="table-of-contents__link";function m({toc:e,isChild:a}){return e.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))))):null}a.a=function({toc:e}){return l(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(c.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:e}))}}}]);