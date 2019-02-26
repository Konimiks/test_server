const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

require('./routes').addRoutes(app);

app.listen(process.env.PORT || 8888, function() {
    console.log(`Server is up and running on port ` + process.env.PORT);
});