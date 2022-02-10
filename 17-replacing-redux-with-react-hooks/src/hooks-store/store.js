import { useEffect, useState } from "react";

// variables to hold a collective data for all the components
let globalState = {};
let listeners = [];
let actions = {};

// shouldListen to enable rerendering of components if required
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // wrap in useEffect as we want to remove listener when component that uses this hook unmounts
  useEffect(() => {
    // make the listeners to have state
    if (shouldListen) {
      listeners.push(setState);
    }

    // remove the state on unmount
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]); // optional to put setState

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
