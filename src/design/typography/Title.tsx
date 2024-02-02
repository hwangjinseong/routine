import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {ColorProps, colors} from '../constants/colors';
import {FontFamilyProps, fontFamilys} from '../constants/fontFamilys';

interface Props extends TextProps, FontFamilyProps, ColorProps {
  level: 1 | 2 | 3;
}

const fontSizeMap = {
  1: 30,
  2: 28,
  3: 24,
} as const;

const fontFamilyMap = {
  1: fontFamilys['Pretendard-Bold'],
  2: fontFamilys['Pretendard-Bold'],
  3: fontFamilys['Pretendard-Bold'],
} as const;

function Title({color = colors.black, level, style, ...props}: Props) {
  const innerStyle: StyleProp<TextStyle> = {
    fontFamily: fontFamilyMap[level],
    fontSize: fontSizeMap[level],
    color,
  };

  return <Text style={[innerStyle, style]} {...props} />;
}

export default Title;
