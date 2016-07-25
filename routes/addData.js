module.exports = function(app, conn) {
    app.post('/', function(req, res) {
        var name = req.body.name;
        var age = req.body.age;
        var job = req.body.job;
        var sql = 'INSERT INTO list (name, age, job) VALUES (?, ?, ?)';

        conn.query(sql, [name, age, job], function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });
};
