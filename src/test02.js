/*

recast
    - parse
    - print
    - prettyPrint

*/

const recast = require('recast')

const code = `var a = 'Hello World';`
// const code = `function add(a, b) {return a + b;}`

const ast = recast.parse(code)
console.log('ast', JSON.stringify(ast))

const printAST = recast.print(ast)
const prettyPrint = recast.prettyPrint(ast)

console.log('printAST:', printAST.code)
console.log('prettyPrint:', prettyPrint.code)
