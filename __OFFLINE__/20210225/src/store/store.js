import { createStore } from 'redux'

const initialState = {
  greeting: '안녕!! 리덕스~',
}

const reducer = (state, action) => {
  return state
}

const store = createStore(reducer, initialState) // {dispatch, getState, subscribe, replaceReducer}

export default store
