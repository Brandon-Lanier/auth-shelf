import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'

function* getAbout() {
  const response = yield axios.get('https://baconipsum.com/api/?type=all-meat&paras=5&start-with-lorem=1&format=text');
  yield put({
    type: 'SET_ABOUT_INFO',
    payload: response.data,
  })
}

function* aboutSaga() {
  yield takeLatest('GET_ABOUT', getAbout);
}

export default aboutSaga;