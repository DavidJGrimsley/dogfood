import { Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface GestureCardProps {
  title: string;
  body: string;
}

export function GestureCard({ title, body }: GestureCardProps) {
  const offset = useSharedValue(0);
  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm" style={style}>
        <Text className="text-base font-semibold text-zinc-950">{title}</Text>
        <Text className="mt-2 text-sm leading-5 text-zinc-600">{body}</Text>
      </Animated.View>
    </GestureDetector>
  );
}
