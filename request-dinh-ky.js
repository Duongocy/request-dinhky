const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fetch = require('node-fetch'); // hoặc axios

const app = express();
app.use(cors()); // Sử dụng middleware CORS
app.use(express.json());


cron.schedule('* * * * *', () => {
  console.log('Đang gửi request giữ tỉnh táo 😴');
  fetch('https://api-create-new-user.onrender.com/Invoice?username=toan&kieuyeucau=checkusertontai')
    .then(res => res.text())
    .then(data => console.log('Đã gửi xong:', data))
    .catch(err => console.error('Lỗi gửi request:', err));
});

// Khởi động server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});