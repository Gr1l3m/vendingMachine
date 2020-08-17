const ventaReducer = (state = {
    total: 0,
    articulo:[],
    lastValues: [],
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                total: state.total + action.precio,
                articulo: [...state.articulo, {id:action.id, nombre: action.nombre, precio: action.precio, preparacion:action.preparacion}]
            };
            console.log('AQUI'+state.articulo)
            break;
        case "ADD_FULFILLED":
            break;
        case "SUBTRACT":
            break;
        default:
            break;
    }
    return state;
};

export default ventaReducer;