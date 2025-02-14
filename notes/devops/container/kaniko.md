---
title: Kaniko
---

# Kaniko

- [GoogleContainerTools/kaniko](https://github.com/GoogleContainerTools/kaniko) 是什么？
  - 构建容器镜像的工具
  - 不依赖 Docker，不需要 root 权限
  - 可复现的容器镜像构建
- gcr.io/kaniko-project/executor:latest
- gcr.io/kaniko-project/executor:debug - 包含 shell
- 参考
  - GitLab runner use [Kaniko](https://docs.gitlab.com/ee/ci/docker/using_kaniko.html)
- 专注于在 Kubernetes 构建镜像

:::caution

- 只支持 x86_64
- 不支持 multi-arch 和 manifest
- 不能使用本地 layer 缓存
- 性能可能弱于 dind - [GoogleContainerTools/kaniko#875](https://github.com/GoogleContainerTools/kaniko/issues/875)
- registry-mirror 不支持前缀，例如 `registry.example.com/dockerhub`

:::

```bash
# debug 环境
docker run --rm -it -w /workspace --entrypoint sh registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:debug

mkdir -p /workspace /images /cache
cd /workspace

cat <<DOCKERFILE > Dockerfile
FROM wener/base
RUN apk add coreutils
DOCKERFILE
# --no-push 不推送 --tarPath 生成的 tar 需要设置 --destination
# --context 默认 /workspace
# --cache 启用缓存 --cache-dir 基础镜像缓存目录，默认 /cache --cache-repo 缓存仓库
# --use-new-run 实验特性，提升构建性能
# --reproducible 移除时间戳
/kaniko/executor --context $PWD --dockerfile $PWD/Dockerfile \
  --registry-mirror hbcvocvo.mirror.aliyuncs.com \
  --no-push --tarPath /images/build.tar --destination=image \
  --use-new-run --reproducible

# Docker 认证配置
mkdir -p /kaniko/.docker
# 配置
echo "{\"auths\":{\"$CI_REGISTRY\":{\"username\":\"$CI_REGISTRY_USER\",\"password\":\"$CI_REGISTRY_PASSWORD\"}}}" > /kaniko/.docker/config.json
# 构建并推送
/kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG

# 直接构建
# registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest
# gcr.io/kaniko-project/executor:latest
docker run \
  -v "$HOME"/.config/gcloud:/root/.config/gcloud \
  -v /path/to/context:/workspace \
  registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest \
  --dockerfile /workspace/Dockerfile \
  --destination "$PROJECT_ID/$IMAGE_NAME:$TAG" \
  --context dir:///workspace/
```

## dockerhub

```bash
cat <<JSON > config.json
{
	"auths": {
		"https://index.docker.io/v1/": {
			"auth": "$(echo -n $USER:$PASSWORD | base64)"
		}
	}
}
JSON
docker run --rm -it $PWD/config:/kaniko/.docker/config.json --destination=yourimagename
```

- https://github.com/GoogleContainerTools/kaniko/issues/1209

## 参数

- [Additional Flags](https://github.com/GoogleContainerTools/kaniko#additional-flags)

# FAQ

## 性能问题
- https://github.com/GoogleContainerTools/kaniko/issues/875
  Kaniko build's performance much slower comparing with DID solution

## 拷贝根目录异常阻塞

```dockerfile
FROM alpine:3.11 as rootfs
RUN echo 7777

FROM alpine:3.11
# 阻塞
COPY --from=rootfs / /sysroot/
# Workaround https://github.com/GoogleContainerTools/kaniko/issues/960
COPY --from=rootfs /rootfs/ /sysroot/
```

- https://github.com/GoogleContainerTools/kaniko/issues/960

## snapshot 阻塞

- https://github.com/GoogleContainerTools/kaniko/issues/970
