const express = require('express');
const path = require('path');
const app = express();
//const port = 3001;

app.use(express.static(path.join(__dirname,'/../react-client/dist')));

app.listen(.listen(process.env.PORT || 5000), () => {
  console.log(`Contact Form running...`)
})