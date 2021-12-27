"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57730],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return j}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),j=o,d=f["".concat(c,".").concat(j)]||f[j]||u[j]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function j(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69557:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"jq"},c=void 0,l={unversionedId:"dev/shell/jq",id:"dev/shell/jq",title:"jq",description:"- https://jqplay.org/",source:"@site/notes/dev/shell/jq.md",sourceDirName:"dev/shell",slug:"/dev/shell/jq",permalink:"/notes/dev/shell/jq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/shell/jq.md",tags:[],version:"current",frontMatter:{title:"jq"},sidebar:"docs",previous:{title:"rfc",permalink:"/notes/dev/rfc"},next:{title:"Software Awesome",permalink:"/notes/dev/software-awesome"}},p=[],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jqplay.org/"},"https://jqplay.org/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/manual/"},"https://stedolan.github.io/jq/manual/"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'jq \'.components.rows|=sort_by(.id)|.components.rows[].properties|=sort_by(.name)\' file.json\n\n# inplace edit\njqi() {\n  cat <<< "$(jq "$1" < "$2")" > "$2"\n}\njqi ".a=1" test.json\n\n# merge\njq -s add a.json b.json c.json\n\n# deep merge\njq -s \'reduce .[] as $x ({}; . * $x)\' a.json b.json\n\n# array\n# \u975e\u5bf9\u8c61\u573a\u666f\njq -c \'.[]\' names.json | xargs -L 1 echo\n# \u5bf9\u8c61\u573a\u666f\njq -j \'.[] | tostring + "\\u0000"\' names.json | xargs -0 -n1 -I {} jq -n {}\n# \u4fbf\u5229\u6570\u7ec4\u5bf9\u8c61\u5b57\u6bb5\njq -j \'.builds[] | tostring + "\\u0000"\' build.json | xargs -0 -n1 -I {} sh -c "jq -n \'{}\' | jq -r .name"\n\n\nmapfile -t configArr < <(jq -c \'.[]\'  < app-cnfg.json)\nfor config in "${configArr[@]}"; do\n    aws dynamodb put-item --table-name "xxx" --item "$config"\ndone\n\nwhile IFS= read -r config; do\n    aws dynamodb put-item --table-name "xxx" --item "$config"\ndone< <(jq -c \'.[]\' < app-cnfg.json)\n\n# arg\njq --arg v "$PRJNAME" \'.dev.projects[$v]\' config.json\n\n\n# \u901a\u8fc7 redirect\njq \'.key\' <<< "$json_data"\n# \u901a\u8fc7 arg\njq -n --argjson data "$json_data" \'$data.key\'\n# \u901a\u8fc7\u73af\u5883\u53d8\u91cf\njson_data="$json_data" jq -n \'env.json_data | fromjson.key\'\n# \u901a\u8fc7\u53d8\u91cf\njq -n "$json_data" | jq .key\n')))}f.isMDXComponent=!0}}]);