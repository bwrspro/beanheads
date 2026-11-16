import { ComponentType } from 'react';
import { GraphicProps } from '../types';
export declare const graphicMap: Record<string, ComponentType<GraphicProps>>;
export declare function registerGraphic(key: string, graphic: ComponentType<GraphicProps>): void;
export declare function imageGraphic(href: string): ComponentType<GraphicProps>;
