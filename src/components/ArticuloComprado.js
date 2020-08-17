import React from 'react';

export class ArticuloComprado extends React.Component{

    constructor(props) {
        super();
        this.articulo = props.articulo;
    }

    render() {
        return (
            <article className="post2">
                <p>{ this.articulo.nombre }</p>
                {/*<div className="info">*/}
                {/*    Precio ${ this.articulo.precio }*/}
                {/*</div>*/}
            </article>
        );
    }
}
