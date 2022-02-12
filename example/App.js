import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      animation: "easeInEaseOut",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to{"\n"}react-native-swipe-up-down
        </Text>
        <Text
          style={{ margin: 20 }}
          onPress={() => this.swipeUpDownRef.showFull()}
        >
          Tap to open panel
        </Text>
        <Picker
          selectedValue={this.state.animation}
          style={{ width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ animation: itemValue })
          }
        >
          <Picker.Item label="linear" value="linear" />
          <Picker.Item label="spring" value="spring" />
          <Picker.Item label="easeInEaseOut" value="easeInEaseOut" />
          <Picker.Item label="none" value="none" />
        </Picker>
        <SwipeUpDown
          itemMini={(show) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                backgroundColor: "green",
              }}
            >
              <Text onPress={show}>This is the mini view, swipe up!</Text>
            </View>
          )}
          itemFull={(close) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "red",
                }}
              >
                <Text onPress={close} style={styles.instructions}>
                  Swipe down to close
                </Text>
              </View>
            );
          }}
          onShowMini={() => console.log("mini")}
          onShowFull={() => console.log("full")}
          animation={this.state.animation}
          extraMarginTop={inset.top}
          disablePressToShow={true} // Press item mini to show full
          style={{ backgroundColor: "#000" }} // style for swipe
        />
      </View>
    );
  }
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
