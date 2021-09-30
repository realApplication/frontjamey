import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from './middleware/thunk';
import bookData from './main';
let reducers = combineReducers({
   
    bookData:bookData

});


const store = () => {
    return createStore(reducers,applyMiddleware(thunk))
}

export default store();