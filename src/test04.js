/*

读取文件：recast.run
节点遍历：recast.visit
$ node test04 test04_sub.js

*/

const recast = require('recast')

// recast.run((ast, printSource) => {
//     printSource(ast)
// })

recast.run((ast, printSource) => {
    recast.visit(ast, {
        visitArrowFunctionExpression (path) {
            printSource(path.node)
            return false
        }
    })
})
