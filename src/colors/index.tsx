import LinearGradient from "react-native-linear-gradient";

export const colors = {
  backgroundColor: "#0B0B0B",
  primaryColor: "#1A1A1A",
  secondaryColor: "#2A2A2A",
  textColor: "#676767",
  mutedColor: "#A1A1A1",
  whiteColor: "#FFFFFF",
  buttonColor: "#5033C3",
  CardGradient: (
    <LinearGradient
      colors={["#5033C3", "rgba(80, 51, 195, 0.20)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 1]}
      style={{ flex: 1 }}
    />
  ),
  accentColor: "#8162FF",
};
