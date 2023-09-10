
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import landingPage from './components/landingpage'
import onboarding1 from './components/onboarding1'
import onboarding2 from './components/onboarding2'
import signup from './components/signup'
import signup2 from './components/signup2'
import signup3 from './components/signup3'
import signup4 from './components/signup4'
import signup5 from './components/signup5'
import signup6 from './components/signup6'
import signup7 from './components/signup7'
import signup8 from './components/signup8'
import signup9 from './components/signup9'
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
          <Stack.Screen name="signup2" component={signup2} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup3" component={signup3} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup4" component={signup4} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup5" component={signup5} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup6" component={signup6} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup7" component={signup7} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="signup8" component={signup8} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
           <Stack.Screen name="signup9" component={signup9} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}