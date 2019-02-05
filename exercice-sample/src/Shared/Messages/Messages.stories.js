import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Messages from './Messages.component';

const stories = storiesOf('Summary', module);

stories.addDecorator(withKnobs);

stories.add(
  'Error',
  withInfo({
    text: `Message d'erreur de l'application`,
    inline: true,
  })(() => (
    <div>
      <Messages
        message={text('message', 'Une erreur est survenue')}
        classModifier={text('ClassModifier', 'error')}
        onClose={action('Close message')}
      />
    </div>
  )),
);
