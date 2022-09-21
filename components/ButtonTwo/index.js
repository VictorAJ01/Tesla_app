import { View, Pressable, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const ButtonTwo = () => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={styles.Button}
        onPress={() => {
          console.warn("Hey dear");
        }}
      >
        <Text style={styles.text}>Existing Inventory</Text>
      </Pressable>
    </View>
  );
};

export default ButtonTwo;
