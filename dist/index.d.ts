/// <reference types="react" />
import { ViewStyle } from "react-native";
export interface FadeInOutProps {
    visible: boolean;
    children?: any;
    duration?: number;
    rotate?: boolean;
    scale?: boolean;
    style?: ViewStyle;
    onAnimationFinished?: (visible: boolean) => void;
    useNativeDriver?: boolean;
}
declare const FadeInOut: ({ children, visible, duration, rotate, scale, style, useNativeDriver, onAnimationFinished, }: FadeInOutProps) => JSX.Element;
export default FadeInOut;
