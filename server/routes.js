/**
 * Main application routes
 */

'use strict';

function addRoutes(app) {
    // Insert routes below
    app.use('/api/sample', require('./api/sample'));
    //app.use('/auth', require('./auth').default);

    app.use('/*', (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = {
    addRoutes
};