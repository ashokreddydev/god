const express = require('express');
const fs = require('fs');
const cron = require('node-cron');
const path = require('path');
const cors = require('cors');
const { listAndDownloadImages } = require('./download-images');
const app = express();
const PORT = 5000;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'downloads')));

// Get list of image URLs
app.get('/images-list', (req, res) => {
  const dirPath = path.join(__dirname, 'downloads');
  if (!fs.existsSync(dirPath)) {
    return res.json([]);
  }

  const files = fs.readdirSync(dirPath).filter(name =>
    /\.(jpe?g|png|gif|bmp|webp)$/i.test(name)
  );

//   const urls = files.map(name => `http://localhost:${PORT}/images/${name}`);
const urls = files.map(name => `/images/${name}`);
  res.json(urls);
});

// Schedule to run once per day at 2 AM
cron.schedule('0 2 * * *', async () => {
    console.log('Running daily image download...');
    await downloadImages();
  });

app.get('/download-now', async (req, res) => {
    listAndDownloadImages();
  res.json({ message: 'Download started' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
