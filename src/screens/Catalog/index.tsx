import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CardComponent from "../../components/Cards/Catalog";
import { colors } from "../../colors";
import TitleWithBox from "../../components/Title";

export default function Catalog() {
  return (
    <View style={styles.container}>
      <View style={styles.componetenttext}>
        <TitleWithBox title="CATÁLOGO" iconName="th-large" />
      </View>
      <View style={styles.componetentcard}>
        <CardComponent />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  componetenttext: {
    right: 100,
    bottom: 100,
  },
  componetentcard: {
    right: 85,
    bottom: 390,
  },
});
