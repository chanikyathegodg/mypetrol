
import React, { useContext, useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from '../components/InputText'
import Colors from '../config/Colors'; 
import { Formik } from 'formik';
import authApi from "../api/auth";
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';
const Login = ({navigation}) => {


  const [loginFailed, setLoginFailed] = useState(false);

const {user,setUser} = useContext(AuthContext);


  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    console.log(result);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

   const userr = result.data;
 console.log(userr.token)
  // setUser(userr);             c      v   
  // navigation.navigate('Dashboard');
  };
  
   
  return (
    
    <Formik
    initialValues={{ username: '',password:'',sapcode:'' }}
    onSubmit={handleSubmit}
  >
       {({ handleChange, handleBlur, handleSubmit, values }) => (

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>
  

       



   <InputText
           

           autoCapitalize='none'
           autoCorrect={false}
      placeholder='Email'
      onChangeText={handleChange('username')}
           onBlur={handleBlur('username')}
           value={values.username}
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