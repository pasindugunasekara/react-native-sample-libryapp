

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import FormScreen from './screens/FormScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TableScreen from './screens/TableScreen';


const stack = createStackNavigator();

const App = () => {


  return (
    <>

        <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="login"  component={LoginScreen} />
          <stack.Screen name="home" component={TableScreen} />
          <stack.Screen name="register" component={RegisterScreen} />
          <stack.Screen name="form" component={FormScreen} />
        </stack.Navigator>
      </NavigationContainer>


    </>
  );
};


const styles = StyleSheet.create({

});

export default App;
