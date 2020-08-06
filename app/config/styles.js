import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "AppleSDGothicNeo-Medium",
        color: colors.smoke,
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        color: colors.smoke,
        fontSize: 18,
      },
    }),
  },
};
