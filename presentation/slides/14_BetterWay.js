import React from 'react';
import { Slide, Text } from 'spectacle';

const aladdin = require('../../assets/aladdin.jpg');

const BetterWay = (props) => (
  <Slide {...props} bgImage={aladdin} bgDarken={0.5}>
    <Text
      style={{
        marginRight: -350,
        color: '#f2f2f2',
        fontSize: 120,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'right',
        textShadow: '#404040 3px 5px 2px'
      }}
    >
      There
      <br /> is a
      <br /> better
      <br /> way.
    </Text>
  </Slide>
);

export default BetterWay;
