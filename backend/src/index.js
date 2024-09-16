const express = require('express')
const serverConfig=require('./config/serverConfig');
const app = express()

const connectToDB =require('./config/dbConfig');

connectToDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on port ${serverConfig.PORT}`)
})