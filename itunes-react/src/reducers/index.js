import loadingReducer from './loadingReducer';
import songsReducer from './songsReducer';
import songReducer from './songReducer';
import idReducer from './idReducer';
import errorReducer from './errorReducer';
import searchingReducer from './searchingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    songs: songsReducer,
    error: errorReducer,
    search: searchingReducer,
    song_id: idReducer,
    song: songReducer
});

export default rootReducer;
