//middleware pattern (chain of responsibility)
const passo1 = (ctx,next) =>{
    ctx.valor= "mid1"
    next()
}
const passo2 = (ctx,next) =>{
    ctx.valor= "mid2"
    next()
}
const passo3 =ctx=> ctx.valor= "mid3"

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middllewares.length && 
        middlewares[indice](ctx, ()=>execPasso(indice+1))
    }
    execPasso(0)
}