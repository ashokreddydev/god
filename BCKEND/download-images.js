const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const serviceAccount = require('./service-account.json');

// Load service account credentials
const auth = new google.auth.GoogleAuth({
  credentials:serviceAccount,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

const FOLDER_ID = '1PwBk29d42EYa7xtwUKpXbBy-0j6koFkM'; // replace with your folder ID

async function listAndDownloadImages() {
  try {
    // List files in folder
    const res = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed=false`,
      fields: 'files(id, name, mimeType)',
    });

    const files = res.data.files;
    console.log(`Found ${files.length} image(s)`);

    if (!fs.existsSync('./downloads')) fs.mkdirSync('./downloads');

    for (const file of files) {
      const destPath = path.join('./downloads', file.name);
      const dest = fs.createWriteStream(destPath);

      const res = await drive.files.get(
        { fileId: file.id, alt: 'media' },
        { responseType: 'stream' }
      );

      await new Promise((resolve, reject) => {
        res.data
          .on('end', () => {
            console.log(`Downloaded: ${file.name}`);
            resolve();
          })
          .on('error', (err) => {
            console.error(`Error downloading ${file.name}:`, err);
            reject(err);
          })
          .pipe(dest);
      });
    }
  } catch (error) {
    console.error('Failed to download images:', error);
  }
}


module.exports = { listAndDownloadImages };
