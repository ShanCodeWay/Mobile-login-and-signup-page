import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import backgroundImage from '../Images/Background.png'; 
import { useNavigation } from '@react-navigation/native';

function Header() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0.6,
              borderColor: '#fff',
              borderBottomWidth: 3,
              borderTopWidth: 3,
              
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
              fontFamily: 'Arial',
              textAlign: 'center',
              
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Image
                source={AppbarImage}
                style={{ flex: 1, width: '300%', height: '100%', resizeMode: 'cover' }}
              />
            ),
          }}
        >
          <Stack.Screen name="Log-in" component={LogScreen} />
          <Stack.Screen name="Sign up" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Header;