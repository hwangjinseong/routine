import {PickStyle} from './types';

interface Overflow {
  visible: PickStyle<'overflow'>;
  hidden: PickStyle<'overflow'>;
  scroll: PickStyle<'overflow'>;
}

function createOverflow(): Overflow {
  const overflow: Overflow = {
    visible: {overflow: 'visible'},
    hidden: {overflow: 'hidden'},
    scroll: {overflow: 'scroll'},
  };

  return overflow;
}

export const overflow = createOverflow();
