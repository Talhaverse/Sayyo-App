
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
import signup10 from './components/signup10'
import signup11 from './components/signup11'
import jobCard from './components/jobCard'
import jobCard2 from './components/jobCard2'
import jobCard3 from './components/jobCard3'
import congrats from './components/congrats'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator       {...{initialRouteName:  'landingPage'}} >
        <Stack.Screen name="landingPage"  component={landingPage} options={{  title: '',
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
          <Stack.Screen name="signup10" component={signup10}  options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />
          <Stack.Screen name="signup11" component={signup11} options={{  title: '',
          headerStyle: {
            backgroundColor: '#00B4D8',
          }, }} />
          <Stack.Screen name="jobCard"  component={jobCard} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />

<Stack.Screen name="jobCard2"  component={jobCard2} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />

<Stack.Screen name="jobCard3"  component={jobCard3} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />

<Stack.Screen name="congrats"  component={congrats} options={{  title: '',
          headerStyle: {
            backgroundColor: '#A8DADC',
          }, }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}