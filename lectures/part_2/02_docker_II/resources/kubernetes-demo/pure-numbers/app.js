/**
 * Starting point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

// Setup ------------------------------------------------------------
let express      = require("express");
let path         = require("path");
let session      = require("express-session");
let bodyParser   = require("body-parser");
let exphbs       = require("express-handlebars");

let mongoose     = require("./config/mongoose.js");

let app  = express();
let port = process.env.PORT || 5000;

// Configuration ----------------------------------------------------

// Connect to the database.
mongoose();

// View engine.
app.engine(".hbs", exphbs({
    defaultLayout: "default",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    name:   "ptJn3Dn4QZq5EizToXTa2lzx1gT43r",
    secret: "9su2gS21MDIZoRaZKTNjll7SFhKiMB",
    saveUninitialized: false,
    resave: false
}));

// Flash messages - survives only a round trip.
app.use(function(req, res, next) {
    res.locals.flash = req.session.flash;
    delete req.session.flash;

    next();
});

// Routes.
app.use("/", require("./routes/home.js"));

// 404 catch-all handler.
app.use(function(req, res, next) {
    res.status(404);
    res.render("error/404");
});

// 400 handler.
app.use(function(err, req, res, next) {
    if (err.status !== 400) {
        return next(err);
    }

    console.error(err.stack);
    res.status(400).render("error/400");
});

// 500 handler.
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render("error/500");
});

// Launch -----------------------------------------------------------
app.listen(port, function() {
    console.log("Express started on http://localhost:" + port);
    console.log("Press Ctrl-C to terminate...");
});
