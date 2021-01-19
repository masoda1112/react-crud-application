import axios from "axios"
export const READ_EVENTS = "READEVENTS"
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// rooturlにapiリクエスト送付
export const readEvents = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({type:READ_EVENTS, response});
}