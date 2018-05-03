const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const serve = require("koa-static")
const convert = require('koa-convert');
const path = require("path");
const co = require('co');
const render = require("koa-swig")

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  // locals: locals,
  // filters: filters,
  // tags: tags,
  // extensions: extensions,
  writeBody: false
}));

// app.use(async ctx => ctx.body = await ctx.render('index'));
app.use(router(_ => {
  _.get('/', async(ctx, next) => {
    ctx.body = 'hello'
  })
  _.get('/index', async(ctx, next) => {
    ctx.body = await ctx.render('index')
  })
}))

app.use(convert(serve(path.join(__dirname, './public'))))

app.listen(3000, () => {
	console.log('Server started at 3000');
})