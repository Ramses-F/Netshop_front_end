import { StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';

export default function LoginComponent() {
  const [value, setValue] = useState("");
  const [numero, setNumero] = useState('');
  const [enter, setEnter] = useState('');
  const [mdp, setMdp] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation(); 

  const Forgot = () => {
    navigation.navigate("Forgot");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const Home2 = () => {
    navigation.navigate(Home2);
  };

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Continue with login logic or navigation
      Home2()
    }, 2000);

    
  };

  



  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image style={{ width: 300, height: 200, marginHorizontal: '40%', top: -40 }} source={require('../assets/Netshop2.png')} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
        >
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

          <TextInput
            style={styles.TextInput1}
            underlineColorIos="rgba(0,0,0,0)"
            placeholder="Mot de passe"
            value={mdp}
            onChangeText={setMdp}
            secureTextEntry={true}
            placeholderTextColor="#AAA1A1"
          />

          <TouchableOpacity style={styles.forgot} onPress={Forgot}>
            <Text style={{ color: '#000', fontSize: 11, fontWeight: '500' }}>Mot de passe oublié</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>se connecter</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.Text}>Vous n'avez de compte?
            <TouchableOpacity style={styles.Btn} >
              <Text style={styles.header}> S'enregistrer</Text>
            </TouchableOpacity>
          </Text>
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    top: 0,
    left: -5,
    width: '80%',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 4,
    borderColor: '#fff'
  },
  TextInput1: {
    top: 40,
    left: -5,
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    borderColor: '#fff'
  },
  forgot: {
    top: -45,
    left: 180
  },
  button: {
    backgroundColor: '#F58909',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    left: 70,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    top: 50,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Text: {
    top: 60,
    fontWeight: 'bold',
    left: 20
  },
  Btn: {},
  header: {
    color: '#F58909',
    top: 3
  }
});