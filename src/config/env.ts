import dotenv from 'dotenv';
dotenv.config();

export const env = {
    LOGTAIL_TOKEN: process.env.LOGTAIL_TOKEN!,
    PORTFOLIO_API_URL: process.env.PORTFOLIO_API_URL!,  
    PORT: process.env.PORT!,
}