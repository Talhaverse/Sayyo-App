
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import landingPage from './components/landingpage'
import onboarding1 from './components/onboarding1'
import onboarding2 from './components/onboarding2'
import signup from './components/signup'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landingPage" component={landingPage} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />
        <Stack.Screen name="onboarding1" component={onboarding1}  options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />
            <Stack.Screen name="onboarding2" component={onboarding2} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />
           <Stack.Screen name="signup" component={signup} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}