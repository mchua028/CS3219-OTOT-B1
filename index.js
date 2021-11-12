// Import express
let express = require('express')

var cors = require('cors')
// Initialize the app
let app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
  }

  app.options('*', cors())

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/traininghub', { useNewUrlParser: true});
var db = mongoose.connection;
// check db connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


// Setup server port
var port = process.env.PORT || 8080;
// Import routes
let apiRoutes = require("./api-routes")
// Use Api routes in the App
app.use('/restapi', apiRoutes)

// Send message for default URL
app.get('/', cors(corsOptions),(req, res) => res.send('Hello World from traininghub'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running traininghub on port " + port);
});