
import React from 'react'

import {MaterialIcons} from '@expo/vector-icons'
import { StyleSheet, TextInput,View } from 'react-native';
import Colors from '../config/Colors';


 


export default InputText  = ({icon,...otherProps}) => {
  return (
    <View style={styles.contasiner}>

{icon && <MaterialIcons name={icon} size={20} color={Colors.white} style={{marginRight: 10}} />}
   
      <TextInput 
      {...otherProps} style={styles.TextInput}
      />
  
    </View>
   
  )
}
//react native input text remove placeholder on focus code



const styles = StyleSheet.create({

    contasiner:{
backgroundColor: Colors.primary,
borderWidth: 1,
width: '100%',
borderRadius: 25,
flexDirection: 'row',
padding: 15,
marginVertical: 10,
    },
    TextInput:{
        fontSize: 18,
        color:Colors.white,
        marginLeft: 10,
        width: 333,
    }
    
    
});