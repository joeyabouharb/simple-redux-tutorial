import { createStore, applyMiddleware, compose  } from "redux";
import rootReducer from "../reducers/index";
import validatorHelper from "../helpers/validatorHelper";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(validatorHelper))
  );
export default store;