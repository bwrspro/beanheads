import { ComponentType } from 'react';
export interface ColorPair {
    base: string;
    shade: string;
}
export interface PieceProps {
    color: ColorPair;
}
export interface LimbProps {
    skin: ColorPair;
}
export declare type GraphicProps = PieceProps;
export interface TopSet {
    Torso: ComponentType<PieceProps>;
    Sleeve: ComponentType<PieceProps>;
}
export interface BottomsSet {
    Leg: ComponentType<PieceProps>;
}
export interface ShoeSet {
    Shoe: ComponentType<PieceProps>;
}
