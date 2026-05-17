import { TextInput } from 'react-native';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';

export function KeyboardForm() {
  return (
    <>
      <KeyboardAwareScrollView bottomOffset={72} className="flex-1" contentContainerClassName="gap-3 p-4">
        <TextInput className="h-11 rounded-md border border-zinc-300 px-3" placeholder="Project note" />
        <TextInput className="h-24 rounded-md border border-zinc-300 px-3 py-2" multiline placeholder="Details" />
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
  );
}
