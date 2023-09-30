
import React from 'react'
import Register from '../AuthScreens/Register';
import Login from '../AuthScreens/Login';
import Dashboard from '../Dashboard/Dashboard';
import Listing from '../Listing';


import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
    
    
     
    
    
    <Stack.Screen name="Login"   component={Login} />
    
    <Stack.Screen name="Listing"   component={Listing} />
    
       <Stack.Screen name="Register"   component={Register} />
       <Stack.Screen name="Dashboard"  options={{ 
        headerShown:true,headerTitleAlign: "center",
    }}  component={Dashboard} />
    
          
          </Stack.Navigator>  
  )
}

export default AuthNavigation