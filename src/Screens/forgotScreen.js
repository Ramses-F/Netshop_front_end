import { StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function ForgotScreen() {
  const [value, setValue] = useState("");
  const [numero, setNumero] = useState('');
  const [enter, setEnter] = useState('');
  const [loading, setLoading] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleForgotPassword = () => {
    setLoading(true);
    // Simulate an API call or any async task
    setTimeout(() => {
      setLoading(false);
      // Do something after the async task completes
    }, 2000); // Replace with your desired loading duration

    // Additional logic for handling the forgot password functionality
    // ...
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image style={{ width: 300, height: 300, marginHorizontal: '40%', top: -100 }} source={require('../assets/Netshop2.png')} />

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
          <PhoneInput
            defaultValue={value}
            defaultCode="CI"
            onChangeText={(text) => {
              setValue(text);
              setNumero(text);
              setEnter(text);
            }}
            onChangeFormattedText={(text) => {
              setNumero(text);
            }}
            withDarkTheme
            withShadow
            containerStyle={styles.TextInput}
            textContainerStyle={{ backgroundColor: 'grey', color: 'white' }}
            placeholder="Numéro"
            textInputStyle={{ color: "white" }}
            codeTextStyle={{ color: '#AAA1A1' }}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.buttonText}>envoyer</Text>
          )}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextInput: {
    top: -40,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F58909',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    justifyContent:'center',
    shadowOpacity: 0.5,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize:16
  },
});
