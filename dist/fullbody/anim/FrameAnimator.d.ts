import React from 'react';
import { Pose } from './pose';
import { FullBeanHeadProps } from '../FullBeanHead';
export declare function FrameAnimator({ frames, fps, playing, ...props }: {
    frames: Pose[];
    fps?: number;
    playing?: boolean;
} & Omit<FullBeanHeadProps, 'pose'>): React.JSX.Element;
