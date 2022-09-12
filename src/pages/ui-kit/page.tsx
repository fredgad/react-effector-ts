import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Button, Skeleton, SkeletonGroup, Text } from '../../shared/ui';
import { ToggleButton } from '../../shared/ui/moleculs/toggle-button';
import './page.scss';

export const UiKitPage: React.FC = () => {
  return (
    <>
      <Helmet title="UI-KIT" />
      <div className="page-title">UI-KIT page</div>

      <div className="App-ui">
        <Skeleton />
        <SkeletonGroup amount={2} />
        <Button>Button</Button>
        <Button theme="secondary">Button secondary</Button>
        <Button theme="danger">Button danger</Button>
        <ToggleButton></ToggleButton>
        <Text>Text p</Text>
        <Text data-type="h1">Text h1</Text>
        <Text data-type="h2">Text h2</Text>
        <Text data-type="h3">Text h3</Text>
        <Text data-type="h4">Text h4</Text>
        <Text data-type="h5">Text h5</Text>
        <Text data-type="h6">Text h6</Text>
      </div>
    </>
  );
};
