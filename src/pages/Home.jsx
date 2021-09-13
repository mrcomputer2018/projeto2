import React from "react"
import Header from "../componente/Header";
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className='div-subtitle'>
                <div className='subtitle'>
                    <h2>Mensagens</h2>
                </div>
                <div className='btn-subtitle'>
                    <button className="btn-simple">Pesquisar</button>
                    <button className='btn-gradient'>Nova mensagem</button>
                </div>
            </div>
            
            <form>
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
            </form>
            
        </div>
    )
}
export default Home;