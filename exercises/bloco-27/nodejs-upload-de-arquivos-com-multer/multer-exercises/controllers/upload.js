const uploadOne = (req, res) => {
  if (req.validFileError) return res.status(req.validFileError.status).json(req.validFileError.error);
  return res.status(200).json({ body: req.body, file: req.file })
};

module.exports = {
  uploadOne,
};
