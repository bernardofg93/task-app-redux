import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { getStateLocalStorage, setStateLocalStorage } from '../utils/localStorage';

//localStorage
const localStorageState = getStateLocalStorage();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    localStorageState,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)

store.subscribe(() => {
    setStateLocalStorage({
        tasks: store.getState().task
    });
})