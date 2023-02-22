"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[3267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="useShop",i={unversionedId:"hooks/global/useshop",id:"hooks/global/useshop",title:"useShop",description:"The useShop hook provides access to values within the shopify property in the hydrogen.config.js file. It must be a descendent of a ShopifyProvider component.",source:"@site/docs/hooks/global/useshop.md",sourceDirName:"hooks/global",slug:"/hooks/global/useshop",permalink:"/hooks/global/useshop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useServerProps",permalink:"/hooks/global/useserverprops"},next:{title:"useShopQuery",permalink:"/hooks/global/useshopquery"}},p={},s=[{value:"Example code",id:"example-code",level:2},{value:"Return value",id:"return-value",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useshop"},"useShop"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useShop")," hook provides access to values within the ",(0,o.kt)("inlineCode",{parentName:"p"},"shopify")," property in ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/configuration"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"hydrogen.config.js")," file"),". It must be a descendent of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ShopifyProvider")," component."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useShop} from '@shopify/hydrogen';\n\nexport default function MyPage() {\n  const {locale} = useShop();\n\n  return <h1>The locale is {locale}</h1>;\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useShop")," hook returns an object with the following keys:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"defaultCountryCode")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"defaultCountryCode")," from ",(0,o.kt)("inlineCode",{parentName:"td"},"hydrogenConfig.shopify"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"defaultLanguageCode")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"defaultLanguageCode")," from ",(0,o.kt)("inlineCode",{parentName:"td"},"hydrogenConfig.shopify"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"storeDomain")),(0,o.kt)("td",{parentName:"tr",align:null},"The store domain set in ",(0,o.kt)("inlineCode",{parentName:"td"},"hydrogenConfig.shopify"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"storefrontToken")),(0,o.kt)("td",{parentName:"tr",align:null},"The Storefront API token set in ",(0,o.kt)("inlineCode",{parentName:"td"},"hydrogenConfig.shopify"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"storefrontApiVersion")),(0,o.kt)("td",{parentName:"tr",align:null},"The Storefront API version set in ",(0,o.kt)("inlineCode",{parentName:"td"},"hydrogenConfig.shopify"),".")))),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/global/shopifyprovider/"},(0,o.kt)("inlineCode",{parentName:"a"},"ShopifyProvider")))),(0,o.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/configuration"},"Hydrogen configuration"))))}c.isMDXComponent=!0}}]);