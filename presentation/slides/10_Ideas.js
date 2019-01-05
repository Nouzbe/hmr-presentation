import React from 'react';
import { ListItem, Heading } from 'spectacle';

import progressiveList from '../utils/progressiveList';

export default progressiveList({
  Title: () => (
    <Heading size={1} style={{ marginBottom: 100 }}>
      Ideas
    </Heading>
  ),
  Thoughts: [
    {
      Point: () => <ListItem>Monitor this?</ListItem>,
      Note: () => (
        <p>Logging the activeui package's build size at each release?</p>
      )
    },
    {
      Point: () => <ListItem>Explicit core plugins imports?</ListItem>,
      Note: () => (
        <p>
          This could be a way to reduce size and it would be easy now since the
          new plugins registration API publication.
        </p>
      )
    },
    {
      Point: () => <ListItem>Pre-minified production build?</ListItem>,
      Note: () => (
        <p>Doing more on our side would reduce the projects build duration</p>
      )
    }
  ]
});
