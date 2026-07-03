import { ColorPair } from './types';
export declare const OUTLINE: string;
export declare function skinPair(tone: string): ColorPair;
export declare function clothingPair(color: string): ColorPair;
export declare function registerSkinTone(key: string, pair: ColorPair): void;
export declare function registerClothingColor(key: string, pair: ColorPair): void;
