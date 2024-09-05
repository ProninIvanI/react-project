//в этой ветке заменили на редукс

import React, { createContext, useState } from "react";
import { dataMen } from "./Data/DataMen";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [dataProfiles, setDataProfiles] = useState(() => {
    const profiles = localStorage.getItem('profiles');
    return profiles ? JSON.parse(profiles) : dataMen
  });

  const updateProfile = (id, field, value) => {
    const updatedProfiles = dataProfiles.map((profile) => {
      if (profile.id === id) {
        const cloneProfile = { ...profile };
        cloneProfile[field] = value;
        return cloneProfile;
      }
      return profile;
    });
    setDataProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const handleClickAddMen = () => {
    const newProfile = {
      id: "" + dataProfiles.length,
      surname: "",
      name: "",
      patronymic: "",
      telephone: "",
      email: "",
      levelDeveloper: "",
      applicationReview: "",
    };
    const newArrayProfiles = [...dataProfiles, newProfile];
    setDataProfiles(newArrayProfiles);
    localStorage.setItem('profiles', JSON.stringify(newArrayProfiles));
  };

  const handleClickDeleteMen = (id) => {
    const updateProfiles = dataProfiles.filter(
      (dataProfiles) => dataProfiles.id !== id
    );
    setDataProfiles(updateProfiles);
    localStorage.setItem('profiles', JSON.stringify(updateProfiles));
  };

  return (
    <ProfileContext.Provider
      value={{
        dataProfiles,
        updateProfile,
        handleClickAddMen,
        handleClickDeleteMen,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
