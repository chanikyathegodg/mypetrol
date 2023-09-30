
import React from 'react'

import Dashboard from '../Dashboard/Dashboard';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={Dashboard} />
  </Tab.Navigator> 
  )
}

export default AppNavigation