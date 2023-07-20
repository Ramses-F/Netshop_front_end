import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {  useNavigation } from '@react-navigation/native';
import { Avatar,IconButton  } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Tab() {

  const [nom, setNom] = useState('');


      const navigation = useNavigation();

  const Home3 = () =>{
    navigation.navigate("Home2")
  }

  


  return (
    <View style = {styles.container}>
        <View style={styles.nav}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginLeft: 30, width: 100}}>
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
        style ={{}}
         />        
        <Text style={{color: '#fff', marginLeft: 5,fontWeight:'bold'}}>Fallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 140, marginRight: 15}} >
        <IconButton icon={props => <Icon name="dots-vertical" {...props} />} color="white" onPress={Home3}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:100,
    backgroundColor:'black',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    backgroundColor:'#fff',
    shadowOpacity: 0.5,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
      nav : {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 25,
        width: '85%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F58909',
        justifyContent: 'center',
        alignItems: 'center',
        left:25,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
      }
})