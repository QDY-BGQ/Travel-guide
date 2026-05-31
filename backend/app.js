const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '中国旅游攻略网站 API',
    version: '1.0.0'
  });
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/guides', require('./routes/guideRoutes'));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
  });
});