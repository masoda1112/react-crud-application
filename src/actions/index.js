import axios from "axios"
import values from "redux-form/lib/values"
export const READ_EVENTS = "READ_EVENTS"
export const READ_EVENT = "READ_EVENT"
export const CREATE_EVENT = "CREATE_EVENTS"
export const DELETE_EVENT = "DELETE_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// rooturlにapiリクエスト送付
export const readEvents = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({type:READ_EVENTS, response});
}

export const postEvent = values => async dispatch =>{
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
    dispatch({type:CREATE_EVENT, response});
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response });

}

export const deleteEvent = id => async dispatch =>{
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({type:DELETE_EVENT, id});
}