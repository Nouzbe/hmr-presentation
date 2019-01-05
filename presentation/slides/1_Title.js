import React from 'react';
import { Heading, Slide, Text } from 'spectacle';

const Title = (props) => (
  <Slide {...props}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Development Experience
    </Heading>
    <Text margin="10px 0 0" textColor="quaternary" style={{ fontSize: 58 }}>
      How to improve it?
    </Text>
  </Slide>
);

export default Title;
