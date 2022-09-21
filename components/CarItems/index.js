import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import StyledButton from "../Button";
import ButtonTwo from "../ButtonTwo";

const CarItems = ({ car }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={car.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subTitle}>
          {car.tagline} <Text style={styles.taglineCTA}>{car.taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <StyledButton />
        <ButtonTwo />
      </View>
    </View>
  );
};

export default CarItems;
