const { json } = require('express');

function configure(app) {
    app.use(json());
    app.use('/', require('./index.router'));

    return app;
}

function initServer(app, port) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = {
    configure,
    initServer
};