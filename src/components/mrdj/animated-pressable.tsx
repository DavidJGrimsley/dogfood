import type { ReactNode } from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedPressableBase = Animated.createAnimatedComponent(Pressable);

interface AnimatedPressableProps {
  children: ReactNode;
  onPress?: () => void;
  className?: string;
}

export function AnimatedPressable({ children, onPress, className }: AnimatedPressableProps) {
  const pressed = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.97 : 1, { duration: 120 }) }],
  }));

  return (
    <AnimatedPressableBase
      className={className}
      onPress={onPress}
      onPressIn={() => {
        pressed.value = 1;
      }}
      onPressOut={() => {
        pressed.value = 0;
      }}
      style={animatedStyle}
    >
      {children}
    </AnimatedPressableBase>
  );
}
