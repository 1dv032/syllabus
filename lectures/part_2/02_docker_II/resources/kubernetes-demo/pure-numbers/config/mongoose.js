/**
 * Mongoose configuration.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

let mongoose = require("mongoose");

//const CONNECTION_STRING = "mongodb://localhost/purenumbers";

module.exports =  function() {
  let db = mongoose.connection.openUri(`mongodb://${process.env.DB_HOST}/pureNumbers`)
    .once('open', () => console.log('Good to go !'))
    .on('error', (error) => {
      console.warn('Warning', error);
    });

    // If the Node process ends, close the Mongoose connection.
    process.on("SIGINT", function() {
        db.connection.close(function() {
            console.log("Mongoose connection disconnected through app termination.");
            process.exit(0);
        });
    });

    return db;
};
