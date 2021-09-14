import React from "react";
import { useHistory } from 'react-router-dom'

const Cadastro = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
    };

    return (
        <div className="cadastro">
            <div className='div-subtitle'>
                <div className='subtitle'>
                    <h3>Mensagens</h3>
                </div>
                <div className='btn-subtitle'>
                    <button className="btn-simple" onClick={goToHome}>Voltar</button>
                    <button className='btn-gradient'>Cadastrar</button>
                </div>
            </div>

            <form>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="select-gatilho">Gatilho:</label>
                        <div>
                            <input type="text" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="select-canal">Canal:</label>
                        <div>
                            <input type="text" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="select-timer">Timer:</label>
                        <div>
                            <input type="time" required/>
                        </div>
                    </div>
                </div>
                
                <div className="form-textarea">
                    <label htmlFor="select-textarea">Mensagem:</label>
                    <div className='textarea'>
                        <textarea name="textarea" id="" cols="100" rows="10"></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Cadastro;