import * as logger from 'winston';
import appSettings from '../appSettings';
import * as express from 'express';
import error from '../middleware/error';
import * as cors from 'cors';
// import * as openapi from 'express-openapi';
// import * as swaggerUi from 'swagger-ui-express';
import { initSwaggerMiddlware } from '../middleware/swagger';
import { resolve, join } from 'path';
import { User } from '../model/User';
import { MealRouter } from '../routes/meal';
import { OrderRouter } from '../routes/order';
// import * as OpenApiValidator from 'express-openapi-validator';
const DEFINE_ROUTES_VIA_OPENAPI = false;
export default async function (app: express.Express) {
    const PORT = parseInt(appSettings.PORT ?? "3000");
    // allow cross origin resource sharing
    // so that front end app on another server can access our backend 
    app.use(cors());

    app.use(express.json());

    // Route endpoints
    app.get('/', (req, res) => {
        res.end('Welcome to Node app');
    });

    if (DEFINE_ROUTES_VIA_OPENAPI) {
        initSwaggerMiddlware(app, join(__dirname, '../'), () => {
            app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
                if (err) {
                    const errStr = err.message || err.toString();
                    const errMsg = { message: errStr, extra: err };
                    if (res.statusCode < 400) {
                        res.status(500);
                    }
                    res.json(errMsg);
                }
            });

        });
    }
    else {
        app.use('/meal', MealRouter);
        app.use('/order', OrderRouter);
    }

    // app.post('/signup', )
    // app.use('/api/user', require('../routes/api/userRoute'));

    // app.use(
    //     "/api-documentation",
    //     swaggerUi.serve,
    //     swaggerUi.setup(undefined, {
    //         swaggerOptions: {
    //             url: "http://localhost:3030/api-docs",
    //         },
    //     })
    // );

    // middleware for handling internal server error
    app.use(error);

    // Middleware for unknown endpoints
    app.use(function (req, res, next) {
        return res.status(404).send({
            message: 'Route ' + req.url + ' Not found.',
            data: null
        });
    });

    // let user = await User.findOne({ email: 'user@mailinator.com' });
    // if (!user) {
    //     user = await new User({
    //         email: 'user@mailinator.com',
    //         firstName: 'Rahul',
    //         lastName: 'Midha',
    //         password: '123',
    //         events: []
    //     }).save();
    // }
    // appSettings.DEFAULT_USER_ID = user._id.toString();

    app.listen(PORT, () => {
        logger.info(`Server started on PORT: ${PORT}`);
    });
}