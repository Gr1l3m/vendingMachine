import React from 'react';
import {connect} from "react-redux";

import {addItem} from "../actions/ventaActions";
import {Articulo} from "./Articulo";
import {ArticuloComprado} from "./ArticuloComprado";

class Home extends React.Component{

    constructor(props) {
        super();
        this.productos = props.productos;
    }

    render() {
        return (
            <div>
                <section className="row posts espacio-arriba linea-abajo">
                    <div className="col-md-6 col-md-offset-3">
                        <header><h3>Productos</h3></header>
                        { this.props.productos.map((producto) => <Articulo producto={producto} key={producto.id} addItem={() => this.props.addItem(producto.id, producto.nombre, producto.precio, producto.preparacion)}/>) }
                    </div>

                    <div className="col-md-6 col-md-offset-3">
                        <header><h3>Pedidos completados</h3></header>

                            { this.props.venta.articulo.map((articulo, id) => <ArticuloComprado key={id} articulo={articulo} />) }


                        <header>Total comprado</header>
                        $ {this.props.venta.total}

                    </div>

                </section>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        venta: state.venta
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id, nombre, precio, preparacion) => {
            dispatch( addItem(id, nombre, precio, preparacion) );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);