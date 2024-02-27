import {Animated, StyleProp, ViewStyle} from 'react-native';

export type PickStyleProp<T extends keyof ViewStyle> = Pick<ViewStyle, T>;

export type PickStyle<T extends keyof ViewStyle> = StyleProp<PickStyleProp<T>>;

export type PickStylePropWithAnimatedValue<T extends keyof ViewStyle> = {
  [K in T]: ViewStyle[K] | Animated.Value;
};

export type PickStyleWithAnimatedValue<T extends keyof ViewStyle> = StyleProp<
  PickStylePropWithAnimatedValue<T>
>;
