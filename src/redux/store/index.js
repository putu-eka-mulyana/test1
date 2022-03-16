import {createStore, combineReducers} from 'redux';
import addReducer from '../reducer/addReducer';

const rootReducer = combineReducers({list: addReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
