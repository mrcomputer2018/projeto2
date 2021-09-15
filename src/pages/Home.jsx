import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import api from '../services/api'
import Swal from 'sweetalert2'

const Home = (props) => {
    const history = useHistory();

    const goToNewMessenger = () => {
        history.push('/cadastro');
    };

    
    //* Iniciando estado doos selects
    const [ optionSelected, setOptionSelected ] = useState('')
    const [ optionSelectedChannel, setOptionSelectedChannel ] = useState('')
    const [ optionSelectedTimers, setOptionSelectedTimers ] = useState('')

    const [ options, setOptions ] = useState([])
    const [ optionsChannel, setOptionsChannel ] = useState([])
    const [ optionsTimer, setOptionsTimer ] = useState([])

    //* Iniciando estado das tabelas
    const [ tables, setTables ] = useState('')
    const [td, setTd ] = useState([])

    //* Get em server
    const handleGetOptionsTriggers = async () => {
        try {
            const response = await api.get('/triggers')
            
            const optionsFormatted = response.data.map((item) => {
                return {
                    label: item.name,
                    value: item.id
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
            const response = await api.get('/channels')
            
            const optionsFormattedChannel = response.data.map((item) => {
                return {
                    label: item.name,
                    value: item.id
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

    const handleGetOptionsTimers = async () => {
        try {
            const response = await api.get('/messages')

            const optionsFormattedTimers = response.data.map((item) => {
                return {
                    label: item.timer,
                    value: item.timer
                }
            })
            setOptionsTimer(optionsFormattedTimers);
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Servidor falhou!!!'
            })
        }
    }

    //*GET para tabelas
    const handleGetTable = async () => {
        try {
            const response = await api.get('/messages')
            const tdFormatted = response.data.map((item) => {
                return {
                    trigger: item.trigger,
                    channel: item.channel,
                    timer: item.timer,
                    id: item.id,
                    message: item.message
                }
            })
            setTd(tdFormatted)
            console.log(td)

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Servidor falhou!!!'
            })
        }
    }

   //*consumindo a api
    useEffect(() => {
        handleGetOptionsTriggers()
    }, [])

    useEffect(() => {
        handleGetOptionsChannels()
    }, [])

    useEffect(() => {
        handleGetOptionsTimers()
    }, [])
    useEffect(() => {
        handleGetTable()
    }, [])
           
    return (
        <div className="home">
            <div className='div-subtitle'>
                <div className='subtitle'>
                    <h2>Mensagens</h2>
                </div>
                <div className='btn-subtitle'>
                    <button type='reset' className="btn-simple">Limpa Tela</button>
                    <button type='submit' className="btn-simple">Pesquisar</button>
                    <button className='btn-gradient' onClick={goToNewMessenger}>Nova Mensagem</button>
                </div>
            </div>
            
            <form className='home'>
                <div className="form-group">
                    <label htmlFor="select-gatilho">Gatilho:</label>
                    <div>
                        <select className="select-gatilho"
                            value={optionSelected} 
                            onChange={(event) => setOptionSelected(event.target.value)}>
                                <option value=""></option>
                                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="select-canal">Canal:</label>
                    <div>
                        <select className="select-canal"
                            value={optionSelectedChannel} 
                            onChange={(event) => setOptionSelectedChannel(event.target.value)}>
                                <option value=""></option>
                                {optionsChannel.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="select-timer">Timer:</label>
                    <div>
                        <select className="select-timer"
                            value={optionSelectedTimers} 
                            onChange={(event) => setOptionSelectedTimers(event.target.value)}>
                                <option value=""></option>
                                {optionsTimer.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>
            </form>

            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Gatilho</th>
                            <th>Canal</th>
                            <th>Tempo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {td.map(item => (
                            <tr key={item.id}>
                                <td>{item.trigger}</td>
                                <td>{item.channel}</td>
                                <td>{item.timer}</td>
                                <td><button className='btn-gradient table'>ver mensagem</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Home;