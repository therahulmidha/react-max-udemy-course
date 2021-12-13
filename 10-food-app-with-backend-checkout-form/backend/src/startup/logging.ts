import * as  morgan from 'morgan';
import * as winston from "winston";
import { Express } from 'express';

export default async function (app: Express) {
    const date = new Date();
    const { transports, format, createLogger } = winston;

    const fileName = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "-";
    const logger = createLogger({
        transports: [
            new transports.File({
                filename: `./logs/${fileName}-ERROR.log`,
                level: 'error',
                format: format.combine(format.timestamp(), format.json())
            }),
            new transports.File({
                filename: `./logs/${fileName}-INFO.log`,
                level: 'info',
                format: format.combine(format.timestamp(), format.json())
            }),
            new transports.Console({
                level: 'error',
                format: format.combine(format.timestamp(), format.json())
            }),
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), format.json())
            }),
        ]
    });

    winston.add(logger);

    // Exception logging
    process.on('uncaughtException', (ex: Error) => {
        logger.error(ex.message, ex);
    });

    process.on('unhandledRejection', (ex: Error) => {
        logger.error(ex.message, ex);
    });

    // Requests logging in dev envt.
    if (app.get("env") === "development") {
        app.use(morgan('dev'));
    }
}