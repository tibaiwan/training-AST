/*

读取文件：recast.run

*/

const recast = require('recast')
const { identifier, variableDeclaration, variableDeclarator, functionExpression, blockStatement } = recast.types.builders

// const code = `const add = (a, b) => {return a + b}`
// const codeV2 = `const add = (a, b) => a + b`

// const ast = recast.parse(code)
// const add = ast.program.body[0].declarations[0]

// var result = variableDeclaration('var', [
//     variableDeclarator(identifier(add.id.name), functionExpression(
//         add.init.id,
//         add.init.params,
//         add.init.body
//     ))
// ])

recast.run((ast, printSource) => {
    recast.visit(ast, {
        visitArrowFunctionExpression (path) {



            printSource(path.node)
            return false
        }
    })
})

// const es5Code = recast.print(result).code;
// console.log('es5Code:', es5Code)
