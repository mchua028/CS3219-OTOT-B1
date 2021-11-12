// Import training model
Training = require('./trainingModel');

// Handle index actions
exports.index = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    Training.get(function (err, trainings) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Trainings retrieved successfully!",
            data: trainings
        });
    });
};

// Handle create training
exports.new = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    var training = new Training();
    training.name = req.body.name?req.body.name:training.name; 
    training.distance = req.body.distance?req.body.distance:training.distance;
    training.duration = req.body.duration?req.body.duration:training.duration;
    training.calories = req.body.calories?req.body.calories:training.calories;
// save the training and check for errors
    training.save(function (err) {
        //if (err)
            //res.json(err);
            res.json({
                message: 'New training created!',
                data: training
            });
        
    });
};

// Handle retrieve training info
exports.view = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    Training.findById(req.params.training_id, function (err, training) {
        if (err)
            res.send(err);
        else if(training==null)
            res.send('this training has been deleted... cannot retrieve');
        else{
        res.json({
            message: 'Retreiving trainings list...',
            data: training
        });
    }
    });
};

// Handle update training info
exports.update = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        Training.findById(req.params.training_id, function (err, training) {
        if (err)
            res.send(err);
        else if(training==null)
            res.send('this training has been deleted... cannot edit');
        else{
        training.name = req.body.name?req.body.name:training.name; 
        training.distance = req.body.distance?req.body.distance:training.distance;
        training.duration = req.body.duration?req.body.duration:training.duration;
        training.calories = req.body.calories?req.body.calories:training.calories;
// save the training and check for errors
        training.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Training info for ' + req.params.training_id+ ' updated',
                data: training
            });
        });
    }
    });
};

// Handle delete training
exports.delete = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    Training.findById(req.params.training_id, function (err, training) {
        if (err)
            res.send(err);
        else if(training==null)
            res.send('this training has already been deleted...');
        else{
        Training.remove({_id: req.params.training_id}, function (err, training) {
            if (err)
                res.send(err);
            else if(training==null)
                res.send('this training has already been deleted...');
            else{
                res.json({
                    status: "success",
                    message: 'Training '+req.params.training_id+' deleted'
                });
            }
        });
    }
    });

    
};