
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import landingPage from './components/landingpage'
import onboarding1 from './components/onboarding1'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landingPage" component={landingPage} />
        <Stack.Screen name="onboarding1" component={onboarding1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}