declare module "react-native-swipe-up-down" {
  import { StyleProp, ViewStyle } from "react-native";
  export interface SwipeUpDownProps {
    extraMarginTop?: number;
    swipeHeight?: number;
    itemMini?: object;
    itemFull: object;
    disablePressToShow?: boolean;
    disableSwipeIcon?: boolean;
    style?: StyleProp<ViewStyle>;
    onShowMini?: () => void;
    onShowFull?: () => void;
    animation?: "linear" | "spring" | "easeInEaseOut" | "none";
  }
  const SwipeUpDown: SwipeUpDownProps;

  export default SwipeUpDown;
}