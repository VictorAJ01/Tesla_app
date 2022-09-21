import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  btnContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  taglineCTA: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
