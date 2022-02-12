declare module "react-native-swipe-up-down" {
  import * as React from "react";
  import { StyleProp, ViewStyle } from "react-native";

  export interface SwipeUpProps {
    hasRef?: () => void;
    swipeHeight?: number;
    itemMini?: object;
    itemFull: object;
    disablePressToShow?: boolean;
    style?: StyleProp<ViewStyle>;
    onShowMini?: () => void;
    onShowFull?: () => void;
    animation?: "linear" | "spring" | "easeInEaseOut" | "none";
  }

  export default class SwipeUp extends React.Component<SwipeUpProps, any> {
    updateNativeProps(): void;
    _onPanResponderMove(event: any, gestureState: any): void;
    _onPanResponderRelease(event: any, gestureState: any): void;
    showFull(): void;
    showMini(): void;
  }
}
