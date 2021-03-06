import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS } from "./actionTypes";

export function* fetchUser(action) {
    try {
        const user = yield call(axios.get, `http://localhost:5000/users/${action.payload.id}`);
        yield put({ type: FETCH_USER_SUCCESS, payload: { userData: user.data } })
    } catch (error) {
		yield put({ type: 'USERS_FAIL', payload: { error } })
    }
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USER, fetchUser)
}

export default function* userPageSagas() {
    yield all([
        watchFetchUser()
    ])
};