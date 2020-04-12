import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost/MatheusRicardoBrunelli/crud-react/backend/',
})

export default api