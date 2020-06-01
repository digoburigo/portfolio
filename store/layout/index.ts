type ThemeType = 'dark' | 'light' | 'system';

interface State {
  isPageTransition: boolean;
  theme: ThemeType;
}

export const state = () =>
  ({
    isPageTransition: false,
    theme: 'dark',
  } as State);

export const mutations = {
  togglePageTransition(state: State, isPageTransition: boolean) {
    state.isPageTransition = isPageTransition;
  },
  toggleTheme(state: State, theme: ThemeType) {
    state.theme = theme;
  },
};

export const getters = {
  isPageTransition: (state: State) => {
    return state.isPageTransition;
  },
  currentTheme: (state: State) => {
    return state.theme;
  },
};
