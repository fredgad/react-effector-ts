import { useState } from 'react';
import styled from 'styled-components';

import { ConstColors } from '../../../lib/theme';
import { ToggleButtonProps } from '../../../types/shared.types';

export const ToggleButton = (props: ToggleButtonProps) => {
  const [toggle, setToggle] = useState(false);
  const { disabled, func } = props;

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
    if (func) {
      func(toggle);
    }
  };

  const onOrOff = toggle ? 'on' : 'off';

  return (
    <ToggleButtonStyled onClick={() => triggerToggle()} data-toggle={onOrOff}>
      <span className="toggle__off">off</span>
      <span className="toggle__on">on</span>
    </ToggleButtonStyled>
  );
};

const ToggleButtonStyled = styled.button<{
  'data-toggle': string;
}>(() => {
  return `
  --size: 42px;

  overflow: hidden;

  .toggle__box {
    height: 42px;
    width: 100px;
    background-color: blue;
  }
  .toggle__on {
    transition: .4s;
    transform: translateX(0)
  }
  .toggle__off {
    transition: .4s;
    transform: translateX(0)
  }
  &[data-toggle='on'] {
    --base-color: ${ConstColors.toggleButtonOn};
    .toggle__off {
      transform: translateX(-100px)
    }
  }
  &[data-toggle='off'] {
    --base-color: ${ConstColors.toggleButtonOff};
    .toggle__on {
      transform: translateX(100px)
    }
  }



 
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid grey;
  background-color: var(--base-color);
  color: var(--text-color);
  height: var(--size);
  height: var(--data-height);
  width: var(--data-width);
  max-width: 80px;
  border-radius: 3px;

  font-size: 1.25rem;
  font-weight: 700;
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
