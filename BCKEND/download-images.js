const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const mime = require('mime-types');

// Load service account credentials
const auth = new google.auth.GoogleAuth({
  credentials:{
    "type": "service_account",
    "project_id": "kalikamatha",
    "private_key_id": "9f82cdba2f37965971ffc467ee571b8f785ed7fb",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDWOLR8QE9eEnBp\nuMZMmaqjtpMUCwZ6Q+X+pjTFlsUrwPUY+OsYX6GKQ1kCcdL8W8B2RWWomGDeOvQm\nGbaI+c3XPuMKZ3rIojIFFKaIpjyAg6Q2vxbTJoSyhf20IqX8e1MCV5EpZV2hOdMe\npeuPqK7q8rqv7v0DcNA5f5Vll48Mm2FEJVCStj2KNCUZpDNbG82zA1TDGl0dblF6\nG0/48PpkbyrwxTKTnZJVaDEp6/DpYDlC24KJ0EelSeMUvxJOgf1YtYOO5Lda5/WX\nO/rZ6tCMna/DaldJ9rKxxdECFSCOLjDyw9Z1ntEmnepMhvr+oLbhCXVfYJ9cyPPZ\nldXKoUb1AgMBAAECggEAAnyWhcG2WiRzJxsEvENlYnCeXPNy0A0FOLNDtg51u/gJ\nsFBFZFtJ1AHLoPZiyVikT4snLrGUIEhFaMLQJl9l9wttFcQVPgp586qlcz0gwyok\nCBmoQWu3Sx44j3R+gkOJN2P+VKFvWI2ECJ1K8ng2DZajOaMXz0gqNpynRo5fk/kd\nVFuNJ91TWRjJ/RRvsFqeOzsvQLKGEXmaa0iwYHanSLrdna3JZWmIZbplGsyj5IiN\n+srq4INIAuffzV/cYBMepM78y6/hyYdaSoxu8bJrVWpw9IAFQhWNaxtxdE5SovTP\nU0fNTqLwBRLwpT2cDLvu8W9AnqSYrczLy2A6KdLpCQKBgQDqW3zDmRB7MB+pQ1sH\nO5rhd1Zevj2tODqGgqlNMt0x3hSSPp8spDu3AKWaPGNOReyQSElQVKuJ1TQFGwgL\nToLIk6XVRrnoVS9IsN3BniSK3FKMXYUFfPOYE8r+Pg4DO9KCbXtCOjWVNfukr187\nFthuMOCYkUyXUkTtfRrml0pHTQKBgQDqAS348GZW8nkSTRlhsuA15TiIsWYP4p7s\nPCQjiDu+oxM5XUvwf+/tlUWMWLbBtQ1bS99zxDDuizk2+5hSJcWW4vdqwL8MzU8S\nZBAn2//OHWYEthPW2vT4PUeca26x4Y+pcU1tzne8UI2AsdlURljscdbncLVHl5sg\nzbVjyLm6SQKBgQDXWBGgublHOMUfB2FRmBeNLdcTX8PUs2Izz0Q6R46xD9vfNeOV\nZaPpWJLS0sJ9Xgst2P5k7ihhkqMmPdx6Zz4NiH5NJ5wUPJIiPULHcsUpQ6ImkJh2\nnoZHK4jPbb36grHAX1FvXYV3Ag+lF/Btn2RofEkkZ/703QexIc/iKwp50QKBgQDf\ndBzoWPgBEy4WEdWo+90q2iawMWbayHcl8xA3dgJHOwZCgxrfH+yHHUH6kUSDmVaV\n1dAdhj2LrRsHrB16ZGNYgIfvQvutR+i4ESF0Tprpwh0HZq9vPksrOalGbziXWGON\nVIqxzrV7+BgHys1TspF7yAGFpJUXNmiGXKlYDfd9MQKBgDrMQI4tT4qdYlYKPC6n\n4muzfRCsOllS4+vA3lE2idud2hyPO2lA+acqW4jcpMeT+jTxpCo4JPc+KcbQ/Z1/\n39HU4TxLzD6oteOTd+lxCDCq8sD5t6czAvftTa93kuFY0o6gpxVnh66GCLm/J4BL\npcOjFgg7tOg5kD/AhSATEsOl\n-----END PRIVATE KEY-----\n",
    "client_email": "id-images-downlaod-node-js@kalikamatha.iam.gserviceaccount.com",
    "client_id": "107485001870691704605",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/id-images-downlaod-node-js%40kalikamatha.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  },
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
