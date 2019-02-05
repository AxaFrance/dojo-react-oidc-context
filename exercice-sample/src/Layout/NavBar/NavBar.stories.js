import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { navBarItems } from './NavBar.constants';
import NavBar from './NavBar.component';

const stories = storiesOf('Navbar', module);

stories.addDecorator(withKnobs);

const items = navBarItems.map(item => ({
  ...item,
  visible: true,
}));

stories.add(
  'Navbar',
  withInfo({
    text: `Navbar de l'application`,
    inline: true,
  })(() => (
    <div>
      <NavBar navBarItems={items} positionInit={number('positionInit', 0)} />
    </div>
  )),
);
