import { useStore } from 'effector-react';
import React from 'react';
import styled from 'styled-components';

import { $theme } from '../../../widgets/ui/molecules/switch-theme/model';
import { themesObject } from '../../lib/theme';
import { ButtonProps, ButtonStyledProps } from '../../types/shared.types';

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
      --base-color: ${themesObject[props.theme].buttonPrimary};
    }

    &[data-theme='secondary'] {
      --base-color: ${themesObject[props.theme].buttonSecondary};
    }
    &[data-theme='danger'] {
      --base-color: ${themesObject[props.theme].buttonDanger};
    }

    --data-height: 42px;
    --data-width: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--base-color);
    border: 1px solid grey;
    height: var(--data-height);
    width: var(--data-width);
    min-width: 80px;
    max-width: 300px;
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
