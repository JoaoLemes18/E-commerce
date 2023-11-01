import LinearGradient from "react-native-linear-gradient";

export const gradientcard = {
  buttonGradient: (
    <LinearGradient
      colors={["#5033C3", "rgba(80, 51, 195, 0.20)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 1]}
      style={{ flex: 1 }}
    />
  ),
};
