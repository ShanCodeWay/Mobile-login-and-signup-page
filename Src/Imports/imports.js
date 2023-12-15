import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import LogScreen from '../Screens/logScreen';
import SignupScreen from '../Screens/signupScreen';
import SplashScreen from '../Screens/splashScreen';
import AppbarImage from '../Images/Appbar.png';

import { useState, useEffect } from 'react';

import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import backgroundImage from '../Images/Background.png'; 

import { useNavigation } from '@react-navigation/native';
import navigatorStyles from '../Styles/navigatorStyles';
import logScreenStyles from '../Styles/logScreenStyles';
import signupScreenStyles from '../Styles/signupScreenStyles';
import logoImage from '../Images/logo.gif'; 
import SplashScreenStyles from '../Styles/splashScreenStyles';


export  {
  React,
  NavigationContainer,
  createStackNavigator,
  LogScreen,
  SignupScreen,
  Image,
  AppbarImage,
  useState,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useNavigation,
  backgroundImage,
  ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, Platform ,
  navigatorStyles,
  logScreenStyles,
  signupScreenStyles,
  SplashScreen,
  useEffect,
  logoImage,
  SplashScreenStyles,
 
  
};
