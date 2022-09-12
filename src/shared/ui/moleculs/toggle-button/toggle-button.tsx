import { useState } from 'react';
import styled, { css } from 'styled-components';

import { getTheme } from '../../../lib/theme';

const currentTheme = getTheme();

interface ButtonProps {
  func: (toggle: boolean) => void;
  disabled?: boolean;
}

export const ToggleButton = (props: ButtonProps) => {
  const [toggle, setToggle] = useState(false);
  const { disabled, func } = props;

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
    func(toggle);
  };

  return (
    <ToggleButtonStyled onClick={() => triggerToggle()}>
      <span className="toggle__on">on</span>
      <div className="toggle__box"></div>
      <span className="toggle__off">off</span>
    </ToggleButtonStyled>
  );
};

const ToggleButtonStyled = styled.button`
  --size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid grey;
  background-color: ;
  color: var(--text-color);
  height: var(--size);
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

const Themes = css`
  &[data-theme='primary'] {
    --base-color: var();
  }

  &[data-theme='danger'] {
    --base-color: var());
  }

  &[data-theme='secondary'] {
    --base-color: var();
  }
`;
