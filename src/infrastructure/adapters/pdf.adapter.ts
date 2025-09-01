import puppeteer, { Browser } from 'puppeteer';
import puppeteerCore, { Browser as BrowserCore } from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

import { env } from '@config/env';

export class PDFAdapter {
    private async launchBrowser (): Promise<Browser | BrowserCore> {
        if (env.APP_ENV === 'production') {
            const chromiumPath = await chromium.executablePath();

            return await puppeteerCore.launch({
                args: chromium.args,
                executablePath: chromiumPath,
            });
        }

        return await puppeteer.launch({ headless: true });
    }

    public async generate(htmlContent: string): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            const browser = await this.launchBrowser();
            const page = await browser.newPage();

            await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
            const pdfBuffer = await page.pdf({ format: 'A4' });

            await browser.close();

            return pdfBuffer;
        } 
        catch (error) {
            throw error;
        }
    }
}