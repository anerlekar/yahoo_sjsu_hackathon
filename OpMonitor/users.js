var bcrypt = require('bcrypt-nodejs')
	, MongoDb = require("mongodb")
	, fs = require("fs")
	, distance = require('google-distance-matrix');

/* The UsersDAO must be constructed with a connected database object */
function UsersDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof UsersDAO)) {
        console.log('Warning: UsersDAO constructor called without "new" operator');
        return new UsersDAO(db);
    }

    this.findFrontPage = function (callback) {
        db.stats.find(({"Property": "Media"}), function(err, user){
            callback(err, user);
        });
    }

        
}

module.exports.UsersDAO = UsersDAO;
