import "./CollapsedProfile.css";
import { Input } from "../Input/Input.js";

export function CollapsedProfile(props) {
  return (
    <form className="collapsedProfile">
      <Input data={props.name} id={props.id} field='name' placeholderData='#имя' titleData='#имя'/>
      <Input data={props.surname} id={props.id} field='surname' placeholderData = '#фамилия' titleData='#фамилия'/>
      <Input data={props.levelDeveloper} id={props.id} field='levelDeveloper' placeholderData = '#опыт' titleData='#опыт'/>
    </form>
  );
}
