// @strict: true

declare const a: number | undefined;
const aa = a?.toString();
const ab = a?.['toString']?.();

declare const b: ((v: any) => string) | undefined

const ba = b?.(1);
const bb = b?.``
