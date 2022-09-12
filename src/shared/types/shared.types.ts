import { MutableRefObject } from 'react';

export type ThemeTypes = 'default' | 'dark' | 'blue';

interface ThemesObjectKeys {
  [key: string]: ThemesObjectParamsType;
}

export interface ThemesObjectType extends ThemesObjectKeys {
  default: ThemesObjectParamsType;
  dark: ThemesObjectParamsType;
  blue: ThemesObjectParamsType;
}

export interface ThemesObjectParamsType {
  main: string;
  secondary: string;
  text: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonDanger: string;
}

// Button
export type ButtonTheme = 'primary' | 'secondary' | 'danger';
export type ButtonVariant = 'text' | 'outlined' | 'solid';

export type ButtonStyledProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: ThemeTypes;
  'data-theme': string;
  'data-variant': ButtonVariant;
  'data-squared': boolean;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  accented?: boolean;
  // FIXME: MutableRefObject not suit for forwardRef
  ref?: MutableRefObject<HTMLButtonElement>;
};
