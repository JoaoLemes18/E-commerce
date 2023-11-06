import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 13,
  },
  card: {
    width: 156,
    height: 140,
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    top: 20,
    alignItems: "center",

    height: 80,
  },
  discountContainer: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  discountText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContent: {
    alignItems: "center",
  },
  pricesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: colors.whiteColor,
    fontSize: 16,
    marginTop: 4,
    fontWeight: "bold",
  },
  discountedPrice: {
    marginRight: 38,
    color: colors.textColor,
    marginTop: 4,
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  rating: {
    color: colors.accentColor,
    fontSize: 16,
    marginTop: 4,
    marginLeft: 5,
  },
  productName: {
    marginTop: 13,
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: "400",
  },
});
