import { Locale } from '@infrastructure/interfaces';

export abstract class TimeAdapterContract {
    public abstract format(date: Date | string | number, format: string): string;
    public abstract setLocale(locale: Locale): void;
}