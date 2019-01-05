import React from 'react';
import { Slide, Heading, Notes } from 'spectacle';

import DraggableDiv from '../utils/DraggableDiv';

const AnswerToHow = (props) => (
  <Slide {...props}>
    <Heading size={1} textColor="secondary">
      <span style={{ color: 'red' }}>Wait </span>
      <span
        style={{
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <DraggableDiv height={150} width={300} />
        less.
      </span>
    </Heading>
    <Notes>
      <p>{'Happy dev <=> Productive dev.'}</p>
    </Notes>
  </Slide>
);

export default AnswerToHow;
