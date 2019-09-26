const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {type: String, required: [true, 'Article title is required'], },
    description: {type: String, required: [true, 'Article content is required']},
    created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('News', newsSchema);