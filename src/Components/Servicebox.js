import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ServiceBox = ({ serviceLabel, serviceImage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ 
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 200,
        backgroundColor: '#F58909',
        marginVertical: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 2,
        shadowRadius: 2,
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

export default ServiceBox;