const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar',
        done: true
    }, {
        _id: 2,
        description: 'Reuniao',
        done: false
    }, {
        _id: 3,
        description: 'Consuta',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case 'DESCRIPTION_CHANGE':
            return { ...state, description: action.payload}
        default:
            return state
    }
}