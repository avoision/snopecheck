console.log('heya123');

var text = $('._6m6 a').first().text();
console.log("I found: " + text);

var urlprefix = 'http://www.snopes.com/search/?q=';
// var urlprefix = 'https://www.google.com/search?q=';

var searchURL = urlprefix + text;


// ===========================
// Snopes
// ===========================
	// #search-box
		// .search-results
			// .item 
				// .text
					// h3.title
						// spans


console.log('--------------------------- end of line ---------------------------  ');