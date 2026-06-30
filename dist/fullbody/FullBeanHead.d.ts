import React from 'react';
import { AvatarProps } from '../components/Avatar';
import { Pose } from './anim/pose';
export interface FullBeanHeadProps extends AvatarProps {
    /** trouser style */
    bottoms?: 'jeans' | 'shorts';
    /** trouser color key: denim | black | khaki | red */
    bottomsColor?: string;
    /** sneaker color key: purple | white | black | red */
    shoeColor?: string;
    /** show the BeanHead background circle (debug A/B) */
    showCircle?: boolean;
    /** current animation-frame pose (rotations + bob); omit for a static figure */
    pose?: Pose;
}
export declare function FullBeanHead({ bottoms, bottomsColor, shoeColor, showCircle, pose, ...head }: FullBeanHeadProps): React.JSX.Element;
