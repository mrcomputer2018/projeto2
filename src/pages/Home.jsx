import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from 'react-router-dom'
import api from '../services/api'

const Home = (props) => {
    const history = useHistory();

    const goToNewMessenger = () => {
        history.push('/cadastro');
    };

    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        console.log("searchparams :" + searchParams)
    }, [location]);

    

    //* Iniciando estado
    const [ optionSelected, setOptionSelected ] = useState('')
    const [ optionSelectedChannel, setOptionSelectedChannel ] = useState('')
    const [ optionSelectedTimers, setOptionSelectedTimers ] = useState('')

    const [ options, setOptions ] = useState([])
    const [ optionsChannel, setOptionsChannel ] = useState([])
    const [ optionsTimer, setOptionsTimer ] = useState([])

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
                        <tr>
                            <td>abertura_conta</td>
                            <td>sms</td>
                            <td>15:00</td>
                            <td><button className='btn-gradient'>ver mensagem</button></td>
                        </tr>
                        <tr>
                            <td>fez_pix</td>
                            <td>sms</td>
                            <td>5:00</td>
                            <td><button className='btn-gradient'>ver mensagem</button></td>
                        </tr>
                        <tr>
                            <td>abertura_conta</td>
                            <td>whatsapp</td>
                            <td>17:00</td>
                            <td><button className='btn-gradient'>ver mensagem</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Home;