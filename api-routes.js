// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to traininghub!'
    });
});

// Import training controller
var trainingController = require('./trainingController');
// Training routes
router.route('/trainings')
    .get(trainingController.index)
    .post(trainingController.new);
router.route('/trainings/:training_id')
    .get(trainingController.view)
    .put(trainingController.update)
    .delete(trainingController.delete);

// Export API routes
module.exports = router;