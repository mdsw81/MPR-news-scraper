var dataBase = require("../models");

module.exports = {
  getAll: function(req, res) {
    dataBase.Headline
      .getAll(req.query)
      .sort({ date: -1 })
      .then(function(dataBaseHeadline) {
        res.json(dataBaseHeadline);
      });
  },
  delete: function(req, res) {
    dataBase.Headline.remove({ _id: req.params.id }).then(function(dataBaseHeadline) {
      res.json(dataBaseHeadline);
    });
  },
  update: function(req, res) {
    dataBase.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dataBaseHeadline) {
      res.json(databaseHeadline);
    });
  }
};
