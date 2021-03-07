import React, {useState} from 'react';
import { View , StyleSheet , KeyboardAvoidingView  ,SafeAreaView, ScrollView } from 'react-native';
import { TextInput , Button , Text } from 'react-native-paper';
import {dimensions , fontFamilies , fontSizes ,colors } from '../configurations/constant'


const FormScreen = () => {

     
     const [isbn, setBookCode] = useState('');
     const [name, setName] = useState('');
     const [publisher, setPublisher] = useState('');
     const [author, setAuthor] = useState('');

     return (

   <SafeAreaView>
               <ScrollView>


          <KeyboardAvoidingView>
               <View style={styles.container}>
                    <Text style={styles.textTitle}>Form section</Text>

                    <View style={styles.inputContainer}>
                        
                         <Text style={styles.headInputText}>ISBN</Text>
                         <TextInput
                              label="Book code"
                              value={isbn}
                              onChangeText={isbn => setBookCode(isbn)}
                              style={styles.textfield}
                         />
                         
                         <Text style={styles.headInputText}>Book Name</Text>
                         <TextInput
                              label="Book name"
                              value={name}
                              onChangeText={name => setName(name)}
                              style={styles.textfield}
                         />

                         <Text style={styles.headInputText}>Publisher name</Text>
                         <TextInput
                              label="Publisher"
                              value={publisher}
                              onChangeText={publisher => setPublisher(publisher)}
                              style={styles.textfield}
                         />

                         <Text style={styles.headInputText}>Author name</Text>
                         <TextInput
                              label="Author"
                              value={author}
                              onChangeText={author => setAuthor(author)}
                              style={styles.textfield}
                         />

                         <Button style={styles.buttonSave} mode="contained" onPress={() => console.log('Pressed')}>
                              Add
                         </Button>
                         
                      


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
          marginTop: dimensions.heightLevel2,
     },
     textTitle: {
          fontFamily: fontFamilies.ubuntuMedium ,
          fontSize: fontSizes.fontBigger,
          marginBottom: dimensions.heightLevel4,
          color : colors.primary
     },
     
     inputContainer: {
          width : dimensions.widthLevel3
     } ,
     textfield: {
          marginTop : 5
     },
     buttonSave: {
          marginTop: dimensions.heightLevel3,
          paddingVertical: 6,
          backgroundColor : colors.primary
     },
     headInputText: {
          fontFamily: fontFamilies.ubuntuRegular,
          color: 'rgba(0,0,0,0.6)',
          marginTop : 7
     }
});

export default FormScreen
