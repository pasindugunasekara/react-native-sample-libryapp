import React , {useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView ,TouchableOpacity, Alert } from 'react-native';
import { TextInput , Button , Text  } from 'react-native-paper';
import { dimensions, fontFamilies, fontSizes, colors } from '../configurations/constant';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


const TableScreen = (props) => {
     const [tableHead, setTableHead] = useState(['ISBN', 'BOOK NAME', 'PUBLISHER', 'AUTHOR', 'UPDATE', 'DELETE']);
     const [tableData, setTableData] = useState([
          ['B001', 'ABCD', 'XXX3', 'ZZZ2', null, null],
          ['B002', 'ACCD', 'XXX1', 'ZZZ2', null, null],
          ['B003', 'ADCD', 'XXX2', 'ZZZ7', null, null],
          ['B004', 'ADCD', 'XXX2', 'ZZZ7', null, null],
     ])

    

     const deleteActionHandler = (index) => {
          Alert.alert(`This is row ${index + 1}   [DELETED]`);
     }

      const updateHandler = (index) => {
          Alert.alert(`This is row ${index + 1}   [UPDATED]`);
     }
     
     const element = (data, index, action) => {
          let actionHandler = (action === 'DELETE') ? deleteActionHandler : updateHandler;
           return(
                    <TouchableOpacity onPress={() => actionHandler(index)}>
                         <View style={styles.btn}>
                              <Text style={styles.btnText}>{action}</Text>
                         </View>
                    </TouchableOpacity>
               )
          };
     
     return (
               
               <View style={styles.containerX}>
               
                 <Text style={styles.textTitle}>Main section</Text>
                    <View style={{width : '90%' ,alignItems : 'center'}}>
                                 
                    <View style={{ width: '100%' }}>
                         <Text style={{ fontFamily: fontFamilies.ubuntuLightItalic, fontSize: fontSizes.fontLarge, color: colors.primary, marginVertical: 15, textAlign: 'left' }}>
                              Welcome Back! <Text> Adam,</Text></Text>
                    </View>
                         {/* button */}
                    <View style={{ width: '100%'  , alignItems : 'flex-end'}}>
                         <Button mode="contained" onPress={() =>  props.navigation.navigate('form')} style={{ marginVertical: 10 , width : '50%'}}>ADD NEW</Button>
                    </View>
                    
                         <ScrollView horizontal={true}>  
                              <View>
                                 <Table borderStyle={{borderColor: 'transparent', marginBottom : 20}}>
                                   <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                                   {
                                   tableData.map((rowData, index) => (
                                   <TableWrapper key={index} style={styles.row}>
                                        {
                                             rowData.map((cellData, cellIndex) => (
                                                  <Cell  key={cellIndex} data={(cellIndex === 4 || cellIndex === 5) ? element(cellData,cellIndex, cellIndex === 4 ? 'UPDATE' : 'DELETE' ) :  cellData } textStyle={styles.text}/>
                                        ))
                                        }
                                   </TableWrapper>
                                   ))
                                   }      
                                </Table>
                              </View>
                         </ScrollView>


                              
                    </View>

               </View>
     )
}


const styles = StyleSheet.create({
      containerX: {
          flex: 1,
          alignItems: 'center',
          marginTop: dimensions.heightLevel3,
     },
     row__cell : {},
     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
     head: { paddingVertical: 10, backgroundColor: '#808B97' },
     text: { marginVertical : 6 , width : 100 , justifyContent: 'center',  textAlign : 'center' },
     row: { flexDirection: 'row', backgroundColor: '#FFF1C1' , paddingVertical : 5 },
     btn: {  height: 25, backgroundColor: '#78B7BB',  borderRadius: 2 , paddingHorizontal : 10 , marginHorizontal : 10},
     btnText: { textAlign: 'center', color: '#fff' },
     textTitle: {
          fontFamily: fontFamilies.ubuntuMedium ,
          fontSize: fontSizes.fontBigger,
          marginBottom: 5,
          marginTop : 30,
          color: colors.primary,
          textAlign : 'center'
     },
     
});
export default TableScreen
