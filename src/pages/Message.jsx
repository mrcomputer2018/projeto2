import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
/* import Tabela from '../componente/Tabela' */
import api from '../services/api'
import Swal from 'sweetalert2'

const Home = (props) => {
    const history = useHistory();

    const goToNewMessenger = () => {
        history.push('/cadastro');
    };

    const viewModalMessage = (message) => {
        Swal.fire({
            title: 'Menssagem',
            text: `${message}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const limpaTela = () => {
        setOptionSelected('')
        setOptionSelectedChannel('')
        setOptionSelectedTimers('')
    }
    
    //* Iniciando estado doos selects
    const [ optionSelected, setOptionSelected ] = useState('')
    const [ optionSelectedChannel, setOptionSelectedChannel ] = useState('')
    const [ optionSelectedTimers, setOptionSelectedTimers ] = useState('')

    const [ options, setOptions ] = useState([])
    const [ optionsChannel, setOptionsChannel ] = useState([])
    const [ optionsTimer, setOptionsTimer ] = useState([])

    //* Iniciando estado das tabelas
    const [td, setTd ] = useState([])

    //* Get em server
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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Servidor inoperante!!!"
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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Servidor inoperante!!!"
            })
        }
    }

    const handleGetOptionsTimers = async () => {
        try {
            const response = await api.get('/messages/?_sort=timer&_order=asc')

            const optionsFormattedTimers = response.data.map(({ timer }) => {
                return {
                    label: timer,
                    value: timer
                }
            })
            setOptionsTimer(optionsFormattedTimers);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Servidor inoperante!!!"
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
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Erro ao filtrar dados!!!"
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
    }, [setOptionSelected])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await api.get(`/messages?trigger_like=${optionSelected}&channel_like=${optionSelectedChannel}&timer_like=${optionSelectedTimers}`)

        setTd(response.data)
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <div className='div-subtitle'>
                    <div className='subtitle'>
                        <h2>Mensagens</h2>
                    </div>
                    <div className='btn-subtitle'>
                        <button type='reset' className="btn-simple" onClick={limpaTela}>Limpa Campos</button>
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
            </form>

           <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Gatilho</th>
                            <th>Canal</th>
                            <th>Tempo</th>
                            <th>A????es</th>
                        </tr>
                    </thead>
                    <tbody>
                        {td.map(item => (
                            <tr key={item.id}>
                                <td>{item.trigger}</td>
                                <td>{item.channel}</td>
                                <td>{item.timer}</td>
                                <td>
                                    <button 
                                        className='btn-gradient table' 
                                        onClick={() => {viewModalMessage(item.message)}}>
                                            ver mensagem
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Home;