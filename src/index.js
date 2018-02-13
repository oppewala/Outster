import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducer'
import { addDate, addDateCategory } from './actions'

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));
store.dispatch(addDateCategory({ id: 1, description: 'Result of add category action' }));
store.dispatch(addDate({ categoryId: 1, description: 'Result of add date action' }));

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
