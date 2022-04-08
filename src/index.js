import {
  Dimensions,
  LayoutAnimation,
  PanResponder,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import SwipeIcon from "./components/SwipeIcon";
import images from "./assets/images";

const MARGIN_TOP = Platform.OS === "ios" ? 24 : 0;
const DEVICE_HEIGHT = Dimensions.get("window").height - MARGIN_TOP;

const CustomAnimation = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleY,
    springDamping: 0.8,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8,
  },
};

const SwipeUpDown = (
  {
    swipeHeight = 60,
    extraMarginTop = MARGIN_TOP,
    itemMini = null,
    itemFull = null,
    style,
    onShowMini,
    onShowFull,
    animation = "spring",
    disableSwipeIcon,
    iconSize,
    iconColor,
  },
  ref
) => {
  const FULL_POSITION = extraMarginTop;
  const maxHeight = DEVICE_HEIGHT - extraMarginTop;
  const MINI_POSITION = maxHeight - swipeHeight;
  const EMPTY_MINI_POSITION = DEVICE_HEIGHT;
  let top = !!itemMini ? MINI_POSITION : EMPTY_MINI_POSITION;
  const customStyle = {
    style: {
      bottom: 0,
      top,
    },
  };
  const checkCollapsed = useRef(true);
  const viewRef = useRef();
  const swipeIconRef = useRef();
  const [collapsed, setCollapsed] = useState(true);

  const onPanResponderMove = (event, gestureState) => {
    if (gestureState.dy > 0 && !checkCollapsed.current) {
      // SWIPE DOWN
      top = 0;
      customStyle.style.top = top + gestureState.dy;
      if (customStyle.style.height <= DEVICE_HEIGHT / 3) {
        swipeIconRef.current?.setData({ icon: images.minus });
        if (itemMini) {
          setCollapsed(true);
        }
      }
      updateNativeProps();
    } else if (checkCollapsed.current && gestureState.dy < -swipeHeight) {
      // SWIPE UP
      customStyle.style.top = DEVICE_HEIGHT + gestureState.dy;
      swipeIconRef.current?.setData({
        icon: images.minus,
        showIcon: true,
      });
      if (customStyle.style.top <= DEVICE_HEIGHT / 2) {
        swipeIconRef.current?.setData({
          icon: images.arrow_down,
          showIcon: true,
        });
        setCollapsed(false);
      }
      updateNativeProps();
    }
  };

  const onPanResponderRelease = (event, gestureState) => {
    if (gestureState.dy < -100 || gestureState.dy < 100) {
      showFull();
    } else {
      showMini();
    }
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, g) => true,
      onPanResponderMove,
      onPanResponderRelease,
    })
  ).current;

  const showFull = () => {
    customStyle.style.top = extraMarginTop;
    swipeIconRef.current?.setData({
      icon: images.arrow_down,
      showIcon: true,
    });
    updateNativeProps();
    setCollapsed(false);
    checkCollapsed.current = false;
    onShowFull?.();
  };

  const showMini = () => {
    customStyle.style.top = itemMini ? MINI_POSITION : EMPTY_MINI_POSITION;
    swipeIconRef.current?.setData({ showIcon: false });
    updateNativeProps();
    setCollapsed(true);
    checkCollapsed.current = true;
    onShowMini?.();
  };

  useImperativeHandle(
    ref,
    () => ({
      showFull,
      showMini,
    }),
    []
  );

  const updateNativeProps = () => {
    switch (animation) {
      case "linear":
        LayoutAnimation.linear();
        break;
      case "spring":
        LayoutAnimation.configureNext(CustomAnimation);
        break;
      case "easeInEaseOut":
        LayoutAnimation.easeInEaseOut();
        break;
      case "none":
      default:
        break;
    }
    viewRef.current.setNativeProps(customStyle);
  };

  const renderFullComponent = () => {
    if (typeof itemFull === "function") {
      return itemFull(showMini);
    }
    return itemFull;
  };

  const renderMiniComponent = () => {
    if (typeof itemMini === "function") {
      return itemMini(showFull);
    }
    return itemMini;
  };
  return (
    <View
      ref={viewRef}
      {...panResponder.panHandlers}
      style={[
        styles.wrapSwipe,
        {
          top,
          height: maxHeight,
          marginTop: extraMarginTop,
        },
        !itemMini && collapsed && { marginBottom: -swipeHeight },
        style,
      ]}
    >
      {!disableSwipeIcon && (
        <SwipeIcon size={iconSize} color={iconColor} ref={swipeIconRef} />
      )}
      {collapsed
        ? itemMini
          ? renderMiniComponent()
          : null
        : renderFullComponent()}
    </View>
  );
};

export default forwardRef(SwipeUpDown);

const styles = StyleSheet.create({
  wrapSwipe: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
});
