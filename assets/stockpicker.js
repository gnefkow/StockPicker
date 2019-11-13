


// DOM 
var displaySymbolEL = document.getElementById("displaySymbol");






// ajax call
var queryURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=";
var stock = "tsla";
var apiKey = "f32d87c654mshdfbb3b014b69bf3p103866jsnd3684b98602f";

var settings = {
	"async": true,
	"crossDomain": true,
	"url": queryURL + stock,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": apiKey
	}
}

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var stockSymbol = response.symbol;
  console.log(stockSymbol);

  var quoteType = response.price.quoteType;
  console.log(`Quote type is: ${quoteType}`);

  var regularMarketChangePercentFmt = response.price.regularMarketChangePercent.fmt;
  var regularMarketChangePercentRaw = response.price.regularMarketChangePercent.raw;
  console.log(regularMarketChangePercentFmt);

  var teslaChange = regularMarketChangePercentFmt;
  console.log(`var teslaChange ${teslaChange}`);

  var newStock = document.createElement("div");
  newStock.textContent = teslaChange;
  displaySymbolEL.appendChild(newStock);

});

  
