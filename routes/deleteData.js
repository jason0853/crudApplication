module.exports = function(app, conn) {
    app.post('/delete/:id', function(req, res) {
        var id = req.params.id;
        var sql = 'DELETE FROM list WHERE id=?';

        conn.query(sql, [id], function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });
};
