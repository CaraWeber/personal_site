'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

  // Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('volleyball'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res, next){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html')); 
})

if (module === require.main) {
  // Start listening only if we're the main module.
  // 
  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for Cara's site ---`)      
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}
