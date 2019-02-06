var dataBase = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return dataBase.Headline.create(articles);
      })
      .then(function(dataBaseHeadline) {
        if (dataBaseHeadline.length === 0) {
          res.json({
            message: "No new articles."
          });
        }
        else {
          res.json({
            message: " " + dataBaseHeadline.length + " articles added."
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "All articles retrieved."
        });
      });
  }
};
