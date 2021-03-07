import React, {useState} from 'react';
import { View , StyleSheet , KeyboardAvoidingView , Text ,SafeAreaView, ScrollView } from 'react-native';
import { Avatar ,TextInput , Button } from 'react-native-paper';
import { dimensions, _getShadows, colors, fontFamilies, fontSizes, basicStyles } from '../configurations/constant';

const RegisterScreen = () => {


     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [nic, setNIC] = useState('');
     const [email, setEmail] = useState('');
     const [telephone, setTelephone] = useState('');


     return (

  <SafeAreaView>
               <ScrollView>




          <KeyboardAvoidingView>
               
               <View style={basicStyles.mainWrapper}>
                     <Text style={styles.textLogin}>Register Form</Text>
                         <View style={styles.inputContainer}>
                              
                                   <TextInput
                                        label="First Name"
                                        value={firstName}
                                        onChangeText={firstName => setFirstName(firstName)}
                                        mode={'outlined'}
                                        style={styles.textfield}
                                   />

                                   <TextInput
                                        label="Last Name"
                                        value={lastName}
                                        onChangeText={lastName => setLastName(lastName)}
                                        mode={'outlined'}
                                        style={styles.textfield}
                                  />
                                   
                                   <TextInput
                                        label="NIC"
                                        value={nic}
                                        onChangeText={nic => setNIC(nic)}
                                        mode={'outlined'}
                                        style={styles.textfield}
                                   />

                                   <TextInput
                                        label="E-mail"
                                        value={email}
                                        onChangeText={email => setEmail(email)}
                                        mode={'outlined'}
                                        style={styles.textfield}
                                   />
                                   
                                   <TextInput
                                        label="Telephone"
                                        value={telephone}
                                        onChangeText={telephone => setTelephone(telephone)}
                                        mode={'outlined'}
                                        style={styles.textfield}
                                   />
                         
                           <Button style={styles.buttonSave} mode="contained" onPress={() => console.log('Pressed')}>
                              SAVE
                         </Button>
                                   

                         </View>   
              </View>

                    </KeyboardAvoidingView>
                    

</ScrollView>
      </SafeAreaView>    

     )
}

const styles = StyleSheet.create({
      inputContainer: {
          width : dimensions.widthLevel3
     } ,
     textfield: {
          marginTop : 8
     },
     buttonSignIn: {
          marginTop: dimensions.heightLevel1,
          paddingVertical: 6,
          backgroundColor : colors.primary
     },

     apiButtonGroup: {
          marginTop : dimensions.heightLevel2
     },
     textLogin: {
          fontFamily: fontFamilies.bitterRegular,
          fontSize: fontSizes.fontBigger * 1.2,
          fontWeight: 'bold',
          marginBottom: 25,
          marginTop: 25,
          color : colors.primary
     },
     buttonSave: {
          marginTop: dimensions.heightLevel3,
          paddingVertical: 6,
          backgroundColor : colors.primary
     },
});

export default RegisterScreen
