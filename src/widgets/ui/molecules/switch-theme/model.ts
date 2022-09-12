import { createEvent, createStore } from 'effector';

import { ThemeTypes } from '../../../../shared/types/shared.types';

export const $theme = createStore<ThemeTypes>('default');
export const changeTheme = createEvent<ThemeTypes>();

$theme.on(changeTheme, (_, theme: ThemeTypes) => theme);

// $theme.watch((x: ThemeTypes, _): void => {
//   console.log(x, '$theme');
// });
