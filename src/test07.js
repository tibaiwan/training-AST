/*

增加：this.loading = false

*/

const recast = require('recast')
const {
  identifier: id,
  memberExpression,
  callExpression,
  blockStatement,
  arrowFunctionExpression
} = recast.types.builders

const t = recast.types.namedTypes

const code = `this.axiosFetch(this.formData).then(res => {
  this.loading = false
  this.handleClose()
})`
const ast = recast.parse(code)
let firstExp

recast.visit(ast, {
  visitArrowFunctionExpression ({ node, parentPath }) {
    const parentNode = parentPath.node
    if (
      t.CallExpression.check(parentNode) &&
      t.Identifier.check(parentNode.callee.property) &&
      parentNode.callee.property.name === 'then'
    ) {
      firstExp = node.body.body[0]
    }
    return false
  }
})

recast.visit(ast, {
  visitCallExpression (path) {
    const { node } = path

    const arrowFunc = arrowFunctionExpression([], blockStatement([firstExp]))
    const originFunc = callExpression(node.callee, node.arguments)
    const catchFunc = callExpression(id('catch'), [arrowFunc])
    const newFunc = memberExpression(originFunc, catchFunc)

    path.replace(newFunc)

    return false
  }
})

const output = recast.print(ast).code
console.log(output)
