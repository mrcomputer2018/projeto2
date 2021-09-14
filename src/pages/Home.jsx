import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import api from '../services/api'

const Home = (props) => {
    const history = useHistory();

    const goToNewMessenger = () => {
        history.push('/cadastro');
    };

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

    /* useEffect(() => {
        setOptionSelected('')
        setOptionSelectedChannel('')
        setOptionSelectedTimers('')
    },[]) */
    
    return (
        <div className="home">
            <div className='div-subtitle'>
                <div className='subtitle'>
                    <h2>Mensagens</h2>
                </div>
                <div className='btn-subtitle'>
                    <button className="btn-simple">Limpa Tela</button>
                    <button className="btn-simple">Pesquisar</button>
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
                                {optionsTimer.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default Home;