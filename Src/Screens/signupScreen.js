import {  
  NavigationContainer,
  createStackNavigator,
  View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, Platform,
  Image,
  AppbarImage,
  useState,
  backgroundImage,
  useNavigation
 } from '../Imports/imports'

 import { styles as signupStyles } from '../Styles/signupScreenStyles';


const SignupScreen = () => {

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
      <ImageBackground source={backgroundImage} style={signupStyles.backgroundImage}>
        <View style={signupStyles.container}>
          <TextInput
            style={signupStyles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={signupStyles.input}
            placeholder="Enter your Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={signupStyles.input}
            placeholder="Enter your Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
           <TextInput
            style={signupStyles.input}
            placeholder="Confirm your Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          
          
          <TouchableOpacity style={signupStyles.buttonS} onPress={() => navigation.navigate('Sign up')}>
            <Text style={signupStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={signupStyles.signup}>have an account?</Text>
          <TouchableOpacity style={signupStyles.buttonL} onPress={() => navigation.navigate('Log-in')}>
            <Text style={signupStyles.buttonText}>Login</Text>
          </TouchableOpacity>
         
        </View>
       
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};





export default SignupScreen;
