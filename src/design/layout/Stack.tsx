import {ComponentProps} from 'react';
import Flex from './Flex';

interface Props extends Omit<ComponentProps<typeof Flex>, 'direction'> {}

function Stack(props: Props) {
  return <Flex direction="column" {...props} />;
}

export default Stack;
