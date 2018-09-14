#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'

cd ..
# 生成静态文件
vuepress build computer-network

cd -

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mohong/computer-network.git master:gh-pages

