/**
 * Home routes.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

let router     = require("express").Router();
let PureNumber = require("../models/PureNumber");

/**
 * Finds all pure numbers in the database and renders them.
 */
router.route("/")
    .get(function(req, res) {
        // FROM THE DOCS: Mongoose queries are not promises. However, they do have a .then() function for
        // yield and async/await. If you need a fully-fledged promise, use the .exec() function.
        PureNumber.find({}).exec()
            .then (function(doc) {
                // TODO: Lazy programmer! I don't transform the document to a view model...
                res.render("home/index", { pureNumbers: doc });
            })
            .catch (function(err) {
                res.render("home/index", {
                    // DIRTY(?): Use the flash partial to view the error message.
                    flash: {type: "danger", text: err.message},
                    pureNumbers: []
                });
            });
    });

/**
 * Crates and saves a pure number in the database.
 */
router.route("/create")
    .get(function(req, res) {
        res.render("home/create", {value: undefined});
    })
    .post(function(req, res, next) {
        // Create a new pure number...
        let pureNumber = new PureNumber({
            value: req.body.value
        });

        // ...save the number to the database...
        pureNumber.save()
            .then(function() {
                // ...and redirect and show a message...
                req.session.flash = {type: "success", text: "The pure number saved successfully."};
                res.redirect("/");
            })
            .catch(function(err) {
                // ...or, if an validation error occurred, view the form and an error message.
                if (err.errors.value.name === "ValidatorError") {
                    // We handle the validation error!
                    return res.render("home/create", {
                        validationErrors: [err.errors.value.message],
                        value: req.body.value
                    });
                } else if (err.errors.value.name === "CastError") {
                    // If it's a cast error we considers it's a bad request!
                    // (Maybe not the smartest thing to do, but WTF, we need to learn
                    // to what to do if we want to change the status of the response.)
                    err.status = 400;
                }

                // Let the middle ware handle any errors but ValidatorErrors.
                next(err);
            });
    });

// Exports.
module.exports = router;
