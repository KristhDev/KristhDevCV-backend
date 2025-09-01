export abstract class PDFAdapterContract {
    public abstract generate(htmlContent: string): Promise<Uint8Array<ArrayBufferLike>>;
}