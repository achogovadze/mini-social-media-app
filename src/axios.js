import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/achogovadze/json-data',
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance
