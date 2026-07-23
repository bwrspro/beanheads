import { ColorPair } from './types';
export declare const BOTTOMS_COLORS: Record<string, ColorPair>;
export declare const SHOE_COLORS: Record<string, ColorPair>;
export declare function registerBottomsColor(key: string, pair: ColorPair): void;
export declare function registerShoeColor(key: string, pair: ColorPair): void;
export declare function bottomsHex(key: string): ColorPair;
export declare function shoeHex(key: string): ColorPair;
