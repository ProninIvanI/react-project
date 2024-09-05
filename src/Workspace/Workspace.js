import "./Workspace.css";
import Profile from "../Profile/Profile/Profile.js";
import AddButton from "../ControlButtons/AddButton/AddButton.js";
import { useSelector, useDispatch } from 'react-redux'

export default function Workspace() {
  const dataProfiles = useSelector((state) => state.dataProfiles);
  const dispatch = useDispatch();

  return (
    <div className="workspace">
      <div className="areaButton">
        <AddButton handleClickAddMen={() => dispatch({type: 'HANDLE_CLICK_ADD_MEN'})}/>
      </div>
      <div className="notepad">
        {dataProfiles.map((item, index) => (
          <Profile key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
