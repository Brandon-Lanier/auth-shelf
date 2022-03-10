import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

/**
 * @param {Object} action.payload - the body of the request to send
 * @param {number} action.payload.item_id - Item id
 * @param {string} action.payload.description - Item description
 * @param {string} action.payload.image_url - Image url of the item on the shelf
 */
function* updateItem(action) {
  const { item_id } = action.payload;
  yield axios.put(`/api.shelf/${item_id}`, action.payload)
  yield put({
    type: 'FETCH_ITEMS',
  })
}

function* updateSaga() {
  yield takeLatest('UPDATE_ITEM', updateItem);
}

export default updateSaga;