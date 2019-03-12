import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import ReduxToastr from 'react-redux-toastr'
import reduxThnuk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThnuk)));


ReactDOM.render(
    <Provider store={store}>
    <App />
    
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
  
    </Provider>,document.querySelector('#root')
);
