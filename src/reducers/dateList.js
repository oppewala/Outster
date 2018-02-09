export default(state = [], action) => {
    switch (action.type) {
        case 'ADD_DATE':
            return [...state, action.item];
        default:
            return state;
    }
}