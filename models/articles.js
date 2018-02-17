const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
    title: {
        type:String,
        unique: true
    },
    url: String,
    date:{
        type: Date,
        default: Date.now
    },
    saved: Boolean
});

module.exports = mongoose.model("Articles", articlesSchema);