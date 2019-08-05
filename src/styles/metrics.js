import { Platform, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20, scrollHeight: 450 },
    android: { headerHeight: 44, headerPadding: 0, scrollHeight: 450 }
  }),
  tabBarHeight: 50,
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 35,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
