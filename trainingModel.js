var mongoose = require('mongoose');
// Setup schema
var trainingSchema = mongoose.Schema({
    name: String,
    distance: String,
    duration: String,
    calories: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Training model
var Training = module.exports = mongoose.model('training', trainingSchema);
module.exports.get = function (callback, limit) {
    Training.find(callback).limit(limit);
}