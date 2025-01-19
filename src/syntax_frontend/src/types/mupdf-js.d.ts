declare module "mupdf-js" {
  class MuPDF {
    static load(buffer: Uint8Array): Promise<MuPDF>;
    numPages(): number;
    getText(pageIndex: number): string;
  }

  export { MuPDF };
}
