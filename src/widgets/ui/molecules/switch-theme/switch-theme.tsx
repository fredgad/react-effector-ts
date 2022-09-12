import React from 'react';

import { changeTheme } from '../../../../shared/lib/theme';
import { ToggleButton } from '../../../../shared/ui/moleculs/toggle-button';

export const SwithcThemeButton: React.FC = () => {
  const switchTheme = (toggle: boolean): void => {
    changeTheme(toggle ? 'dark' : 'default');
  };

  return <ToggleButton func={switchTheme}></ToggleButton>;
};
