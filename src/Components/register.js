import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';

export default function RegisterComponent() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [confirmerPassword, setConfirmerPassword] = useState('');
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const Home = () =>{
    navigation.navigate("Home2");
};

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleRegistration = () => {
    // Perform registration logic here
    setIsLoading(true);

    // Simulating an asynchronous operation
    setTimeout(() => {
      Home()
      setIsLoading(false);
    }, 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 200, marginHorizontal: '40%', top: -20 }}
          source={require('../assets/Netshop2.png')}
        />
        <TextInput
          style={styles.TextInput1}
          underlineColorAndroid="transparent"
          placeholder="Nom"
          value={nom}
          onChangeText={setNom}
          placeholderTextColor="#AAA1A1"
          textContainerStyle={{ color: 'white' }}
        />

        <TextInput
          style={styles.TextInput2}
          underlineColorAndroid="transparent"
          placeholder="Prenom"
          value={prenom}
          onChangeText={setPrenom}
          placeholderTextColor="#AAA1A1"
        />

<TextInput
          style={styles.TextInput2}
          underlineColorAndroid="transparent"
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#AAA1A1"
        />

        <PhoneInput
          defaultValue={value}
          defaultCode="CI"
          onChangeText={(text) => {
            setValue(text);
            setNumero(text);
          }}
          onChangeFormattedText={(text) => {
            setNumero(text);
          }}
          withDarkTheme
          withShadow
          containerStyle={styles.TextInput3}
          textContainerStyle={{ backgroundColor: 'grey', color: 'white' }}
          placeholder="Numéro"
          textInputStyle={{ color: 'white' }}
          codeTextStyle={{ color: '#AAA1A1' }}
        />

        <TextInput
          style={styles.TextInput4}
          underlineColorAndroid="transparent"
          placeholder="Mot de passe"
          value={mdp}
          onChangeText={setMdp}
          secureTextEntry={true}
          placeholderTextColor="#AAA1A1"
        />

        <TextInput
          style={styles.TextInput5}
          underlineColorAndroid="transparent"
          placeholder="Confirmer mot de passe"
          value={confirmerPassword}
          onChangeText={setConfirmerPassword}
          secureTextEntry={true}
          placeholderTextColor="#AAA1A1"
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegistration}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.buttonText}>s'enregistrer</Text>
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
  },
  TextInput1: {
    top: -40,
    left: -5,
    width: 300,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    borderColor: '#fff',
  },
  TextInput2: {
    top: -35,
    left: -5,
    width: 300,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    borderColor: '#fff',
  },
  TextInput3: {
    top: -30,
    left: -5,
    width: 300,
    height: 45,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  TextInput4: {
    top: -25,
    left: -5,
    width: 300,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    borderColor: '#fff',
  },
  TextInput5: {
    top: -20,
    left: -5,
    width: 300,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 30,
    borderColor: '#fff',
  },
  registerButton: {
    marginTop: 10,
    backgroundColor: '#F58909',
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
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
