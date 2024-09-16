import { dataMen } from "../../Data/DataMen";
import { v4 as uuid4 } from 'uuid';

const loadProfiles = () => {
  const profiles = localStorage.getItem("profiles");
  return profiles ? JSON.parse(profiles) : dataMen;
};

const initialState = {
  dataProfiles: loadProfiles(),
};

const handleClickAddMan = (state) => {
  const newProfile = {
    id: "" + uuid4(),
    surname: "",
    name: "",
    patronymic: "",
    telephone: "",
    email: "",
    levelDeveloper: "",
    applicationReview: "",
  };
  const newArrayProfiles = [...state.dataProfiles, newProfile];
  console.log(newArrayProfiles)
  return { ...state, dataProfiles: newArrayProfiles };
};

const updateProfile = (state, action) => {
  const { id, field, value } = action.payload;
  const updatedProfiles = state.dataProfiles.map((profile) => {
    if (profile.id === id) {
      const cloneProfile = { ...profile };
      cloneProfile[field] = value;
      return cloneProfile;
    }
    return profile;
  });
  return { ...state, dataProfiles: updatedProfiles };
};

const handleClickDeleteMan = (state, action) => {
  const { id } = action.payload;
  const updateProfiles = state.dataProfiles.filter(
    (dataProfiles) => dataProfiles.id !== id
  );
  return { ...state, dataProfiles: updateProfiles };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CLICK_ADD_MAN":
      return handleClickAddMan(state);
    case "UPDATE_PROFILE":
      return updateProfile(state, action);
    case "HANDLE_CLICK_DELETE_MAN":
      return handleClickDeleteMan(state, action);
    default:
      return state;
  }
};

export const updatedProfileAction = (id, field, value) => {
  return {
    type: "UPDATE_PROFILE",
    payload: { id, field, value },
  };
};

export const deleteProfileAction = (id) => {
  return {
    type: "HANDLE_CLICK_DELETE_MAN",
    payload: { id },
  };
};