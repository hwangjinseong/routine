import {Animated} from 'react-native';
import {PickStyle} from '.';
import {hexToRgb} from '~/utils/function';

type BgOptions = {
  opacity?: number;
};

export function bg(
  backgroundColor: string,
  options?: BgOptions,
): PickStyle<'backgroundColor'>;
export function bg(backgroundColor: string, options?: BgOptions) {
  if (options?.opacity) {
    const [r, g, b] = hexToRgb(backgroundColor);

    backgroundColor = `rgba(${r},${g},${b},${options.opacity})`;
  }

  return {
    backgroundColor,
  };
}

export function opacity<T>(
  opacity: T,
): T extends number
  ? PickStyle<'opacity'>
  : T extends Animated.Value
  ? PickStyle<'opacity'>
  : never;
export function opacity<T>(opacity: T) {
  return {
    opacity,
  } as const;
}

type ShadowStyle = {
  color: string;
  offset: {width: number; height: number};
  opacity: number;
  radius: number;
  elevation: number;
};
export function shadow(
  style: ShadowStyle,
): PickStyle<
  | 'shadowColor'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius'
  | 'elevation'
>;
export function shadow({
  color: shadowColor,
  offset: shadowOffset,
  opacity: shadowOpacity,
  radius: shadowRadius,
  elevation,
}: ShadowStyle) {
  return {
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
  };
}
