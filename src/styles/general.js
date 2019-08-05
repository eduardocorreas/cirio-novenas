import { StyleSheet, Dimensions } from "react-native";
import { colors, metrics, fonts } from "./index";

const styles = StyleSheet.create({
  link: {
    textAlign: "center",
    color: colors.lighter,
    marginTop: metrics.baseMargin,
    fontSize: fonts.regular,
    lineHeight: 18,
    textDecorationLine: "underline"
  },
  linkBlue: {
    textAlign: "center",
    color: colors.primary,
    marginTop: metrics.baseMargin,
    fontSize: fonts.regular,
    lineHeight: 18,
    textDecorationLine: "underline"
  },
  footer: {
    alignItems: "center",
    textAlign: "center",
    marginTop: metrics.baseMargin * 2,
    bottom: 0
  },
  enabled: {
    opacity: 1
  },
  disabled: {
    opacity: 0.3
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    flex: 1,
    alignItems: "stretch",
    margin: metrics.baseMargin * 2
  },
  modal: {
    backgroundColor: colors.primary,
    height: Dimensions.get("window").height / 2,
    marginHorizontal: metrics.baseMargin * 4,
    alignItems: "center"
  },
  scrollview: {
    maxHeight: metrics.screenHeight,
    minHeight: metrics.screenHeight,
    marginVertical: metrics.baseMargin * 2
  },
  screen: {
    width: metrics.screenWidth,
    height: metrics.screenHeight
  }
});

export default styles;
