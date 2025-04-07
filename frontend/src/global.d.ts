// src/globals.d.ts
export {};

declare global {
  interface Window {
    Module: any; // Replace 'any' with a more specific type if you have one.
  }
}
