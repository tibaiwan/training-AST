/*

增加：err => { this.track(err) }

*/

const recast = require('recast')
const {
  identifier: id,
  memberExpression,
  callExpression,
} = recast.types.builders

const code = `this.axiosFetch(this.formData).then(res => {
  this.loading = false
  this.handleClose()
})`
const ast = recast.parse(code)

const trackCode = `err => { this.track(err) }`
const trackAST = recast.parse(trackCode).program.body[0].expression
console.log('trackAST', trackAST)

recast.visit(ast, {
  visitCallExpression (path) {
    const { node } = path

    const originFunc = callExpression(node.callee, node.arguments)
    const catchFunc = callExpression(id('catch'), [trackAST])
    const newFunc = memberExpression(originFunc, catchFunc)

    path.replace(newFunc)

    return false
  }
})

const output = recast.print(ast).code
console.log(output)
