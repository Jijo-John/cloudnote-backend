const connectToMongoose = require('./db');
connectToMongoose();

const express = require('express')
const app = express()
const port = 3000

// app.engine('html', require('express').renderFile);
app.set('view engine', 'html');
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})