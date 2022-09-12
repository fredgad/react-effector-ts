import React from 'react';
import styled from 'styled-components';

interface SkeletonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({ children, style }) => {
  return <Root style={style}>{children}</Root>;
};

interface SkeletonGroupProps {
  amount: number;
  columns?: number;
}

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({ amount, columns = 2 }) => (
  <Group columns={columns}>
    {Array.from({ length: amount }, (_, idx) => (
      <Skeleton key={idx} />
    ))}
  </Group>
);

const Root = styled.article`
  height: 60px;
  width: 280px;
  background: grey;
  border: 1px solid silver;
  box-sizing: border-box;
  box-shadow: black;
  border-radius: 6px;
  opacity: 0.5;
  animation: blink 2s infinite ease;

  @keyframes blink {
    0% {
      opacity: 0.4;
    }
    25% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.4;
    }
  }
`;

const Group = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: 1.5rem;
  flex-direction: column;
`;
