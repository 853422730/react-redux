export const _REQUEST = '_REQUEST'
export const _SUCCESS = '_SUCCESS'
export const _FAILURE = '_FAILURE'

export const Request = (resource, data) => ({
  type: _REQUEST,
  payload: { data },
  meta: {
    resource,
    thunk: `${resource}Create`,
  },
})

export const Success = (resource, detail, request, thunk) => ({
  type: _SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource,
    entities: resource,
  },
})

export const Failure = (resource, error, request, thunk) => ({
  type: _FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk,
  },
})

export const _READ_REQUEST = '_READ_REQUEST'
export const _READ_SUCCESS = '_READ_SUCCESS'
export const _READ_FAILURE = '_READ_FAILURE'

export const ReadRequest = (resource, params) => ({
  type: _READ_REQUEST,
  payload: { params },
  meta: {
    resource,
    thunk: `${resource}ListRead`,
  },
})

export const ReadSuccess = (resource, list, request, thunk) => ({
  type: _READ_SUCCESS,
  payload: list,
  meta: {
    request,
    thunk,
    resource,
    entities: resource,
  },
})

export const ReadFailure = (resource, error, request, thunk) => ({
  type: _READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    resource,
  },
})
