var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {

    getAll: function (req, res) {
        // console.log(1, "arrived at Polls.js")
        Poll.find({}, function (err, polls) {
            // console.log(2)
            res.json(polls);
            // console.log(3);
        })
    },


    new: function (req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newPoll = new Poll(req.body);
        // console.log(4, "Before we save...", newPoll)
        newPoll.save(function (err) {
            if (err) {
                console.log('something went wrong when creating new Poll');
                return res.json();

            }
            else {
                console.log(5, "Poll added to database:", newPoll)
                return res.json();
            }
        })
    },

    getOne: function (req, res) {
        console.log("Finding poll...")
        Poll.findById(req.params.id, function (err, poll) {
            if (err) {
                console.log('Could not find poll by id.');
                res.json(err);

            }
            else {
                console.log(poll)
                res.json(poll);
            }
        })
    },

    destroy: function (req, res, id) {
        console.log(1, "Removing poll...")
        Poll.findByIdAndRemove(req.params.id, function (err) {
            console.log(2)
            if (err) {
                console.log('something went wrong when deleting poll');
                res.json(err);

            }
            else {
                console.log(5, "Poll deleted from database:")
                Poll.find({}, function (err, polls) {
                    // console.log(2)
                    res.json(polls);
                    // console.log(3);
                })
            }
        })
    },

    update: function (req, res) {
        console.log(1, "Updating item...")
        Poll.findById(req.params.id, function (err, poll) {
            if (err) {
                console.log('Could not find item by id.');
                res.json(err);

            }
            else {
                console.log(2, req.body.poll)
                poll.votes1 = req.body.poll.votes1;
                poll.votes2 = req.body.poll.votes2;
                poll.votes3 = req.body.poll.votes3;
                poll.votes4 = req.body.poll.votes4;
                console.log(poll);
                poll.save(function (err) {
                    if (err) {
                        console.log('Could not save updates to Poll');
                        return res.json();
        
                    }
                    else {
                        console.log(3, "Poll updates successfully saved"); 
                            return res.json(poll);
                    }
                })                
            }
        })
    },

    // closing curly brace: don't paste over!
}

