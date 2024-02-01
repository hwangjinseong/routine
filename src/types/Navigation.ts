import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NavigationStackList = {
  Home: undefined;
};

export type NavigationStackProps<T extends keyof NavigationStackList> =
  NativeStackScreenProps<NavigationStackList, T>;
