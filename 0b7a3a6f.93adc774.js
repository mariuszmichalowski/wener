(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,u=c["".concat(i,".").concat(p)]||c[p]||d[p]||o;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),o=(n(0),n(1172)),i={id:"uboot",title:"U-Boot"},l={unversionedId:"os/linux/boot/uboot",id:"os/linux/boot/uboot",isDocsHomePage:!1,title:"U-Boot",description:"Ttips",source:"@site/notes/os/linux/boot/uboot.md",slug:"/os/linux/boot/uboot",permalink:"/notes/os/linux/boot/uboot",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/uboot.md",version:"current",sidebar:"docs",previous:{title:"Syslinux",permalink:"/notes/os/linux/boot/syslinux"},next:{title:"UEFI",permalink:"/notes/os/linux/boot/uefi"}},b=[{value:"Ttips",id:"ttips",children:[]},{value:"image",id:"image",children:[]},{value:"boot",id:"boot",children:[]},{value:"\u542f\u52a8\u65e5\u5fd7",id:"\u542f\u52a8\u65e5\u5fd7",children:[]},{value:"command",id:"command",children:[]},{value:"Error loading uncompressed kernel without PVH ELF Note",id:"error-loading-uncompressed-kernel-without-pvh-elf-note",children:[]}],s={toc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ttips"},"Ttips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://u-boot.readthedocs.io/en/stable/index.html"},"Das U-Boot -- the Universal Boot Loader"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.denx.de/wiki/DULG/Manual"},"Manual")),Object(o.b)("li",{parentName:"ul"},"wikipedia ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Das_U-Boot"},"Das U-Boot")))),Object(o.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5d4c\u5165\u5f0f\u7cfb\u7edf\u7684\u5f00\u673a\u52a0\u8f7d\u7a0b\u5e8f,\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u7ed3\u6784."),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"68k, ARM, Blackfin, MicroBlaze, MIPS, Nios, SuperH, PPC, RISC-V, x86"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"u-boot ",Object(o.b)("a",{parentName:"li",href:"https://u-boot.readthedocs.io/en/stable/board/emulation/qemu-x86.html"},"qemu-x86")),Object(o.b)("li",{parentName:"ul"},"\u5305\u5185\u5bb9 ",Object(o.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=uboot-tools&arch=x86_64&repo=main"},"uboot-tools")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=u-boot-all&branch=edge"},"u-boot-all"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6240\u6709\u5f00\u53d1\u677f\u7684 uboot"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://elinux.org/RPi_U-Boot"},"RPi U-Boot")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cnblogs.com/pengdonglin137/p/12194548.html"},"uboot qemu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pandysong.github.io/blog/post/run_u-boot_in_qemu/"},"Run u-boot in qemu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://sourceforge.net/projects/powerast/files/Firmware/"},"https://sourceforge.net/projects/powerast/files/Firmware/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://variwiki.com/index.php?title=U-Boot_features"},"https://variwiki.com/index.php?title=U-Boot_features")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://linux-sunxi.org/U-Boot"},"https://linux-sunxi.org/U-Boot")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/DIY_Fully_working_Alpine_Linux_for_Allwinner_and_Other_ARM_SOCs"},"https://wiki.alpinelinux.org/wiki/DIY_Fully_working_Alpine_Linux_for_Allwinner_and_Other_ARM_SOCs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://git.alpinelinux.org/aports/tree/scripts/mkimg.arm.sh"},"mkimg.arm.sh")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?file=&path=&name=raspberrypi-bootloader&branch=edge"},"raspberrypi-bootloader"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\n# \u652f\u6301\u914d\u7f6e https://github.com/u-boot/u-boot/tree/master/configs\n# \u4f9d\u8d56 https://git.alpinelinux.org/aports/tree/main/uboot-tools/APKBUILD\napk add swig python3-dev bison flex openssl-dev linux-headers\nmake qemu-x86_64_defconfig\n# make cscope\nmake all -j $(nproc)\n# test\nqemu-system-x86_64 -nographic -no-reboot -bios u-boot.rom\n\n# vexpress_ca9x4_defconfig\n# menuconfig\nmake qemu_arm64_defconfig\nmake all -j $(nproc)\n\n# export CROSS_COMPILE=arm-linux-gnueabi-\n# export CROSS_COMPILE=aarch64-linux-gnu-\n# make ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- vexpress_ca9x4_defconfig\nmake ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- menuconfig\nmake ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- -j8\n\n# example - /usr/share/doc/uboot-tools/examples/fw_env.config\napk add uboot-tools uboot-tools-examples\n\ncat <<CONF > boot.scr\nusb start\nsetenv bootargs earlyprintk console=tty0 console=ttyAMA0\nCONF\nmkimage -A arm -O linux -T script -C none -n boot.scr -d boot.scr boot.scr.uimg\n\n#\n# mkenvimage -s 1024 /usr/share/doc/uboot-tools/examples/fw_env.config\nfw_printenv -c /usr/share/doc/uboot-tools/examples/fw_env.config\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5f00\u53d1\u677f\u542f\u52a8\u9700\u8981\u6709\u4e32\u53e3\u6765\u8fdb\u884c\u8c03\u8bd5"),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e32\u53e3\u914d\u7f6e 115200/8N1 (115200 bps, 8 Bit per character, no parity, 1 stop bit, no handshake)"),Object(o.b)("li",{parentName:"ul"},"Linux \u4e0b\u63a8\u8350\u4f7f\u7528 kermit \u6216 cu\uff0c\u4e0d\u8981\u4f7f\u7528 minicom\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 screen \u548c picocom\uff0c\u5207\u8bb0\u5173\u95ed\u786c\u4ef6\u548c\u8f6f\u4ef6 flow control")),Object(o.b)("h2",{id:"image"},"image"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u201craw\u201d ELF image (vmlinux)"),Object(o.b)("li",{parentName:"ul"},"uImage format, which contains the compressed vmlinux plus a few extra bytes of metadata that describe the kernel load address."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.denx.de/wiki/view/DULG/HowCanICreateAnUImageFromAELFFile"},"How can I create an uImage from a ELF file"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"arch"),Object(o.b)("th",{parentName:"tr",align:null},"name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"alpha"),Object(o.b)("td",{parentName:"tr",align:null},"Alpha")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"arc"),Object(o.b)("td",{parentName:"tr",align:null},"ARC")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"arm"),Object(o.b)("td",{parentName:"tr",align:null},"ARM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"arm64"),Object(o.b)("td",{parentName:"tr",align:null},"AArch64")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"avr32"),Object(o.b)("td",{parentName:"tr",align:null},"AVR32")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"blackfin"),Object(o.b)("td",{parentName:"tr",align:null},"Blackfin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ia64"),Object(o.b)("td",{parentName:"tr",align:null},"IA64")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"invalid"),Object(o.b)("td",{parentName:"tr",align:null},"Invalid ARCH")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"m68k"),Object(o.b)("td",{parentName:"tr",align:null},"M68K")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"microblaze"),Object(o.b)("td",{parentName:"tr",align:null},"MicroBlaze")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"mips"),Object(o.b)("td",{parentName:"tr",align:null},"MIPS")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"mips64"),Object(o.b)("td",{parentName:"tr",align:null},"MIPS 64 Bit")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"nds32"),Object(o.b)("td",{parentName:"tr",align:null},"NDS32")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"nios2"),Object(o.b)("td",{parentName:"tr",align:null},"NIOS II")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"or1k"),Object(o.b)("td",{parentName:"tr",align:null},"OpenRISC 1000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"powerpc"),Object(o.b)("td",{parentName:"tr",align:null},"PowerPC")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"riscv"),Object(o.b)("td",{parentName:"tr",align:null},"RISC-V")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"s390"),Object(o.b)("td",{parentName:"tr",align:null},"IBM S390")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sandbox"),Object(o.b)("td",{parentName:"tr",align:null},"Sandbox")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sh"),Object(o.b)("td",{parentName:"tr",align:null},"SuperH")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sparc"),Object(o.b)("td",{parentName:"tr",align:null},"SPARC")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sparc64"),Object(o.b)("td",{parentName:"tr",align:null},"SPARC 64 Bit")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"x86"),Object(o.b)("td",{parentName:"tr",align:null},"Intel x86")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"x86_64"),Object(o.b)("td",{parentName:"tr",align:null},"AMD x86_64")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xtensa"),Object(o.b)("td",{parentName:"tr",align:null},"Xtensa")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkimage -A arm -O linux -T kernel -C gzip -d vmlinux uImage\nmkimage -A arm64 -O linux -T ramdisk -C gzip -d init.cpio.gz initramfs.uImage\n# https://www.denx.de/wiki/view/DULG/HowCanILoadAndUncompressACompressedImage\n# bootm\n# -T standalone\n")),Object(o.b)("h2",{id:"boot"},"boot"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"boot.scr.uimg"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://mediawiki.compulab.com/w/index.php?title=U-Boot:_Quick_reference"},"https://mediawiki.compulab.com/w/index.php?title=U-Boot:_Quick_reference")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.digi.com/resources/documentation/digidocs/PDFs/90000852.pdf"},"https://www.digi.com/resources/documentation/digidocs/PDFs/90000852.pdf"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u7248\u672c\nversion\n# \u4e3b\u677f\u4fe1\u606f\nbdinfo\n# \u4e32\u53e3\u4fe1\u606f\nconinfo\n# cpu \u4fe1\u606f\ncpu info\ncpu detail\n# QEMU \u56fa\u4ef6\u5217\u8868\nqfw list\n\nvirtio scan\nvirtio info\n\n# \u5b50\u7cfb\u7edf\nide\nusb\nvirtio\nnvme\nmmc\n\n#\ndm tree\n\next4ls ide 0 /\next4ls ide 0:2 /\n\next4load ide 0 ${kernel_addr_r} vmlinuz-lts\next4load ide 0 ${ramdisk_addr_r} initramfs-lts\nzboot ${kernel_addr_r}\n\n# sda\nsetenv bootargs root=/dev/sda1 ro\nload ide 0 ${kernel_addr_r} /vmlinuz-lts\nload ide 0 ${ramdisk_addr_r} /initramfs-lts\nzboot ${kernel_addr_r} - ${ramdisk_addr_r} ${filesize}\n\n# \u6301\u4e45\nsetenv bootargs root=UUID=b2aaf743-0418-4d90-94cc-3e6108d7d968 ro\nsetenv boot zboot 03000000 0 04000000 \\${filesize}\nsetenv bootcmd \"ext2load scsi 0:2 03000000 /boot/vmlinuz-3.13.0-58-generic; ext2load scsi 0:2 04000000 /boot/initrd.img-3.13.0-58-generic; run boot\"\nsaveenv\n\n# vda\nsetenv bootargs root=/dev/vda1 ro\nload virtio 0 03000000 /vmlinuz-lts\nload virtio 0 04000000 /initramfs-lts\nzboot 03000000 0 04000000 ${filesize}\n\nqemu-system-x86_64 -m 1024 -smp 2 -nographic -bios artifacts/uboot/qemu-x86_64/u-boot.rom \\\n -kernel virt/vmlinuz-virt -append 'root=/dev/ram console=ttyS0' \\\n -initrd virt/initramfs-virt\nqfw load\nzboot 01000000 - 04000000 5fe85e\n\npart list mmc 0\nls mmc 0:1\n\nload mmc 0:1 0x60008000 zImage\next4load mmc 0:1 0x60008000 zImage \n\nload mmc 0:1 0x61000000 vexpress-v2p-ca9.dtb\next4load mmc 0:1 0x61000000 vexpress-v2p-ca9.dtb\n\nsetenv bootargs 'root=/dev/mmcblk0p2 rw rootfstype=ext4 rootwait earlycon console=tty0 console=ttyAMA0 init=/linuxrc ignore_loglevel'\nbootz 0x60008000 - 0x61000000\n\n\n\nsetenv ipaddr 10.8.8.100; setenv netmask 255.255.255.0; setenv serverip 10.8.8.3;\nsetenv bootargs 'root=/dev/nfs rw nfsroot=10.8.8.3:/home/macrofun/NFS_HOME init=/linuxrc ip=10.8.8.100 console=ttyAMA0';\nsaveenv\n\ntftp 0x60003000 uImage;\nsetenv bootargs root=/dev/nfs rw nfsroot=10.8.8.3:/home/macrofun/NFS_HOME,proto=tcp,nfsvers=4,nolock init=/linuxrc ip=10.8.8.100 console=ttyAMA0 console=tty0\n# qemu-system-arm -M vexpress-a9 -m 512 -serial stdio  -net nic -net tap,ifname=tap0,script=no -kernel u-boot\n# qemu-system-aarch64 -nographic -curses -machine virt -cpu cortex-a57 -bios u-boot.bin\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"if load ${devtype} ${devnum}:${bootpart} ${kernel_addr_r} /boot/Image; then\n  echo fdt: ${fdtfile}\n  if load ${devtype} ${devnum}:${bootpart} ${fdt_addr_r} /boot/dtbs/${fdtfile}; then\n    if load ${devtype} ${devnum}:${bootpart} ${ramdisk_addr_r} /boot/initramfs-linux.img; then\n      booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r};\n    else\n      booti ${kernel_addr_r} - ${fdt_addr_r};\n    fi;\n  fi;\nfi\n")),Object(o.b)("h2",{id:"\u542f\u52a8\u65e5\u5fd7"},"\u542f\u52a8\u65e5\u5fd7"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Valid Boot Flag\nSetup Size = 0x00004400\nMagic signature found\nUsing boot protocol version 2.0c\nLinux kernel version 3.13.0-58-generic (buildd@allspice) #97-Ubuntu SMP Wed Jul 8 02:56:15 UTC 2015\nBuilding boot_params at 0x00090000\nLoading bzImage at address 100000 (5805728 bytes)\nMagic signature found\nInitial RAM disk at linear address 0x04000000, size 19215259 bytes\nKernel command line: "root=/dev/disk/by-partuuid/965c59ee-1822-4326-90d2-b02446050059 ro"\n\nStarting kernel ...\n')),Object(o.b)("h2",{id:"command"},"command"),Object(o.b)("p",null,"? - alias for 'help'\nbase - print or set address offset\nbdinfo - print Board Info structure\nblkcache - block cache diagnostics and control\nboot - boot default, i.e., run 'bootcmd'\nbootd - boot default, i.e., run 'bootcmd'\nbootefi - Boots an EFI payload from memory\nbootelf - Boot from an ELF image in memory\nbootm - boot application image from memory\nbootp - boot image via network using BOOTP/TFTP protocol\nbootstage - Boot stage command\nbootvx - Boot vxWorks from an ELF image\ncmp - memory compare\nconinfo - print console devices and information\ncp - memory copy\ncpu - display information about CPUs\ncrc32 - checksum calculation\ndate - get/set/reset date & time\ndhcp - boot image via network using DHCP/TFTP protocol\ndiskboot - boot from IDE device\ndm - Driver model low level access\necho - echo args to console\neditenv - edit environment variable\nenv - environment handling commands\nexit - exit script\next2load - load binary file from a Ext2 filesystem\next2ls - list files in a directory (default /)\next4load - load binary file from a Ext4 filesystem\next4ls - list files in a directory (default /)\next4size - determine a file's size\next4write - create a file in the root directory\nfalse - do nothing, unsuccessfully\nfatinfo - print information about filesystem\nfatload - load binary file from a dos filesystem\nfatls - list files in a directory (default /)\nfatmkdir - create a directory\nfatrm - delete a file\nfatsize - determine a file's size\nfatwrite - write file into a dos filesystem\nfdt - flattened device tree utility commands\nfstype - Look up a filesystem type\ngettime - get timer val elapsed\ngo - start application at address 'addr'\nhelp - print command description/usage\nide - IDE sub-system\niminfo - print header information for application image\nimxtract - extract a part of a multi-image\ninterrupts- enable or disable interrupts\niod - IO space display\niow - IO space modify\nirqinfo - print information about IRQs\nitest - return true/false on integer compare\nlcdputs - print string on video framebuffer\nln - Create a symbolic link\nload - load binary file from a filesystem\nloadb - load binary file over serial line (kermit mode)\nloads - load S-Record file over serial line\nloadx - load binary file over serial line (xmodem mode)\nloady - load binary file over serial line (ymodem mode)\nloop - infinite loop on address range\nls - list files in a directory (default /)\nmd - memory display\nmii - MII utility commands\nmm - memory modify (auto-incrementing address)\nmtrr - Use x86 memory type range registers (32-bit only)\nmw - memory write (fill)\nnm - memory modify (constant address)\nnvme - NVM Express sub-system\npart - disk partition related commands\npci - list and access PCI Configuration Space\nping - send ICMP ECHO_REQUEST to network host\nprintenv - print environment variables\npxe - commands to get and boot from pxe files\nqfw - QEMU firmware interface\nreset - Perform RESET of the CPU\nrun - run commands in an environment variable\nsave - save file to a filesystem\nscsi - SCSI sub-system\nscsiboot - boot from SCSI device\nsetcurs - set cursor position within screen\nsetenv - set environment variables\nsf - SPI flash sub-system\nshowvar - print local hushshell variables\nsize - determine a file's size\nsleep - delay execution for some time\nsource - run script from memory\nsspi - SPI utility command\nsysboot - command to get and boot from syslinux files\ntest - minimal test like /bin/sh\ntftpboot - boot image via network using TFTP protocol\ntime - run commands and summarize execution time\ntrue - do nothing, successfully\nusb - USB sub-system\nusbboot - boot from USB device\nversion - print monitor, compiler and linker version\nvirtio - virtio block devices sub-system\nzboot - Boot bzImage"),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"error-loading-uncompressed-kernel-without-pvh-elf-note"},"Error loading uncompressed kernel without PVH ELF Note"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"-machine type=pc-i440fx-3.1")))}m.isMDXComponent=!0}}]);