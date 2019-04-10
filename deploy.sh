#!/usr/bin/env bash
echo '安装包'
npm i # d2-admin需要用nrm配置npm的源，要不然会出现core-js无法加载的问题
echo '构建前端工程'
if [ ! -d "/opt/eclass" ];then
#学校的服务器
    npx vue-cli-service build --mode production --dest /opt/eclass/GuesEclassTp_v3/public/static/confront --target app --dashboard
else
#自己的服务器
    npx vue-cli-service build --mode production --dest /www/wwwroot/GuesEclassTp/public/static/confront --target app --dashboard
fi
# 这种方法也可以
# ./node_modules/.bin/vue-cli-service build

echo '修改当前目录所有文件的所属权限'
chown -R www:www ./ # 防止出现其它用户运行当前脚本改变文件的所属权限

echo '所有操作都已经执行完毕'
