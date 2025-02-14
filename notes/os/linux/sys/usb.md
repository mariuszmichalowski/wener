# USB

## Tips

- libusb
- [gregkh/usbutils](https://github.com/gregkh/usbutils)
  - [edge/main/x86_64/usbutils](https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbutils)
  - usb-devices
  - usbhid-dump
  - lsusb
- [usb-modeswitch](http://www.draisberghof.de/usb_modeswitch/)
  - [edge/main/x86_64/usb-modeswitch](https://pkgs.alpinelinux.org/package/edge/main/x86_64/usb-modeswitch)
  - usb_modeswitch
- 参考
  - [USB Topology](http://www.usblyzer.com/usb-topology.htm)

```bash
# 查看设备树
lsusb -t
# 查看单个设备
lsusb -s 2:2
# 设备详细信息
# bcdUSB USB version of the port
lsusb -s 2:2 -vvv
```

### 速度

| 版本          | 发布日期      | 最大传输速率            |
| ------------- | ------------- | ----------------------- |
| USB 1.1       | August 1998   | Full Speed (12 Mbit/s)  |
| USB 2.0       | April 2000    | High Speed (480 Mbit/s) |
| USB 3.0       | November 2008 | SuperSpeed (5 Gbit/s)   |
| Thunderbolt   | 2011          | 10 Gbps                 |
| USB 3.1       | July 2013     | SuperSpeed+ (10 Gbit/s) |
| Thunderbolt 2 | 2013          | 20 Gbps                 |
| USB Type-C    | 2014          |
| Thunderbolt 3 | 2015          | 40 Gbps                 |
| USB 3.2 Gen 1 |

## 加密狗

- [Software protection dongle](https://en.wikipedia.org/wiki/Software_protection_dongle)
- 安全令牌/[Security token](https://en.wikipedia.org/wiki/Security_token)

## sniffing

- [Free USB Analyzer](https://freeusbanalyzer.com/)
- Wireshark [USB capture](https://wiki.wireshark.org/CaptureSetup/USB)
- Linux module [usbmon](https://www.kernel.org/doc/Documentation/usb/usbmon.txt)
- [USB Monitoring](http://tjworld.net/wiki/Linux/Ubuntu/USBmonitoring)

## usbip

- [usbip_protocol](https://www.kernel.org/doc/Documentation/usb/usbip_protocol.txt)
- [tools-usb-usbip-README](https://www.kernel.org/doc/readme/tools-usb-usbip-README)
- [tools/usb/usbip](https://github.com/torvalds/linux/tree/master/tools/usb/usbip)
  - 新的 usbip 代码
  - 2017 年似乎有些修改
- [Linux, RPi and USB over IP updated](http://web.archive.org/web/20160403200320/http://blog.3mdeb.com/2015/10/27/linux/)
- usbip-utils
  - [unmaintained/usbip-utils](https://github.com/alpinelinux/aports/tree/master/unmaintained/usbip-utils)
- https://en.wikipedia.org/wiki/Wireless_USB

- usbip-vhci
  - 客户端内核模块
  - 提供虚拟 USB Host Controller 用于从远程导入设备
- usbip-host (stub driver)
  - 服务端模块
  - 提供设备驱动绑定到物理 USB 设备, 使得设备可被暴露
- usbip-vudc
  - 服务端模块
  - 提供虚拟的 USB Device Controller, 将使用 USB Gadget Subsystem 创建的设备进行暴露
- usbip-utils
  - 用户空间工具
  - 用于管理和处理链接

```bash
# 查看内核配置
grep USBIP /boot/config*
# 如果上面的配置, 则加载 configs 查看
modprobe configs
zcat /proc/config.gz |grep USBIP
# CONFIG_USBIP_CORE=m
# CONFIG_USBIP_VHCI_HCD=m
# CONFIG_USBIP_HOST=m

# 服务端
# ==========
# 加载内核模块
modprobe usbip-core
modprobe usbip-host
# 启动服务端
usbipd -D
# 查看设备
usbip list -l
# 绑定暴露
usbip --debug bind -b 1-1.2
# 查看端口信息
# 被远程挂载后会显示相关信息
usbip port
# 取消绑定
usbip unbind -b 1-1.3

# 客户端
# ==========
# 查看远程服务器上暴露的设备
usbip list -r 192.168.0.1
# 加载内核
modprobe vhci-hcd
# 挂载远程设备
usbip attach -r 192.168.0.1 -b 1-1.3
# 查看远程的分区信息
# 假设挂载后的设备为 /dev/sdd
fdisk -l /dev/sdd
# 卸载
usbip detach -p 0
```

## usbredir

- [SPICE/usbredir](https://github.com/SPICE/usbredir)
- [edge/main/x86_64/usbredir-server](https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbredir-server)

https://github.com/OliRead/usbdmx
A versatile USB DMX library written in Go for programatic show control and special effects.

echi hdc
https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)

https://en.wikipedia.org/wiki/Message_Signaled_Interrupts

## usbkey

BOC

```
[64757.197334] usb 1-8: new full-speed USB device number 4 using xhci_hcd
[64757.340880] usb 1-8: New USB device found, idVendor=096e, idProduct=070a
[64757.340883] usb 1-8: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[64757.340884] usb 1-8: Product: FT Interpass3000
[64757.340885] usb 1-8: Manufacturer: FS
[64757.341231] usb-storage 1-8:1.0: USB Mass Storage device detected
[64757.350672] scsi host7: usb-storage 1-8:1.0
[64758.362211] scsi 7:0:0:0: CD-ROM            FT BOC   Interpass3000    1.00 PQ: 0 ANSI: 2
[64758.388267] sr 7:0:0:0: [sr0] scsi3-mmc drive: 0x/0x caddy
[64758.388269] cdrom: Uniform CD-ROM driver Revision: 3.20
[64758.388395] sr 7:0:0:0: Attached scsi CD-ROM sr0
```

cdrom
/dev/sr0
md5sum
89747793319d3f3fbdb6f9397757a9c9 /root/mnt/Setup.exe
sha1sum
f323765394ed171389176c1140c61e9cec076fd2 mnt/Setup.exe

1215k
