const Koa = require('koa')
const config = require('./config')
const useMiddleware = require('./middleware')

const app = new Koa()
app.name = 'zero'

useMiddleware(app)
let port = process.env.PORT || config.port
app.listen(port, () => {
    console.log(`\n服务运行在:`.yellow.bold + ` http://localhost:${port}\n`.green);
})
