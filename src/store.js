import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { dataMen } from "./Data/DataMen";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const loadProfiles = () => {
  const profiles = localStorage.getItem('profiles');
  return profiles ? JSON.parse(profiles) : dataMen
}

const initialState = {
  dataProfiles: loadProfiles(),
}

const handleClickAddMen = (state) => {
  const newProfile = {
    id: "" + state.dataProfiles.length,
    surname: "",
    name: "",
    patronymic: "",
    telephone: "",
    email: "",
    levelDeveloper: "",
    applicationReview: "",
  };
  const newArrayProfiles = [...state.dataProfiles, newProfile];
  return {...state, dataProfiles: newArrayProfiles};
};

const updateProfile = (state, action) => {
  const {id, field, value} = action.payload;
  const updatedProfiles = state.dataProfiles.map((profile) => {
    if (profile.id === id) {
      const cloneProfile = { ...profile };
      cloneProfile[field] = value;
      return cloneProfile;
    }
    return profile;
  });
  return {...state, dataProfiles: updatedProfiles}
};

const handleClickDeleteMen = (state, action) => {
  const { id } = action.payload;
  const updateProfiles = state.dataProfiles.filter(
    (dataProfiles) => dataProfiles.id !== id
  );
  return {...state, dataProfiles: updateProfiles};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CLICK_ADD_MEN':
      return handleClickAddMen(state);
    case 'UPDATE_PROFILE':
      return updateProfile(state, action)
    case 'HANDLE_CLICK_DELETE_MEN':
      return handleClickDeleteMen(state, action)
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware()))

const persistor = persistStore(store);

export {store, persistor};