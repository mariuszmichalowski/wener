"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55982],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return a?t.createElement(g,l(l({ref:n},c),{},{components:a})):t.createElement(g,l({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9198:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return d}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={slug:"java11-javafx-first-app",title:"Java 11 JavaFX \u7b2c\u4e00\u4e2a\u5e94\u7528",tags:["Java","JavaFX","GUI","\u963f\u91cc"]},p=void 0,u={permalink:"/story/java11-javafx-first-app",editUrl:"https://github.com/wenerme/wener/edit/master/story/2018/2018-12-06-java11-javafx-first-app.md",source:"@site/story/2018/2018-12-06-java11-javafx-first-app.md",title:"Java 11 JavaFX \u7b2c\u4e00\u4e2a\u5e94\u7528",description:"\u6982\u8ff0",date:"2022-01-18T16:53:39.248Z",formattedDate:"January 18, 2022",tags:[{label:"Java",permalink:"/story/tags/java"},{label:"JavaFX",permalink:"/story/tags/java-fx"},{label:"GUI",permalink:"/story/tags/gui"},{label:"\u963f\u91cc",permalink:"/story/tags/\u963f\u91cc"}],readingTime:10.47,truncated:!0,authors:[],prevItem:{title:"Redis \u6d41\u7b80\u4ecb",permalink:"/story/redis-stream-intro"},nextItem:{title:"\u5982\u4f55\u4ece0\u52301\u5b9e\u73b0\u4e00\u95e8\u8bed\u8a00",permalink:"/story/get-started-with-dsl"}},c={authorsImageUrls:[]},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[{value:"\u9879\u76ee\u642d\u5efa",id:"\u9879\u76ee\u642d\u5efa",children:[],level:3},{value:"\u5e94\u7528\u5f00\u53d1",id:"\u5e94\u7528\u5f00\u53d1",children:[],level:3},{value:"\u751f\u6210 JDK",id:"\u751f\u6210-jdk",children:[],level:3},{value:"\u5e94\u7528\u6253\u5305",id:"\u5e94\u7528\u6253\u5305",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],m={toc:s};function d(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"Java 11 \u81ea 2018.9.25 \u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7ecf\u597d\u51e0\u4e2a\u6708\u4e86\uff0c\u5728\u8fd8\u6ca1\u6b63\u5f0f GA \u4e4b\u524d\u90fd\u4e60\u60ef\u6027\u7684\u53bb ",(0,o.kt)("a",{parentName:"p",href:"http://www.java-countdown.xyz/"},"java-countdown.xyz")," check \u53d1\u5e03\u5012\u8ba1\u65f6\u3002Java 11 \u6709\u6bd4\u8f83\u591a\u7684\u65b0\u529f\u80fd\uff0c\u800c\u5176\u4e2d\u6700\u5438\u5f15\u6211\u7684"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java 11 \u662f LTS \u7248\u672c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u610f\u5473\u7740\u4f53\u9a8c Java9 \u5e26\u6765\u7684\u6a21\u5757\u7279\u6027\u53d8\u5f97\u66f4\u6709\u610f\u4e49"))),(0,o.kt)("li",{parentName:"ul"},"JavaFX \u4ece JDK \u4e2d\u79fb\u9664\uff0c\u4f5c\u4e3a\u72ec\u7acb\u6a21\u5757")),(0,o.kt)("p",null,"\u5728 11 \u53d1\u5e03\u65f6\uff0cJavaFX \u4e5f\u53d1\u5e03\u4e86 11 \u7684 GA \u7248\u672c\u3002JavaFX \u672c\u8eab\u5e76\u4e0d\u65b0\u5947\uff0c\u4f46\u81ea Java9 \u6a21\u5757\u5316\u540e\uff0cJavaFX \u5f97\u76ca\u4e8e jlink \u7684\u80fd\u529b\uff0c\u80fd\u591f\u5c06 JavaFX \u5c01\u88c5\u4e3a\u72ec\u7acb\u7684 GUI \u5e94\u7528\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u6c42\u5b89\u88c5 JDK")," \u3002\u8fd9\u4f7f\u5f97\u5728\u684c\u9762\u5e94\u7528\u5f00\u53d1\u7684\u573a\u666f\uff0c\u9664\u4e86 Electron\u3001Mono\u3001QT \u7b49\u8de8\u5e73\u53f0\u5f00\u53d1\u6846\u67b6\uff0cJava \u4e5f\u80fd\u4f5c\u4e3a\u5176\u4e2d\u7684\u4e00\u9879\u9009\u62e9\u4e86\u3002\u5728 Swing \u65f6\u4ee3\uff0cJava \u7684\u684c\u9762\u5e94\u7528\u5f00\u53d1\u4f53\u9a8c\u4e5f\u4e0d\u5dee\uff08\u66fe\u7ecf\u505a\u8fc7\u7684\u5c0f\u6e38\u620f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wenerme/GTetris"},"wenerme/GTetris"),"\uff09\uff0c\u4f46\u7531\u4e8e\u7d2f\u8d58\u7684 JDK \uff08\u5927\u7ea6 150m\uff09\u4f7f\u5f97\u5f00\u53d1\u4e00\u4e2a\u5c0f\u5e94\u7528\u53d8\u5f97\u4e0d\u5207\u5b9e\u9645\u3002"),(0,o.kt)("p",null,"JLink \u53ef\u4ee5\u5c06\u9879\u76ee\u4f9d\u8d56\u7684\u6a21\u5757\u52a0\u4e0a\u57fa\u7840 VM \u6765\u751f\u6210\u4e00\u4e2a\u65b0\u7684 JDK\uff0c\u5e94\u7528\u7684\u4f53\u79ef\u80fd\u591f\u5927\u5927\u51cf\u5c0f\uff0c\u5982\u679c\u8fd8\u80fd\u518d\u914d\u5408 progard\uff0c\u90a3\u4f53\u79ef\u8fd8\u80fd\u518d\u7f29\u5c0f\u4e00\u5708\u3002"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4f53\u9a8c Java11 \u548c JavaFX \u7684\u524d\u63d0\uff08\u6bcf\u4e2a Java \u7a0b\u5e8f\u5458\u90fd\u4f1a\u5199\u754c\u9762\u662f\u5e38\u8bc6\uff1f\uff09\uff0c\u5c06\u751f\u6210 \u5965\u683c\u4eba\u7fa4\u670d\u52a1\u5316\u63a5\u53e3\u6587\u6863 \u7684\u751f\u6210\u5668\u505a\u6210\u4e86\u4e00\u4e2a GUI \u5de5\u5177\uff0c\u6e90\u7801\u5728 wener.cyw/tools\u3002"),(0,o.kt)("p",null,"doc/screenshot-java.png"),(0,o.kt)("p",null,"doc/screenshot-markdown.png"),(0,o.kt)("p",null,"\u5de5\u5177\u4e0b\u8f7d\u5730\u5740\u89c1\u9644\u4ef6 - \u53ea\u6253\u5305\u4e86 Mac \u7248\u5e94\u7528\uff0c\u56e0\u4e3a\u6ca1\u6709 Windows\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u4ece Java 11 \u5f00\u59cb\uff0cOracle \u7684 JDK \u4fbf\u4e0d\u518d\u5efa\u8bae\u4f7f\u7528\u4e86\uff0c\u56e0\u6b64\u9996\u9009 OpenJDK\uff0c\u800c OpenJDK \u7684\u4e8c\u8fdb\u5236\u63d0\u4f9b\u65b9\u4e5f\u6709\u4e0d\u5c11\uff0c\u5728\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"adoptopenjdk"),"\uff0c\u4e0e Oracle \u4e0d\u540c\u7684\u662f\uff0c\u5728\u8fd9\u91cc\u4e0b\u8f7d\u7684 JDK \u90fd\u662f\u538b\u7f29\u5305\uff0c\u65e0\u987b\u5b89\u88c5\uff0c\u89e3\u538b\u5c31\u80fd\u4f7f\u7528\uff0c\u5f53\u7136\u4e5f\u4e0d\u4f1a\u6709\u81ea\u52a8\u66f4\u65b0\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://adoptopenjdk.net/archive.html?variant=openjdk11&jvmVariant=hotspot"},"\u70b9\u51fb\u524d\u5f80\u4e0b\u8f7d"))),(0,o.kt)("p",null,"\u4e0b\u8f7d\u540e\u6211\u89e3\u538b\u5230\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/jdk")," \u76ee\u5f55\uff0c\u7136\u540e\u5efa\u7acb\u8f6f\u8fde\u63a5 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/jdk/11")," \u6307\u5411\u5230\u4e86\u8be5\u7248\u672c\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,o.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9879\u76ee\u642d\u5efa - 10%"),(0,o.kt)("li",{parentName:"ol"},"\u5e94\u7528\u5f00\u53d1 - 20%"),(0,o.kt)("li",{parentName:"ol"},"\u751f\u6210 JDK - \u975e\u6a21\u5757\u4f9d\u8d56\u8f6c\u6a21\u5757\u4f9d\u8d56 - 50%"),(0,o.kt)("li",{parentName:"ol"},"\u5e94\u7528\u6253\u5305 - 20%")),(0,o.kt)("h3",{id:"\u9879\u76ee\u642d\u5efa"},"\u9879\u76ee\u642d\u5efa"),(0,o.kt)("p",null,"\u642d\u5efa\u4e00\u4e2a Java 11 \u7684 Maven \u9879\u76ee\u4e0e\u642d\u5efa\u4e00\u4e2a\u666e\u901a\u7684\u9879\u76ee\u533a\u522b\u5e76\u4e0d\u5927\uff0c\u53ea\u662f\u4f1a\u591a\u4e00\u4e9b\u914d\u7f6e\uff0c\u5e76\u4e14\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u9700\u8981\u4f7f\u7528\u6700\u65b0\u7684\u3002"),(0,o.kt)("p",null,"\u7236 POM \u7684 build/plugins \u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u5bf9 Java 11 \u6301\u6709\u57fa\u672c\u7684\u5c0a\u656c --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.8.0</version>\n    <configuration>\n        <release>11</release>\n        <source>11</source>\n        <target>11</target>\n    </configuration>\n</plugin>\n\n\x3c!-- \u6253\u5305\u65f6\u6253\u5305\u5230 modules \u76ee\u5f55 --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <version>3.1.0</version>\n    <configuration>\n        <outputDirectory>\n            ${project.build.directory}/modules\n        </outputDirectory>\n    </configuration>\n</plugin>\n\x3c!-- \u5c06\u4f9d\u8d56\u62f7\u8d1d\u5230 modules \u76ee\u5f55 --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-dependency-plugin</artifactId>\n    <version>3.1.1</version>\n    <executions>\n        <execution>\n            <phase>package</phase>\n            <goals>\n                <goal>copy-dependencies</goal>\n            </goals>\n            <configuration>\n                <outputDirectory>\n                    ${project.build.directory}/modules\n                </outputDirectory>\n                <includeScope>runtime</includeScope>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n\n\x3c!-- \u56e0\u4e3a\u5e76\u4e0d\u662f\u6240\u6709\u4f9d\u8d56\u90fd\u662f\u6a21\u5757\u5316\u7684\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u51fa\u73b0 illegal-access \u7684\u95ee\u9898 --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.22.0</version>\n    <configuration>\n        <argLine>\n            --illegal-access=permit\n        </argLine>\n        <forkCount>0</forkCount>\n    </configuration>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>2.22.0</version>\n    <configuration>\n        <argLine>\n            --illegal-access=permit\n        </argLine>\n    </configuration>\n</plugin>\n")),(0,o.kt)("p",null,"\u5e94\u7528\u9879\u76ee\u7684 build \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    \x3c!-- \u56e0\u4e3a\u7528\u5230\u4e86 fxml\uff0c\u4e14 fxml \u662f\u653e\u5728\u7c7b\u65c1\u8fb9\u7684\uff0c\u6240\u4ee5\u9700\u8981\u624b\u52a8\u6307\u5b9a\u8be5\u7c7b\u8d44\u6e90 --\x3e\n    <resources>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.fxml</include>\n            </includes>\n        </resource>\n        <resource>\n            <directory>src/main/resources</directory>\n        </resource>\n    </resources>\n    <plugins>\n        \x3c!-- \u786e\u4fdd jar \u4e2d\u751f\u6210\u6b63\u786e\u7684\u4fe1\u606f --\x3e\n        <plugin>\n            <groupId>org.codehaus.mojo</groupId>\n            <artifactId>exec-maven-plugin</artifactId>\n            <version>1.6.0</version>\n            <executions>\n                <execution>\n                    <id>module-main-class</id>\n                    <phase>package</phase>\n                    <goals>\n                        <goal>exec</goal>\n                    </goals>\n                    <configuration>\n                        \x3c!-- \u56e0\u4e3a PATH \u4e2d\u7684 jar \u662f Java8\uff0c\u6240\u4ee5\u8fd9\u91cc\u6307\u5b9a\u7684\u7edd\u5bf9\u8def\u5f84 --\x3e\n                        <executable>/Users/wener/jdk/11/Contents/Home/bin/jar</executable>\n                        <arguments>\n                            <argument>\n                                --update\n                            </argument>\n                            <argument> --file=${project.build.directory}/modules/${project.build.finalName}.jar\n                            </argument>\n                            \x3c!-- \u542f\u52a8\u7c7b --\x3e\n                            <argument> --main-class=me.wener.tools.app.AppMain\n                            </argument>\n                            <argument> --module-version=${project.version}\n                            </argument>\n                        </arguments>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n")),(0,o.kt)("p",null,"\u6700\u7ec8\u7684\u914d\u7f6e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn package")," \u540e\uff0c\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"target/modules")," \u76ee\u5f55\u4e0b\u770b\u5230\u6240\u6709\u7684 jar \u5305\u3002\u8fd9\u91cc\u7684 jar \u5728\u751f\u6210 JDK \u65f6\u4f1a\u7528\u5230\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u642d\u5efa\u597d\u540e\uff0c\u5efa\u7acb\u51fa\u5bf9\u5e94\u7684\u5b50\u6a21\u5757\uff0c\u4e14\u5728\u5b50\u6a21\u5757\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java")," \u8bbe\u7f6e\u597d ",(0,o.kt)("inlineCode",{parentName:"p"},"module-info.java")),(0,o.kt)("h3",{id:"\u5e94\u7528\u5f00\u53d1"},"\u5e94\u7528\u5f00\u53d1"),(0,o.kt)("p",null,"JavaFX \u7684\u5f00\u53d1\u975e\u5e38\u6709\u610f\u601d\uff0c\u56e0\u4e3a\u53ef\u4ee5\u4f7f\u7528 FXML\uff0c\u5f00\u53d1\u7684\u8fc7\u7a0b\u4f53\u9a8c\u4e0e React/Vue/Angular \u8fd9\u6837\u7684\u524d\u7aef\u5f00\u53d1\u4f53\u9a8c\u975e\u5e38\u76f8\u4f3c\uff0c\u53ea\u9700\u8981\u5728 FXML \u505a\u597d\u5e03\u5c40\uff0c\u5728 css \u4e2d\u5b9a\u4e49\u597d\u6837\u5f0f\uff0c\u7136\u540e\u7ed1\u5b9a\u597d\u4ea4\u4e92\u5904\u7406\u65b9\u6cd5\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u7684\u542f\u52a8\u7c7b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class AppMain extends Application {\n    public static void main(String[] args) {\n        launch(args);\n    }\n\n    @Override\n    public void start(Stage stage) throws Exception {\n        Parent root = FXMLLoader.load(getClass().getResource("scene/Main.fxml"));\n\n        Scene scene = new Scene(root, 640, 480);\n        stage.setTitle("@\u6587\u8fe9 \u7684\u5c0f\u5de5\u5177");\n        stage.setScene(scene);\n        stage.show();\n    }\n}\n')),(0,o.kt)("p",null,"\u56e0\u4e3a\u662f\u57fa\u4e8e fxml\uff0c\u542f\u52a8\u7c7b\u53ea\u9700\u8981\u5c06\u8be5\u573a\u666f\u521d\u59cb\u5316\u5c55\u793a\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a fxml \u7684\u57fa\u672c\u6846\u67b6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<?import javafx.scene.control.*?>\n<?import javafx.scene.layout.*?>\n<?import javafx.stage.Screen?>\n<AnchorPane fx:id="masterPane"\n            xmlns="http://javafx.com/javafx/8.0.121"\n            xmlns:fx="http://javafx.com/fxml/1"\n            fx:controller="me.wener.tools.app.scene.MainScene">\n</AnchorPane>\n')),(0,o.kt)("p",null,"\u5176\u4e2d\u6bd4\u8f83\u5173\u952e\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"fx:controller")," \u7ed1\u5b9a\u4e86\u63a7\u5236\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"me.wener.tools.app.scene.MainScene"),"\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\u5728\u540e\u7eed\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," \u5b9a\u4e49\u4e2d\u53ef\u76f4\u63a5\u5f15\u7528\u63a7\u5236\u7c7b\u4e0a\u7684\u65b9\u6cd5\uff0c\u6216\u8005\u5c06\u9875\u9762\u5143\u7d20\u76f4\u63a5\u5173\u8054\u5230\u63a7\u5236\u7c7b\u3002"),(0,o.kt)("p",null,"\u7ed1\u5b9a\u5143\u7d20\n",(0,o.kt)("img",{alt:"javafx-binding.png",src:a(44797).Z})),(0,o.kt)("p",null,"\u5143\u7d20\u5173\u8054\n",(0,o.kt)("img",{alt:"javafx-relation.png",src:a(15812).Z})),(0,o.kt)("p",null,"Intellij \u6bd4\u8f83\u667a\u80fd\uff0c\u53ef\u76f4\u63a5\u5728\u8fd9\u4e24\u4e2a\u5730\u65b9\u4e92\u76f8\u8df3\u8f6c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u6309\u94ae\u70b9\u51fb\u5173\u8054\u63a7\u5236\u7c7b\u4e0a\u7684\u65b9\u6cd5 doConvert --\x3e\n<Button mnemonicParsing="false" onAction="#doConvert" text="\u751f\u6210\u6587\u6863"/>\n')),(0,o.kt)("h3",{id:"\u751f\u6210-jdk"},"\u751f\u6210 JDK"),(0,o.kt)("p",null,"\u5728 APP \u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u4e3a\u8be5 APP \u751f\u6210\u4e00\u4e2a\u5b9a\u5236\u7684 JDK\uff0c\u8be5 JDK \u53ea\u9700\u8981\u5305\u542b APP \u6240\u9700\u4f9d\u8d56\uff0c\u751f\u6210\u7684 JDK \u53ef\u91cd\u590d\u4f7f\u7528\uff0c\u9664\u975e APP \u7684\u4f9d\u8d56\u53d8\u66f4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u4e0b\u9762\u7684 Java \u547d\u4ee4\u662f Java 11 \u7684\nexport PATH=$JAVA_11_HOME/bin:$PATH\n\n# \u67e5\u770b\u6253\u5305\u62f7\u8d1d\u7684\u6a21\u5757\n# \u5176\u4e2d\u4f1a\u53d1\u73b0\u5f88\u591a automatic \u7684\u6a21\u5757\njava --list-modules -p target/modules/\n\n# \u67e5\u770b\u4e3b\u5e94\u7528 jar \u7684\u4f9d\u8d56\u8bf7\u6c42\njdeps  --module-path target/modules/ target/modules/tools-app-1.0-SNAPSHOT.jar\n\n# \u751f\u6210 JDK \u5230\u8be5\u76ee\u5f55 jdk/Contents/Home/jre\n# add-modules \u7684\u5217\u8868\u6765\u81ea\u4e8e module-info \u7684\u5b9a\u4e49\njlink --strip-debug --compress 2 \\\n    --no-header-files --no-man-pages \\\n    --output jdk/Contents/Home/jre \\\n    -p $PWD/target/modules \\\n    --add-modules javafx.controls,javafx.fxml,com.google.common,com.github.javaparser.core,com.github.javaparser.symbolsolver.logic,com.github.javaparser.symbolsolver.model,me.wener.tools.core\n")),(0,o.kt)("p",null,"\u4f46\u5728\u751f\u6210 JDK \u65f6\u4f1a\u53d1\u73b0\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error: automatic module cannot be used with jlink: com.github.javaparser.symbolsolver.logic from xxx.jar\n")),(0,o.kt)("p",null,"\u5f02\u5e38\u7684\u539f\u56e0\u662f jlink \u4e0d\u652f\u6301 automatic \u7684\u6a21\u5757\uff0c\u6240\u8c13 automatic \u6a21\u5757\uff0c\u6307\u7684\u662f\u6ca1\u6709 module-info \u7684\u6a21\u5757\uff0c\u4f46\u5728 jar \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/MANIFEST.MF")," \u4e2d\u5b9a\u4e49\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Automatic-Module-Name")," \u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u9488\u5bf9\u8fd9\u7c7b jar\uff0c\u552f\u4e00\u80fd\u6bd4\u8f83\u597d\u7684\u5904\u7406\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u751f\u6210 module-info.java"),(0,o.kt)("li",{parentName:"ol"},"\u89e3\u5305"),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1 module-info.java"),(0,o.kt)("li",{parentName:"ol"},"\u66f4\u65b0 jar")),(0,o.kt)("p",null,"\u4e00\u4e0b\u4ee5 javax.inject \u4e3a\u6848\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://central.maven.org/maven2/javax/inject/javax.inject/1/javax.inject-1.jar\n\n# \u67e5\u770b\u4f9d\u8d56\u60c5\u51b5\uff0c\u975e\u6a21\u5757\u5316\u7684 jar \u4f9d\u8d56\u548c\u6a21\u5757\u5316 jar \u7684\u4f9d\u8d56\u73b0\u5b9e\u4e0d\u540c\n# \u8f93\u51fa: javax.inject-1.jar -> java.base\n# \u6a21\u5757\u5316\u7684 jar \u8f93\u51fa: javax.inject -> java.base\njdeps javax.inject-1.jar\n\n\n# \u751f\u6210 module-info.java\njdeps --generate-open-module info javax.inject-1.jar\n# \u89e3\u538b jar\nunzip javax.inject-1.jar -d classes/\n# \u7f16\u8bd1 module-info.java\njavac -p javax.inject -d classes/ info/javax.inject/module-info.java\n# \u66f4\u65b0 jar\njar uf javax.inject-1.jar -C classes/ module-info.class\n# \u518d\u6b21\u67e5\u770b\u4f9d\u8d56\njdeps javax.inject-1.jar\n")),(0,o.kt)("p",null,"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"info/javax.inject/module-info.java")," \u7684\u5185\u5bb9\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"open module javax.inject {\n}\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u4e00\u6bb5\u65f6\u95f4\u4fbf\u662f\u5c06\u6240\u6709\u7528\u5230\u7684\u4f9d\u8d56\u8fdb\u884c\u8fd9\u6837\u7684\u8f6c\u6362\uff0c\u5176\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u95f4\u63a5\u4f9d\u8d56\u4e5f\u9700\u8981\u6a21\u5757\u5904\u7406"),"\u3002\u5176\u4e2d\u6700\u96be\u5904\u7406\u7684\u662f guava\uff0c\u56e0\u4e3a\u9700\u8981\u5c06 guava \u6a21\u5757\u5316\uff0c\u4e5f\u9700\u8981\u5b83\u4f9d\u8d56\u7684\u6240\u6709\u6a21\u5757\u90fd\u5b58\u5728\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"open module com.google.common {\n    requires j2objc.annotations;\n    requires java.logging;\n    requires jdk.unsupported;\n    requires jsr305;\n\n    requires transitive error.prone.annotations;\n\n}\n")),(0,o.kt)("p",null,"\u56e0\u6b64\u4e3a\u4e86\u5c06 guava \u6a21\u5757\u5316\uff0c\u9700\u8981\u4ece maven \u4e0a\u4e0b\u8f7d\u6240\u6709\u7684\u8fd9\u4e9b jar \u5e76\u8fdb\u884c\u6a21\u5757\u5316\u3002"),(0,o.kt)("p",null,"\u5b8c\u6210\u6240\u6709\u7684\u6a21\u5757\u5316\u540e\uff0c\u518d\u6b21\u901a\u8fc7 jlink \u751f\u6210 jdk \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"jdk/Contents/Home/jre"),"\uff0c\u4e4b\u6240\u4ee5\u751f\u6210\u5230\u8fd9\u6837\u7684\u4e00\u4e2a\u76ee\u5f55\uff0c\u662f\u56e0\u4e3a\u5728\u5e94\u7528\u6253\u5305\u65f6\u80fd\u7b26\u5408\u9ed8\u8ba4\u7684 Java \u76ee\u5f55\u7ed3\u6784\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u751f\u6210\u7684 JDK \u6765\u8fd0\u884c\u5e94\u7528\n./jdk/Contents/Home/jre/bin/java -Xmx64m --upgrade-module-path target/modules -m me.wener.tools.app\n\n# \u751f\u6210\u7684 JDK \u5927\u7ea6 50m - \u5bf9\u6b64\u5df2\u7ecf\u975e\u5e38\u6ee1\u610f\u4e86\uff0cElectron \u4e00\u822c\u90fd\u662f 100m \u5de6\u53f3\ndu -s jdk/\n")),(0,o.kt)("h3",{id:"\u5e94\u7528\u6253\u5305"},"\u5e94\u7528\u6253\u5305"),(0,o.kt)("p",null,"\u5e94\u7528\u6253\u5305\u4e3b\u8981\u662f\u5c06\u73b0\u5728\u5df2\u7ecf\u80fd\u8fd0\u884c\u7684 jdk \u73af\u5883\u6253\u5305\u4e3a\u4e00\u4e2a macOs \u7684 app\u3002\u6253\u5305\u5668\u6709\u4e0d\u540c\u7684\u9009\u62e9\uff0c\u4f46\u7528\u4e0b\u6765\u8fd8\u662f jar2app \u6bd4\u8f83\u597d\u7528\u3002\u5982\u679c\u9700\u8981\u6253\u5305\u5176\u5b83\u5e73\u53f0\u5e94\u7528\uff0c\u9700\u8981\u9009\u62e9\u5176\u5b83\u5e73\u53f0\u7684\u6253\u5305\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/Jorl17/jar2app\n# jar2app \u662f Python \u811a\u672c\uff0c\u56e0\u6b64\u9700\u8981 Python \u73af\u5883\n# \u6253\u5305\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49 jdk target/jdk\n./jar2app/jar2app ./target/modules/tools-app-1.0-SNAPSHOT.jar -r target/jdk/ -b me.wener.tools -n WenerTools -j "-Xmx64M --upgrade-module-path $APP_ROOT/Contents/PlugIns/jdk/modules"\n\n# \u6700\u7ec8\u6253\u5305\u540e\u7684\u5e94\u7528\u7ea6 50m\n# 50M     WenerTools.app\ndu -s WenerTools.app\n\n# \u53cc\u51fb\u542f\u52a8\u6216\u547d\u4ee4\u884c\u542f\u52a8\nopen WenerTools.app\n')),(0,o.kt)("p",null,"\u4e00\u5207\u5927\u529f\u544a\u6210\uff0c\u4e00\u4e2a APP \u5c31\u6b64\u8bde\u751f\u4e86\uff01\u5982\u679c\u8fd8\u60f3\u8981\u63d0\u4ea4\u5230 AppStore\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u8fd8\u4f1a\u9700\u8981\u5176\u4ed6\u7684\u4e0d\u5c11\u6b65\u9aa4\uff0c\u5728\u8fd9\u5c31\u4e0d\u8be6\u7ec6\u8bf4\u660e\u5566\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u5e94\u7528\u5f00\u53d1\u8fc7\u7a0b\uff0c\u6253\u5305\u8fc7\u7a0b\u90fd\u8fd8\u662f\u6bd4\u8f83\u6109\u5feb\u7684\uff0c\u6700\u56f0\u96be\u7684\u662f\u6a21\u5757\u5316 jar \u7684\u5904\u7406\uff0c\u56e0\u4e3a\u5f88\u591a\u6a21\u5757\u90fd\u8fd8\u6ca1\u6709 module-info.java\uff0c\u5bfc\u81f4\u5927\u90e8\u5206\u7684 jar \u90fd\u5f97\u5148\u5904\u7406\u4e00\u904d\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u53ef\u4ee5\u7d2f\u8ba1\u7684\uff0c\u88ab\u5904\u7406\u8fc7\u7684 jar \u53ef\u4ee5\u88ab\u91cd\u590d\u5229\u7528\u3002\u5982\u679c\u4e0d\u9700\u8981\u914d\u5408 jlink\uff0c\u90a3\u4e48\u662f\u4e0d\u9700\u8981\u5904\u7406\u7684\u3002"),(0,o.kt)("p",null,"Java 11 \u610f\u5473\u7740 Java 9\u300110\u300111 \u7684\u6240\u6709\u65b0\u7279\u6027\uff0cJavaFX \u5f00\u53d1\u4e5f\u5f02\u5e38\u7684\u7b80\u5355\uff0c\u6574\u4e2a\u8fc7\u7a0b\u8fd8\u662f\u5f88\u723d\u7684\uff01"))}d.isMDXComponent=!0},44797:function(e,n,a){n.Z=a.p+"assets/images/javafx-binding-cafd27483b48f23a5b8c0418d841026c.png"},15812:function(e,n,a){n.Z=a.p+"assets/images/javafx-relation-fe1fe83b8ce591029abaf9150133d450.png"}}]);