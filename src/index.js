import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';

const logger = store => next => action => {
    let result = next(action);
    return result;
}
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  registerServiceWorker()
  