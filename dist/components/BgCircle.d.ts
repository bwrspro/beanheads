import React from 'react';
import { colors } from '../theme';
export interface BgCircleProps {
    circleColor: keyof typeof colors.bgColors;
}
export declare const BgCircle: ({ circleColor }: BgCircleProps) => React.JSX.Element;
