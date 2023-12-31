import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Navbar from '../Components/home2';
import CountryPicker from 'react-native-country-picker-modal';
import ServiceBox from '../Components/Servicebox';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from 'react';
import {  useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';



export default function HomeScreen() {

  

const [countryCode, setCountryCode] = useState('CI');
const [callingCode, setcallingCode] = useState('225');
const [searchQuery, setSearchQuery] = useState('');



const services = [
    { label: "Boutique", image: require('../assets/shop.png'), action: () => navigation.navigate("Home2") },
    { label: "Ajouter articles", image: require('../assets/product.png'), action: () => navigation.navigate("Add")  },
    
  ];

  const navigation = useNavigation();


  

  const filteredServices = services.filter(service =>
    service.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <><Navbar />
    <View>
    <StatusBar style='light' />

    <View style={styles.header}>
          <View style={styles.elements}>
            <FontAwesome name="bell" size={20} color="white" style={{marginRight: 10}} />
            <View style={styles.country}>
              <CountryPicker 
                withFilter
                countryCode={countryCode}
                withFlag
                withCountryNameButton
                withAlphaFilter={false}
                withCurrencyButton={false}
                withCallingCode
                withEmoji
                onSelect={
                  country => {
                    console.log('country', country);
                    const {cca2, callingCode} = country;
                    setCountryCode(cca2);
                    setcallingCode(callingCode[0]);
                  }
                }
                containerButtonStyle={{
                  alignItems: 'flex-end',
                  marginLeft: 10,
                }}
                theme={{
                  onBackgroundTextColor: '#ffffff',
                  backgroundColor: '#2C333A',
                  fontSize: 14            
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <Text style={{color: 'white', fontSize: 18, marginBottom: 10, fontFamily: 'Helvetica', fontStyle: 'italic'}}>Bienvenue Fallet sur NETSHOP</Text>
          <Text style={{color: 'white', fontSize: 23, fontWeight:'bold'}}>ACCEUIL</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Recherche services..."
            placeholderTextColor="#ffffff"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView style={styles.scrollView}>

          <View style={styles.serviceRow}>
            {filteredServices.map(service => (
              <ServiceBox
              
                key={service.label}
                serviceLabel={service.label}
                serviceImage={service.image}
                onPress={service.action}
                
                
              />
            ))}
          </View>
        </ScrollView>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      

    },
    header: {
      height: '15%',
      width: '100%',
      backgroundColor: '#000'
    },
    elements : {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      
    },
    country: {
      justifyContent: "center",
      height: '70%',
      width: '80%'
    },
    countryInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginVertical: 20,
    },
    search : {
      height: '20%',
      width: '100%',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F58909'
    },
    scrollView: {
      marginTop: '15%',
      marginHorizontal: 20,
      width: '90%',
      
    },
    serviceRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        color: 'black',
        alignItems: 'center', // Center the elements vertically
    width: '100%',
      
      
    },

    searchBar: {
        height: 40,
        width: '80%',
        borderRadius: 15,
        backgroundColor: '#000',
        color: '#ffffff',
        paddingHorizontal: 10,
        marginBottom: -70,
        shadowOpacity: 0.5,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
      },
   
     
  });




