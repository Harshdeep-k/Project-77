import * as React from 'react';
import {Text} from 'react-native-elements';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from "./screens/LoginScreen";
import AppTabNavigator from "./components/AppTabNavigator";

export default class App extends React.Component{
  render(){
  return(
    <AppContainer/>
  )
  }
}
const AppNavigator=createSwitchNavigator(
  {
    Login: LoginScreen
  },
  {
    Home: AppTabNavigator
  }
)
const AppContainer=createAppContainer(AppNavigator)