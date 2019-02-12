import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import apolloApp from './graphql/index'
import config from './config/config';


const app = express();
mongoose.connect(config.dbConn, {useNewUrlParser: true} )
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
   app.get('/', (req, res, next) => {
    res.send({ status: 'ok' });
    
   });
  
 
  

   // Append apollo to our API
   apolloApp(app);
   
   export default {
    getApp: () => app,
    setPort,
    listen
   };