import { create } from 'apisauce'
import axios from 'axios'


const  apiClient = create({

    baseURL :'https://dummyjson.com'
    })

    apiClient.get('/products')

const ApiManger = axios.create({

baseURL :'https://dummyjson.com',
responseType:'json',
withCredentials:'true',

})


export default ApiManger;
