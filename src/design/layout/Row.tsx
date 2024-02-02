import React from 'react';
import {ComponentProps} from 'react';
import Flex from './Flex';

interface Props extends Omit<ComponentProps<typeof Flex>, 'direction'> {}

function Row(props: Props) {
  return <Flex direction="row" {...props} />;
}

export default Row;
