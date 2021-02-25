## training-AST


#### 简介

> AST（Abstract Syntax Tree）：意为抽象语法树，他是源代码语法结构的树状表现形式。

应用场景：代码编译、压缩、混淆、优化，打包构建，lint。  
使用AST的工具或库：Babel，TypeScript，Webpack，Rollup，UglifyJS，ESlint。

#### TODO

- demo
    - parse
    - generator
    - recast
    - 转换箭头函数转换为普通函数，实现函数名称替换（代码压缩，长名换短名字），

```
const thisIsAFunctionName = (paramA, paramB) => paramA + paramB

function m (a) {
    return a + b
};
```

#### 工具

- [AST explorer](https://astexplorer.net/)

#### See Also

- [JS AST 原理揭秘](https://zhaomenghuan.js.org/blog/js-ast-principle-reveals.html)
- [AST 对象文档](https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
- [AST 与前端工程化实战](https://zhuanlan.zhihu.com/p/77696194)
- [你不知道的AST](https://aszero.com/2020/06/03/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84AST/)
- [@babel/types](https://babeljs.io/docs/en/babel-types)
