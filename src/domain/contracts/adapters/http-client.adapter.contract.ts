import { HttpClientOptions } from '@infrastructure/interfaces';

export abstract class HttpClientAdapterContract {
    public abstract get<T>(url: string, options?: HttpClientOptions): Promise<T>;
}