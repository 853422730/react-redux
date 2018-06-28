import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`, data)
    yield put(actions.Success(resource, detail, { data }, thunk))
  } catch (e) {
    yield put(actions.Failure(resource, e, { data }, thunk))
  }
}

export function* readResourceList(api, { params }, { resource, thunk }) {
  try {
    const list = yield call([api, api.get], `/${resource}`, { params })
    yield put(actions.ReadSuccess(resource, list, { params }, thunk))
  } catch (e) {
    yield put(actions.ReadFailure(resource, e, { params }, thunk))
  }
}


export function* watchResourceCreateRequest(api, { payload, meta }) {
  yield call(createResource, api, payload, meta)
}

export function* watchResourceListReadRequest(api, { payload, meta }) {
  yield call(readResourceList, api, payload, meta)
}


export default function* ({ api }) {
  // yield takeEvery(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api)
  // yield takeEvery(actions.RESOURCE_LIST_READ_REQUEST, watchResourceListReadRequest, api)
  // yield takeEvery(actions.RESOURCE_DETAIL_READ_REQUEST, watchResourceDetailReadRequest, api)
  // yield takeEvery(actions.RESOURCE_UPDATE_REQUEST, watchResourceUpdateRequest, api)
  // yield takeEvery(actions.RESOURCE_DELETE_REQUEST, watchResourceDeleteRequest, api)
}
