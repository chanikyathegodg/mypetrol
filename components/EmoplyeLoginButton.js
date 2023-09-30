import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../config/Colors'

const EmoplyeLoginButton = ({navigation}) => {
  return (
   
<TouchableOpacity 
        
        onPress={() =>
          navigation.navigate('EmployeeLogin')
        }


style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Employee Login</Text>
</TouchableOpacity>
  )
}

export default EmoplyeLoginButton