const express = require('express')
const serverConfig=require('./config/serverConfig');
const authRoutes=require('./router/userRouter');
const app = express();
const employeeRoutes=require('./router/employeeRouter');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// const authMiddleware = require('./authMiddleware/authMiddleware');
// app.use(authMiddleware);
const connectToDB =require('./config/dbConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDB();

app.use('/api/v1',authRoutes);
app.use('/api/v1',employeeRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on port ${serverConfig.PORT}`)
})