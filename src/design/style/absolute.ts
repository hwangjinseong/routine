import {Animated, DimensionValue} from 'react-native';
import {
  PickStyle,
  PickStylePropWithAnimatedValue,
  PickStyleWithAnimatedValue,
} from '.';

type AbsoluteObject = {
  x?: number | string | Animated.Value;
  y?: number | string | Animated.Value;
  top?: number | string | Animated.Value;
  right?: number | string | Animated.Value;
  bottom?: number | string | Animated.Value;
  left?: number | string | Animated.Value;
};

type AbsolutePositionObjectOptionCase<Option extends keyof AbsoluteObject> = {
  [key in Option]?: number | string | Animated.Value;
} & {
  [P in Exclude<keyof AbsoluteObject, Option>]?: never;
};

type AbsolutePositionObjectOption =
  | AbsolutePositionObjectOptionCase<'x' | 'y'>
  | AbsolutePositionObjectOptionCase<'x' | 'top' | 'bottom'>
  | AbsolutePositionObjectOptionCase<'y' | 'left' | 'right'>
  | AbsolutePositionObjectOptionCase<'top' | 'bottom' | 'left' | 'right'>;

type AbsoluteParam = AbsolutePositionObjectOption & {
  zIndex?: number;
};

interface Absolute {
  (position: AbsoluteParam): Partial<
    PickStyle<'top' | 'right' | 'bottom' | 'left' | 'zIndex'>
  > &
    PickStyle<'position'>;

  readonly full: PickStyle<'position' | 'top' | 'right' | 'bottom' | 'left'>;

  fullWithZIndex(
    zIndex: number,
  ): PickStyle<'position' | 'top' | 'right' | 'bottom' | 'left' | 'zIndex'>;
}

function getAbsoluteStyle(position: AbsoluteParam) {
  const style: Partial<
    PickStylePropWithAnimatedValue<
      'top' | 'right' | 'bottom' | 'left' | 'zIndex'
    >
  > &
    PickStyleWithAnimatedValue<'position'> = {
    position: 'absolute',
  };

  if (position.x !== undefined) {
    style.left = style.right = position.x as Animated.Value | DimensionValue;
  }
  if (position.y !== undefined) {
    style.top = style.bottom = position.y as Animated.Value | DimensionValue;
  }
  if (position.top !== undefined) {
    style.top = position.top as Animated.Value | DimensionValue;
  }
  if (position.bottom !== undefined) {
    style.bottom = position.bottom as Animated.Value | DimensionValue;
  }
  if (position.left !== undefined) {
    style.left = position.left as Animated.Value | DimensionValue;
  }
  if (position.right !== undefined) {
    style.right = position.right as Animated.Value | DimensionValue;
  }
  if (position.zIndex !== undefined) {
    style.zIndex = position.zIndex;
  }

  return style;
}

function createAbsolute() {
  const absolute = (position: AbsoluteParam) => getAbsoluteStyle(position);

  absolute.full = absolute({
    x: 0,
    y: 0,
  });

  absolute.fullWithZIndex = (zIndex: number) =>
    getAbsoluteStyle({
      x: 0,
      y: 0,
      zIndex,
    });

  return absolute as Absolute;
}

export const absolute = createAbsolute();

export function zIndex(zIndex: number): PickStyle<'zIndex'> {
  return {
    zIndex,
  };
}
