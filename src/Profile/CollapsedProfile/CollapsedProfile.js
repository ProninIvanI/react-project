import "./CollapsedProfile.css";
import { Input } from "../Input/Input.js";

export default function collapsedProfile(props) {
  return (
    <form className="collapsedProfile">
      <Input data={props.name} id={props.id} field='name'/>
      <Input data={props.surname} id={props.id} field='surname'/>
      <Input data={props.levelDeveloper} id={props.id} field='levelDeveloper'/>
    </form>
  );
}
