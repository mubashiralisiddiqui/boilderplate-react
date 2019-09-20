

import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleWare from 'redux-saga';

// all reducers will be imported here
import { allReducers } from './reducers'

// import rootSaga from './middlewares'


// const sagaMiddleWare = createSagaMiddleWare()

// const middileWareEnhancer = compose(applyMiddleware(sagaMiddleWare))

const store = createStore(allReducers)

// sagaMiddleWare.run(rootSaga)


export default store
