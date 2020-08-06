import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import defaultStyles from "../../config/styles";

export default function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevron,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.lightgrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={defaultStyles.colors.midtone}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  icon: {
    paddingRight: 10,
  },
  detailContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: defaultStyles.colors.midtone,
  },
});
