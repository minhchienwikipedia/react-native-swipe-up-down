import * as React from 'react';
import { StyleProp, ViewStyle } from "react-native";

interface SwipeUpDownProps {
  extraMarginTop?: number;
  swipeHeight?: number;
  itemMini?: object;
  itemFull: object;
  disableSwipeIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  onShowMini?: () => void;
  onShowFull?: () => void;
  animation?: "linear" | "spring" | "easeInEaseOut";
  iconSize?: Number;
  iconColor?: String;
}

export default function SwipeUpDown(props: SwipeUpDownProps): JSX.Element;