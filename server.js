const next = require('next');
const express = require('express');

const  port = 3001 || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';

const {wooCommerce} = require('./util/woocommerce');
const navRouter = require('./routers/navRouter');
const productRouter = require('./routers/productRouter');

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then( () => {
    const server = express();

    server.use(navRouter);
    server.use(productRouter);
    
    server.get('*', (req, res) => handle(req, res));
    server.listen(port, er => {
      if(er)
        throw(err);
      console.log('Custom server listening at ' + port);
    })
  })
.catch( er => {
  console.log(er.stack);
  process.exit(1);
});




