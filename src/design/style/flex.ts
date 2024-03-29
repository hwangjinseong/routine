import {PickStyle, PickStyleProp} from '.';

export type FlexProps = {
  flex?: number;
  wrap?: boolean;
  direction?: 'column' | 'row';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
};

function getFlexStyle(
  props: FlexProps | number,
): PickStyle<
  'flex' | 'flexDirection' | 'flexWrap' | 'alignItems' | 'justifyContent'
> {
  if (typeof props === 'number') {
    return {flex: props};
  }

  const {flex, wrap, direction, justify, align} = props;

  const style: Partial<
    PickStyleProp<
      'flex' | 'flexDirection' | 'flexWrap' | 'alignItems' | 'justifyContent'
    >
  > = {};

  if (flex !== undefined) {
    style.flex = flex;
  }

  if (direction !== undefined) {
    style.flexDirection = direction;
  }

  if (wrap !== undefined) {
    style.flexWrap = wrap ? 'wrap' : undefined;
  }

  if (align !== undefined) {
    style.alignItems = align;
  }

  if (justify !== undefined) {
    style.justifyContent = justify;
  }

  return style;
}

interface Flex {
  (props: FlexProps | number): PickStyle<
    'flex' | 'flexDirection' | 'alignItems' | 'justifyContent' | 'flexWrap'
  >;

  readonly center: PickStyle<'alignItems' | 'justifyContent'>;
}

function createFlex(): Flex {
  const flex = (props: FlexProps) => getFlexStyle(props);
  flex.center = {
    alignItems: 'center',
    justifyContent: 'center',
  };

  return flex as Flex;
}

export const flex = createFlex();
