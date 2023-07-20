import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Tab from '../Components/tab';

export default function NameScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    // Simulating an asynchronous API call or any other processing
    setTimeout(() => {
      // Perform your logic here

      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Tab />
      <View style={styles.profil}>
        <Text style={styles.title}>Modifier votre nom</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Nom"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#AAA1A1"
          textContainerStyle={{ color: 'white' }}
        />
        <TextInput
          style={styles.input}
          underlineColorIos="rgba(0,0,0,0)"
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="#AAA1A1"
        />
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#000',
              width: '50%',
              height: 45,
              marginTop: 50,
              left: '25%',
              shadowOpacity: 0.5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              elevation: 4,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={{ fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', padding: 10, color: '#fff' }}>Modifier</Text>
            </TouchableOpacity>
          </View>
        )}

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profil: {
    width: '80%',
    height: '55%',
    backgroundColor: '#F58909',
    left: 40,
    marginTop: 90,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    left: 40,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    height: 50,
    marginTop: 40,
    fontSize: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
