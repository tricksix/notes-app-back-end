/* eslint-disable indent */
/* eslint-disable eol-last */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/newline-after-import
const routes = require('./routes');
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.27.211',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);
    await server.start();
    // eslint-disable-next-line no-console
    console.log(`Server berjalan pada ${server.info.uri}`);
};
init();