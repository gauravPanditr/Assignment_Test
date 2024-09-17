const dotenv=require('dotenv');

dotenv.config();

module.exports={
      PORT:process.env.PORT || 3000,
      ATLAS_DB_URL:process.env.ATLAS_DB_URL,
      CLOUD_NAME:process.env.CLOUD_NAME,
      API_KEY:process.env.API_KEY,
      API_SECRET:process.env.API_SECRET,
      NODE_ENV:process.env.NODE_ENV,
      JWT_SECRET:process.env.JWT_SECRET,
}