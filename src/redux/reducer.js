import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {reducer as form} from 'redux-form'
import authReducer, { moduleName as authName } from "../ducks/auth";

export default combineReducers({
  router,
  form,
  [authName]: authReducer,
});
