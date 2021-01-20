import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import EventsIndex from './components/events_index.js'
import EventsNew from './components/events_new.js'
import EventsShow from './components/events_show.js'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route ,Switch} from 'react-router-dom/cjs/react-router-dom.min'
import {composeWithDevTools} from 'redux-devtools-extension'
// import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer,enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path ="/events/new" component={EventsNew}/>
        <Route exact path ="/events/:id" component={EventsShow}/>
        <Route exact path ="/" component={EventsIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
