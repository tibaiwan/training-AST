/*

转译： @babel/parser
生成： @babel/generator

*/
const babelParser = require("@babel/parser")
const generate = require("@babel/generator")

const astA = babelParser.parse(`var a = 1`)
const astB = babelParser.parse(`function add(a, b) { return a + b }`)

const ast = {
  type: 'Program',
  body: [].concat(astA.program.body, astB.program.body)
}
const newCode = generate.default(ast).code

console.log('astA: ', JSON.stringify(astA))
console.log()
console.log('astB: ', JSON.stringify(astB))
console.log()
console.log('concatCode: ', newCode)
