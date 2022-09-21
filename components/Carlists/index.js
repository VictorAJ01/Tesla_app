import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { styles } from "./styles";
import cars from "./cars";
import CarItems from "../CarItems/index";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItems car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
