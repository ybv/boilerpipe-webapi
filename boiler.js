exports.respondToURL = function(req, res) {
	var Boilerpipe = require('boilerpipe');
	var read = require('node-readability');
	
	read(decodeURIComponent(req.params.url), function(err, article, meta) {
  var resp = article.title;

  var boilerpipe = new Boilerpipe({
    extractor: Boilerpipe.Extractor.Article,
    url: decodeURIComponent(req.params.url)
  });
   boilerpipe.getText(function(err, text) {
    res.send({reqURL:req.params.url, clearText: text, articleTile:resp});
  });
});
	    
};