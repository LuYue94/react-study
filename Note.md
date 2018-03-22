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