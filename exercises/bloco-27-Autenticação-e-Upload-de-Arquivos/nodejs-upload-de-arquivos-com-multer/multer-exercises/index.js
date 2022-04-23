require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }});

const fileFilter = (req, file, cb) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);
  const isDuplicated = files.some((fileName) => fileName.split('-')
    .filter((_name, index) => index !== 0).join('-') === file.originalname);
  if (isDuplicated) {
    req.validFileError = {error: { mesage: 'File already exists' }, status: 409};
    return cb(null, false);
  }
  if (path.extname(file.originalname) !== '.png') {
    req.validFileError = { error: { message: 'Extension must be `png`' }, status: 403};
    return cb(null, false);
  }
  return cb(null, true);
};


const upload = multer({ storage, fileFilter });
const uploadMany = multer({ dest: 'uploads' });
const uploadNewProfile = multer({ dest: 'profilePics' });

app.get('/ping', controllers.ping);
app.get('/profile/:id', controllers.getProfile);
app.post('/upload', upload.single('file'), controllers.uploadOne);
app.post('/multiple', uploadMany.array('files'), controllers.uploadMultiple);
app.post('/profile', uploadNewProfile.single('profilePic'), controllers.uploadProfile);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
