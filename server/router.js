var path = require('path');
/**
 * Created by Valentino on 13.12.2015..
 */
module.exports = function (app) {

    app.route('/*')
        .get(function(req, res) {
            res.sendFile(path.resolve(app.get('views') + '/index.html'));
        });
};