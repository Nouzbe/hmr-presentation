import React from 'react';
import { ListItem } from 'spectacle';

import progressiveList from '../utils/progressiveList';

export default progressiveList({
  Thoughts: [
    {
      Point: () => <ListItem>I want a better life.</ListItem>,
      Note: () => <p>Excuse the drama / Just being selfish.</p>
    },
    {
      Point: () => <ListItem>I can make yours better too.</ListItem>,
      Note: () => (
        <p>
          What I am talking about will reach project devs as well as SDK devs.
        </p>
      )
    },
    {
      Point: () => <ListItem>It would benefit the company.</ListItem>,
      Note: () => <p>Will talk about it later</p>
    }
  ]
});
