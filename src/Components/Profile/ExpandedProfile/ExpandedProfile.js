import "./ExpandedProfile.css";
import { Input } from "../Input/Input.js";
import { DeleteButton } from "../../ControlButtons/DeleteButton/DeleteButton.js";

export function ExpandedProfile(props) {
  return (
    <div className="expandedProfile">
      <form className="rowProfile">
        <Input data={props.name} id={props.id} field="name" placeholderData='#имя' titleData='#имя'/>
        <Input data={props.surname} id={props.id} field="surname" placeholderData='#фамилия' titleData='#фамилия'/>
        <Input data={props.patronymic} id={props.id} field="patronymic" placeholderData='#отчество' titleData='#отчество'/>
      </form>
      <form className="rowProfile">
        <Input data={props.telephone} id={props.id} field="telephone" placeholderData='#телефон' titleData='#телефон'/>
        <Input data={props.email} id={props.id} field="email" placeholderData='#e-mail' titleData='#e-mail'/>
        <Input
          data={props.levelDeveloper}
          id={props.id}
          field="levelDeveloper"
          placeholderData='#опыт' 
          titleData='#опыт'
        />
      </form>
      <div className="areaButtonDelete">
        <DeleteButton id={props.id}/>
      </div>
    </div>
  );
}
