import React from "react";

const Cadastro = () => {
    return (
        <div className="cadastro">
            <div className='div-subtitle'>
                <div className='subtitle'>
                    <h3>Mensagens</h3>
                </div>
                <div className='btn-subtitle'>
                    <button className="btn-simple">Voltar</button>
                    <button className='btn-gradient'>Cadastrar</button>
                </div>
            </div>

            <form>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="select-gatilho">Gatilho:</label>
                        <div>
                            <select name="select-gatilho">
                                <option value="valor1"selected></option>
                                <option value="valor2">Tios</option>
                                <option value="valor3">Avós</option>
                                <option value="valor3">Padrinhos</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="select-canal">Canal:</label>
                        <div>
                            <select name="select-canal">
                                <option value="valor1"selected></option>
                                <option value="valor2">Tios</option>
                                <option value="valor3">Avós</option>
                                <option value="valor3">Padrinhos</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="select-timer">Timer:</label>
                        <div>
                            <select name="select-timer">
                                <option value="valor1"selected></option>
                                <option value="valor2">Tios</option>
                                <option value="valor3">Avós</option>
                                <option value="valor3">Padrinhos</option>
                            </select>
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