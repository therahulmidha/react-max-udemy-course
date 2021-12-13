import * as mongoose from 'mongoose';
import appSettings from '../appSettings';
const connString: string = <string>appSettings.CONNECTION_STRING;
import * as logger from "winston";

export default async function initDb() {
    try {
        await mongoose.connect(connString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        logger.info(`MongoDb Server started`)
    } catch (error) {
        logger.error(error)
    }
}