/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import {createAppContainer} from 'react-navigation';
// import {AppStackNavigator} from './navigators/appNavigators';
import AppNavigator from './navigators/appNavigators';

const AppContainer = createAppContainer(AppNavigator)




// import React from "react"; 
// import { View, Text } from "react-native"; 
// import { createStackNavigator, createAppContainer } from "react-navigation"; 
// class HomeScreen extends React.Component { 
//   render() { 
//     return ( 
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
//       <Text>Home Screen</Text> 
//     </View> 
//     ); 
//   } 
// } 
// const AppNavigator = createStackNavigator({
//    Home: { screen: HomeScreen } 
//   }); 
// const AppContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);