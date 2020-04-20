
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
module.exports.connection = mongoose.connect(
    process.env.DATABASE_URI,
     {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify : false
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});