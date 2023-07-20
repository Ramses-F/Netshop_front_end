import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Navbar from '../Components/home2';
import CountryPicker from 'react-native-country-picker-modal';
import Notifbox from '../Components/NotifBox';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from 'react';
import {  useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';



export default function Notification() {

  

const [countryCode, setCountryCode] = useState('CI');
const [callingCode, setcallingCode] = useState('225');
const [searchQuery, setSearchQuery] = useState('');



//const Historique = [
 // {
 //   id: 1,
    name:'Kamagate fallet'
 // },
//  {
 //   id: 2,
    name:'Kamagate fallet'
 // },
//  {
   // id: 3,
    name:'Kamagate fallet'
 // },
  
//]


const oneItem = ({item}) => (
  <View style={styles.item}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 30}}>
          <FontAwesome name="user" size={26} color="white" />
            <View style={{flex: 1, flexDirection: 'column',marginLeft: 15}}>
              <Text style={{color:'#fff', fontSize: 20, fontWeight: 'Bold', marginTop: 0}}>{item.name}</Text>
              

            </View>
          </View>
    </View>
)





  const navigation = useNavigation();


  

  

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
          <Text style={{color: 'white', fontSize: 40, fontWeight:'bold', top:-30}}>Notification</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Recherche ..."
            placeholderTextColor="#ffffff"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.list}>
            <FlatList 
              //data={Historique}
              renderItem={oneItem}
            />
          </View>


    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      

    },
    header: {
      height: '20%',
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
      height: '25%',
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
        top:-6,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
      },
   list: {
    top: 20,
    height: 250,
    backgroundColor:'blue',
   }
     
  });




