import { useStore } from 'effector-react';
import React from 'react';
import styled from 'styled-components';

import { $theme } from '../../../widgets/ui/molecules/switch-theme/model';
import { breakpoints } from '../../lib/breakpoints';
import { themesObject } from '../../lib/theme';
import { ThemeTypes } from '../../types/shared.types';

interface TextProps {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children, type, className, title, ...props }) => {
  const currentTheme = useStore($theme);

  return (
    <TextStyled
      theme={currentTheme}
      data-type={type}
      as={type}
      className={className}
      title={title}
      {...props}
    >
      {children}
    </TextStyled>
  );
};

const TextStyled = styled('p')<{
  theme: ThemeTypes;
  'data-type': TextProps['type'];
}>((props) => {
  return `
  color: ${themesObject[props.theme].text};
  font-family: 'TT Hoves', sans-serif;
  font-style: normal;
  font-weight: normal;

  &[data-type='span'] {
    font-size: 15px;
    line-height: 21px;
  }
  &[data-type='p'] {
    font-size: 0.75rem;
    line-height: 15px;
  }
  &[data-type='h1'] {
    font-weight: 700;
    font-size: 32px;

    ${breakpoints.devices.mobile} {
      font-size: 28px;
    }
  }
  &[data-type='h2'] {
    font-weight: 700;
    font-size: 28px;
  }
  &[data-type='h3'] {
    font-weight: 500;
    font-size: 24px;
  }
  &[data-type='h4'] {
    font-weight: 500;
    font-size: 22px;
  }
  &[data-type='h5'] {
    font-weight: 400;
    font-size: 20px;
  }
  &[data-type='h6'] {
    font-size: 16px;
  }
`;
});
