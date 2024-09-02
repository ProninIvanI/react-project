import "./ExpandedProfile.css";
import { Input } from "../Input/Input.js";
import DeleteButton from '../../ControlButtons/DeleteButton/DeleteButton.js'

export default function ExpandedProfile(props) {
  return (
    <div className="expandedProfile">
      <form className="rowProfile">
        <Input data={props.name} id={props.id} field='name'/>
        <Input data={props.surname} id={props.id} field='surname'/>
        <Input data={props.patronymic} id={props.id} field='patronymic'/>
      </form>
      <form className="rowProfile">
        <Input data={props.telephone} id={props.id} field='telephone'/>
        <Input data={props.email} id={props.id} field='email'/>
        <Input data={props.levelDeveloper} id={props.id} field='levelDeveloper'/>
      </form>
      <div className="areaButtonDelete">
        <DeleteButton id={props.id}/>
      </div>
    </div>
  );
}
