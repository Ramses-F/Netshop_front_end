import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const [badgeCount, setBadgeCount] = useState(3); // Initialize the badge count with 3 (you can change this as needed)

  const goToNotification = () => {
    navigation.navigate("Notif");
  };

  const goToHome = () => {
    navigation.navigate("Home2");
  };

  const goToProfile = () => {
    navigation.navigate("Profil");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goToNotification}>
        <Feather name="message-circle" size={30} color="#000" />
        {badgeCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
        <Text style={styles.iconText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleIconContainer} onPress={goToHome}>
        <Feather name="home" size={30} color="#000" />
        <Text style={styles.iconText}>Acceuil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToProfile}>
        <Feather name="user" size={30} color="#000" />
        <Text style={styles.iconText}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F58909',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 8,
    left: 7,
    right: 7,
    borderRadius: 20,
    height: 65,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative', // Added for positioning the badge container
  },
  middleIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 40,
    backgroundColor: '#F58909',
    borderRadius: 30,
    shadowOpacity: 2,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 4,
  },
  badgeContainer: {
    position: 'absolute',
    top: -10, // Adjust the value to move the badge up or down
    right: 65,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    paddingVertical: 2,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Navbar;
