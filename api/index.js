const apiBooks = require('./books');
module.exports = function(app, db) {
    apiBooks(app, db);
    // other routes
};