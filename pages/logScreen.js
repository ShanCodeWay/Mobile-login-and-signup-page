import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import backgroundImage from '../Images/Background.png'; 
import { useNavigation } from '@react-navigation/native';


const LogScreen = () => {

    const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setUsername(null);
      setEmail(null);
      setPassword(null);

    } catch (error) {
      console.error('Error during login:', error);
      setUsername(null);
      setEmail(null);
      setPassword(null);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.buttonL} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signup}>Don't have an account?</Text>
          <TouchableOpacity style={styles.buttonS} onPress={() => navigation.navigate('Sign up')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
       
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    paddingTop: 150, 
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },
  bottom: {
    flex: 1,
    paddingTop: 40, 
    alignItems: 'left',
    padding: 20,
    elevation: 5,
  },
  signup: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 16,
    color: '#fff', 
    paddingTop: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#105',
    borderWidth: 3,
    marginBottom: 35,
    paddingLeft: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontWeight:'bold',
    fontSize: 20,
    color: '#105', 
  },
  buttonS: {
    backgroundColor: 'rgba(40,61,125,0.9)',
    padding: 10,
    borderRadius: 15,
    width: '80%',
  },
  buttonL: {
    backgroundColor: 'rgba(40,61,125,0.9)',
    padding: 10,
    borderRadius: 15,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LogScreen;
