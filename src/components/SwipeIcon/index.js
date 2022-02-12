import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import images from "../../assets/images";

const SwipeIcon = (props, ref) => {
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
            width: 35,
            height: data.icon === images.minus ? 5 : 10,
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
