import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getShelfItems() {
    try {

    } catch (error) {

    }
}

function* loginSaga() {
    yield takeLatest('FETCH_ITEMS', getShelfItems);
  }

export default getSaga