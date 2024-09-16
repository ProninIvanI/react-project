import "./ButtonSwitchProfile.css";
import downArrow from "../../../Images/down_arrow.svg";
import upArrow from "../../../Images/up_arrow.svg";

export function ButtonSwitchProfile(props) {
  return (
    <button className="buttonSwitchProfile" onClick={props.handleClick}>
      <img className="images" src={props.isOpenProfile ? downArrow : upArrow} alt="" />
    </button>
  );
}
