import puppeteer, { Browser, PuppeteerError } from 'puppeteer';
import puppeteerCore, { Browser as BrowserCore } from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

/* Env */
import { env } from '@config/env';

/* Contracts */
import { PDFAdapterContract } from '@domain/contracts/adapters';

/* Errors */
import { PDFError } from '@domain/errors';

export class PDFAdapter implements PDFAdapterContract {

    /**
     * Launches a browser instance.
     *
     * @return {Promise<Browser | BrowserCore>} The launched browser instance.
     */
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

    /**
     * Generates a PDF from the given HTML content.
     *
     * @param {string} htmlContent The HTML content to generate the PDF from.
     * @return {Promise<Uint8Array<ArrayBufferLike>>} The generated PDF.
     */
    public async generate(htmlContent: string): Promise<Uint8Array<ArrayBufferLike>> {
        try {
            const browser = await this.launchBrowser();
            const page = await browser.newPage();

            await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
            const height = await page.evaluate(() => document.body.scrollHeight);

            const pdfWidth = '210mm';
            const pdfHeight = `${ height + 16 }px`;
            console.log({ height, pdfHeight });

            const pdfBuffer = await page.pdf({ printBackground: true, height: pdfHeight, width: pdfWidth });
            await browser.close();

            return pdfBuffer;
        } 
        catch (error) {
            const puppeteerError = error as PuppeteerError;
            throw new PDFError(puppeteerError.message);
        }
    }
}