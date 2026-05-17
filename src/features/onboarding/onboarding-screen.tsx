import { Text, View } from 'react-native';

import { AnimatedPressable } from '../../components/mrdj';

export default function OnboardingScreen() {
  return (
    <View className="flex-1 justify-center gap-4 bg-white p-5">
      <Text className="text-2xl font-bold text-zinc-950">Start with intent</Text>
      <Text className="text-base leading-6 text-zinc-600">
        Replace this screen with the first real onboarding step once the product flow is settled.
      </Text>
      <AnimatedPressable className="items-center rounded-md bg-zinc-950 px-4 py-3">
        <Text className="font-semibold text-white">Continue</Text>
      </AnimatedPressable>
    </View>
  );
}
