/*
* @Author: mxm
* @Date:   2018-04-02 22:13:41
* @Last Modified by:   mxm
* @Last Modified time: 2018-04-02 22:16:26
*/
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	ctx.body = 'Hi Luke'
})

app.listen(2333)