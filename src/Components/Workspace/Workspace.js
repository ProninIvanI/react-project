import "./Workspace.css";
import { Profile } from "../Profile/Profile/Profile.js";
import { AddButton } from "../ControlButtons/AddButton/AddButton.js";
import { useSelector, useDispatch } from "react-redux";

export function Workspace() {
  const dataProfiles = useSelector((state) => state.dataProfiles);
  const dispatch = useDispatch();

  return (
    <div className="workspace">
      <div className="areaButton">
        <AddButton
          handleClickAddMan={() => dispatch({ type: "HANDLE_CLICK_ADD_MAN" })}
        />
      </div>
      <div className="notepad">
        {dataProfiles.map((item) => (
          <Profile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
