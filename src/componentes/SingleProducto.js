import React from 'react';
import './SingleProducto.css';
import Error from './Error';

const SingleProducto = (props) => {
    // console.log(props);
    // if(props.producto===undefined) return null;
    if(props.producto===undefined) return <Error />;
    // if(!props) return <Error />;

    const {imagen, nombre, precio, descripcion} = props.producto;
    return ( 
        <div className="info-producto">
            <div className="imagen">    
                <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
     );
}
 
export default SingleProducto;