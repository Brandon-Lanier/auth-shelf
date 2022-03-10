const axios = require('axios');
const { takeLatest } = require("redux-saga/effects");

function* postItem(action) {
  const { user_id, } = action;
  yield axios.post()
}

function* postSaga() {
  yield takeLatest('POST_ITEM', postItem);
}

export default postSaga;