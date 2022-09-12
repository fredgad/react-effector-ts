import { createEvent, createStore } from 'effector';

import { ThemesObjectParamsType, ThemesObjectType, ThemeTypes } from '../types/shared.types';

export const themesObject: ThemesObjectType = {
  default: {
    main: '#ffffff',
    secondary: '#f6f5ff',
    text: '#222222',
    buttonPrimary: '#f27d1d',
    buttonSecondary: '#361df2',
    buttonDanger: '#a50a02',
  },
  dark: {
    main: '#222222',
    secondary: '#4a4a4a',
    text: '#ffffff',
    buttonPrimary: '#000000',
    buttonSecondary: '#333333',
    buttonDanger: '#555444',
  },
  blue: {
    main: '#fff',
    secondary: '#f6f5ff',
    text: '#e8e6fe',
    buttonPrimary: '#d6d2fe',
    buttonSecondary: '#d6d2fe',
    buttonDanger: '#a50a02',
  },
};

export const $theme = createStore<ThemeTypes>('default');
export const changeTheme = createEvent<ThemeTypes>();

let currentTheme: ThemeTypes = 'default';

export function getTheme(): ThemesObjectParamsType {
  console.log(themesObject[$theme.defaultState], $theme.defaultState, '$theme.defaultState');
  return themesObject[currentTheme];
}

$theme.on(changeTheme, (_, theme: ThemeTypes) => {
  console.log(theme, 'theme');
  return theme;
});

$theme.watch((x: ThemeTypes, _): void => {
  currentTheme = x;
  console.log(x, '$theme');
});
