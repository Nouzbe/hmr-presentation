import React from 'react';
import { Slide, Image } from 'spectacle';

const how = require('../../assets/how.gif');

const How = (props) => (
  <Slide {...props}>
    <Image src={how} width={800} />
  </Slide>
);

export default How;
