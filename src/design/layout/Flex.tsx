import React from 'react';
import {View, ViewProps} from 'react-native';
import {BoxSpacingProps, FlexProps, flex, margin, padding} from '../style';

interface Props extends ViewProps, FlexProps {
  gap?: number;
  padding?: BoxSpacingProps;
  margin?: BoxSpacingProps;
}

function Flex({
  style,
  padding: paddingSpacing,
  margin: marginSpacing,
  gap = 0,
  direction,
  align,
  justify,
  flex: flexValue,
  wrap,
  ...props
}: Props) {
  return (
    <View
      style={[
        flex({
          direction,
          align,
          justify,
          wrap,
          flex: flexValue,
        }),
        {
          gap,
        },
        padding(paddingSpacing),
        margin(marginSpacing),
        style,
      ]}
      {...props}
    />
  );
}

export default Flex;
