import { appSnapshot } from '../data/mock-app';

export async function getLocalAppSnapshot(): Promise<typeof appSnapshot> {
  return appSnapshot;
}
