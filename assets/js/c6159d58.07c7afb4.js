"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[440],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"react-table"},c=void 0,u={unversionedId:"web/react/react-table",id:"web/react/react-table",title:"react-table",description:"- tannerlinsley/react-table",source:"@site/notes/web/react/react-table.md",sourceDirName:"web/react",slug:"/web/react/react-table",permalink:"/notes/web/react/react-table",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-table.md",tags:[],version:"current",frontMatter:{title:"react-table"},sidebar:"docs",previous:{title:"React Route",permalink:"/notes/web/react/react-router"},next:{title:"React Version",permalink:"/notes/web/react/react-version"}},s=[{value:"Note",id:"note",children:[],level:2},{value:"useTable",id:"usetable",children:[],level:2},{value:"usePagination",id:"usepagination",children:[],level:2},{value:"useTokenPagination",id:"usetokenpagination",children:[],level:2},{value:"useRowSelect",id:"userowselect",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table"},"tannerlinsley/react-table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Hook \u529f\u80fd\u5f3a\u5927\u7684 Table \u7ec4\u4ef6")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sticky \u884c\u5217",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GuillaumeJasmin/react-table-sticky"},"GuillaumeJasmin/react-table-sticky"))))))),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"react-table \u6838\u5fc3\u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c reduce"),(0,l.kt)("li",{parentName:"ul"},"\u884c\u5217\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u529f\u80fd\u7531\u63d2\u4ef6\u63d0\u4f9b")))),(0,l.kt)("h2",{id:"usetable"},"useTable"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 memoized \u7684\u5c5e\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"colums, data, getSubRows, getRowId")))),(0,l.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export const usePagination = (hooks) => {\n  hooks.stateReducers.push(reducer);\n  hooks.useInstance.push(useInstance);\n};\n\n// \u72b6\u6001\u5904\u7406\nfunction reducer(state, action: { type }, previousState, instance) {\n  // \u521d\u59cb\u5316\n  if (action.type === actions.init) {\n    return {\n      pageSize: 10,\n      pageIndex: 0,\n      ...state,\n    };\n  }\n}\n\n// \u4f1a\u5728 hook \u4e2d\u5faa\u73af\u8c03\u7528 - \u53ef\u4ee5\u4f7f\u7528 react hook \u5b9e\u73b0\u63d2\u4ef6\u72b6\u6001\n// \u53ef\u6dfb\u52a0\u989d\u5916\u65b9\u6cd5\u5230 instance\nfunction useInstance(instance) {}\n")),(0,l.kt)("h2",{id:"usepagination"},"usePagination"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d7\u63a7\u5206\u9875",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9 row \u6570\u636e\u8fdb\u884c\u5206\u9875"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u884c\u6570\u8ba1\u7b97 pageCount"))),(0,l.kt)("li",{parentName:"ul"},"\u975e\u53d7\u63a7\u5206\u9875",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u670d\u52a1\u7aef\u63a5\u53e3\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b pageCount")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface PaginationState {\n  pageIndex;\n  pageSize;\n}\n\ninterface PaginationInstance {\n  pageCount: number;\n  pageOptions: number[];\n  page: Row[];\n\n  canPreviousPage: boolean;\n  canNextPage: boolean;\n\n  // \u64cd\u4f5c - \u8fdb\u884c dispatch\n  gotoPage(pageIndex);\n  previousPage();\n  nextPage();\n  setPageSize(pageSize);\n}\n")),(0,l.kt)("h2",{id:"usetokenpagination"},"useTokenPagination"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table/blob/master/src/utility-hooks/useTokenPagination.js"},"src/utility-hooks/useTokenPagination.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u672a\u5305\u542b\u5728\u6b63\u5e38\u5305\u91cc"),(0,l.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pageToken"),(0,l.kt)("li",{parentName:"ul"},"nextPageToken"),(0,l.kt)("li",{parentName:"ul"},"previousPageTokens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u7ec4 - \u8bb0\u5f55\u7ecf\u8fc7\u7684 token"))),(0,l.kt)("li",{parentName:"ul"},"pageIndex")))),(0,l.kt)("h2",{id:"userowselect"},"useRowSelect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5728 row \u4e0a\u8bbe\u7f6e isSelected")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface RowSelectOptions {\n  initialState: {\n    selectedRowIds: Record<string: boolean> // rowId\n  }\n  manualRowSelectedKey?:string // 'isSelected'\n  autoResetSelectedRows?:bool // true\n}\n\n\ninterface RowSelectInstance {\n  toggleRowSelected(rowPath: string, set?: boolean): void;\n\n  toggleAllRowsSelected(set?: boolean): void;\n\n  toggleAllPageRowsSelected(set?: boolean): void;\n\n  getToggleAllPageRowsSelectedProps(props): RowSelectProps;\n\n  getToggleAllRowsSelectedProps(props): RowSelectProps;\n\n  isAllRowsSelected: boolean;\n  selectedFlatRows: Array<Row>;\n}\n\ninterface RowSelectProps {\n  onChange;\n  style: { cursor };\n  indeterminate;\n  title;\n}\n\ninterface RowSelectRowProps {\n  isSelected: boolean;\n  isSomeSelected: boolean;\n  toggleRowSelected(set?: boolean);\n  getToggleRowSelectedProps(props): RowSelectProps;\n}\n")))}m.isMDXComponent=!0}}]);