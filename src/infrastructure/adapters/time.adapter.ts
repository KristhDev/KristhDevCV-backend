import dayjs from 'dayjs';
import localeEn from 'dayjs/locale/en';
import localeEs from 'dayjs/locale/es';

/* Contracts */
import { TimeAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { Locale, TimeAdapterOptions } from '@infrastructure/interfaces';

export class TimeAdapter implements TimeAdapterContract {
    private readonly locales = {
        es: localeEs,
        en: localeEn
    }

    private readonly options: TimeAdapterOptions;
    private readonly defaultOptions: TimeAdapterOptions = {
        locale: 'es'
    }

    constructor(options?: TimeAdapterOptions) {
        this.options = { ...this.defaultOptions, ...options };
        this.setLocale(this.options.locale!);
    }

    /**
     * Returns the formatted date string.
     * 
     * @param {Date | string | number} date - The date to be formatted.
     * @param {string} format - The format to use for the date string.
     * @return {string} The formatted date string.
     */
    public format(date: Date | string | number, format: string): string {
        return dayjs(date).format(format);
    }

    /**
     * Sets the locale for the adapter.
     * 
     * @param {Locale} locale - The locale to use for the adapter.
     * @return {void}
     */
    public setLocale(locale: Locale): void {
        dayjs.locale(this.locales[locale]);
    }
}