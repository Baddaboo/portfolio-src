#!/usr/bin/env sh

set -e

npm run build
cd dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Baddaboo/baddaboo.github.io.git
git push -u -f origin master

cd -
