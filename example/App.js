import React, { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";

export default function App() {
  const swipeUpDownRef = useRef();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to{"\n"}react-native-swipe-up-down
      </Text>
      <Text
        style={{ margin: 20 }}
        onPress={() => swipeUpDownRef.current.showFull()}
      >
        Tap to open panel
      </Text>
      <SwipeUpDown
        ref={swipeUpDownRef}
        itemMini={(show) => (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text onPress={show}>This is the mini view, swipe up!</Text>
          </View>
        )}
        itemFull={(close) => (
          <ScrollView>
            {/** To use scrollview please add TouchableWithoutFeedback */}
            <TouchableWithoutFeedback>
              <View>
                <TouchableOpacity onPress={close}>
                  <Text>Close</Text>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "blue",
                    height: 200,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "yellow",
                    height: 200,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "pink",
                    height: 200,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    height: 200,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        )}
        onShowMini={() => console.log("mini")}
        onShowFull={() => console.log("full")}
        animation="spring"
        extraMarginTop={24}
        disablePressToShow={true} // Press item mini to show full
        style={{ backgroundColor: "gray" }} // style for swipe
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  panelContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
