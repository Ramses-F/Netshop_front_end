import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import Background from '../Components/background';
import { StatusBar } from 'expo-status-bar';

const SplashScreenComponent = () => {
  const COLORS = {primary: '#111E26', white: '#fff'};
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    },3000 );

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Background>
      <StatusBar
      barStyle="dark-content"
      />
    </Background>
  );
};

export default SplashScreenComponent;
