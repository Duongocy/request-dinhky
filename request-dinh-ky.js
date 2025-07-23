const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fetch = require('node-fetch'); // hoặc axios
const https = require('https');

const app = express();
app.use(cors()); // Sử dụng middleware CORS
app.use(express.json());


cron.schedule('* * * * *', () => {
  console.log('Đang gửi request giữ tỉnh táo 😴');

  https.get('https://api-create-new-user.onrender.com/Invoice?username=toan&kieuyeucau=checkusertontai', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Đã gửi xong:', data);
    });
  }).on('error', (err) => {
    console.error('Lỗi gửi request:', err.message);
  });
});

// Khởi động server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});