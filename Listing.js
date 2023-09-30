import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';


const Listing = () => {

  const baseUrl = 'https://dummyjson.com/auth/login';


  // Passing configuration object to axios
  axios({
    method: 'get',
    url: `${baseUrl}/api/data`,
  }).then((response) => {
    console.log(response.data);
  });
  



  return (
    <View>
      <Text>Listing</Text>
    </View>
  )
}

export default Listing