/**
 * Mongoose model PureNumber.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

let mongoose = require("mongoose");

// Create a schema, with customized error messages.
let pureNumberSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: "`{PATH}` is required!",
        max: [42, "`{PATH}` ({VALUE}) exceeds the limit ({MAX})."],
        min: [1, "`{PATH}` ({VALUE}) is beneath the limit ({MIN})."]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create a model using the schema.
let PureNumber = mongoose.model("PureNumber", pureNumberSchema);

// Export the model.
module.exports = PureNumber;
