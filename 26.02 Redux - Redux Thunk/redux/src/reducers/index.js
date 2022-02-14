import changeNumber from './upDown'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeNumber:changeNumber

})

export default rootReducer