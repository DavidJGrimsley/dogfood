import { Text, View } from 'react-native';

import { KeyboardForm } from '../../components/mrdj';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="px-5 py-4">
        <Text className="text-2xl font-bold text-zinc-950">Settings</Text>
        <Text className="mt-1 text-sm text-zinc-600">Keyboard Controller is ready for form-heavy screens.</Text>
      </View>
      <KeyboardForm />
    </View>
  );
}
