import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';

//styles
import './index.css';
import './global.css';

//views
import SignIn from './views/SignIn/SignIn';
import Home from './views/Home/Home';
import NoMatch from './views/NoMatch/NoMatch';
import CreateAccount from './views/CreateAccount/CreateAccount';

//reducers
import userReducer from './store/User/reducer';
import todoReducer from './store/ToDos/reducer';

//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const reducers = combineReducers({userReducer, todoReducer});
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk));

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/todo.html" component={SignIn} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/create-an-account" component={CreateAccount} />
                    <Route path="/home" component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>, 
    document.getElementById('root'));
