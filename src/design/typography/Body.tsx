import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {ColorProps, colors} from '../constants/colors';
import {FontFamilyProps, fontFamilys} from '../constants/fontFamilys';

interface Props extends TextProps, FontFamilyProps, ColorProps {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const fontSizeMap = {
  1: 24,
  2: 20,
  3: 20,
  4: 18,
  5: 16,
  6: 14,
  7: 12,
} as const;

const fontFamilyMap = {
  1: fontFamilys['Pretendard-Light'],
  2: fontFamilys['Pretendard-Medium'],
  3: fontFamilys['Pretendard-Bold'],
  4: fontFamilys['Pretendard-Light'],
  5: fontFamilys['Pretendard-Light'],
  6: fontFamilys['Pretendard-Medium'],
  7: fontFamilys['Pretendard-Regular'],
} as const;

function Body({color = colors.black, level, style, ...props}: Props) {
  const innerStyle: StyleProp<TextStyle> = {
    fontFamily: fontFamilyMap[level],
    fontSize: fontSizeMap[level],
    color,
  };

  return <Text style={[innerStyle, style]} {...props} />;
}

export default Body;
