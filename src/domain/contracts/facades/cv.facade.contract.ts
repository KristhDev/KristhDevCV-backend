export abstract class CVFacadeContract {
    public abstract generateCV(): Promise<Uint8Array<ArrayBufferLike>>
}