export function addItem(id,nombre,precio,preparacion) {
    return dispatch =>{
        setTimeout(() =>
            dispatch({
                type: "ADD",
                id: id,
                nombre: nombre,
                precio: precio
            }),preparacion);
    };
}
