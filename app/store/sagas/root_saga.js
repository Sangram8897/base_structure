import { takeLatest, takeEvery } from 'redux-saga/effects'
import { handleGetConsent } from './request_handlers/home'

export function* watcherSaga() {
  yield takeLatest(getConsents.type, handleGetConsent)
  //yield takeEvery(getCommonPropertySuggest.type, handleCommonPropertySuggest)
}
