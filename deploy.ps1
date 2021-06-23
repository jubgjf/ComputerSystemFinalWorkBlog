yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:jubgjf/ComputerSystemFinalWorkBlog.git master:gh-pages