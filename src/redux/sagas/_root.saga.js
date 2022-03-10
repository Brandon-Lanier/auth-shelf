import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getSaga from './get.saga';
import postSaga from './post_item.saga';
import deleteItem from './delete.saga'
import updateSaga from './update_item.saga';
import aboutSaga from './about_text.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getSaga(),
    postSaga(),
    deleteItem(),
    updateSaga(),
    aboutSaga(),
  ]);
  
}
