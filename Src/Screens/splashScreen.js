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
    useEffect,
    logoImage,
    SplashScreenStyles,
   

   } from '../Imports/imports'
  
   import { styles as splashStyles } from '../Styles/splashScreenStyles';
   import LottieView from 'lottie-react-native';


  const SplashScreen = () => {
    
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Log-in'); 
        }, 3000); 
      }, []);

      const navigation = useNavigation();
    return (
    
        <ImageBackground source={backgroundImage} style={splashStyles.backgroundImage}>
        
        <LottieView
        source={require('../Images/logo1.json')} 
        autoPlay
        loop
        style={splashStyles.logoImage}
      />
     
         
        </ImageBackground>
      
    );
  };
  
  export default SplashScreen;
  