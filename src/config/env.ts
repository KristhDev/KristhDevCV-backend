import dotenv from 'dotenv';
dotenv.config();

export const env = {
    APP_ENV: process.env.APP_ENV!,
    LOGTAIL_TOKEN: process.env.LOGTAIL_TOKEN!,
    PORT: process.env.PORT!,
    PORTFOLIO_API_URL: process.env.PORTFOLIO_API_URL!,  
}