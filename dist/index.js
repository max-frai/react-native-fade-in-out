import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
const DEFAULT_DURATION = 300;
const FadeInOut = ({ children, visible, duration = DEFAULT_DURATION, rotate, scale, style, useNativeDriver = true, onAnimationFinished, }) => {
    const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: duration,
            useNativeDriver: useNativeDriver,
        }).start(() => {
            if (onAnimationFinished) {
                onAnimationFinished(visible);
            }
        });
    }, [visible]);
    const transform = [{ perspective: 1000 }];
    if (scale) {
        transform.push({ scale: fadeAnim });
    }
    if (rotate) {
        transform.push({
            rotate: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
            }),
        });
    }
    return (React.createElement(Animated.View, { style: { ...style, opacity: fadeAnim, transform } }, children));
};
export default FadeInOut;
