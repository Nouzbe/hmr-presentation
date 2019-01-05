import React from 'react';
import { Slide, Heading, Image, Text } from 'spectacle';

const buildToday = require('../../assets/build-today.gif');

const BuildToday = (props) => (
  <Slide {...props}>
    <Heading size={6} margin="-50px 0 100px 0" textColor="secondary">
      What starting a project today looks like:
    </Heading>
    <Image src={buildToday} width={800} />
    <Text textColor="quaternary" margin="50px 0">
      time * 5, size * 20
    </Text>
  </Slide>
);

export default BuildToday;
