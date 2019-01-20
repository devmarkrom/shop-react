import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Error from './Error';
import Header from './Header';
import Contacto from './Contacto';
import Navegacion from './Navegacion';
import infoProductos from '../datos/datos.json';
import SingleProducto from './SingleProducto';

class Router extends Component {
    
    state = {
        productos : [],
        terminoBusqueda : ''
    }
    componentWillMount() {
        this.setState({
            productos : infoProductos
        })
    }

    busquedaProducto = (busqueda) => {
        if(busqueda.length > 3){
            this.setState({
                terminoBusqueda : busqueda
            })
        } else {
            this.setState({
                terminoBusqueda : ''
            })
        }
    }

    render() { 

        let productos = [...this.state.productos];
        let resultado;
        let busqueda = this.state.terminoBusqueda;
        
        if(busqueda !== '') {
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
            ))
        } else {
            resultado = productos;
        }

        return ( 
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navegacion />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos
                                productos={resultado}
                                busquedaProducto={this.busquedaProducto}
                            /> )} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/productos" render={() => (
                            <Productos
                                productos={resultado}
                                busquedaProducto={this.busquedaProducto}
                            />
                        )} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/producto/:productoId" render={(props) => {
                             let idProducto = props.location.pathname.replace('/producto/','');
                             console.log(idProducto);
                             return (
                                 <SingleProducto   
                                    producto={this.state.productos[idProducto]}
                                />
                             )
                            }} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;