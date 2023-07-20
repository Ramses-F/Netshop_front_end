import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AddComponent from '../Components/Add';

const screenHeight = Dimensions.get('window').height;

export default function AddScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.content}>
        <Image style={styles.logo} source={require('../assets/Netshop2.png')} />
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Ionicons name="add" size={64} color="white" />
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <AddComponent />
              <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
  addButton: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#F58909',
    alignItems: 'center',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    elevation: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    height: screenHeight * 0.7,
    width: '80%',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
