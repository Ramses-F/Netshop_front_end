import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import RegisterComponent from '../Components/register';
import LoginComponent from '../Components/Login';
import { useNavigation } from '@react-navigation/native';

const COLORS = { white: '#fff', black: '#000', orange: '#F58909', gris:'#808080' };

const ToggleSwitch = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigation = useNavigation(); 

  

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.white }}>
      
        <View
          style={{
            width: '90%',
            height: 55,
            borderWidth: 0.5,
            borderColor: COLORS.white,
            backgroundColor:'white',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
            paddingRight: 0,
            left: 15,
            top:25
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 55,
              backgroundColor: selectedTab === 0 ? COLORS.orange : COLORS.white,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOpacity: selectedTab === 0 ? 0.5 : 0,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              elevation: 4,
            }}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Text
              style={{
                color: selectedTab === 0 ? COLORS.white : COLORS.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              Connexion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 55,
              backgroundColor: selectedTab === 1 ? COLORS.orange : COLORS.white,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOpacity: selectedTab === 1 ? 0.5 : 0,
              shadowColor: COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              elevation: 4,
              left:5
            }}
            onPress={() => {
              setSelectedTab(1);
              
            }}
          >
            <Text
              style={{
                color: selectedTab === 1 ? COLORS.white : COLORS.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              Enregistrer
            </Text>
          </TouchableOpacity>
        </View>

        

        {selectedTab === 0 ? <LoginComponent /> : <RegisterComponent />}
      
    </View>
  );
};

export default ToggleSwitch;
