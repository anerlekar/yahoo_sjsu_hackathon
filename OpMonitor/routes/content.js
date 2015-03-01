var sanitize = require('validator').sanitize; // Helper to sanitize form input
var UsersDAO = require('../users').UsersDAO;

/* The ContentHandler must be constructed with a connected db */
function ContentHandler (db) {
    "use strict";
    var users = new UsersDAO(db);

    this.displayMainPage = function(req, res, next) {
        "use strict";
        
		return res.render("FirstPage");
		}
    
		this.displayFirstPage = function(req, res, next) {
        "use strict";
        
		return res.render("FirstPage");
		}

	
	this.displayMediaPage = function(req, res, next) {
        "use strict";

		return res.render("MediaPage");
    }

    this.displaySearchPage = function(req, res, next) {
        "use strict";

		return res.render("SearchPage");
    }

    this.displayFrontPage = function(req, res, next) {
        "use strict";
            return res.render("FrontPage");
    }

    this.displayMailPage = function(req, res, next) {
        "use strict";

		return res.render("MailPage");
    }

    this.displayFlickrPage = function(req, res, next) {
        "use strict";

		return res.render("FlickrPage");
    }

    this.displayRevenuePage = function(req, res, next) {
        "use strict";

		return res.render("RevenuePage");
    }

    this.displayMessengerPage = function(req, res, next) {
        "use strict";

		return res.render("MessengerPage");
    }
}

module.exports = ContentHandler;