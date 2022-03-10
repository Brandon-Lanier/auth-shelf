const axios = require('axios');
const { takeLatest, put } = require("redux-saga/effects");

/**
 * @param {Object} action - the body of the request to send
 * @param {string} action.description - Item description
 * @param {string} action.image_url - Image url of the item on the shelf
 */
function* postItem(action) {
  // send new item to the database
  yield axios.post('/api/shelf', action.payload);

  // run the fetchItems saga after uploading new item to the database
  yield put({
    type: 'FETCH_ITEMS',
  })
}

// saga route for using the saga in the application
function* postSaga() {
  yield takeLatest('POST_ITEM', postItem);
}

export default postSaga;