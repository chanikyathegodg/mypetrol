import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigation/AuthNavigation';
import AppNavigation from './Navigation/AppNavigation';
import AuthContext from './auth/context';



const App = () => {

const [user,setUser] =  React.useState({});


  return (
<AuthContext.Provider value={{ user,setUser }}>  
  <NavigationContainer>
  <AuthNavigation />
  
    </NavigationContainer>
    </AuthContext.Provider>  
  )
}

export default App