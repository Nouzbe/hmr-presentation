import React from 'react';
import { Slide, Heading, Image, Text } from 'spectacle';

const buildEvolution = require('../../assets/build-evolution.gif');

const BuildEvolution = (props) => (
  <Slide {...props}>
    <Heading size={6} margin="-50px 0 100px 0" textColor="secondary">
      How it evolved over the past year:
    </Heading>
    <Image src={buildEvolution} width={800} />
    <Text textColor="quaternary" margin="50px 0">
      time +10%, size +30%
    </Text>
  </Slide>
);

export default BuildEvolution;
