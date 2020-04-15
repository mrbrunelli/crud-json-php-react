import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost/crud-json-php-react/backend/',
})

export default api