(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+zwd":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("WXus"),i=function(e){var t=e.title,n=e.to,r=e.type,i=e.label,l=e.disabled,c=a.a.createElement(a.a.Fragment,null,e.iconLeft&&a.a.createElement("span",{className:"icon icon-left"},e.iconLeft),a.a.createElement("span",null,e.title),e.iconRight&&a.a.createElement("span",{className:"icon icon-right"},e.iconRight));if(r){var u=r.split(","),s=u[1]?u[1]:"button",m=void 0!==l&&l;if("button"===u[0])return a.a.createElement("button",{type:s,disabled:m,className:"btn btn-primary"+(m?" disabled":"")},c)}return a.a.createElement(o.a,{to:n,className:"btn btn-primary",title:i||t},c)},l=function(e){var t=e.label,n=e.type,o=void 0===n?"text":n,i=e.name,l=e.onChange,c=e.footer,u=Object(r.useState)(!1),s=u[0],m=u[1],d=a.a.createElement("input",{type:o,name:i,className:"block w-full outline-none px-4 py-2 focus:outline-none bg-bg text-color-default",onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},onChange:l,"aria-label":i});return"textarea"===o&&(d=a.a.createElement("textarea",{className:"block w-full outline-none resize-none px-4 py-2 focus:outline-none bg-bg text-color-default",name:i,onChange:function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px",l(e)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},"aria-label":i})),a.a.createElement("div",{className:(s?"input focused shadow-2xl":"")+" transition-all duration-300 py-3 lg:p-4 pb-6"},a.a.createElement("p",{className:"text-color-3"},t),a.a.createElement("div",{className:"bg-gradient-primary p-2px"},d),c&&a.a.createElement(a.a.Fragment,null,c))}},cSKx:function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),o=n.n(a),i=n("+zwd"),l=n("9eSz"),c=n.n(l),u=n("lHIJ"),s=n("dI71");var m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getWindowHeight=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerHeight||n.clientHeight||r.clientHeight},n.getWindowWidth=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth},n.isScrolledIntoView=function(e,t,r){if(void 0===t&&(t=0),!r)return!1;var a=e.getBoundingClientRect().top-t,o=e.getBoundingClientRect().bottom+t;return a<=n.getWindowHeight()&&o>=0},n.onScroll=function(){var e=Date.now();e-n.timestamp>=20&&n.isScrolledIntoView(n.node.current,100,n.canUseDom)&&(n.props.changePercentage({percentage:1-n.getRelativePosition(n.node.current,n.canUseDom)}),n.timestamp=e)},n.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},n.getRelativePosition=function(e,t){if(!t)return 0;var r=e,a=r.getBoundingClientRect(),o=a.top,i=a.height,l=n.getNodeHeight(r),c=i>l?i:l,u=Math.round(o>c?c:o);return n.getPercentage(-i,c,u)},n.node=o.a.createRef(),n.timestamp=0,n.canUseDom=!("undefined"==typeof window||!window.document||!window.document.createElement),n.state={percentage:0},n}Object(s.a)(t,e);var n=t.prototype;return n.getNodeHeight=function(e){return e&&"clientHeight"in e?e.clientHeight:this.getWindowHeight()},n.componentDidMount=function(){this.getWindowWidth()>1024&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},n.render=function(){return o.a.createElement("div",{ref:this.node},this.props.children)},t}(o.a.Component);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.data,n=e.even,r=Object(a.useState)({animated:!1,percentage:0}),l=r[0],s=r[1],d=function(e){return s(f(f({},l),e))},g=Object(a.useRef)(0);return Object(a.useEffect)((function(){var e,t,n,r;g.current=Math.min((e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0],(e.innerHeight||n.clientHeight||r.clientHeight)/2),300)*Math.max(0,l.percentage-.3),function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth}()<1024&&d({animated:!0})}),[l.percentage]),l.percentage>.3&&!l.animated&&d({animated:!0}),o.a.createElement(m,{changePercentage:d},o.a.createElement("div",{className:"large-container mx-auto"},o.a.createElement("div",{className:"my-4 py-8 lg:py-24 proyectos-item md:flex "+(l.animated?"begin-animation":"")+" "+(n?"even flex-row-reverse":"")},o.a.createElement("div",{className:"relative flex-1"},o.a.createElement("div",{className:"image relative z-10",style:{transform:"translate(0px,"+g.current+"px)"}},o.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title}))),o.a.createElement("div",{className:"flex-1 flex md:px-4 lg:px-6 items-center"},o.a.createElement("div",{className:"flex flex-1 flex-wrap  "+(n?"md:justify-end md:text-right":"")},o.a.createElement("h3",{className:"text-color-1 text-5xl font-black to-up capitalize"},t.frontmatter.title),o.a.createElement("p",{className:"lg:mt-4 to-up"},t.frontmatter.description),o.a.createElement(i.a,{to:t.fields.slug,label:"Más información "+t.frontmatter.title,title:"Más información",iconRight:o.a.createElement(u.a,null)}))))))}},lHIJ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,c=void 0===l?24:l,u=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));l.displayName="ArrowRight",t.a=l},"s/KN":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y})),n.d(t,"query",(function(){return b}));var r=n("q1tI"),a=n.n(r),o=n("9Dj+"),i=n("cSKx"),l=n("Wbzz");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,l=u(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));s.displayName="ChevronLeft";var m=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,l=f(e,["color","size"]);return a.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));g.displayName="ChevronRight";var p=g,h=function(e){var t=e.pageContext,n=e.type;if(t.numPages>1){var r=Array.from({length:t.numPages}).map((function(e,r){return a.a.createElement(v,{type:n,currentPage:t.currentPage,page:r+1,key:"p-b-i-"+r})}));return a.a.createElement("div",{className:"pagination mt-8"},a.a.createElement("ul",{className:"text-center"},1!==t.currentPage&&a.a.createElement(v,{type:n,currentPage:t.currentPage,page:t.currentPage-1,icon:a.a.createElement(m,null),title:"Previous Page"}),r,t.currentPage!==t.numPages&&a.a.createElement(v,{type:n,currentPage:t.currentPage,page:t.currentPage+1,icon:a.a.createElement(p,null),title:"Next Page"})))}return a.a.createElement(a.a.Fragment,null)},v=function(e){var t=e.type,n=e.currentPage,r=e.title,o=e.page,i=e.icon,c="/"+t+"/"+(1===o?"":o),u=!i&&o===n,s=r||""+t.charAt(0).toUpperCase()+t.slice(1)+" - Page "+o;return a.a.createElement("li",{className:"inline-block align-middle"},a.a.createElement(l.a,{to:c,title:s,className:"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl "+(u?"bg-gradient-primary text-white shadow-2xl":"")},a.a.createElement("span",null,i||o)))};function y(e){var t=e.data,n=e.pageContext,l=e.location;Object(r.useEffect)((function(){window.dispatchEvent(new CustomEvent("scroll"))}),[]);var c=t.allMdx.edges.map((function(e,t){return a.a.createElement(i.a,{data:e.node,key:e.node.id,even:(t+1)%2==0})}));return a.a.createElement(o.a,{seo:{title:"PROYECTOS"},location:l},a.a.createElement("div",{className:"py-12 px-4 lg:px-0"},a.a.createElement("div",{className:"title py-8 text-center"},a.a.createElement("h2",{className:"font-black text-5xl text-color-1"},"PROYECTOS")),a.a.createElement("div",{className:"flex flex-wrap"},c),a.a.createElement("div",{className:"mt-8 lg:mt-24"},a.a.createElement(h,{pageContext:n,type:"proyectos"}))))}var b="3431884852"}}]);
//# sourceMappingURL=component---src-templates-proyectos-list-tsx-65a8ea82cfb6d545bebf.js.map