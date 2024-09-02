import "./Workspace.css";
import Profile from "../Profile/Profile/Profile.js";
import AddButton from "../ControlButtons/AddButton/AddButton.js";
import { useContext } from "react"; 
import { ProfileContext } from "../ProfileContextProvider.js";

export default function Workspace() {
  const {dataProfiles, handleClickAddMen} = useContext(ProfileContext)

  return (
    <div className="workspace">
      <div className="areaButton">
        <AddButton handleClickAddMen={handleClickAddMen}/>
      </div>
      <div className="notepad">
        {dataProfiles.map((item, index) => (
          <Profile key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
