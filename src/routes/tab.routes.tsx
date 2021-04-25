import React from "react";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../styles/colors";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";

const AppTab = createMaterialTopTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
    tabBarPosition={"bottom"}
    initialRouteName={"Nova Planta"}
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 50,
        },
      }}
    >
      <AppTab.Screen
        name={"Nova Planta"}
        component={PlantSelect}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name={"Minhas Planta"}
        component={MyPlants}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
