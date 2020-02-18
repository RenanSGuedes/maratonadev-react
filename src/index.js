import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './index.css'

export default function App(){
    const [ state, toggle ] = useState(true);

    const { o, h, mt } = useSpring({from: {
        o: 0,
        h: 0,
        mt: -45
    },
        o: state ? 1 : 0,
        h: state ? 202 : 0,
        mt: state ? 0 : -45,
        config: {
            mass: 15,
            tension: 800,
            friction: 200
        }
    })

    return (
        <>
            <header>
                <h1>D<div className="o"><div className="shine"></div></div>E</h1>
                <h2>A sua doação importa</h2>
                <p>Até 3 vidas com 1 doação</p>
                <p>Mais de 30.000 doações são necessárias todos os dias</p>
                <p>Apenas 1,9% da população brasileira doa sangue</p>
                <button onClick={() => toggle(!state)}>Quero ajudar</button>
            </header>

            <animated.section className='form' style={{
                opacity: o.interpolate(o => `${o}`),
                height: h.interpolate(h => `${h}px`),
                marginTop: mt.interpolate(mt => `${mt}px`)
            }}>
                <h2>Entre na lista de doadores</h2>
                <form>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome Completo"
                    ></input>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="E-mail"
                    ></input>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Tipo Sanguíneo"
                    ></input>
                    <button>Quero ajudar</button>
                </form>
            </animated.section>

            <main>
                <h2>Últimos <span>doadores</span></h2>
                <section className="donors"> 
                    <div className="donor">
                        <div className="blood">AB+</div>
                        <p>Diego Fernandes</p>
                    </div>
                    <div className="donor">
                        <div className="blood">B+</div>
                        <p>Cleiton Souza</p>
                    </div>
                    <div className="donor">
                        <div className="blood">A+</div>
                        <p>Robson Marques</p>
                    </div>
                    <div className="donor">
                        <div className="blood">O+</div>
                        <p>Mayk Brito</p>
                    </div>
                </section>
            </main>

            <footer>Com <span role='img' aria-label='heart'>💜</span> Rocketseat</footer>
        </>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))