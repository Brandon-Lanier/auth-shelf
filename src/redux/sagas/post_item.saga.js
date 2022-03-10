const axios = require('axios');
const { takeLatest, put } = require("redux-saga/effects");

function* postItem(action) {
  yield axios.post('/api/shelf', action.payload);
  yield put({
    type: 'FETCH_ITEMS',
  })
}

function* postSaga() {
  yield takeLatest('POST_ITEM', postItem);
}

export default postSaga;