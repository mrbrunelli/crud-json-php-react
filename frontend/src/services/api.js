import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:80/MatheusRicardoBrunelli/crud-react/backend/',
})

export default api