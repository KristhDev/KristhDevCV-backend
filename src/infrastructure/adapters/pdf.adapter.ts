import puppeteer, { Browser } from 'puppeteer';
import puppeteerCore, { Browser as BrowserCore } from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

import { env } from '@config/env';

import { PDFAdapterContract } from '@domain/contracts/adapters';

export class PDFAdapter implements PDFAdapterContract {
    private async launchBrowser (): Promise<Browser | BrowserCore> {
        if (env.APP_ENV === 'production') {
            const chromiumPath = await chromium.executablePath();

            return await puppeteerCore.launch({
                args: chromium.args,
                executablePath: chromiumPath
            });
        }

        return await puppeteer.launch({
            args: [ '--no-sandbox', '--disable-setuid-sandbox' ],
            headless: true
        });
    }

    public async generate(htmlContent: string): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            const browser = await this.launchBrowser();
            const page = await browser.newPage();

            await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
            const height = await page.evaluate(() => document.documentElement.scrollHeight);

            const pdfWidth = '210mm';
            const pdfHeight = `${ height }px`;

            const pdfBuffer = await page.pdf({ printBackground: true, height: pdfHeight, width: pdfWidth });
            await browser.close();

            return pdfBuffer;
        } 
        catch (error) {
            throw error;
        }
    }
}