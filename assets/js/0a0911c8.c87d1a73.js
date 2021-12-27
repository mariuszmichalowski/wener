"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37810],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,k=c["".concat(m,".").concat(g)]||c[g]||s[g]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65821:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"GORM"},m=void 0,u={unversionedId:"languages/go/lib/gorm",id:"languages/go/lib/gorm",title:"GORM",description:"gorm",source:"@site/notes/languages/go/lib/gorm.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/gorm",permalink:"/notes/languages/go/lib/gorm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/gorm.md",tags:[],version:"current",frontMatter:{title:"GORM"},sidebar:"docs",previous:{title:"goreleaser",permalink:"/notes/languages/go/lib/goreleaser"},next:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"}},p=[{value:"gorm",id:"gorm",children:[],level:2},{value:"Model",id:"model",children:[],level:2},{value:"\u94a9\u5b50",id:"\u94a9\u5b50",children:[],level:2},{value:"Upsert",id:"upsert",children:[],level:2},{value:"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5",id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5",children:[],level:2},{value:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",children:[],level:2},{value:"\u591a\u6001",id:"\u591a\u6001",children:[],level:2},{value:"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",children:[],level:2}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gorm"},"gorm"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Golang \u7684 ORM \u5b9e\u73b0\n\u57fa\u4e8e Entity \u6a21\u578b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm"},"go-gorm/gorm")),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa Statement \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2 - \u6267\u884c query \u56de\u8c03"))),(0,l.kt)("li",{parentName:"ul"},"\u51e0\u4e4e\u6240\u6709\u5b9e\u9645\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7 callback \u4e32\u8054\u8d77\u6765\u7684"),(0,l.kt)("li",{parentName:"ul"},"callbacks \u7ba1\u7406 processor \u7ec4"),(0,l.kt)("li",{parentName:"ul"},"processor \u4e0b\u6709\u5b9e\u9645\u56de\u8c03\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u8c03 \u64cd\u4f5c Statement \u4e0a\u5173\u8054\u7684\u503c\u5bf9\u8c61\u8fdb\u884c\u67e5\u8be2\u4fee\u6539",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"func(db *gorm.DB)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db.Statement.ReflectValue")," - \u7ed3\u679c\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3 processor - \u8c03\u7528\u540e\u5f00\u59cb\u5b9e\u9645\u6267\u884c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"create",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm:begin_transaction"),(0,l.kt)("li",{parentName:"ul"},"gorm:before_create"),(0,l.kt)("li",{parentName:"ul"},"gorm:save_before_associations"),(0,l.kt)("li",{parentName:"ul"},"gorm:create"),(0,l.kt)("li",{parentName:"ul"},"gorm:save_after_associations"),(0,l.kt)("li",{parentName:"ul"},"gorm:after_create"),(0,l.kt)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),(0,l.kt)("li",{parentName:"ul"},"query",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm:query"),(0,l.kt)("li",{parentName:"ul"},"gorm:preload"),(0,l.kt)("li",{parentName:"ul"},"gorm:after_query"))),(0,l.kt)("li",{parentName:"ul"},"update",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0e create \u7c7b\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"gorm:setup_reflect_value - \u5728 begin_transaction \u540e"))),(0,l.kt)("li",{parentName:"ul"},"delete",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm:begin_transaction"),(0,l.kt)("li",{parentName:"ul"},"gorm:before_delete"),(0,l.kt)("li",{parentName:"ul"},"gorm:delete_before_associations"),(0,l.kt)("li",{parentName:"ul"},"gorm:delete"),(0,l.kt)("li",{parentName:"ul"},"gorm:after_delete"),(0,l.kt)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),(0,l.kt)("li",{parentName:"ul"},"row",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm:row"))),(0,l.kt)("li",{parentName:"ul"},"raw",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gorm:raw"))))),(0,l.kt)("li",{parentName:"ul"},"RegisterDefaultCallbacks - \u9ed8\u8ba4 callback \u6ce8\u518c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u80fd\u770b\u5f97\u51fa\u6765\u6267\u884c\u8fc7\u7a0b"))),(0,l.kt)("li",{parentName:"ul"},"\u5173\u7cfb - Relationship",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u5173\u8054"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u64cd\u4f5c\u53ef\u9009 - ",(0,l.kt)("inlineCode",{parentName:"li"},"Select(clause.Associations)")," ",(0,l.kt)("inlineCode",{parentName:"li"},'Select("Profile")')),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u9488\u5bf9\u5173\u8054\u8fdb\u884c\u64cd\u4f5c - ",(0,l.kt)("inlineCode",{parentName:"li"},'Association("Profile")')),(0,l.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u5904\u7406\u65b9\u5f0f\u5206\u4e3a JoinTable \u548c Reference"))),(0,l.kt)("li",{parentName:"ul"},"gorm:preload",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a\u5c42\u7ea7 Preload \u4f1a\u6309\u5e8f - \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},'Preload("Profile.Address")')," \u4f1a\u5206\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"Profile")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"Profile.Address")," \u4e24\u6b21\u5b8c\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5173\u7cfb\u4e0d\u5b58\u5728\uff0c\u627e\u4e0d\u5230 Relationship \u76ee\u524d\u4f1a NPE"))),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u6784\u5efa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clause.Expression{ Build(Builder) }")," - \u8868\u793a\u4efb\u610f\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clause.Builder")," - WriteString, AddVar, WriteQuoted - \u6784\u5efa\u4e0a\u4e0b\u6587"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clause.Interface")," - \u5e26 Name \u7684 \u8868\u8fbe\u5f0f - \u53ef\u4ee5\u88ab\u5408\u5e76\u548c\u66ff\u6362 - \u4f8b\u5982 LIMIT, SELECT"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clause.Table"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"clause.Column")))),(0,l.kt)("li",{parentName:"ul"},"Relationship \u5173\u8054\u7684 Schema \u53ef\u80fd\u548c\u5b9e\u9645 Schema \u4e0d\u540c - \u5bfc\u81f4\u65e0\u6cd5 Preload"),(0,l.kt)("li",{parentName:"ul"},"Embed Struct \u4e5f\u662f\u5f53\u4f5c embedded \u6765\u5904\u7406\u7684\uff0c\u53ea\u4e0d\u8fc7\u6ca1\u6709\u524d\u7f00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5d4c\u5957\u591a\u5c42\u89e3\u6790\u7684 schema \u4f1a\u6709\u95ee\u9898 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm/issues/3964"},"#3964")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-gorm/datatypes"},"go-gorm/datatypes")," - gorm.io/datatypes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5176\u4ed6\u6570\u636e\u7c7b\u578b - \u4f8b\u5982 JSON")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u5b57\u6bb5\u8bbe\u7f6e\u4e3a default:null",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"OnConflict UpdateAll \u4e0d\u4f1a\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"Null \u65e0\u6cd5\u88ab\u8bfb\u53d6\u4e3a \u975e Ptr \u6216 \u975e sql.Null")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u76f4\u63a5\u8c03\u7528 processor\nfunc TestPreloadOnly(t *testing.T){\n  // \u6a21\u578b\u53ea\u5305\u542b\u4e3b\u952e\n  var m models.User\n  m.ID = 1\n  // \u901a\u5e38\u903b\u8f91 - \u4f46\u6784\u9020\u51fa\u6765\u7684 stmt \u5305\u542b\u57fa\u7840\u4fe1\u606f\n  stmt := db.Model(&m).Preload("Profile")\n  // \u586b\u5145\u9700\u8981\u7684\u4fe1\u606f - \u6b63\u5e38\u903b\u8f91\u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u88ab\u586b\u5145\n  stmt.Statement.Dest = stmt.Statement.Model\n  stmt.Statement.ReflectValue = reflect.ValueOf(stmt.Statement.Dest).Elem()\n  assert.NoError(t, stmt.Statement.Parse(stmt.Statement.Model))\n\n  // \u76f4\u63a5\u8c03\u7528 preload\n  callbacks.Preload(stmt)\n  assert.NoError(t, stmt.Error)\n\n  // \u5b57\u6bb5\u88ab\u6210\u529f preload\n  fmt.Println(m.Profile)\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SkipDefaultTransaction \u53ef\u5173\u95ed - \u7ea6 30% \u6027\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"Tag \u4e0d\u533a\u5206\u5927\u5c0f\u5199")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u67e5\u8be2\u6761\u4ef6\u4e0e\u6570\u636e\u4e0d\u540c\u4f46\u53ef\u4ee5\u4e00\u6b21\u64cd\u4f5c\ndb.Where(User{Name: "non_existing"}).Assign(User{Age: 20}).FirstOrCreate(&user)\n')),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/google/uuid"\n  "github.com/lib/pq"\n)\n\ntype Post struct {\n  ID     uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`\n  Title  string\n  Tags   pq.StringArray `gorm:"type:text[]"` // \u9700\u8981\u6307\u5b9a\u7c7b\u578b\n}\n')),(0,l.kt)("h2",{id:"\u94a9\u5b50"},"\u94a9\u5b50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BeforeSave"),(0,l.kt)("li",{parentName:"ul"},"BeforeCreate/BeforeUpdate"),(0,l.kt)("li",{parentName:"ul"},"AfterCreate/AfterUpdate"),(0,l.kt)("li",{parentName:"ul"},"AfterSave"))),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BeforeDelete"),(0,l.kt)("li",{parentName:"ul"},"AfterDelete"))),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AfterFind")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u64cd\u4f5c\u5f53\u524d\u7684 Statement \u53ef\u4fee\u6539\u8bed\u53e5\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  // \u901a\u8fc7 tx.Statement \u4fee\u6539\u5f53\u524d\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\n  tx.Statement.Select("Name", "Age")\n  tx.Statement.AddClause(clause.OnConflict{DoNothing: true})\n\n  // tx \u662f\u5e26\u6709 `NewDB` \u9009\u9879\u7684\u65b0\u4f1a\u8bdd\u6a21\u5f0f\n  // \u57fa\u4e8e tx \u7684\u64cd\u4f5c\u4f1a\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u4f46\u4e0d\u4f1a\u5e26\u4e0a\u4efb\u4f55\u5f53\u524d\u7684\u6761\u4ef6\n  err := tx.First(&role, "name = ?", user.Role).Error\n  // SELECT * FROM roles WHERE name = "admin"\n  // ...\n  return err\n}\n')),(0,l.kt)("h2",{id:"upsert"},"Upsert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'db.Clauses(clause.OnConflict{\n  Columns:   []clause.Column{{Name: "id"}},\n  DoUpdates: clause.AssignmentColumns([]string{"name", "age"}),\n}).Create(&users)\n\ndb.Clauses(clause.OnConflict{\n  Columns:   []clause.Column{{Name: "id"}},\n  DoUpdates: clause.Assignments(map[string]interface{}{"role": "user"}),\n}).Create(&users)\n')),(0,l.kt)("h2",{id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5"},"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"stmt := db.Session(&gorm.Session{DryRun: true}).First(&user, 1).Statement\nstmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`\nstmt.Vars         //=> []interface{}{1}\n\n// \u53ef\u751f\u6210\u5b8c\u6574 SQL - \u4e0d\u8981\u7528\u4e8e\u67e5\u8be2\uff0c\u6709 SQL \u6ce8\u5165\u98ce\u9669\ndb.Dialector.Explain(stmt.SQL.String(), stmt.Vars...)\n")),(0,l.kt)("h2",{id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406"},"\u8df3\u56de\u94a9\u5b50\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"db.Session(&gorm.Session{SkipHooks: true}).Create(&user)\n")),(0,l.kt)("h2",{id:"\u591a\u6001"},"\u591a\u6001"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u591a\u6001\u503c\u4e3a\u8868\u540d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Cat struct {\n  ID    int\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  ID   int\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n}\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"},"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Model struct {\n  ID    int\n  UID   string // uuid\n}\ntype Cat struct {\n  Model\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  Model\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n  OwnerUID string\n}\n')))}c.isMDXComponent=!0}}]);