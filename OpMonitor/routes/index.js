var SessionHandler = require('./session')
  , ContentHandler = require('./content')
  , ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {

    var sessionHandler = new SessionHandler(db);
    var contentHandler = new ContentHandler(db);

    // Middleware to see if a user is logged in
    //app.use(sessionHandler.isLoggedInMiddleware);

    // The main page of the blog
    	app.get('/', contentHandler.displayMainPage);
    	app.post('/FirstPage', contentHandler.displayFirstPage);
	// app.post('/', sessionHandler.displayWelcome);
 //    // Login form
     app.get('/media', contentHandler.displayMediaPage);
 //    app.post('/media', sessionHandler.displayWelcome);

     app.get('/search', contentHandler.displaySearchPage);
 //    app.post('/search', sessionHandler.displayWelcome);

     app.get('/messenger', contentHandler.displayMessengerPage);
 //    app.post('/messenger', sessionHandler.displayWelcome);

     app.get('/mail', contentHandler.displayMailPage);
 //    app.post('/mail', sessionHandler.displayWelcome);

     app.get('/revenue', contentHandler.displayRevenuePage);
 //    app.post('/revenue', sessionHandler.displayWelcome);

     app.get('/frontPage', contentHandler.displayFrontPage);
 //    app.post('/frontPage', sessionHandler.displayWelcome);

     app.get('/flickr', contentHandler.displayFlickrPage);
 //    app.post('/flickr', sessionHandler.displayWelcome);

    app.use(ErrorHandler);
}
