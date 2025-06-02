export interface Config {
  [key: string]: string | number | boolean | null;
}

export interface ConfigStoreState {
  config: Config;
}

export interface ConfigStoreActions {
  setConfig: (config: Config) => void;
}

export type TConfigStore = ConfigStoreState & ConfigStoreActions;