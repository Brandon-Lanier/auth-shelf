const axios = require('axios');
const { takeLatest, put } = require("redux-saga/effects");



function* getKanyeSaga() {
    takeLatest('GET_KANYE', getKanye);
}

function* getKanye() {
    try {
        // Get a random kanye quote from the interwebs.
        const kanyeQuote = yield axios.get('https://api.kanye.rest');
        
        yield put({type: 'SET_KANYE', payload: kanyeQuote.quote})
    } catch(error) {
        console.log('Error getting Kanye West', error);
    }
}

export default getKanyeSaga;

