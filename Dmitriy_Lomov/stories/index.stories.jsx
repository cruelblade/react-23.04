import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import FormMessage from '../src/components/FormMessage';

const story = storiesOf('Components', module);
const theme = createMuiTheme({});

const BaseDecorator = storyFn => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {storyFn()}
    </ThemeProvider>
  </BrowserRouter>
);

story.addDecorator(withInfo);
story.addDecorator(withKnobs);
story.addDecorator(BaseDecorator);

story
  .add('FormMessage', () => <FormMessage addNewMessage={action('Add new message')} />);
