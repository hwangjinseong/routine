export const fontFamilys = {
  'Pretendard-Black': 'Pretendard-Black',
  'Pretendard-Bold': 'Pretendard-Bold',
  'Pretendard-ExtraBold': 'Pretendard-ExtraBold',
  'Pretendard-ExtraLight': 'Pretendard-ExtraLight',
  'Pretendard-Light': 'Pretendard-Light',
  'Pretendard-Medium': 'Pretendard-Medium',
  'Pretendard-Regular': 'Pretendard-Regular',
  'Pretendard-SemiBold': 'Pretendard-SemiBold',
  'Pretendard-Thin': 'Pretendard-Thin',
} as const;

export type FontFamilyProps = {
  fontFamily?: (typeof fontFamilys)[keyof typeof fontFamilys];
};
