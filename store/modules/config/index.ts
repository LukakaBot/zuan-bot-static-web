import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TConfigStore } from './types';

const useConfigStore = create<TConfigStore>()(
  persist(
    (set) => ({
      config: {},
      setConfig: (config) => set({ config }),
    }),
    {
      name: 'config-store',
    }
  )
);

export default useConfigStore;
