import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import api from "../services/api";
import Swal from 'sweetalert2'

const Cadastro = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
    };

    const [ id, setId ] = useState(23)
    const [ trigger, setTrigger ] = useState('')
    const [ channel, setChannel ] = useState('')
    const [ timer, setTimer ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleSubmit = async () => {
        const request = {
            "id": id,
            "channel": channel,
            "trigger": trigger,
            "timer": timer,
            "message": message
        }
        const response = await api.post('/messages/', request)
        if (response) {
            console.log("response ok")
            setId(id + 1)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cadastro salvo!!!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

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
                                    <input 
                                        type="text" required 
                                        onChange={(event) => setTrigger(event.target.value)}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-canal">Canal:</label>
                                <div>
                                    <input 
                                        type="text" required
                                        onChange={(event) => setChannel(event.target.value)}/>
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