import "./ButtonSwitchProfile.css";
import downArrow from "../../images/down_arrow.svg";
import upArrow from "../../images/up_arrow.svg";

export default function ButtonSwitchProfile(props) {
  return (
    <button className="buttonSwitchProfile" onClick={props.handleClick}>
      <img className="images" src={props.isOpenProfile ? downArrow : upArrow} alt="" />
    </button>
  );
}
