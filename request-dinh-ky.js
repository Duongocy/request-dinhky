const express = require('express');
const cors = require('cors'); // Import thư viện cors
const { Pool } = require('pg');
const cron = require('node-cron');

const app = express();
app.use(cors()); // Sử dụng middleware CORS
app.use(express.json());

// Cấu hình kết nối đến PostgreSQL
const pool = new Pool({
    user: 'postgres', // Thay thế bằng username của bạn
    host: '14.165.172.59',//địa chỉ ip công khai của máy fujitsu 
    database: 'Invoice',
    password: '1!Ngaycuoicung', // Thay thế bằng password của bạn
    port: 5432,
});

cron.schedule('*/5 * * * *', async () => {
  console.log('[PING] Giữ database luôn thức 😴➡️😎');
  try {
    const result = await pool.query('SELECT 1');
    console.log(`[PING] OK at ${new Date().toISOString()}`);
  } catch (err) {
    console.error('[PING] Fail:', err.message);
  }
});

// Khởi động server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});