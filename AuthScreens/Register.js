
import React, { useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from '../components/InputText'
import Colors from '../config/Colors';
import { Formik } from 'formik';

const Register = ({navigation}) => {

  const [isFocused, setIsFocused] = useState(false);

 

  return (
    
   <Formik
   initialValues={{phonenumber:'',email: '',password:'',reenterpassword:'',sapcode:'',
nameoftheoutlet:'' }}
   onSubmit={values => console.log(values)}
 >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>

    
   <InputText
         
         onChangeText={handleChange('phonenumber')}
           onBlur={handleBlur('phonenumber')}
           value={values.phonenumber}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder= 'PhoneNumber'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='phone' />


<InputText
          
          onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder='Email Id'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='email' />

     
     <InputText 

onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}

     placeholder='Password'
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />



     
<InputText 


onChangeText={handleChange('reenterpassword')}
           onBlur={handleBlur('reenterpassword')}
           value={values.reenterpassword}

     placeholder='Re-Enter Password'
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />




<InputText

onChangeText={handleChange('nameoftheoutlet')}
           onBlur={handleBlur('nameoftheoutlet')}
           value={values.nameoftheoutlet}


 placeholder= 'Name of the Outlet'
autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='assignment' />


<InputText placeholder='Sap Code'


 onChangeText={handleChange('sapcode')}
           onBlur={handleBlur('sapcode')}
           value={values.sapcode}


autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='qr-code' />







<TouchableOpacity 

onPress={handleSubmit} 
style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Sign Up</Text>
</TouchableOpacity>
 </KeyboardAvoidingView>
  )}
  </Formik>
  
  )
}

export default Register