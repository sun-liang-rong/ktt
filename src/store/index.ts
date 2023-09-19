import { legacy_createStore as createStore, combineReducers,applyMiddleware } from 'redux'
import auth from './auth/reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(
  combineReducers({auth}),
  applyMiddleware(thunk, logger)
)
export default store
// ReturnType是一个关键字 就是获取到函数返回值的类型
export type RootState = ReturnType <typeof store.getState>