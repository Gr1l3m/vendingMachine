import React from 'react';

export class Articulo extends React.Component{

    constructor(props) {
        super();
        this.producto = props.producto;
    }

    render() {
        return (
            <article className="post">
                <p>{ this.producto.nombre }</p>
                <div className="info">
                    Precio ${ this.producto.precio }<br/>
                    Tiempo de preparación { this.producto.preparacion / 1000} seg.
                </div>
                <div className="interaction">
                    <a href="#" onClick={() => this.props.addItem()}>Comprar</a>
                </div>
            </article>
        );
    }
}