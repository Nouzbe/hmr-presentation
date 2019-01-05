import React from 'react';
import { Slide, Image } from 'spectacle';

const reloadExample = require('../../assets/reload-example.gif');

const ReloadExample = (props) => (
  <Slide {...props}>
    <Image src={reloadExample} width={1200} />
  </Slide>
);

export default ReloadExample;
