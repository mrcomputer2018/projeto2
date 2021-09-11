import axios from "axios"

const api = axios.create({
    //* URL base do nosso serviço
    baseURL : 'http://localhost:3333/'
}) 
export default api;
