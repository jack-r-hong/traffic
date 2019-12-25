import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import reduxThunk  from 'redux-thunk'

import rootreducer from '../reducers/index';

const logger = createLogger({
	
});



// export default createStore(
//   uiReducers,
//   applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
// );

export default createStore(
	rootreducer,
	applyMiddleware(reduxThunk,logger)
);