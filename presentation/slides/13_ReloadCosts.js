import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

const ReloadCosts = (props) => (
  <Slide {...props}>
    <Heading size={2} textColor="tertiary" margin="-50px 0 100px 0">
      At what cost?
    </Heading>
    <Text textColor="quaternary" style={{ fontSize: 32 }}>
      10s a reload * 1 reload a minute * 5 hours a day
      <br />= 50mins of pure time.
    </Text>
    <Appear>
      <Text textColor="secondary" margin="50px 0">
        That and the lost thoughts.
      </Text>
    </Appear>
  </Slide>
);

export default ReloadCosts;
