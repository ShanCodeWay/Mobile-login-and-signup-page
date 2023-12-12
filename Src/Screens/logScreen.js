import {  
  NavigationContainer,
  createStackNavigator,
  View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform,
  Image,
  AppbarImage,
  useState,
  backgroundImage,
  useNavigation,
  navigatorStyles,
  signupScreenStyles,
  StyleSheet,
 } from '../Imports/imports'

 import { styles as logStyles } from '../Styles/logScreenStyles';

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
      <ImageBackground source={backgroundImage} style={logStyles.backgroundImage}>
        <View style={logStyles.container}>
          <TextInput
            style={logStyles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={logStyles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={logStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={logStyles.buttonL} onPress={handleLogin}>
            <Text style={logStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={logStyles.signup}>Don't have an account?</Text>
          <TouchableOpacity style={logStyles.buttonS} onPress={() => navigation.navigate('Sign up')}>
            <Text style={logStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
       
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LogScreen;
