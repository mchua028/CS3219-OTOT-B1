# CS3219-OTOT-B1

Make sure you have nodejs, npm, express, nodemon, mongodb, mongoose, body-parser, CORS installed on your machine.

Clone repository and run:
nodemon index

The server is now running on:
http://localhost:8080/

The restapi is running on:
http://localhost:8080/restapi/

Endpoints:
GET:
http://localhost:8080/restapi/trainings
http://localhost:8080/restapi/trainings/[training._id]

POST:
http://localhost:8080/restapi/trainings

PUT:
http://localhost:8080/restapi/trainings/[training._id]

DELETE:
http://localhost:8080/restapi/trainings/[training._id]

mongoose schema of training:
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