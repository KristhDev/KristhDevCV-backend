import dotenv from 'dotenv';
dotenv.config();

export const env = {
    APP_ENV: process.env.APP_ENV!,
    APP_PORT: process.env.APP_PORT!,
    APP_TOKEN: process.env.APP_TOKEN!,
    LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN!,
    LOGTAIL_SOURCE_URL: process.env.LOGTAIL_SOURCE_URL!,
    PORTFOLIO_API_URL: process.env.PORTFOLIO_API_URL!,  
}