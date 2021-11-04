"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73744],{3905:function(n,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var l=t.createContext({}),d=function(n){var e=t.useContext(l),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},c=function(n){var e=d(n.components);return t.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?t.createElement(f,s(s({ref:e},c),{},{components:a})):t.createElement(f,s({ref:e},c))}));function m(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},99788:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return u},default:function(){return m}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={slug:"ubuntu-home",title:"Ubuntu \u5bb6\u7528"},l=void 0,d={permalink:"/story/ubuntu-home",editUrl:"https://github.com/wenerme/wener/edit/master/story/2017/2017-02-09-ubuntu-home.md",source:"@site/story/2017/2017-02-09-ubuntu-home.md",title:"Ubuntu \u5bb6\u7528",description:"- Ubuntu \u684c\u9762\u7248",date:"2021-11-04T06:48:58.793Z",formattedDate:"November 4, 2021",tags:[],readingTime:7.955,truncated:!0,authors:[],prevItem:{title:"\u8fdb\u51fb\u7684\u7a0b\u5e8f\u733f",permalink:"/story/attack-on-programmer"},nextItem:{title:"Wener's APIs",permalink:"/story/wener-apis"}},c={authorsImageUrls:[]},u=[{value:"caddy.Dockerfile",id:"caddydockerfile",children:[]},{value:"grafana.ini",id:"grafanaini",children:[]},{value:"prom.yaml",id:"promyaml",children:[]},{value:"Caddyfile",id:"caddyfile",children:[]}],p={toc:u};function m(n){var e=n.components,a=(0,r.Z)(n,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu \u684c\u9762\u7248"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u81f3\u5c11\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"li"},"1024*768")," \u7684\u663e\u793a\u5668")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt upgrade\napt dist-upgrade\n\n# \u684c\u9762\u7248\u6ca1\u6709 sshd\napt install -y openssh-server\n\n############\n# brew\n############\nbrew install gcc redis tmux mosh\n\n############\n# \u5bb9\u5668\u670d\u52a1\u914d\u7f6e\n############\n# \u4f7f\u7528\u963f\u91cc\u63d0\u4f9b\u7684\u4ed3\u5e93\u8fdb\u884c\u5b89\u88c5\u4f1a\u975e\u5e38\u5feb\ncurl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -\n# \u5b89\u88c5\u5b8c\u6bd5\u540e\u4e3a\u5f53\u524d\u7528\u6237\u6dfb\u52a0\u6743\u9650,\u9700\u8981\u9000\u51fa\u91cd\u65b0\u767b\u5f55\u624d\u80fd\u751f\u6548\nsudo usermod -aG docker $USER\n\n# \u5b89\u88c5\u5b8c\u6210\u5efa\u8bae\u9009\u62e9\u4e00\u5bb6\u5bb9\u5668\u955c\u50cf,\u6bd4\u5982 https://cr.console.aliyun.com \u6216\u8005 daocloud\n\ndocker pull gogs/gogs\ndocker network create --subnet=172.18.1.0/24 home-net\n\n# \u51c6\u5907\u6570\u636e\u76ee\u5f55\nsudo mkdir /data\nsudo chown $USER:$USER /data\ncd /data\n\n# ==========\n# \u76d1\u63a7\u914d\u7f6e\n# ==========\ndocker pull grafana/grafana\ndocker pull prom/container-exporter\ndocker pull prom/prometheus\n\ndocker run --net home-net --ip 172.18.1.10 -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n    -v $PWD/grafana:/var/lib/grafana \\\n    -v $PWD/grafana.ini:/etc/grafana/grafana.ini \\\n    --name grafana grafana/grafana\n\nnohup node_exporter 2>node_exporter.log &\n\ndocker run -d --net home-net --ip 172.18.1.21 \\\n    -v /sys/fs/cgroup:/cgroup \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    --name container-exporter prom/container-exporter\n\ndocker run --net home-net --ip 172.18.1.20 -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n    -v $PWD/prom:/prometheus \\\n    -v $PWD/prom.yaml:/etc/prometheus/prometheus.yml \\\n    --name prom prom/prometheus\n\n# Web \u670d\u52a1\n# \u9009\u62e9\u9700\u8981\u7684 Caddy \u63d2\u4ef6\u7528\u4e8e\u6784\u5efa\u5bb9\u5668\nmkdir -p /tmp/caddy && cd /tmp/caddy\nwget 'https://caddyserver.com/download/build?os=linux&arch=amd64&features=cors%2Cexpires%2Cfilemanager%2Cgit%2Chugo%2Cipfilter%2Cjsonp%2Cjwt%2Clocale%2Cmailout%2Cminify%2Cmultipass%2Cprometheus%2Cratelimit%2Crealip%2Csearch%2Cupload' -O caddy.tar.gz\ntar -zxvf caddy.tar.gz\n\ndocker build -t home/caddy -f caddy.Dockerfile .\ncd -\n\ndocker run --net home-net --ip 172.18.1.30  -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n    -v $PWD/Caddyfile:/etc/Caddyfile \\\n    -v $PWD/caddy:/data \\\n    -v $HOME/.caddy:/root/.caddy \\\n    -p 80:80 -p 443:443 \\\n    --name web home/caddy\n\n\n\n")),(0,o.kt)("h3",{id:"caddydockerfile"},"caddy.Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM alpine\nMAINTAINER wener <wener@wener.me>\n\nCOPY caddy /app/caddy\n\nVOLUME     [ "/data" ]\nWORKDIR    /data\n\nEXPOSE 2015\nEXPOSE 2000\nENTRYPOINT ["/app/caddy"]\nCMD ["-conf","/etc/Caddyfile","-log","./internal/log"]\n')),(0,o.kt)("h3",{id:"grafanaini"},"grafana.ini"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'##################### Grafana Configuration Example #####################\n#\n# Everything has defaults so you only need to uncomment things you want to\n# change\n\n# possible values : production, development\n; app_mode = production\n\n# instance name, defaults to HOSTNAME environment variable value or hostname if HOSTNAME var is empty\n; instance_name = ${HOSTNAME}\n\n#################################### Paths ####################################\n[paths]\n# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\n#\n;data = /var/lib/grafana\n#\n# Directory where grafana can store logs\n#\n;logs = /var/log/grafana\n#\n# Directory where grafana will automatically scan and look for plugins\n#\n;plugins = /var/lib/grafana/plugins\n\n#\n#################################### Server ####################################\n[server]\n# Protocol (http or https)\n;protocol = http\n\n# The ip address to bind to, empty will bind to all interfaces\n;http_addr =\n\n# The http port  to use\n;http_port = 3000\n\n# The public facing domain name used to access grafana from a browser\ndomain = d.yikaiye.com\n\n# Redirect to correct domain if host header does not match domain\n# Prevents DNS rebinding attacks\n;enforce_domain = false\n\n# \u4f7f\u7528 /monitor \u4f5c\u4e3a\u8def\u5f84,\u4ee5\u4fbf\u4e8e\u53cd\u5411\u4ee3\u7406\n;root_url = %(protocol)s://%(domain)s:%(http_port)s/\nroot_url = /monitor\n\n# Log web requests\n;router_logging = false\n\n# the path relative working path\n;static_root_path = public\n\n# enable gzip\nenable_gzip = true\n\n# https certs & key file\n;cert_file =\n;cert_key =\n\n#################################### Database ####################################\n[database]\n# Either "mysql", "postgres" or "sqlite3", it\'s your choice\n;type = sqlite3\n;host = 127.0.0.1:3306\n;name = grafana\n;user = root\n;password =\n\n# For "postgres" only, either "disable", "require" or "verify-full"\n;ssl_mode = disable\n\n# For "sqlite3" only, path relative to data_path setting\n;path = grafana.db\n\n#################################### Session ####################################\n[session]\n# Either "memory", "file", "redis", "mysql", "postgres", default is "file"\n;provider = file\n\n# Provider config options\n# memory: not have any config yet\n# file: session dir path, is relative to grafana data_path\n# redis: config like redis server e.g. `addr=127.0.0.1:6379,pool_size=100,db=grafana`\n# mysql: go-sql-driver/mysql dsn config string, e.g. `user:password@tcp(127.0.0.1:3306)/database_name`\n# postgres: user=a password=b host=localhost port=5432 dbname=c sslmode=disable\n;provider_config = sessions\n\n# Session cookie name\n;cookie_name = grafana_sess\n\n# If you use session in https only, default is false\n;cookie_secure = false\n\n# Session life time, default is 86400\n;session_life_time = 86400\n\n#################################### Analytics ####################################\n[analytics]\n# Server reporting, sends usage counters to stats.grafana.org every 24 hours.\n# No ip addresses are being tracked, only simple counters to track\n# running instances, dashboard and error counts. It is very helpful to us.\n# Change this option to false to disable reporting.\n;reporting_enabled = true\n\n# Set to false to disable all checks to https://grafana.net\n# for new vesions (grafana itself and plugins), check is used\n# in some UI views to notify that grafana or plugin update exists\n# This option does not cause any auto updates, nor send any information\n# only a GET request to http://grafana.net to get latest versions\ncheck_for_updates = true\n\n# Google Analytics universal tracking code, only enabled if you specify an id here\n;google_analytics_ua_id =\n\n#################################### Security ####################################\n[security]\n# default admin user, created on startup\n;admin_user = admin\n\n# default admin password, can be changed before first start of grafana,  or in profile settings\n;admin_password = admin\n\n# used for signing\n;secret_key = SW2YcwTIb9zpOOhoPsMm\n\n# Auto-login remember days\n;login_remember_days = 7\n;cookie_username = grafana_user\n;cookie_remember_name = grafana_remember\n\n# disable gravatar profile images\n;disable_gravatar = false\n\n# data source proxy whitelist (ip_or_domain:port separated by spaces)\n;data_source_proxy_whitelist =\n\n[snapshots]\n# snapshot sharing options\nexternal_enabled = false\n;external_snapshot_url = https://snapshots-origin.raintank.io\n;external_snapshot_name = Publish to snapshot.raintank.io\n\n#################################### Users ####################################\n[users]\n# \u7981\u7528\u6ce8\u518c\u529f\u80fd\nallow_sign_up = false\n\n# \u4e0d\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u521b\u5efa\u7ec4\u7ec7\nallow_org_create = false\n\n# Set to true to automatically assign new users to the default organization (id 1)\nauto_assign_org = true\n\n# Default role new users will be automatically assigned (if disabled above is set to true)\nauto_assign_org_role = Viewer\n\n# Background text for the user field on the login page\nlogin_hint = \u7528\u6237\u540d\n\n# Default UI theme ("dark" or "light")\ndefault_theme = light\n\n#################################### Anonymous Auth ##########################\n[auth.anonymous]\n# enable anonymous access\nenabled = false\n\n# specify organization name that should be used for unauthenticated users\n;org_name = Main Org.\n\n# specify role for unauthenticated users\n;org_role = Viewer\n\n#################################### Auth Proxy ##########################\n[auth.proxy]\n;enabled = false\n;header_name = X-WEBAUTH-USER\n;header_property = username\n;auto_sign_up = true\n\n#################################### Basic Auth ##########################\n[auth.basic]\n;enabled = true\n\n#################################### SMTP / Emailing ##########################\n[smtp]\n;enabled = false\n;host = localhost:25\n;user =\n;password =\n;cert_file =\n;key_file =\n;skip_verify = false\n;from_address = admin@grafana.localhost\n\n[emails]\n;welcome_email_on_sign_up = false\n\n#################################### Logging ##########################\n[log]\n# Either "console", "file", "syslog". Default is console and  file\n# Use space to separate multiple modes, e.g. "console file"\n;mode = console, file\n\n# Either "trace", "debug", "info", "warn", "error", "critical", default is "info"\n;level = info\n\n# For "console" mode only\n[log.console]\n;level =\n\n# log line format, valid options are text, console and json\n;format = console\n\n# For "file" mode only\n[log.file]\n;level =\n\n# log line format, valid options are text, console and json\n;format = text\n\n# This enables automated log rotate(switch of following options), default is true\n;log_rotate = true\n\n# Max line number of single file, default is 1000000\n;max_lines = 1000000\n\n# Max size shift of single file, default is 28 means 1 << 28, 256MB\n;max_size_shift = 28\n\n# Segment log daily, default is true\n;daily_rotate = true\n\n# Expired days of log file(delete after max days), default is 7\n;max_days = 7\n\n[log.syslog]\n;level =\n\n# log line format, valid options are text, console and json\n;format = text\n\n# Syslog network type and address. This can be udp, tcp, or unix. If left blank, the default unix endpoints will be used.\n;network =\n;address =\n\n# Syslog facility. user, daemon and local0 through local7 are valid.\n;facility =\n\n# Syslog tag. By default, the process\' argv[0] is used.\n;tag =\n\n\n#################################### AMQP Event Publisher ##########################\n[event_publisher]\n;enabled = false\n;rabbitmq_url = amqp://localhost/\n;exchange = grafana_events\n\n;#################################### Dashboard JSON files ##########################\n[dashboards.json]\n;enabled = false\n;path = /var/lib/grafana/dashboards\n\n#################################### Internal Grafana Metrics ##########################\n# Metrics available at HTTP API Url /api/metrics\n[metrics]\n# Disable / Enable internal metrics\n;enabled           = true\n\n# Publish interval\n;interval_seconds  = 10\n\n# Send internal metrics to Graphite\n; [metrics.graphite]\n; address = localhost:2003\n; prefix = prod.grafana.%(instance_name)s.\n\n#################################### Internal Grafana Metrics ##########################\n# Url used to to import dashboards directly from Grafana.net\n[grafana_net]\nurl = https://grafana.net\n')),(0,o.kt)("h3",{id:"promyaml"},"prom.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 5s\n  # Attach these labels to any time series or alerts when communicating with\n  # external systems (federation, remote storage, Alertmanager).\n  external_labels:\n    monitor: 'dev-monitor'\n\nrule_files:\n  - mysql.rules\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # Override the global default and scrape targets from this job every 5 seconds.\n    scrape_interval: 5s\n\n    static_configs:\n      - targets: ['localhost:9090']\n\n  - job_name: container_exporter\n    static_configs:\n      - targets: ['172.18.1.21:9104']\n\n  - job_name: node_exporter\n    static_configs:\n      - targets: ['172.18.1.1:9100']\n\n  - job_name: caddy\n    static_configs:\n      - targets: ['172.18.1.30:2000']\n")),(0,o.kt)("h3",{id:"caddyfile"},"Caddyfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":80 {\n  log internal/access.log {\n      rotate {\n          size 50\n          age  14\n          keep 10\n      }\n  }\n  prometheus :2000\n  root .\n  internal ./internal\n  filemanager /file {\n    show file/\n  }\n  proxy /monitor 172.18.1.10:3000 {\n    without /monitor\n    transparent\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n$ sudo vim /etc/udev/rules.d/75-persistent-net-generator.rules\n\nSUBSYSTEM=="net", ACTION=="add", ATTR{address}=="f0:42:1c:85:07:41", NAME="eth0"\nsudo vim /etc/network/interfaces\n\n')))}m.isMDXComponent=!0}}]);