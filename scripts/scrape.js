var axios = require("axios");
var cheerio = require("cheerio");

// Scraping MPR news website
var scrape = function() {

  return axios.get("https://www.mprnews.org").then(function(res) {
    
    var $ = cheerio.load(res.data);

    var articles = [];

    $(".described churn").each(function(i, element) {
      
      var mainHeadline = $(this).children("h2").text().trim();
      var mainHeadlineUrl = $(this).children("a.href");
      var summaryArticle = $(this).children("p").text().trim();

      if (mainHeadline && url && summaryArticle) {
        var mainHeadlineClean = mainHeadline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var mainHeadlineUrlClean = mainHeadlineUrl.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var summaryArticleClean = summaryArticle.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        
        var dataScraped = {
          headline: mainHeadlineClean,
          headlineUrl: mainHeadlineUrlClean,
          summary: summaryArticleClean,
          url: "https://www.mprnews.org" + url
        };

        articles.push(dataScraped);
      }
    });
    return articles;
  });
};

module.exports = scrape;
