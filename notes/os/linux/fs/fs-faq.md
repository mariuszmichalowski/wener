---
title: 文件系统常见问题
tags:
  - FAQ
---

# 文件系统常见问题

## 文件系统限制

- [What are the file and file system size limitations for Red Hat Enterprise Linux?](https://access.redhat.com/solutions/1532)

## atime, mtime, ctime

| field | mean        | stand for   |
| ----- | ----------- | ----------- |
| atime | access time | 访问时间    |
| mtime | modify time | 修改时间    |
| ctime | create time | 创建时间    |
| btime | birth time  | fs 创建时间 |

- btime
  - crtime EXTFS
  - Linux 4.11+ 支持 statx 返回 crtime
- [stat.1](https://man7.org/linux/man-pages/man1/stat.1.html)
- ext
  - strictatime - 更严格的 atime 维护，影响性能，特殊场景使用
  - noatime - 不维护 atime
  - nodiratime -  不维护目录 atime
  - relatime - relative atime - 超过 24h 才更新 atime

```bash
touch hello.txt
# 查看所有时间
stat hello.txt

touch hello.txt                           # 修改 atime, mtime
touch -m hello.txt                        # 修改 mtime
touch -d "2020-01-15 10:30:45" hello.txt  # 指定 atime, mtime

touch neo.txt
touch hello.txt -r neo.txt                # 参照修改

# inode
stat -c $i /etc/profile
df --output=source /etc/profile | tail -1
# debugfs 能看到 crtime
debugfs -R "stat <$(stat -c %i /etc/profile)>" /dev/sda2
```

<!-- debugfs -R 'stat /path/to/file' /dev/sda1 -->

## MBR vs GPT

- MBR - Master Boot Record
  - 也叫 DOS 分区 - 最早于 IBM PC DOS 2.0
- GPT - GUID Partition Table
  - 因为 UEFI 而诞生
- 4096 disk sector - AFD - Advanced Format - 4Kn
  - 自 2010 年开始，厂商大多采用 4k sector
  - 使用 512 实际是使用模拟后的地址 - 512e

| -            | mbr                        | gpt                            |
| ------------ | -------------------------- | ------------------------------ |
| since        | 1983                       | 2005 - UEFI                    |
| interface    | BIOS                       | UEFI                           |
| 512b sector  | 2TiB = 2^32 × 512          | 8 ZiB = 2^64 × 512             |
| 4096b sector | -                          | 64 ZiB = 2^64 × 4096           |
| address      | CHS - Cylinder-head-sector | LBA - Logical Block Addressing |
| bits         | 32                         | 64                             |

> The size of this disk is 2 TiB (2199023255552 bytes). DOS partition table format cannot be used on drives for volumes larger than 2199023255040 bytes for 512-byte sectors. Use GUID partition table format (GPT).

## 重新挂载为可读写

```bash
mount -o rw,remount /
```

## Do you want to remove the signature?

如果不希望删除 fs 则选择 No

- [What is a vfat signature?](https://unix.stackexchange.com/a/478001/47774)

## cluster size for NTFS, FAT, and exFAT

**NTFS**

|        volumn | block |
| ------------: | ----: |
|    7 MB–16 TB |  4 KB |
|   16 TB–32 TB |  8 KB |
|   32 TB–64 TB | 16 KB |
|  64 TB–128 TB | 32 KB |
| 128 TB–256 TB | 64 KB |

**exFAT**

|       volumn |      block |
| -----------: | ---------: |
|  7 MB–256 MB |       4 KB |
| 256 MB–32 GB |      32 KB |
| 32 GB–256 TB | **128 KB** |

**FAT32**

|        volumn |     block |
| ------------: | --------: |
|   32 MB–64 MB | 512 bytes |
|  64 MB–128 MB |      1 KB |
| 128 MB–256 MB |      2 KB |
|   256 MB–8 GB |      4 KB |
|    8 GB–16 GB |      8 KB |
|   16 GB–32 GB |     16 KB |

**FAT16**

|        volumn |     block |
| ------------: | --------: |
|    8 MB–32 MB | 512 bytes |
|   32 MB–64 MB |      1 KB |
|  64 MB–128 MB |      2 KB |
| 128 MB–256 MB |      4 KB |
| 256 MB–512 MB |      8 KB |
|   512 MB–1 GB |     16 KB |
|     1 GB–2 GB |     32 KB |
|     2 GB–4 GB |     64 KB |

> NAND flash 大多为 128 KB blocksize，所以 extFAT 很适合闪存

- [Default cluster size for NTFS, FAT, and exFAT](https://support.microsoft.com/en-gb/topic/9772e6f1-e31a-00d7-e18f-73169155af95)
