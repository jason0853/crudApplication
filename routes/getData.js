module.exports = function(app, conn) {
    app.get(['/', '/:id'], function(req, res) {
        var id = req.params.id;
        var sql = 'SELECT * FROM list';

        conn.query(sql, function(err, allData) {
            if (err) {
                console.log(err);
            } else {
                if (!id) {
                    res.render('index', { id: undefined, data: allData });
                } else {
                    var sql = 'SELECT * FROM list WHERE id=?';
                    conn.query(sql, [id], function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.render('index', { id: id, editData: data[0], data: allData });
                        }
                    });
                }
            }
        });
    });
};
