import { ThemesObjectType } from '../types/shared.types';

export const ConstColors = {
  toggleButtonOn: '#0f0',
  toggleButtonOff: '#f00',
};

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
