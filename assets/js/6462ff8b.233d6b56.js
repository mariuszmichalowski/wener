"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54036],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,u(u({ref:t},c),{},{components:n})):r.createElement(y,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],l={title:"React Query"},o=void 0,s={unversionedId:"web/react/react-query",id:"web/react/react-query",title:"React Query",description:"- \u9ed8\u8ba4",source:"@site/notes/web/react/react-query.md",sourceDirName:"web/react",slug:"/web/react/react-query",permalink:"/notes/web/react/react-query",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-query.md",tags:[],version:"current",frontMatter:{title:"React Query"},sidebar:"docs",previous:{title:"React Native FAQ",permalink:"/notes/web/react/react-native-faq"},next:{title:"React Route",permalink:"/notes/web/react/react-router"}},c=[{value:"React Query v3",id:"react-query-v3",children:[],level:2},{value:"v2.x",id:"v2x",children:[],level:2},{value:"useMutation",id:"usemutation",children:[],level:2},{value:"isLoading vs isFetching",id:"isloading-vs-isfetching",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542f refetchOnMount, refetchOnWindowFocus, refetchOnReconnect"),(0,i.kt)("li",{parentName:"ul"},"cacheTime 5 \u5206\u949f - \u4e0d\u518d\u4f7f\u7528\u7684\u7684\u6570\u636e\u4fdd\u7559 5 \u5206\u949f"),(0,i.kt)("li",{parentName:"ul"},"retry=3, retryDelay exponential"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/comparison"},"vs SWR vs Apollo Client"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vs SWR - \u652f\u6301\u4fee\u6539\uff0c\u66f4\u597d\u7684\u7f13\u5b58\u72b6\u6001\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"vs Apollo - \u652f\u6301 GraphQL \u548c \u4e00\u822c\u8bf7\u6c42\uff0c\u9488\u5bf9 GraphQL \u7684 entity \u7f13\u5b58\u6ca1\u6709 apollo \u5f3a"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dano-inc/react-query-helper"},"dano-inc/react-query-helper"))))),(0,i.kt)("h2",{id:"react-query-v3"},"React Query v3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62c6\u5206 QueryCache \u4e3a QueryClient \u548c\u66f4\u5e95\u5c42\u7684 MutationCache, QueryCache"),(0,i.kt)("li",{parentName:"ul"},"useQueryCache -> useQueryClient"),(0,i.kt)("li",{parentName:"ul"},"QueryClientProvider \u53d6\u4ee3 ReactQueryConfigProvider \u548c ReactQueryCacheProvider"),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u589e useQueries"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b devtools - ",(0,i.kt)("inlineCode",{parentName:"li"},"react-query/devtools")),(0,i.kt)("li",{parentName:"ul"},"useQuery \u53c2\u6570\u4e0d\u518d\u662f key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63a8\u8350\u901a\u8fc7 lambada \u4f20\u9012\u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd8\u662f\u8981 key ",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery(['post', id], context => fetchPost(context.queryKey[1]))")),(0,i.kt)("li",{parentName:"ul"},"enabled \u9009\u9879\u5fc5\u987b\u4e3a boolean - \u5426\u5219\u4f1a\u8b66\u544a"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 select \u90e8\u5206\u6570\u636e - \u51cf\u5c11\u91cd\u65b0\u6e32\u67d3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useQuery('user',fetchUser,{select:user=>user.username})")))))),(0,i.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 usePaginatedQuery, \u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"keepPreviousData: true")," \u5b9e\u73b0\u7c7b\u4f3c\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"useInfiniteQuery \u652f\u6301\u524d\u540e\u53cc\u5411\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"useMutation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5bf9\u8c61",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e4b\u524d ",(0,i.kt)("inlineCode",{parentName:"li"},"const [mutate, { status, reset }] = useMutation()")),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"const { mutate, mutateAsync, status, reset } = useMutation()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mutate \u4e0d\u8fd4\u56de promise, mutateAsync \u8fd4\u56de promise"),(0,i.kt)("li",{parentName:"ul"},"mutate \u652f\u6301\u56de\u8c03 ",(0,i.kt)("inlineCode",{parentName:"li"},"mutate('todo',{onSuccess(){},onError(){},onSettled(){}})")))))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 retry - \u65ad\u7ebf\u91cd\u8054\u4f1a\u91cd\u8bd5\uff0c\u9ed8\u8ba4\u5931\u8d25\u4e0d\u4f1a\u91cd\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6301\u4e45\u5316\u7136\u540e\u6062\u590d"))),(0,i.kt)("li",{parentName:"ul"},"QueryObserver, InfiniteQueryObserver, QueriesObserver - \u53ef\u7528\u4e8e\u76d1\u542c\u6570\u636e\u53d8\u5316"),(0,i.kt)("li",{parentName:"ul"},"useIsFetching - \u652f\u6301 key \u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/guides/migrating-to-react-query-3"},"v3")," - 2020-12-15")),(0,i.kt)("h2",{id:"v2x"},"v2.x"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';\nimport { ReactQueryDevtools } from 'react-query-devtools';\n\nconst queryCache = new QueryCache();\n\nexport default function App() {\n  return (\n    <>\n      {/* \u7f13\u5b58 */}\n      <ReactQueryCacheProvider queryCache={queryCache}>\n        <Example />\n      </ReactQueryCacheProvider>\n      {/* \u5f00\u53d1\u5de5\u5177 */}\n      <ReactQueryDevtools initialIsOpen />\n    </>\n  );\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const key = '';\nconst {\n  data, // \u83b7\u53d6\u5230\u7684\u6570\u636e\u6216\u8005\u662f\u4e0a\u6b21\u7f13\u5b58\u7684\u6570\u636e\n  error, // \u9519\u8bef\n  failureCount,\n  status, // \u72b6\u6001 - idle, loading, error, success\n  isError = status == 'error',\n  isIdle = status == 'idle',\n  isLoading = status == 'loading',\n  isSuccess = status == 'success',\n  isFetched, // \u5df2\u7ecf\u83b7\u53d6\n  isFetchedAfterMount, // \u662f\u5426\u5728 mount \u540e\u83b7\u53d6\u8fc7\n  isFetching, // \u662f\u5426\u6b63\u5728\u83b7\u53d6\n  isStale, // \u6570\u636e\u5df2\u5931\u6548\n  isPreviousData, // \u4f7f\u7528\u7684\u4e0a\u6b21\u6570\u636e\n  isPlaceholderData, // \u4f7f\u7528\u7684\u5360\u4f4d\u6570\u636e\n  refetch, // \u4ece\u65b0\u83b7\u53d6 - \u9664\u975e throwOnError \u5426\u5219\u5f02\u5e38\u53ea\u4f1a log\n  remove, // \u4ece\u7f13\u5b58\u79fb\u9664\u67e5\u8be2\n} = useQuery(\n  key,\n  /* fetcher */ (...key) => fetch(key.join()).then((v) => v.json()),\n  /* config */ {\n    enabled: true, // \u662f\u5426\u67e5\u8be2\n\n    // \u5931\u6548\u63a7\u5236\n    cacheTime: 1000 * 6 * 5, // 5m\n    staleTime: 0, // \u5931\u6548\u65f6\u95f4 - \u9ed8\u8ba4\u8fd4\u56de\u5373\u5931\u6548 - \u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\u53ef\u51cf\u5c11\u8bf7\u6c42 - \u8bbe\u7f6e\u4e3a Infinity \u4e0d\u5931\u6548\n    // \u91cd\u8bd5\u63a7\u5236\n    retry: 3, // \u91cd\u8bd5\u5224\u65ad - Boolean | Int | Function(failureCount, error) => shouldRetry | Boolean\n    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000), // \u91cd\u8bd5\u5ef6\u8fdf - Function(retryAttempt: Int) => Int\n    // \u5237\u65b0\u63a7\u5236\n    refetchInterval: false, // \u5237\u65b0\u95f4\u9694 - Boolean | Integer\n    refetchIntervalInBackground: false, // \u540e\u53f0\u5237\u65b0 - Boolean\n    refetchOnMount: true, // \u5728 mount \u65f6\u5237\u65b0 - boolean | 'always'\n    refetchOnReconnect: true, // \u7f51\u7edc\u6062\u590d\u65f6\u5237\u65b0\n    refetchOnWindowFocus: true, // \u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u5237\u65b0\n\n    // \u521d\u59cb\n    initialData: undefined, // \u521d\u59cb\u6570\u636e - any | ()=>any\n    initialStale: true, //  \u521d\u59cb\u5931\u6548 - \u5982\u679c\u8bbe\u7f6e\u4e86\u5219\u521d\u59cb\u6570\u636e\u8ba4\u4e3a\u662f\u6709\u6548\u6570\u636e - \u4f1a\u88ab\u7f13\u5b58 - boolean | ()=>boolean\n    placeholderData: undefined, // \u5360\u4f4d\u6570\u636e - loading \u7684\u65f6\u5019\u7528 - any | ()=>any\n\n    // \u72b6\u6001\u53d8\u5316\u56de\u8c03\n    notifyOnStatusChange: true, // \u72b6\u6001\u53d8\u5316 rerender - \u8bbe\u7f6e\u4e3a false \u5219 data \u6216 error \u53d8\u5316\u65f6\u624d rerender\n    onSuccess: undefined, // \u6210\u529f\u56de\u8c03 - (data)=>data\n    onError: undefined, // \u9519\u8bef\u56de\u8c03 - (error)=>void\n    onSettled: undefined, // \u5b8c\u6210\u56de\u8c03 - (data,error)=>data\n    suspense: false, // \u542f\u7528 react suspense \u6a21\u5f0f - loading \u548c error \u65f6\u4f1a suspense\n\n    queryFnParamsFilter: undefined, // \u67e5\u8be2\u53c2\u6570\u8fc7\u6ee4 - args=>filteredArgs\n    queryKeySerializerFn: undefined,\n    isDataEqual: undefined, // \u81ea\u5b9a\u4e49\u6bd4\u8f83\u64cd\u4f5c\n    keepPreviousData: false, // \u4fdd\u7559\u4e0a\u6b21\u6570\u636e - key \u53d8\u5316\u65f6\n    structuralSharing: true, // \u7ed3\u6784\u5316\u5171\u4eab - \u8de8\u67e5\u8be2\u7f13\u5b58\u5171\u4eab\n    useErrorBoundary: false,\n  },\n);\n\n// \u5206\u9875\u67e5\u8be2\nconst {\n  data = undefined,\n  resolvedData, // \u4e0a\u6b21\u6210\u529f\u6570\u636e - \u5ffd\u7565 key\n  latestData, // \u672c\u6b21\u67e5\u8be2\u6570\u636e\n  ...queryInfo\n} = usePaginatedQuery(queryKey, queryFn, options);\n\n// \u7011\u5e03\u6d41 - queryFn \u4f1a\u591a\u63a5\u53d7\u4e00\u4e2a fetchMoreVariable\nconst {\n  isFetchingMore, // false | 'next' | 'previous'\n  fetchMore, // Function(fetchMoreVariableOverride) => Promise<TResult | undefined>\n  canFetchMore,\n  ...queryInfo\n} = useInfiniteQuery(queryKey, queryFn, {\n  ...queryOptions,\n  getFetchMore: (lastPage, allPages) => fetchMoreVariable,\n});\n")),(0,i.kt)("h2",{id:"usemutation"},"useMutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  mutate, // \u4fee\u6539\u64cd\u4f5c\n  { status, isIdle, isLoading, isSuccess, isError, data, error, reset },\n] = useMutation(mutationFn, {\n  onMutate,\n  onSuccess,\n  onError,\n  onSettled,\n  throwOnError,\n  useErrorBoundary,\n});\n\nconst promise = mutate(variables, {\n  onSuccess,\n  onSettled,\n  onError,\n  throwOnError,\n});\n")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"isloading-vs-isfetching"},"isLoading vs isFetching"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"isLoading \u662f status=loading",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b2c\u4e00\u6b21 loading \u5224\u65ad"))),(0,i.kt)("li",{parentName:"ul"},"isFetching \u662f\u540e\u53f0\u6b63\u5728\u83b7\u53d6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u6b63\u5728\u83b7\u53d6\uff0cisLoading \u4e5f\u53ef\u80fd\u4e3a false - \u56e0\u4e3a\u6709\u4e0a\u6b21\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6570\u636e\u52a0\u8f7d\u5224\u65ad - \u5237\u65b0\u52a0\u8f7d\u8fc7\u7a0b\u663e\u793a")))))}m.isMDXComponent=!0}}]);