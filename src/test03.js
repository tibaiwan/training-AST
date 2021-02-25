/*

具名函数： `function add(a, b) {return a + b}`
step1，转换成匿名函数： `const add = function(a, b) {return a + b};`
step2，转换成箭头函数： `const add = (a, b) => {return a + b};`
step3，再转换回原具名函数： `function add(a, b) {return a + b}`

recast.types.builders

*/

const recast = require('recast')

const { variableDeclaration, variableDeclarator, functionExpression, arrowFunctionExpression, functionDeclaration } = recast.types.builders

const code = `function add(a, b) {return a + b}`
const ast = recast.parse(code)
const add = ast.program.body[0]

// step1 输出：`const add = function(a, b) {return a + b};`
ast.program.body[0] = variableDeclaration('const', [
    variableDeclarator(add.id, functionExpression(
        null,
        add.params,
        add.body
    ))
])

const normalFunc = recast.print(ast).code
console.log('normalFunc:', normalFunc)

// step2 输出：`const add = (a, b) => {return a + b};`
ast.program.body[0] = variableDeclaration('const', [
    variableDeclarator(add.id, arrowFunctionExpression(
        add.params,
        add.body
    ))
])

const arrowFunc = recast.print(ast).code
console.log('arrowFunc:', arrowFunc)

// step3 输出：`function add(a, b) {return a + b}`
ast.program.body[0] = functionDeclaration(
    add.id,
    add.params,
    add.body
)

const normalFunc2 = recast.print(ast).code
console.log('normalFunc2:', normalFunc2)
