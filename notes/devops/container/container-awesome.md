---
title: Container Awesome
tags:
  - Awesome
---

# Container Awesome

- CRI
  - [opencontainers/runc](https://github.com/opencontainers/runc)
  - [google/gvisor](https://github.com/google/gvisor)
  - nvidia-container-runtime
  - [containers/crun](https://github.com/containers/crun)
    - GPL-2, C
    - lightweight
  - [containers/youki](https://github.com/containers/youki)
    - Apache-2.0, Rust
- CNI
  - Kube-router
  - Calico
  - Flannel
- CSI
- Daemon - 管理 OCI 容器、镜像
  - ContainerD
  - docker
  - [podman](https://github.com/containers/podman)
  - lxd
  - rkt
- Builder
  - buildkit - docker
    - support resetting timestamp for determinism [#1058](https://github.com/moby/buildkit/issues/1058)
  - [buildah](https://github.com/containers/buildah)
  - [Kaniko](https://github.com/GoogleContainerTools/kaniko)
    - 可能很慢 - [#875](https://github.com/GoogleContainerTools/kaniko/issues/875)
  - [genuinetools/img](https://github.com/genuinetools/img)
    - 不需要 dockerd
    - 需要更高权限
    - 兼容 docker cli
  - dockerfile
    - docker build
  - containerfile
    - podman build
    - buildah
- Registry
  - [containers/skopeo](https://github.com/containers/skopeo)
  - habor
  - nexus
- Code to Image
  - [openshift/source-to-image](https://github.com/openshift/source-to-image)
  - [GoogleContainerTools/jib](https://github.com/GoogleContainerTools/jib)
  - [bazelbuild/bazel](https://github.com/bazelbuild/bazel)
  - ko - Go source to Image
  - Skaffold
  - buildpack
- cri-o
- Container Desktop/VM
  - Docker Desktop
  - podman machine
  - [lima-vm/lima](https://github.com/lima-vm/lima)
    - Linux VM on macOS for running containerd
    - QEMU+HVF
    - [lima-vm/sshocker](https://github.com/lima-vm/sshocker) 文件共享 - 反向 sshfs
    - ssh -L
  - 基于 lima
    - [abiosoft/colima](https://github.com/abiosoft/colima)
      - Container runtimes on macOS & Linux
    - Rancher Desktop
  - mikrok8s
  - minikube
- [weaveworks/footloose](https://github.com/weaveworks/footloose)
  - Containers that look like Virtual Machines

## Runtime

- https://github.com/opencontainers/runtime-spec/blob/main/implementations.md

## CLI

- ctr,[nerdctl] -> containerd
  - contaiNERD CTL
- crictl -> cri -> containerd
  - cri 是 kubelet 接口

[nerdctl]: https://github.com/containerd/nerdctl

## 工具

- [sigstore/cosign](https://github.com/sigstore/cosign)
  - Container Signing
- [plexsystems/sinker](https://github.com/plexsystems/sinker)
  - 同步镜像
  - 使用 github.com/docker/docker/client 操作 docker
  - 使用 github.com/google/go-containerregistry 操作 仓库

```bash
go install github.com/plexsystems/sinker@latest
sinker push
```

```yaml title=".images.yaml"
target:
  host: mycompany.com
  repository: myteam
sources:
  - repository: coreos/prometheus-operator
    host: quay.io
    tag: v0.40.0
```

- [crane](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane.md)
  - 基于 [google/go-containerregistry] 的工具
- [containers/skopeo](https://github.com/containers/skopeo)
  - remote images registries - retrieving information, images, signing content
- [GoogleContainerTools/container-diff](https://github.com/GoogleContainerTools/container-diff)
- [jwilder/dockerize](https://github.com/jwilder/dockerize)
- [containerd/stargz-snapshotter](https://github.com/containerd/stargz-snapshotter)
- 参考
  - [构建容器的最佳做法](https://cloud.google.com/solutions/best-practices-for-building-containers)

## 库

- [google/go-containerregistry]
- [heroku/docker-registry-client](https://github.com/heroku/docker-registry-client)
- [Docker Registry HTTP V2](https://docs.docker.com/registry/spec/api/)
- https://docs.quay.io/api/swagger/
- [quay/quay](https://github.com/quay/quay)
  - Apache-2.0, Python
- [distribution/distribution](https://github.com/distribution/distribution)
  - [spec/api.md](https://github.com/distribution/distribution/blob/main/docs/spec/api.md)
- registry
  - docker.io -> index.docker.io
  - https://registry-1.docker.io
  - https://docker.mirrors.ustc.edu.cn
    - https://ustc-edu-cn.mirror.aliyuncs.com
  - https://fogjl973.mirror.aliyuncs.com
  - https://8x40wsit.mirror.aliyuncs.com
- [Docker HUB API](https://docs.docker.com/docker-hub/api/latest/)

[google/go-containerregistry]: https://github.com/google/go-containerregistry

```bash
curl https://hub.docker.com/v2/repositories/wener/base/tags | jq

# Registry API
curl https://ustc-edu-cn.mirror.aliyuncs.com/v2/wener/base/tags/list | jq -r '.tags | .[]'
```

## Build

**问题**

- 是否需要 Linux 环境
- 是否需要 Privilege 环境
- 是否需要守护进程
- 是否支持跨平台
- Manifest 支持
- 缓存支持
- 易用性

## Inspect

- [wagoodman/dive](https://github.com/wagoodman/dive)
- [vicanso/diving](https://github.com/vicanso/diving)
  - https://diving.npmtrend.com/
  - dive web

## Learn

- [Diving Deeper Into Runtimes: Kubernetes, CRI, and Shims](https://www.threatstack.com/blog/diving-deeper-into-runtimes-kubernetes-cri-and-shims)
- [First look at the internals of containerd and runc](https://nanikgolang.netlify.app/post/containers/)
- [Implementing Container Runtime Shim: runc](https://iximiuz.com/en/posts/implementing-container-runtime-shim/)
