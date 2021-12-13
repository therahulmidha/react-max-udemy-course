import * as logger from 'winston';
import { Request, Response, NextFunction } from 'express';
import messages from '../util/messages';
export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    // Log the exception
    logger.error(err.message);

    // incorrect json format found in request body
    if (err.message.includes("Unexpected token") || err.message.includes("JSON")) {
        return res.status(500).json({
            message: messages.INCORRECT_REQUEST_BODY_DATA,
            data: null
        });
    }

    return res.status(500).json({
        message: messages.INTERNAL_SERVER_ERROR,
        data: null
    });
}