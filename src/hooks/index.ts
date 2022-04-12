import { writable } from 'svelte/store';

function preffersDarkTheme() {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'DARK' : 'LIGHT';
}

function setDarkTheme() {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
}

function setLightTheme() {
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
}

export function useDarkTheme(initialValue: ColorTheme, localStorageKey: string) {
  const { subscribe, set, update } = writable(initialValue, (set) => {
    if (window) {
      const theme = localStorage.getItem(localStorageKey);
      switch (theme) {
        case 'DARK': {
          set('DARK');
          setDarkTheme();
          break;
        }
        case 'LIGHT': {
          set('LIGHT');
          setLightTheme();
          break;
        }
        default: {
          const theme = preffersDarkTheme() ? 'DARK' : 'LIGHT';
          set(theme);
          theme === 'DARK' ? setDarkTheme() : setLightTheme();
          localStorage.setItem(localStorageKey, theme);
          break;
        }
      }
    }
  });
  return {
    subscribe,
    set(this: void, value: ColorTheme) {
      set(value);
      value === 'DARK' ? setDarkTheme() : setLightTheme();
      localStorage.setItem(localStorageKey, value);
    },
    toggle(this: void) {
      update((theme) => {
        const newTheme = theme === 'DARK' ? 'LIGHT' : 'DARK';
        newTheme === 'DARK' ? setDarkTheme() : setLightTheme();
        localStorage.setItem(localStorageKey, newTheme);
        return newTheme;
      });
    },
  };
}
