import * as dotenv from 'dotenv';
dotenv.config();
export default {
    "appName": "Calendar Service",
    "PORT": process.env.PORT,
    "CONNECTION_STRING": process.env.CONNECTION_STRING,
    "ACCESS_TOKEN_SECRET": process.env.ACCESS_TOKEN_SECRET,
    "REFRESH_TOKEN_SECRET": process.env.REFRESH_TOKEN_SECRET,
    "BASE_URL": process.env.BASE_URL,
    "DEFAULT_USER_ID": "",
}
