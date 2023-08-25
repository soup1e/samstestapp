import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Workouts from "./screens/Workouts";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          activeTintColor: "red",
          inactiveTintColor: "gray",
          tabBarIcon: ({ size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Workout") {
              iconName = "fitness";
            } else if (route.name === "Stats") {
              iconName = "stats-chart";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            return <Ionicons name={iconName} size={size} color="red" />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Workout" component={Workouts} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
