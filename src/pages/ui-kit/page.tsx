import { createStore } from 'effector';
import { useStore } from 'effector-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Button, Skeleton, Text } from '../../shared/ui';
import { SwithcThemeButton } from '../../widgets/ui/molecules/switch-theme/switch-theme';
import './page.scss';

export const $pagePending = createStore(false);

export const UiKitPage: React.FC = () => {
  const isLoading = useStore($pagePending);

  return (
    <>
      <Helmet title="UI-KIT" />
      <div>UI-KIT page: {isLoading}!</div>

      <div className="App-ui">
        <Skeleton />
        {/* <SkeletonGroup amount={3} /> */}
        <Text>Text</Text>
        <Button>Button</Button>
        <Button theme="secondary">Button secondary</Button>
        <Button theme="danger">Button danger</Button>
        <SwithcThemeButton></SwithcThemeButton>
      </div>
    </>
  );
};
