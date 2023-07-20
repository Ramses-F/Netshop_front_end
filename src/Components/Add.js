import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

export default function AddComponent() {
  const [articleName, setArticleName] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddArticle = () => {
    setLoading(true); // Start loading

    // Simulate an asynchronous action (e.g., saving to a database)
    setTimeout(() => {
      // Perform any actions you want when the "Add" button is pressed
      // For example, you can save the article data to a database
      console.log('Article added:', { articleName, articleDescription, image });

      setLoading(false); // Stop loading
    }, 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.label}>Nom article:</Text>
        <TextInput
          style={styles.input}
          value={articleName}
          onChangeText={(text) => setArticleName(text)}
        />

        <Text style={styles.label}>Description article:</Text>
        <TextInput
          style={styles.input1}
          value={articleDescription}
          onChangeText={(text) => setArticleDescription(text)}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Icon name="photo" size={60} color="#000" />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={handleAddArticle} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" /> // Show the loader
          ) : (
            <Text style={styles.addButtonText}>Ajouter</Text> // Show the "Add" button
          )}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input1: {
    width: '80%',
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  photoButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#F58909',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    elevation: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
