const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const uploadOne = (req, res) => {
  if (req.validFileError) return res.status(req.validFileError.status).json(req.validFileError.error);
  return res.status(200).json({ body: req.body, file: req.file })
};

const uploadMultiple = (req, res) => {
  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.path}`,
  }));
  return res.status(200).json(uploadedFiles);
};

const uploadProfile = (req, res) => {
  const { name, email, password, bio } = req.body;
  const profiles = JSON.parse(fs.readFileSync(FILE_PATH));
  const newProfile = {
    id: req.file.filename,
    name,
    email,
    password,
    bio,
  };
  const newProfiles = [...profiles, newProfile];
  fs.writeFileSync(FILE_PATH, JSON.stringify(newProfiles));
  return res.status(201).json(newProfile);
};

const getProfile = (req, res) => {
  const { id } = req.params;
  const profiles = JSON.parse(fs.readFileSync(FILE_PATH));
  const person = profiles.find((profile) => profile.id === id);
  if (!person) return res.status(404).json({ error: { message: 'Perfil não encontrado' } });
  return res.status(200).json(person);
};

module.exports = {
  uploadOne,
  uploadMultiple,
  uploadProfile,
  getProfile,
};
