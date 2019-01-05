import React from 'react';
import { Slide, Image, Heading } from 'spectacle';

const what = require('../../assets/what.gif');

const What = (props) => (
  <Slide {...props}>
    <Heading size={4} style={{ marginBottom: 100 }} textColor="tertiary">
      What are we looking at?
    </Heading>
    <Image src={what} width={400} />
  </Slide>
);

export default What;
