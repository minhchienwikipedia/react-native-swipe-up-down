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

declare class SwipeUpDownBase extends React.Component<SwipeUpDownProps> {}

export default class SwipeUpDown extends SwipeUpDownBase {}