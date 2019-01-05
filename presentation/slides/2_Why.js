import React from 'react';
import { Slide, Image } from 'spectacle';

const butWhy = require('../../assets/but-why.gif');

const Why = (props) => (
  <Slide {...props}>
    <Image src={butWhy} width={800} />
  </Slide>
);

export default Why;
