import React from 'react';
import { Router, Scene , Stack } from 'react-native-router-flux';


import FormScreen from '../screens/FormScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TableScreen from '../screens/TableScreen';

const StackNavigations = () =>  (
          <Router>
          <Stack key="root">
            <Scene key="login" initial component={LoginScreen} title="Login" />
            <Scene key="register" component={RegisterScreen} title="Register" />
            <Scene key="form" component={TableScreen} title="form"/>
            <Scene key="home" component={FormScreen} title="table" />
          </Stack>
        </Router>


     )


export default StackNavigations
