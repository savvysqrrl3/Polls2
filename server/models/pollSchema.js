var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
    title: { type: String, required: true },
    opt1: { type: String, required: true },
    opt2: { type: String, required: true },
    opt3: { type: String, required: true },
    opt4: { type: String, required: true },
    author: { type: String, required: true },
    votes1: { type: Number, default: 0 },
    votes2: { type: Number, default: 0 },
    votes3: { type: Number, default: 0 },
    votes4: { type: Number, default: 0 },
    created_at: { type: Date, required: true, default: Date.now }
});

var Poll = mongoose.model('Poll', PollSchema);