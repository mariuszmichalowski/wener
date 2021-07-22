(window.webpackJsonp=window.webpackJsonp||[]).push([[1017],{1090:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),s=(t(0),t(1152)),i={title:"elasticsearch.yml v2.x"},c={unversionedId:"elastic/elasticsearch-v2.yml",id:"elastic/elasticsearch-v2.yml",isDocsHomePage:!1,title:"elasticsearch.yml v2.x",description:"elasticsearch.yml",source:"@site/notes/elastic/elasticsearch-v2.yml.md",slug:"/elastic/elasticsearch-v2.yml",permalink:"/notes/elastic/elasticsearch-v2.yml",editUrl:"https://github.com/wenerme/wener/edit/master/notes/elastic/elasticsearch-v2.yml.md",version:"current"},l=[{value:"elasticsearch.yml",id:"elasticsearchyml",children:[]},{value:"2.x \u914d\u7f6e\u6587\u4ef6\u53ca\u8bf4\u660e",id:"2x-\u914d\u7f6e\u6587\u4ef6\u53ca\u8bf4\u660e",children:[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}]}],o={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"elasticsearchyml"},"elasticsearch.yml"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u901a\u8fc7 ",Object(s.b)("inlineCode",{parentName:"li"},"${...}")," \u6765\u5f15\u7528\u73af\u5883\u53d8\u91cf,\u4f8b\u5982:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yml"},"node.rack: ${RACK_ENV_VAR}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u914d\u7f6e\u9879\u90fd\u53ef\u901a\u8fc7\u542f\u52a8\u53c2\u6570\u6307\u5b9a,\u4f8b\u5982 ",Object(s.b)("inlineCode",{parentName:"li"},"./bin/elasticsearch -Dpath.conf=my-config")," \u4fee\u6539\u914d\u7f6e\u8def\u5f84")),Object(s.b)("h2",{id:"2x-\u914d\u7f6e\u6587\u4ef6\u53ca\u8bf4\u660e"},"2.x \u914d\u7f6e\u6587\u4ef6\u53ca\u8bf4\u660e"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yml"},"# ==================================================\n# \u96c6\u7fa4\u914d\u7f6e\n# ==================================================\ncluster:\n  # \u7528\u4e8e\u6807\u793a\u81ea\u52a8\u53d1\u73b0\u7684\u96c6\u7fa4\u660e. \u5982\u679c\u540c\u65f6\u542f\u52a8\u4e86\u591a\u4e2a\u96c6\u7fa4\u4f1a\u901a\u8fc7\u8be5\u6807\u793a\u7b26\u6765\u533a\u5206\n  name: friends\n\n\n# ==================================================\n# \u8282\u70b9\u914d\u7f6e\n# ==================================================\nnode:\n  # \u8282\u70b9\u540d\u5982\u679c\u4e0d\u914d\u7f6e\u5728\u542f\u52a8\u65f6\u4f1a\u81ea\u52a8\u751f\u6210.\n  name: joey\n  # \u6807\u8bc6\u8be5\u8282\u70b9\u662f\u5426\u80fd\u6210\u4e3a\u4e3b\u8282\u70b9.\n  master: true\n  # \u6807\u8bc6\u8be5\u8282\u70b9\u662f\u5426\u5b58\u50a8\u6570\u636e\n  data: true\n  # \u53ef\u4e3a\u8282\u70b9\u914d\u7f6e\u4efb\u610f\u989d\u5916\u7684\u5c5e\u6027,\u7528\u4e8e\u5728\u9009\u62e9\u5206\u533a\u65f6\u8fdb\u884c\u6807\u8bc6,\u4f8b\u5982:\n  rack: abc\n  # \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728\u5355\u4e2a\u5b89\u88c5\u76ee\u5f55(\u6570\u636e\u76ee\u5f55)\u53ef\u542f\u52a8\u591a\u4e2a\u8282\u70b9,\u53ef\u901a\u8fc7\u8be5\u914d\u7f6e\u6765\u7981\u6b62\n  max_local_storage_nodes: 1\n\n# ==================================================\n# \u7d22\u5f15\u914d\u7f6e\n# ==================================================\n# \u53c2\u8003\n# http://elasticsearch.org/guide/en/elasticsearch/reference/current/index-modules.html\n# http://elasticsearch.org/guide/en/elasticsearch/reference/current/indices-create-index.html\nindex:\n  # \u9ed8\u8ba4\u5206\u7247\u6570, \u4e0d\u80fd\u88ab\u4fee\u6539, \u53ef\u5728\u521b\u5efa\u7d22\u5f15\u65f6\u6307\u5b9a\n  number_of_shards: 5\n  # \u9ed8\u8ba4\u526f\u672c\u6570, \u53ef\u8fd0\u884c\u65f6\u4fee\u6539\n  number_of_replicas: 1\n  # \u9ed8\u8ba4\u4f7f\u7528 lz4, best_compression \u4f1a\u4f7f\u7528 DEFLATE\n  codec: best_compression\n  # \u81ea\u52a8\u6269\u5c55\u5206\u7247,\u5f53\u5197\u4f59\u8282\u70b9\u8db3\u591f\u7684\u65f6\u5019,\u81ea\u52a8\u589e\u52a0\u526f\u672c\u6570\u91cf,\u9ed8\u8ba4\u4e3a false, \u53ef\u914d\u7f6e 0-5,3-all\u8fd9\u6837\u7684\u8303\u56f4\u503c\n  auto_expand_replicas: 0-5\n  # \u7d22\u5f15\u5237\u65b0\u95f4\u9694, \u5237\u65b0\u540e\u624d\u80fd\u88ab\u641c\u7d22,\u53ef\u4f7f\u7528 -1 \u7981\u7528\n  refresh_interval: 1s\n  # \u8fd4\u56de\u7684\u6700\u5927\u7ed3\u679c\u6570\u91cf, \u5f71\u54cd from+size\n  max_result_window: 10000\n  blocks:\n    # \u8bbe\u7f6e\u4e3a true \u4f7f\u7d22\u5f15\u548c\u7d22\u5f15\u5143\u6570\u636e\u53ea\u8bfb\n    read_only: false\n    read: True\n    write: True\n    metadata: True\n  requests:\n    # \u5f53\u4e00\u4e2a\u641c\u7d22\u8bf7\u6c42\u5bf9\u4e00\u4e2a\u6216\u591a\u4e2a\u7d22\u5f15\u6267\u884c\u65f6,\u6bcf\u4e2a\u9700\u8981\u67e5\u8be2\u7684\u5206\u7247\u90fd\u4f1a\u6267\u884c\u8be5\u8bf7\u6c42\u7136\u540e\u8fd4\u56de\u672c\u5730\u7ed3\u679c\u5230\u8c03\u5ea6\u8282\u70b9,\u6700\u7ec8\u5408\u5e76\u4e00\u4e2a\u5168\u5c40\u7684\u7ed3\u679c\u96c6.\n    # \u5206\u7247\u7ea7\u522b\u7684\u8bf7\u6c42\u7f13\u5b58\u548c\u7528\u4e8e\u7f13\u5b58\u6bcf\u4e2a\u5206\u7247\u7684\u672c\u5730\u8ba1\u7b97\u7ed3\u679c. \u8fd9\u53ef\u4ee5\u4f7f\u5e38\u7528(\u590d\u6742)\u7684\u67e5\u8be2\u7acb\u5373\u5f97\u5230\u8fd4\u56de\u7ed3\u679c.\n    # \u8bf7\u6c42\u7f13\u5b58\u975e\u5e38\u9002\u7528\u4e8e\u65e5\u5fd7\u5b58\u50a8, \u56e0\u4e3a\u53ea\u6709\u6700\u8fd1\u7684\u7d22\u5f15\u6570\u636e\u4f1a\u88ab\u66f4\u65b0,\u65e7\u7684\u7d22\u5f15\u6570\u636e\u53ef\u4ece\u7f13\u5b58\u76f4\u63a5\u8fd4\u56de.\n    # \u76ee\u524d\u53ea\u80fd\u7f13\u5b58 size=0 \u7684\u641c\u7d22\u8bf7\u6c42,\u56e0\u6b64\u4e0d\u4f1a\u7f13\u5b58 `hits`,\u4f46\u4f1a\u7f13\u5b58 `hots.total` \u805a\u5408\u548c\u5efa\u8bae\n    # \u67e5\u8be2\u4e2d\u4f7f\u7528\u4e86 `now` \u7684\u4e0d\u80fd\u88ab\u7f13\u5b58\n    #\n    # \u5bf9\u4e8e\u672a\u7f13\u5b58\u7684\u641c\u7d22\u4e5f\u80fd\u4fdd\u8bc1\u8fd1\u5b9e\u65f6\n    # \u7f13\u5b58\u4f1a\u5728\u5206\u7247\u5237\u65b0\u65f6\u81ea\u52a8\u5931\u6548,\u4f46\u53ea\u6709\u5b9e\u9645\u88ab\u6539\u53d8\u7684\u6570\u636e\u624d\u4f1a\u5931\u6548.\n    # \u5373\u4fdd\u8bc1\u7f13\u5b58\u8bf7\u6c42\u67e5\u8be2\u7ed3\u679c\u548c\u672a\u7f13\u5b58\u8bf7\u6c42\u662f\u76f8\u540c\u7684.\n    # \u5237\u65b0\u95f4\u9694\u8d8a\u4e45, \u7f13\u5b58\u7684\u6709\u6548\u65f6\u95f4\u8d8a\u4e45.\n    # \u7f13\u5b58\u4f7f\u7528 LRU \u89c4\u5219\n    # \u53ef\u624b\u52a8\u4f7f\u7f13\u5b58\u5931\u6548\n    #   curl -XPOST 'localhost:9200/kimchy,elasticsearch/_cache/clear?request_cache=true'\n    #\n    # \u7f13\u5b58\u7684 KEY \u4e3a\u8bf7\u6c42\u7684 JSON\n    # \u67e5\u770b\u7f13\u5b58\u4f7f\u7528\u7edf\u8ba1\n    # curl 'localhost:9200/_stats/request_cache?pretty&human'\n    # curl 'localhost:9200/_nodes/stats/indices/request_cache?pretty&human'\n    # https://www.elastic.co/guide/en/elasticsearch/reference/current/shard-request-cache.html\n    cache:\n      enable: true\n      # \u5806\u4e2d\u6700\u5927\u7f13\u5b58\u91cf\n      size: 1%\n    # https://www.elastic.co/guide/en/elasticsearch/reference/current/recovery.html\n\n\n\nindices:\n  # \u5b57\u6bb5\u6570\u636e\u7f13\u5b58\u4e3b\u8981\u5728\u5bf9\u5b57\u6bb5\u6392\u5e8f\u548c\u805a\u5408\u8ba1\u7b97\u7684\u65f6\u5019\u4f7f\u7528.\n  # \u5728\u57fa\u4e8e\u5b57\u6bb5\u6587\u6863\u8fdb\u884c\u8bbf\u95ee\u65f6,\u4e3a\u4e86\u63d0\u9ad8\u8bbf\u95ee\u901f\u5ea6\u56de\u5c06\u6240\u6709\u5b57\u6bb5\u503c\u90fd\u52a0\u8f7d\u5230\u5185\u5b58.\n  # \u6784\u5efa\u5b57\u6bb5\u6570\u636e\u7f13\u5b58\u662f\u76f8\u5f53\u6602\u8d35\u7684,\u56e0\u6b64\u5efa\u8bae\u914d\u7f6e\u8db3\u591f\u7684\u5185\u5b58\u6765\u7f13\u5b58\u8be5\u6570\u636e.\n  # https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html\n  # curl -XGET 'http://localhost:9200/_stats/fielddata/?fields=field1,field2&pretty'\n  fielddata:\n    cache:\n      # #\u8c03\u4f18# \u8be5\u503c\u53ef\u4e3a\u767e\u5206\u6bd4\u6216\u5177\u4f53\u7684\u503c,\u4f8b\u5982 12GB\n      size: 30%\n  # \u67e5\u8be2\u7f13\u5b58\u8d1f\u8d23\u7f13\u5b58\u67e5\u8be2\u7684\u7ed3\u679c\u503c.\n  # \u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u81ea\u5df1\u7684\u67e5\u8be2\u7f13\u5b58,\u4f9b\u6240\u6709\u5206\u7247\u5171\u4eab.\n  # \u7f13\u5b58\u91c7\u7528 LRU \u89c4\u5219\n  # \u53ea\u4f1a\u7f13\u5b58\u5728\u8fc7\u6ee4\u4e0a\u4e0b\u6587\u4e2d\u7684\u67e5\u8be2\n  # \u8be5\u914d\u7f6e\u4e3a\u9759\u6001\u914d\u7f6e,\u9700\u8981\u5728\u6bcf\u4e2a\u6570\u636e\u8282\u70b9\u914d\u7f6e\n  queries:\n    cache:\n      size: 10%\n  memory:\n    # \u7d22\u5f15\u7f13\u51b2\u4f1a\u7528\u4e8e\u5b58\u50a8\u65b0\u7d22\u5f15\u7684\u6587\u6863. \u5f53\u6ee1\u4e86\u8fc7\u540e, \u7f13\u51b2\u4e2d\u7684\u6587\u6863\u4f1a\u88ab\u5199\u5230\u78c1\u76d8\u6bb5\u4e2d. \u6bcf\u4e2a\u8282\u70b9\u7684\u6bcf\u4e2a\u5206\u7247\u90fd\u6709\u81ea\u5df1\u7684\u7f13\u51b2.\n    # \u8be5\u914d\u7f6e\u4e3a\u9759\u6001\u914d\u7f6e,\u9700\u8981\u5728\u6bcf\u4e2a\u6570\u636e\u8282\u70b9\u914d\u7f6e\n    # \u53ef\u914d\u7f6e\u767e\u5206\u6bd4\u6216\u5177\u4f53\u7684\u503c\n    # https://www.elastic.co/guide/en/elasticsearch/reference/current/indexing-buffer.html\n    index_buffer_size: 10%\n    min_index_buffer_size: 48mb\n    # \u9ed8\u8ba4\u4e3a\u65e0\u9650\n    max_index_buffer_size: 50%\n    # \u4e3a\u6bcf\u4e2a\u5206\u7247\u8bbe\u7f6e\u4e00\u4e2a\u7528\u4e8e\u7d22\u5f15\u7f13\u51b2\u7684\u6700\u5c0f\u7f13\u5b58\u503c\n    min_shard_index_buffer_size: 4mb\n  # \u6062\u590d\u76f8\u5173\u8bbe\u7f6e\n  # https://www.elastic.co/guide/en/elasticsearch/reference/current/query-cache.html\n  recovery:\n    # \u6062\u590d\u5206\u7247\u7684\u5e76\u53d1\u6d41\u6570\n    concurrent_streams: 3\n    # \u6bcf\u4e2a\u8282\u70b9\u5141\u8bb8\u7684\u5c0f\u6587\u4ef6(<5mb)\u6062\u590d\u6d41\n    concurrent_small_file_streams: 2\n    file_chunk_size: 512kb\n    translog_ops: 1000\n    translog_size: 512kb\n    compress: true\n    # \u6062\u590d\u65f6\u7684\u6570\u636e\u9650\u6d41\n    max_bytes_per_sec: 100mb\n  # \u6709 ttl \u7684\u6587\u6863\u4f1a\u6709\u4e13\u95e8\u7684\u7ebf\u7a0b\u6765\u64cd\u4f5c\n  # https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-ttl.html\n  ttl:\n    # \u5220\u9664\u8fdb\u7a0b\u7684\u8fd0\u884c\u95f4\u9694\n    interval: 60s\n    # \u5220\u9664\u4e3a\u6279\u91cf\u64cd\u4f5c,\u901a\u8fc7\u8be5\u914d\u7f6e\u6765\u63a7\u5236\u6279\u5904\u7406\u91cf\n    bulk_size: 10000\n\n\n# ==================================================\n# \u8def\u5f84\u914d\u7f6e\n# ==================================================\n\npath:\n  # \u914d\u7f6e\u8def\u5f84, \u5305\u542b logging.yml \u548c elasticsearch.yml, \u901a\u5e38\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\n  conf: config\n  # \u8be5\u8282\u70b9\u5b58\u50a8\u7d22\u5f15\u6570\u636e\u7684\u76ee\u5f55, \u53ef\u914d\u7f6e\u591a\u4e2a\n  # path.data: data1,data2\n  data: data\n  # \u65e5\u5fd7\u8def\u5f84\n  logs: logs\n  # \u63d2\u4ef6\u8def\u5f84\n  plugins: plugins\n\n# ==================================================\n# \u63d2\u4ef6\u914d\u7f6e\n# ==================================================\n# \u5982\u679c\u8fd9\u91cc\u5b89\u88c5\u7684\u63d2\u4ef6\u672a\u5b89\u88c5,\u5219\u8be5\u8282\u70b9\u4e0d\u4f1a\u542f\u52a8\nplugin.mandatory: mapper-attachments,lang-groovy\n\n# ==================================================\n# \u5185\u5b58\u914d\u7f6e\n# ==================================================\n# \u5185\u5b58\u9501,\u907f\u514d\u5185\u5b58\u4ea4\u6362,\u63d0\u5347\u6027\u80fd,\u4f46\u5360\u7528\u7684\u5185\u5b58\u4e0d\u80fd\u88ab\u522b\u7684\u8fdb\u7a0b\u4f7f\u7528\nbootstrap.mlockall: true\n# \u786e\u4fdd ES_MIN_MEM \u548c ES_MAX_MEM \u73af\u5883\u53d8\u91cf\u90fd\u662f\u540c\u6837\u7684\u503c, \u5e76\u786e\u4fdd\u670d\u52a1\u5668\u6709\u8db3\u591f\u7684\u5185\u5b58.\n# \u540c\u65f6\u8fd8\u9700\u8981\u786e\u4fdd Elasticsearch \u80fd\u591f\u64cd\u4f5c\u5185\u5b58\u9501, `ulimit -l unlimited`\n\n# ==================================================\n# \u7f51\u7edc\u548c HTTP\n# ==================================================\nnetwork:\n  # \u7ed1\u5b9a\u7684\u4e3b\u673a\u5730\u5740\n  bind_host: 0.0.0.0\n  # \u5176\u4ed6\u8282\u70b9\u7528\u6765\u4e0e\u8be5\u8282\u70b9\u4ea4\u4e92\u7684\u5730\u5740.\u5982\u679c\u4e0d\u914d\u7f6e\u5219\u4f1a\u81ea\u884c\u5224\u65ad.\u9700\u8981\u6307\u5b9a\u4e3a\u771f\u5b9e IP \u5730\u5740\n  publish_host: 192.168.0.1\n  # \u540c\u65f6\u6307\u5b9a bind_host, publish_host\n  host: 0.0.0.0\n\n# \u4f20\u8f93\u6a21\u5757\u8d1f\u8d23\u96c6\u7fa4\u5185\u8282\u70b9\u4e4b\u95f4\u7684\u901a\u8baf.\u6240\u6709\u7684\u4f20\u8f93\u672c\u8d28\u4e0a\u90fd\u662f\u4e00\u90e8\u7684,\u56e0\u6b64\u4e0d\u4f1a\u6709\u7ebf\u7a0b\u963b\u585e\u7b49\u5f85\u54cd\u5e94.\n# \u53c2\u8003\n#   https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-transport.html\ntransport:\n    # \u57fa\u4e8e TCP \u5b9e\u73b0\u7684\u4f20\u8f93\u6a21\u5757\n    tcp:\n      # \u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u7aef\u53e3\n      port: 9300-9400\n      # \u96c6\u7fa4\u4e2d\u5176\u4ed6\u8282\u70b9\u4e0e\u8be5\u8282\u70b9\u901a\u8baf\u65f6\u4f7f\u7528\u7684\u7aef\u53e3.\u5f53\u5728\u9632\u706b\u5899\u6216\u8005\u4ee3\u7406\u540e\u9762\u7684\u65f6\u5019\u5f88\u6709\u7528.\n      # \u5982\u679c\u4e0d\u8bbe\u7f6e\u4e0e port \u503c\u76f8\u540c\n      publish_port: 9300-9400\n      # \u7ed1\u5b9a\u4f20\u8f93\u7aef\u53e3\u7684\u4e3b\u673a\u5730\u5740\n      # \u9ed8\u8ba4 network.bind_host\n      bind_host: 0.0.0.0\n      # \u96c6\u7fa4\u4e2d\u5176\u4ed6\u8282\u70b9\u4e0e\u8be5\u8282\u70b9\u901a\u8baf\u65f6\u4f7f\u7528\u7684\u4e3b\u673a\u5730\u5740\n      # \u9ed8\u8ba4 transport.host \u6216 network.publish_host\n      publish_host: 0.0.0.0\n      # \u540c\u65f6\u8bbe\u7f6e transport.bind_host \u548c transport.publish_host\n      # \u9ed8\u8ba4 network.host\n      host: 0.0.0.0\n      connect_timeout: 30s\n      # \u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u662f\u5426\u542f\u7528\u538b\u7f29 LZF\n      compress: false\n      # \u5b9a\u671f\u53d1\u9001 PING \u4fdd\u8bc1\u94fe\u63a5\u5b58\u6d3b\n      ping_schedule: 5s\n# HTTP \u6a21\u5757\u7528\u4e8e\u901a\u8fc7 HTTP \u66b4\u9732 Elasticsearch \u7684 API\n# HTTP \u5747\u4e3a\u5f02\u6b65,\u6ca1\u6709\u7ebf\u7a0b\u4f1a\u88ab\u7b49\u5f85\u54cd\u5e94\u963b\u585e,\u89e3\u51b3\u4e86 C10K \u95ee\u9898\n# \u5c3d\u91cf\u4f7f\u7528 HTTP keep-alive, \u4e0d\u8981\u4f7f\u7528 HTTP chunking\n# \u53c2\u8003\n#     https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-http.html\nhttp:\n  # \u76d1\u542c\u7684 HTTP \u7aef\u53e3\n  port: 9200-9300\n  # \u5ba2\u6237\u7aef\u5e94\u8be5\u8fde\u63a5\u7684\u8282\u70b9\n  # \u9ed8\u8ba4 http.port \u7684\u5b9e\u9645\u503c\n  publish_port: 9200-9300\n  # \u7ed1\u5b9a HTTP \u7aef\u53e3\u7684\u4e3b\u673a\u5730\u5740\n  # \u9ed8\u8ba4 network.bind_host\n  bind_host: 0.0.0.0\n  # \u5ba2\u6237\u7aef\u5e94\u8be5\u8fde\u63a5\u7684\u4e3b\u673a\u5730\u5740\n  publish_host: 0.0.0.0\n  # \u540c\u65f6\u8bbe\u7f6e bind_host \u548c publish_host\n  host: 0.0.0.0\n  # \u5141\u8bb8\u7684\u6700\u5927\u5185\u5bb9\u957f\u5ea6\n  # \u5982\u679c\u5927\u4e8e Integer.MAX_VALUE \u4f1a\u88ab\u91cd\u7f6e\u4e3a 100mb\n  max_content_length: 100mb\n  # URL \u6700\u5927\u957f\u5ea6\n  max_initial_line_length: 4kb\n  max_header_size: 8kb\n  # \u662f\u5426\u5728\u652f\u6301\u538b\u7f29\u7684\u65f6\u5019\u4f7f\u7528\u538b\u7f29\n  compression: false\n  # \u538b\u7f29\u7ea7\u522b\n  compression_level: 6\n  # \u662f\u5426\u7981\u7528 HTTP\n  enabled: false\n  cors:\n    # \u662f\u5426\u542f\u7528\u8de8\u57df\u8d44\u6e90\u5171\u4eab\n    enabled: false\n    allow-origin: *\n    # \u9ed8\u8ba4 1728000 = 20 \u5929\n    max-age: 1728000\n    allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\n    allow-headers: X-Requested-With, Content-Type, Content-Length\n    allow-credentials: false\n  # \u662f\u5426\u5728\u54cd\u5e94\u4e2d\u663e\u793a\u5177\u4f53\u7684\u9519\u8bef\u5806\u6808\n  # \u5982\u679c\u8bbe\u7f6e\u4e3a false, \u5f53\u8bf7\u6c42\u5e26\u4e86 error_trace \u53c2\u6570\u4e5f\u4f1a\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\n  detailed_errors:\n    enabled: true\n  pipelining: true\n  pipelining:\n    # HTTP \u94fe\u63a5\u5173\u95ed\u524d\u5806\u79ef\u5728\u5185\u5b58\u4e2d\u7684\u6700\u5927\u4e8b\u4ef6\u6570\u91cf\n    max_events: 10000\n\n\n# ==================================================\n# \u7f51\u5173\n# ==================================================\n# \u7f51\u5173\u7528\u4e8e\u6301\u4e45\u5316\u96c6\u7fa4\u72b6\u6001,\u5373\u4fbf\u96c6\u7fa4\u91cd\u542f\u72b6\u6001\u4e5f\u4e0d\u4f1a\u4e22\u5931.\u6240\u6709\u5bf9\u72b6\u6001\u7684\u53d8\u66f4(\u4f8b\u5982 \u6dfb\u52a0\u7d22\u5f15)\u90fd\u4f1a\u5b58\u50a8\u5230\u7f51\u5173.\u5f53\u96c6\u7fa4\u542f\u52a8\u65f6\u4f1a\u4ece\u7f51\u5173\u8bfb\u53d6\u72b6\u6001.\n# \u53c2\u8003\n#   http://elasticsearch.org/guide/en/elasticsearch/reference/current/modules-gateway.html\n# \u8fd9\u4e9b\u8bbe\u7f6e\u53ea\u6709\u5728\u6574\u4e2a\u96c6\u7fa4\u5168\u90e8\u91cd\u542f\u540e\u624d\u4f1a\u751f\u6548\ngateway:\n  # \u96c6\u7fa4\u7c7b\u578b\n  type: local\n  # \u5f53\u8282\u70b9\u91cc\u6709\u6307\u5b9a\u8282\u70b9\u6570\u91cf\u540e\u5f00\u59cb\u6062\u590d\n  recover_after_nodes: 1\n  recover_after_master_nodes: 1\n  recover_after_data_nodes: 1\n  # \u5f53\u8fbe\u5230\u6307\u5b9a\u65f6\u95f4\u540e\u5f00\u59cb\u6062\u590d\n  recover_after_time: 10m\n  # \u96c6\u7fa4\u4e2d\u5e94\u6709\u8282\u70b9\u6570\u91cf,\u5f53\u6570\u91cf\u8fbe\u5230\u5e76\u4e14\u6ee1\u8db3 recover_after_time, \u7acb\u5373\u5f00\u59cb\u6062\u590d\n  expected_nodes: 0\n  expected_master_nodes: 0\n  expected_data_nodes: 0\n\naction:\n  # \u662f\u5426\u5141\u8bb8\u81ea\u52a8\u521b\u5efa\u7d22\u5f15\n  auto_create_index: true\n  # \u7981\u6b62\u5173\u95ed\u6240\u6709\u7d22\u5f15\n  disable_close_all_indices: true\n  # \u7981\u6b62\u5220\u9664\u6240\u6709\u7d22\u5f15\n  disable_delete_all_indices: true\n  # \u7981\u6b62\u5173\u505c\u8be5\u8282\u70b9\n  disable_shutdown: true\n\n# ==================================================\n# \u6062\u590d\u63a7\u5236\n# ==================================================\n# \u53c2\u8003\n#   https://www.elastic.co/guide/en/elasticsearch/reference/current/shards-allocation.html\n#   https://www.elastic.co/guide/en/elasticsearch/reference/current/disk-allocator.html\n\ncluster:\n  routing:\n    allocation:\n      # all \u5141\u8bb8\u5bf9\u6240\u6709\u5206\u7247\u7c7b\u578b\u8fdb\u884c\u5206\u7247\u7533\u8bf7\n      # primaries \u53ea\u5141\u8bb8\u4e3b\u5206\u7247\u7684\u5206\u7247\u7533\u8bf7\n      # new_primaries \u53ea\u5141\u8bb8\u65b0\u589e\u7d22\u5f15\u7684\u4e3b\u5206\u7247\u5206\u7247\u7533\u8bf7\n      # none \u4e0d\u5141\u8bb8\u5206\u7247\u7533\u8bf7\n      enable: all\n      # \u5f53\u521d\u59cb\u6062\u590d\u65f6\u7684\u5e76\u53d1\u6062\u590d\u6570\u91cf\n      node_initial_primaries_recoveries: 2\n      # \u5f53\u6dfb\u52a0,\u5220\u9664\u6216\u5747\u8861\u8d1f\u8f7d\u65f6\u7684\u5e76\u53d1\u6062\u590d\u6570\u91cf\n      node_concurrent_recoveries: 4\n      same_shard:\n        # \u662f\u5426\u5141\u8bb8\u5728\u540c\u4e00\u4e2a\u4e3b\u673a\u7533\u8bf7\u5206\u7247\n        host: false\n    rebalance:\n      # \u53ef\u9009\u503c all, primaries, new_primaries, none\n      enable: all\n      # \u914d\u7f6e\u5141\u8bb8\u4ec0\u4e48\u6837\u7684\u8d1f\u8f7d\u5747\u8861\n      # always \u5141\u8bb8\u6240\u6709\u7684\u8d1f\u8f7d\u5747\u8861\n      # indices_primaries_active \u53ea\u6709\u5f53\u6240\u6709\u4e3b\u5206\u7247\u90fd\u5b58\u5728\u65f6\n      # indices_all_active \u53ea\u6709\u5f53\u6240\u6709\u4e3b\u5206\u7247\u548c\u5206\u7247\u526f\u672c\u5728\u96c6\u7fa4\u4e2d\u90fd\u5b58\u5728\u65f6.\n      allow_rebalance: indices_all_active\n      # \u6574\u4e2a\u96c6\u7fa4\u4e2d\u5141\u8bb8\u540c\u65f6\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u7684\u6570\u91cf\n      cluster_concurrent_rebalance: 2\n    balance:\n      # \u5728\u4e00\u4e2a\u8282\u70b9\u4e0a\u5141\u8bb8\u7533\u8bf7\u5206\u7247\u7684\u6743\u91cd\u56e0\u5b50. \u589e\u52a0\u8be5\u503c,\u4f1a\u4f7f\u96c6\u7fa4\u4e2d\u8282\u70b9\u4e0a\u7684\u5206\u7247\u6570\u91cf\u8d8b\u4e8e\u76f8\u7b49.\n      shard: 0.45\n      # \u7d22\u5f15\u5206\u7247\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u7684\u6743\u91cd\u56e0\u5b50. \u589e\u52a0\u8be5\u503c,\u4f1a\u4f7f\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6bcf\u4e2a\u7d22\u5f15\u5206\u7247\u7684\u6570\u91cf\u8d8b\u4e8e\u76f8\u7b49.\n      index: 0.55\n      # \u5e94\u6267\u884c\u7684\u64cd\u4f5c\u6700\u5c0f\u4f18\u5316\u503c. \u589e\u52a0\u8be5\u503c, \u4f1a\u4f7f\u96c6\u7fa4\u8d8b\u5411\u4e8e\u4e0d\u5747\u8861\u5206\u7247.\n      threshold: 1.0\n    disk:\n      # \u9009\u62e9\u5206\u914d\u65f6\u662f\u5426\u8003\u8651\u78c1\u76d8\u60c5\u51b5\n      threshold_enabled: true\n      watermark:\n        # Controls the low watermark for disk usage.\n        # \u5f53\u78c1\u76d8\u4f7f\u7528\u91cf\u8fbe\u5230 85% \u65f6\u4fbf\u4e0d\u4f1a\u518d\u5728\u8be5\u8282\u70b9\u7533\u8bf7\u5230\u5206\u7247.\n        # \u4e5f\u53ef\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u91cf,\u4f8b\u5982 500mb, \u8868\u793a\u5f53\u78c1\u76d8\u5269\u4f59\u7a7a\u95f4\u5c0f\u4e8e\u8be5\u503c\u540e\u4fbf\u4e0d\u80fd\u518d\u8be5\u8282\u70b9\u7533\u8bf7\u5230\u5206\u7247.\n        low: 85%\n        # Controls the high watermark.\n        # \u5f53\u78c1\u76d8\u4f7f\u7528\u91cf\u8fbe\u5230 90% \u65f6,\u4fbf\u4f1a\u5f00\u59cb\u8bb2\u8be5\u8282\u70b9\u4e0a\u7684\u5206\u7247\u8fc1\u79fb\u5230\u5176\u4ed6\u8282\u70b9.\n        high: 90%\n      # \u5728\u8ba1\u7b97\u8282\u70b9\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u65f6\u5019\u5c06\u6b63\u5728\u8fc1\u79fb\u7684\u5206\u7247\u8003\u8651\u5728\u5185.\u56e0\u6b64\u5728\u4f30\u7b97\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u65f6\u5019\u53ef\u80fd\u4e0d\u51c6\u786e.\n      include_relocations: true\n    update:\n      # \u68c0\u67e5\u96c6\u7fa4\u4e2d\u6bcf\u4e2a\u8282\u70b9\u78c1\u76d8\u72b6\u6001\u7684\u95f4\u9694\n      interval: 30s\n    # \u5206\u7247\u611f\u77e5 https://www.elastic.co/guide/en/elasticsearch/reference/current/allocation-awareness.html\n    # \u5206\u7247\u8fc7\u6ee4 https://www.elastic.co/guide/en/elasticsearch/reference/current/allocation-filtering.html\n    awareness:\n      # \u8fd9\u91cc\u7684\u5c5e\u6027\u662f\u6307\u8282\u70b9\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\n      attributes: rack_id\n      force.zone.values: zone1,zone2\n# \u53ea\u6709\u5f53\u526f\u672c\u6570\u91cf\u6ee1\u8db3\u8be5\u914d\u7f6e\u65f6,\u4e3b\u5206\u7247\u624d\u4f1a\u5f00\u59cb\u6062\u590d,\u53ef\u9009\u503c\u4e3a\n#   quorum \u9ed8\u8ba4,quorum-1 \u6216 half, full, full -1, \u6216\u56fa\u5b9a\u6570\u5b57\nindex:\n  recovery:\n    initial_shards: quorum\n\n# ==================================================\n# \u7ebf\u7a0b\u6c60\n# ==================================================\n# \u6bcf\u4e2a\u8282\u70b9\u4e2d\u90fd\u6709\u591a\u4e2a\u7ebf\u7a0b\u6c60, \u5927\u591a\u7684\u7ebf\u7a0b\u6c60\u8fd8\u6709\u4e00\u4e2a\u5173\u8054\u7684\u8bf7\u6c42\u961f\u5217, \u4f7f\u5f97\u8bf7\u6c42\u53ef\u4ee5\u7b49\u5f85\u5904\u7406\u800c\u4e0d\u662f\u88ab\u629b\u5f03.\n# \u7ebf\u7a0b\u6570\u91cf\u53ef\u5728\u8fd0\u884c\u65f6\u4fee\u6539\n# \u53c2\u8003\n#   https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-threadpool.html\n\nthreadpool:\n    # \u5e38\u89c4\u64cd\u4f5c\u7ebf\u7a0b\u6c60, \u4f8b\u5982 \u540e\u53f0\u7684\u8282\u70b9\u53d1\u73b0, type: cached\n    generic:\n    # \u7528\u4e8e\u7d22\u5f15\u548c\u5220\u9664\u64cd\u4f5c\u7684\u7ebf\u7a0b\u6c60\n    index:\n      size: N\n      queue_size: 200\n    # \u7528\u641c\u7d22\u548c count \u64cd\u4f5c\u7684\u7ebf\u7a0b\u6c60.\n    search:\n      size: (N * 3) / 2 + 1\n      queue_size: 1000\n    # \u63a8\u8350\u64cd\u4f5c.\n    suggest:\n      size: N\n      queue_size: 1000\n    # \u83b7\u53d6\u64cd\u4f5c\n    get:\n      size: N\n      queue_size: 1000\n    # \u6279\u91cf\u64cd\u4f5c\n    bulk:\n      size: N\n      queue_size: 50\n    percolate:\n      size: N\n      queue_size: 1000\n    # \u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\n    snapshot:\n      keep_alive: 5m\n      size: min(5, N/2)\n    warmer:\n      keep_alive: 5m\n      size: min(5, N/2)\n    refresh:\n      keep_alive: 5m\n      size: min(10, N/2)\n    listener:\n      size: min(10, N/2)\n\n\n\n# ==================================================\n# \u81ea\u52a8\u53d1\u73b0\n# ==================================================\n# \u53c2\u8003\n#   http://elasticsearch.org/guide/en/elasticsearch/reference/current/modules-discovery-zen.html\ndiscovery:\n  zen:\n    # \u8fdb\u884c\u4e3b\u8282\u70b9\u9009\u4e3e\u65f6\u7684\u6700\u5c11\u53c2\u4e0e\u9009\u4e3e\u7684\u8282\u70b9\u6570\n    minimum_master_nodes: 1\n    ping:\n      # \u81ea\u52a8\u53d1\u73b0\u65f6\u7b49\u5f85\u8282\u70b9\u54cd\u5e94\u65f6\u95f4\n      timeout: 3s\n      multicast:\n        # \u662f\u5426\u4f7f\u7528\u5e7f\u64ad\u53d1\u73b0\n        enabled: true\n      unicast:\n        # \u5355\u64ad\u53d1\u73b0\u5176\u4ed6\u8282\u70b9\u7684\u5730\u5740\n        hosts: [\"host1\", \"host2:port\"]\n\n# ==================================================\n# \u6162\u65e5\u5fd7\n# ==================================================\n# \u5206\u7247\u7ea7\u522b\u7684\u67e5\u8be2\u548c\u83b7\u53d6\u9650\u6d41\u65e5\u5fd7\nindex:\n  search:\n    slowlog:\n      threshold:\n        query:\n          # \u4e3a\u65f6\u95f4\u8fbe\u5230 10s \u7684\u67e5\u8be2\u8bb0\u5f55 warn \u65e5\u5fd7\n          warn: 10s\n          info: 5s\n          debug: 2s\n          trace: 500ms\n\n        fetch:\n          warn: 1s\n          info: 800ms\n          debug: 500ms\n          trace: 200ms\n\n        index:\n          # \u4e3a\u65f6\u95f4\u8fbe\u5230 10s \u7684\u7d22\u5f15\u8bb0\u5f55 warn \u65e5\u5fd7\n          warn: 10s\n          info: 5s\n          debug: 2s\n          trace: 500ms\n\n# ==================================================\n# GC \u65e5\u5fd7\n# ==================================================\nmonitor:\n  jvm:\n    gc:\n      ParNew:\n        warn: 1000ms\n        info: 700ms\n        debug: 400ms\n\n      ConcurrentMarkSweep:\n        warn: 10s\n        info: 5s\n        debug: 2s\n\n# ==================================================\n# \u811a\u672c\u914d\u7f6e\n# ==================================================\n# \u53c2\u8003\n#   https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html\nscript.inline: sandbox\nscript.indexed: sandbox\nscript.file: true\nscript.update: false\nscript.mapping: false\nscript.auto_reload_enabled: true\n\nscript.engine.groovy.file.aggs: true\nscript.engine.groovy.file.mapping: true\nscript.engine.groovy.file.search: true\nscript.engine.groovy.file.update: true\nscript.engine.groovy.file.plugin: true\nscript.engine.groovy.indexed.aggs: true\nscript.engine.groovy.indexed.mapping: false\nscript.engine.groovy.indexed.search: true\nscript.engine.groovy.indexed.update: false\nscript.engine.groovy.indexed.plugin: false\nscript.engine.groovy.inline.aggs: true\nscript.engine.groovy.inline.mapping: false\nscript.engine.groovy.inline.search: false\nscript.engine.groovy.inline.update: false\nscript.engine.groovy.inline.plugin: false\n")),Object(s.b)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-configuration.html"},"\u914d\u7f6e\u8bf4\u660e")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://gist.github.com/zsprackett/8546403"},"\u4e00\u4efd ES \u914d\u7f6e"))))}u.isMDXComponent=!0},1152:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return t?a.a.createElement(m,c(c({ref:n},o),{},{components:t})):a.a.createElement(m,c({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<s;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);