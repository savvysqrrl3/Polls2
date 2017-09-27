var mongoose = require('mongoose');
var polls = require('../controllers/polls.js');

module.exports = function(app){
    
    app.post('/polls', (req, res, next)=>{
        polls.new(req, res)
      });

    app.get('/listpolls', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        polls.getAll(req, res) 
    });
    
    app.get('/polls/:id', function(req, res, next) {
        polls.getOne(req, res)
    });

    app.delete('/polls/:id', function(req, res, next) {
        polls.destroy(req, res)
    });


    app.put('/polls/:id', function(req, res, next) {
        items.update(req, res)
    });
    

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

