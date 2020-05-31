interface State {
  isPageTransition: boolean;
}

export const state = () =>
  ({
    isPageTransition: false,
  } as State);

export const mutations = {
  togglePageTransition(state: State, isPageTransition: boolean) {
    state.isPageTransition = isPageTransition;
  },
};

export const getters = {
  isPageTransition: (state: State) => {
    return state.isPageTransition;
  },
};
