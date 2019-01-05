import _ from 'lodash';
import React from 'react';

import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#1e1e1e',
    secondary: '#f2f2f2',
    tertiary: '#00aeef',
    quaternary: '#999'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

/*
 * Using require makes spectacle's embedded HMR work with our modularized slides deck.
 *
 * Also...
 *
 * A slide can have several states that need to be iterated over
 * through the same controls as the ones for the iteration over the slides themselves.
 * For more clarity about this fact, our components can either return a single Slide,
 * or a list of Slides (each one representing a single state).
 * Hence the flatten here
 */
const slides = _.flatten([
  require('./slides/1_Title.js').default,
  require('./slides/2_Why').default,
  require('./slides/3_AnswerToWhy').default,
  require('./slides/4_How').default,
  require('./slides/5_AnswerToHow').default,
  require('./slides/6_What').default,
  require('./slides/7_Program').default,
  require('./slides/8_BuildToday').default,
  require('./slides/9_BuildEvolution').default,
  require('./slides/10_Ideas').default,
  require('./slides/11_TheRealDeal').default,
  require('./slides/12_ReloadExample').default,
  require('./slides/13_ReloadCosts').default,
  require('./slides/14_BetterWay').default
]);

export default () => (
  <Deck transition={['fade']} transitionDuration={500} theme={theme}>
    {slides.map((Slide, indexInDeck) => (
      <Slide key={`slide-${indexInDeck}`} />
    ))}
  </Deck>
);
