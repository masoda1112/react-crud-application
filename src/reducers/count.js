import {INCREMENT,DECREMENT} from '../actions'

// countステートを定義
const initialState = {value: 0};

// countステートを変化させる関数で発行されたアクションによって処理をswichする
export default (state = initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return{value: state.value + 1}
        case DECREMENT:
            return{value: state.value - 1}
        default:
            return state
    }
}