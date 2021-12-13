
import * as express from 'express';
const app = express();
import logging from './startup/logging';
import httpServer from './startup/httpServer';
import initDb from './startup/db';
import initSequelizeDb from './startup/db-pg';

(async () => {
    // initialize Logger 
    await logging(app);

    // initialize mongo db
    await initDb();
    // await initSequelizeDb();

    // initialize http Server
    await httpServer(app);
})();
