import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import images from "../../assets/images";

const MINUS_RATIO = 35 / 5;
const ARROW_RATIO = 35 / 10;

const SwipeIcon = ({ color, size = 35 }, ref) => {
  const [data, setData] = useState({
    icon: images.minus,
    showIcon: false,
  });

  useImperativeHandle(
    ref,
    () => ({
      setData: (val) => {
        setData((pre) => ({ ...pre, ...val }));
      },
    }),
    []
  );

  return (
    <View style={styles.wrapIcon}>
      {data.showIcon && (
        <Image
          source={data.icon}
          style={{
            tintColor: color,
            width: size,
            height:
              size / (data.icon === images.minus ? MINUS_RATIO : ARROW_RATIO),
          }}
        />
      )}
    </View>
  );
};

export default forwardRef(SwipeIcon);

const styles = StyleSheet.create({
  wrapIcon: { alignItems: "center", height: 10, marginBottom: 5 },
});
