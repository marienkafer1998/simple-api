module.exports = function (app, db) {
    // app.get('/books', (req, res) => {
    //     res.send('Response')
    // });
    app.post('/books', (req, res) => {
        // Здесь будем создавать заметку.
        res.send('Hello')
    });
};
