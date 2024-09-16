import "./Profile.css";
import { CollapsedProfile } from "../CollapsedProfile/CollapsedProfile";
import { ExpandedProfile } from "../ExpandedProfile/ExpandedProfile";
import { ButtonSwitchProfile } from "../ButtonSwitchProfile/ButtonSwitchProfile";
import { useState } from "react";

export function Profile(props) {
  let [isOpenProfile, setIsOpenProfile] = useState(true);

  function handleClick() {
    setIsOpenProfile(!isOpenProfile);
  }

  return (
    <div className="profile">
      {isOpenProfile ? (
        <CollapsedProfile {...props} />
      ) : (
        <ExpandedProfile {...props} />
      )}
      <div className="areaButtonSwitchProfile">
        <ButtonSwitchProfile
          isOpenProfile={isOpenProfile}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
