import {READ_EVENTS, READ_EVENT ,CREATE_EVENT, DELETE_EVENT} from '../actions'
import {} from '../actions'
import _ from 'lodash'

// countステートを変化させる関数で発行されたアクションによって処理をswichする
export default (events = {},action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
            const data = action.response.data
            return {...events, [data.id]: data}
        case CREATE_EVENT:
            return _.mapKeys(action.response.data)
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events}
        default:
            return events
    }
}