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
    SplashScreenStyles

   } from '../Imports/imports'
  
   import { styles as splashStyles } from '../Styles/splashScreenStyles';
  
  const SplashScreen = () => {
    
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Log-in'); 
        }, 1000); 
      }, []);

      const navigation = useNavigation();
    return (
    
        <ImageBackground source={backgroundImage} style={splashStyles.backgroundImage}>
        
         <Image source={logoImage} style={splashStyles.logoImage}>

         </Image>
         
        </ImageBackground>
      
    );
  };
  
  export default SplashScreen;
  