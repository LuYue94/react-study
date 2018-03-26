npm start

npm run build

## 代理
---- package.json
+    "proxy": "http://localhost:3001/",

## scss

### 第一种：修改 npm script
npm install --save node-sass
npm install --save npm-run-all

---- package.json
+    "build-css": "node-sass src/ -o src/",
+    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",

### 第二种：修改 create-react-app的webpack配置
/node_modules/react-scripts/config

获取所有配置
npm run eject
npm install sass-loader node-sass --save-dev


## react-router 4.0
    react-router React Router 核心
    react-router-dom 用于 DOM 绑定的 React Router
    react-router-native 用于 React Native 的 React Router
    react-router-redux React Router 和 Redux 的集成
    react-router-config 静态路由配置的小助手

    https://blog.csdn.net/sinat_17775997/article/details/69218382