import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TConfigStore, Config } from './types';

const useConfigStore = create<TConfigStore>()(
  persist(
    (set) => ({
      config: {},
      setConfig: (config: Config) => set({ config }),
    }),
    {
      name: 'config-store',
    }
  )
);

export default useConfigStore;
