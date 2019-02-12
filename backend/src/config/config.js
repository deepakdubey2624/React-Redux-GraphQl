require('dotenv').config(); //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

const commonConfig = {
env: process.env.NODE_ENV || 'development',
port: parseInt(process.env.PORT , 10) || 2000,
corsDomain: process.env.CORS_DOMAIN || '*',
dbConn: process.env.DB_CONN
};

export default commonConfig;