var dataBase = require("../models");

module.exports = {
  get: function(req, res) {
    dataBase.Note.get({ _headlineId: req.params.id }).then(function(dataBaseNote) {
      res.json(dataBaseNote);
    });
  },
  create: function(req, res) {
    dataBase.Note.create(req.body).then(function(dataBaseNote) {
      res.json(dataBaseNote);
    });
  },
  remove: function(req, res) {
    dataBase.Note.remove({ _id: req.params.id }).then(function(dataBaseNote) {
      res.json(dataBaseNote);
    });
  }
};
