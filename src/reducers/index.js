import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import events from './events'

export default combineReducers({ events, form });

// 通常複数かかれる以下のように
// export default combineReducers({ count,x,y,z });