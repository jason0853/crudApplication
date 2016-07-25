module.exports = function(app, conn) {
    app.post('/:id', function(req, res) {
        var id = req.params.id;
        var name = req.body.editName;
        var age = req.body.editAge;
        var job = req.body.editJob;
        var sql = 'UPDATE list SET name=?, age=?, job=? WHERE id=?';

        conn.query(sql, [name, age, job, id], function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });
};
