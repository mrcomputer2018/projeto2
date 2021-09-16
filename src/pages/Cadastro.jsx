import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import api from "../services/api";
import Swal from 'sweetalert2'

const Cadastro = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
    };

    const [ optionTrigger, setOptionTrigger ] = useState('')
    const [ options, setOptions ] = useState([])
    const [ optionChannel, setOptionChannel ] = useState('')
    const [ optionsChannel, setOptionsChannel ] = useState([])
    const [ timer, setTimer ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleGetOptionsTriggers = async () => {
        try {
            const response = await api.get('/triggers/?_sort=name&_order=asc')
            
            const optionsFormatted = response.data.map(({ name }) => {
                return {
                    label: name,
                    value: name
                }
            })
            setOptions(optionsFormatted);
        
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Servidor falhou!!!'
            })
        }
    }

    const handleGetOptionsChannels = async () => {
        try {
            const response = await api.get('/channels/?_sort=name&_order=asc')
            
            const optionsFormattedChannel = response.data.map(({ name }) => {
                return {
                    label: name,
                    value: name
                }
            })
            setOptionsChannel(optionsFormattedChannel);
        
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Servidor falhou!!!'
            })
        }
    }

    //* Submissao do formulario de cadastro
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const request = {
                "id": Date.now(),
                "channel": optionChannel,
                "trigger": optionTrigger,
                "timer": timer,
                "message": message
            }

            await api.post('/messages/', request)

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cadastrado com sucesso!!!',
                showConfirmButton: false,
                timer: 2000
            })

            setOptionTrigger('')
            setOptionChannel('')
            setTimer('')
            setMessage('')

        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Erro ao cadastrar!!!',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    //* Carregando o options de triggers ao iniciar pagina
    useEffect(() => {
        handleGetOptionsTriggers()
    }, [])
    //* Carregando channels ao iniciar
    useEffect(() => {
        handleGetOptionsChannels()
    }, [])

    return (
        <div className="cadastro">
            <form onSubmit={handleSubmit}>
                <div className='div-subtitle'>
                    <div className='subtitle'>
                        <h2>Nova Mensagem</h2>
                    </div>
                    <div className='btn-subtitle'>
                        <button className="btn-simple" onClick={goToHome}>Voltar</button>
                        <button type='submit' className='btn-gradient'>Cadastrar</button>
                    </div>
                </div>

                <form>
                    <div className="container">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="select-gatilho">Gatilho:</label>
                                <div>
                                    <select className="select-gatilho"
                                        value={optionTrigger} 
                                        onChange={(event) => setOptionTrigger(event.target.value)}>
                                            <option value=""></option>
                                            {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-canal">Canal:</label>
                                <div>
                                    <select className="select-canal"
                                        value={optionChannel} 
                                        onChange={(event) => setOptionChannel(event.target.value)}>
                                            <option value=""></option>
                                            {optionsChannel.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-timer">Timer:</label>
                                <div>
                                    <input 
                                        type="text" required
                                        onChange={(event) => setTimer(event.target.value)}/>
                                </div>
                            </div>

                            <div className="form-textarea">
                                <label htmlFor="select-textarea">Mensagem:</label>
                                <div className='textarea'>
                                    <textarea 
                                        name="textarea" id="" cols="120" rows="12" required
                                        onChange={(event) => setMessage(event.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </form>
        </div>
    )
}
export default Cadastro;