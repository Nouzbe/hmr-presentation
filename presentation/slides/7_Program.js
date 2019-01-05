import React from 'react';
import { ListItem } from 'spectacle';

import progressiveList from '../utils/progressiveList';

export default progressiveList({
  Thoughts: [
    {
      Point: () => (
        <ListItem>
          Hot Module Reloading. (
          <a href="https://support.activeviam.com/jira/browse/UI-2054.">
            UI-2054
          </a>
          )
        </ListItem>
      ),
      Note: () => <p>Definitely the main point</p>
    },
    {
      Point: () => (
        <ListItem>
          Build Duration. (
          <a href="https://support.activeviam.com/jira/browse/UI-2052.">
            UI-2052
          </a>
          ,&nbsp;
          <a href="https://support.activeviam.com/jira/browse/UI-2053.">
            UI-2053
          </a>
          )
        </ListItem>
      ),
      Note: () => (
        <p>
          Not as important but we don't talk about it as much as we should yet.
        </p>
      )
    },
    {
      Point: () => (
        <ListItem>
          Tricky Integration. (
          <a href="https://support.activeviam.com/jira/browse/UI-2047.">
            UI-2047
          </a>
          )
        </ListItem>
      ),
      Note: () => (
        <div>
          <p>
            Won't cover it in detail because it's less important and not meta
            enough.
          </p>
        </div>
      )
    }
  ]
});
