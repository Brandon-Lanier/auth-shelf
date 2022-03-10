const axios = require('axios');
const { takeLatest, put } = require("redux-saga/effects");



function* deleteItem(action) {
    try {
        //Sending the item to the server to delete
        yield axios.delete('/api/shelf', action.payload )
        yield put({type: 'FETCH_ITEM'})
    } catch(error) {
        console.log('Error in Delete Item Saga', error); 
    }
}

function* deleteItemSaga() {
    yield takeLatest({type: 'DELETE_ITEM', deleteItem})
}


export default deleteItemSaga;