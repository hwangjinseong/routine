import React from 'react';
import {ComponentProps} from 'react';
import {absolute, flex} from '../style';
import Stack from './Stack';

interface Props extends Omit<ComponentProps<typeof Stack>, 'style'> {}

function AbsoluteCenter({children}: Props) {
  return <Stack style={[absolute.full, flex.center]}>{children}</Stack>;
}

export default AbsoluteCenter;
