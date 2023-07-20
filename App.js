import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './src/Screens/SplashScreen';
import OnboardingScreen from './src/Screens/OnboardinScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ForgotScreen from './src/Screens/forgotScreen';
import RegisterComponent from './src/Components/register';
import PrivacyPolicy from './src/Screens/Policy';
import HomeScreen from './src/Screens/HomeSreen';
import ProfilScreen from './src/Screens/Profil';
import NameScreen from './src/Screens/ChangeName';
import NumberScreen from './src/Screens/ChangeNumber';
import Notification from './src/Screens/NotifScreen';
import AddScreen from './src/Screens/addScreen';
import ShopScreen from './src/Screens/shopScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />  
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterComponent} />  
        <Stack.Screen name="Forgot" component={ForgotScreen} /> 
        <Stack.Screen name="Policy" component={PrivacyPolicy} />
        <Stack.Screen name="Home2" component={HomeScreen} /> 
        <Stack.Screen name="Profil" component={ProfilScreen} /> 
        <Stack.Screen name="Number" component={NumberScreen} /> 
        <Stack.Screen name="Name" component={NameScreen} /> 
        <Stack.Screen name="Notif" component={Notification} /> 
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
