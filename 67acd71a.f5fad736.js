(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1129:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},497:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(1129)),c={title:"Gitlab CI \u6280\u5de7"},o={unversionedId:"service/forge/gitlab/gitlab-ci-cookbook",id:"service/forge/gitlab/gitlab-ci-cookbook",isDocsHomePage:!1,title:"Gitlab CI \u6280\u5de7",description:"Gitlab CI \u5e38\u7528\u8bed\u6cd5",source:"@site/notes/service/forge/gitlab/gitlab-ci-cookbook.md",slug:"/service/forge/gitlab/gitlab-ci-cookbook",permalink:"/notes/service/forge/gitlab/gitlab-ci-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/gitlab/gitlab-ci-cookbook.md",version:"current",sidebar:"docs",previous:{title:"n8n",permalink:"/notes/service/workflow/n8n"},next:{title:"gitlab-ci.yml",permalink:"/notes/service/forge/gitlab/gitlab-ci-yml"}},l=[{value:"Tips",id:"tips",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"kaniko \u955c\u50cf\u6784\u5efa",id:"kaniko-\u955c\u50cf\u6784\u5efa",children:[]},{value:"docker \u6784\u5efa",id:"docker-\u6784\u5efa",children:[]},{value:"Docker DinD",id:"docker-dind",children:[]},{value:"Golang",id:"golang",children:[]},{value:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0",id:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0",children:[]},{value:"\u751f\u6210",id:"\u751f\u6210",children:[]},{value:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",children:[]},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[]},{value:"\u4ea7\u51fa",id:"\u4ea7\u51fa",children:[]},{value:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c",id:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c",children:[]},{value:"Page",id:"page",children:[]},{value:"Node",id:"node",children:[{value:"Publish NPM",id:"publish-npm",children:[]}]}],s={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"gitlab-ci-\u5e38\u7528\u8bed\u6cd5"},"Gitlab CI \u5e38\u7528\u8bed\u6cd5"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".")," \u5f00\u5934\u7684\u4efb\u52a1\u4e0d\u4f1a\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u7f13\u5b58\u5e38\u7528 key",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CI_COMMIT_REF_SLUG"),Object(i.b)("li",{parentName:"ul"},"CI_BUILD_REF_NAME")))),Object(i.b)("h2",{id:"hello-world"},"Hello World"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"stage:\n  - build\n\nHello CI:\n  stage: build\n  script:\n    - echo Hello Gitlab CI !\n")),Object(i.b)("h2",{id:"kaniko-\u955c\u50cf\u6784\u5efa"},"kaniko \u955c\u50cf\u6784\u5efa"),Object(i.b)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u4f9d\u8d56 docker engine \u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 kaniko"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'publish:\n  stage: publish\n  image:\n    #name: registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:v1.6.0-debug\n    name: gcr.io/kaniko-project/executor:debug\n    entrypoint: [\'\']\n  script:\n    - echo "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n    - /kaniko/executor --context $CI_PROJECT_DIR --dockerfile ./Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n  dependencies:\n    - build\n  only:\n    - master\n')),Object(i.b)("h2",{id:"docker-\u6784\u5efa"},"docker \u6784\u5efa"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"Build in Docker:\n  image: wener/go:win\n  stage: build\n  services:\n    - docker:dind\n  script:\n    - go env\n")),Object(i.b)("h2",{id:"docker-dind"},"Docker DinD"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'Build Image:\n  stage: build\n  services:\n    - name: docker:dind\n      # \u53ef\u4ee5\u4fee\u6539\u955c\u50cf\n      # command: ["--registry-mirror", "https://registry-mirror.example.com"]\n  variables:\n    DOCKER_HOST: tcp://docker:2375/\n    DOCKER_DRIVER: overlay2\n    # See https://github.com/docker-library/docker/pull/166\n    DOCKER_TLS_CERTDIR: \'\'\n  before_script:\n    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY\n  script:\n    # - yarn\n    # - yarn build\n    - echo Building image "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"\n    - docker build --pull -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" .\n    - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"\n    # tagged as v20200601121212\n    - CI_REGISTRY_IMAGE_DATA_VER="$CI_REGISTRY_IMAGE:v`date +"%Y%m%d%H%M%S"`"\n    - docker tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" "$CI_REGISTRY_IMAGE_DATA_VER"\n    - docker push "$CI_REGISTRY_IMAGE_DATA_VER"\n')),Object(i.b)("h2",{id:"golang"},"Golang"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7f13\u5b58 GOPATH"),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u4e4b\u524d\u4fee\u6539 GOPATH \u4f7f\u5176\u80fd\u88ab\u7f13\u5b58")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},'default:\n  cache:\n    untracked: true\n    key: \'$CI_COMMIT_REF_SLUG\'\n    paths:\n      - .cache\n  before_script:\n    - mkdir -p .cache\n    # - export GOPATH="$CI_PROJECT_DIR/.cache"\n    - export GOPATH="$PWD/.cache"\n    - export PATH="$PWD/.cache/bin:$PATH"\n    - export GO111MODULE=on\n    - export GOPROXY=https://goproxy.io\n')),Object(i.b)("h2",{id:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0"},"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'deploy-dev:\n  stage: deploy-dev\n  image: alpine:3.8\n  before_script:\n    - apk add --no-cache git curl bash\n    - curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash\n    - mv kustomize /usr/local/bin/\n    - git remote set-url origin https://${CI_USERNAME}:${CI_PUSH_TOKEN}@gitlab.com/andrew.kaczynski/gitops-webapp.git\n    - git config --global user.email "gitlab@gitlab.com"\n    - git config --global user.name "GitLab CI/CD"\n  script:\n    - git checkout -B master\n    - cd deployment/dev\n    - kustomize edit set image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n    - cat kustomization.yaml\n    - git commit -am \'[skip ci] DEV image update\'\n    - git push origin master\n  only:\n    - master\n\ndeploy-prod:\n  stage: deploy-prod\n  image: alpine:3.8\n  before_script:\n    - apk add --no-cache git curl bash\n    - curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash\n    - mv kustomize /usr/local/bin/\n    - git remote set-url origin https://${CI_USERNAME}:${CI_PUSH_TOKEN}@gitlab.com/andrew.kaczynski/gitops-webapp.git\n    - git config --global user.email "gitlab@gitlab.com"\n    - git config --global user.name "GitLab CI/CD"\n  script:\n    - git checkout -B master\n    - git pull origin master\n    - cd deployment/prod\n    - kustomize edit set image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n    - cat kustomization.yaml\n    - git commit -am \'[skip ci] PROD image update\'\n    - git push origin master\n  only:\n    - master\n  when: manual\n')),Object(i.b)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),Object(i.b)("h2",{id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"},"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"build:\n  stage: build\n  script: echo 'FOO=BAR' > build.env\n  artifacts:\n    report:\n      dotenv: build.env\n\ntest:\n  stage: test\n  script: echo $FOO # \"BAR\"\n  needs: [build]\n")),Object(i.b)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"include:\n  # \u6a21\u677f\u7ee7\u627f\n  template: Serverless.gitlab-ci.yml\n\nfunctions:build:\n  extends: .serverless:build:functions\n  # \u8bbe\u7f6e\u73af\u5883\u4fe1\u606f\n  environment: production\n\nfunctions:deploy:\n  extends: .serverless:deploy:functions\n  environment: production\n")),Object(i.b)("h2",{id:"\u4ea7\u51fa"},"\u4ea7\u51fa"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"Build Windows:\n  stage: build\n  tags:\n    - windows\n    - bash\n  script:\n    - make ci-windows\n  artifacts:\n    paths:\n      - dist\n    expire_in: 1 week\n")),Object(i.b)("h2",{id:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c"},"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"job:on-schedule:\n  only:\n    - schedules\n  script:\n    - make world\n\njob:\n  except:\n    - schedules\n  script:\n    - make build\n")),Object(i.b)("h2",{id:"page"},"Page"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"pages:\n  script:\n    - yarn\n    - yarn build:public\n  artifacts:\n    # \u8def\u5f84\u5fc5\u987b public\n    paths:\n      - public\n  only:\n    - master\n")),Object(i.b)("h2",{id:"node"},"Node"),Object(i.b)("h3",{id:"publish-npm"},"Publish NPM"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"Publish NPM:\n  stage: deploy\n  script:\n    - echo '//gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}'>.npmrc\n    - yarn lerna publish from-git --yes --registry \"https://gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/\"\n  only:\n    - tags\n")))}b.isMDXComponent=!0}}]);