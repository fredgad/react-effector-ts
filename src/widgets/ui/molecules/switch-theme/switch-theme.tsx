import React from 'react';

import { ToggleButton } from '../../../../shared/ui/moleculs/toggle-button';
import { changeTheme } from './model';

export const SwithcThemeButton: React.FC = () => {
  const switchTheme = (toggle: boolean): void => {
    changeTheme(toggle ? 'dark' : 'default');
  };

  return <ToggleButton func={switchTheme}></ToggleButton>;
};
