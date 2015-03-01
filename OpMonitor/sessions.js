var crypto = require('crypto');

/* The SessionsDAO must be constructed with a connected database object */
function SessionsDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof SessionsDAO)) {
        console.log('Warning: SessionsDAO constructor called without "new" operator');
        return new SessionsDAO(db);
    }

    var sessions = db.collection("session");

    }

module.exports.SessionsDAO = SessionsDAO;
