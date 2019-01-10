import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import apollo from './graphql/index'
import config from './config/config';
require('dotenv').config();

const app = express();
mongoose.connect(process.env.DB_CONN, {useNewUrlParser: true} )
.then(()=> console.log('DB connected'))
.catch(error => console.log(error))

app.disable('x-powered-by'); // to disable x-powered-by-express from request header

function setPort(port = 5000) {
    app.set('port', parseInt(port, 10));
   }
   
   function listen() {
    const port = app.get('port') || config.port;
    app.listen(port, () => {
      console.log(`The server is running and listening at http://localhost:${port}`);
    });
   }
   
   app.use(cors({
    origin: config.corsDomain, // Be sure to switch to your production domain
    optionsSuccessStatus: 200
   }));
   
   // Endpoint to check if the API is running
   app.get('/', (req, res) => {
    res.send({ status: 'ok' });
   });
   
   // Append apollo to our API
   apollo(app);
   
   export default {
    getApp: () => app,
    setPort,
    listen
   };