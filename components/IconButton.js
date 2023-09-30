import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'


const IconButton = ({icon,size,color}) => {
  return (
    <View>
<MaterialIcons name={icon} size={size} color={color} style={{marginRight: 10,
 borderRadius: 0.5 * size,
 backgroundColor: '#ccc',
  padding: 10,
}} />
    </View>
  )
}

export default IconButton