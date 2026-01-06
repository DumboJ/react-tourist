# react-tourist
learn about react

### 1.install nvm (nodejs version manager)
- windows
[安装包下载](https://github.com/coreybutler/nvm-windows/releases)
- ios/linux
~~~shell
npm install -g nvm@latest
~~~
#### 1.1 管理node版本
- 查看nvm版本 ``` mvn --version```
- 查看可用版本 ``` nvm list available```
- 安装nodejs ``` nvm install [version]```
- 切换nodejs版本 ```  nvm use [version]```
- 设置默认nodejs版本 ``` nvm alias default [version]```

#### 1.2 vite 创建工具
- 查看vite版本 ```vite --version```
- 检查当前版本 ```npm list vite```
- 更新到最新版本 ```npm install vite@latest```
- 全局更新 ```npm install -g vite@latest```

#### 1.3 安装pnpm
- 安装pnpm ```npm install -g pnpm```
- 验证安装 ```pnpm --version```
- 查看镜像源 ``` pnpm config get registry```
- 设置阿里镜像源 ```pnpm config set registry https://registry.npmmirror.com/```
- 恢复默认镜像源 ```pnpm config delete registry```

#### 1.4 vite 创建 react 项目
- 创建项目,按提示处理 ```yarn create vite```
- 创建项目,指定项目名称和模板 ```yarn create vite [project-name] --template react```
- 开发启动 ```yarn dev```
- 构建生产版本 ```yarn build```

#### 1.5 yarn 项目启动异常，问题处理
- yarn镜像源查看 ``` yarn config get resitry : undefined```
- yarn配置阿里镜像源 ```yarn config set registry https://registry.npmmirror.com/```
- yarn缓存清理 ```yarn cache clean```
- 或者切换 npm/pnpm 命令使用 vite 构建项目