import { combineReducers, createStore } from 'redux'

import { systemReducer } from '@store/system/reducers'

const rootReducer = combineReducers({
    system: systemReducer,
})

const store = createStore(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
export type RootState = ReturnType<typeof rootReducer>
