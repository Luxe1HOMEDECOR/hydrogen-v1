"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[6444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=o,k=m["".concat(l,".").concat(c)]||m[c]||d[c]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Routing",s={unversionedId:"tutorials/routing/index",id:"tutorials/routing/index",title:"Routing",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/routing/index.md",sourceDirName:"tutorials/routing",slug:"/tutorials/routing/",permalink:"/tutorials/routing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Working with React Server Components",permalink:"/tutorials/react-server-components/work-with-rsc"},next:{title:"Manage routes",permalink:"/tutorials/routing/manage-routes"}},l={},p=[{value:"How routes work",id:"how-routes-work",level:2},{value:"Example",id:"example",level:3},{value:"Built-in routes",id:"built-in-routes",level:2},{value:"Custom routes",id:"custom-routes",level:2},{value:"API routes",id:"api-routes",level:2},{value:"Example",id:"example-1",level:3},{value:"Props for creating custom experiences",id:"props-for-creating-custom-experiences",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Related components and hooks",id:"related-components-and-hooks",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,o.kt)("p",null,"The Hydrogen framework uses a file-based routing system. This guide provides an introduction to how routing works in your Hydrogen storefront."),(0,o.kt)("h2",{id:"how-routes-work"},"How routes work"),(0,o.kt)("p",null,"All components added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes")," directory are registered as routes in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.server.jsx"),". Any filenames with brackets, like ",(0,o.kt)("inlineCode",{parentName:"p"},"[handle]"),", are converted to a route parameter called ",(0,o.kt)("inlineCode",{parentName:"p"},":handle"),"."),(0,o.kt)("p",null,"You can navigate between routes using the ",(0,o.kt)("a",{parentName:"p",href:"/components/framework/link/"},(0,o.kt)("inlineCode",{parentName:"a"},"Link"))," component or the ",(0,o.kt)("a",{parentName:"p",href:"/hooks/framework/usenavigate/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigate"))," hook. You can use the ",(0,o.kt)("a",{parentName:"p",href:"/hooks/framework/userouteparams/"},(0,o.kt)("inlineCode",{parentName:"a"},"useRouteParams"))," hook to retrieve the parameters of an active route."),(0,o.kt)("p",null,"The following example shows how each ",(0,o.kt)("inlineCode",{parentName:"p"},"*.server.jsx")," file maps to a different route in the Hydrogen app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 routes\n        \u2514\u2500\u2500 collections\n            \u2514\u2500\u2500 [handle].server.jsx // localhost:3000/collections/<handle>\n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 [handle].server.jsx // localhost:3000/pages/<handle>\n        \u2514\u2500\u2500 products\n            \u2514\u2500\u2500 [handle].server.jsx // localhost:3000/products/<handle>\n        \u2514\u2500\u2500 index.server.jsx // localhost:3000/\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"You have following components in your ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/routes/index.server.jsx\n/routes/custom-page.server.jsx\n/routes/products/[handle].server.jsx\n")),(0,o.kt)("p",null,"The routes are registered in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.server.jsx")," and Hydrogen converts ",(0,o.kt)("inlineCode",{parentName:"p"},"[handle]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},":handle"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n/custom-page\n/products/:handle\n")),(0,o.kt)("h2",{id:"built-in-routes"},"Built-in routes"),(0,o.kt)("p",null,"Hydrogen provides the following built-in routes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/__health")),": A health check route that responds with a 200 status and no body. You can use this route within your infrastructure to verify that your app is healthy and able to respond to requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/__rsc")),": An internal route used to re-render server components. It's called by the Hydrogen frontend when the route changes, or when server props change. You should never need to manually request this route."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/__event")),": An internal route used to save client observability events. You should never need to manually request this route.")),(0,o.kt)("h2",{id:"custom-routes"},"Custom routes"),(0,o.kt)("p",null,"By default, Hydrogen uses a file-based routing system, but you can customize routes in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.server.jsx")," using the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/router/"},(0,o.kt)("inlineCode",{parentName:"a"},"Router")),": Provides the context for routing in your Hydrogen storefront"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/fileroutes/"},(0,o.kt)("inlineCode",{parentName:"a"},"FileRoutes")),": Builds a set of default Hydrogen routes based on the output provided by Vite's ",(0,o.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/features.html.md#glob-import"},"import.meta.globEager")," method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/route/"},(0,o.kt)("inlineCode",{parentName:"a"},"Route")),": Used to set up a route in Hydrogen that's independent of the file system")),(0,o.kt)("h2",{id:"api-routes"},"API routes"),(0,o.kt)("p",null,"API routes allow you to build your API in Hydrogen. Any server component within the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes")," directory that exports an API function will become an API route. The following examples show some common use cases for implementing API routes."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,'The following example shows a "Hello world" implementation of an API route:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export function api(request, {params}) {\n  return new Response('Hello world!');\n}\n")),(0,o.kt)("p",null,"{% endcodeblock%}"),(0,o.kt)("p",null,"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/routing/manage-routes#api-routes"},"work with API routes"),"."),(0,o.kt)("h2",{id:"props-for-creating-custom-experiences"},"Props for creating custom experiences"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-pages.png",alt:"Shows a diagram that illustrates how server components receive props"})),(0,o.kt)("p",null,"Server components placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes")," directory receive the following special props that you can use to create custom experiences:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"request")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HydrogenRequest"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"response")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HydrogenResponse"))))),(0,o.kt)("p",null,"Each server component receives props, which includes custom versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," and any ",(0,o.kt)("inlineCode",{parentName:"p"},"serverProps")," that you have passed from the client."),(0,o.kt)("p",null,"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/routing/manage-routes#create-custom-experiences-with-props"},"create custom experiences")," with props."),(0,o.kt)("h2",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,"Hydrogen supports TypeScript out of the box. When building route components, you can use the provided TypeScript types to improve your developer experience:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"\n\nimport type {\n  HydrogenApiRoute,\n  HydrogenApiRouteOptions,\n  HydrogenRequest,\n  HydrogenRouteProps,\n} from '@shopify/hydrogen';\n\nexport default function MyPage(props: HydrogenRouteProps) {\n  //\n}\n\nexport const api: HydrogenApiRoute = async (request, options) => {\n  //\n};\n\n// Alternate version of `api`:\nexport async function api(\n  request: HydrogenRequest,\n  options: HydrogenApiRouteOptions\n) {}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tip:\nThe Hello World template is available in ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/getting-started/templates#hello-world-template"},"TypeScript"),". You can also refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shopify/hydrogen/tree/main/examples/typescript"},"example implementation of TypeScript")," in GitHub.")),(0,o.kt)("h2",{id:"related-components-and-hooks"},"Related components and hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/link/"},(0,o.kt)("inlineCode",{parentName:"a"},"Link"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/router/"},(0,o.kt)("inlineCode",{parentName:"a"},"Router"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/fileroutes/"},(0,o.kt)("inlineCode",{parentName:"a"},"FileRoutes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/route/"},(0,o.kt)("inlineCode",{parentName:"a"},"Route"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/framework/usenavigate/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigate"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/framework/userouteparams/"},(0,o.kt)("inlineCode",{parentName:"a"},"useRouteParams"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/global/usequery/"},(0,o.kt)("inlineCode",{parentName:"a"},"useQuery"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/global/useshopquery/"},(0,o.kt)("inlineCode",{parentName:"a"},"useShopQuery"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/global/fetchsync/"},(0,o.kt)("inlineCode",{parentName:"a"},"fetchSync"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/form/"},(0,o.kt)("inlineCode",{parentName:"a"},"Form")))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn how to perform common tasks for ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/routing/manage-routes/"},"managing routes in Hydrogen"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/configuration/"},"Hydrogen's configuration properties")," and how to change the location of the configuration file."),(0,o.kt)("li",{parentName:"ul"},"Learn about how Hydrogen consumes data from different ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/data-sources/"},"sources"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to manage ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/querying/cache/"},"cache options")," for Hydrogen storefronts."),(0,o.kt)("li",{parentName:"ul"},"Improve your app's loading performance with ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/streaming-ssr/"},"streaming SSR and Suspense"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/server-props/"},"manage your server props")," during your development process.")))}d.isMDXComponent=!0}}]);