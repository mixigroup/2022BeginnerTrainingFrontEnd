import { useCallback, useSyncExternalStore } from "react";

export type Store = {
  theme: "light" | "dark";
};

const getInitialState: Store = {
  theme: "light",
};

const createStore = (initialState: Store) => {
  let state = initialState;

  const getState = () => state;

  const listeners = new Set<() => void>();

  const setState = (fn: (prev: Store) => Store) => {
    state = fn(state);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  return { getState, setState, subscribe };
};

export const { getState, subscribe, setState } = createStore(getInitialState);

export const useStore = <T>(selector: (store: Store) => T) => {
  const onSnapshot = useCallback(() => {
    return selector(getState());
  }, [selector]);

  return useSyncExternalStore<T>(subscribe, onSnapshot, onSnapshot);
};
