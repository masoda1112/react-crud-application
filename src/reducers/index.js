import {combineReducers} from 'redux'
import events from './events'

export default combineReducers({ events });

// 通常複数かかれる以下のように
// export default combineReducers({ count,x,y,z });