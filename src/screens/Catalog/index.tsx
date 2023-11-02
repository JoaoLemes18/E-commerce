import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import CardComponent from "../../components/Cards/Catalog";
import { colors } from "../../colors";
import TitleWithBox from "../../components/Title";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.componetenttext}>
        <TitleWithBox title="CATÁLOGO" iconName="th-large" />
      </View>
      <View style={styles.componetentcard}>
        <CardComponent />
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  componetenttext: { marginRight: 200 },
  componetentcard: {},
});
