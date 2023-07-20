import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Notifbox = ({ serviceLabel, serviceImage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ 
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 300,
        backgroundColor: '#F58909',
        marginVertical: 15,
        borderRadius: 10,
        
       }}>
        <Image
          source={serviceImage}
          style={{ height: 40, width: 40, borderRadius: 10,
          
          }}
        />
        <Text style={{ marginTop: 5 }}>{serviceLabel}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notifbox;