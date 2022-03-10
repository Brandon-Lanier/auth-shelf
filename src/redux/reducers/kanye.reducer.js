
const kanyeReducer = (state = '', action) => {
    
    if (action === 'SET_KANYE') {
        return action.payload;
    }
    return state;
}

export default kanyeReducer;