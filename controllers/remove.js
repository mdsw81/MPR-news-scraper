var dataBase = require("../models");

module.exports = {
  removeDataBase: function(req, res) {
    dataBase.Headline.remove({})
      .then(function() {
        return dataBase.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
