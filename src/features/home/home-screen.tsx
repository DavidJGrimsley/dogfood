import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { GestureCard, SvgMark } from '../../components/mrdj';
import { getLocalAppSnapshot } from '../../services/local-data';

import type { appSnapshot } from '../../data/mock-app';

type Snapshot = typeof appSnapshot;

export default function HomeScreen() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  useEffect(() => {
    void getLocalAppSnapshot().then(setSnapshot);
  }, []);

  return (
    <View className="flex-1 gap-4 bg-zinc-50 p-5">
      <View className="flex-row items-center gap-3">
        <SvgMark />
        <View className="flex-1">
          <Text className="text-xl font-bold text-zinc-950">dogfood</Text>
          <Text className="text-sm text-zinc-600">{snapshot?.audience ?? "Loading project context..."}</Text>
        </View>
      </View>
      <GestureCard
        title="Rich boilerplate is wired"
        body="Routes stay thin, feature screens hold UI, and mock data can be swapped for the real service later."
      />
      {snapshot?.tasks.map((task) => (
        <View key={task.id} className="rounded-md border border-zinc-200 bg-white p-3">
          <Text className="font-medium text-zinc-900">{task.title}</Text>
          <Text className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{task.status}</Text>
        </View>
      ))}
    </View>
  );
}
