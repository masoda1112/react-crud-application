import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({ count });

// 通常複数かかれる以下のように
// export default combineReducers({ count,x,y,z });