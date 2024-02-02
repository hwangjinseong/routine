import {StyleProp, ViewStyle} from 'react-native';

export type PickStyleProp<T extends keyof ViewStyle> = Pick<ViewStyle, T>;

export type PickStyle<T extends keyof ViewStyle> = StyleProp<PickStyleProp<T>>;
