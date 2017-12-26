# atom-devtools
### 首先，atom-devtools是一款chrome扩展工具

### 非常感谢vue-devtools工具(https://github.com/vuejs/vue-devtools)
基于vue-devtools基础上开发了atom机制下的开发工具

添加、开发、发布该chrome扩展流程保持了vue-devtools原流程

### 一期新增功能：
#### 1. 增加了https环境下的img src检验
#### 2. 增加了线上页面脚本拦截和重定向功能，将线上atom.min.js拦截改为atom.js开发版本，方便使用工具进行线上页面验证

### 二期功能
#### 1. 增加页面交互时，整体组件变化diff detail提示

### 使用方法
#### 下载项目，运行 npm run build，把shells/chrome添加到chrome扩展里即可，如下
1. 在chrome下输入url：chrome://extensions/
2. 点击按钮「加载已解压的扩展程序」
3. 选择shells文件下的chrome文件即可
![](http://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/mms-res/fed/atom-devtools/9025ffeda4ab33c2bc08bb588a31d73a.a4ab33c2.png)

### License

[MIT](http://opensource.org/licenses/MIT)
