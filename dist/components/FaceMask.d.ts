import React from 'react';
import { colors as themeColors } from '../theme';
interface FaceMaskProps {
    color: keyof typeof themeColors.clothing;
}
export declare const FaceMask: ({ color }: FaceMaskProps) => React.JSX.Element;
export {};
