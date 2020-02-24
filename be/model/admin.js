/** Model File for the DocType collection */

/**
 * Import your modules here
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

/** Define a Schema here*/
const DocType = new Schema({
    name: String,
    fields: [{ type: Schema.Types.ObjectId, ref: 'docTypeFieldDefination' }],
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    nameRule: [{ type: Schema.Types.ObjectId, ref: 'docTypeFieldDefination' }],
    createdBy: { type:String, default: '' },
    updatedBy: { type: String, default: '' },
    isDeleted: { type: Boolean, default: false }
});

DocType.plugin(timestamps);

/** export a model */
module.exports = DocType;
