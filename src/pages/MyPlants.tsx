import { Header } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../styles/colors";

export function MyPlants() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
});