"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14975],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,s=function(n,e){if(null==n)return{};var t,a,s={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var l=a.createContext({}),p=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=p(n.components);return a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,s=n.mdxType,r=n.originalType,l=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),d=p(t),u=s,w=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(w,i(i({ref:e},m),{},{components:t})):a.createElement(w,i({ref:e},m))}));function u(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62561:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(22122),s=t(19756),r=(t(67294),t(3905)),i=["components"],o={title:"Tmux"},l=void 0,p={unversionedId:"ops/admin/tmux",id:"ops/admin/tmux",isDocsHomePage:!1,title:"Tmux",description:"- tmux.1",source:"@site/notes/ops/admin/tmux.md",sourceDirName:"ops/admin",slug:"/ops/admin/tmux",permalink:"/notes/ops/admin/tmux",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/tmux.md",version:"current",frontMatter:{title:"Tmux"},sidebar:"docs",previous:{title:"SSH",permalink:"/notes/ops/admin/ssh"},next:{title:"VirtualBox",permalink:"/notes/ops/admin/vbox"}},m=[{value:"\u7a97\u53e3\u7ba1\u7406",id:"\u7a97\u53e3\u7ba1\u7406",children:[{value:"Commands",id:"commands",children:[]}]},{value:"~/.tmux.conf",id:"tmuxconf",children:[]}],c={toc:m};function d(n){var e=n.components,t=(0,s.Z)(n,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://man.openbsd.org/OpenBSD-current/man1/tmux.1"},"tmux.1")),(0,r.kt)("li",{parentName:"ul"},"Cheat sheet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/andreyvit/2921703"},"https://gist.github.com/andreyvit/2921703")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/MohamedAlaa/2961058"},"https://gist.github.com/MohamedAlaa/2961058")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"iTerm2 ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gnachman/iterm2/-/wikis/tmux-Integration-Best-Practices"},"tmux Integration Best Practices"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u6216 attach \u5230\u4f1a\u8bdd\ntmuxrc new -A -s main\n\n# \u663e\u793a\u6307\u5b9a\u670d\u52a1\u5f00\u542f\u7684\u4f1a\u8bdd\ntmux -S /tmp/extratmuxserver/tmuxserver ls\n# \u521b\u5efa\u65b0\u4f1a\u8bdd\ntmux new -s myname\n# Attach \u5230\u4f1a\u8bdd\ntmux a -t myname\n# \u5173\u95ed\u4f1a\u8bdd\ntmux kill-session -t myname\n\n# \u547d\u4ee4\u884c\u63a7\u5236\n# ==========\n# Zoom In\ntmux list-panes -F '#F' | grep -q Z || tmux resize-pane -Z\n# Zoom Out\ntmux list-panes -F '#F' | grep -q Z && tmux resize-pane -Z\n")),(0,r.kt)("h2",{id:"\u7a97\u53e3\u7ba1\u7406"},"\u7a97\u53e3\u7ba1\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd - session",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7a97\u53e3 - window",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9762\u677f - pane")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9690\u85cf\u9762\u677f\n# \u5c06\u5f53\u524d\u9762\u677f\u653e\u5230\u540e\u53f0\uff08-d\uff09\u7a97\u53e3\uff0c\u663e\u793a\u76f8\u5173\u4fe1\u606f\uff08-P\uff09\n# \u663e\u793a\u4f4d\u7f6e \u4f8b\u5982 1:2.0 \u8868\u793a \u4f1a\u8bdd:\u7a97\u53e3.\u9762\u677f\nbreak-pane -dP\n\n# \u6062\u590d\u9690\u85cf\u9762\u677f\n# -v \u6c34\u5e73\u5206\u5272 -s \u6765\u6e90\u9762\u677f\njoin-pane -vs 1:2.0\n")),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u662f\u5176\u4ed6\u94fe\u63a5\u5168\u90fd detach, \u4f7f\u5f97\u5f53\u524d\u7a97\u53e3\u80fd\u591f\u6700\u5927\u5316\n# detach -> detach-client\ndetach -a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u79fb\u52a8\u9762\u677f\n# ==========\n# \u663e\u793a\nbind-key j command-prompt -p "join pane from:"  "join-pane -s \'%%\'"\n# \u9690\u85cf\nbind-key s command-prompt -p "send pane to:"  "join-pane -t \'%%\'"\n\nbind-key   @ choose-window \'join-pane -h -s "%%"\'\nbind-key C-@ choose-window \'join-pane    -s "%%"\'\n\n# \u6dfb\u52a0\u5230\u6700\u8fd1\u8bbf\u95ee\u7a97\u53e3\nbind-key @ join-pane -h -s !\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"attach-session (attach) [-dEr] [-c working-directory] [-t target-session]\nbind-key (bind) [-cnr] [-T key-table] key command [arguments]\nbreak-pane (breakp) [-dP] [-F format] [-n window-name] [-s src-pane] [-t dst-window]\ncapture-pane (capturep) [-aCeJpPq] [-b buffer-name] [-E end-line] [-S start-line][-t target-pane]\nchoose-buffer [-N] [-F format] [-f filter] [-O sort-order] [-t target-pane]\nchoose-client [-N] [-F format] [-f filter] [-O sort-order] [-t target-pane]\nchoose-tree [-GNsw] [-F format] [-f filter] [-O sort-order] [-t target-pane]\nclear-history (clearhist) [-t target-pane]\nclock-mode [-t target-pane]\ncommand-prompt [-1Ni] [-I inputs] [-p prompts] [-t target-client] [template]\nconfirm-before (confirm) [-p prompt] [-t target-client] command\ncopy-mode [-Mu] [-t target-pane]\ndelete-buffer (deleteb) [-b buffer-name]\ndetach-client (detach) [-aP] [-E shell-command] [-s target-session] [-t target-client]\ndisplay-message (display) [-p] [-c target-client] [-F format] [-t target-pane] [message]\ndisplay-panes (displayp) [-d duration] [-t target-client]\nfind-window (findw) [-CNT] [-t target-pane] match-string\nhas-session (has) [-t target-session]\nif-shell (if) [-bF] [-t target-pane] shell-command command [command]\njoin-pane (joinp) [-bdhv] [-p percentage|-l size] [-s src-pane] [-t dst-pane]\nkill-pane (killp) [-a] [-t target-pane]\nkill-server\nkill-session [-aC] [-t target-session]\nkill-window (killw) [-a] [-t target-window]\nlast-pane (lastp) [-de] [-t target-window]\nlast-window (last) [-t target-session]\nlink-window (linkw) [-dk] [-s src-window] [-t dst-window]\nlist-buffers (lsb) [-F format]\nlist-clients (lsc) [-F format] [-t target-session]\nlist-commands (lscm) [-F format]\nlist-keys (lsk) [-T key-table]\nlist-panes (lsp) [-as] [-F format] [-t target-window]\nlist-sessions (ls) [-F format]\nlist-windows (lsw) [-a] [-F format] [-t target-session]\nload-buffer (loadb) [-b buffer-name] path\nlock-client (lockc) [-t target-client]\nlock-server (lock)\nlock-session (locks) [-t target-session]\nmove-pane (movep) [-bdhv] [-p percentage|-l size] [-s src-pane] [-t dst-pane]\nmove-window (movew) [-dkr] [-s src-window] [-t dst-window]\nnew-session (new) [-AdDEP] [-c start-directory] [-F format] [-n window-name] [-s session-name] [-t target-session] [-x width] [-y height] [command]\nnew-window (neww) [-adkP] [-c start-directory] [-F format] [-n window-name] [-t target-window] [command]\nnext-layout (nextl) [-t target-window]\nnext-window (next) [-a] [-t target-session]\npaste-buffer (pasteb) [-dpr] [-s separator] [-b buffer-name] [-t target-pane]\npipe-pane (pipep) [-IOo] [-t target-pane] [command]\nprevious-layout (prevl) [-t target-window]\nprevious-window (prev) [-a] [-t target-session]\nrefresh-client (refresh) [-S] [-C size] [-t target-client]\nrename-session (rename) [-t target-session] new-name\nrename-window (renamew) [-t target-window] new-name\nresize-pane (resizep) [-DLMRUZ] [-x width] [-y height] [-t target-pane] [adjustment]\nrespawn-pane (respawnp) [-c start-directory] [-k] [-t target-pane] [command]\nrespawn-window (respawnw) [-c start-directory] [-k] [-t target-window] [command]\nrotate-window (rotatew) [-DU] [-t target-window]\nrun-shell (run) [-b] [-t target-pane] shell-command\nsave-buffer (saveb) [-a] [-b buffer-name] path\nselect-layout (selectl) [-Enop] [-t target-pane] [layout-name]\nselect-pane (selectp) [-DdegLlMmRU] [-P style] [-T title] [-t target-pane]\nselect-window (selectw) [-lnpT] [-t target-window]\nsend-keys (send) [-lXRM] [-N repeat-count] [-t target-pane] key ...\nsend-prefix [-2] [-t target-pane]\nset-buffer (setb) [-a] [-b buffer-name] [-n new-buffer-name] data\nset-environment (setenv) [-gru] [-t target-session] name [value]\nset-hook [-gu] [-t target-session] hook-name [command]\nset-option (set) [-aFgosquw] [-t target-window] option [value]\nset-window-option (setw) [-aFgoqu] [-t target-window] option [value]\nshow-buffer (showb) [-b buffer-name]\nshow-environment (showenv) [-gs] [-t target-session] [name]\nshow-hooks [-g] [-t target-session]\nshow-messages (showmsgs) [-JT] [-t target-client]\nshow-options (show) [-gqsvw] [-t target-session|target-window] [option]\nshow-window-options (showw) [-gv] [-t target-window] [option]\nsource-file (source) [-q] path\nsplit-window (splitw) [-bdfhvP] [-c start-directory] [-F format] [-p percentage|-l size] [-t target-pane] [command]\nstart-server (start)\nsuspend-client (suspendc) [-t target-client]\nswap-pane (swapp) [-dDU] [-s src-pane] [-t dst-pane]\nswap-window (swapw) [-d] [-s src-window] [-t dst-window]\nswitch-client (switchc) [-Elnpr] [-c target-client] [-t target-session] [-T key-table]\nunbind-key (unbind) [-an] [-T key-table] key\nunlink-window (unlinkw) [-k] [-t target-window]\nwait-for (wait) [-L|-S|-U] channel\n")),(0,r.kt)("h2",{id:"tmuxconf"},"~/.tmux.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'new-session\n# \u542f\u7528\u9f20\u6807\nset -g mouse on\n# \u5141\u8bb8\u9f20\u6807\u9009\u62e9\u9762\u677f\nset -g mouse-select-pane on\n# \u5141\u8bb8\u9f20\u6807\u8c03\u6574\u9762\u677f\u5927\u5c0f\nset -g mouse-resize-pane on\n# \u5141\u8bb8\u6eda\u52a8\u7684\u5386\u53f2\nset -g history-limit 30000\n\n##########################################\n# \u72b6\u6001\u680f\n# UTF8\nset -g status-utf8 on\n# vi Style Editing\n# set -g status-keys vi\nset -g status-interval 1\nset -g status-attr bright\nset -g status-fg white\nset -g status-bg black\nset -g status-left-length 20\nset -g status-left \'#[fg=green][#[fg=red]#S#[fg=green]]#[default]\'\nset -g status-justify centre\nset -g status-right \'#[fg=green][ %m/%d %H:%M:%S ]#[default]\'\nsetw -g window-status-current-format \'#[fg=yellow](#I.#P#F#W)#[default]\'\nsetw -g window-status-format \'#I#F#W\'\n\n\n##########################################\n# \u6a21\u62df\u7ec8\u7aef\u6807\u9898\nset -g set-titles on\nset -g set-titles-string "#(tmux ls | awk -F: \'{print $1}\' | xargs | sed \'s/\\ / | /g\')"\n\n\n##########################################\n# \u6309\u952e\u7ed1\u5b9a\n# C-a = prefix\n# \u9ed8\u8ba4 Ctrl+b \u4e3a\u524d\u7f00 - \u53d6\u6d88\u9ed8\u8ba4\nunbind C-b\n# \u4f7f\u7528 Ctrl+a \u4e3a\u524d\u7f00\nset -g prefix C-a\n\n# \u4e0a\u4e00\u4e2a\u7a97\u53e3\nunbind l\nbind C-a last-window\n\n# \u4e0b\u4e00\u4e2a\u7a97\u53e3\nbind C-c new-window\n\n# \u590d\u5236\u6a21\u5f0f\nunbind [\nbind Escape copy-mode\n\n# \u5782\u76f4\u5206\u5272\nunbind %\nbind | split-window -h\n\n# \u6c34\u5e73\u5206\u5272\nunbind \'"\'\nbind - split-window -v\n\n# \u9009\u62e9\u7a97\u53e3\nbind \'"\' choose-window\n\n# h = display cheatsheet\n# bind h run "cat ~/.tmux_cheatsheet"\n\n# r = tmux renumbering script\n# unbind r\n# bind r run "~/bin/tmux_renum"\n\n# r = respawn after exit or disconnect (zombie)\nbind C-r respawn-window\n\n# k = kill after exit or disconnect (zombie)\nbind C-k kill-window\n\n\n##########################################\n# \u57fa\u7840\u914d\u7f6e\n# UTF8\nsetw -g utf8 on\n\n# Allow xterm titles in terminal window, terminal scrolling with scrollbar, and setting overrides of C-Up, C-Down, C-Left, C-Right\n#set -g terminal-overrides "xterm*:XT:smcup@:rmcup@:kUP5=\\eOA:kDN5=\\eOB:kLFT5=\\eOD:kRIT5=\\eOC"\n\n\n# Set ability to capture on start and restore on exit window data when running an application\nsetw -g alternate-screen on\n\n# Lower escape timing from 500ms to 50ms for quicker response to scroll-buffer access.\nset -s escape-time 50\n\nset -g status-interval 1\nset -g status-justify centre # center align window list\nset -g status-left-length 20\nset -g status-right-length 140\nset -g status-left \'#[fg=green]#H #[fg=black]\u2022 #[fg=green,bright]#(uname -r | cut -c 1-6)#[default]\'\nset -g status-right \'#[fg=green,bg=default,bright]#(tmux-mem-cpu-load 1) #[fg=red,dim,bg=default]#(uptime | cut -f 4-5 -d " " | cut -f 1 -d ",") #[fg=white,bg=default]%a%l:%M:%S %p#[default] #[fg=blue]%Y-%m-%d\'\n\n# C-b is not acceptable -- Vim uses it\nset-option -g prefix C-a\nbind-key C-a last-window\n\n# Start numbering at 1\nset -g base-index 1\n\n# Allows for faster key repetition\nset -s escape-time 0\n\n# Rather than constraining window size to the maximum size of any client\n# connected to the *session*, constrain window size to the maximum size of any\n# client connected to *that window*. Much more reasonable.\n# setw -g aggressive-resize on\n\n# Allows us to use C-a a <command> to send commands to a TMUX session inside\n# another TMUX session\nbind-key a send-prefix\n\n# Activity monitoring\nsetw -g monitor-activity on\nset -g visual-activity on\n\n# Vi copypaste mode\n# set-window-option -g mode-keys vi\n# bind-key -t vi-copy \'v\' begin-selection\n# bind-key -t vi-copy \'y\' copy-selection\n\n# hjkl \u9762\u677f\u9009\u62e9\nbind h select-pane -L\nbind j select-pane -D\nbind k select-pane -U\nbind l select-pane -R\n\nbind-key C command-prompt -p "Name of new window: " "new-window -n \'%%\'"\n\n# \u914d\u7f6e\u91cd\u8f7d\nbind r source-file ~/.tmux.conf \\; display-message "Config reloaded..."\n\n# \u81ea\u52a8\u91cd\u547d\u540d\u7a97\u53e3\nset-window-option -g automatic-rename\nset -g allow-rename on\n\n# https://github.com/edkolev/dots/blob/master/tmux.conf\n# Updates for tmux 1.9\'s current pane splitting paths.\nif-shell "[[ `tmux -V` == *1.9* ]]" \'unbind c; bind c new-window -c "#{pane_current_path}"\'\nif-shell "[[ `tmux -V` == *1.9* ]]" \'unbind s; bind s split-window -v -c "#{pane_current_path}"\'\nif-shell "[[ `tmux -V` == *1.9* ]]" "unbind \'\\"\'; bind \'\\"\' split-window -v -c \'#{pane_current_path}\'"\nif-shell "[[ `tmux -V` == *1.9* ]]" \'unbind v; bind v split-window -h -c "#{pane_current_path}"\'\nif-shell "[[ `tmux -V` == *1.9* ]]" \'unbind %; bind % split-window -h -c "#{pane_current_path}"\'\n\n# Use xterm flavor\n# set -g default-terminal "xterm-256color"\n# set -g xterm-keys o\nsetw -g xterm-keys on\n\n# \u540c\u6b65\u9762\u677f\u64cd\u4f5c\nbind F2 setw synchronize-panes on\nbind F3 setw synchronize-panes off\n\nset -g default-terminal "xterm"\n')))}d.isMDXComponent=!0}}]);