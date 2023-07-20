import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/welcome.png')}
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
