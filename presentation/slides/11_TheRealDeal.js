import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';

const TheRealDeal = (props) => (
  <Slide {...props} bgColor="#000">
    <Heading style={{ color: '#f2f2f2' }}>The Real Deal</Heading>
    <Appear fid="1">
      <Text
        style={{
          color: '#c3c3c3',
          fontSize: 32
        }}
      >
        ... Intensity intensifies ...
      </Text>
    </Appear>
  </Slide>
);

export default TheRealDeal;
