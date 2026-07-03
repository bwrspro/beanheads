import React from 'react';
import { AvatarProps } from '../components/Avatar';
import { Pose } from './anim/pose';
export interface FullBeanHeadProps extends Omit<AvatarProps, 'clothing'> {
    /** top variant — key into topMap ('shirt' | 'vneck' | 'tankTop' | 'jacket' | any registered key) */
    clothing?: string;
    /** torso decal — key into graphicMap ('star' | any registered key); unknown/absent = no decal */
    topGraphic?: string;
    /** bottoms variant — key into bottomsMap ('jeans' | 'shorts' | registered) */
    bottoms?: string;
    /** trouser color — key into BOTTOMS_COLORS (registered keys included) */
    bottomsColor?: string;
    /** shoe variant — key into shoeMap ('sneakers' | registered) */
    shoes?: string;
    /** shoe color — key into SHOE_COLORS (registered keys included) */
    shoeColor?: string;
    /** show the BeanHead background circle (debug A/B) */
    showCircle?: boolean;
    /** current animation-frame pose (rotations + bob); omit for a static figure */
    pose?: Pose;
}
export declare function FullBeanHead({ clothing, topGraphic, bottoms, bottomsColor, shoes, shoeColor, showCircle, pose, ...head }: FullBeanHeadProps): React.JSX.Element;
