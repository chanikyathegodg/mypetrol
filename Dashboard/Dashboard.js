import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'
import Colors from '../config/Colors'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {


  return (
    
     
<View style={{flex:1,backgroundColor:'#ecf0f1'}}>
<View style={{flexDirection:'row',flex:1,
flexWrap:'wrap',alignContent:'center',
justifyContent:'center',paddingVertical:20}}>





<View style={{width:'47%',height:113,paddingHorizontal:12,marginTop:33}}

>
  <TouchableOpacity > 
  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="dashboard" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}>Product Details</Text>
</View>
</TouchableOpacity>
</View>




<View style={{width:'47%',height:113,paddingHorizontal:12,marginTop:33}}>
<TouchableOpacity
> 

  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="equalizer" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}>Tank Details</Text>
</View>


</TouchableOpacity>
</View>




<View style={{width:'47%',height:113,paddingHorizontal:12,marginTop:33}}>

<TouchableOpacity > 


  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="dvr" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}>Du Details</Text>
</View>
</TouchableOpacity>
</View>




<View style={{width:'47%',height:113,paddingHorizontal:12,marginTop:33}}>
  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="equalizer" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}>Reports</Text>
</View>
</View>




<View style={{width:'47%',height:113,paddingHorizontal:3,marginTop:33}}>
<TouchableOpacity> 

  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="face" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}> Employee Section </Text>
</View>
</TouchableOpacity>
</View>






<View style={{width:'47%',height:113,paddingHorizontal:4,marginTop:33}}>
<TouchableOpacity> 

  <View style={{borderColor:Colors.primary ,borderWidth:1,flexDirection:'column',padding:25,

  justifyContent:'center',alignContent:'center',alignItems:'center'
,borderRadius:7
}}>
    <IconButton icon="settings" size={30} color={Colors.primary}  />
<Text style={{fontSize:17,marginTop:11}}> Manager Options </Text>
</View>
</TouchableOpacity>
</View>








      </View>


      </View>
    
  )
}

export default Dashboard