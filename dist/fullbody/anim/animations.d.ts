import { Pose } from './pose';
export declare const ANIMATIONS: Record<string, Pose[]>;
export declare type AnimationName = keyof typeof ANIMATIONS;
export declare const ANIMATION_NAMES: string[];
export declare function registerAnimation(key: string, frames: Pose[]): void;
