export const mainColors = {
  main_500: '#2BB99F',
  main_400: '#0FECD1',
  main_300: '#5AFFE1',
  main_200: '#C1FFFB',
  main_100: '#F0FFFB',
} as const;

export const grayColors = {
  gray_900: '#343434',
  gray_800: '#505050',
  gray_700: '#7C7C7C',
  gray_600: '#929292',
  gray_500: '#A7A7A7',
  gray_400: '#BDBDBD',
  gray_300: '#D3D3D3',
  gray_200: '#EDEDED',
  gray_100: '#FDFDFD',
} as const;

export const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const systemColor = {
  system_red: '#DC3035',
  system_green: '#04DF00',
  system_blue: '#006EFF',
} as const;

export const colors = {
  ...mainColors,
  ...grayColors,
  ...baseColors,
  ...systemColor,
};

export type ColorProps = {
  color?: (typeof colors)[keyof typeof colors];
};
