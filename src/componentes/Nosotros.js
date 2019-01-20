import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_8.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quod consectetur! Earum, quis. Expedita unde ab, perspiciatis iste quos beatae aut non praesentium maiores similique esse magni! Saepe, nostrum eveniet autem ipsum voluptatem velit voluptas mollitia? Facere, atque! Incidunt sequi in totam repellat dignissimos soluta impedit odit obcaecati sunt nihil.</p>
                </div>
            </div>
        );
    }
}
 
export default Nosotros;