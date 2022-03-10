import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getShelfItems() {
    try {
        const shelfItems = yield axios.get('/api/shelf')
        console.log('items fetched from database', shelfItems);
        

    } catch (error) {

    }
}

function* getSaga() {
    yield takeLatest('FETCH_ITEMS', getShelfItems);
  }

export default getSaga