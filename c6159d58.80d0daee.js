(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{768:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(935)),o={title:"react-table"},c={unversionedId:"web/react/react-table",id:"web/react/react-table",isDocsHomePage:!1,title:"react-table",description:"- tannerlinsley/react-table",source:"@site/notes/web/react/react-table.md",slug:"/web/react/react-table",permalink:"/notes/web/react/react-table",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-table.md",version:"current",sidebar:"docs",previous:{title:"React Route",permalink:"/notes/web/react/react-router"},next:{title:"react-window",permalink:"/notes/web/react/react-window"}},i=[{value:"Note",id:"note",children:[]},{value:"useTable",id:"usetable",children:[]},{value:"usePagination",id:"usepagination",children:[]},{value:"useTokenPagination",id:"usetokenpagination",children:[]},{value:"useRowSelect",id:"userowselect",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table"},"tannerlinsley/react-table"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Hook \u529f\u80fd\u5f3a\u5927\u7684 Table \u7ec4\u4ef6")))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sticky \u884c\u5217",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/GuillaumeJasmin/react-table-sticky"},"GuillaumeJasmin/react-table-sticky"))))))),Object(l.b)("h2",{id:"note"},"Note"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"react-table \u6838\u5fc3\u529f\u80fd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c reduce"),Object(l.b)("li",{parentName:"ul"},"\u884c\u5217\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u529f\u80fd\u7531\u63d2\u4ef6\u63d0\u4f9b")))),Object(l.b)("h2",{id:"usetable"},"useTable"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9700\u8981 memoized \u7684\u5c5e\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"colums, data, getSubRows, getRowId")))),Object(l.b)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"export const usePagination = (hooks) => {\n  hooks.stateReducers.push(reducer);\n  hooks.useInstance.push(useInstance);\n};\n\n// \u72b6\u6001\u5904\u7406\nfunction reducer(state, action: { type }, previousState, instance) {\n  // \u521d\u59cb\u5316\n  if (action.type === actions.init) {\n    return {\n      pageSize: 10,\n      pageIndex: 0,\n      ...state,\n    };\n  }\n}\n\n// \u4f1a\u5728 hook \u4e2d\u5faa\u73af\u8c03\u7528 - \u53ef\u4ee5\u4f7f\u7528 react hook \u5b9e\u73b0\u63d2\u4ef6\u72b6\u6001\n// \u53ef\u6dfb\u52a0\u989d\u5916\u65b9\u6cd5\u5230 instance\nfunction useInstance(instance) {}\n")),Object(l.b)("h2",{id:"usepagination"},"usePagination"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53d7\u63a7\u5206\u9875",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9 row \u6570\u636e\u8fdb\u884c\u5206\u9875"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u884c\u6570\u8ba1\u7b97 pageCount"))),Object(l.b)("li",{parentName:"ul"},"\u975e\u53d7\u63a7\u5206\u9875",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u670d\u52a1\u7aef\u63a5\u53e3\u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b pageCount")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"interface PaginationState {\n  pageIndex;\n  pageSize;\n}\n\ninterface PaginationInstance {\n  pageCount: number;\n  pageOptions: number[];\n  page: Row[];\n\n  canPreviousPage: boolean;\n  canNextPage: boolean;\n\n  // \u64cd\u4f5c - \u8fdb\u884c dispatch\n  gotoPage(pageIndex);\n  previousPage();\n  nextPage();\n  setPageSize(pageSize);\n}\n")),Object(l.b)("h2",{id:"usetokenpagination"},"useTokenPagination"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table/blob/master/src/utility-hooks/useTokenPagination.js"},"src/utility-hooks/useTokenPagination.js"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672a\u5305\u542b\u5728\u6b63\u5e38\u5305\u91cc"),Object(l.b)("li",{parentName:"ul"},"\u72ec\u7acb\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pageToken"),Object(l.b)("li",{parentName:"ul"},"nextPageToken"),Object(l.b)("li",{parentName:"ul"},"previousPageTokens",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u7ec4 - \u8bb0\u5f55\u7ecf\u8fc7\u7684 token"))),Object(l.b)("li",{parentName:"ul"},"pageIndex")))),Object(l.b)("h2",{id:"userowselect"},"useRowSelect"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5728 row \u4e0a\u8bbe\u7f6e isSelected")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"interface RowSelectOptions {\n  initialState: {\n    selectedRowIds: Record<string: boolean> // rowId\n  }\n  manualRowSelectedKey?:string // 'isSelected'\n  autoResetSelectedRows?:bool // true\n}\n\n\ninterface RowSelectInstance {\n  toggleRowSelected(rowPath: string, set?: boolean): void;\n\n  toggleAllRowsSelected(set?: boolean): void;\n\n  toggleAllPageRowsSelected(set?: boolean): void;\n\n  getToggleAllPageRowsSelectedProps(props): RowSelectProps;\n\n  getToggleAllRowsSelectedProps(props): RowSelectProps;\n\n  isAllRowsSelected: boolean;\n  selectedFlatRows: Array<Row>;\n}\n\ninterface RowSelectProps {\n  onChange;\n  style: { cursor };\n  indeterminate;\n  title;\n}\n\ninterface RowSelectRowProps {\n  isSelected: boolean;\n  isSomeSelected: boolean;\n  toggleRowSelected(set?: boolean);\n  getToggleRowSelectedProps(props): RowSelectProps;\n}\n")))}u.isMDXComponent=!0},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||l;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);