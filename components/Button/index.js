import { View, Pressable, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const StyledButton = () => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={styles.Button}
        onPress={() => {
          console.warn("Hey dear");
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
