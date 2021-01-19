import {READ_EVENTS} from '../actions'
import _ from 'lodash'

// countステートを変化させる関数で発行されたアクションによって処理をswichする
export default (state = {},action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return state
    }
}