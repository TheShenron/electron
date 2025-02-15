// src/types/global.d.ts
export { };

declare global {
    interface Window {
        versions: {
            node: () => string;
            chrome: () => string;
            electron: () => string;
        };
    }
}
