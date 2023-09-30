
import React, { useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from '../components/InputText'
import Colors from '../config/Colors'; 
import { Formik } from 'formik';
import  { user_login } from "../api/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login = ({navigation}) => {

  
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
  
user_login({

username:email,
password:password

}).then((result)=>{
  console.log(result)
  if(result.status == 200){

    AsyncStorage.setItem('AcessToken', result.data.token);
    
navigation.replace('Dashboard');

  }
}).catch(err=>{
console.log(err)

})


  };
  
   
  return (
    
    <Formik
    initialValues={{ email: '',password:'',sapcode:'' }}
    onSubmit={handleSubmit}
  >
       {({ handleChange, handleBlur, handleSubmit, values }) => (

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>
  

       



   <InputText
           

           autoCapitalize='none'
           autoCorrect={false}
      placeholder='Email'
      onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
      placeholderTextColor='white'

   style={{width:'100%'}}  icon='email' />
     
     <InputText 
     placeholder= 'Password'

     
     onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />


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
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Login</Text>
</TouchableOpacity>

            <Text  style={{fontSize: 16, fontWeight:'bold',fontWeight: 700}}>
              I'm a new user.{" "}
            </Text>
            <Text style={{
            color: Colors.primary,
            fontSize: 17,  
            fontWeight: 700   
          }} 
        

  >
              Create New Account
            </Text>


            

          
            <Text style={{
            color: Colors.danger,
            fontSize: 17,  
            marginTop:10,
            fontWeight: 700   
          }} 
        
          >
              Forgot Password
            </Text>
            

  </KeyboardAvoidingView>
  )}
  </Formik>
  
  )
}

export default Login