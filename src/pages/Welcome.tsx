import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { MyButton } from "../components/button";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>
      {<Image source={wateringImg} style={styles.img} />}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <MyButton title="Avançar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
    marginTop: 38,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  img: {
    width: 292,
    height: 284,
  },
});
