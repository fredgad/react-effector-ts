import { useStore } from 'effector-react';
import React, { MutableRefObject } from 'react';
import styled, { css } from 'styled-components';

import { $theme, themesObject as themes } from '../../lib/theme';
import {
  ButtonProps,
  ButtonStyledProps,
  ThemesObjectType,
  ThemeTypes,
} from '../../types/shared.types';

/**
 * Button
 * @see https://ant.design/components/button
 * @see https://woly.sova.dev/woly/atoms/button
 * @see https://material-ui.com/components/buttons
 */

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      theme = 'primary',
      variant = 'solid',
      icon,
      type,
      accented = false,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const currentTheme = useStore($theme);

    return (
      <ButtonStyled
        theme={currentTheme}
        data-theme={theme}
        data-variant={variant}
        data-squared={Boolean(icon && !children)}
        data-accented={accented}
        type={type}
        ref={ref}
        {...buttonProps}
      >
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </ButtonStyled>
    );
  }
);

const ButtonStyled = styled('button')<ButtonStyledProps>((props) => {
  return `
    
    &[data-theme='primary'] {
      --base-color: ${themes[props.theme].buttonPrimary};
    }

    &[data-theme='secondary'] {
      --base-color: ${themes[props.theme].buttonSecondary};
    }
    &[data-theme='danger'] {
      --base-color: ${themes[props.theme].buttonDanger};
    }

    --size: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--base-color);
    border: 1px solid grey;
    height: var(--size);
    min-width: 80px;
    border-radius: 3px;

    font-size: 1rem;
    outline: 0;
    padding: 0 1.125rem;
    transition: 0.25s;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.5;
    }

    span + span {
      margin-left: 0.5rem;
    }

    &[data-squared='true'] {
      width: 48px;
      height: var(--size);
    }

    &[data-accented='true'] {
      --text-color: var(--base-color);
      background: transparent;
      border-color: var(--base-color);
    }
  `;
});

const ButtonText = css`
  &[data-variant='outlined'] {
    --text-color: var(--base-color);
    background: var();
    border-color: var(--base-color);
  }

  &[data-variant='text'] {
    --text-color: var();
    background: transparent;
    border-color: transparent;
  }
`;
