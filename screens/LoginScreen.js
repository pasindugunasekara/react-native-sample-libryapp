import React, {useState} from 'react';
import { View , StyleSheet , KeyboardAvoidingView , Text ,SafeAreaView, ScrollView } from 'react-native';
import { Avatar ,TextInput , Button } from 'react-native-paper';
import { dimensions, _getShadows, colors, fontFamilies, fontSizes } from '../configurations/constant';


const LoginScreen = (props) => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     return (
        
          <SafeAreaView>
          <ScrollView>


          <KeyboardAvoidingView>
               <View style={styles.container}>
                    <Text style={styles.textLogin}>Sign In</Text>
                    <Avatar.Image size={160} style={styles.avator} source={require('../assets/images/avator-1.jpg')} />      
                    <View style={styles.inputContainer}>
                        
                         <TextInput
                              label="Username"
                              value={username}
                              onChangeText={username => setUsername(username)}
                              mode={'outlined'}
                              style={styles.textfield}
                         />

                         <TextInput
                              label="Password"
                              value={password}
                              onChangeText={password => setPassword(password)}
                              mode={'outlined'}
                              style={styles.textfield}
                         />

                         {/* sign in & sign up button */}
                         <Button style={styles.buttonSignIn} mode="contained" onPress={() => props.navigation.navigate('home')}>
                                        Sign in
                         </Button>
                          <Button style={styles.buttonSignUp} mode="contained" onPress={() => props.navigation.navigate('register')}>
                              Sign up
                         </Button>          

                         
                                   {/* social media button */}
                         <View style={styles.apiButtonGroup}>
                              <Button style={{marginVertical : 5}} mode="outlined" onPress={() => console.log('Pressed')}>
                                   facebook
                              </Button>
                              
                              <Button style={{marginVertical : 5}} mode="outlined" onPress={() => console.log('Pressed')}>
                               Google+
                              </Button>
                         </View>


                    </View>
                    
                </View>
         </KeyboardAvoidingView>
      
     </ScrollView>
     </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          marginTop: dimensions.heightLevel2 * 0.9,
     },
     avator: {
          marginBottom : dimensions.heightLevel2
     },
     inputContainer: {
          width : dimensions.widthLevel3
     } ,
     textfield: {
          marginTop : 5
     },
     buttonSignIn: {
          marginTop: dimensions.heightLevel1,
          paddingVertical: 2,
          backgroundColor : colors.primary
     },
     buttonSignUp: {
          marginTop: dimensions.heightLevel1,
          paddingVertical: 2,
          backgroundColor : colors.black
     },
 
     apiButtonGroup: {
          marginTop : dimensions.heightLevel2
     },
     textLogin: {
          fontFamily: fontFamilies.bitterRegular,
          fontSize: fontSizes.fontBigger * 1.2,
          fontWeight: 'bold',
          marginBottom: 25,
          color : colors.primary
     }

});

export default LoginScreen
